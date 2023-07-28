import{_ as s,o as a,c as n,U as o}from"./chunks/framework.835c9fd2.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/JSON.md","filePath":"JavaScript/JSON.md","lastUpdated":1632912264000}'),l={name:"JavaScript/JSON.md"},p=o('<h3 id="json-stringify-json-parse" tabindex="-1"><code>JSON.stringify()</code> <code>JSON.parse()</code> <a class="header-anchor" href="#json-stringify-json-parse" aria-label="Permalink to &quot;```JSON.stringify()```  ```JSON.parse()```&quot;">​</a></h3><p>将对象转换 JSON 串，将 JSON 串反解析成对象</p><ul><li><p>可以作为深拷贝对象的方法</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(Object))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>ps： <code>JSON.stringify()</code> 在将<code>Object</code> 转成字符串时，需要注意一些问题：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a) </span><span style="color:#676E95;font-style:italic;">// &quot;{&quot;c&quot;:{},&quot;d&quot;:&quot;2021-02-02T19:40:12.346Z&quot;}&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(a)) </span><span style="color:#676E95;font-style:italic;">// {c: {}, d: &quot;2021-02-02T19:40:12.346Z&quot;}</span></span></code></pre></div><p><code>JSON.stringify()</code> 无法正确转换 JS 的部分属性；</p><ul><li><p>undefiend</p></li><li><p>Function</p></li><li><p>RegExp（正则表达式，转换后变成了空对象）</p></li><li><p>Date（转换后变成了字符串，而非 Date 类的对象）</p></li></ul></li></ul>',3),e=[p];function t(c,r,i,y,D,A){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};