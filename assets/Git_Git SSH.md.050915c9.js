import{_ as s,c as a,o as e,a as n}from"./app.6d7cf6a0.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Git/Git SSH.md","lastUpdated":1632912264000}'),p={name:"Git/Git SSH.md"},t=n(`<h2 id="git-ssh" tabindex="-1">Git SSH <a class="header-anchor" href="#git-ssh" aria-hidden="true">#</a></h2><h3 id="\u751F\u6210-ssh-\u516C\u94A5" tabindex="-1">\u751F\u6210 SSH \u516C\u94A5 <a class="header-anchor" href="#\u751F\u6210-ssh-\u516C\u94A5" aria-hidden="true">#</a></h3><p>\u7EC8\u7AEF\u547D\u4EE4\u67E5\u770B\u672C\u5730\u662F\u5426\u6709\u516C\u94A5\uFF0C\u67E5\u770B\u6839\u76EE\u5F55\u4E0B <code>.ssh</code> \u4E2D\u6709\u6CA1\u6709 <code>id_rsa.pub</code> \u6587\u4EF6</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ssh</span></span>
<span class="line"><span style="color:#A6ACCD;">$ ls</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u6CA1\u6709\uFF0C\u9700\u8981\u901A\u8FC7<code>ssh-keygen -o</code> \u6765\u751F\u6210\uFF1B</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ ssh-keygen -t rsa</span></span>
<span class="line"></span></code></pre></div><p>\u4E00\u8DEF\u56DE\u8F66\u5373\u53EF\uFF1B</p><p>\u5982\u679C\u672C\u5730\u6709\uFF0C\u6216\u8005\u901A\u8FC7\u4E0A\u8FF0\u547D\u4EE4\u5DF2\u7ECF\u751F\u6210\uFF0C\u5219\u67E5\u770B <code>id_rsa.pub</code> \u6587\u4EF6\u91CC\u7684\u5185\u5BB9\uFF0C\u5E76\u5C06\u5176 copy \u81F3 Git \u4ED3\u5E93\u7684 ssh \u91CC\uFF1B</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ cat </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ssh/id_ras.pub</span></span>
<span class="line"></span></code></pre></div>`,9),o=[t];function c(l,i,d,r,h,_){return e(),a("div",null,o)}const y=s(p,[["render",c]]);export{u as __pageData,y as default};