import{_ as n,c as a,a as e,o as i}from"./app-CS9K37Kg.js";const l={};function r(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="wget" tabindex="-1"><a class="header-anchor" href="#wget"><span>wget</span></a></h1><p><a href="https://baijiahao.baidu.com/s?id=1714300855200071381&amp;wfr=spider&amp;for=pc" target="_blank" rel="noopener noreferrer">wget</a></p><p>wget 是一个从网络上自动下载文件的自由工具，支持通过 HTTP、HTTPS、FTP 三个最常见的 TCP/IP协议 下载，并可以使用 HTTP 代理。&quot;wget&quot; 这个名称来源于 “World Wide Web” 与 “get” 的结合。 所谓自动下载，是指 wget 可以在用户退出系统的之后在继续后台执行，直到下载任务完成。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ brew install wget</span></span>
<span class="line"><span>brew install wget </span></span>
<span class="line"><span>Error: Cannot install under Rosetta 2 in ARM default prefix (/opt/homebrew)!</span></span>
<span class="line"><span>To rerun under ARM use:</span></span>
<span class="line"><span>    arch -arm64 brew install ...</span></span>
<span class="line"><span>To install under x86_64, install Homebrew into /usr/local.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ arch -arm64 brew install wget</span></span>
<span class="line"><span>==&gt; Downloading https://mirrors.ustc.edu.cn/homebrew-bottles//libunistring-1.0.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>######################################################################## 100.0%</span></span>
<span class="line"><span>==&gt; Downloading https://mirrors.ustc.edu.cn/homebrew-bottles//libidn2-2.3.3.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>######################################################################## 100.0%</span></span>
<span class="line"><span>==&gt; Downloading https://mirrors.ustc.edu.cn/homebrew-bottles//ca-certificates-2022-07-19_1.all.bottle.tar.gz</span></span>
<span class="line"><span>######################################################################## 100.0%</span></span>
<span class="line"><span>==&gt; Downloading https://mirrors.ustc.edu.cn/homebrew-bottles//openssl%401.1-1.1.1q.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>######################################################################## 100.0%</span></span>
<span class="line"><span>==&gt; Downloading https://mirrors.ustc.edu.cn/homebrew-bottles//wget-1.21.3.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>######################################################################## 100.0%</span></span>
<span class="line"><span>==&gt; Installing dependencies for wget: libunistring, libidn2, ca-certificates and openssl@1.1</span></span>
<span class="line"><span>==&gt; Installing wget dependency: libunistring</span></span>
<span class="line"><span>==&gt; Pouring libunistring-1.0.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>🍺  /opt/homebrew/Cellar/libunistring/1.0: 56 files, 4.8MB</span></span>
<span class="line"><span>==&gt; Installing wget dependency: libidn2</span></span>
<span class="line"><span>==&gt; Pouring libidn2-2.3.3.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>🍺  /opt/homebrew/Cellar/libidn2/2.3.3: 78 files, 1MB</span></span>
<span class="line"><span>==&gt; Installing wget dependency: ca-certificates</span></span>
<span class="line"><span>==&gt; Pouring ca-certificates-2022-07-19_1.all.bottle.tar.gz</span></span>
<span class="line"><span>==&gt; Regenerating CA certificate bundle from keychain, this may take a while...</span></span>
<span class="line"><span>🍺  /opt/homebrew/Cellar/ca-certificates/2022-07-19_1: 3 files, 222.5KB</span></span>
<span class="line"><span>==&gt; Installing wget dependency: openssl@1.1</span></span>
<span class="line"><span>==&gt; Pouring openssl@1.1-1.1.1q.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>🍺  /opt/homebrew/Cellar/openssl@1.1/1.1.1q: 8,097 files, 18MB</span></span>
<span class="line"><span>==&gt; Installing wget</span></span>
<span class="line"><span>==&gt; Pouring wget-1.21.3.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>🍺  /opt/homebrew/Cellar/wget/1.21.3: 89 files, 4.2MB</span></span>
<span class="line"><span>==&gt; \`brew cleanup\` has not been run in the last 30 days, running now...</span></span>
<span class="line"><span>Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.</span></span>
<span class="line"><span>Hide these hints with HOMEBREW_NO_ENV_HINTS (see \`man brew\`).</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/brotli--1.0.9.arm64_big_sur.bottle.tar.gz... (988.7KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/c-ares--1.17.2.arm64_big_sur.bottle.tar.gz... (156.8KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/ca-certificates--2021-09-30... (114.6KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/gdbm--1.20.arm64_big_sur.bottle.tar.gz... (222.3KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/icu4c--69.1.arm64_big_sur.bottle.tar.gz... (27.4MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/jemalloc--5.2.1_1.arm64_big_sur.bottle.tar.gz... (681.7KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/libev--4.33.arm64_big_sur.bottle.tar.gz... (148.0KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/libidn2--2.3.2... (257.3KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/libunistring--0.9.10... (1.4MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/libuv--1.42.0.arm64_big_sur.bottle.tar.gz... (1.3MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/mpdecimal--2.5.1.arm64_big_sur.bottle.tar.gz... (544.0KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/mysql@5.7--5.7.35.arm64_big_sur.bottle.1.tar.gz... (70.9MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/n--7.3.1.arm64_big_sur.bottle.tar.gz... (21.8KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/nghttp2--1.44.0.arm64_big_sur.bottle.tar.gz... (938.5KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/node--16.9.1.arm64_big_sur.bottle.tar.gz... (12.6MB)</span></span>
<span class="line"><span>Removing: /opt/homebrew/Cellar/openssl@1.1/1.1.1l... (8,073 files, 18MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/openssl@1.1--1.1.1l_1... (5MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/openssl@1.1--1.1.1l.arm64_big_sur.bottle.tar.gz... (5MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/pipx--0.16.4.arm64_big_sur.bottle.tar.gz... (261.1KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/pnpm--6.15.1.arm64_big_sur.bottle.tar.gz... (2.2MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/python@3.9--3.9.7.arm64_big_sur.bottle.tar.gz... (13.6MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/readline--8.1.arm64_big_sur.bottle.tar.gz... (559.2KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/sqlite--3.36.0.arm64_big_sur.bottle.tar.gz... (1.9MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/telnet--63.arm64_big_sur.bottle.tar.gz... (52.7KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/wget--1.21.2... (1.4MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/xz--5.2.5.arm64_big_sur.bottle.tar.gz... (416.9KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/yarn--1.22.11.all.bottle.tar.gz... (1.2MB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/python@3.9_bottle_manifest--3.9.6... (15.4KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Caches/Homebrew/go_bottle_manifest--1.16.6... (5.9KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Logs/Homebrew/go... (64B)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Logs/Homebrew/gdbm... (64B)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Logs/Homebrew/mpdecimal... (64B)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Logs/Homebrew/pipx... (64B)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Logs/Homebrew/readline... (64B)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Logs/Homebrew/sqlite... (64B)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Logs/Homebrew/xz... (64B)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Logs/Homebrew/mysql@5.7... (1.6KB)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Logs/Homebrew/telnet... (64B)</span></span>
<span class="line"><span>Removing: /Users/matias/Library/Logs/Homebrew/python@3.9... (2 files, 2.5KB)</span></span>
<span class="line"><span>Pruned 0 symbolic links and 2 directories from /opt/homebrew</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载<code>python</code>版本到<code>~/.pyenv/cache/</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>wget http://mirrors.sohu.com/python/3.10.5/Python-3.10.5.tar.xz -P ~/.pyenv/cache/</span></span>
<span class="line"><span>--2022-07-26 17:24:51--  http://mirrors.sohu.com/python/3.10.5/Python-3.10.5.tar.xz</span></span>
<span class="line"><span>正在解析主机 mirrors.sohu.com (mirrors.sohu.com)... 123.125.123.141</span></span>
<span class="line"><span>正在连接 mirrors.sohu.com (mirrors.sohu.com)|123.125.123.141|:80... 已连接。</span></span>
<span class="line"><span>已发出 HTTP 请求，正在等待回应... 403 Forbidden</span></span>
<span class="line"><span>2022-07-26 17:24:51 错误 403：Forbidden。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://mirrors.sohu.com/" target="_blank" rel="noopener noreferrer">查看python的版本</a></p>`,9)]))}const m=n(l,[["render",r],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/article/017d02cm/","title":"wget","lang":"zh-CN","frontmatter":{"title":"wget","createTime":"2025/01/21 15:30:37","permalink":"/article/017d02cm/","watermark":true},"headers":[],"readingTime":{"minutes":1.88,"words":564},"git":{"updatedTime":1755670488000,"contributors":[{"name":"唐道勇","username":"唐道勇","email":"matias@tangdaoyongdeMacBook-Pro.local","commits":1,"avatar":"https://avatars.githubusercontent.com/唐道勇?v=4","url":"https://github.com/唐道勇"}]},"filePathRelative":"notes/python/wget.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"0d4964","sort":10032,"name":"python"}],"bulletin":false}');export{m as comp,c as data};
