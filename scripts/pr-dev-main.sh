source=develop
target=main

gh pr create --base $target --head $source -t "$source -> $target" -b "$source -> $target"
