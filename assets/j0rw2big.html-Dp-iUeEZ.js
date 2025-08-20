import{_ as n,c as a,a as e,o as i}from"./app-CS9K37Kg.js";const l={};function d(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql"><span>安装mysql</span></a></h1><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h2><h3 id="查看" tabindex="-1"><a class="header-anchor" href="#查看"><span>查看</span></a></h3><p><code>ubuntu</code>中如果未安装<code>mysql</code>则在命令行中执行<code>mysql --version</code>指令尝试查看版本时会有如下提示：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ mysql --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Command &#39;mysql&#39; not found, but can be installed with:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apt install mysql-client-core-8.0     # version 8.0.32-0ubuntu0.20.04.2, or</span></span>
<span class="line"><span>apt install mariadb-client-core-10.3  # version 1:10.3.38-0ubuntu0.20.04.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><ul><li>安装<code>mysql-client-core-8.0</code></li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ apt install mysql-client-core-8.0</span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree</span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span>The following NEW packages will be installed:</span></span>
<span class="line"><span>  mysql-client-core-8.0</span></span>
<span class="line"><span>0 upgraded, 1 newly installed, 0 to remove and 227 not upgraded.</span></span>
<span class="line"><span>Need to get 5,157 kB of archives.</span></span>
<span class="line"><span>After this operation, 75.4 MB of additional disk space will be used.</span></span>
<span class="line"><span>Get:1 http://repo.huaweicloud.com/ubuntu focal-updates/main amd64 mysql-client-core-8.0 amd64 8.0.32-0ubuntu0.20.04.2 [5,157 kB]</span></span>
<span class="line"><span>Fetched 5,157 kB in 0s (43.3 MB/s)</span></span>
<span class="line"><span>Selecting previously unselected package mysql-client-core-8.0.</span></span>
<span class="line"><span>(Reading database ... 116244 files and directories currently installed.)</span></span>
<span class="line"><span>Preparing to unpack .../mysql-client-core-8.0_8.0.32-0ubuntu0.20.04.2_amd64.deb ...</span></span>
<span class="line"><span>Unpacking mysql-client-core-8.0 (8.0.32-0ubuntu0.20.04.2) ...</span></span>
<span class="line"><span>Setting up mysql-client-core-8.0 (8.0.32-0ubuntu0.20.04.2) ...</span></span>
<span class="line"><span>Processing triggers for man-db (2.9.1-1) ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装<code>mariadb-client-core-10.3</code>，中途会有<code>Do you want to continue? [Y/n]</code>的提示，输入<code>Y</code>回车即可。</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ apt install mariadb-client-core-10.3</span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree</span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span>The following additional packages will be installed:</span></span>
<span class="line"><span>  libsnappy1v5 mariadb-common mysql-common</span></span>
<span class="line"><span>The following packages will be REMOVED:</span></span>
<span class="line"><span>  mysql-client-core-8.0</span></span>
<span class="line"><span>The following NEW packages will be installed:</span></span>
<span class="line"><span>  libsnappy1v5 mariadb-client-core-10.3 mariadb-common mysql-common</span></span>
<span class="line"><span>0 upgraded, 4 newly installed, 1 to remove and 227 not upgraded.</span></span>
<span class="line"><span>Need to get 5,895 kB of archives.</span></span>
<span class="line"><span>After this operation, 47.0 MB disk space will be freed.</span></span>
<span class="line"><span>Do you want to continue? [Y/n] Y</span></span>
<span class="line"><span>Get:1 http://repo.huaweicloud.com/ubuntu focal/main amd64 mysql-common all 5.8+1.0.5ubuntu2 [7,496 B]</span></span>
<span class="line"><span>Get:2 http://repo.huaweicloud.com/ubuntu focal-updates/universe amd64 mariadb-common all 1:10.3.38-0ubuntu0.20.04.1 [15.9 kB]</span></span>
<span class="line"><span>Get:3 http://repo.huaweicloud.com/ubuntu focal/main amd64 libsnappy1v5 amd64 1.1.8-1build1 [16.7 kB]</span></span>
<span class="line"><span>Get:4 http://repo.huaweicloud.com/ubuntu focal-updates/universe amd64 mariadb-client-core-10.3 amd64 1:10.3.38-0ubuntu0.20.04.1 [5,855 kB]</span></span>
<span class="line"><span>Fetched 5,895 kB in 0s (20.1 MB/s)</span></span>
<span class="line"><span>(Reading database ... 116269 files and directories currently installed.)</span></span>
<span class="line"><span>Removing mysql-client-core-8.0 (8.0.32-0ubuntu0.20.04.2) ...</span></span>
<span class="line"><span>Selecting previously unselected package mysql-common.</span></span>
<span class="line"><span>(Reading database ... 116244 files and directories currently installed.)</span></span>
<span class="line"><span>Preparing to unpack .../mysql-common_5.8+1.0.5ubuntu2_all.deb ...</span></span>
<span class="line"><span>Unpacking mysql-common (5.8+1.0.5ubuntu2) ...</span></span>
<span class="line"><span>Selecting previously unselected package mariadb-common.</span></span>
<span class="line"><span>Preparing to unpack .../mariadb-common_1%3a10.3.38-0ubuntu0.20.04.1_all.deb ...</span></span>
<span class="line"><span>Unpacking mariadb-common (1:10.3.38-0ubuntu0.20.04.1) ...</span></span>
<span class="line"><span>Selecting previously unselected package libsnappy1v5:amd64.</span></span>
<span class="line"><span>Preparing to unpack .../libsnappy1v5_1.1.8-1build1_amd64.deb ...</span></span>
<span class="line"><span>Unpacking libsnappy1v5:amd64 (1.1.8-1build1) ...</span></span>
<span class="line"><span>Selecting previously unselected package mariadb-client-core-10.3.</span></span>
<span class="line"><span>Preparing to unpack .../mariadb-client-core-10.3_1%3a10.3.38-0ubuntu0.20.04.1_amd64.deb ...</span></span>
<span class="line"><span>Unpacking mariadb-client-core-10.3 (1:10.3.38-0ubuntu0.20.04.1) ...</span></span>
<span class="line"><span>Setting up mysql-common (5.8+1.0.5ubuntu2) ...</span></span>
<span class="line"><span>update-alternatives: using /etc/mysql/my.cnf.fallback to provide /etc/mysql/my.cnf (my.cnf) in auto mode</span></span>
<span class="line"><span>Setting up libsnappy1v5:amd64 (1.1.8-1build1) ...</span></span>
<span class="line"><span>Setting up mariadb-common (1:10.3.38-0ubuntu0.20.04.1) ...</span></span>
<span class="line"><span>update-alternatives: using /etc/mysql/mariadb.cnf to provide /etc/mysql/my.cnf (my.cnf) in auto mode</span></span>
<span class="line"><span>Setting up mariadb-client-core-10.3 (1:10.3.38-0ubuntu0.20.04.1) ...</span></span>
<span class="line"><span>Processing triggers for man-db (2.9.1-1) ...</span></span>
<span class="line"><span>Processing triggers for libc-bin (2.31-0ubuntu9.2) ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看版本</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ mysql --version</span></span>
<span class="line"><span>mysql  Ver 15.1 Distrib 10.3.38-MariaDB, for debian-linux-gnu (x86_64) using readline 5.2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装<code>mysql-server-8.0</code>，中途会有<code>Do you want to continue? [Y/n]</code>的提示，输入<code>Y</code>回车即可。</li><li>查看<a href="https://dev.mysql.com/downloads/mysql" target="_blank" rel="noopener noreferrer"><code>mysql-server</code>各平台最新的版本</a></li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ sudo apt install mysql-server-8.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>查看版本</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ mysql --version</span></span>
<span class="line"><span>mysql  Ver 8.0.32-0ubuntu0.20.04.2 for Linux on x86_64 ((Ubuntu))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><ul><li>修改<code>mysql</code>配置文件(需要先安装<code>vim</code>或<code>vi</code>，<code>sudo apt install vim</code>)</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ cat /etc/mysql/mysql.conf.d/mysqld.cnf</span></span>
<span class="line"><span>$ sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>cat</code>仅查看，<code>vim</code>可以按<code>i</code>进入编辑模式进行修改，按<code>ESC</code>退出编辑模式，并输入<code>:wq</code>保存并退出。</p><ul><li>配置<code>skip-grant-tables</code>参数</li></ul><p>首次配置时，可以在配置文件中设置<code>skip-grant-tables</code>参数，该命令作用是跳过授权表，就是说谁都能进入<code>mysql</code>看到所有数据表，输入任意字符账号密码都可以，当忘记账号密码时可以使用该命令修改密码，但是要随用随关，重启<code>mysql</code>，不然服务器上会有很大的风险。</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>[mysqld]</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># * Basic Settings</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>user		= mysql</span></span>
<span class="line"><span># pid-file	= /var/run/mysqld/mysqld.pid</span></span>
<span class="line"><span># socket	= /var/run/mysqld/mysqld.sock</span></span>
<span class="line"><span># port		= 3306</span></span>
<span class="line"><span># datadir	= /var/lib/mysql</span></span>
<span class="line"><span># 跳过授权表</span></span>
<span class="line"><span>skip-grant-tables</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动或重启<code>mysql</code></li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ service mysql start</span></span>
<span class="line"><span>$ service mysql restart</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>root</code>方式登录，不需要指定用户名密码</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ sudo mysql</span></span>
<span class="line"><span>Welcome to the MySQL monitor.  Commands end with ; or \\g.</span></span>
<span class="line"><span>Your MySQL connection id is 8</span></span>
<span class="line"><span>Server version: 8.0.32-0ubuntu0.20.04.2 (Ubuntu)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Copyright (c) 2000, 2023, Oracle and/or its affiliates.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Oracle is a registered trademark of Oracle Corporation and/or its</span></span>
<span class="line"><span>affiliates. Other names may be trademarks of their respective</span></span>
<span class="line"><span>owners.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看用户信息</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mysql&gt; select current_user;</span></span>
<span class="line"><span>+----------------+</span></span>
<span class="line"><span>| current_user   |</span></span>
<span class="line"><span>+----------------+</span></span>
<span class="line"><span>| root@localhost |</span></span>
<span class="line"><span>+----------------+</span></span>
<span class="line"><span>1 row in set (0.00 sec)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>连接权限数据库，使用<code>use mysql;</code>。</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mysql&gt; use mysql;</span></span>
<span class="line"><span>Reading table information for completion of table and column names</span></span>
<span class="line"><span>You can turn off this feature to get a quicker startup with -A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Database changed</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置新密码</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mysql&gt; ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;自定义root的密码&#39;;</span></span>
<span class="line"><span>Query OK, 0 rows affected (0.00 sec)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>一些教程用<code>update mysql.user set authentication_string=password(&#39;新密码&#39;) where user=&#39;用户名&#39; and Host =&#39;localhost&#39;;</code>命令更新密码，测试该命令已经不能使用了。</p><ul><li>输入 <code>flush privileges;</code> 命令刷新权限。</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mysql&gt; flush privileges;</span></span>
<span class="line"><span>Query OK, 0 rows affected (0.00 sec)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>退出<code>mysql</code>环境。</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mysql&gt; quit;</span></span>
<span class="line"><span>Bye</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用密码登录<code>mysql</code>。</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>$ mysql -h localhost -u root -p</span></span>
<span class="line"><span>Enter password:</span></span>
<span class="line"><span>Welcome to the MySQL monitor.  Commands end with ; or \\g.</span></span>
<span class="line"><span>Your MySQL connection id is 10</span></span>
<span class="line"><span>Server version: 8.0.32-0ubuntu0.20.04.2 (Ubuntu)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Copyright (c) 2000, 2023, Oracle and/or its affiliates.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Oracle is a registered trademark of Oracle Corporation and/or its</span></span>
<span class="line"><span>affiliates. Other names may be trademarks of their respective</span></span>
<span class="line"><span>owners.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40)]))}const t=n(l,[["render",d],["__file","j0rw2big.html.vue"]]),r=JSON.parse('{"path":"/article/j0rw2big.html","title":"安装mysql","lang":"zh-CN","frontmatter":{"title":"安装mysql","createTime":"2025/01/20 18:31:42","permalink":"/article/j0rw2big.html","watermark":true},"headers":[],"readingTime":{"minutes":4.05,"words":1214},"git":{"updatedTime":1755670488000,"contributors":[{"name":"唐道勇","username":"唐道勇","email":"matias@tangdaoyongdeMacBook-Pro.local","commits":1,"avatar":"https://avatars.githubusercontent.com/唐道勇?v=4","url":"https://github.com/唐道勇"}]},"filePathRelative":"notes/mysql/安装mysql.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"984dc3","sort":10047,"name":"mysql"}],"bulletin":false}');export{t as comp,r as data};
