import{_ as a,c as n,a as i,o as l}from"./app-CS9K37Kg.js";const e={};function p(t,s){return l(),n("div",null,s[0]||(s[0]=[i(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>自 2022 年 9 月 28 日起，谷歌翻译退出了中国市场，具体表现为 <a href="https://translate.google.cn" target="_blank" rel="noopener noreferrer">https://translate.google.cn</a> 打开后会显示 <code>translate.google.com.hk</code>，不再是真正的谷歌翻译网站，国内所有使用谷歌翻译的软件都受到了影响，这也导致划词翻译里的谷歌翻译和网页全文翻译会出现<strong>远程服务器响应超时</strong>或<strong>错误码 404/400</strong>等问题。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><ul><li>配置本机的DNS解析</li><li>使用梯子翻墙（最稳定）</li><li>其他翻译方案</li></ul><h3 id="配置本机的dns解析" tabindex="-1"><a class="header-anchor" href="#配置本机的dns解析"><span>配置本机的DNS解析</span></a></h3><p>虽然谷歌翻译退出了中国市场，但目前暂时可以通过修改 <code>IP</code> 的方式连接到国内的谷歌翻译。</p><p><strong>注意</strong> IP 可能会在一段时间后失效，每当 IP 失效时，我会寻找新的可用 IP 更新在下方，届时你就需要重新更新一下 IP\`。</p><h4 id="自动化工具" tabindex="-1"><a class="header-anchor" href="#自动化工具"><span>自动化工具</span></a></h4><p>目前有两个工具能做到自动化扫描可用 <code>IP</code> 并写入 <code>hosts</code>，分别为：</p><ul><li><a href="https://github.com/Ponderfly/GoogleTranslateIpCheck" target="_blank" rel="noopener noreferrer">GoogleTranslateIpCheck</a>：这个工具需要使用命令行终端运行</li><li><a href="https://github.com/GoodCoder666/GoogleTranslate_IPFinder" target="_blank" rel="noopener noreferrer">GoogleTranslate_IPFinder</a>：这个工具带有操作界面，更容易上手</li></ul><h4 id="第一步-选择可用-ip-地址" tabindex="-1"><a class="header-anchor" href="#第一步-选择可用-ip-地址"><span>第一步：选择可用 IP 地址</span></a></h4><p>谷歌翻译IPv4地址列表：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">details</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">summary</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">谷歌翻译国内可用 IP 库</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">summary</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    108.177.97.100 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.157.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.10.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.118.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.12.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.8.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.99.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.107.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.160.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.125.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.117.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.114.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.103.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.100.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.159.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.1.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.115.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.217.214.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.114.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.6.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.116.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.128.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.113.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.217.203.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.162.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.217.215.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.16.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.120.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.163.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    108.177.122.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.136.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.126.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.141.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.30.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.105.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.107.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.161.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.125.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.28.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    108.177.126.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.2.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.8.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.58.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.152.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.18.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.5.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.98.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    108.177.127.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.12.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.153.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.9.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.142.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.11.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.112.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.138.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.111.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.116.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.97.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.13.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.4.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.123.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.145.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.1.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.9.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.158.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.15.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.27.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.113.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.102.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.112.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.123.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.119.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    216.58.227.66 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.124.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.126.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.112.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.10.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.217.192.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.217.195.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    108.177.111.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.62.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.31.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.217.204.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.117.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    216.58.227.65 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.217.222.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.166.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.251.111.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    216.58.227.67 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    142.250.96.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.115.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    172.253.63.90 translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">details</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>谷歌翻译<code>IPv6</code>地址列表：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">details</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">summary</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">谷歌翻译国内可用 IP 库（IPv6）</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">summary</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2607:f8b0:4001:c07::5a translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2404:6800:4008:c13::5a translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2404:6800:4008:c15::5a translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2404:6800:4003:c00::5a translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2404:6800:4003:c01::5a translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2404:6800:4003:c02::5a translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2607:f8b0:4023:1402::5a translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2607:f8b0:4023:1401::5a translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2607:f8b0:4023:401::5a translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2607:f8b0:4023:1::5a translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    2607:f8b0:4023::5a translate.googleapis.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">details</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二步-将-ip-写入-hosts-文件中" tabindex="-1"><a class="header-anchor" href="#第二步-将-ip-写入-hosts-文件中"><span>第二步：将 IP 写入 hosts 文件中</span></a></h4><h5 id="windows-系统" tabindex="-1"><a class="header-anchor" href="#windows-系统"><span>Windows 系统</span></a></h5><p>【以管理员身份运行】系统自带的“记事本”程序，通过其菜单中的【打开】按如下路径打开 hosts 文件（注意，记事本程序默认只显示文本文件，需要将“文件类型”选为【所有】才能看到 hosts 文件）：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">C:\\Windows\\System32\\drivers\\etc\\hosts</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后将 IP 粘贴到 hosts 文件中的最后一行并保存。如果今后想要删掉这些规则，和添加时的操作一样，打开 hosts 文件将其删除即可</p><p><strong>注意</strong> 如果保存时提示无权限，请先给 hosts 文件添加权限后再重新修改 hosts。</p><h5 id="macos-系统" tabindex="-1"><a class="header-anchor" href="#macos-系统"><span>macOS 系统</span></a></h5><p>使用vim编辑，在终端输入以下命令并回车，在出现密码提示后输入你为当前账户设置的登录密码再按回车即可打开 hosts 文件。</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/hosts</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>注意</strong> 输入密码时是不显示任何信息的，只要确保输入的密码是正确的就可以。</p><p>如果今后想要删掉添加的这条 IP，同样使用vim编辑，删除即可。</p><h4 id="第三步-测试-ip-是否可用" tabindex="-1"><a class="header-anchor" href="#第三步-测试-ip-是否可用"><span>第三步：测试 IP 是否可用</span></a></h4><p>保存 <code>hosts</code> 文件后，先重启一下浏览器，然后测试谷歌翻译是否恢复正常。如果没有恢复，那么你需要从 <code>hosts</code> 中删掉这条不能用的 <code>IP</code>，重新复制一条新的 <code>IP</code> 并用前面的步骤将它写进 <code>hosts</code> 当中。</p><h3 id="使用梯子-最稳定" tabindex="-1"><a class="header-anchor" href="#使用梯子-最稳定"><span>使用梯子（最稳定）</span></a></h3><p>由于谷歌翻译已退出中国市场，所以唯一长久稳定的方案就是使用梯子连接到国外的谷歌翻译。</p><p>首先，如果你设置过谷歌翻译的镜像地址，那么需要先清空这个地址。</p><p>然后，在梯子内将 <code>translate.googleapis.com</code> 设为走代理（<code>PROXY</code>）即可。不同的软件有不同的设置方式，你需要阅读你所使用的软件的文档或者通过搜索引擎查询该如何设置。</p><p>你也可以给梯子开全局模式，也就是所有域名都走国外 <code>IP</code>。但是，国内网站的访问速度会因此变慢，所以还是建议花点时间研究下如何添加代理规则。</p><h3 id="其他翻译方案" tabindex="-1"><a class="header-anchor" href="#其他翻译方案"><span>其他翻译方案</span></a></h3><p>除了谷歌翻译，还有许多其他的翻译方案。</p><p>目前使用了一个<a href="https://immersivetranslate.cn" target="_blank" rel="noopener noreferrer">沉浸式翻译</a>的浏览器插件，里面有免费的方案和大模型的方案。我目前使用的是<strong>微软翻译</strong>的免费方案，挺好用的。如果是需要寻找谷歌翻译的替代方案，强烈推荐使用这个插件。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><p><a href="https://immersivetranslate.cn" target="_blank" rel="noopener noreferrer">沉浸式翻译</a></p><p><a href="https://hcfy.app/blog/2022/09/28/ggg" target="_blank" rel="noopener noreferrer">谷歌翻译出现“远程服务器响应超时”或“错误码 404/400”等问题的解决方案</a></p>`,39)]))}const c=a(e,[["render",p],["__file","g9wbwsl9.html.vue"]]),r=JSON.parse('{"path":"/article/g9wbwsl9.html","title":"Chrome 翻译不能用的解决方案","lang":"zh-CN","frontmatter":{"title":"Chrome 翻译不能用的解决方案","createTime":"2025/01/20 10:23:51","permalink":"/article/g9wbwsl9.html","tags":["Chrome"],"watermark":true},"headers":[],"readingTime":{"minutes":4.55,"words":1365},"git":{"updatedTime":1755670488000,"contributors":[{"name":"唐道勇","username":"唐道勇","email":"matias@tangdaoyongdeMacBook-Pro.local","commits":1,"avatar":"https://avatars.githubusercontent.com/唐道勇?v=4","url":"https://github.com/唐道勇"}]},"filePathRelative":"chrome/translate.md","categoryList":[{"id":"554838","sort":10045,"name":"chrome"}],"bulletin":false}');export{c as comp,r as data};
