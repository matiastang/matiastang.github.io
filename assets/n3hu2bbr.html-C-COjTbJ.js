import{_ as l,c as t,a,b as i,d as n,e as p,f as d,r as h,o as k}from"./app-a2OoBoQX.js";const r={};function c(o,s){const e=h("RouteLink");return k(),t("div",null,[s[13]||(s[13]=a('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p><code>iTerm2</code> 是 <code>Terminal</code> 的替代品，也是 <code>iTerm</code> 的继任者。它适用于装有 <code>macOS 10.14</code> 或更高版本的 <code>Mac</code>。<code>iTerm2</code>集成了丰富的功能，比<code>Terminal</code>更好用。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p><a href="https://iterm2.com" target="_blank" rel="noopener noreferrer">iterm2</a>网站下载安装即可。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><h3 id="设置背景图片" tabindex="-1"><a class="header-anchor" href="#设置背景图片"><span>设置背景图片</span></a></h3><p><code>iTerm2</code>-&gt;<code>Settings</code>-&gt;<code>Profiles</code>-&gt;<code>Window</code>-&gt;<code>Background Image</code>，选择背景图片设置即可。</p><h3 id="设置字体" tabindex="-1"><a class="header-anchor" href="#设置字体"><span>设置字体</span></a></h3>',8)),i("p",null,[s[1]||(s[1]=i("code",null,"iTerm2",-1)),s[2]||(s[2]=n("->")),s[3]||(s[3]=i("code",null,"Settings",-1)),s[4]||(s[4]=n("->")),s[5]||(s[5]=i("code",null,"Profiles",-1)),s[6]||(s[6]=n("->")),s[7]||(s[7]=i("code",null,"Text",-1)),s[8]||(s[8]=n("->")),s[9]||(s[9]=i("code",null,"Font",-1)),s[10]||(s[10]=n("，选择字体设置即可。 我目前使用的")),s[11]||(s[11]=i("code",null,"Powerline",-1)),s[12]||(s[12]=n("字体，也可以选择其他字体。")),p(e,{to:"/article/n5e1yqix.html#%E5%AE%89%E8%A3%85powerline%E5%AD%97%E4%BD%93"},{default:d(()=>s[0]||(s[0]=[n("安装Powerline字体")])),_:1})]),s[14]||(s[14]=a(`<h3 id="添加工具脚本" tabindex="-1"><a class="header-anchor" href="#添加工具脚本"><span>添加工具脚本</span></a></h3><p>之前用的比较多的就是编写一个登录或发布的<code>.sh</code>脚本，便捷登录云服务器或发布项目到云服务器。现在把打包脚本和发布脚本合并在一起，配置在各个项目中了，用的比较少了，但是这个功能还是挺好的。</p><p>下面通过<code>登录云服务器</code>介绍一下如何在<code>iTerm2</code>中添加并使用自定义的脚步，只要是能正常运行的脚步都可以已类似的方式使用，比如打包项目脚本、发布项目脚本等。</p><p><strong>提示</strong> 下面的脚步中，路径、用户名等这些事写死的，也可以通过参数的形式传入，这样更灵活。但是使用时就失去了便利性，感觉反而不好，不如不同的项目使用不同的脚本去执行。</p><h4 id="登录云服务器" tabindex="-1"><a class="header-anchor" href="#登录云服务器"><span>登录云服务器</span></a></h4><p>我目前主要还是直接使用命令行<code>ssh</code>+<code>服务器</code>登录，如：<code>$ ssh tdy-aliyun</code>。这种脚本登录使用比较少，更多还是做更复杂的任务，但是通过这个例子可以了解一下使用方式。</p><ol><li>编写登录脚本</li></ol><p>假如脚本名称为<code>aliyun-login.sh</code>。</p><p>使用密码登录脚本如下：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#!/usr/bin/expect</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">###</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @Author: matiastang</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @Date: 2021-12-14 11:11:14</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @LastEditors: matiastang</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @LastEditTime: 2022-02-25 13:52:56</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @Description: 登录服务器</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">###</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#  设置超时时间</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> timeout</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#  启动 SSH 子进程</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">spawn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ssh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ipv4地址</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 处理可能出现的提示</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">expect</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 初次连接提示，发送 &quot;yes&quot; 并继续</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    &quot;*yes/no&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        send</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">yes\\r</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        exp_continue</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 出现密码提示,发送密码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    &quot;*password:*&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        send</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$password\\r</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 登录成功的提示，继续等待用户操作</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    &quot;*Welcome to*&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        send_user</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Login successful!\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        exp_continue</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 这里可以添加其他预执行的指令，比如切换到某个目录下面之类的</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 切换到交互模式</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">interact</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用秘钥登录脚本如下：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#!/usr/bin/expect</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">###</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @Author: matiastang</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @Date: 2025-01-07 17:03:24</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @LastEditors: matiastang</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @LastEditTime: 2025-01-07 17:30:05</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @Description: 脚本登录测试</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">### </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 设置超时时间</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> timeout</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 启动 SSH 子进程</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">spawn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ssh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.ssh/matiasGithub/id_rsa</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 22</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> root@ipv4地址</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 处理可能出现的提示</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">expect</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 初次连接提示，发送 &quot;yes&quot; 并继续</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    &quot;*yes/no&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        send</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">yes\\r</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        exp_continue</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 登录成功的提示，继续等待用户操作</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    &quot;*Welcome to*&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        send_user</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Login successful!\\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        exp_continue</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 这里可以添加其他预执行的指令，比如切换到某个目录下面之类的</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 切换到交互模式</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">interact</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本文件中的第一行<code>#!/usr/bin/expect</code>，表示使用<code>expect</code>解释器执行脚本。可以通过<code>which expect</code>查看<code>expect</code>路径，如果未安装需要先安装。 其中<code>~/.ssh/matiasGithub/id_rsa</code>私钥地址，<code>root</code>是用户名，<code>ipv4地址</code>是服务器的<code>ipv4</code>地址。</p><ol start="2"><li>设置脚本权限</li></ol><p>在脚本所在目录下，执行如下命令：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> chmod</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> +x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> aliyun-login.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>把脚本配置到<code>iTerm2</code>的<code>Profiles</code>中</li></ol><p>点击<code>Profiles</code>-&gt;<code>Edit Profiles</code>，在弹出的窗口中(<code>Settings</code>的<code>Profiles</code>项)，点击<code>+</code>，添加一个<code>Profile</code>，在<code>General</code>的<code>Name</code>编辑名称，如：<code>登录aliyun服务器</code>。然后在<code>Command</code>中选择<code>Custom shell</code>，在输入<code>aliyun-login.sh</code>脚本的地址，如：<code>/Users/matias/matias-shell/MT/aliyun-login.sh</code>就可以了。</p><p><strong>注意</strong> 也可以直接通过<code>iTerm2</code>-&gt;<code>Settings</code>-&gt;<code>Profiles</code>来添加。</p><ol start="4"><li>使用脚本</li></ol><p>完成上面的添加后，在<code>iTerm2</code>的<code>Profiles</code>中就能看到我们添加的<code>登录aliyun服务器</code>的脚本了，点击即可登录对应的云服务器。</p><p><strong>注意</strong> 如果提示<code>A session ended very soon after starting. Check that the command in profile &quot;登录aliyun服务器&quot; is correct.</code>需要检查一下脚本是否正确。</p><h4 id="更新文件到云服务器" tabindex="-1"><a class="header-anchor" href="#更新文件到云服务器"><span>更新文件到云服务器</span></a></h4><p>通过下面脚本可以将制定路径的前端<code>dist</code>文件夹中的内容，更新到云服务器指定目录中。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#!/bin/zsh</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">###</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @Author: matiastang</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @Date: 2021-12-13 15:06:21</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @LastEditors: matiastang</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @LastEditTime: 2021-12-14 10:59:13</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # @Description: 前端包更新</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">###</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 检查目录是否存在</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">$HOME/文件/dist/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ]</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">then</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # build目录存在</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # send_tty命令用来实现在终端上显示提示符字串和一个冒号及空格</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> timeout</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 30</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    spawn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> send_tty</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">确定更新“***”开发包吗？:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    scp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -r</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> $HOME</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/文件/dist/</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ipv4地址:/app/front/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    expect</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;yes&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">            send</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">yes\\r</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">            exp_continue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;no&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">            send</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">no\\r</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">已上传目录</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    interact</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">else</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # dist目录不存在</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dist目录不存在!</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><p><a href="https://iterm2.com" target="_blank" rel="noopener noreferrer">iterm2</a></p>`,27))])}const v=l(r,[["render",c],["__file","n3hu2bbr.html.vue"]]),u=JSON.parse('{"path":"/article/n3hu2bbr.html","title":"MacOS使用iTerm2","lang":"zh-CN","frontmatter":{"title":"MacOS使用iTerm2","createTime":"2025/01/07 16:38:05","permalink":"/article/n3hu2bbr.html","tags":["MacOS","iTerm2"],"watermark":true},"headers":[],"readingTime":{"minutes":4.14,"words":1243},"git":{"updatedTime":1737353428000,"contributors":[{"name":"唐道勇","username":"唐道勇","email":"matias@tangdaoyongdeMacBook-Pro.local","commits":1,"avatar":"https://avatars.githubusercontent.com/唐道勇?v=4","url":"https://github.com/唐道勇"}]},"filePathRelative":"macos/iTerm2使用.md","categoryList":[{"id":"43b9d8","sort":10009,"name":"macos"}],"bulletin":false}');export{v as comp,u as data};