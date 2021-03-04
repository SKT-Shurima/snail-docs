### Nginx 命令：

```shell
$ nginx -t  // 查看Nginx服务器配置文件是否有语法错误
```



### Nginx.conf  原始配置文件

```shell
# nginx.conf 原始文件
#user nobody  # 只有被设置的用户组成员才有权限启动Nginx进程 
worker_processes  1;    # 全局生效

events {
    worker_connections  1024;  # 在events部分中生效
}

http {
    include       mime.types;    # 以下指令在http的server部分中生效
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       8080;
        server_name  localhost;
        location / {            # 以下指令在http/server 的location 中生效 
            root   html;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }
}
```

注意：Nginx 配置文件中，每一条指令配置都必须以分号结束；

结构划分：

```
├───nginx.conf
│   ├───全局块
│   ├───events
│   ├───http
│   │   ├───server
│   │   │   ├───server 全局块
│   │   │   ├───location
│   │   │   ├───location
```

注意：

- 配置文件支持大量可配置的指令，绝大多数指令不是特定属于某一个块的；

- 同一个指令放在不同层级的块中，其作用域也不同，一般情况下，高一级块中的指令可以作用于自身所在的块和此块包含的所有低层级块；如果某个指令在两个不同层级的块中同时出现，则采用“就近原则”，即较低层级块中的配置为准；

  *（即：高层级块能出现在本级及以下的层级块中，并且以最小层级的配置为准）*

#### 指令说明

- user  [user] [group];

  只有被设置的用户组成员才有权限启动Nginx进程；

  如果希望所有的用户都可以启动Nginx，有两种方案：

  - 注释 `# user [user] [group]`;
  - 或者将用户（用户组）设置为`nobody`，`user nobody nobody`;

- worker process，理论上，值越大可以支持的并发处理量就越多；
  配置允许生成的 worker process 数的指令是 `worker_processes`

  ```shell
  worker_processes number | auto
  ```

  - number ，指定 Nginx 进程最多可以产生的 worker process 数；
  - auto， Nginx 进程将自动进行检测；

  注意： 此指令只能在全局块中设置。

- Nginx 进程 PID 存放路径

  配置文件默认存放在Nginx安装目录logs下，修改语法：

  ```shell
  pid file;
  ```

  file 指定存放路径和文件名称，必须带文件名称；

  注意：此指令只能在全局块中使用；

- 配置错误日志的存放路径

  在全局块、http块、sever块中都可以对Nginx服务器的日志进行相关配置；

  指令`error_log`，语法：

  ```shell
  error_log file | stderr [ debug | info | notice | warn | error | crit | alert | emerg ];
  ```

  Nginx 服务日志支持输出到某个文件下，或者输出到标准错误输出stderr；

  日志等级：

  - debug  （需要在编译时使用 --with-debug 开启 debug 开关）
  - info
  - notice
  - warn
  - error
  - crit
  - alert
  - emerg

  注意：设置某一级别，比这一级别高的日志也会被记录；指定文件必须有写的权限；

  此指令能在全局块、http、server、location块中使用；

- 配置文件的引入

  Nginx 提供 `include` 指令来完成配置文件的引入，语法结构：

  ```shell
  include file;
  ```

  file 是要引入的配置文件，支持相对路径；

  注意：引入的文件，必须有写的权限，并且符合Nginx配置文件规定的相关语法和结构；

  此指令可以放在配置文件的任意地方；

- 配置最大连接数

  指令worker_connections 主要用来设置允许每一个 worker process 同时开启最大连接数；

  语法结构：

  ```shell
  worker_connections number;
  ```

  注意：number 不仅指和前端用户建立的连接数，而是包括所有可能的连接数；

  此指令只能在events中配置，且默认是512；

- 自定义服务日志

  语法结构：

  ```shell
  access_log path [format [buffer=size]];
  ```

  取消服务日志功能指令：

  ```shell
  access_log off;
  ```

  此指令只能在http块中进行配置；

- 配置允许sendfile 方式传输文件

  语法结构：

  ```shell
  sendfile on|off;
  ```

  用于开启或关闭使用sendfile()传输文件，默认值是off;

  传输文件大小限制，语法结构：

  ```shell
  sendfile_max_chunk size;
  ```

  size > 0 ，表示Nginx进程的每个worker process 每次调用sendfile() 传输的数据量最大不能超过这个值；

  size = 0，表示无限制；

  此指令可以在 http、server、location 块中配置；

- 配置连接超时时间

  语法结构：

  ```shell
  keeplive_timeout timeout [header_timeout];
  ```

  - timeout，服务端对连接得保持时间，默认是75s；
  - header_timeout，可选项，在应答报文头部的 Keep-Alive 域设置超时时间；

  ```shell
  keeplive_timeout 120s 100s;
  ```

  表达含义是，在服务端保持连接的时间设置为120s，发给用户端的应答报文头部中 Keep-Alive 域的超时时间设置为100s；

  此指令可以在http、server、location块中配置；

- 单连接请求数上限

  Nginx服务器和用户端建立会话连接后，用户端通过此连接发送请求，指令keepalive_requests 用于限制用户通过某一连接向Nginx服务器发送请求的次数；默认是100；

  语法结构：

  ```shell
  keepalive_requests number;
  ```

  此指令可以在http、server、location中配置；

- 基于名称的虚拟主机配置

  语法结构：

  ```shell
  server_name name ...;
  ```

  name：可以只有一个名称，也可以多个并列，之间用空格隔开；每个名字就是个域名，有两段或三段组成，之间由“.” 隔开；

  ```shell
  server_name myserver.com www.myserver.com;
  ```

  第一个名称作为虚拟主机的主要名称；

  

