Whether you are troubleshooting a failing microservice, inspecting dropped packets, or automating remote backups, modern Linux administration leans heavily on a core set of command-line tools.

Here is a practical breakdown of 25 essential Linux commands, categorized by workflow, with practical flags and real-world examples.

---

## 1. Service & System Logs

### `systemctl`
Inspect and control `systemd` system and service manager units.

```bash
# Check status of Nginx service
systemctl status nginx

# Enable service at boot and start immediately
sudo systemctl enable --now docker
```

### `journalctl`
Query and inspect binary logs collected by `systemd-journald`.

```bash
# Follow logs for specific unit in real time (last 100 entries)
journalctl -u nginx.service -n 100 -f

# Show error-level logs from current boot
journalctl -b -p err
```

### `dmesg`
Print kernel ring buffer messages. Indispensable for tracking hardware events, disk controller errors, and Out Of Memory (OOM) killer terminations.

```bash
# Show human-readable timestamps and search for OOM killer invocations
sudo dmesg -T | grep -i -E "oom|out of memory|killed process"

# View recently attached storage devices
sudo dmesg -T | grep -i "attached"
```

---

## 2. Networking & Traffic Inspection

### `ss`
Modern socket statistics utility replacing legacy `netstat`. Dumps active TCP, UDP, and UNIX socket information with process bindings.

```bash
# Show listening TCP/UDP sockets with numeric ports and owning process
sudo ss -tulnp

# Show established connections targeted at HTTPS port 443
ss -tn state established '( dport = :443 )'
```

### `ip`
Configure network devices, interface IPs, routing tables, and ARP neighbors (replaces `ifconfig` and `route`).

```bash
# List all network interfaces and assigned IPs in concise format
ip -br addr show

# View routing table and default gateway
ip route show
```

### `ping`
Check network layer reachability and latency between hosts using ICMP echo requests.

```bash
# Send 4 ICMP requests with 1-second timeout
ping -c 4 1.1.1.1

# Ping through explicit network interface
ping -c 3 -I eth0 192.168.1.1
```

### `tcpdump`
Packet analyzer capturing raw network frames matching Berkeley Packet Filter (BPF) syntax.

```bash
# Capture 20 packets on eth0 on port 80 or 443 without DNS resolution
sudo tcpdump -i eth0 -nn -c 20 "port 80 or port 443"

# Save network traffic to PCAP file for Wireshark inspection
sudo tcpdump -i eth0 -w /tmp/traffic.pcap "tcp port 22"
```

---

## 3. Storage & Filesystem Management

### `df`
Report filesystem disk space usage and inode availability.

```bash
# View disk usage in human-readable sizes (GB/MB) with filesystem types
df -hT

# Check inode consumption (crucial when disk shows full but space is available)
df -hi
```

### `du`
Estimate file and folder space usage recursively.

```bash
# Find 10 largest subdirectories inside /var/log
sudo du -h --max-depth=1 /var/log | sort -hr | head -n 10

# Total summarized size of single directory
du -sh /var/lib/docker
```

### `lsblk`
List block devices in a clear tree hierarchy, showing disks, partitions, mount points, and UUIDs.

```bash
# List block devices with filesystem types and mount points
lsblk -f

# Output custom columns including sizes and UUIDs
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINT,UUID
```

### `mount`
Attach storage devices and partitions to specific mount points in the filesystem tree.

```bash
# Mount ext4 partition as read-only
sudo mount -o ro /dev/sdb1 /mnt/data

# Remount root partition in read-write mode
sudo mount -o remount,rw /
```

### `fdisk`
Disk partition table manipulator for MBR and GPT partition layouts.

```bash
# List partitions on specific drive non-interactively
sudo fdisk -l /dev/nvme0n1

# Launch interactive partition editor on disk
sudo fdisk /dev/sdb
```

---

## 4. Performance & System Monitoring

### `free`
Display physical RAM and swap memory allocation.

```bash
# Human-readable wide format showing buffers and cache breakdown
free -m -w

# Memory summary in gigabytes
free -h --total
```

### `vmstat`
Report virtual memory, processes, CPU utilization, I/O wait, and paging statistics.

