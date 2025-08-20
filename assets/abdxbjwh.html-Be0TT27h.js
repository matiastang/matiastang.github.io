import{_ as n,c as a,a as e,o as i}from"./app-CS9K37Kg.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>当我们复用表结构时，通过导出已有数据表结构后，然后导入到新表中后，后续插入数据时，自增ID不会从1开始，而不是从已有数据的最大ID+1开始。</p><p>这是因为：<strong>使用 mysqldump 导出数据时，默认会包含 AUTO_INCREMENT 的当前值</strong>。我们可以通过查看导出的<code>.sql</code>文件中的<code>AUTO_INCREMENT</code>字段来确认。</p><p>一个导出示例如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span> Navicat Premium Data Transfer</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Source Server         : novels-mysql</span></span>
<span class="line"><span> Source Server Type    : MySQL</span></span>
<span class="line"><span> Source Server Version : 80035</span></span>
<span class="line"><span> Source Host           : papillon-test.cltv2qruve9e.rds.cn-north-1.amazonaws.com.cn:3306</span></span>
<span class="line"><span> Source Schema         : QT_Agents</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Target Server Type    : MySQL</span></span>
<span class="line"><span> Target Server Version : 80035</span></span>
<span class="line"><span> File Encoding         : 65001</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Date: 02/04/2025 17:14:06</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SET NAMES utf8mb4;</span></span>
<span class="line"><span>SET FOREIGN_KEY_CHECKS = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- ----------------------------</span></span>
<span class="line"><span>-- Table structure for novels_user</span></span>
<span class="line"><span>-- ----------------------------</span></span>
<span class="line"><span>DROP TABLE IF EXISTS \`novels_user\`;</span></span>
<span class="line"><span>CREATE TABLE \`novels_user\` (</span></span>
<span class="line"><span>  \`id\` bigint NOT NULL AUTO_INCREMENT COMMENT &#39;用户ID&#39;,</span></span>
<span class="line"><span>  \`username\` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT &#39;用户名称&#39;,</span></span>
<span class="line"><span>  \`user_type\` int unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;用户类型：\\n0：正常用户（默认值，可登录）\\n1：OpenAPI接口用户（仅能通过接口访问，不可登录系统）&#39;,</span></span>
<span class="line"><span>  \`password\` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT &#39;用户密码&#39;,</span></span>
<span class="line"><span>  \`nickname\` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT &#39;系统用户名称&#39;,</span></span>
<span class="line"><span>  \`avatar\` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT &#39;用户头像&#39;,</span></span>
<span class="line"><span>  \`role\` int unsigned NOT NULL DEFAULT &#39;1&#39; COMMENT &#39;用户权限&#39;,</span></span>
<span class="line"><span>  \`usage_tokens\` bigint unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;Agent token 用量&#39;,</span></span>
<span class="line"><span>  \`tokens_upper_limit\` bigint unsigned DEFAULT NULL COMMENT &#39;tokens用量上限&#39;,</span></span>
<span class="line"><span>  \`usage_expense\` double unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;Agent token 费用&#39;,</span></span>
<span class="line"><span>  \`expense_upper_limit\` double unsigned DEFAULT NULL COMMENT &#39;tokens费用上限&#39;,</span></span>
<span class="line"><span>  \`create_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT &#39;创建时间&#39;,</span></span>
<span class="line"><span>  \`update_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT &#39;更新时间&#39;,</span></span>
<span class="line"><span>  \`disabled\` tinyint unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;是否失效&#39;,</span></span>
<span class="line"><span>  PRIMARY KEY (\`id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SET FOREIGN_KEY_CHECKS = 1;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>AUTO_INCREMENT=142</code>就是之前表中的最大ID。后续创建的数据会从143开始。如果我们希望从1开始，我们可以通过以下SQL语句来重置自增ID。重置可以执行以下SQL语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ALTER TABLE memoir_user AUTO_INCREMENT = 1;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行之后，再新增数据就会从1开始了。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这里需要注意的是，如果表中有一部分数据，则需要调整设置的值。</p></div>`,8)]))}const t=n(l,[["render",p],["__file","abdxbjwh.html.vue"]]),r=JSON.parse('{"path":"/mysql/abdxbjwh.html","title":"MySQL重置自增ID","lang":"zh-CN","frontmatter":{"title":"MySQL重置自增ID","createTime":"2025/04/02 18:09:06","permalink":"/mysql/abdxbjwh.html","watermark":true},"headers":[],"readingTime":{"minutes":1.88,"words":565},"git":{"updatedTime":1755670488000,"contributors":[{"name":"唐道勇","username":"唐道勇","email":"matias@tangdaoyongdeMacBook-Pro.local","commits":1,"avatar":"https://avatars.githubusercontent.com/唐道勇?v=4","url":"https://github.com/唐道勇"}]},"filePathRelative":"notes/mysql/MySQL重置自增ID.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"984dc3","sort":10047,"name":"mysql"}],"bulletin":false}');export{t as comp,r as data};
