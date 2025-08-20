import{_ as n,c as a,a as e,o as i}from"./app-CS9K37Kg.js";const l={};function r(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew"><span>homebrew</span></a></h1><p><a href="http://mirrors.ustc.edu.cn/help/homebrew-bottles.html" target="_blank" rel="noopener noreferrer">homebrew文档</a><a href="http://mirrors.ustc.edu.cn/help/homebrew-bottles.html" target="_blank" rel="noopener noreferrer">镜像</a></p><h2 id="报错" tabindex="-1"><a class="header-anchor" href="#报错"><span>报错</span></a></h2><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ brew install wget</span></span>
<span class="line"><span>Error: Cannot install under Rosetta 2 in ARM default prefix (/opt/homebrew)!</span></span>
<span class="line"><span>To rerun under ARM use:</span></span>
<span class="line"><span>    arch -arm64 brew install ...</span></span>
<span class="line"><span>To install under x86_64, install Homebrew into /usr/local.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则使用如下安装</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ arch -arm64 brew install wget</span></span>
<span class="line"><span>Updating Homebrew...</span></span>
<span class="line"><span>==&gt; Downloading https://mirrors.ustc.edu.cn/homebrew-bottles//bottles-portable-ruby/portable-ruby-2.6.8_1.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>########################################################################################################################### 100.0%</span></span>
<span class="line"><span>==&gt; Pouring portable-ruby-2.6.8_1.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>==&gt; Downloading https://mirrors.ustc.edu.cn/homebrew-bottles//libunistring-0.9.10.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>#=#=#    </span></span>
<span class="line"><span>这里报错，没有下载下来                                                                     </span></span>
<span class="line"><span>curl: (22) The requested URL returned error: 404 </span></span>
<span class="line"><span>Warning: Bottle missing, falling back to the default domain...</span></span>
<span class="line"><span>==&gt; Downloading https://ghcr.io/v2/homebrew/core/libunistring/manifests/0.9.10</span></span>
<span class="line"><span>Already downloaded: /Users/matias/Library/Caches/Homebrew/downloads/152db94f938ae80e8c2638e27ddd2a889c56c01b723d2512073f2f605771b406--libunistring-0.9.10.bottle_manifest.json</span></span>
<span class="line"><span>==&gt; Downloading https://ghcr.io/v2/homebrew/core/libunistring/blobs/sha256:73cc290ebcefd6354329317266d9e110e3a5967d0a8260d2cf7d4dd</span></span>
<span class="line"><span>Already downloaded: /Users/matias/Library/Caches/Homebrew/downloads/b68429257038e80dad7f5e906f26422d73b1a124cafb3a4f6d4d8aad2a96419c--libunistring--0.9.10.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>==&gt; Downloading https://mirrors.ustc.edu.cn/homebrew-bottles//libidn2-2.3.2.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>#=#=#                                                                         </span></span>
<span class="line"><span>curl: (22) The requested URL returned error: 404 </span></span>
<span class="line"><span>Warning: Bottle missing, falling back to the default domain...</span></span>
<span class="line"><span>==&gt; Downloading https://ghcr.io/v2/homebrew/core/libidn2/manifests/2.3.2</span></span>
<span class="line"><span>Already downloaded: /Users/matias/Library/Caches/Homebrew/downloads/b8f2405de653b6eec7b67d66be89a8aa5babeb4a79fefd07d1998040d99b02cb--libidn2-2.3.2.bottle_manifest.json</span></span>
<span class="line"><span>==&gt; Downloading https://ghcr.io/v2/homebrew/core/libidn2/blobs/sha256:dbaac7e6e29ffa8c7c2b5e152fd6ee0118e547f90dc4b180c7f168c2f681</span></span>
<span class="line"><span>Already downloaded: /Users/matias/Library/Caches/Homebrew/downloads/0c864cdf0fdabf8f11a656adb96a68df4cc168dd5780c63dc91e3dca55c49fba--libidn2--2.3.2.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>==&gt; Downloading https://mirrors.ustc.edu.cn/homebrew-bottles//ca-certificates-2021-09-30.all.bottle.1.tar.gz</span></span>
<span class="line"><span>#=#=#                                                                         </span></span>
<span class="line"><span>curl: (22) The requested URL returned error: 404 </span></span>
<span class="line"><span>Warning: Bottle missing, falling back to the default domain...</span></span>
<span class="line"><span>==&gt; Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/manifests/2021-09-30-1</span></span>
<span class="line"><span>Already downloaded: /Users/matias/Library/Caches/Homebrew/downloads/6dd04846039f56f603a1f00eb98dd3f8f8dd9246a06afb89958640ccbe83f5b6--ca-certificates-2021-09-30-1.bottle_manifest.json</span></span>
<span class="line"><span>==&gt; Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/blobs/sha256:47c9cd6ec69dbbf8a3f697e6b07df409a573c779aa86ceadc7d9</span></span>
<span class="line"><span>Already downloaded: /Users/matias/Library/Caches/Homebrew/downloads/1f75a2a0c129e67e1492b5aded76ae26983f65488046276a2a8815f5abe564c2--ca-certificates--2021-09-30.all.bottle.1.tar.gz</span></span>
<span class="line"><span>==&gt; Downloading https://mirrors.ustc.edu.cn/homebrew-bottles//openssl%401.1-1.1.1l_1.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>#=#=#                                                                         </span></span>
<span class="line"><span>curl: (22) The requested URL returned error: 404 </span></span>
<span class="line"><span>Warning: Bottle missing, falling back to the default domain...</span></span>
<span class="line"><span>==&gt; Downloading https://ghcr.io/v2/homebrew/core/openssl/1.1/manifests/1.1.1l_1</span></span>
<span class="line"><span>Already downloaded: /Users/matias/Library/Caches/Homebrew/downloads/2afc290b1f48dc850bc4c1ee70efde6f32fbc5d2437e1f72e659da2a9304fb17--openssl@1.1-1.1.1l_1.bottle_manifest.json</span></span>
<span class="line"><span>==&gt; Downloading https://ghcr.io/v2/homebrew/core/openssl/1.1/blobs/sha256:e3d8556cec907ad1e0ea00aebd0b0b516dde06ea3bf24308290ad785</span></span>
<span class="line"><span>Already downloaded: /Users/matias/Library/Caches/Homebrew/downloads/3172910d41ba89a8c61d2c0b211b6360645c2c885045fc5ff46304e5018437b0--openssl@1.1--1.1.1l_1.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>==&gt; Downloading https://mirrors.ustc.edu.cn/homebrew-bottles//wget-1.21.2.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>#=#=#                                                                         </span></span>
<span class="line"><span>curl: (22) The requested URL returned error: 404 </span></span>
<span class="line"><span>Warning: Bottle missing, falling back to the default domain...</span></span>
<span class="line"><span>==&gt; Downloading https://ghcr.io/v2/homebrew/core/wget/manifests/1.21.2</span></span>
<span class="line"><span>Already downloaded: /Users/matias/Library/Caches/Homebrew/downloads/4f1bc54b93b7a55f2985ec8156562ecee5fe37bc720f3d3d11ba47f7c685cb58--wget-1.21.2.bottle_manifest.json</span></span>
<span class="line"><span>==&gt; Downloading https://ghcr.io/v2/homebrew/core/wget/blobs/sha256:4f8b66c5f181f01064522a80bfda72eabddd47299a8b88bc7d0022c457e7259</span></span>
<span class="line"><span>Already downloaded: /Users/matias/Library/Caches/Homebrew/downloads/8f69d6461070918e45127e7eba47b0e690e2d3cbb22d7f0590b8fc8dce9cbb1d--wget--1.21.2.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>==&gt; Installing dependencies for wget: libunistring, libidn2, ca-certificates and openssl@1.1</span></span>
<span class="line"><span>==&gt; Installing wget dependency: libunistring</span></span>
<span class="line"><span>==&gt; Pouring libunistring-0.9.10.arm64_big_sur.bottle.tar.gz</span></span>
<span class="line"><span>Error: No such file or directory @ rb_sysopen - /Users/matias/Library/Caches/Homebrew/downloads/30b9bd474869f1fad00ef30f12045a47cbbb4dabef98168f99d85d677c1b681f--libunistring-0.9.10.arm64_big_sur.bottle.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先更新<code>homebrew</code></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ brew update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>再下载</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>arch -arm64 brew install wget</span></span>
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
<span class="line"><span>Pruned 0 symbolic links and 2 directories from /opt/homebrew</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const d=n(l,[["render",r],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/article/6dm66i1j/","title":"homebrew","lang":"zh-CN","frontmatter":{"title":"homebrew","createTime":"2025/01/21 15:30:36","permalink":"/article/6dm66i1j/","watermark":true},"headers":[],"readingTime":{"minutes":2.25,"words":675},"git":{"updatedTime":1755670488000,"contributors":[{"name":"唐道勇","username":"唐道勇","email":"matias@tangdaoyongdeMacBook-Pro.local","commits":1,"avatar":"https://avatars.githubusercontent.com/唐道勇?v=4","url":"https://github.com/唐道勇"}]},"filePathRelative":"notes/python/homebrew.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"0d4964","sort":10032,"name":"python"}],"bulletin":false}');export{d as comp,c as data};
