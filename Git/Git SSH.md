##  Git  SSH

### 生成SSH公钥

终端命令查看本地是否有公钥，查看根目录下 ```.ssh``` 中有没有 ```id_rsa.pub``` 文件

```bash
$ cd ~/.ssh
$ ls
```

如果没有，需要通过```ssh-keygen -o ```  来生成；

```bash
$ ssh-keygen -t rsa
```

一路回车即可；

如果本地有，或者通过上述命令已经生成，则查看 ```id_rsa.pub```  文件里的内容，并将其 copy 至 Git 仓库的 ssh 里；

```bash
$ cat ~/.ssh/id_ras.pub
```

