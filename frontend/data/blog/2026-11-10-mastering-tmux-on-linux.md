Terminal Multiplexer (`tmux`) is an indispensable tool for Linux developers, DevOps engineers, and system administrators. It allows you to run multiple terminal sessions inside a single window, detach from them without terminating background jobs, and reattach later from any machine or shell session.

Whether running hours-long database migrations over flaky SSH connections or arranging multi-pane development environments, mastering tmux fundamentals elevates productivity.

---

## 1. What is TMUX and Why Use It?

Standard shell sessions terminate as soon as the terminal window closes or the SSH link drops (due to `SIGHUP`). `tmux` acts as an independent client-server manager:

1. **Persistent Sessions**: Detaching leaves processes running undisturbed in the background.
2. **Window & Pane Management**: Split terminals horizontally and vertically into multiple simultaneous views.
3. **Multi-Client Pairing**: Multiple users or terminal windows can attach to the same running session in real time.

### Installation
On modern Linux distributions, install `tmux` via default package managers:

```bash
# Debian / Ubuntu / Mint
sudo apt update && sudo apt install -y tmux

# RHEL / Fedora / Rocky Linux
sudo dnf install -y tmux

# Arch Linux
sudo pacman -S tmux
```

---

## 2. Session Management: Attach and Detach Mode

`tmux` sessions exist independently of terminal windows. Understanding session lifecycle commands is essential.

### Starting Sessions
```bash
# Start a new unnamed session (assigned index 0, 1, 2...)
tmux

# Start a new session with a memorable name (recommended)
tmux new -s dev-server

# Start session and immediately launch a command
tmux new -s monitor "htop"
```

### Detaching from a Session
To leave a session running in the background without killing active jobs:
- Keyboard shortcut: Press `Ctrl+b`, release, then press `d`.
- Terminal command inside tmux:
  ```bash
  tmux detach
  ```

Once detached, you return to your parent terminal. All compilers, servers, and scripts inside tmux remain running.

### Listing Active Sessions
Check running sessions and window counts:
```bash
tmux ls
# Output:
# dev-server: 2 windows (created Tue Nov 10 09:00:00 2026)
# monitor: 1 windows (created Tue Nov 10 09:05:12 2026)
```

### Attaching to an Existing Session
Re-enter a detached session:
```bash
# Attach to the most recently active session
tmux attach

# Attach to a specific named session (short flag -t for target)
tmux attach -t dev-server
# Or using shortcut alias
tmux a -t dev-server
```

### Killing Sessions
When work is complete:
```bash
# Kill a specific session from outside tmux
tmux kill-session -t dev-server

# Kill all tmux sessions on the system
tmux kill-server
```

---

## 3. Essential TMUX Shortcuts

All standard tmux keybindings start with a **prefix key**. By default, this is:
> `Ctrl + b` (hold `Ctrl`, tap `b`, release both, then press command key)

### Window Management (Tabs)
Windows in tmux function like browser tabs across the bottom status bar.

| Shortcut | Action | Description |
|---|---|---|
| `Ctrl+b` `c` | **Create Window** | Opens a fresh shell tab |
| `Ctrl+b` `,` | **Rename Window** | Gives current window a descriptive name |
| `Ctrl+b` `n` | **Next Window** | Move to next window |
| `Ctrl+b` `p` | **Previous Window** | Move to previous window |
| `Ctrl+b` `0-9` | **Select Window** | Jump directly to window index (0, 1, 2...) |
| `Ctrl+b` `w` | **Window List** | Interactive tree-style selector for windows/sessions |
| `Ctrl+b` `&` | **Kill Window** | Closes active window and all panes inside |

### Pane Management (Splits)
Panes divide a single window into multiple tiled terminals.

| Shortcut | Action | Description |
|---|---|---|
| `Ctrl+b` `"` | **Horizontal Split** | Splits current pane top and bottom |
| `Ctrl+b` `%` | **Vertical Split** | Splits current pane left and right |
| `Ctrl+b` `Arrow Keys` | **Navigate Panes** | Move cursor focus between split panes |
| `Ctrl+b` `o` | **Cycle Panes** | Switch focus sequentially across panes |
| `Ctrl+b` `z` | **Toggle Zoom** | Maximizes current pane full-screen; repeat to unzoom |
| `Ctrl+b` `x` | **Close Pane** | Closes focused pane (prompts confirmation `y/n`) |
| `Ctrl+b` `!` | **Break Pane** | Converts focused pane into its own separate window |
| `Ctrl+b` `{` / `}` | **Swap Panes** | Swaps position of current pane with neighboring pane |

---

## 4. Enabling Mouse Interaction

By default, tmux requires keyboard shortcuts for pane switching, resizing, and scrolling. Enabling mouse mode dramatically improves workflow, allowing:
- Clicking inside a pane to focus it
- Dragging pane borders to resize
- Using mouse scroll wheel to view terminal history and copy buffer
- Clicking window tabs in the status bar to switch

### Temporary Enablement (Current Session)
Inside an active tmux session, enter command mode:
1. Press `Ctrl+b`, then type `:`.
2. Enter:
   ```tmux
   set -g mouse on
   ```
3. Press `Enter`. Mouse support activates immediately.

### Permanent Enablement (`~/.tmux.conf`)
To make mouse interaction default across all new sessions, configure `~/.tmux.conf`:

```bash
# Create or append to ~/.tmux.conf
cat << 'EOF' >> ~/.tmux.conf
# Enable full mouse control (tmux 2.1+)
set -g mouse on
EOF
```

If you have active sessions, reload the configuration file without restarting:
- In terminal:
  ```bash
  tmux source ~/.tmux.conf
  ```
- Or inside tmux: Press `Ctrl+b` `:`, type `source ~/.tmux.conf`, and press `Enter`.

> **Note on Text Copying with Mouse:**
> When `mouse on` is active, clicking and dragging selects text into tmux's internal buffer rather than your OS system clipboard. To copy text directly to your local OS clipboard with standard mouse selection, hold down `Shift` while selecting text with your mouse.

---

## 5. Productivity Cheatsheet

```text
Session Lifecycle:
  tmux new -s <name>       Create named session
  tmux ls                  List active sessions
  tmux a -t <name>         Attach to named session
  tmux kill-session -t <s> Terminate named session

Inside TMUX (Prefix = Ctrl+b):
  Prefix + d               Detach cleanly (leaves jobs running)
  Prefix + %               Split vertically (left | right)
  Prefix + "               Split horizontally (top / bottom)
  Prefix + z               Zoom / unzoom focused pane
  Prefix + c               New window (tab)
  Prefix + ,               Rename current window
  Prefix + n / p           Next / Previous window
  Prefix + [               Enter scroll / copy mode (q to quit)

Configuration (~/.tmux.conf):
  set -g mouse on          Enable mouse clicks, scrolling, resizing
```
