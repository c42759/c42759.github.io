Understanding how to check directory size in Linux is critical for managing storage space efficiently. Understanding this process is essential whether you’re assessing specific folder space or preventing storage issues.

## Using the `du` command

Using the `du` command, you can easily determine a directory’s size by displaying the disk space used by files and directories. The output can be customized to be presented in human-readable formats.

| Command | Description |
| :--- | :--- |
| `du -sh /path/to/directory` | Checks the size of a specific directory. The `-s` flag provides a summary, and `-h` makes it human-readable. |
| `sudo du -h /path/to/directory` | Checks the size of all files and directories within a specific path. |

## Using `ncdu`

If you’re looking for a more interactive and feature-rich approach to exploring directory sizes, consider using the `ncdu` (NCurses Disk Usage) tool. `ncdu` provides a visual representation of disk usage and allows you to navigate through directories, view size details, and identify large files with ease.

Here's how to install `ncdu`:

**On Debian or Ubuntu:**
```bash
sudo apt-get install ncdu
```

**On Fedora:**
```bash
sudo dnf install ncdu
```

Once installed, you can run `ncdu` by providing the path to the directory you want to analyze:
```bash
ncdu /path/to/directory
```

This will launch the `ncdu` interface, which shows a breakdown of file and subdirectory sizes. Use the arrow keys to navigate and explore various folders, and press `q` to exit the tool.

## Using `ls -la`

You can alternatively opt to use the `ls` command to list the files and directories within a directory natively. The options `-l` and `-a` modify the default behavior.

```bash
ls -la
```

The `-l` (long listing format) flag displays detailed information for each file and directory, while `-a` (all files) instructs `ls` to include all hidden files. This command is especially useful when you want to inspect file attributes along with their sizes on the disk.

By leveraging these commands, you can easily calculate and analyze directory sizes in your Linux environments.

Source: [How to Get Directory Size in Linux](https://gcore.com/learning/how-to-get-directory-size-linux)
