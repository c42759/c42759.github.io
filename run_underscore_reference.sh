#!/bin/bash

# 1st param is the folder to use.
# 2nd param is the text to search for
# 3rd param is the text to replace with

if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <folder> <search_text> <replace_text>"
    exit 1
fi

FOLDER="$1"
SEARCH="$2"
REPLACE="$3"

echo "Cycle 1: Replacing text '$SEARCH' with '$REPLACE' inside all files in '$FOLDER'..."
# We use standard sed with | as the delimiter.
find "$FOLDER" -type f -exec sed -i "s|${SEARCH}|${REPLACE}|g" {} +

echo "Cycle 2: Renaming files and folders containing '$SEARCH' to '$REPLACE' in '$FOLDER'..."
# -depth is used so that directory contents are processed before the directory itself.
while IFS= read -r -d '' item; do
    dir=$(dirname "$item")
    base=$(basename "$item")
    
    # This automatically finds and replaces all occurrences of SEARCH 
    # even if it's just a part of the file/folder name
    new_base="${base//"$SEARCH"/"$REPLACE"}"
    
    if [ "$base" != "$new_base" ]; then
        mv "$item" "$dir/$new_base"
        echo "Renamed $item -> $dir/$new_base"
    fi
done < <(find "$FOLDER" -depth -name "*${SEARCH}*" -print0)

echo "Done!"
