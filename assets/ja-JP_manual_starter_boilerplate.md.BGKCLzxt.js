import{_ as r,a as p}from"./chunks/home-light.pY_vX2i_.js";import{_ as o,k as h,m as n,f as l,y as i,l as s,B as e,A as d,j as k}from"./chunks/framework.Cum5LaDG.js";const f=JSON.parse('{"title":"创建模板项目","description":"","frontmatter":{"prev":{"text":"インストール方法","link":"/ja-JP/manual/starter/"},"next":{"text":"安装和配置插件","link":"/zh-CN/manual/usage/market.html"}},"headers":[],"relativePath":"ja-JP/manual/starter/boilerplate.md","filePath":"ja-JP/manual/starter/boilerplate.md"}'),c={name:"ja-JP/manual/starter/boilerplate.md"};function g(m,a,u,y,b,C){const t=d("tab-select");return k(),h("div",null,[a[6]||(a[6]=n('<h1 id="创建模板项目" tabindex="-1">创建模板项目 <a class="header-anchor" href="#创建模板项目" aria-label="Permalink to &quot;创建模板项目&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果想了解其他安装方式，请移步 <a href="./">选择安装方式</a>。</p></div><p>本节将介绍我们最推荐的 Koishi 开发方案——创建模板项目。相比直接从零搭建，模板项目的优势在于：</p><ul><li>创建完成即是拥有带完整控制台体验的项目，一键创建各种模板插件</li><li>支持直接加载 TypeScript，你可以尽情享受代码提示和类型检查带来的便利</li><li>支持插件热重载，你可以在不重启应用的情况下修改插件代码，并获得即时的反馈</li><li>支持二次开发，你可以将你自己的机器人与其他人的插件进行联合调试</li></ul><p>当然，模板项目也可以直接用于生产。虽然在操作上可能不如启动器方便，但它提供了更多的自由度，并能在启动器所覆盖不到的场景下顺利运行。</p><h2 id="安装-node-js" tabindex="-1">安装 Node.js <a class="header-anchor" href="#安装-node-js" aria-label="Permalink to &quot;安装 Node.js&quot;">​</a></h2><p>Koishi 需要 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> (最低 v18，推荐使用 LTS) 运行环境，你需要自己安装它。</p><h3 id="下载安装包" tabindex="-1">下载安装包 <a class="header-anchor" href="#下载安装包" aria-label="Permalink to &quot;下载安装包&quot;">​</a></h3><p>首先我们前往 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 的官方网站：</p><p class="dark-only"><img src="'+r+'" alt="home"></p><p class="light-only"><img src="'+p+`" alt="home"></p><p>在这里可以看到两个巨大的按钮，分别对应着 <strong>LTS (长期维护版)</strong> 和 <strong>Current (最新版本)</strong>。我们建议你选择更加稳定的 LTS 版本，点击按钮即可下载安装包。</p><p>随后，运行下载好的安装包，根据提示完成整个安装流程即可。</p><h3 id="安装包管理器" tabindex="-1">安装包管理器 <a class="header-anchor" href="#安装包管理器" aria-label="Permalink to &quot;安装包管理器&quot;">​</a></h3><p>Node.js 自带名为 <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">npm</a> 的包管理器，你可以直接使用它。我们同时也推荐功能更强大的 <a href="https://classic.yarnpkg.com/" target="_blank" rel="noreferrer">yarn</a> 作为包管理器。它的安装非常简单，只需打开命令行输入下面的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装 yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yarn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -v</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>部分 Windows 用户可能会发现以下错误 (<a href="https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies" target="_blank" rel="noreferrer">参考链接</a>)：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>yarn：无法加载文件 yarn.ps1，因为在此系统上禁止运行脚本。</span></span></code></pre></div><p>此时请以管理员身份重新运行终端，并输入下面的命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Set-ExecutionPolicy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> RemoteSigned</span></span></code></pre></div><p>之后就可以正常使用 yarn 了。</p></div><h3 id="配置镜像源" tabindex="-1">配置镜像源 <a class="header-anchor" href="#配置镜像源" aria-label="Permalink to &quot;配置镜像源&quot;">​</a></h3><p>如果你是国内用户，从 npm 或 yarn 上下载依赖可能非常慢。因此，我们推荐你配置一下镜像源，以提升安装速度。</p>`,19)),l(t,{class:"code"},{"tab-npm":i(()=>a[0]||(a[0]=[s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," set"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," registry"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," https://registry.npmmirror.com")])])])],-1)])),"tab-yarn":i(()=>a[1]||(a[1]=[s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," config"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," set"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," registry"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," https://registry.npmmirror.com")])])])],-1)])),_:1}),a[7]||(a[7]=n('<h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><p>打开命令行，并进入你想要创建 Koishi 项目的目录。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这个路径不宜过长，且应当避免出现中文或者空格。我们推荐的路径如下：</p><ul><li>Windows：<code>C:\\dev</code> 或者 <code>D:\\dev</code> (也不要直接在盘根创建项目，最好是建一层目录)</li><li>其他操作系统：<code>~/dev</code></li></ul></div><p>输入下面的命令以创建 Koishi 项目：</p>',4)),l(t,{class:"code"},{"tab-npm":i(()=>a[2]||(a[2]=[s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," init"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishi@latest")])])])],-1)])),"tab-yarn":i(()=>a[3]||(a[3]=[s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," create"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," koishi")])])])],-1)])),_:1}),a[8]||(a[8]=s("p",null,"跟随提示即可完成全套初始化流程。",-1)),a[9]||(a[9]=s("h2",{id:"启动应用",tabindex:"-1"},[e("启动应用 "),s("a",{class:"header-anchor",href:"#启动应用","aria-label":'Permalink to "启动应用"'},"​")],-1)),a[10]||(a[10]=s("p",null,[e("如果你顺利完成了上述操作，你的应用此时应该已经是启动状态，并弹出了控制台界面。如果你想要关闭应用，可以在命令行中按下 "),s("code",null,"Ctrl+C"),e(" 组合键。当应用处于关闭状态时，你可以在运行下面的指令以再次启动：")],-1)),l(t,{class:"code"},{"tab-npm":i(()=>a[4]||(a[4]=[s("div",{class:"language-npm vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"npm"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," start")])])])],-1)])),"tab-yarn":i(()=>a[5]||(a[5]=[s("div",{class:"language-yarn vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yarn"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," start")])])])],-1)])),_:1}),a[11]||(a[11]=s("h2",{id:"次のステップ",tabindex:"-1"},[e("次のステップ…… "),s("a",{class:"header-anchor",href:"#次のステップ","aria-label":'Permalink to "次のステップ……"'},"​")],-1)),a[12]||(a[12]=s("p",null,"おめでとうございます！Koishi の基本的な使い方をマスターしましたね。接下来：",-1)),a[13]||(a[13]=s("ul",null,[s("li",null,[e("如果你希望了解 Koishi 的更多功能，请前往 "),s("a",{href:"./../usage/market.html"},"安装和配置插件")]),s("li",null,[e("如果你希望立即开始你的插件开发，请前往 "),s("a",{href:"./../../guide/"},"开发指南")])],-1))])}const x=o(c,[["render",g]]);export{f as __pageData,x as default};
