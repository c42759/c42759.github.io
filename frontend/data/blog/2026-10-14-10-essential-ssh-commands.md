Secure Shell (SSH) is the standard cryptographic protocol for administering remote Linux systems, deploying services, and securely passing data across untrusted networks. While a basic connection takes only seconds to establish, mastering SSH's full toolset—key generation, remote identity deployment, tunneling, jump hosts, and debugging—dramatically improves speed and security.

Here is a practical breakdown of the 10 essential SSH commands, complete with flags and real-world examples.

---

## 1. Connect to a Remote Host
```bash
ssh user@host
```

The foundational SSH command opens an encrypted interactive terminal session on a remote server running an SSH daemon (`sshd`). By default, SSH resolves `host`, initiates a cryptographic handshake over standard TCP port 22, and prompts for credentials or verifies your default public key (`~/.ssh/id_ed25519` or `~/.ssh/id_rsa`).

```bash
# Connect to remote VPS as user 'ubuntu'
ssh ubuntu@203.0.113.10

# Connect using fully qualified domain name (FQDN)
ssh deployer@prod-app.company.internal
```

---

## 2. Connect Using a Custom Port
```bash
ssh -p 2222 user@host
```

Default port 22 is constantly targeted by automated internet scanners and brute-force bots. Hardening SSH setups often involves changing `Port 22` in `/etc/ssh/sshd_config` to an alternate high port (e.g., `2222` or `5022`). The `-p` flag specifies which TCP port the client connects to.

```bash
# Connect to hardened SSH daemon listening on port 2222
ssh -p 2222 sysadmin@server.example.com

# Execute command remotely on non-standard port without opening interactive shell
ssh -p 2222 sysadmin@server.example.com "uptime && free -h"
```

---

## 3. Specify an Identity / Private Key File
```bash
ssh -i /path/key user@host
```

When managing multiple cloud environments (AWS EC2 keypairs, personal GitHub keys, staging and production servers), the default keys in `~/.ssh/` may not match or you may hit the `Too many authentication failures` limit. The `-i` flag forces the SSH client to use an explicit private key file.

> **Security Note:** Private keys must have restrictive permissions (`chmod 600 /path/to/key`), or the SSH client will refuse to use them.

```bash
# Set strict permissions on downloaded cloud key
chmod 600 ~/.ssh/aws_ec2_production.pem

# Connect using explicit identity file
ssh -i ~/.ssh/aws_ec2_production.pem ubuntu@ec2-54-210-10-5.compute-1.amazonaws.com
```

---

## 4. Generate an SSH Key Pair
```bash
ssh-keygen
```

Password-based authentication is vulnerable to credential stuffing and brute-force attacks. `ssh-keygen` generates a cryptographic key pair consisting of a private key (kept secret on your local machine) and a public key (placed on servers you want to access).

Modern best practice favors **Ed25519** over RSA: it provides superior security, faster handshakes, and shorter key sizes.

```bash
# Generate high-security Ed25519 key pair with comment/label
ssh-keygen -t ed25519 -C "developer@laptop-2026" -f ~/.ssh/id_ed25519

# Generate traditional 4096-bit RSA key (for legacy server compatibility)
ssh-keygen -t rsa -b 4096 -C "service-account@legacy-system"
```

---

## 5. Install Public Key on Remote Host
```bash
ssh-copy-id user@host
```

Once you generate a key pair, your public key (`~/.ssh/id_ed25519.pub`) must be appended to `~/.ssh/authorized_keys` on the remote server. Instead of manually copying, pasting, and configuring directory permissions, `ssh-copy-id` handles this automatically in a single command.

```bash
# Install default public key to remote host
ssh-copy-id deployer@192.168.1.100

# Install specific public key on server using custom port
ssh-copy-id -i ~/.ssh/id_ed25519.pub -p 2222 deployer@prod.example.com
```

---

## 6. Copy Files Securely Over SSH (SCP)
```bash
scp file user@host:/path
```

`scp` (Secure Copy Protocol) uses the SSH transport layer and authentication mechanisms to transfer files and directories between machines. It operates non-interactively, making it ideal for build pipelines, deployment scripts, or quick configuration drops.

```bash
# Copy local configuration file to remote directory
scp ./nginx.conf ubuntu@app.example.com:/tmp/nginx.conf

# Recursively download remote directory to local current folder
scp -r ubuntu@app.example.com:/var/log/nginx/ ./local_nginx_logs/
```

---

## 7. Interactive Secure File Transfer (SFTP)
```bash
sftp user@host
```

Unlike `scp`, which performs a one-shot copy, `sftp` opens an interactive FTP-like shell over SSH. It allows you to navigate remote directories (`ls`, `cd`, `pwd`), navigate local directories (`lls`, `lcd`, `lpwd`), and upload (`put`) or download (`get`) files on demand.

