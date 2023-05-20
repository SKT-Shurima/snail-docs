import{_ as s,c as n,o as a,a as o}from"./app.6d7cf6a0.js";const A=JSON.parse('{"title":"String","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/String.md","lastUpdated":1632912264000}'),l={name:"JavaScript/String.md"},p=o(`<h1 id="string" tabindex="-1">String <a class="header-anchor" href="#string" aria-hidden="true">#</a></h1><ul><li><p>\u6807\u7B7E\u5316\u6A21\u677F</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zhangsan</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> city </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hangzhou</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> tag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">literals</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">substitutions</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;">//  \u8F93\u51FA [ &#39;&#39;, &#39; de age is &#39;, &#39; in &#39;, &#39;.&#39; ] [ &#39;zhangsan&#39;, 18, [ &#39;hangzhou&#39; ] ]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">literals</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">substitutions</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> strTemplate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">tag</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> de age is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> in </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">city</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div></li><li><p><code>String.prototype.pcodePointAt</code> &amp;&amp; <code>String.fromCodePoint</code></p><p><code>codePointAt</code> \uFF1A\u6307\u7684\u662F\u5B57\u7B26\u4E32\u4E2D\u6309\u4F4D\u7F6E\u63D0\u53D6 Unicode \u4EE3\u7801\u70B9\uFF0C\u975E\u8D1F\u6574\u6570\uFF1B</p><p><code> fromCodePoint</code> \uFF1A\u5C06Unicode \u4EE3\u7801\u70B9\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF1B</p></li><li><p><code>String.startsWith</code> <code>String.endsWith</code> <code>String.includes</code></p><p>\u4E09\u4E2A\u65B9\u6CD5\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F\u60F3\u8981\u5339\u914D\u7684\u5B57\u7B26\u4E32\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u4ECE\u5B57\u7B26\u4E32\u4E2D\u67D0\u4E2A\u7D22\u5F15\u4F4D\u7F6E\u5F00\u59CB\u5339\u914D\uFF1B</p><p>\u4E09\u8005\u90FD\u662F\u5BF9\u5B57\u7B26\u4E32\u7684\u68C0\u7D22\uFF0C\u8FD4\u56DE\u4E00\u4E2ABoolean\uFF1B</p><p><code>startsWith</code> \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u4EE5\u67D0\u4E2A\u5B57\u7B26\u4E32\u5F00\u59CB\uFF1B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gitbooks</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><p><code>endsWith</code> \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5DF2\u67D0\u4E2A\u5B57\u7B26\u4E32\u7ED3\u675F:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gitbooks</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">books</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><p><code> includes</code> \u67E5\u627E\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u51FA\u73B0\u67D0\u4E2A\u5B57\u7B26\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">I like gitbooks.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><p>ps: \u5982\u679C\u5411<code>startsWith()</code> <code>endWith()</code> <code>include()</code> \u65B9\u6CD5\u4E2D\u4F20\u5165\u6B63\u5219\u8868\u8FBE\u5F0F\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\uFF0C\u5C06\u629B\u51FA\u9519\u8BEF\uFF1B \u8FD9\u4E0E<code>indexOf()</code>\u4EE5\u53CA <code>lastIndexOf() </code>\u65B9\u6CD5\u7684\u8868\u73B0\u5F62\u6210\u4E86\u53CD\u5DEE\uFF0C\u5B83\u4EEC\u4F1A \u5C06\u6B63\u5219\u8868\u8FBE\u5F0F\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u5E76\u641C\u7D22\u5B83\u3002</p></li><li><p><code>String.prototype.repeat()</code></p><p><code>repeat</code> \u65B9\u6CD5\u63A5\u6536\u4E00\u4E2A\u975E\u8D1F\u6574\u6570\u4F5C\u4E3A\u5B57\u7B26\u4E32\u91CD\u590D\u6B21\u6570\uFF1B</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">repeat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// &quot;logloglog&quot; </span></span>
<span class="line"></span></code></pre></div></li><li><p><code>String.split</code> <code>String.slice</code></p></li><li><p><code>String.indexOf</code> \u3001<code>String.lastIndexOf</code></p></li><li><p><code>String.raw</code> \u83B7\u53D6\u6A21\u677F\u5B57\u7B26\u4E32\u539F\u59CB\u503C\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> message1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Multiline</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    message2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">raw</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Multiline</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(message1)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// &quot;Multiline</span></span>
<span class="line"><span style="color:#676E95;">// string&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(message2)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// &quot;Multiline\\\\nstring&quot;</span></span>
<span class="line"></span></code></pre></div></li></ul>`,2),e=[p];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};