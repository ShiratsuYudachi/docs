import{_ as r,k as a,m as o,j as t}from"./chunks/framework.Cum5LaDG.js";const p=JSON.parse('{"title":"观察者 (Observer)","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/api/utils/observer.md","filePath":"ru-RU/api/utils/observer.md"}'),d={name:"ru-RU/api/utils/observer.md"};function s(i,e,l,c,n,b){return t(),a("div",null,e[0]||(e[0]=[o('<h1 id="观察者" tabindex="-1">观察者 (Observer) <a class="header-anchor" href="#观察者" aria-label="Permalink to &quot;观察者 (Observer)&quot;">​</a></h1><h2 id="observe" tabindex="-1">observe(target, update?, label?) <a class="header-anchor" href="#observe" aria-label="Permalink to &quot;observe(target, update?, label?)&quot;">​</a></h2><ul><li><strong>target:</strong> <code>T extends object</code> 要观测的对象</li><li><strong>update:</strong> <code>(diff: Partial&lt;T&gt;) =&gt; R</code> 更新回调函数</li><li><strong>label:</strong> <code>string</code> 对象的标签，用于标识</li><li>返回值: <code>Observed&lt;T&gt;</code></li></ul><p>创建一个观察者对象。目前只支持从普通对象创建（不支持 Array / Set / Map）。</p><h2 id="observed-diff" tabindex="-1">observed.$diff <a class="header-anchor" href="#observed-diff" aria-label="Permalink to &quot;observed.$diff&quot;">​</a></h2><p>观察者当前的对象变化。</p><h2 id="observed-merge" tabindex="-1">observed.$merge(source) <a class="header-anchor" href="#observed-merge" aria-label="Permalink to &quot;observed.$merge(source)&quot;">​</a></h2><ul><li><strong>source:</strong> <code>object</code> 要合并的对象</li><li>返回值: <code>this</code></li></ul><p>将某些属性合并入当前观察者，不会触发 diff 更新。</p><h2 id="observed-update" tabindex="-1">observed.$update() <a class="header-anchor" href="#observed-update" aria-label="Permalink to &quot;observed.$update()&quot;">​</a></h2><ul><li>返回值: <code>R</code></li></ul><p>更新观察者对象，同时清除 diff。</p>',12)]))}const h=r(d,[["render",s]]);export{p as __pageData,h as default};
