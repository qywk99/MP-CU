"use strict";(self.webpackChunkMP_CU_Doc=self.webpackChunkMP_CU_Doc||[]).push([[922],{5253:(t,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-5e9d18e1",path:"/component/code.html",title:"代码",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"行内用法",slug:"行内用法",children:[]},{level:2,title:"代码块用法",slug:"代码块用法",children:[]},{level:2,title:"参数",slug:"参数",children:[]},{level:2,title:"插槽",slug:"插槽",children:[]}],filePathRelative:"component/code.md",git:{updatedTime:1640063768e3}}},825:(t,n,a)=>{a.r(n),a.d(n,{default:()=>p});const s=(0,a(6252).uE)('<h1 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h1><p>代码组件是用来展示计算机代码文本的一个组件。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;ui-code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mp-cu/colorUI/components/ui-code/ui-code&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="行内用法" tabindex="-1"><a class="header-anchor" href="#行内用法" aria-hidden="true">#</a> 行内用法</h2><p>默认是行内代码的用法。支持默认插槽与 <code>content</code> 参数引入,在包含一些特殊符号的时候请使用引入的方式。</p><p><code>&lt;ui-code&gt;&lt;/ui-code&gt;</code></p><p><img src="https://color-ui.gitee.io/assest/mp-cu-doc/code/code-1.jpg" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-code</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;ui-code&gt;...&lt;/ui-code&gt; \\n&lt;ui-code content=<span class="token punctuation">&#39;</span>...<span class="token punctuation">&#39;</span>&gt;&lt;/ui-code&gt;<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="代码块用法" tabindex="-1"><a class="header-anchor" href="#代码块用法" aria-hidden="true">#</a> 代码块用法</h2><p><code>tag</code> 参数设置为 <code>pre</code> 就可以使用代码块了。 <code>lang</code> 参数设置为指定语言。可以实现代码高亮。</p><p>代码高亮是使用了 <code>PrismJS</code> 暗色主题的高亮颜色是亮色主题的反转。</p><p><img src="https://color-ui.gitee.io/assest/mp-cu-doc/code/code-2.jpg" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-code</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pre<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;ui-code&gt;...&lt;/ui-code&gt; \\n&lt;ui-code content=<span class="token punctuation">&#39;</span>...<span class="token punctuation">&#39;</span>&gt;&lt;/ui-code&gt;<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-code</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pre<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.ui-code { \\n  white-space: pre-wrap; \\n  word-break: break-all; \\n  word-wrap: break-word; \\n  font-size: 90%; \\n}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-code</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pre<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;ui-code tag=<span class="token punctuation">&#39;</span>pre<span class="token punctuation">&#39;</span> lang=<span class="token punctuation">&#39;</span>html<span class="token punctuation">&#39;</span> content=<span class="token punctuation">&#39;</span>...<span class="token punctuation">&#39;</span>&gt;\\n&lt;/ui-code&gt;\\n&lt;ui-code tag=<span class="token punctuation">&#39;</span>pre<span class="token punctuation">&#39;</span> lang=<span class="token punctuation">&#39;</span>css<span class="token punctuation">&#39;</span> content=<span class="token punctuation">&#39;</span>...<span class="token punctuation">&#39;</span>&gt;\\n&lt;/ui-code&gt;<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>ui</td><td>String</td><td>-</td><td>-</td><td>其他class</td></tr><tr><td>bg</td><td>String</td><td>-</td><td>ui-BG</td><td>背景颜色</td></tr><tr><td>title</td><td>Boolean/String</td><td>-</td><td>false</td><td>标题</td></tr><tr><td>content</td><td>String</td><td>-</td><td>-</td><td>代码内容</td></tr><tr><td>text</td><td>String</td><td>-</td><td>ui-TC-Main</td><td>代码区样式</td></tr><tr><td>tag</td><td>String</td><td>-</td><td>code</td><td>类型</td></tr><tr><td>lang</td><td>String</td><td>-</td><td>null</td><td>语言</td></tr><tr><td>scroll</td><td>Boolean</td><td>-</td><td>false</td><td>滑动</td></tr></tbody></table><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>默认</td><td>行内代码的内容</td></tr></tbody></table>',17),e={},p=(0,a(3744).Z)(e,[["render",function(t,n){return s}]])},3744:(t,n)=>{n.Z=(t,n)=>{const a=t.__vccOpts||t;for(const[t,s]of n)a[t]=s;return a}}}]);