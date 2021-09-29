###  Linux 常用命令

#### 本地资源/服务器资源 拷贝

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

注：拷贝命令采用`scp`，当拷贝整个文件夹时，采用`scp -r`rz



#### 复制拷贝/剪切移动

- 复制文件  `cp` 文件名  文件路径

  ```bash
  cp test.txt /home/data/
  ```

- 复制文件夹内文件到当前目录

  ```bash
  cp data/* .
  ```

- 移动文件 `mv` 文件名  路径

  ```bash
  mv test.tx ../data
  ```

  



#### 命令设置别名

- 查看系统默认别名

  ```bash
  alias
  ```

- 设置别名

  ```bash
  alias lsg="ls | grep test"
  ```

- 取消别名

  ```bash
  unalias lsg
  ```




####  查看端口PID

- 查看端口占用

  ```bash
  lsof -i:8080
  ```

- 解除端口占用

  ```bash
  kill -9 "PID"
  ```

  

