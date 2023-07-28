import{_ as s,o as n,c as a,U as l}from"./chunks/framework.835c9fd2.js";const A=JSON.parse('{"title":"String","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/String.md","filePath":"JavaScript/String.md","lastUpdated":1632912264000}'),o={name:"JavaScript/String.md"},p=l(`<h1 id="string" tabindex="-1">String <a class="header-anchor" href="#string" aria-label="Permalink to &quot;String&quot;">​</a></h1><ul><li><p>标签化模板</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zhangsan</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> city </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hangzhou</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> tag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">literals</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;font-style:italic;">substitutions</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;font-style:italic;">//  输出 [ &#39;&#39;, &#39; de age is &#39;, &#39; in &#39;, &#39;.&#39; ] [ &#39;zhangsan&#39;, 18, [ &#39;hangzhou&#39; ] ]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">literals</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">substitutions</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> strTemplate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">tag</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> de age is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> in </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">city</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span></code></pre></div></li><li><p><code>String.prototype.pcodePointAt</code> &amp;&amp; <code>String.fromCodePoint</code></p><p><code>codePointAt</code> ：指的是字符串中按位置提取 Unicode 代码点，非负整数；</p><p><code> fromCodePoint</code> ：将Unicode 代码点转换为字符串；</p></li><li><p><code>String.startsWith</code> <code>String.endsWith</code> <code>String.includes</code></p><p>三个方法接收两个参数，第一个是想要匹配的字符串，第二个是从字符串中某个索引位置开始匹配；</p><p>三者都是对字符串的检索，返回一个Boolean；</p><p><code>startsWith</code> 判断字符串是否以某个字符串开始；</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gitbooks</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div><p><code>endsWith</code> 判断字符串是否已某个字符串结束:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gitbooks</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">books</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div><p><code> includes</code> 查找字符串中是否出现某个字符：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">I like gitbooks.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div><p>ps: 如果向<code>startsWith()</code> <code>endWith()</code> <code>include()</code> 方法中传入正则表达式而不是字符串，将抛出错误； 这与<code>indexOf()</code>以及 <code>lastIndexOf() </code>方法的表现形成了反差，它们会 将正则表达式转换为字符串并搜索它。</p></li><li><p><code>String.prototype.repeat()</code></p><p><code>repeat</code> 方法接收一个非负整数作为字符串重复次数；</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">repeat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;logloglog&quot;</span></span></code></pre></div></li><li><p><code>String.split</code> <code>String.slice</code></p></li><li><p><code>String.indexOf</code> 、<code>String.lastIndexOf</code></p></li><li><p><code>String.raw</code> 获取模板字符串原始值：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> message1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Multiline</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    message2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">raw</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Multiline</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(message1)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Multiline</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// string&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(message2)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Multiline\\\\nstring&quot;</span></span></code></pre></div></li></ul>`,2),e=[p];function t(c,r,D,y,i,F){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};