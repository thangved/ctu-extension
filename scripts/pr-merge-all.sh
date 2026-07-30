for id in $(gh pr list --json number --jq '.[].number'); do
  gh pr merge "$id" --delete-branch
done