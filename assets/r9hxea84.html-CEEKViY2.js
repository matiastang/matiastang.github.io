import{_ as i,c as a,a as n,o as l}from"./app-a2OoBoQX.js";const e={};function h(k,s){return l(),a("div",null,s[0]||(s[0]=[n(`<p>在<code>Ubuntu</code>等一些<code>Linux</code>系统中，有多重方式可以查看内存使用情况。</p><h2 id="查看内存" tabindex="-1"><a class="header-anchor" href="#查看内存"><span>查看内存</span></a></h2><h3 id="cat-proc-meminfo查看" tabindex="-1"><a class="header-anchor" href="#cat-proc-meminfo查看"><span><code>cat /proc/meminfo</code>查看</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /proc/meminfo</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">MemTotal:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">        1725484</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">MemFree:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">          186300</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">MemAvailable:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     821424</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Buffers:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">           91276</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Cached:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">           635428</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">SwapCached:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">            0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Active:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">           422860</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Inactive:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">         848744</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Active(anon</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">):       1092 kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Inactive(anon</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">):   555548 kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Active(file</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">):     421768 kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Inactive(file</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">):   293196 kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Unevictable:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">       29176</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Mlocked:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">           27640</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">SwapTotal:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">             0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">SwapFree:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">              0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Dirty:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">               304</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Writeback:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">             0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">AnonPages:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">        574076</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Mapped:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">           161360</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Shmem:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">              2676</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">KReclaimable:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     100840</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Slab:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">             150520</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">SReclaimable:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     100840</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">SUnreclaim:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">        49680</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">KernelStack:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">        4144</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">PageTables:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">         6328</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">NFS_Unstable:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">          0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Bounce:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">                0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">WritebackTmp:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">          0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">CommitLimit:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">      862740</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Committed_AS:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    1553316</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">VmallocTotal:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">   34359738367</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">VmallocUsed:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">       18020</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">VmallocChunk:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">          0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Percpu:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">             1408</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">HardwareCorrupted:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">AnonHugePages:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">         0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ShmemHugePages:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">        0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ShmemPmdMapped:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">        0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">FileHugePages:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">         0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">FilePmdMapped:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">         0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">HugePages_Total:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">       0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">HugePages_Free:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">        0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">HugePages_Rsvd:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">        0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">HugePages_Surp:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">        0</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Hugepagesize:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">       2048</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Hugetlb:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">               0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">DirectMap4k:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">      173344</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">DirectMap2M:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     1822720</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">DirectMap1G:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">           0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kB</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="free查看" tabindex="-1"><a class="header-anchor" href="#free查看"><span><code>free</code>查看</span></a></h3><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> free</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -h</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">               total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        used</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        free</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">      shared</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  buff/cache</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">   available</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Mem:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">           1.6Gi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">       637Mi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">       158Mi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">       2.0Mi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">       889Mi</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">       859Mi</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Swap:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">             0B</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">          0B</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">          0B</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong> <code>free</code>中查看的内存比实际的偏小。这是因为操作系统系统本身会占用一定的内存，但<code>free</code>命令不会统计。比如上面是在<code>2GB</code>内存的<code>Ubuntu</code>系统中查看的，总共只有<code>1.6G</code>。</p><p>这可能是因为内核正在使用您的部分内存。由于在大多数情况下无法释放内核内存，因此 Ubuntu 仅报告可用总量（减去内核使用的数量）。</p><p>您可以使用以下命令找到更多详细信息：</p><p>检查您的 <code>RAM</code> 棒声称有多大：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dmidecode</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Size</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> MB</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查有多少 <code>RAM</code> 可用于一般用途：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> free</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -h</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>估计您的内核使用了多少内存：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /proc/meminfo</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Slab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查您的显卡是否“偷走了”内存：</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dmesg</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> stolen</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,17)]))}const p=i(e,[["render",h],["__file","r9hxea84.html.vue"]]),d=JSON.parse('{"path":"/article/r9hxea84.html","title":"查看内存","lang":"zh-CN","frontmatter":{"title":"查看内存","createTime":"2025/01/18 18:07:30","permalink":"/article/r9hxea84.html","draft":true,"tags":["Ubuntu"],"watermark":true},"headers":[],"readingTime":{"minutes":1.54,"words":462},"git":{"updatedTime":1737353428000,"contributors":[{"name":"唐道勇","username":"唐道勇","email":"matias@tangdaoyongdeMacBook-Pro.local","commits":1,"avatar":"https://avatars.githubusercontent.com/唐道勇?v=4","url":"https://github.com/唐道勇"}]},"filePathRelative":"ubuntu/查看内存.md","categoryList":[{"id":"1d41c8","sort":10004,"name":"ubuntu"}],"bulletin":false}');export{p as comp,d as data};