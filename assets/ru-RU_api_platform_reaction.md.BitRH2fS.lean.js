import{_ as s,k as l,l as o,B as t,f as a,y as n,m as r,A as d,j as c}from"./chunks/framework.Cum5LaDG.js";const x=JSON.parse('{"title":"表态 (Reaction) 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/api/platform/reaction.md","filePath":"ru-RU/api/platform/reaction.md"}'),g={name:"ru-RU/api/platform/reaction.md"},m={id:"表态",tabindex:"-1"},I={id:"bot-getreactioniter",tabindex:"-1"};function b(h,e,u,p,f,j){const i=d("badge");return c(),l("div",null,[o("h1",m,[e[1]||(e[1]=t("表态 (Reaction) ")),a(i,{type:"warning"},{default:n(()=>e[0]||(e[0]=[t("实验性")])),_:1}),e[2]||(e[2]=t()),e[3]||(e[3]=o("a",{class:"header-anchor",href:"#表态","aria-label":'Permalink to "表态 (Reaction) <badge type="warning">实验性</badge>"'},"​",-1))]),e[8]||(e[8]=r('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="bot-createreaction" tabindex="-1">bot.createReaction(channelId, messageId, emoji) <a class="header-anchor" href="#bot-createreaction" aria-label="Permalink to &quot;bot.createReaction(channelId, messageId, emoji)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>向特定消息添加表态。</p><h3 id="bot-deletereaction" tabindex="-1">bot.deleteReaction(channelId, messageId, emoji, userId?) <a class="header-anchor" href="#bot-deletereaction" aria-label="Permalink to &quot;bot.deleteReaction(channelId, messageId, emoji, userId?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li><strong>userId:</strong> <code>string</code> 用户 ID</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>从特定消息删除某个用户添加的特定表态。如果没有传入用户 ID 则表示删除自己的表态。</p><h3 id="bot-clearreaction" tabindex="-1">bot.clearReaction(channelId, messageId, emoji?) <a class="header-anchor" href="#bot-clearreaction" aria-label="Permalink to &quot;bot.clearReaction(channelId, messageId, emoji?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>从特定消息清除某个特定表态。如果没有传入表态名称则表示清除所有表态。</p><h3 id="bot-getreactionlist" tabindex="-1">bot.getReactionList(channelId, messageId, emoji, next?) <a class="header-anchor" href="#bot-getreactionlist" aria-label="Permalink to &quot;bot.getReactionList(channelId, messageId, emoji, next?)&quot;">​</a></h3><ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li><strong>next:</strong> <code>string</code> 分页令牌</li><li>返回值: <code>Promise&lt;List&lt;User&gt;&gt;</code></li></ul><p>获取添加特定消息的特定表态的用户列表。</p>',13)),o("h3",I,[e[5]||(e[5]=t("bot.getReactionIter(channelId, messageId, emoji) ")),a(i,null,{default:n(()=>e[4]||(e[4]=[t("内置")])),_:1}),e[6]||(e[6]=t()),e[7]||(e[7]=o("a",{class:"header-anchor",href:"#bot-getreactioniter","aria-label":'Permalink to "bot.getReactionIter(channelId, messageId, emoji) <badge>内置</badge>"'},"​",-1))]),e[9]||(e[9]=r("<ul><li><strong>channelId:</strong> <code>string</code> 频道 ID</li><li><strong>messageId:</strong> <code>string</code> 消息 ID</li><li><strong>emoji:</strong> <code>string</code> 表态名称</li><li>返回值: <code>AsyncIterable&lt;User&gt;</code> 异步迭代器</li></ul><p>获取添加特定消息的特定表态的用户的异步迭代器。</p>",2))])}const P=s(g,[["render",b]]);export{x as __pageData,P as default};
