import{_ as n,a as p,b as c,c as d}from"./chunks/locales.light.D3y8C5K2.js";import{_ as h,k as m,m as s,f as e,y as o,l as u,A as r,j as f,B as l}from"./chunks/framework.Cum5LaDG.js";const v=JSON.parse('{"title":"深入定制机器人","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/manual/usage/customize.md","filePath":"zh-CN/manual/usage/customize.md"}'),b={name:"zh-CN/manual/usage/customize.md"};function g(k,a,q,_,x,P){const t=r("chat-message"),i=r("chat-panel");return f(),m("div",null,[a[4]||(a[4]=s('<h1 id="深入定制机器人" tabindex="-1">深入定制机器人 <a class="header-anchor" href="#深入定制机器人" aria-label="Permalink to &quot;深入定制机器人&quot;">​</a></h1><h2 id="权限管理" tabindex="-1">权限管理 <a class="header-anchor" href="#权限管理" aria-label="Permalink to &quot;权限管理&quot;">​</a></h2><p>既然已经有了用户系统，下一个自然的需求便是权限管理了。</p><h3 id="用户权限" tabindex="-1">用户权限 <a class="header-anchor" href="#用户权限" aria-label="Permalink to &quot;用户权限&quot;">​</a></h3><p>Koishi 内部有一套默认的权限系统，它为每个用户赋予了一个权限等级，遵循以下的 <strong>核心规则</strong>：</p><ul><li>数据库中没有的用户默认拥有 0 级权限</li><li>高权限者能够执行一切低权限者的操作</li></ul><p>在此基础上，我们还扩充出了这样的一套 <strong>设计准则</strong>：</p><ul><li>0 级：不存在的用户</li><li>1 级：所有用户，只能够接触有限的功能</li><li>2 级：高级用户，能够接触几乎一切机器人的功能</li><li>3 级：管理员，能够直接操作机器人事务</li><li>4 级：高级管理员，能够管理其他账号</li></ul><p>你可以基于这套准则对指令进行 <a href="./command.html#权限管理">权限管理</a>，也可以用于部分 <a href="#计算属性">计算属性</a> 的配置项中。</p><p>通过 <a href="./platform.html#配置登录插件">配置登录插件</a> 的方式，你可以快速拥有一个 5 级权限的管理员账号。接下来，要做的就是为其他用户赋予权限了。</p><p>安装 <a href="./../../plugins/common/admin.html">admin</a> 插件。该插件提供了名为 <code>authorize</code> 的指令，可以设置其他用户的权限等级：</p>',11)),e(i,null,{default:o(()=>[e(t,{nickname:"Alice"},{default:o(()=>a[0]||(a[0]=[l("authorize -u @Bob 2")])),_:1}),e(t,{nickname:"Koishi"},{default:o(()=>a[1]||(a[1]=[l("用户数据已修改。")])),_:1})]),_:1}),a[5]||(a[5]=s('<p>任何用户只能对权限等级低于自己的用户进行操作，且操作后的权限等级同样必须低于自己。</p><h3 id="受理人机制" tabindex="-1">受理人机制 <a class="header-anchor" href="#受理人机制" aria-label="Permalink to &quot;受理人机制&quot;">​</a></h3><p>默认情况下，同一个 Koishi 应用接入的多个机器人账号在同一个频道内，只有一个机器人会响应用户的消息。这是为了防止消息重复发送和循环触发等问题。这个负责响应消息的机器人被称为该频道的「受理人」。默认情况下，第一个收到该频道的消息的机器人会自动成为受理人。</p><p>当受理人账号离线时，即便频道内仍有其他机器人，它们也不会响应你的消息。此时如果想要切换受理人，同样请安装 <a href="./../../plugins/common/admin.html">admin</a> 插件，并使用 <code>@bot assign</code>，其中 @bot 是你所希望的受理人。</p><p>反过来，如果你希望你的 Koishi 实例不主动响应某个频道的消息，可以通过 <code>assign -r</code> 的方式来移除该频道的受理人。其他频道不会受到影响。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>某个频道处于无受理人状态与该频道被过滤器排除的区别在于：前者仍然可以被通过 @机器人 的方式触发指令，而后者无论如何都无法触发指令。具体请参考 <a href="./command.html#触发前缀">触发前缀</a> 章节。</p></div><h3 id="自动注册" tabindex="-1">自动注册 <a class="header-anchor" href="#自动注册" aria-label="Permalink to &quot;自动注册&quot;">​</a></h3><p>默认情况下，对于每一条接收到的消息，机器人都会自动向数据库中注册其用户和频道。新注册的用户将默认获得 1 级权限，而新注册的频道会自动以收到消息的机器人为其受理者。如果你不希望有此行为，可以在全局设置中手动配置 <code>autoAuthorize</code> 和 <code>autoAssign</code>。</p><p>上述两个配置项都支持 <a href="#计算属性">计算属性</a>，这也意味着你可以在不同的聊天环境中配置不同的行为。</p><h2 id="filters" tabindex="-1">过滤器 <a class="header-anchor" href="#filters" aria-label="Permalink to &quot;过滤器 {#filters}&quot;">​</a></h2><p>很多时候，我们会希望某些功能只能对于某些群聊或私聊使用。使用权限管理意味着引入数据库，而更轻量的方式是通过 <strong>过滤器 (Filter)</strong> 直接影响插件的作用范围。</p><h3 id="插件过滤器" tabindex="-1">插件过滤器 <a class="header-anchor" href="#插件过滤器" aria-label="Permalink to &quot;插件过滤器&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>少数插件与聊天平台无关，例如控制台、数据库插件等。这些插件也因此没有过滤器设置。</p></div><p>大部分插件都提供了过滤器设置，就位于插件详情页的顶部。点击「添加条件」按钮可以创建一个过滤条件。可以通过设置过滤条件来包含或排除任意平台 / 用户 / 群组 / 频道 / 机器人。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果不知道这些 ID 是什么，可以使用 <a href="./platform.html#获取账号信息">获取账号信息</a> 中介绍的 <a href="./../../plugins/common/inspect.html">inspect</a> 插件。</p></div><p>添加一个条件后，你会发现下方的按钮变成了「添加『与』条件」和「添加『或』条件」两个。Koishi 的过滤器支持二级结构，内层的一系列条件以「与」的逻辑关系组成条件组，外层的一系列条件组以「或」的逻辑关系组成最终的过滤条件。</p><h3 id="条件属性" tabindex="-1">条件属性 <a class="header-anchor" href="#条件属性" aria-label="Permalink to &quot;条件属性&quot;">​</a></h3><p>Koishi 不仅支持在插件层级设置过滤器，某些配置项还支持在不同的会话下取不同的值。以全局设置为例，我们可以看到 <code>prefix</code>, <code>autoAssign</code> 等配置项的右侧有一个「…」按钮：</p><p class="dark-only"><img src="'+n+'" alt="computed"></p><p class="light-only"><img src="'+p+'" alt="computed"></p><p>点击这个「…」按钮，即可将普通的配置项变成一个计算属性。我们可以配置一系列满足某个过滤器以后的取值，以及一个不满足任何情况下的默认值。</p><p>利用此特性，我们可以实现一些比较复杂的功能，例如：</p><ul><li>屏蔽某些群组内的一切消息</li><li>在不同的平台下使用不同的指令前缀</li><li>对特定的用户开放额外的使用额度</li></ul><h2 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化&quot;">​</a></h2><p>Koishi 是一个支持国际化的聊天机器人框架，这意味着 Koishi 机器人可以根据不同的环境使用不同的语言。这可能听起来跟你没啥关系……但先别走！读完这一节，或许你能掌握一些非常有用的功能。国际化并没有你想象得那么简单。</p><h3 id="设置语言偏好" tabindex="-1">设置语言偏好 <a class="header-anchor" href="#设置语言偏好" aria-label="Permalink to &quot;设置语言偏好&quot;">​</a></h3><p>在 Koishi 中，应用本身及其管理的每个用户、每个频道都可以独立地设置语言偏好。其中，应用级别的默认语言通过全局配置项 <code>locale</code> 来设置，而用户、频道的语言偏好则通过 <a href="./../../plugins/common/admin.html">admin</a> 插件提供的 <code>user.locale</code> 和 <code>channel.locale</code> 指令来管理 (还记得指令系统中的 <a href="./command.html#子指令">这个例子</a> 吧)。</p><p>默认情况下，语言偏好的优先级是 频道 &gt; 用户 &gt; 全局。一个群组中可能有大量使用不同母语的用户参与讨论，为了方便交流通常会设置不同的语言频道。而对于此类情况，频道优先策略就可以让机器人在这些频道内始终使用预设好的语言来回答，而对于未设置语言偏好的频道，机器人仍然会遵循用户的偏好设置。当然，你也可以通过全局配置项 <code>i18n.output</code> 来更改此行为。</p><h3 id="本地化文本" tabindex="-1">本地化文本 <a class="header-anchor" href="#本地化文本" aria-label="Permalink to &quot;本地化文本&quot;">​</a></h3><p>当然，绝大部分插件都仅仅支持了中文。如果你希望你的机器人支持其他语言，除了向这些插件的作者提交 Pull Request 外，还可以本地修改插件的文本。</p><p>在活动栏中点击「本地化」，你将看到如下的界面：</p><p class="dark-only"><img src="'+c+'" alt="locales"></p><p class="light-only"><img src="'+d+'" alt="locales"></p><p>左侧可以选择类别，右上角可以选择要显示的语言，而中间则是编辑文本的区域。其中，文本框里的占位符对应于插件本身提供的文本，可以在翻译到其他语言时用做参考。</p><p>然而，这个页面还有另一个用法，就是修改已有的文本！例如在上面的截图中，<code>low-authority</code> 原本对应到的文本是 <code>权限不足</code>，我们可以将它修改为 <code>哼，不给用</code>。现在让我们找个带权限等级的指令试试看有什么效果：</p>',35)),e(i,null,{default:o(()=>[e(t,{nickname:"Alice"},{default:o(()=>a[2]||(a[2]=[l("authorize -u @Bob 5")])),_:1}),e(t,{nickname:"Koishi"},{default:o(()=>a[3]||(a[3]=[l("哼，不给用！")])),_:1})]),_:1}),a[6]||(a[6]=u("p",null,"只要你如法炮制，就可以配置出一套完全属于你的机器人文案，让你的机器人与众不同。",-1))])}const N=h(b,[["render",g]]);export{v as __pageData,N as default};
