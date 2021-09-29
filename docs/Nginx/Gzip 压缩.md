### Gzip 压缩

####  ngx_http_gzip_module 模块

主要负责 Gzip 功能的开启和设置，对响应数据进行在线实时压缩。

```nginx
gzip on | off;
```

默认情况下，该指令设置为off，即不启用Gzip功能，只有当为 on 时，以下指令才有效；

- gzip_buffers 指令

  用于设置 Gzip 压缩文件使用缓存空间的大小；

  ```nginx
  gzip_buffers number size;
  ```

  - number：指定 Nginx 服务器需要向系统申请缓存空间的个数；
  - size：指定每个缓存空间的大小；

  即 Nginx 服务器在对响应输出数据进行 Gzip 压缩时需向系统申请 number*size 大小的空间用于存储压缩数据；

- gzip_comp_level

  ```nginx
  gzip_comp_level level;
  ```

  用于指定 Gzip 压缩程度；1~9；1：压缩程度最低，效率最高；9：压缩程度最高，效率最低；

- gzip_min_length

  ```nginx
  gzip_min_length number;
  ```

  默认为20，响应页面大小大于该值时，才开启Gzip功能；0 表示均压缩；建议是1024，即1K；

  