```bash
# Start interactive SFTP session on port 2222
sftp -P 2222 developer@files.example.com

# Common SFTP session commands:
# sftp> ls -la                  # List remote files
# sftp> get backup.sql.gz       # Download remote file
# sftp> put release.tar.gz      # Upload local file
# sftp> exit                    # Close session
```

---

## 8. Port Forwarding & Reverse Tunneling (-L, -R)
```bash
# Local port forwarding
ssh -L 8080:host:80 user@host

# Remote (reverse) port forwarding
ssh -R 9000:localhost:3000 user@host
```

SSH supports bidirectional port forwarding:
- **Local Forwarding (`-L [LOCAL_PORT]:[DEST_HOST]:[DEST_PORT]`)**: Routes connections from a local port on your machine to a destination reachable by the remote SSH server. Ideal for accessing remote private databases or internal dashboards.
- **Remote / Reverse Forwarding (`-R [REMOTE_PORT]:[DEST_HOST]:[DEST_PORT]`)**: Routes connections hitting a port on the remote server back to a local service running on your machine. Ideal for sharing local dev servers or testing incoming webhooks.

### Examples

```bash
# 1. Access remote PostgreSQL (5432) locally on port 15432
ssh -N -f -L 15432:localhost:5432 admin@db-server.internal

# 2. Expose local dev server (port 3000) on remote server's port 9000
ssh -N -f -R 9000:localhost:3000 deployer@public-server.com

# 3. Forward multiple distinct ports in one command
# (Local 8080->web:80, Local 5432->db:5432, Remote 9000->local 3000)
ssh -N -f \
  -L 8080:web.internal:80 \
  -L 5432:db.internal:5432 \
  -R 9000:localhost:3000 \
  deployer@bastion.internal

# 4. Forward a range of ports (e.g., 8000-8005) via bash brace expansion
ssh -N -f $(for p in {8000..8005}; do printf -- "-L %s:localhost:%s " "$p" "$p"; done) deployer@target.internal
```

> [!NOTE]
> For reverse tunnels (`-R`) accessible to external machines (not just localhost on remote host), ensure `GatewayPorts yes` is set in `/etc/ssh/sshd_config` on the remote server. For broad port ranges, consider Dynamic Forwarding (`ssh -D 1080 user@host`) with SOCKS5.


---

## 9. Jump Host / Bastion Routing
```bash
ssh -J jump@host target@host
```

Production infrastructure often isolates internal database and application nodes in private subnets with no public IP. The only way in is through a hardened bastion or "jump" host.

The `-J` flag automatically tunnels your connection through the jump host to the target machine in a single step, eliminating the need for agent forwarding or manual multi-hop proxy chains.

```bash
# Connect to private subnet instance (10.0.1.25) through public bastion (bastion.example.com)
ssh -J ec2-user@bastion.example.com ubuntu@10.0.1.25

# Multi-hop jump chaining (Bastion 1 -> Bastion 2 -> Target)
ssh -J user@jump1.com,user@jump2.com user@secure-internal.lan
```

---

## 10. Debug Connection and Handshake
```bash
ssh -v user@host
```

When an SSH connection fails, drops, or hangs at authentication ("Permission denied (publickey)"), the `-v` (verbose) flag shows every step of the connection lifecycle: DNS resolution, cipher negotiation, identity file loading, server host key checking, and authentication acceptance/rejection.

You can increase verbosity up to three levels (`-v`, `-vv`, `-vvv`) for deep protocol inspection.

```bash
# Standard verbose output to see which keys are offered to the server
ssh -v admin@staging.example.com

# Maximum debugging verbosity for diagnosing authentication failures
ssh -vvv -i ~/.ssh/id_ed25519 admin@broken-server.example.com
```

---

## Summary Matrix

| Command | Key Flag | Primary Use Case |
| :--- | :--- | :--- |
| `ssh user@host` | Default | Standard interactive terminal session |
| `ssh -p <port>` | `-p` | Connect to non-default SSH daemon port |
| `ssh -i <key>` | `-i` | Explicit private key specification |
| `ssh-keygen` | `-t ed25519` | Generate asymmetric cryptographic key pairs |
| `ssh-copy-id` | `-i <pubkey>` | Install public key for passwordless login |
| `scp <src> <dest>` | `-r`, `-P` | Scriptable one-shot encrypted file copy |
| `sftp user@host` | `-P` | Interactive FTP-style file management over SSH |
| `ssh -L <ports>` | `-L`, `-N`, `-f` | Local port forwarding / private service tunneling |
| `ssh -J <jump>` | `-J` | Transparent routing through bastion / jump servers |
| `ssh -v` | `-v`, `-vvv` | Verbose troubleshooting for key negotiation errors |
