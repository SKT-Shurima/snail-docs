### gh-pages分支发布静态项目

对于`React` `Vue`  之类的项目，开发完成之后上传到`Git` 仓库，但是如果想通过借助`Git`提供的pages，来实现打包之后`dist`静态文件的预览就比较困难；

解决方案：

1. 克隆项目到本地
   ```git clone "git@github.com:xxx.git"```

2. 安装依赖打包构建 
   `npm i && npm run build` 或 `yarn install && yarn run build`

3. 进入`build` 文件夹下
   `cd build`

4. 然后就是`git` 初始化，创建`gh-pages`分支，然后将`dist`文件夹下的文件提交推送到远程仓库

   ```bash
   $ git init
   $ git checkout --orphan gh-pages
   $ git add .
   $ git commit -m "feat: init project"
   $ git remote add origin git@github.com:xxx.git
   $ git push origin gh-pages
   ```

5. 然后在 Github 该项目下，setting 设置中的 pages 选择 gh-pages  分支；

原理解释：

其实就是创建了一个新的分支，然后将打包后的文件`dist`，上传至该分支，这样源代码和打包后的静态文件都在一个 project 下，通过不同的 branch 来进行管理；

Github 的 pages 地址指向静态文件所在的分支即可；

