## window 常见命令

####  新增文件、文件夹

- 新增文件

  ```powershell
  
  ```

  

#### 删除文件、文件夹

- rd/s/q 盘符:\某个文件夹 （强制删除文件文件夹和文件夹内所有文件）

  ```powershell
  $ rd/s/q
  ```

- del/f/s/q 盘符:\文件名 （强制删除文件，文件名必须加文件后缀名）

  ```powershell
  $ del/f/s/q
  ```

####  window查看端口占用

- 查看所有进程占用端口

  ```powershell
  $ netstat -ano
  ```

- 查看指定端口程序

  ```powershell
  $ netstat -ano | findstr "8080"
  ```

- 杀死进程 `tasklist | findstr [进程号]`

  根据进程名称杀死进程： `taskkill /f /t /im [进程名称]`