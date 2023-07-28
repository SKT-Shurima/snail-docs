import{_ as a,o as s,c as e,U as l}from"./chunks/framework.835c9fd2.js";const b=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"HTML&&CSS/Table.md","filePath":"HTML&&CSS/Table.md","lastUpdated":1670163525000}'),n={name:"HTML&&CSS/Table.md"},t=l(`<h1 id="table" tabindex="-1">Table <a class="header-anchor" href="#table" aria-label="Permalink to &quot;Table&quot;">​</a></h1><p>当<code>table</code>中的<code>td</code>内容文字过长，会出现不换行，就会造成原始定义的<code>width</code>失效；</p><p>解决方案：</p><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">table-layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fixed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">word-break</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> break-all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,4),o=[t];function p(c,r,d,i,_,D){return s(),e("div",null,o)}const y=a(n,[["render",p]]);export{b as __pageData,y as default};