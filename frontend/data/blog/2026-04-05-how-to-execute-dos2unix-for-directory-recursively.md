When working with files originating from Windows environments, you might encounter issues due to CRLF (Carriage Return & Line Feed) line endings. Converting these to LF (Line Feed) is essential for compatibility with Linux and Unix-like operating systems. The tool of choice for this is `dos2unix`.

Here is how you can use `dos2unix` to recursively format files in a directory.

## Basic Usage

To recursively find all files in the current directory and call the `dos2unix` command on them:

```bash
find . -type f -exec dos2unix {} \;
```

*Note: The command above might break if you have spaces in your file names.*

## Handling Spaces in File Names

If your file names contain spaces, securely handle them using the following command:

```bash
find . -type f -print0 | xargs -0 dos2unix
```

## Convert Specific File Types

If you need to convert only specific extensions, such as `*.php` files, you can filter them like this:

```bash
find . -type f -name "*.php" -print0 | xargs -0 dos2unix
```

## Multi-processor Execution

For large directories, you can drastically speed up the conversion process by running the command with multiple processors using `xargs`:

```bash
find . -type f -print0 | xargs -0 -n 1 -P 4 dos2unix
```

*This specific setup passes 1 file at a time, utilizing up to 4 parallel processors.*


Source: [How to execute dos2unix for directory recursively](https://gist.github.com/thaihust/b71f1174d09e844f943fabd81f5c7e71)
