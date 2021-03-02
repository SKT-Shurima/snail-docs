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