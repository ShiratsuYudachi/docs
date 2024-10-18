import{_ as l,k as r,l as a,B as s,f as t,y as o,m as i,A as d,j as p}from"./chunks/framework.Cum5LaDG.js";const B=JSON.parse('{"title":"消息编码器 (MessageEncoder) 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/message/encoder.md","filePath":"ja-JP/api/message/encoder.md"}'),h={name:"ja-JP/api/message/encoder.md"},g={id:"消息编码器",tabindex:"-1"},m={id:"encoder-flush",tabindex:"-1"},k={id:"encoder-visit",tabindex:"-1"};function u(c,e,b,f,E,v){const n=d("badge");return p(),r("div",null,[a("h1",g,[e[1]||(e[1]=s("消息编码器 (MessageEncoder) ")),t(n,{type:"warning"},{default:o(()=>e[0]||(e[0]=[s("实验性")])),_:1}),e[2]||(e[2]=s()),e[3]||(e[3]=a("a",{class:"header-anchor",href:"#消息编码器","aria-label":'Permalink to "消息编码器 (MessageEncoder) <badge type="warning">实验性</badge>"'},"​",-1))]),e[15]||(e[15]=i('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这是一个实验性功能，未来可能发生改动。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/adapter/message.html">开发 &gt; 跨平台 &gt; 消息编码</a></p></div>',2)),a("p",null,[e[5]||(e[5]=s("标有 ")),t(n,null,{default:o(()=>e[4]||(e[4]=[s("抽象")])),_:1}),e[6]||(e[6]=s(" 的方法需要由适配器插件自行实现。"))]),e[16]||(e[16]=i(`<h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><p>消息编码器通常不直接进行构造，而是以关联类型的形式绑定在 <a href="./../core/bot.html"><code>Bot</code></a> 类的静态成员上，用于实现 <a href="./../resources/message.html#bot-sendmessage"><code>bot.sendMessage()</code></a> 等方法。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bot.ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> MyBot</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Bot</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  static</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;"> MessageEncoder</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> MyMessageEncoder</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="new-messageencoder" tabindex="-1">new MessageEncoder(bot, channelId) <a class="header-anchor" href="#new-messageencoder" aria-label="Permalink to &quot;new MessageEncoder(bot, channelId)&quot;">​</a></h3><ul><li><strong>bot:</strong> <a href="./../core/bot.html"><code>Bot</code></a> 机器人实例</li><li><strong>channelId:</strong> <code>string</code> 频道 ID</li></ul><p>构造一个 <code>MessageEncoder</code> 实例。</p>`,7)),a("h3",m,[e[8]||(e[8]=s("encoder.flush() ")),t(n,null,{default:o(()=>e[7]||(e[7]=[s("抽象")])),_:1}),e[9]||(e[9]=s()),e[10]||(e[10]=a("a",{class:"header-anchor",href:"#encoder-flush","aria-label":'Permalink to "encoder.flush() <badge>抽象</badge>"'},"​",-1))]),e[17]||(e[17]=a("ul",null,[a("li",null,[s("返回值: "),a("code",null,"Promise<void>")])],-1)),e[18]||(e[18]=a("p",null,"向平台发送消息，清空缓冲区。",-1)),a("h3",k,[e[12]||(e[12]=s("encoder.visit(element) ")),t(n,null,{default:o(()=>e[11]||(e[11]=[s("抽象")])),_:1}),e[13]||(e[13]=s()),e[14]||(e[14]=a("a",{class:"header-anchor",href:"#encoder-visit","aria-label":'Permalink to "encoder.visit(element) <badge>抽象</badge>"'},"​",-1))]),e[19]||(e[19]=i('<ul><li><strong>element:</strong> <a href="./api.html"><code>Element</code></a> 消息元素</li></ul><p>渲染某一个消息元素。如果其有子元素，可以使用 <a href="#encoder-render"><code>encoder.render(element)</code></a> 进行递归遍历。</p><h3 id="encoder-render" tabindex="-1">encoder.render(elements) <a class="header-anchor" href="#encoder-render" aria-label="Permalink to &quot;encoder.render(elements)&quot;">​</a></h3><ul><li><strong>element:</strong> <a href="./api.html"><code>Element[]</code></a> 消息元素</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>渲染一组元素。</p><h3 id="encoder-send" tabindex="-1">encoder.send(content) <a class="header-anchor" href="#encoder-send" aria-label="Permalink to &quot;encoder.send(content)&quot;">​</a></h3><ul><li><strong>content:</strong> <code>Fragment</code> 消息元素</li><li>返回值: <code>Promise&lt;Message[]&gt;</code></li></ul><p>解析并发送一段内容。返回发送的消息列表。</p>',8))])}const P=l(h,[["render",u]]);export{B as __pageData,P as default};
