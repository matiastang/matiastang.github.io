import{_ as i,c as a,a as e,o as t}from"./app-a2OoBoQX.js";const n={};function d(l,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>在<code>Linux</code>中可以同时执行多个命令，同时执行多个命令同时执行的规则有下面几种情况。</p><ul><li>执行多个命令，前一个命令执行成功，才执行后一个命令。</li><li>执行多个命令，前一个命令执行失败，才执行后一个命令。</li><li>执行多个命令，不管前一个执行失败，都执行后一个命令。</li></ul><h2 id="使用-确保前一个命令执行成功-才执行后一个命令" tabindex="-1"><a class="header-anchor" href="#使用-确保前一个命令执行成功-才执行后一个命令"><span>使用<code>&amp;&amp;</code>，确保前一个命令执行成功，才执行后一个命令</span></a></h2><p>在多个命令中使用<code>&amp;&amp;</code>符号连接，必须是前一个命令执行成功，接着才会执行后一个命令，不管命令有多少个都是按这种规则去执行的。</p><p>下面就以两个简单的命令来举例，第一个命令是<code>cd ~/.ssh/matiasDW</code>，第二个命令是<code>pwd</code>。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.ssh/matiasDW</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> pwd</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/Users/matias/.ssh/matiasDW</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果第一个命令输入一个错误的路径，比如<code>cd ~/.ssh/MT</code>，会是什么情况呢。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.ssh/MT</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &amp;&amp;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> pwd</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> no</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> such</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> or</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> directory:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /Users/matias/.ssh/MT</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出前一个命令执行失败，后一个命令是不能继续执行了。</p><h2 id="使用-确保前一个命令执行失败-才执行后一个命令" tabindex="-1"><a class="header-anchor" href="#使用-确保前一个命令执行失败-才执行后一个命令"><span>使用<code>||</code>，确保前一个命令执行失败，才执行后一个命令</span></a></h2><p>在多个命令中使用<code>||</code>符号连接，则代表着必须是前一个命令执行失败，才会接着执行后一个命令，如果前一个命令执行成功，后一个命令就不会执行。</p><p>下面就来看一个例子，还是使用<code>cd ~/.ssh/MT</code>作为第一个命令，<code>pwd</code>为第二个命令。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.ssh/MT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ||</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> pwd</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> no</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> such</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> or</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> directory:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /Users/matias/.ssh/MT</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/Users/matias/.ssh/matiasDW</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里第一个命令执行失败了，执行了第二个命令。</p><p>第一个路径使用正确的路径，比如<code>cd ~/.ssh/matiasDW</code>，再来看一下。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.ssh/matiasDW</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ||</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> pwd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>没有输出，则表面第二个命令<code>pwd</code>没有执行。</p><h2 id="使用-不管前一个命令执行成功与否-都执行后一个命令" tabindex="-1"><a class="header-anchor" href="#使用-不管前一个命令执行成功与否-都执行后一个命令"><span>使用<code>;</code>，不管前一个命令执行成功与否，都执行后一个命令</span></a></h2><p>3，执行多个命令使；</p><p>在多个命令中使用<code>;</code>符号连接，表示不管前一个命令的执行是否成功，都会执行后面的命令。</p><p>接下来再以刚才的命令<code>cd ~/.ssh/matiasDW</code> 以及 <code>pwd</code>命令。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.ssh/matiasDW</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> pwd</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/Users/matias/.ssh/matiasDW</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果第一个命令输入一个错误的路径，比如<code>cd ~/.ssh/MT</code>，会是什么情况呢。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.ssh/MT</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> pwd</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> no</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> such</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> file</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> or</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> directory:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /Users/matias/.ssh/MT</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/Users/matias/.ssh/matiasDW</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出使用<code>;</code>符合连接多个命令，不管前面的命是成功还是失败，都会执行后面的命令。</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h2><h3 id="使用脚本连接多个命令" tabindex="-1"><a class="header-anchor" href="#使用脚本连接多个命令"><span>使用脚本连接多个命令</span></a></h3><p>我经常使用的更新前端项目的脚本中，有这么一句命令。用来重启<code>nginx</code>服务的。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> fofpro</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cd /data/apps/web-modules/module-name/; rm -rf dist.last; mv dist dist.last; mv dist.fresh dist; nginx -s reload;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这条命令中： <code>ssh -t fofpro</code>使用别名连接远程服务器。 <code>cd /data/apps/web-modules/module-name/</code>是切换到指定目录(这个是对应的前端打包文件存放的路径)。 <code>rm -rf dist.last; mv dist dist.last; mv dist.fresh dist</code>先删除<code>dist.last</code>目录，将<code>dist</code>目录重命名为<code>dist.last</code>，将<code>dist.fresh</code>目录重命名为<code>dist</code>，这样我们就始终保留上一个版本的备份，更新后如果发现有问题可以快速切换回去。 <code>nginx -s reload</code>是重启<code>nginx</code>服务。</p><p>在这句脚本中，就使用了<code>;</code>来链接多个语句，虽然不够严谨，但是我们能确保重启<code>nginx</code>服务。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>执行多个无关命令时，使用<code>;</code>符号连接。 命令之间有依赖关系时需要看情况使用<code>||</code>或<code>&amp;&amp;</code>。</p>`,34)]))}const p=i(n,[["render",d],["__file","q2aze7j1.html.vue"]]),r=JSON.parse('{"path":"/article/q2aze7j1.html","title":"Linux中连接多个命令","lang":"zh-CN","frontmatter":{"title":"Linux中连接多个命令","createTime":"2025/01/13 16:57:01","permalink":"/article/q2aze7j1.html","tags":["Linux"],"watermark":true},"headers":[],"readingTime":{"minutes":3.14,"words":941},"git":{"updatedTime":1737353428000,"contributors":[{"name":"唐道勇","username":"唐道勇","email":"matias@tangdaoyongdeMacBook-Pro.local","commits":1,"avatar":"https://avatars.githubusercontent.com/唐道勇?v=4","url":"https://github.com/唐道勇"}]},"filePathRelative":"linux/Linux中连接多个命令.md","categoryList":[{"id":"e206a5","sort":10010,"name":"linux"}],"bulletin":false}');export{p as comp,r as data};