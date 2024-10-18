import{_ as i,k as a,m as t,j as e}from"./chunks/framework.Cum5LaDG.js";const r=JSON.parse(`{"title":"Computed：条件求值","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\n  foo: Schema.computed(Number).description('这是一个属性。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"zh-CN/schema/advanced/computed.md","filePath":"zh-CN/schema/advanced/computed.md"}`),p={name:"zh-CN/schema/advanced/computed.md"};function n(h,s,l,d,k,o){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="computed-条件求值" tabindex="-1">Computed：条件求值 <a class="header-anchor" href="#computed-条件求值" aria-label="Permalink to &quot;Computed：条件求值&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>此类型只能在 Koishi 中使用。</p></div><p><code>Schema.computed()</code> 类型可用于合并多个类型。一种最常见的用法是将配置项分为多组显示。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">computed</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;配置项&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div>`,4)]))}const m=i(p,[["render",n]]);export{r as __pageData,m as default};
