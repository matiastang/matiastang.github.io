import{_ as d,c as h,a as t,b as i,d as a,e as l,f as n,r as o,o as p}from"./app-a2OoBoQX.js";const r={};function k(c,s){const e=o("RouteLink");return p(),h("div",null,[s[13]||(s[13]=t('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p><code>locate</code>命令用于查找符合条件的文档，他会去保存文档和目录名称的数据库内，查找合乎范本样式条件的文档或目录。一般情况我们只需要输入 <code>locate filename</code> 即可查找指定文件。</p><p><code>locate</code> 是一个快速文件查找工具，通过预构建的数据库（通常是 <code>/var/lib/mlocate/mlocate.db</code> 或 <code>/var/cache/locate/locatedb</code>）来检索文件路径，而不是直接遍历文件系统。</p>',3)),i("p",null,[s[1]||(s[1]=i("strong",null,"注意",-1)),s[2]||(s[2]=a(" 推荐使用 ")),l(e,{to:"/linux/4gjsc8g1.html"},{default:n(()=>s[0]||(s[0]=[i("code",null,"mlocate",-1)])),_:1}),s[3]||(s[3]=a(" 因为它是 ")),s[4]||(s[4]=i("code",null,"locate",-1)),s[5]||(s[5]=a(" 和 ")),s[6]||(s[6]=i("code",null,"slocate",-1)),s[7]||(s[7]=a(" 的现代替代品，结合了二者的优点。"))]),s[14]||(s[14]=t(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> locate</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [-d </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">][--help][--version][范本样式...]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>参数：</p><ul><li><code>-b, --basename</code>：仅匹配路径名的基本名称</li><li><code>-c, --count</code>：只输出找到的数量</li><li><code>-d, --database DBPATH</code>：使用 DBPATH 指定的数据库，而不是默认数据库 /var/lib/mlocate/mlocate.db</li><li><code>-e, --existing</code>：仅打印当前现有文件的条目</li><li><code>-1</code>：如果 是 1．则启动安全模式。在安全模式下，使用者不会看到权限无法看到 的档案。这会始速度减慢，因为 locate 必须至实际的档案系统中取得档案的 权限资料。</li><li><code>-0, --null</code>：在输出上带有NUL的单独条目</li><li><code>-S, --statistics</code>：不搜索条目，打印有关每个数据库的统计信息</li><li><code>-q</code>：安静模式，不会显示任何错误讯息。</li><li><code>-P, --nofollow, -H</code>：检查文件存在时不要遵循尾随的符号链接</li><li><code>-l, --limit, -n LIMIT</code>：将输出（或计数）限制为LIMIT个条目</li><li><code>-n</code>：至多显示 n个输出。</li><li><code>-m, --mmap</code>：被忽略，为了向后兼容</li><li><code>-r, --regexp REGEXP</code>：使用基本正则表达式</li><li><code>--regex</code>：使用扩展正则表达式</li><li><code>-q, --quiet</code>：安静模式，不会显示任何错误讯息</li><li><code>-s, --stdio</code>：被忽略，为了向后兼容</li><li><code>-o</code>：指定资料库存的名称。</li><li><code>-h, --help</code>：显示帮助</li><li><code>-i, --ignore-case</code>：忽略大小写</li><li><code>-V, --version</code>：显示版本信息</li></ul><h2 id="预构建的数据库" tabindex="-1"><a class="header-anchor" href="#预构建的数据库"><span>预构建的数据库</span></a></h2><p>这个命令比较特殊，它需要事先建立索引数据库才能使用。初次使用<code>locate</code>命令时，会有会提示创建数据库：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> locate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ls</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">WARNING:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> The</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> locate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> database</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (/var/db/locate.database) does not exist.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">To</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> the</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> database,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> the</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> following</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> command:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> launchctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> load</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -w</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /System/Library/LaunchDaemons/com.apple.locate.plist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Please</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> be</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> aware</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> that</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> the</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> database</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> can</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> take</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> some</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> time</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> generate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> once</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">the</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> database</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> has</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> been</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> created,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> this</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> message</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> will</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> no</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> longer</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> appear.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据提示，执行以下命令创建数据库：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> launchctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> load</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -w</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /System/Library/LaunchDaemons/com.apple.locate.plist</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建数据库后，方可使用<code>locate</code>命令。</p>`,10)),i("p",null,[s[9]||(s[9]=i("strong",null,"提示",-1)),s[10]||(s[10]=a(" 如果未检索到内容，可以使用")),l(e,{to:"/linux/cyagprt4.html"},{default:n(()=>s[8]||(s[8]=[i("code",null,"updatedb",-1)])),_:1}),s[11]||(s[11]=a("命令来更新数据库后，再次检索。"))]),s[15]||(s[15]=t('<h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h2><h3 id="使用locate查询指令的路径" tabindex="-1"><a class="header-anchor" href="#使用locate查询指令的路径"><span>使用<code>locate</code>查询指令的路径</span></a></h3><p><code>Linux</code>中一切皆为文件，指令也是文件，所以可以使用<code>locate</code>来查询指令的路径。</p><p>使用<code>locate</code>来查询指令的路径命令如下：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> locate</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [选项] </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">模式</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如查询<code>Linux</code>系统中所有以<code>.txt</code>结尾的文件，命令如下：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> locate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> .txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3><ul><li>非常快，因为它查找的是数据库，而不是实时遍历磁盘。</li><li>数据库需要定期更新（通常通过 updatedb 命令或由系统的定时任务自动更新）。</li><li>对用户权限敏感，可能会显示用户无权限访问的文件路径。</li></ul><h3 id="mlocate、slocate、locate的区别" tabindex="-1"><a class="header-anchor" href="#mlocate、slocate、locate的区别"><span><code>mlocate</code>、<code>slocate</code>、<code>locate</code>的区别</span></a></h3><table><thead><tr><th>特性</th><th>locate</th><th>slocate</th><th>mlocate</th></tr></thead><tbody><tr><td>权限控制</td><td>不支持</td><td>支持</td><td>支持</td></tr><tr><td>数据库更新速度</td><td>全量更新，较慢</td><td>全量更新，较慢</td><td>增量更新，更高效</td></tr><tr><td>使用场景</td><td>单用户快速查找文件</td><td>多用户环境注重安全性</td><td>现代化多用户环境</td></tr></tbody></table><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>',13)),i("p",null,[l(e,{to:"/linux/cyagprt4.html"},{default:n(()=>s[12]||(s[12]=[a("Linux updated")])),_:1})]),s[16]||(s[16]=i("p",null,[i("a",{href:"https://www.runoob.com/linux/linux-comm-locate.html",target:"_blank",rel:"noopener noreferrer"},"Linux locate命令")],-1))])}const g=d(r,[["render",k],["__file","xnioegnz.html.vue"]]),m=JSON.parse('{"path":"/linux/xnioegnz.html","title":"Linux locate","lang":"zh-CN","frontmatter":{"title":"Linux locate","createTime":"2025/01/11 15:06:44","permalink":"/linux/xnioegnz.html","watermark":true},"headers":[],"readingTime":{"minutes":3.06,"words":918},"git":{"updatedTime":1737353428000,"contributors":[{"name":"唐道勇","username":"唐道勇","email":"matias@tangdaoyongdeMacBook-Pro.local","commits":1,"avatar":"https://avatars.githubusercontent.com/唐道勇?v=4","url":"https://github.com/唐道勇"}]},"filePathRelative":"notes/linux/locate.md","bulletin":false}');export{g as comp,m as data};