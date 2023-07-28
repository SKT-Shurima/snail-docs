import{_ as s,o as a,c as l,U as n}from"./chunks/framework.835c9fd2.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/command.md","filePath":"Linux/command.md","lastUpdated":1653396613000}'),o={name:"Linux/command.md"},p=n('<h3 id="linux-常用命令" tabindex="-1">Linux 常用命令 <a class="header-anchor" href="#linux-常用命令" aria-label="Permalink to &quot;Linux 常用命令&quot;">​</a></h3><h4 id="本地资源-服务器资源-拷贝" tabindex="-1">本地资源/服务器资源 拷贝 <a class="header-anchor" href="#本地资源-服务器资源-拷贝" aria-label="Permalink to &quot;本地资源/服务器资源 拷贝&quot;">​</a></h4><ul><li><p>拷贝<strong>本地文件</strong>至服务器根目录下</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root@192.168.1.127:/</span></span></code></pre></div></li><li><p>拷贝<strong>本地文件夹</strong>至服务器根目录下</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/myDir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root@192.168.1.127:/data/</span></span></code></pre></div></li><li><p>从服务器拷贝<strong>文件</strong>至本地</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root@192.168.1.127:/data/test.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/myDir</span></span></code></pre></div></li><li><p>从服务器拷贝<strong>文件夹</strong>至本地</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">scp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root@192.168.1.127:/data/</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/home/myDir</span></span></code></pre></div></li></ul><p>注：拷贝命令采用<code>scp</code>，当拷贝整个文件夹时，采用<code>scp -r</code>rz</p><h4 id="复制拷贝-剪切移动" tabindex="-1">复制拷贝/剪切移动 <a class="header-anchor" href="#复制拷贝-剪切移动" aria-label="Permalink to &quot;复制拷贝/剪切移动&quot;">​</a></h4><ul><li><p>复制文件 <code>cp</code> 文件名 文件路径</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/data/</span></span></code></pre></div></li><li><p>复制文件夹内文件到当前目录</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">data/</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div></li><li><p>移动文件 <code>mv</code> 文件名 路径</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.tx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">../data</span></span></code></pre></div></li></ul><h4 id="命令设置别名" tabindex="-1">命令设置别名 <a class="header-anchor" href="#命令设置别名" aria-label="Permalink to &quot;命令设置别名&quot;">​</a></h4><ul><li><p>查看系统默认别名</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">alias</span></span></code></pre></div></li><li><p>设置别名</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> lsg</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ls | grep test</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div></li><li><p>取消别名</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">unalias</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lsg</span></span></code></pre></div></li></ul><h4 id="查看端口pid" tabindex="-1">查看端口PID <a class="header-anchor" href="#查看端口pid" aria-label="Permalink to &quot;查看端口PID&quot;">​</a></h4><ul><li><p>查看端口占用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lsof</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i:8080</span></span></code></pre></div></li><li><p>解除端口占用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-9</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PID</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><ul><li>UID #用户ID</li><li>PID #进程ID</li><li>PPID #父进程ID</li></ul></li></ul><h3 id="查看本地ip" tabindex="-1">查看本地IP <a class="header-anchor" href="#查看本地ip" aria-label="Permalink to &quot;查看本地IP&quot;">​</a></h3><ul><li><p>本地ip</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ifconfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inet </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">127.0</span><span style="color:#C3E88D;">.0.1</span></span></code></pre></div></li><li><p>mac 刷新dns</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">killall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-HUP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mDNSResponder</span></span></code></pre></div></li></ul>',12),e=[p];function t(c,i,r,C,d,y){return a(),l("div",null,e)}const u=s(o,[["render",t]]);export{D as __pageData,u as default};