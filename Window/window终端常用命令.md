## window 常见命令

####  新增文件、文件夹

- 新增文件夹

  ```powershell
  $ mkdir  wenjianjia
  $ md wenjianjia
  ```
  
- 新建文件

  ```powershell
  $ type nul > wenjianming
  ```

- 新建非空文件

  ```powershell
  $ echo var name = "zhangsan"; > test.js
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

#### 拷贝

- 拷贝**本地文件**至服务器根目录下

  ```bash
  scp test.txt root@192.168.1.127:/
  ```

- 拷贝**本地文件夹**至服务器根目录下

  ```bash
  scp -r /home/myDir root@192.168.1.127:/data/
  ```

- 从服务器拷贝**文件**至本地

  ```bash
  scp root@192.168.1.127:/data/test.txt /home/myDir
  ```

- 从服务器拷贝**文件夹**至本地

  ```bash
  scp -r root@192.168.1.127:/data/  /home/myDir
  ```

注：拷贝命令采用`scp`，当拷贝整个文件夹时，采用`scp -r`