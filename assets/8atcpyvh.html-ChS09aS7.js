import{_ as i,c as e,a,o as n}from"./app-a2OoBoQX.js";const l={};function t(d,s){return n(),e("div",null,s[0]||(s[0]=[a(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p><code>jobs</code> 主要用于显示系统中的任务列表及其运行状态。</p><p>该命令可以显示任务号及其对应的进程号，其中<strong>任务号</strong>是以普通用户的角度进行的，而<strong>进程号</strong>则是从系统管理员的角度来看的。一个任务可以对应一个或多个进程号。</p><p><code>jobs</code> 是 <code>Shell</code> 内建命令</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> jobs</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [-lnprs] </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">jobspec</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ... </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> jobs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -x</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">comman</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">d</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [ </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">arg</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">s</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ...</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数</p><ul><li><code>-l</code> 除正常信息外，还列出进程 <code>ID</code>。</li><li><code>-n</code> 仅显示上次通知用户后状态发生改变的作业信息。</li><li><code>-p</code> 仅显示任务对应的进程号。</li><li><code>-r</code> 仅显示运行状态（<code>running</code>）的任务。</li><li><code>-s</code> 仅显示停止状态（<code>stoped</code>）的任务。</li><li><code>-x</code> <code>jobs</code> 将在 <code>command</code> 或 <code>args</code> 中找到的任何作业替换为相应的进程组 <code>ID</code>，并执行 <code>command</code>。</li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><h3 id="jobs-l" tabindex="-1"><a class="header-anchor" href="#jobs-l"><span><code>jobs -l</code></span></a></h3><p><code>jobs</code>的<code>-l</code>选项可显示所有任务的<code>PID</code>，<code>jobs</code>的状态可以是<code>running</code>, <code>stopped</code>, <code>Terminated</code>。但是如果任务被终止了（<code>kill</code>），<code>shell</code> 从当前的<code>shell</code>环境已知的列表中删除任务的进程标识。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> jobs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -l</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  + 24440 running    nohup python3 ./wl_apscheduler.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前后台切换" tabindex="-1"><a class="header-anchor" href="#前后台切换"><span>前后台切换</span></a></h3><ul><li><p><code>Ctrl + c</code>会终止前台命令，也是我们经常用来关闭任务的。</p></li><li><p><code>Ctrl + z</code>可以将一个正在前台执行的命令放到后台，并且处于暂停状态。</p></li></ul><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">^Z</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  + 1588 suspended  pnpm run docs:dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候任务是被暂停的状的，需要使用<code>bg %jobnumber</code>继续执行才能正常访问。</p><ul><li><code>jobs -l</code>查看当前有在后台运行的任务。</li></ul><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> jobs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -l</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  + 1588 suspended  pnpm run docs:dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>bg</code>将一个在后台暂停的命令，变成在后台继续执行。如果后台中有多个命令，可以用<code>bg %jobnumber</code>将选中的命令调出。</li></ul><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bg</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> %1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  + 1588 continued  pnpm run docs:dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>fg</code>将后台中的命令调至前台继续运行。如果后台中有多个命令，可以用<code>fg %jobnumber</code>（是命令编号，不是进程号）将选中的命令调出。</li></ul><p>将后台的所有任务调至前台运行。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> fg</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  + 1588 running    pnpm run docs:dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>将指定的任务调至前台运行。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> fg</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> %1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  + 1588 continued  pnpm run docs:dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong> 不管在后台任务是运行还是未运行，执行<code>fg</code>或<code>fg %jobnumber</code>之后，都会切换到前台运行。</p>`,26)]))}const p=i(l,[["render",t],["__file","8atcpyvh.html.vue"]]),c=JSON.parse('{"path":"/linux/8atcpyvh.html","title":"Linux jobs","lang":"zh-CN","frontmatter":{"title":"Linux jobs","createTime":"2025/01/11 18:00:58","permalink":"/linux/8atcpyvh.html","watermark":true},"headers":[],"readingTime":{"minutes":2.06,"words":617},"git":{"updatedTime":1737353428000,"contributors":[{"name":"唐道勇","username":"唐道勇","email":"matias@tangdaoyongdeMacBook-Pro.local","commits":1,"avatar":"https://avatars.githubusercontent.com/唐道勇?v=4","url":"https://github.com/唐道勇"}]},"filePathRelative":"notes/linux/jobs.md","bulletin":false}');export{p as comp,c as data};