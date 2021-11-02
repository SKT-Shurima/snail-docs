### Git SSH

Git 统计代码行数：

- 根据用户名统计

  ```shell
  $ git log --author="username" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
  ```

- 按照一段时间来统计

  ```shell
  git log --since=2020-01-01 --until=2020-12-31 --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }'
  ```

- 根据用户名按照一段时间统计

  ```shell
  git log --author="username" --since=2018-10-01 --until=2018-12-31 --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
  ```

  