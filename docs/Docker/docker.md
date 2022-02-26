# Docker

## 常用命令

###  镜像

​	概念：用于创建Docker 容器（Container）的静态模板，镜像是容器的模板，容器是镜像的实例；

- `docker pull `  拉取镜像
- `docker push`  推送镜像
- `docker search` 查找镜像
- `docker rmi IMAGE_ID` 删除镜像
- `docker commit` 
- `docker build`  根据Dockerfile 构建镜像
- `docker save`  导出镜像
- `docker load` 导入镜像
- `docker tag`  为镜像打Tag

### 容器

- `docker run` 运行容器，根据镜像启动容器
- `docker start` 启动容器
- `docker stop` 停止容器
- `docker rm CONTAINER_ID` 删除镜像，只能删除停止的容器
- 