```bash
# Sample system stats every 2 seconds for 5 intervals with timestamp
vmstat -t 2 5

# Display memory stats in megabytes
vmstat -S M
```

### `lsof`
List open files, process descriptors, Unix pipes, and network sockets.

```bash
# Find which process is listening on or using port 8080
sudo lsof -i :8080

# List files opened by specific user
sudo lsof -u www-data
```

### `uptime`
Display current time, running uptime duration, active user sessions, and 1-, 5-, and 15-minute load averages.

```bash
# Standard uptime and load averages
uptime

# Pretty duration output
uptime -p
```

---

## 5. User & Account Administration

### `useradd`
Low-level command to provision new user accounts.

```bash
# Create user with home directory, default bash shell, and supplementary groups
sudo useradd -m -s /bin/bash -G sudo,docker deployer
```

### `usermod`
Modify configuration attributes of existing user accounts.

```bash
# Append user to supplementary group without removing existing groups (-aG)
sudo usermod -aG docker ubuntu

# Lock user account to prevent login
sudo usermod -L baduser
```

### `passwd`
Update and manage user authentication passwords.

```bash
# Set password for specified user
sudo passwd deployer

# Force user to change password on next interactive login
sudo passwd -e deployer
```

### `chage`
Configure password aging and account expiration policies.

```bash
# View password expiration and warning status
sudo chage -l deployer

# Require password rotation every 90 days with 7-day advance warning
sudo chage -M 90 -W 7 deployer
```

---

## 6. Automation, Remote Access & Transfers

### `crontab`
Schedule recurring background cron jobs.

```bash
# Edit active user's cron table
crontab -e

# Example schedule entry: run daily backup at 02:30 AM
# 30 2 * * * /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1

# List active scheduled jobs
crontab -l
```

### `rsync`
Fast remote and local file-synchronization tool utilizing a delta-transfer algorithm.

```bash
# Sync local directory to remote host with archive mode, compression, and progress
rsync -avzP --delete /var/www/html/ deployer@192.168.1.10:/var/www/html/

# Perform dry run before executing changes
rsync -avzPn /src/ /dest/
```

### `ssh`
Secure Shell client for encrypted terminal sessions and remote execution.

```bash
# Connect using specific SSH key and custom port
ssh -i ~/.ssh/prod_key.pem -p 2222 admin@app.example.com

# Execute remote command non-interactively
ssh admin@app.example.com "systemctl status postgresql"
```

### `scp`
Copy files between hosts securely over SSH transport.

```bash
# Upload local file to remote server
scp -P 2222 ./nginx.conf admin@app.example.com:/etc/nginx/nginx.conf

# Recursively download remote directory
scp -r admin@app.example.com:/var/log/app/ ./local_logs/
```

---

## 7. Security & Firewall

### `ufw`
Uncomplicated Firewall — simplified management interface for Linux netfilter (`iptables`/`nftables`).

```bash
# Set default policies and enable firewall
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable

# Allow SSH and HTTPS traffic
sudo ufw allow OpenSSH
sudo ufw allow 443/tcp

# View active firewall rules with index numbers
sudo ufw status numbered
```

---

## Summary Matrix

| Category | Commands | Common Use Case |
| :--- | :--- | :--- |
| **Services & Logs** | `systemctl`, `journalctl`, `dmesg` | Manage daemons, inspect service & kernel boot messages |
| **Networking** | `ss`, `ip`, `ping`, `tcpdump` | Sockets, network routing, packet capture & latency |
| **Storage** | `df`, `du`, `lsblk`, `mount`, `fdisk` | Disk capacity, tree sizes, block mapping & partition edits |
| **Performance** | `free`, `vmstat`, `lsof`, `uptime` | Memory tracking, I/O bottlenecks, open descriptors |
| **User Administration** | `useradd`, `usermod`, `passwd`, `chage` | User creation, group membership, password aging rules |
| **Automation & Remote** | `crontab`, `rsync`, `ssh`, `scp` | Scheduled tasks, delta backups, remote access |
| **Security** | `ufw` | Host port filtering & inbound rule configuration |
