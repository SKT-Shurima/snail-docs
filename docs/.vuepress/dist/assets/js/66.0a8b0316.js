(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{501:function(a,s,t){"use strict";t.r(s);var e=t(25),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"window-常见命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window-常见命令"}},[a._v("#")]),a._v(" window 常见命令")]),a._v(" "),t("h4",{attrs:{id:"新增文件、文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新增文件、文件夹"}},[a._v("#")]),a._v(" 新增文件、文件夹")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("新增文件夹")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ mkdir  wenjianjia\n$ md wenjianjia\n")])])])]),a._v(" "),t("li",[t("p",[a._v("新建文件")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("type")]),a._v(" nul > wenjianming\n")])])])]),a._v(" "),t("li",[t("p",[a._v("新建非空文件")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" name = "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zhangsan"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" > test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("js\n")])])])])]),a._v(" "),t("h4",{attrs:{id:"删除文件、文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除文件、文件夹"}},[a._v("#")]),a._v(" 删除文件、文件夹")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("rd/s/q 盘符:\\某个文件夹 （强制删除文件文件夹和文件夹内所有文件）")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rd")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("s/q\n")])])])]),a._v(" "),t("li",[t("p",[a._v("del/f/s/q 盘符:\\文件名 （强制删除文件，文件名必须加文件后缀名）")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("del")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("f/s/q\n")])])])])]),a._v(" "),t("h4",{attrs:{id:"window查看端口占用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window查看端口占用"}},[a._v("#")]),a._v(" window查看端口占用")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("查看所有进程占用端口")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ netstat "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ano\n")])])])]),a._v(" "),t("li",[t("p",[a._v("查看指定端口程序")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ netstat "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ano "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" findstr "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"8080"')]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("杀死进程 "),t("code",[a._v("tasklist | findstr [进程号]")])]),a._v(" "),t("p",[a._v("根据进程名称杀死进程： "),t("code",[a._v("taskkill /f /t /im [进程名称]")])])])]),a._v(" "),t("h4",{attrs:{id:"本地资源-服务器资源-拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地资源-服务器资源-拷贝"}},[a._v("#")]),a._v(" 本地资源/服务器资源 拷贝")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("拷贝"),t("strong",[a._v("本地文件")]),a._v("至服务器根目录下")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" test.txt root@192.168.1.127:/\n")])])])]),a._v(" "),t("li",[t("p",[a._v("拷贝"),t("strong",[a._v("本地文件夹")]),a._v("至服务器根目录下")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" -r /home/myDir root@192.168.1.127:/data/\n")])])])]),a._v(" "),t("li",[t("p",[a._v("从服务器拷贝"),t("strong",[a._v("文件")]),a._v("至本地")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" root@192.168.1.127:/data/test.txt /home/myDir\n")])])])]),a._v(" "),t("li",[t("p",[a._v("从服务器拷贝"),t("strong",[a._v("文件夹")]),a._v("至本地")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" -r root@192.168.1.127:/data/  /home/myDir\n")])])])])]),a._v(" "),t("p",[a._v("注：拷贝命令采用"),t("code",[a._v("scp")]),a._v("，当拷贝整个文件夹时，采用"),t("code",[a._v("scp -r")])]),a._v(" "),t("h4",{attrs:{id:"复制拷贝-剪切移动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制拷贝-剪切移动"}},[a._v("#")]),a._v(" 复制拷贝/剪切移动")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("复制文件  "),t("code",[a._v("cp")]),a._v(" 文件名  文件路径")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" test.txt /home/data/\n")])])])]),a._v(" "),t("li",[t("p",[a._v("复制文件夹内文件到当前目录")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" data/* "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("移动文件 "),t("code",[a._v("mv")]),a._v(" 文件名  路径")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" test.tx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/data\n")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);