# 知识小站(Knowledge-Station)--黑马头条

## 1. 项目概述

### 1.1 项目介绍

知识小站是一个面向广大用户的在线学习分享平台，主要是用于在校大学生，为其提供高质量的知识资源和个性化的学习推荐服务，用户可以通过知识小站轻松获取各个领域的学习内容，主要以文章的形式展现，提高用户的学习能力。

2023版黑马头条项目全新升级，采用的是SpringBoot+SpringCloud当下最流行的微服务为项目架构，配合Spring Cloud Alibaba Nacos作为项目的注册和配置中心。新课程采用快速开发的模式，主要解决真实企业开发的一些应用场景。深入挖掘技术和业务的解决方案，做到更加的通用，能举一反三。
为匹配真实企业开发模式，在提供已知项目的基础上进行二次开发，进行功能的迭代，包含了新需求分析、数据库设计、codereview、持续集成部署CICD。

**特色亮点**

1、采用Springboot+SpringCloud+Nacos微服务架构
2、采用静态模板技术解决页面快速加载
3、使用分布式文件系统MinIO存储海量文件
4、使用延迟队列解决方案解决文章定时发布
5、使用Redis分布式锁解决线程抢占执行问题
6、采用异步解决代码耦合性高的问题
7、采用Kafka消息中间件系统耦合和削峰填谷
8、采用DFA算法过滤文章中的敏感词
9、采用Tess4J图片文章识别识别图片中的文字
10、 采用数据库锁-乐观锁来控制并发下的数据修改问题
11、 采用ElasticSearch海量搜索数据
12、 采用分布式调度任务Xxl-Job完成定时任务
13、 采用Kafka Stream实时流计算完成热数据计算
14、 采用Jenkins+Docker+Git完成持续集成

**可掌握的核心能力**

1、掌握CMS系统特点和开发过程
2、掌握静态化、分布式锁、分布式文件、异步解耦等解决方案
3、掌握使用ES进行海量数据中的搜索方案
4、掌握分布式调度任务框架Xxl-Job
5、掌握使用Kafka Stream进行流式计算
6、掌握微服务项目持续集成方案

**主讲解决方案**

1.文章详情静态模板集成

2.延迟任务定时发布文章方案

3.CMS内容审核发布整套流程实现方案

4.热点数据筛选与处理方案

5.微服务持续集成解决方案

**核心业务功能**

- 自媒体端

  1、内容发布：高度智能的富文本编辑器，文章、视频、话题，各类内容一键发布，方便快捷

  2、内容管理：实现自媒体用户对内容的全方位管控，查找筛选、文章上下架等功能一应俱全

  3、粉丝管理：粉丝情况全了解，从关注到私聊一站解决，实现粉丝闭环管理

  4、评论管理：舆论管控，了解文章风评，实时调整文案，提升好评率，做好口碑营销第一步

  5、素材管理：重要素材在线管理、10+素材同步上传、发布文章拿来即用，方便快捷

  6、图文管理：根据大数据分析提炼文章核心数据，分析关键指标助你篇篇文章大火

- 用户端

  1、智能推荐：根据用户操作习惯、阅读时长、喜好等，进行个性化推荐，有效提升用户留存率及文章阅读率

  2、内容搜索：基于文章标题、标签、内容进行模糊搜索，快速找出用户需要的内容

  3、频道管理：根据自身需求及喜好，用户可自定义展示频道，去掉不感兴趣的频道

  4、内容社交：内容为王，依靠优质内容，通过私信、评论、点赞等进行社交互动

  5、实名认证：通过验证用户身份证，确保用户真实性，提升平台安全性

  6、个人中心：可根据需求进行个性化设置，如头像、昵称、介绍等

- 管理后台

  1、数据工作台：平台情况一手掌控，核心数据、增降趋势全部可见

  2、用户管理：用户信息全掌控，确保人员信息真实，违规用户一键冻结

  3、内容审核：智能化审批，机审替代人工审核，流程迅速、处理高效

  4、内容管理：对平台内容进行分类管理，确保内容真实、准确

### 1.2 项目演示

类似于今日头条，是一个新闻资讯类项目。比如：新浪、腾讯新闻、网易新闻、今日头条、凤凰资讯。。。

#### 1.2.1 用户移动端（APP）

APP用户端用户

##### 1）首页

![image-20231113201419374](https://gitee.com/tjlxy/img/raw/master/image-20231113201419374.png)

##### 2）文章详情

![image-20231113201606685](https://gitee.com/tjlxy/img/raw/master/image-20231113201606685.png)

#### 1.2.2 自媒体系统（We Media）

通过自媒体系统发送文章的用户

##### 1）图文数据

![image-20231113204137670](https://gitee.com/tjlxy/img/raw/master/image-20231113204137670.png)

![image-20231113204228186](https://gitee.com/tjlxy/img/raw/master/image-20231113204228186.png)

##### 2）发布文章

![image-20231113192526207](https://gitee.com/tjlxy/img/raw/master/image-20231113192526207.png)

##### 3）内容列表	

![image-20231113192432363](https://gitee.com/tjlxy/img/raw/master/image-20231113192432363.png)

##### 4）素材管理

![image-20231113192454980](https://gitee.com/tjlxy/img/raw/master/image-20231113192454980.png)

#### 1.2.3 管理系统（Admin）

使用管理系统的用户

![image-20231113163826845](https://gitee.com/tjlxy/img/raw/master/image-20231113163826845.png)

##### 1）用户审核

![image-20231113170221176](https://gitee.com/tjlxy/img/raw/master/image-20231113170221176.png)

##### 2）频道管理

![image-20231113170426948](https://gitee.com/tjlxy/img/raw/master/image-20231113170426948.png)

![image-20231113170544930](https://gitee.com/tjlxy/img/raw/master/image-20231113170544930.png)

##### 3）内容审核

![image-20231113170940218](https://gitee.com/tjlxy/img/raw/master/image-20231113170940218.png)

##### 4）内容管理

![image-20231113171353817](https://gitee.com/tjlxy/img/raw/master/image-20231113171353817.png)

##### 5）敏感词管理

![image-20231113171745390](https://gitee.com/tjlxy/img/raw/master/image-20231113171745390.png)

![image-20231113171833035](https://gitee.com/tjlxy/img/raw/master/image-20231113171833035.png)

### 1.3 数据库表设计

数据库设计是在项目初期阶段完成的。当时我们先确立了基本需求以及采用微服务技术架构后，围绕业务设计数据库表结构。

我们一共分了设计了4个数据库，分别是：用户、文章、自媒体、定时任务这4个数据库。

#### 1.3.1 leadnews_user 用户数据库

##### 1）ap_user用户信息表✔️

```sql
CREATE TABLE `ap_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `salt` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密码、通信等加密盐',
  `name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户名',
  `password` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密码,md5加密',
  `phone` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '手机号',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '头像',
  `sex` tinyint(1) unsigned DEFAULT NULL COMMENT '0 男\r\n            1 女\r\n            2 未知',
  `is_certification` tinyint(1) unsigned DEFAULT NULL COMMENT '0 未\r\n            1 是',
  `is_identity_authentication` tinyint(1) DEFAULT NULL COMMENT '是否身份认证',
  `status` tinyint(1) unsigned DEFAULT NULL COMMENT '0正常\r\n            1锁定',
  `flag` tinyint(1) unsigned DEFAULT NULL COMMENT '0 普通用户\r\n            1 自媒体人\r\n            2 大V',
  `created_time` datetime DEFAULT NULL COMMENT '注册时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='APP用户信息表';

```

##### 2）ap_user_fan APP用户粉丝信息表✔️

```sql
CREATE TABLE `ap_user_fan` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(11) unsigned DEFAULT NULL COMMENT '用户ID',
  `fans_id` int(11) unsigned DEFAULT NULL COMMENT '粉丝ID',
  `fans_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '粉丝昵称',
  `level` tinyint(1) unsigned DEFAULT NULL COMMENT '粉丝忠实度\r\n            0 正常\r\n            1 潜力股\r\n            2 勇士\r\n            3 铁杆\r\n            4 老铁',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  `is_display` tinyint(1) unsigned DEFAULT NULL COMMENT '是否可见我动态',
  `is_shield_letter` tinyint(1) unsigned DEFAULT NULL COMMENT '是否屏蔽私信',
  `is_shield_comment` tinyint(1) unsigned DEFAULT NULL COMMENT '是否屏蔽评论',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='APP用户粉丝信息表';

```

##### 3）ap_user_follow APP用户关注信息表✔️

```sql
CREATE TABLE `ap_user_follow` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(11) unsigned DEFAULT NULL COMMENT '用户ID',
  `follow_id` int(11) unsigned DEFAULT NULL COMMENT '关注作者ID',
  `follow_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '粉丝昵称',
  `level` tinyint(1) unsigned DEFAULT NULL COMMENT '关注度\r\n            0 偶尔感兴趣\r\n            1 一般\r\n            2 经常\r\n            3 高度',
  `is_notice` tinyint(1) unsigned DEFAULT NULL COMMENT '是否动态通知',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='APP用户关注信息表';

```

##### 4）ap_user_realname APP实名认证信息表

```sql
CREATE TABLE `ap_user_realname` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(11) unsigned DEFAULT NULL COMMENT '账号ID',
  `name` varchar(20) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '用户名称',
  `idno` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '资源名称',
  `font_image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '正面照片',
  `back_image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '背面照片',
  `hold_image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '手持照片',
  `live_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '活体照片',
  `status` tinyint(1) unsigned DEFAULT NULL COMMENT '状态\r\n            0 创建中\r\n            1 待审核\r\n            2 审核失败\r\n            9 审核通过',
  `reason` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '拒绝原因',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  `submited_time` datetime DEFAULT NULL COMMENT '提交时间',
  `updated_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='APP实名认证信息表';

```



#### 1.3.2 leadnews_article 文章数据库

##### 1）ap_article 文章信息表，存储已发布的文章✔️

```sql
CREATE TABLE `ap_article` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '标题',
  `author_id` int(11) unsigned DEFAULT NULL COMMENT '文章作者的ID',
  `author_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '作者昵称',
  `channel_id` int(10) unsigned DEFAULT NULL COMMENT '文章所属频道ID',
  `channel_name` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '频道名称',
  `layout` tinyint(1) unsigned DEFAULT NULL COMMENT '文章布局\r\n            0 无图文章\r\n            1 单图文章\r\n            2 多图文章',
  `flag` tinyint(3) unsigned DEFAULT NULL COMMENT '文章标记\r\n            0 普通文章\r\n            1 热点文章\r\n            2 置顶文章\r\n            3 精品文章\r\n            4 大V 文章',
  `images` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文章图片\r\n            多张逗号分隔',
  `labels` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文章标签最多3个 逗号分隔',
  `likes` int(5) unsigned DEFAULT NULL COMMENT '点赞数量',
  `collection` int(5) unsigned DEFAULT NULL COMMENT '收藏数量',
  `comment` int(5) unsigned DEFAULT NULL COMMENT '评论数量',
  `views` int(5) unsigned DEFAULT NULL COMMENT '阅读数量',
  `province_id` int(11) unsigned DEFAULT NULL COMMENT '省市',
  `city_id` int(11) unsigned DEFAULT NULL COMMENT '市区',
  `county_id` int(11) unsigned DEFAULT NULL COMMENT '区县',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  `publish_time` datetime DEFAULT NULL COMMENT '发布时间',
  `sync_status` tinyint(1) DEFAULT '0' COMMENT '同步状态',
  `origin` tinyint(1) unsigned DEFAULT '0' COMMENT '来源',
  `static_url` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1383828014629179394 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='文章信息表，存储已发布的文章';

```

##### 2）ap_article_config APP已发布文章配置表✔️

```sql
CREATE TABLE `ap_article_config` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `article_id` bigint(20) unsigned DEFAULT NULL COMMENT '文章ID',
  `is_comment` tinyint(1) unsigned DEFAULT NULL COMMENT '是否可评论',
  `is_forward` tinyint(1) unsigned DEFAULT NULL COMMENT '是否转发',
  `is_down` tinyint(1) unsigned DEFAULT NULL COMMENT '是否下架',
  `is_delete` tinyint(1) unsigned DEFAULT NULL COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_article_id` (`article_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1383828014645956610 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='APP已发布文章配置表';

```

##### 3）ap_article_content APP已发布文章内容表✔️

```sql
CREATE TABLE `ap_article_content` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `article_id` bigint(20) unsigned DEFAULT NULL COMMENT '文章ID',
  `content` longtext COLLATE utf8mb4_unicode_ci COMMENT '文章内容',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_article_id` (`article_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1383828014650150915 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='APP已发布文章内容表';
```

##### 4）ap_author APP文章作者信息表

```sql
CREATE TABLE `ap_author` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(20) DEFAULT NULL COMMENT '作者名称',
  `type` tinyint(1) unsigned DEFAULT NULL COMMENT '0 爬取数据\r\n            1 签约合作商\r\n            2 平台自媒体人\r\n            ',
  `user_id` int(11) unsigned DEFAULT NULL COMMENT '社交账号ID',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  `wm_user_id` int(11) unsigned DEFAULT NULL COMMENT '自媒体账号',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_type_name` (`type`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='APP文章作者信息表';
```

##### 5）ap_collection APP收藏信息表

```sql
CREATE TABLE `ap_collection` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `entry_id` int(11) unsigned DEFAULT NULL COMMENT '实体ID',
  `article_id` bigint(20) unsigned DEFAULT NULL COMMENT '文章ID',
  `type` tinyint(1) unsigned DEFAULT NULL COMMENT '点赞内容类型\r\n            0文章\r\n            1动态',
  `collection_time` datetime DEFAULT NULL COMMENT '创建时间',
  `published_time` datetime DEFAULT NULL COMMENT '发布时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_user_type` (`entry_id`,`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='APP收藏信息表';
```

#### 1.3.3 leadnews_wemedia 自媒体数据库

##### 1）wm_channel 频道信息表✔️

```sql
CREATE TABLE `wm_channel` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '频道名称',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '频道描述',
  `is_default` tinyint(1) unsigned DEFAULT NULL COMMENT '是否默认频道',
  `status` tinyint(1) unsigned DEFAULT NULL,
  `ord` tinyint(3) unsigned DEFAULT NULL COMMENT '默认排序',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='频道信息表';
```

##### 2）wm_fans_statistics 自媒体粉丝统计表

```sql
CREATE TABLE `wm_fans_statistics` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(11) unsigned DEFAULT NULL COMMENT '主账号ID',
  `article` int(11) unsigned DEFAULT NULL COMMENT '子账号ID',
  `read_count` int(11) unsigned DEFAULT NULL,
  `comment` int(11) unsigned DEFAULT NULL,
  `follow` int(11) unsigned DEFAULT NULL,
  `collection` int(11) unsigned DEFAULT NULL,
  `forward` int(11) unsigned DEFAULT NULL,
  `likes` int(11) unsigned DEFAULT NULL,
  `unlikes` int(11) unsigned DEFAULT NULL,
  `unfollow` int(11) unsigned DEFAULT NULL,
  `burst` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_time` date DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `idx_user_id_time` (`user_id`,`created_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='自媒体粉丝数据统计表';
```

##### 3）wm_material 自媒体图文素材信息表✔️

```sql
CREATE TABLE `wm_material` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(11) unsigned DEFAULT NULL COMMENT '自媒体用户ID',
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '图片地址',
  `type` tinyint(1) unsigned DEFAULT NULL COMMENT '素材类型\r\n            0 图片\r\n            1 视频',
  `is_collection` tinyint(1) DEFAULT NULL COMMENT '是否收藏',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='自媒体图文素材信息表';
```

##### 4）wm_news 自媒体图文内容信息表✔️

```sql
CREATE TABLE `wm_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(11) unsigned DEFAULT NULL COMMENT '自媒体用户ID',
  `title` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '标题',
  `content` longtext COLLATE utf8mb4_unicode_ci COMMENT '图文内容',
  `type` tinyint(1) unsigned DEFAULT NULL COMMENT '文章布局\r\n            0 无图文章\r\n            1 单图文章\r\n            3 多图文章',
  `channel_id` int(11) unsigned DEFAULT NULL COMMENT '图文频道ID',
  `labels` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  `submited_time` datetime DEFAULT NULL COMMENT '提交时间',
  `status` tinyint(2) unsigned DEFAULT NULL COMMENT '当前状态\r\n            0 草稿\r\n            1 提交（待审核）\r\n            2 审核失败\r\n            3 人工审核\r\n            4 人工审核通过\r\n            8 审核通过（待发布）\r\n            9 已发布',
  `publish_time` datetime DEFAULT NULL COMMENT '定时发布时间，不定时则为空',
  `reason` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '拒绝理由',
  `article_id` bigint(20) unsigned DEFAULT NULL COMMENT '发布库文章ID',
  `images` longtext COLLATE utf8mb4_unicode_ci COMMENT '//图片用逗号分隔',
  `enable` tinyint(1) unsigned DEFAULT '1',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6232 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='自媒体图文内容信息表';
```

##### 5）wm_news_material 自媒体图文引用素材信息表✔️

```sql
CREATE TABLE `wm_news_material` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `material_id` int(11) unsigned DEFAULT NULL COMMENT '素材ID',
  `news_id` int(11) unsigned DEFAULT NULL COMMENT '图文ID',
  `type` tinyint(1) unsigned DEFAULT NULL COMMENT '引用类型\r\n            0 内容引用\r\n            1 主图引用',
  `ord` tinyint(1) unsigned DEFAULT NULL COMMENT '引用排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=281 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='自媒体图文引用素材信息表';
```

##### 6）wm_news_statistics 自媒体图文数据统计表✔️

```sql
CREATE TABLE `wm_news_statistics` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(11) unsigned DEFAULT NULL COMMENT '主账号ID',
  `article` int(11) unsigned DEFAULT NULL COMMENT '子账号ID',
  `read_count` int(11) unsigned DEFAULT NULL COMMENT '阅读量',
  `comment` int(11) unsigned DEFAULT NULL COMMENT '评论量',
  `follow` int(11) unsigned DEFAULT NULL COMMENT '关注量',
  `collection` int(11) unsigned DEFAULT NULL COMMENT '收藏量',
  `forward` int(11) unsigned DEFAULT NULL COMMENT '转发量',
  `likes` int(11) unsigned DEFAULT NULL COMMENT '点赞量',
  `unlikes` int(11) unsigned DEFAULT NULL COMMENT '不喜欢',
  `unfollow` int(11) unsigned DEFAULT NULL COMMENT '取消关注量',
  `burst` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_time` date DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `idx_user_id_time` (`user_id`,`created_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='自媒体图文数据统计表';
```

##### 7）wm_user 自媒体用户信息表

```sql
CREATE TABLE `wm_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `ap_user_id` int(11) DEFAULT NULL,
  `ap_author_id` int(11) DEFAULT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '登录用户名',
  `password` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '登录密码',
  `salt` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '盐',
  `nickname` varchar(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '昵称',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '头像',
  `location` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '归属地',
  `phone` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '手机号',
  `status` tinyint(11) unsigned DEFAULT NULL COMMENT '状态\r\n            0 暂时不可用\r\n            1 永久不可用\r\n            9 正常可用',
  `email` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '邮箱',
  `type` tinyint(1) unsigned DEFAULT NULL COMMENT '账号类型\r\n            0 个人 \r\n            1 企业\r\n            2 子账号',
  `score` tinyint(3) unsigned DEFAULT NULL COMMENT '运营评分',
  `login_time` datetime DEFAULT NULL COMMENT '最后一次登录时间',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='自媒体用户信息表';

```

##### 8）wm_sensitive 敏感词信息表✔️

```sql
CREATE TABLE `wm_sensitive` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `sensitives` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '敏感词',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='敏感词信息表';
```



#### 1.3.4 leadnews_schedule 定时数据库

##### 1）taskinfo 任务信息表

```sql
CREATE TABLE `taskinfo` (
  `task_id` bigint(20) NOT NULL COMMENT '任务id',
  `execute_time` datetime(3) NOT NULL COMMENT '执行时间',
  `parameters` longblob COMMENT '参数',
  `priority` int(11) NOT NULL COMMENT '优先级',
  `task_type` int(11) NOT NULL COMMENT '任务类型',
  PRIMARY KEY (`task_id`),
  KEY `index_taskinfo_time` (`task_type`,`priority`,`execute_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

##### 2）taskinfo_logs 任务信息日志表

```sql
CREATE TABLE `taskinfo_logs` (
  `task_id` bigint(20) NOT NULL COMMENT '任务id',
  `execute_time` datetime(3) NOT NULL COMMENT '执行时间',
  `parameters` longblob COMMENT '参数',
  `priority` int(11) NOT NULL COMMENT '优先级',
  `task_type` int(11) NOT NULL COMMENT '任务类型',
  `version` int(11) NOT NULL COMMENT '版本号,用乐观锁',
  `status` int(11) DEFAULT '0' COMMENT '状态 0=初始化状态 1=EXECUTED 2=CANCELLED',
  PRIMARY KEY (`task_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

```



### 1.4 项目工程结构

父工程

- leadnews-common：一些通用配置
- leadnews-feign-api：feign对外的接口
- leadnews-model：pojo、dto
- leadnews-utils：通用工具类
- leadnews-gateway：管理网关工程
- leadnews-service：管理微服务
- leadnews-test：一些测试案例



## 2. 项目业务

类似于今日头条，是一个新闻资讯类项目。比如：新浪、腾讯新闻、网易新闻、今日头条、凤凰资讯。。。

### 2.1 用户移动端（APP）

APP用户端用户

#### 1）首页（主页）

首页展示内容如下：

1、顶部搜索框

搜索框可以进行文章搜索，用户可以根据关键字进行查询，关键词会高亮显示，搜索出来的文章列表与主页展示一样，当用户点击某一篇文章，可以查看文章详情。

搜索结果页面主要展示的信息有：标题、布局、封面图片、发布时间、作者名称、文章id、作者id、静态url

支持展示用户搜索记录10条，按照搜索关键词的时间倒序；可以删除搜索记录；保存历史记录，保存10条，多余的则删除最久的历史记录

支持关键字联想词，根据用户输入的关键字展示联想词

2、标签（频道）分类

搜索框下方有多个标签（频道）分类，比如：首页、推荐、Java、大数据等等

方便用户针对某个标签（频道）查看相关领域的文章，快速找到所需要的知识内容

其中首页及其他频道都会优先展示热点数据，我们这里是将热点数据存入Redis进行展示

3、文章列表

默认10条文章信息，当用户下拉可以加载最新的文章

文章展示支持单图、多图、无图

查看文章详情需要登录

4、底部导航栏

首页展示文章列表

个人中心可以查看个人信息，修改个人信息



#### 2）文章搜索

**1、文章搜索**

搜索框可以进行文章搜索，用户可以根据关键字进行查询，关键词会高亮显示，搜索出来的文章列表与主页展示一样，当用户点击某一篇文章，可以查看文章详情。

搜索结果页面主要展示的信息有：标题、布局（单图、多图、无图）、封面图片、发布时间、作者名称、文章id、作者id、静态url

为了加快检索的效率，在查询的时候不会直接从数据库中查询文章，需要在elasticsearch中进行高速检索。

具体步骤如下：

---

当文章发布且审核成功后，文章会存储到es中，当用户进行文章搜索时，查询的是es库，展示文章列表

可以根据页面展示信息创建索引库，标题和内容需要添加分词（具体数据看附录-文章搜索）

查询所有的文章信息，在项目上线之前，进行一次批量导入到es索引库中（关键代码查看附录-文章搜索）

之后新增文章需要异步将数据添加到索引库，具体步骤是这样的：

在文章服务中，文章微服务审核成功后，我们都会同时更新Elasticsearch 中的数据，由于这个操作在业务上来讲没有强一致性的需求，并且多少也有点并发的可能性，所以我使用Kafka进行解耦。

简单说就是文章微服务作为消息生产者将更新文章的事件封装为消息，发送到Kafka 中。搜索微服务作为消费者订阅Kafka中的消息，将接收到的文章数据新增或者修改到Elasticsearch索引库中。

更新方式也很简单，当初存储的时候，我们是以文章ID作为Elasticsearch 中的文档id，所以再次更新的时候，根据文章ID进行更新Elasticsearch 中的数据即可（关键代码查看附录-文章搜索）

ES同步完后，用户可以在移动端进行文章搜索（关键代码查看附录-文章搜索）

补充细节：如果面试官提问：你是用的什么方式整合的Elasticsearch?

我是引入了Elasticsearch官方提供的依赖实现的。具体使用的时候，先声明一个叫做RestHighLevelClient的客户端对象，然后在具体使用的位置进行注入使用即可。

它内部其实就是封装了一波HTTP查询，并且提供了一些JavaAPI方法。

使用的时候调用Java API方法进行条件封装，最终其实还是转为 Http查询，查询到的结果，返回回来后，再封装为SearchResponse对象进行获取即可。

**2、历史记录**

文章搜索支持展示用户搜索记录10条，按照搜索关键词的时间倒序；可以删除搜索记录；保存历史记录，保存10条，多余的则删除最久的历史记录。具体步骤如下：

---

1）保存历史记录，保存10条，多余的则删除最久的历史记录。具体流程如下：（流程图查看附录-文章搜索）

在执行文章搜索记录保存流程之前啊，我先做了一个判断，我先判断一下当前用户有没有登录，判断的依据就是请求头中是否携带用户 id，如果用户未登录，则不执行搜索记录保存流程，如果用户已登录，才执行搜索记录保存流程。

假设用户已登录，首先要在MongoDB查询一下搜索记录，根据userld+搜索关键字查询，如果存在以前搜索过的记录，就更新这条记录的时间为最新时间。

如果不存在搜索记录，查询当前用户的历史搜索记录，并且按照搜索时间降序排序继续判断返回的记录条数，如果小于10，则直接新增新的搜索记录。

如果等于10，就替换搜索时间最早的记录为当前的搜索记录。

还有就是，这个文章搜索记录保存流程，操作没必要让当前请求同步等待，所以我直接设置为异步的方式实现，实现方式很简单，就是在方法上添加了@Async注解实现的。

（关键代码查看附录-文章搜索）

2）加载10条搜索历史记录，按照搜索关键词的时间倒序。

按照当前用户，按照时间倒序查询（关键代码查看附录-文章搜索）

3）删除搜索历史记录。

按照搜索历史id删除（关键代码查看附录-文章搜索）

**3、联想词**

文章搜索支持关键字联想词，根据用户输入的关键字展示联想词，智能匹配以前搜索过的包含当前关键字的搜索记录。

实现方式很简单，就是预先将联想词词库存储在MongoDB中，前端触发修改事件后，携带关键字向后端发起请求，后端从MongoDB中查询出来符合当前关键字的10条联想词并返回。而MongoDB 中的联想词词库，主要是来源于两个方面，一个是公司以前维护过的一些**词库**，我将这些数据导入到到 MongoDB中，创建了一个联想词表(ap_associate_words)，另一部分数据就是来源于**文章搜索历史记录表**中。（关键代码查看附录-文章搜索）

查询的时候，优先查询文章搜索历史记录表，如果搜索记录大于等于10，就返回10条历史搜索记录作为联想词返回给前端。

如果小于10条的话，再查询联想词表，补充够10条联想词数据后，返回给前端。

> 联想词来源，通常是网上搜索频率比较高的一些词，通常在企业中有两部分来源：
>
> 第一：自己维护搜索词
>
> 通过分析用户搜索频率较高的词，按照排名作为搜索词
>
> 第二：第三方获取
>
> 关键词规划师（百度）、5118、爱站网
>
> 最后将数据导入MongoDB中即可

#### 3）计算热点文章（定时+实时）

其中首页（推荐）及其他频道都会优先展示热点数据，我们这里是将热点数据存入Redis进行展示

是这样的，文章热度我们主要是根据用户的**阅读、点赞、评论、收藏**这4种行为进行计算。在文章表中，我们设计了相应的点赞数量、收藏数量、评论数量和阅读数量进行记录。

当用户针对某一篇文章发生了这4种行为后，不仅更新数据库文章表中的字段，同时还要根据这4种行为数据，进行文章热度的统计计算，求出来哪些文章是比较火。

**统计的需求**：针对5天以内发布的文章进行统计，统计普通频道和热点频道当中，最热门的30条文章数据。防止很久以前一些老的文章，长期占据榜首的情况出现。

**统计的方式**：我们分为定时计算和实时计算两种方式，不管是哪种方式，统计的结果是不会保存在MySQL，而是保存在Redis，因为每天凌晨2点，都会重置热点数据，说白了每天都会重新查询MySQL重新开始新一轮的热点文章计算。所以说就没必要把文章热度数据存在MySQL当中。

**定时计算**主要是借助XXL-JOB，每天2点的时间，执行计划任务，进行统计，主要是针对5天以内发布的文章做一个统计，作为每天新一轮的热点文章，热度初始数据。

**实时计算**是借助Kafka Stream实现的，主要是针对当天新产生的用户行为，进行实时计算。业务上，我们认为当天发布的文章，发生的用户行为所占的权重分值比重会高一点，避免一些老的文章一直霸榜的情况出现。实时计算出来的分值，会基于每天定时计算的结果进行累计，两种计算方式结合在一起，实现这个业务需求。

**统计的权重**：

- 用户不同的行为，权重不一样：阅读权重: 1，点赞权重：3，评论权重：5，收藏权重：8
- 当天发布的文章，对应的用户行为权重得分是非当天发布的文章权重得分的3倍。这块实现方式是主要是在实时计算中实现的。

下面详细介绍一下具体的定时计算和实时计算的实现方式吧。

先说一下定时计算是怎么实现的

- 根据文章的行为（点赞、评论、阅读、收藏）计算文章的分值，利用定时任务每天完成一次计算
- 把分值较大的文章数据存入到redis中
- App端用户查询文章列表的时候，优先从redis中查询热度较高的文章数据

---

每天凌晨两点，执行定时任务，针对前5天的文章，进行分值统计，这里的定时任务是使用XXL-JOB实现的。

因为文章的阅读、点赞、评论、收藏这些数据都在文章数据表中存在的、所以这个计算逻辑特别简单（流程图码查看附录-计算热点文章）

- 1、按照发布时间字段，查询出来最近5天发布的文章，并且文章状态处于正常状态；

- 2、根据文章的4项行为数据，结合他们对应的权重分值，做个加法计算，计算出来每篇文章的权重分值，并将所有文章的分值结果保存在一个List集合中。因为我还需要针对这些文章进行分类，确定他们是哪些频道的文章。

- 3、远程调用媒体服务，得到所有的频道集合，遍历频道列表，在每次循环中，再次使用流式编程的方式，遍历前面计算出来的文章分值集合，比如：调用filter方法进行过滤，将每一篇文章归类到对应的频道下。然后调用sort方法进行排序，按照每篇文章的分值进行降序排序。最后，判断一下当前频道下的文章数量是否大于30，如果大于30篇文章，就截取前30篇文章，作为当前频道的热点文章，并将他们缓存到Redis 中，把频道ID作为key，把热点文章列表作为值。如果小于等于30，就直接把这些数据缓存到Redis，不用进行截取。

- 4、求出所有文章热点排名前30的文章，并缓存到Redis 中，这些数据作为【热点栏目】中的热点文章进行推荐。

  我们使用Redis进行缓存热点文章数据以后，再针对热点文章查询时，直接从Redis返回就可以了。包括后续实时计算的时候，针对当天的用户行为进行计算，只需要更新Redis中的数据即可。

- 5、最后，我设计了XXL-JOB定时调度，每天凌晨2点，执行定时任务，将前5天的数据重新计算，最终的热点文章重新缓存到Redis。

（关键代码查看附录-计算热点文章）

---

还有一个实时计算，主要是借助**Kafka Stream**实现的，针对当天新发生的用户行为，进行计算，并基于定时任务计算出来的结果做一个加法计算，得到最新的文章热度数据。（流程图码查看附录-计算热点文章）

说一下实时计算和定时计算的区别吧。

这两种方式，计算的数据，都不会持久化保存到MySQL，而是不断动态变化的。

首先是每天凌晨2点执行定时计算，作为当天的基础数据，缓存在Redis 中。

然后当天发生的新增用户行为，会被发送到Kafka 的热点文章分值主题中保存。

```java
//发送消息，数据聚合
kafkaTemplate.send(HotArticleConstants.HOT_ARTICLE_SCORE_TOPIC,JSON.toJSONString(mess));
```

最终，在文章微服务中，定义了一个Kafka Stream负责针对队列中不断生产出来的用户行为消息，进行消费处理。

处理步骤大概是这样的：

- 1、**重置消息kv格式**：定义 Stream对象时，重置关于消息的key value数据，将文章id作为key，将消息类型和行为分值作为值，比如说: key是1234，value是likes:3，代表点赞行为加3分。
- 2、**分组**：在后续的处理中，我会按照key进行分组，同一篇文章的行为数据，分到一个组里面，这样我就可以在聚合的时候，针对同一篇文章进行聚合。
- 3、**聚合**：聚合是发生在同一个分组内部的，也就是说，针对同一篇文章发生的不同行为，进行聚合计算，比如：针对点赞加3分，如果用户取消点赞，那就减3分。这样就能算出来，在某一个时间窗口期内，用户针对同一篇文章，发生的各种行为，得出的最终分数。
- 4、**输出**：最后，再将聚合后的结果数据，转换为key value的形式，输出到热点文章处理完毕的主题中。

消息处理完毕后，还需要定义一个消费者，消费处理完毕的结果。

这个消费者也是定义在文章微服务当中的，当接收到Kafka Stream输出的【文章统计结果消息】，则进行更新操作：

- 首先，先更新文章数据表中的用户行为记录，比如:阅读、点赞、收藏、评论的数量

- 然后我会判断一下当前文章是否是当天发布的文章，如果是当天发布的文章，则分数值乘以3，然后更新到Redis 中。

  比如说，用户收藏了非当天发布的文章，分值权重加8分，而收藏了当天发布的文章，分值权重加24分。

  如果不是当天发布的文章，则分数值按照正常的分值进行存储。

- 最后，我会将热点数据，更新到Redis缓存中，主要是更新两个项目，分别是：

  - 更新当前文章所属频道的热点文章数据；
  - 更新热门推荐栏目的热点文章数据；

  如果当前文章是热门数据，那么它一定在Redis缓存中，所以只需要更新Redis中的分值，做一个加法计算即可。

  如果当前文章，不是热门数据，但是它的分值经过计算，大于热门文章的最后一片文章的分值，那么当前文章就作为新的热点文章替换掉原先分值最低的热门文章就可以了。

这个就是我们借助Kafka Stream 实现的流式计算，针对每天新发生的用户行为进行统计，并且将最新的分值更新到Redis中，说白了其实就是基于每天定时统计出来的基础数据进行动态的调整。

（关键代码查看附录-计算热点文章）

### 2.2 自媒体系统（We Media）

通过自媒体系统发送文章的用户

#### 1）图文数据

以图表形式展示每个频道下的文章数量占比情况、文章评论数量、点赞数量占比情况，以提供直观的数据展示和分析。

#### 2）发布文章

首先可以输入文字标题

正文编写文章内容，可以插入图片

后续输入标签，选择某个频道，可以定时发布

选择封面（单图、三图、无图），单图和三图需要插入图片

最后选择存入草稿或者提交审核，审核通过自动发布，不通过需要人工审核

---

发布文章

该功能为保存、修改（是否有id）、保存草稿的共有方法

保存文章，除了需要**wm_news文章表**以外，还需要另外两张表，**wm_material 素材表**和**wm_news_material 文章素材关系表**

实现思路大概是这样：（流程图查看附录-计算文章发布）（关键代码查看附录-计算文章发布）

点击存入草稿或提交审核，请求到后台首先判断一下是否存在id

如果不存在id，则新增文章，接着再去判断当前是否为草稿，如果说为草稿就直接结束请求，如果不是草稿，是发布的文章需要保存关系，首先关联文章内容中的图片与素材的关系，同时还要关联封面中的图片与素材的关系，结束请求。

如果当前id已经存在，首先先删除已关联素材的关系，然后再进行修改文章，重新判断是否为草稿，不是草稿重新关联文章内容中的图片与素材的关系，同时还要关联封面中的图片与素材的关系，结束请求。

---

定时发布

不管文章的发布时间是什么时间段都会立马进行审核，然后生成app端相关的数据。

此刻：立即发布文章；未来时间：按时发布文章

延迟任务：没有固定的开始时间，由事件触发之后的**一段时间**内触发另一个事件，任务可以立即执行，也可以延迟。

实现思路大概是这样：（流程图查看附录-计算文章发布）

首先将任务添加到数据库，通过对比执行时间和当前时间的大小，决定任务什么时候进行发布

判断任务的执行时间小于等于当前时间，则将任务发到Redis的list类型队列中，消费者消费任务立即发布

如果执行时间大于当前时间，这时就需要延迟发布，首先会预设一个时间，比如预设时间就是当前的时间增加5分钟，当执行时间小于等于预设时间，我们就将任务发送到Redis的ZSet类型的队列中，利用zset数据类型的去重有序（分数排序）特点进行延迟，当时间到达匹配的时间定时将任务刷新到list队列中（Zset队列用于存放未来任务的数据，list队列用来存放当前消费的数据）。当执行时间大于预设时间时，我们将任务先同步到数据库，再进行上述流程比对时间大小，完成延迟任务。

补充问题：

为什么任务需要存储在数据库中？

延迟任务是一个通用的服务，任何有延迟需求的任务都可以调用该服务，内存数据库的存储是有限的，需要考虑数据持久化的问题，存储数据库中是一种数据安全的考虑。

为什么使用redis中的两种数据类型，list和zset？

原因一：list存储立即执行的任务，zset存储未来的数据

原因二：任务量过大以后，zset的性能会下降（时间复杂度：执行时间（次数）随着数据规模增长的变化趋势）

在添加zset数据的时候，为什么需要预加载？（为什么会有预设时间）

如果任务数据特别大，为了防止阻塞，只需要把未来几分钟要执行的数据存入缓存即可，是一种优化的形式



#### 3）内容列表

展示文章列表信息，可以根据文章状态查看相关文章，文章状态有：全部、草稿、待审核、审核通过、审核失败

可以根据频道列表，发布日期进行条件查询

文章列表展示封面图片、文章标题、发布日期、文章状态

状态为草稿、待审核、审核失败的内容可以进行编辑和删除

状态为审核通过（已发表）的可以进行上下架操作

具体步骤如下：（流程图查看附录-文章上下架）

---

文章发布且审核成功后，默认认为是自动上架的。媒体人可以在自媒体端修改文章的上下架状态。但是考虑到这个行为算是一个比较频繁的行为，且业务本身没有强一致性的要求。所以我们使用MQ进行解耦。

注意：已发表且上架的文章可以下架、已发表且已下架的文章可以上架

当自媒体人在选择上架或下架文章操作时，先判断文章是否存在、文章是否发布，如果状态为否，则直接结束这个流程，如果状态都正常，则执行修改文章的上下架状态。

前提：在自媒体端修改wm_news表中的status字段，修改为9（已发布）

具体的操作就是文章微服务向Kafka中发送了一条消息，消息内容是article_id文章ID以及enable上架或下架的状态码（默认1=上架，0=下架）。文章微服务端配置了一个消费者，监听消息队列中的消息，我们将Kafka的自动确认改为手动确认，当文章微服务的端本地数据库更新文章状态成功后，再确认消息队列中的消息。在文章微服务中会修改ap_article_config表中的is_down字段（1=下架，0=上架）

（关键代码查看附录-文章搜索）

#### 4）素材管理

顶部可以选择查看全部素材和收藏素材

图片上传的页面，首先是展示素材信息，可以点击图片上传，弹窗后可以上传图片

素材列表展示上传的图片，可以删除，可以收藏

### 2.3 管理系统（Admin）

使用管理系统的用户

#### 1）用户管理

> - 在app端的个人中心用户可以实名认证，需要材料为：姓名、身份证号、身份证正面照、身份证反面照、手持照片、活体照片（通过**微笑、眨眼、张嘴、摇头、点头**等组合动作，确保操作的为真实活体人脸。），当用户提交审核后就到了后端让运营管理人员进行审核
> - 平台运营端查看用户认证信息，进行审核，其中审核包括了用户身份审核，需要对接公安系统校验身份证信息
> - 用户通过审核后需要开通自媒体账号（该账号的用户名和密码与app一致）

**分页查询认证列表**

- 可根据审核状态条件查询（全部、创建中、待审核、审核失败、审核通过）
- 需要分页查询

**审核**

- 人工审核
  - 通过
  - 驳回

#### 2）频道管理

**查询列表**

- 查询需要按照创建时间倒序查询
- 按照频道名称模糊查询
- 可以按照状态进行精确查找（1：启用   true           0：禁用   false）
- 分页查询

**新增**

- 前台输入内容进行频道的保存
- 频道名词不能重复

**修改**

- 点击编辑后可以修改频道
- 如果频道被引用则不能禁用

**删除**

- 只有禁用的频道才能删除

#### 3）内容审核

> 自媒体文章如果没有自动审核成功，而是到了人工审核（自媒体文章状态为3），需要在admin端人工处理文章的审核
>
> - 平台管理员可以查看待人工审核的文章信息，如果存在违规内容则驳回（状态改为2，文章审核失败）
> - 平台管理员可以查看待人工审核的文章信息，如果不存在违规，则需要创建app端的文章信息，并更新自媒体文章的状态
>
> 也可以通过点击**查看**按钮，查看文章详细信息，查看详情后可以根据内容判断是否需要通过审核

**文章列表查询**

- 分页查询自媒体文章
- 可以按照标题模糊查询
- 可以按照审核状态进行精确检索
- 文章查询按照创建时间倒序查询
- 注意：需要展示作者名称

**查询文章详情**

- 可以查看文章详细内容
- 注意：需要展示作者名称

**人工审核**

- 拒绝：拒绝以后需要给出原因，并修改文章的状态为2
- 审核通过：需要创建app端的文章信息，并更新自媒体文章的状态

---

这个文章审核流程比较复杂一些，它涉及到服务之间的调用，以及第三方接口的调用。

当媒体人确认自己编辑的文章没有问题后，可以提交审核，当文章提交后，自动触发这个文审核流程。

并且无论是第一次新增文章，还是修改文章内容，我们都会执行文章审核流程。

首先，自媒体平台端提交文章审核，由自媒体服务自己负责审核。

由于审核流程涉及到敏感词过滤、OCR识别、内容审核、图片审核等多个环节，所以响应时间比较慢，而提交审核这个请求本身从业务角度来讲，没有必要等待整个审核流程结束后，再返回响应结果。

所以我针对自媒体文章的状态，设置了提交待审核、审核失败、人工审核、审核通过等状态码进行标识。

> wm_news表的status状态：
> 0草稿	1提交（待审核)	2审核失败	3人工审核	4人工审核通过	8审核通过(待发布)	9已发布

当自媒体文章提交后，状态码为待审核，同时我会以JSON格式封装文章的基本信息，发送到MQ中的审核队列中，由消费者进行异步审核。

这个异步审核的详细流程是这样的：

- 首先是OCR识别图片素材中的文字，防止有一些敏感词汇以图片的形式体现出来，我是利用**Tess4J实现OCR**图片文字识别的，主要这个免费，而且也是比较准确的。

  识别出来的文字，我会把他列入到后续的敏感词过滤、阿里云内容审核的数据中一起参与后续的内容审核。

- 然后是敏感词过滤，将一些文章中不应该出现的敏感词汇进行判断筛选判断，我是提前创建了一张敏感词数据表，保存用来保存敏感词汇。

- 我是利用**DFA算法**进行词项的匹配，封装了一个工具类，判断传入的文章内容是否有敏感词汇。如果有的话，则直接判定为审核失败，并给出失败状态码和失败原因，下次媒体人登录平台查询时，就能看到审核失败的类型和原因了。

- 敏感词过滤完了以后，其实也不能说一定没问题，还是得借助一些更加专业的内容审核服务过滤一下，我们是买的**阿里云的内容审核服务**，好像是千次1块多钱吧，支持图片和文本的审核。

  我会分别调用阿里云内容审核服务的文本审核和图片审核，如果审核通过，就修改文章状态为审核成功，剩下的交由定时任务进行文章的发布。

  如果审核没有成功，可能是失败，也可能是结果不确定，还需要进一步人工审核。所以如果审核失败的话，就把状态码改为审核失败的状态码，如果需要人工审核的话，就把状态码改为待人工审核的状态码。

  人工审核会有平台运营的人员登录平台端后，进行人工审核。审核的流程很简单，直接查询自媒体文章状态码为待人工审核的文章，进行人工审核。人工审核完毕后，再给出审核通过或者失败的结果。

自媒体人可以在自媒体平台上，查询到自己发布的文章当前状态，比如：待审核、审核拒绝、人工审核、已发表等状态。

最后就是文章的正式发送，文章由自媒体服务发送到文章微服务中进行保存。



#### 4）内容管理

**分页查询内容**

- 可根据内容标题、发布状态（全部、已上架、已下架）、发布时间（开始时间-结束时间）进行查询
- 列表展示的属性有：序号、标题、作者、类型、标签、发布时间、状态、操作
- 上架、下架

#### 5）敏感词管理

**新增**

- 弹出的输入框，输入敏感词可直接保存
- 已存在的敏感词则不能保存

**查询列表**

- 查询需要按照创建时间倒序查询
- 按照敏感词名称模糊查询
- 分页查询

**修改**

- 弹出的修改框，进行修改

**删除**

- 直接删除即可



## 3. 项目话术

### 3.1 项目介绍

注意:

一定要追求真实，一定要给一个真实背景。千万别完全照着头条课件上的东西去说。很容易撞车。

项目介绍三要素:项目介绍、岗位职责、业绩、技术亮点

下面的话术中，项目名称自己适当修改一下，依据所在城市进行包装。

话术1:

好的面试官，我最近做的这个项目是融媒体项目，准确来讲是一个融媒体平台，项目是我们公司自研的，核心业务就是基于我们公司自有的媒体资源、社群、自媒体资源进行整合。基于我们研发的融媒体平台，构建了多款App，分别针对不同的客户群体。公司业务规划走的就是融媒体矩阵，每个App项目分别针对不同的类目进行打造，各自做专业垂直类目的App。说白了就是前端换了个皮肤，垂直类目有母婴、健康、旅游、以及各省市区域进行打造，只要运营需要，随时可以生产出很多App。

项目的核心就是通过矩阵玩法，聚集不同类目下的用户，每一个项目都是一个垂直类目，吸引不同兴趣爱好的用户，说白了就是养一波铁粉，然后为后期打造私域营销、垂直类目精准客群推荐打好基础，后期公司计划就是走这个广告和垂直类目电商进行营利。

还有就是项目架构，我们首先是将整体系统拆分成多个分布式子系统，比如大数据计算和推荐、平台运营管理系统、还有就是我参与的这个融媒体平台项目。

我主要是负责融媒体平台端的一些功能开发，后台架构是用的微服务，便于业务的扩展和将来部署时动态的管理服务资源。

主要服务的话就是个人中心、文章服务、行为数据服务、任务调度微服务、评论服务、检索服务、自媒体管理服务、平台管理服务、图片管理服务、统一认证服务这些基本业务服务，大概有十几个，大部分服务模块相关的核心业务开发我都参与过，我们公司开发模式的话没有严格的划分具体负责哪些模块，都是根据月度下发的任务进行分配的。

我们项目选择的技术还是比较ok的，比如:基于SpringCloaud Alibaba系列微服务组件，进行搭建，用到Nacos、Sentinel,OpenEeign、Gateway、SkyWalking等微服务组件

然后业务层，就是每一个微服务的话，我们是用的SpringBoat、MybatisPlus、Redis、MySQL、RabbitMQ、Elasticsearch这些技术，还是比较主流的;

我在项目中的话，主要是负责java后端开发，算是我们小组的主力吧，项目也是做了有一年了，目前已经上线几个APP了。

主要独立负责的一些核心业务的话就是有用户推荐服务Java端、个人中心、文章服务、任务调度微服务、评论服务、检索服务、统一认证服务这几个核心模块业务的设计与编码

这个项目我从项目立项那会就参与了，我刚进公司的时候这个项目刚开始做，所以这类型业务也是非常熟悉，当然我主要是做后端开发。

大概就是这个情况，面试官。

```bash
切记!千万不要过于主动，比如:疯狂的逮着机会，给面试官无脑输出。

你们一共多少人的开发团队，整体开发团队30人左右，我们java这边的话就是分了两个小组，每个小组5个人。运维、测试、前端、产品、移动端、大数据、UI设计师....
```

### 3.2 开发环境的搭建

我们公司的项目环境有开发环境、测试环境和线上生产环境，测试环境和生产环境是运维搭建的。

然后开发环境是我（如果你包装3年以下就说你组长搭建）搭建的，我们公司内部有专门的开发机，就是一台高性能的服务器，然后我在上面使用Docker部署了一些项目开发环境用的东西，比如: Redis、MySQL、Nacos Server端、Sentinel Server端、SkWalking Server端，还包括一些其他中间件，Elasticsearch、RabbitMQ、XXL-JOB这些中间件，还有ELK日志平台，这些都是我部署的。

因为开发环境的这个服务器性能足够满足我们日常开发使用，所以就部署在一台服务器上。主要是能够快速的重置、重启就可以了。
至于公司内部项目管理工具、GitLab、公司内部知识库这些不是我搭建的，因为这些都是公司平台自有的。

开发的时候，我们就是连接公司内网的开发机，所有的连接方式、账号信息，我都是写好文档，在公司内部的wiki平台上发布了，用的时候，其他同事去参考就行了。

如果回家后需要加班的话，我们就配上VPN 连接公司内部服务器就行了。

### 3.3 登录

平台方、媒体端、用户端登录方式是不一样的，平台端和媒体端是支持账号密码、手机验证码登录。

用户端是支持账号密码、手机验证码、微信登录、微博登录多种登录方式。平台端和媒体端是必须登录后才能使用。

用户端的话，可以匿名访问，但如果要点赞、评论、收藏或者查看个人中心等行为的话还是需要登录的，App页面会自动跳出来登录界面。

关于登录这块都是我做的，我给您挨个说一下吧。

#### 3.3.1 账户密码登录

我们首先设计了用户表，用户表中包含了用户的账号、密码、手机号、头像、注册时间、是否身份认证这些字段。

```sql
-- ----------------------------
-- Table structure for ap_user
-- ----------------------------
DROP TABLE IF EXISTS `ap_user`;
CREATE TABLE `ap_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `salt` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密码、通信等加密盐',
  `name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户名',
  `password` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密码,md5加密',
  `phone` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '手机号',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '头像',
  `sex` tinyint(1) unsigned DEFAULT NULL COMMENT '0 男\r\n            1 女\r\n            2 未知',
  `is_certification` tinyint(1) unsigned DEFAULT NULL COMMENT '0 未\r\n            1 是',
  `is_identity_authentication` tinyint(1) DEFAULT NULL COMMENT '是否身份认证',
  `status` tinyint(1) unsigned DEFAULT NULL COMMENT '0正常\r\n            1锁定',
  `flag` tinyint(1) unsigned DEFAULT NULL COMMENT '0 普通用户\r\n            1 自媒体人\r\n            2 大V',
  `created_time` datetime DEFAULT NULL COMMENT '注册时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='APP用户信息表';

```

![image-20210412142006558](https://gitee.com/tjlxy/img/raw/master/image-20210412142006558.png)

当前端提交请求时，请求体中以JSON形式提交账号、密码、验证码这几个参数。

请求先到后端gateway网关，网关处判断登录请求时不需要校验Token的，所以直接放行。请求被转发到user用户服务这里，流程也很简单，先针对参数进行校验，非空、是否合法，如果参数有问题，则直接返回登录失败信息。

如果参数没问题，就判断一下账号密码是否频繁登录，这里我是借助redis的zset数据结构设计了一个**时间窗口限流**算法实现的。

如果没有限流，就查询用户数据，用户是否存在，如果不存在就返回登录失败。如果存在就校验密码，我们是使用**加随机盐的一个工具类BCrypt**实现的，它的安全度更高。

如果密码校验通过，就封装用户数据，比如用户名、用户头像，封装到JWT Token的载荷中，返回给前端就可以了。

以后前端就带着这个Token访问其他资源。当然了，我在网关处，针对Token进行校验比如访问受限资源，需要判断是否有Token，判断Token是否有效，如果Token没问题，就将请求放给后面的微服务。

![image-20231111115521182](https://gitee.com/tjlxy/img/raw/master/image-20231111115521182.png)



#### 3.3.2 手机验证码登录

这个流程主要涉及到3个接口，分别是:

- 手机验证码发送接口，在common通用服务中
- 滑块验证码接口，在common通用服务中
- 手机验证码登录流程，在user通用服务中

##### 1）手机验证码发送

![image-20231111120507868](https://gitee.com/tjlxy/img/raw/master/image-20231111120507868.png)

首先用户在页面填写手机号码，前端校验手机号没有问题，就会自动向后端【发送登录短信】接口发起请求。

我们是设计了一个common服务，就是封装了一些通用功能的服务，将发短信、OSS对象存储这些通用功能都放到这个通用服务中实现。

common服务的短信发送接口，接收到了用户请求后，先针对手机号进行校验，校验的细节是这样的，先校验手机号是否合法，然后校验手机号是否被拉黑，这个拉黑主要是防止用户疯狂的刷我们的发短信接口。判断用户是否拉黑的依据就是在Redis 中存了一个TTL过期时间为10分钟的拉黑key，如果这样用户一旦被拉黑，只能10分钟后才能访问我们这个接口。

然后校验手机号是否达到限流阈值，这里我是基于redis的zset，设计了时间窗口限流实现的。

限流的条件是满足5分钟内发生3次发短信行为，就判定进行限流。

如果没有达到限流阈值，我们直接调用三方的短信服务，发送短信。

短信发送成功后，我就把短信验证码，缓存到Redis中，过期时间TTL设置为默认5分钟，当然这些时间配置什么的，我们都统一使用的配置文件管理了，可以动态修改的。

缓存在Redis 中的key的格式为:USER:LOGIN:手机号，值就是验证码的随机值。

最后响应前端短信发送成功。

另外还有一个点就是限流的细节，我给您讲一下，我们分两级验证码限流的:

- 第一级：用户5分钟内连续发3次短信，达到阈值后，使用滑块验证码限流，查询请求参数中是否携带滑块验证码参数，如果有，就查询redis 中的验证码，比对前端提交的这个参数是否正确，如果正确，就直接放过去。
- 第二级：用户10分钟内，连续发8次短信，达到阈值后，直接限流用户10分钟后重试，实现方式就是将用户拉黑，把用户的手机号设计为key，比如:BLACK:LOGIN:手机号，TTL过期时间设置为10分钟，这样用户下次请求时，直接判断这个手机号是否在黑名单，如果在的话直接就拒绝了。10分钟后自然会过期，就又恢复正常发送短信了。

##### 2）手机验证码登录

首先是前端提交登录登录表单，包含手机号、验证码。后端接收到请求后，先校验一下手机号是否合法。

然后根据手机号，查询Redis 中缓存的真实验证码，查询完毕后销毁掉redis 中的验证码。比对验证码是否正确，如果验证码不存在，或者验证码错误，那就直接返回前端失败信息。如果验证码正确，就根据手机号查询用户表中用户数据，如果用户存在，就以JWT格式封装用户 Token，返回给前端。

如果用户不存在，也没关系，直接默认自动注册，写入用户的手机号，关于用户名和头像用默认值代替。

用户自己可以在个人中心中，修改用户名、头像、密码等数据。

### 3.4 登录时候手机验证码限流问题

有的，这个必须做限流，我是利用redis的zset结合时间窗口限流算法进行实现的。

我们是这样考虑的，用户可能有很多行为，是无意义，或者非法的，比如：频繁发送短信频繁修改个人信息、频繁的点赞、评论等等行为，都应该进行限流。

所以我就针对这些频繁的行为进行限流，设计了一个通用的限流接口。思路上是使用时间窗口限流算法，具体实现我利用redis的zset进行实现。

比如说，用户5分钟内只能发送3个验证码，或者10分钟内只能发送8个验证码，于是我就将用户发短信的行为设计为key，格式为【场景:行为：用户唯一标识（可以是手机号、用名)】，score分数值是时间戳，value值也是时间戳。

具体流程：

- 当用户每次发生限流行为，都会记录这个行为，以 Redis zset的方式进行记录
- 在业务处理流程中，使用java api进行查询判断，其实本质就是调用redis的zcount命令，这个命令可以传入起始分值和结束分值。我就把当前时间戳作为结束分值，然后当前时间戳减去限流时间，比如说5分钟的毫秒值，求出来5分钟前的时间戳。于是根据这两个时间戳作为分值，范围查询zset中出现的次数，就得到用户在5分钟内，这个行为一共触发了几次。
- 后续的业务，就是不同场景中，根据不同的需求，进行校验就行了，比如说5分钟限流3次，10分钟限流8次，这就是后面的业务代码考虑的事情了。

限流场景设计：

![image-20231111161027947](https://gitee.com/tjlxy/img/raw/master/image-20231111161027947.png)

限流算法思路

![image-20231111161117445](https://gitee.com/tjlxy/img/raw/master/image-20231111161117445.png)

### 3.5 续约Token怎么设计的

这个续约token在我们的项目中有设计过，恰好也是我做的。

当时产品经理给到的需求是，要求用户可以保持一个长期登录或者自动登录的效果。避免用户状态频繁过期，频繁登录给用户带来不便。

我当时就使用双Token的方式进行设计的，这种方案提出来后是经过组长评估的，他也认为没问题，于是我就这么做了。

我给您说下我的大概实现思路吧。

首先是登录，在登录的时候，无论何种方式认证，最后都是返回Token给到前端。

在返回Token 的时候，是生成两个Token：

- 一个是AccessToken，我管他叫访问令牌，我处于安全考虑，比如防止令牌被恶意使用，设置他的有效期为3个小时，每次请求资源时携带这个令牌;
- 另一个是RefreshToken，我管他叫刷新令牌，这个令牌不能用来访问资源，只能用来刷新访问令牌，就是每当访问令牌过期，前端携带这个RefreshToken 获取新的AccessToken，这个刷新Token的有效期我设置为7天，当然这个可以改，这是写在配置文件中的;

![image-20231111161808895](https://gitee.com/tjlxy/img/raw/master/image-20231111161808895.png)

当Token返回给前端后，浏览器端用的是localStorage保存的，APP端的话有他们自己本地保存方式，将这两个Token保存下来

![image-20231111161956414](https://gitee.com/tjlxy/img/raw/master/image-20231111161956414.png)

然后就是访问资源的时候，我们在网关处会进行校验，如果访问的是受限资源，那么网关写了一个全局过滤器，校验是否携带AccessToken，以及这个Token是否过期，如果正常，则直接放行。

如果校验异常，可能是Token过期，也可能是Token数据被篡改或损坏，于是返回拒绝。

前端判断拒绝的状态码为AccessToken无效后，会重新发起一次请求，携带Refresh Token重新请求续约接口，这个续约接口是不需要网关拦截的，然后续约接口针对RefreshToken进行解密后，校验签名没有问题，没有被篡改，于是重新颁发新的AccessToken，返回给前端。前端重新携带AccessToken 发起请求就行了。

这里面有个重要的地方就是，我针对令牌使用RSA非对称加密进行加密，目的就是防止被篡改数据。

这就是我设计的实现方案。

![image-20231111162322392](https://gitee.com/tjlxy/img/raw/master/image-20231111162322392.png)

### 3.6 前后端交换

我们是使用Swagger、Knife4j快速生成后端的接口文档，然后给到前端，和前端进行配合的。

这个Knife4j就是一个整合了Swagger和 OpenApi的工具。

开发接口的时候，我们是使用Swagger提供了一波注解，标注在不同的类、方法、属性上面快速的生成在线文档。

然后Knife4j进行了增强，不仅页面美化了，而且还可以在线调试，还支持导出离线的接口文档。

我当初就是在开发环境启用了Knife4j，只有在开发环境中，前端能够访问到我们的接口，然后也可以直接导出离线版，发给前端进行对接。

另外我自己本地测试的时候，包括和前端进行面对面沟通的时候，我是习惯使用postman进行测试，Knife4j提供的那个测试页面功能太少，没有Postman专业。

包括我们项目的每一个接口，都是在PostMan中创建了团队，进行维护的。

无论是前端还是后端，都可以直接在它的接口列表中直接调出来以前写好的接口，进行接口测试的。

### 3.7 前端部署

我们前端的话分为App端和PC端。App端是直接打包成应用的。

PC端是需要将前端资源部署在服务器中的，我们是采用nginx作为前端项目的部署服务器。前端我们架构是使用vue写的，前端写完后会使用webpack进行编译构建，把vue文件转为编译后的js、css、html之类的静态资源。

然后把这些静态资源打包发布到nginx服务器。

部署方式也很简单，将静态资源更新到nginx的html目录下，然后修改nginx配置文件，将root目录指定到项目路径，这样前端请求域名根路径下的静态资源时，直接在nginx端进行响应了。

另外我们还配置了关于后端的api访问路由，凡是以app路径开头的资源，全都转发到后端的网关微服务上，转发的策略用的是轮询。

![image-20231111172738427](https://gitee.com/tjlxy/img/raw/master/image-20231111172738427.png)

### 3.8 文章查询流程

文章查询我们是支持首页查询、频道栏目查询，另外还提供了关键字检索功能。

先说一下这个表结构吧，有3张表存储文章信息：文章基本信息表、文章配置表、文章内容表，他们之前都是一对一的映射关系。然后还有一个大数据推荐接口被我们调用。

**文章基本信息表**

```sql
-- ----------------------------
-- Table structure for ap_article
-- ----------------------------
DROP TABLE IF EXISTS `ap_article`;
CREATE TABLE `ap_article` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '标题',
  `author_id` int(11) unsigned DEFAULT NULL COMMENT '文章作者的ID',
  `author_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '作者昵称',
  `channel_id` int(10) unsigned DEFAULT NULL COMMENT '文章所属频道ID',
  `channel_name` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '频道名称',
  `layout` tinyint(1) unsigned DEFAULT NULL COMMENT '文章布局\r\n            0 无图文章\r\n            1 单图文章\r\n            2 多图文章',
  `flag` tinyint(3) unsigned DEFAULT NULL COMMENT '文章标记\r\n            0 普通文章\r\n            1 热点文章\r\n            2 置顶文章\r\n            3 精品文章\r\n            4 大V 文章',
  `images` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文章图片\r\n            多张逗号分隔',
  `labels` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文章标签最多3个 逗号分隔',
  `likes` int(5) unsigned DEFAULT NULL COMMENT '点赞数量',
  `collection` int(5) unsigned DEFAULT NULL COMMENT '收藏数量',
  `comment` int(5) unsigned DEFAULT NULL COMMENT '评论数量',
  `views` int(5) unsigned DEFAULT NULL COMMENT '阅读数量',
  `province_id` int(11) unsigned DEFAULT NULL COMMENT '省市',
  `city_id` int(11) unsigned DEFAULT NULL COMMENT '市区',
  `county_id` int(11) unsigned DEFAULT NULL COMMENT '区县',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  `publish_time` datetime DEFAULT NULL COMMENT '发布时间',
  `sync_status` tinyint(1) DEFAULT '0' COMMENT '同步状态',
  `origin` tinyint(1) unsigned DEFAULT '0' COMMENT '来源',
  `static_url` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1383828014629179394 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='文章信息表，存储已发布的文章';

```

**文章配置表**

```sql
-- ----------------------------
-- Table structure for ap_article_config
-- ----------------------------
DROP TABLE IF EXISTS `ap_article_config`;
CREATE TABLE `ap_article_config` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `article_id` bigint(20) unsigned DEFAULT NULL COMMENT '文章ID',
  `is_comment` tinyint(1) unsigned DEFAULT NULL COMMENT '是否可评论',
  `is_forward` tinyint(1) unsigned DEFAULT NULL COMMENT '是否转发',
  `is_down` tinyint(1) unsigned DEFAULT NULL COMMENT '是否下架',
  `is_delete` tinyint(1) unsigned DEFAULT NULL COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_article_id` (`article_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1383828014645956610 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='APP已发布文章配置表';

```

**文章内容表**

```sql
-- ----------------------------
-- Table structure for ap_article_content
-- ----------------------------
DROP TABLE IF EXISTS `ap_article_content`;
CREATE TABLE `ap_article_content` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `article_id` bigint(20) unsigned DEFAULT NULL COMMENT '文章ID',
  `content` longtext COLLATE utf8mb4_unicode_ci COMMENT '文章内容',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_article_id` (`article_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1383828014650150915 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='APP已发布文章内容表';

```

当初我在设计这三张表的时候，本质他们都是文章相关的字段，本应该在一张表里面，但是考虑到后续随着数据量的增多，可能会单表带来很大的压力，所以进行了垂直分割。我按照查询的业务维度进行拆分的，比如:基本信息一张表，配置信息一张表，文章内容一张表进行分离。

先说首页查询吧，首页查询其实是推荐查询，推荐的依据主要是：

- 用户自己在个人中心配置过的感兴趣标签;
- 大数据系统根据用户行为数据分析得到的用户画像，这个是不断更新的;
- 系统本身的推荐，如:管理员设置的批量推荐、广告推荐、以及随机的热点资讯;

用户在App中每次下拉表示刷新一波推荐内容，请求到达后端后，后端是直接远程调大数据提供的推荐接口，返回推荐给用户的30条资讯文章信息 id。

然后拼接这30条文章信息，返回给前端，前端以每页展示10条的方式进行分页展示。

然后就是当用户下拉到第三页的时候，前端再向后端发起请求，再调用大数据推荐接口获取后30条推荐的文章数据返回给前端。

如果用户切换了频道栏目，频道可以自定义，比如：新闻、国际、军事、娱乐、民生、两岸等，那么查询的时候就不再是按照推荐算法查询，而是按照发布时间进行查询。

比如：用户在手机App中，下拉页面，就会刷新一波最新的资讯，这个资讯时间是依据上次刷新的时间，进行查询的，查询上次刷新之后的最新资讯。如果说没有更新的，那么会返回已经是最新的列表。

这个查询就是按照频道、时间进行查询数据库中的数据的。
如果用户进行上拉，就会按照时间进行反向分页查找，比如先返回最近发布的10条数据，当浏览到底部的时候，自动去查询更早的10条数据，在后端说白了其实就是按照时间字段进行条件筛选以及分页查询实现的。



另外就是我在完成这块业务的时候有两个技术上的小亮点。

一个是采用Freemark将文章内容静态化，就是按照预制的模版，生成为静态的HTML 资源，因为文章内容数据不会经常改动，但如果每次请求都要重新查询DB，以及重新渲染模版数据的话，会造成计算资源浪费以及延长了响应时间。所以我们进行页面静态化，就是把文章内容数据，按照预先定义好的模板，填充到模板中，生成静态资源HTML文件。这样在后期无论是返回给PC还是返回到App，都是直接返回准备好的静态资源。

另一个就是将这个渲染好的静态资源，直接上传到公司内部搭建的分布式文件系统中，是使用minlO搭建的，把文章的静态资源、静态页面存储在这里。将来用户点击文章标题，进入到文章详情页时，就直接从MinlO中获取提前渲染好的页面数据就好了，不用再查询DB。



还有就是关于文章的检索，这个我们是搭建了Elasticsearch进行实现的。

用Elasticsearch的主要原因是，MySQL本身查询的话，是基于物理磁盘，所以查询效率比较低，而且遇到关键字模糊查询，会导致索引失效。

另外就是Elasticsearch它自己的优势很明显，比如支持分词检索，并且也提供了一套完整的语法，支持各种查询方式。

所以我们使用ElasticSearch进行实现。

用户进行关键字检索时，我们就是调用的Elasticsearch进行分词检索的。我们提前创建了文章索引，围绕文章基本信息、配置信息、详细信息进行设计的。查询时，直接从ES中返回了需要的各种信息。



### 3.9 ThreadLocal在项目中的应用

有的，我们是使用ThreadLocal保存用户的状态信息，这样就可以随时随地获取到用户信息了。实际项目流程是这样设计的：

首先请求先到网关，我在网关设计了一个全局过滤器。

当它拦截下来请求后，将请求进行解析，从请求头中拿到用户的访问Token，这个Token经过解密后，转为JWT格式的Token，并校验签名是否正确、Token是否过期，如果没有问题就获取到用户账号，并且将账号信息写到请求头中，转发给后面的业务服务。

```java
@Component
@Slf4j
public class AuthorizeFilter implements Ordered, GlobalFilter {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        //1.获取request和response对象
        ServerHttpRequest request = exchange.getRequest();
        ServerHttpResponse response = exchange.getResponse();

        //2.判断是否是登录
        if(request.getURI().getPath().contains("/login")){
            //放行
            return chain.filter(exchange);
        }


        //3.获取token
        String token = request.getHeaders().getFirst("token");

        //4.判断token是否存在
        if(StringUtils.isBlank(token)){
            response.setStatusCode(HttpStatus.UNAUTHORIZED);
            return response.setComplete();
        }

        //5.判断token是否有效
        try {
            Claims claimsBody = AppJwtUtil.getClaimsBody(token);
            //是否是过期
            int result = AppJwtUtil.verifyToken(claimsBody);
            if(result == 1 || result  == 2){
                response.setStatusCode(HttpStatus.UNAUTHORIZED);
                return response.setComplete();
            }
        }catch (Exception e){
            e.printStackTrace();
            response.setStatusCode(HttpStatus.UNAUTHORIZED);
            return response.setComplete();
        }

        //6.放行
        return chain.filter(exchange);
    }

    /**
     * 优先级设置  值越小  优先级越高
     * @return
     */
    @Override
    public int getOrder() {
        return 0;
    }
}
```

业务服务中自定义了SpringMVC拦截器，从请求头中获取到用户信息，并存储到ThreadLocal中，这样就可以在本次请求中随时随地获取到用户的状态信息。

当请求处理完毕后，在拦截器后置处理方法中再将ThreadLocal中的数据清理掉就可以了。

```java
public class WmTokenInterceptor implements HandlerInterceptor {

    /**
     * 得到header中的用户信息，并且存入到当前线程中
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String userId = request.getHeader("userId");
        if(userId != null){
            //存入到当前线程中
            WmUser wmUser = new WmUser();
            wmUser.setId(Integer.valueOf(userId));
            WmThreadLocalUtil.setUser(wmUser);

        }
        return true;
    }

    /**
     * 清理线程中的数据
     * @param request
     * @param response
     * @param handler
     * @param modelAndView
     * @throws Exception
     */
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        //        WmThreadLocalUtil.clear();
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        WmThreadLocalUtil.clear();
    }
}

```

### 3.10 文章发布流程

> 题外话：文章相关的整个流程，我们分为：文章发布、文章审核2个流程。
>
> 文章发布：自媒体人在自媒体平台端发布文章，这是发生在自媒体微服务中的；当文章审核通过后，自媒体微服务远程调用文章微服务，将审核通过后的文章发送到文章微服务中进行文章的正式发布;
>
> 文章审核：当页面点击文章发布后，紧接着进行审核，审核可能通过，也可能不通过我们使用MQ解耦当前请求与审核流程的耦合，这也是发生在自媒体微服务中的；

文章发布是在媒体端进行的行为，首先是媒体机构或个人通过机构审核或者个人实名认证后，签署网络文明规范等协议后，才可以在自媒体平台端发布文章。

当然，这个文章发布并非立刻就可以让用户看到，这里仅仅是自媒体平台端发布，在发布之后，还需要进行**文章审核**的，审核通过后，才可以让用户看到。

大概实现思路是这样的：

1、在媒体平台系统中，前端我们是采用富文本的形式编辑文章，并且我们支持自动保存，就是每隔10s，自动保存正在编辑的文章内容到自媒体文章表中。

这个保存操作就是前端写了一个定时函数，将富文本中的内容转为JSON格式的文本，用异步的方式发送给后端的自媒体服务进行保存。后端保存文章信息到文章表、文章和素材的关联关系到文章素材中间表中。

其中，文章信息主要包含:标题、所属频道、标签、文章内容、封面图片这些数据。

> 保存文章需要接受的参数比较多，如下
>
> ```java
> public class WmNewsDto {    
>  private Integer id;   
>  //标题    
>  private String title;
>  //频道id
>  private Integer channelId;
>  //标签
>  private String labels;
>  //发布时间
>  private Date publishTime;
>  //文章内容
>  private String content;
>  //文章封面类型  0 无图 1 单图 3 多图 -1 自动
>  private Short type;
>  //状态 提交为1  草稿为0
>  private Short status;
>  //封面图片列表 多张图以逗号隔开
>  private List<String> images;
> }
> ```
>
> ```json
> {
>  "title":"黑马头条项目背景",
>  "type":"1",//这个 0 是无图 1 是单图 3 是多图 -1 是自动
>  "labels":"黑马头条",
>  "publishTime":"2020-03-14T11:35:49.000Z",
>  "channelId":1,
>  "images":[
>      "http://192.168.200.130/group1/M00/00/00/wKjIgl5swbGATaSAAAEPfZfx6Iw790.png"
>  ],
>  "status":1,
>  "content":"[
>      {
>          "type":"text",
>          "value":"随着智能手机的普及，人们更加习惯于通过手机来看新闻。由于生活节奏的加快，很多人只能利用碎片时间来获取信息，因此，对于移动资讯客户端的需求也越来越高。黑马头条项目正是在这样背景下开发出来。黑马头条项目采用当下火热的微服务+大数据技术架构实现。本项目主要着手于获取最新最热新闻资讯，通过大数据分析用户喜好精确推送咨询新闻"
>      },
>      {
>          "type":"image",
>          "value":"http://192.168.200.130/group1/M00/00/00/wKjIgl5swbGATaSAAAEPfZfx6Iw790.png"
>      }
>  ]"
> }
> ```



涉及到的表：

**自媒体文章表wm_news**：

```sql
-- ----------------------------
-- Table structure for wm_news
-- ----------------------------
DROP TABLE IF EXISTS `wm_news`;
CREATE TABLE `wm_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(11) unsigned DEFAULT NULL COMMENT '自媒体用户ID',
  `title` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '标题',
  `content` longtext COLLATE utf8mb4_unicode_ci COMMENT '图文内容',
  `type` tinyint(1) unsigned DEFAULT NULL COMMENT '文章布局\r\n            0 无图文章\r\n            1 单图文章\r\n            3 多图文章',
  `channel_id` int(11) unsigned DEFAULT NULL COMMENT '图文频道ID',
  `labels` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  `submited_time` datetime DEFAULT NULL COMMENT '提交时间',
  `status` tinyint(2) unsigned DEFAULT NULL COMMENT '当前状态\r\n            0 草稿\r\n            1 提交（待审核）\r\n            2 审核失败\r\n            3 人工审核\r\n            4 人工审核通过\r\n            8 审核通过（待发布）\r\n            9 已发布',
  `publish_time` datetime DEFAULT NULL COMMENT '定时发布时间，不定时则为空',
  `reason` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '拒绝理由',
  `article_id` bigint(20) unsigned DEFAULT NULL COMMENT '发布库文章ID',
  `images` longtext COLLATE utf8mb4_unicode_ci COMMENT '//图片用逗号分隔',
  `enable` tinyint(1) unsigned DEFAULT '1',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6232 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='自媒体图文内容信息表';

```

**素材表wm_material**：

```sql
-- ----------------------------
-- Table structure for wm_material
-- ----------------------------
DROP TABLE IF EXISTS `wm_material`;
CREATE TABLE `wm_material` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(11) unsigned DEFAULT NULL COMMENT '自媒体用户ID',
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '图片地址',
  `type` tinyint(1) unsigned DEFAULT NULL COMMENT '素材类型\r\n            0 图片\r\n            1 视频',
  `is_collection` tinyint(1) DEFAULT NULL COMMENT '是否收藏',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='自媒体图文素材信息表';

```

**文章素材关系表wm_news_material**：

```sql
-- ----------------------------
-- Table structure for wm_news_material
-- ----------------------------
DROP TABLE IF EXISTS `wm_news_material`;
CREATE TABLE `wm_news_material` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `material_id` int(11) unsigned DEFAULT NULL COMMENT '素材ID',
  `news_id` int(11) unsigned DEFAULT NULL COMMENT '图文ID',
  `type` tinyint(1) unsigned DEFAULT NULL COMMENT '引用类型\r\n            0 内容引用\r\n            1 主图引用',
  `ord` tinyint(1) unsigned DEFAULT NULL COMMENT '引用排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=281 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='自媒体图文引用素材信息表';

```



![image-20231111215028557](https://gitee.com/tjlxy/img/raw/master/image-20231111215028557.png)

并且这里我们还设计了支持草稿箱，其实就是使用一个status字段，值为0代表草稿，值为1代表提交审核。

2、另外就是文章编辑的时候，还涉及到图片素材的管理，我们并没有把图片和文字混在一起，而是单独的针对图片进行管理。

无论是编辑文章时，上传的图片，还是在单独的素材管理中上传的图片，都统一认作为素材库资源，我是使用MinlO进行存储的。

在文章编辑时，需要用到图片，那么就会关联素材库中的图片素材，在数据库中是以中间表维护文章和素材的关联关系，就是说他们两个是多对多的关系。

之所以没有把素材和文章放在一起实现，而是单独把素材拎出来管理的目的，就是说，一来便于人工检查、管理资源，另一方面就是实现素材复用。我们有一个素材管理模块，在页面中针对素材进行分门别类的整理，不同的素材放到不同的目录下，底层是利用MinlO进行实现的。

这样，即便没有编写文章，自媒体人可以预先创建多个多个目录，提前上传好他准备好的图片素材。

3、最后，当媒体人编辑完毕，确认没有问题，就可以提交审核，提交审核通过后，再根据文章发布时的选项，决定是立刻发布，还是定时发布。

审核流程比较复杂一些，涉及到微服务调用、阿里云内容服务调用还有Kafka服务解耦等技术。

还有就是，无论是立刻发布还是定时发布，实现方案是一样的，都是使用定时任务调度技术，每间隔1分钟，定时扫描审核通过后的文章表实现的。因为我们业务上对文章发布没有非常强一致性的要求，所以即便最慢可能会有1分钟的延迟，也是可以接受的

**这里的MQ调用、发布方式，属于审核流程中的问题，我们在下一个问题中详细说**

这就是大概的文章发布流程。

![image-20231111215133908](https://gitee.com/tjlxy/img/raw/master/image-20231111215133908.png)

题外话1：头条项目课程中讲解的时候，必须是正式发布的文章，才会保存文章和素材的关联关系到中间表中，然后关联的素材如果要删除的话，是不能随意被删除，必须没有关联的文章才能删除。

如果是草稿箱关联的素材的话，是不会在中间表中维护草稿箱文章和素材的关联关系，那么即便草稿箱文章中引用了素材，那么这些被引用的素材也是可以随意删除的。

这里我想改一下，草稿箱文章和正式文章无非就是一个状态码的区别，如果素材随意删除的话，当返回草稿箱重新编辑，看到素材图片丢失，也是挺难受的。

并且一般自媒体人也不会把草稿箱放很久，要么很快就提交了，要么就会删掉草稿箱，所以我建议就是，**草稿箱文章也应该和素材产生关联关系，保存到中间表中**。被草稿箱文章关联的素材，不能随意被删除。

题外话2：头条项目中讲解的时候，关于封面是否自动设置，课程里面讲的是支持自动设置文章内部的图片，作为封面。这一点业务我想改一下。因为我觉得，作为一个专业的媒体人，不可能针对封面这么重要的内容随意的用文章中的图片充当封面。

所以关于这一点，咱们统一改一下业务思路，就是**封面是单独设置的**，并且是通过上传指定尺寸封面进行设置的。





### 3.11 文章审核流程（技术亮点：微服务调用、阿里云内容审核服务、Kafka/RabbitMQ）

这个文章审核流程比较复杂一些，它涉及到服务之间的调用，以及第三方接口的调用。

当媒体人确认自己编辑的文章没有问题后，可以提交审核，当文章提交后，自动触发这个文审核流程。

并且无论是第一次新增文章，还是修改文章内容，我们都会执行文章审核流程。

![image-20231112112235237](https://gitee.com/tjlxy/img/raw/master/image-20231112112235237.png)

首先，自媒体平台端提交文章审核，由自媒体服务自己负责审核。

由于审核流程涉及到敏感词过滤、OCR识别、内容审核、图片审核等多个环节，所以响应时间比较慢，而提交审核这个请求本身从业务角度来讲，没有必要等待整个审核流程结束后，再返回响应结果。

所以我针对自媒体文章的状态，设置了提交待审核、审核失败、人工审核、审核通过等状态码进行标识。

> wm_news表的status状态:
> 0草稿	1提交（待审核)	2审核失败	3人工审核	4人工审核通过	8审核通过(待发布)	9已发布

当自媒体文章提交后，状态码为待审核，同时我会以JSON格式封装文章的基本信息，发送到MQ中的审核队列中，由消费者进行异步审核。

这个异步审核的详细流程是这样的：

- 首先是OCR识别图片素材中的文字，防止有一些敏感词汇以图片的形式体现出来，我是利用**Tess4J实现OCR**图片文字识别的，主要这个免费，而且也是比较准确的。

  识别出来的文字，我会把他列入到后续的敏感词过滤、阿里云内容审核的数据中一起参与后续的内容审核。

- 然后是敏感词过滤，将一些文章中不应该出现的敏感词汇进行判断筛选判断，我是提前创建了一张敏感词数据表，保存用来保存敏感词汇：

```sql
-- ----------------------------
-- Table structure for ad_sensitive
-- ----------------------------
DROP TABLE IF EXISTS `wm_sensitive`;
CREATE TABLE `wm_sensitive` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `sensitives` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '敏感词',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='敏感词信息表';

```

我是利用**DFA算法**进行词项的匹配，封装了一个工具类，判断传入的文章内容是否有敏感词汇。如果有的话，则直接判定为审核失败，并给出失败状态码和失败原因，下次媒体人登录平台查询时，就能看到审核失败的类型和原因了。

- 敏感词过滤完了以后，其实也不能说一定没问题，还是得借助一些更加专业的内容审核服务过滤一下，我们是买的**阿里云的内容审核服务**，好像是千次1块多钱吧，支持图片和文本的审核。

  我会分别调用阿里云内容审核服务的文本审核和图片审核，如果审核通过，就修改文章状态为审核成功，剩下的交由定时任务进行文章的发布。

  如果审核没有成功，可能是失败，也可能是结果不确定，还需要进一步人工审核。所以如果审核失败的话，就把状态码改为审核失败的状态码，如果需要人工审核的话，就把状态码改为待人工审核的状态码。

  人工审核会有平台运营的人员登录平台端后，进行人工审核。审核的流程很简单，直接查询自媒体文章状态码为待人工审核的文章，进行人工审核。人工审核完毕后，再给出审核通过或者失败的结果。

自媒体人可以在自媒体平台上，查询到自己发布的文章当前状态，比如:待审核、审核拒绝、人工审核、已发表等状态。

最后就是文章的正式发送，文章由自媒体服务发送到文章微服务中进行保存。

因为审核流程是异步执行的，本身业务上也允许一定时间的延迟，所以再结合文章的定时发布功能，我就干脆，将立即发送和定时发送，统一使用**定时任务组件XXL-JOB实现**。

实现流程很简单，就是每间隔1分钟，扫描自媒体服务的文章表，如果状态码为审核通过(表中状态码使用8代表)，并且设置的发布时间小于当前现行时间，那么就将此文章取出来，使用**OpenFeign**远程调用文章服务，发送到文章服务那边进行保存或者修改。

如果返回成功，就把状态码由待发布改为已发布状态。

文章微服务那边的话，如果保存或修改成功后，会重新基于**Freemark**生成文章的静态化资源，并发布到MinIO中。

并且还会发一条消息到Kafka中，通过Kafka同步数据到检索服务中更新**ElasticSearch**索引中的文档数据。



另外有一个细节就是，我们部署的时候是多个服务实例部署，所以为了避免重复发布，所以针对远程发布的流程，进行了加锁，防止多个自媒体服务重复发送相同的文章。

加锁的话我是用的是基于Redis 的一个Java组件 **Redisson** 实现的。

![image-20231112114900552](https://gitee.com/tjlxy/img/raw/master/image-20231112114900552.png)

到此为止，大体流程介绍完毕了，但是这里面有很多细节，我们不能全都放在上面的流程中讲解，否则讲20分钟都讲不完的，极有可能面试官听的不耐烦了，就直接打断你。

所以我在上面的话术介绍中，留了几个引子，等着面试官来问，比如：

- 在讲解实现步骤的时候，我都会大概提了一下用哪些技术实现，如:OCR识别、DFA算法、阿里云内容审核服务、XXL-JOB、微服务调用等;面试官听到这些亮点后极有可能会追着问这些东西的细节;
- 还有一些业务上的细节，面试官追着问你有没有一些优化业务流程相关问题，我也准备了两个:文章发布到文章微服务的时候，怎么判断这是新增还是修改?人工审核流程一直不结束，难道要一直等着吗?

上面这些衍生的细节问题，我在下面都准备好了，足够面试使用了。至于Elasticsearch同步更新，我放到第13个问题中讲解。

#### 1 OCR识别

OCR识别就是一种光学字符识别技术，它是通过检测图片上的明暗度，确定文字的形状，然后利用字符识别方法，将图片翻译成相应的文字。

我们这个项目用的是Tess4J，它是免费的，就是基于谷歌开源的技术进行二次封装的，使用的时候只需要导入tess4j依赖和中文字库就可以了。

在项目中的话就是识别图片中的文字，判断这些文字是否是敏感词。

#### 2 DFA算法

DFA算法是一种确定有穷自动机的方式。

以前我们是使用的传统的字符串比较方式，就是遍历所有的敏感词，然后在每次循环中，将整片文章字符串传入，然后调用contains方法进行判断，这种方式效率非常差。所以我们改成基于DFA算法的实现方式。

在实际使用的时候，我是封装了一个工具类，一次性的把所有的敏感词存储到了多个map中，然后和文章内容进行比对，map 中的某一个词项能够和文章中的词项比对上，就结束。

这种算法的原理，我大概理解就是将预先输入的词项，构建成一个类似索引的数据结构，匹配的时候也是按照顺序进行匹配，如果输入的内容能够匹配到某一个索引的终点，就代表某一个词项在文章中出现过。

![image-20231112142313830](https://gitee.com/tjlxy/img/raw/master/image-20231112142313830.png)

#### 3 XXL-JOB

XXL-JOB是一个开源的定时任务框架，它本身就是分布式架构，客户端就是每一个微服务，

然后单独运行一个XXL-JOB的服务端，我们只需要在服务端配置运行的任务规则、脚本等等，就可以实现集中式的定时任务调度。

在我们项目中的话，比如:文章定时发布这个流程中，就用到XXL-JOB了。

#### 4 微服务调用的注意事项

微服务调用过程中，注意3个问题：限流、异常、超时。

- 限流指的是被调用的服务要配置限流的阈值，不可能A服务调B服务，B服务说你随便调吧，怎么可能，一定需要针对性的配置限流阈值。试想一下，B服务如果扛不住其他服务的调用，那指定会异常、超时情况出现，极容易引起雪崩。这一点很多培训机构是不讲的，这个细节大家注意下，当然不用给面试官讲这个，只是博哥临时想到这个点，给大家提一嘴。
- 异常、超时：在服务调用方，我们配置了降级类，主要是通过和Sentinel整合，然后在OpenFeign的FeignClient注解中，配置了fallback降级子类，当异常或超时情况出现，自动切断服务调用，执行子类实现的方法，作为兜底的策略。这样就不用再把一些异常信息抛给上层调用者了。

#### 5 文章发布到文章微服务的时候，怎么判断这是新增还是修改

![image-20231112142847444](https://gitee.com/tjlxy/img/raw/master/image-20231112142847444.png)

自媒体服务调用文章服务发布文章时，参数中的文章数据如果有ID，则认为是修改如果没有ID就认为是新增。

#### 6 人工审核流程一直不结束，难道要一直等吗

我们使用XXL-JOB配置了一个定时任务，每隔10分钟执行一次。

定时任务的内容是，我们会扫描自媒体文章表，状态码为3的数据，表示正在等待人工审核。同时AND 连接条件，WHERE 时间小于当前现行时间-1天的时间，则表示，提交1天后，任然是人工审核状态，则直接将状态码改为审核失败的状态。

#### 7 ID 生成策略怎么选择（技术亮点：雪花算法）

在文章服务保存文章数据、文章配置信息、文章内容信息时，我们使用的是雪花算法实现的。其他的数据量少的表，一般我们使用的是自增主键实现的。

#### 8 页面静态化

模板引擎。。。（第8条）



### 3.12 自媒体文章上下架实现流程（同样适用：Kafka在项目中的应用）

提示：这里使用Kafka作为异步解耦的中间件，换成RabbitMQ也是一样的，主要看你对哪个太消息中间件熟悉。

文章发布且审核成功后，默认认为是自动上架的。媒体人可以在自媒体端修改文章的上下架状态。但是考虑到这个行为算是一个比较频繁的行为，且业务本身没有强一致性的要求。所以我们使用MQ进行解耦。

当自媒体人在选择上架或下架文章操作时，先判断文章是否存在、文章是否发布，如果状态为否，则直接结束这个流程，如果状态都正常，则执行修改文章的上下架状态。

具体的操作就是向Kafka中发送了一条消息，消息内容是文章ID以及上架或下架的状态码。文章微服务端配置了一个消费者，监听队列中的消息，我们将Kafka的自动确认改为手动确认，当文章微服务的端本地数据库更新文章状态成功后，再确认消息队列中的消息。

![image-20231112152803613](https://gitee.com/tjlxy/img/raw/master/image-20231112152803613.png)

### 3.13 文章搜索流程（同样适用：ElasticSearch在项目中的应用）

首先，我们先创建了文章索引，结合实际需求，我们自定义Mapping规则，将内容和标题设置为可以被检索的字段，并且引入了IK分词器，让索引支持中文分词。

![image-20231112153627041](https://gitee.com/tjlxy/img/raw/master/image-20231112153627041.png)

在我们项目中，我们设计了单独的检索微服务，提供关于检索相关的服务。当请求到达检索微服务的文章检索接口后，具体的步骤是这样的：

- 客户端请求先到达网关，像这种检索文章的接口，我们是直接放行，不校验用户登录状态的；
- 然后请求被转发到检索服务后，我会根据前端提交的参数拼接查询条件，比如：查询关键字、检索时间段的开始与结束时间、分页等参数拼接查询条件。另外还支持了按照发布时间排序、高亮显示关键字等效果。
- 从Elasticsearch返回的数据中解析出来命中的数据，封装为预设好的VO对象，并返回给前端进行展示；

另外还有一个Elasticsearch相关的操作，就是关于Elasticsearch的数据同步问题。

在文章服务中，触发了文章发布、文章修改以及文章上下架等操作，我们都会同时更新Elasticsearch 中的数据，由于这个操作在业务上来讲没有强一致性的需求，并且多少也有点并发的可能性，所以我使用Kafka进行解耦。

简单说就是文章微服务作为消息生产者将更新文章的事件封装为消息，发送到Kafka 中。搜索微服务作为消费者订阅Kafka中的消息，将接收到的文章数据新增或者修改到Elasticsearch索引库中。

更新方式也很简单，当初存储的时候，我们是以文章ID作为Elasticsearch 中的文档id，所以再次更新的时候，根据文章ID进行更新Elasticsearch 中的数据即可。![image-20231112155802975](https://gitee.com/tjlxy/img/raw/master/image-20231112155802975.png)

补充细节：如果面试官提问:你是用的什么方式整合的Elasticsearch?

我是引入了Elasticsearch官方提供的依赖实现的。具体使用的时候，先声明一个叫做RestHighLevelClient的客户端对象，然后在具体使用的位置进行注入使用即可。

它内部其实就是封装了一波HTTP查询，并且提供了一些JavaAPI方法。

使用的时候调用Java API方法进行条件封装，最终其实还是转为 Http查询，查询到的结果，返回回来后，再封装为SearchResponse对象进行获取即可。



### 3.14 文章搜索历史记录的实现（技术亮点MongoDB）

文章搜索记录也是我做的，就是我们应用中会采集并保存用户的各种行为数据。然后根据这些用户数据进行大数据计算，分析用户的行为数据，得出用户的画像，并且不断地纠正用户的画像数据，这些操作是大数据部门进行实现的。

而对于我们Java这边的话，也会根据用户的行为进行一些业务上的需求设计，例如：当用户在搜索框中进行搜索时，自动弹出下拉框，展示用户过去搜索的历史记录，方便用户重复利用历史搜索的关键字。

 ![image-20231112160122466](https://gitee.com/tjlxy/img/raw/master/image-20231112160122466.png)

当时产品提的需求是这样的，展示用户的10条搜索记录，并且按照搜索关键词的时间倒序排序。支持删除搜索记录。默认只保存每一个用户的10条历史记录，超出的记录就会按照搜索时间删除，优先删除最久的历史记录。

当时在考虑这个需求的时候，我们首先排除掉了用MySQL关系型数据库存储。因为很明显，这种需求绝对是一个并发的读写需求，后期随着运营时间增长，数据量也会不断上升，并且加载速度要快，当时就考虑换一种存储技术。

首先排除了传统的关系型数据库，在多个NoSQL里面比较的话，Redis做缓存组件还可以，但用来做数据查询还是非常不方便的，redis只能支持基本的key value方式查询。

Elasticsearch 也不合适，这个需求并不是做检索，不需要构建索引或者分词。

最后还是选择了MongoDB，MongoDB是一个NoSQL数据库，热数据是基于内存存储的，并且它也支持动态扩展，还有就是MongoDB支持条件查询，这就很方便了。



关于文章搜索记录保存的流程是这样的：

在执行文章搜索记录保存流程之前啊，我先做了一个判断，我先判断一下当前用户有没有登录，判断的依据就是请求头中是否携带用户 id，如果用户未登录，则不执行搜索记录保存流程，如果用户已登录，才执行搜索记录保存流程。

假设用户已登录，首先要在MongoDB查询一下搜索记录，根据userld+搜索关键字查询，如果存在以前搜索过的记录，就更新这条记录的时间为最新时间。

如果不存在搜索记录，查询当前用户的历史搜索记录，并且按照搜索时间降序排序继续判断返回的记录条数，如果小于10，则直接新增新的搜索记录。

如果等于10，就替换搜索时间最早的记录为当前的搜索记录。

还有就是，这个文章搜索记录保存流程，操作没必要让当前请求同步等待，所以我直接设置为异步的方式实现，实现方式很简单，就是在方法上添加了@Async注解实现的。

这就是我负责实现的搜索历史记录。

![image-20231112160654053](https://gitee.com/tjlxy/img/raw/master/image-20231112160654053.png)



### 3.15 联想词功能的实现

联想词就是在搜索的时候，根据当前用户输入的关键字，智能匹配以前搜索过的包含当前关键字的搜索记录。

实现方式很简单，就是预先将联想词词库存储在MongoDB中，前端触发修改事件后，携带关键字向后端发起请求，后端从MongoDB中查询出来符合当前关键字的10条联想词并返回。而MongoDB 中的联想词词库，主要是来源于两个方面，一个是公司以前维护过的一些**词库**，我将这些数据导入到到 MongoDB中，创建了一个联想词表(ap_associate_words)，另一部分数据就是来源于**文章搜索历史记录表**中。

查询的时候，优先查询文章搜索历史记录表，如果搜索记录大于等于10，就返回10条历史搜索记录作为联想词返回给前端。

如果小于10条的话，再查询联想词表，补充够10条联想词数据后，返回给前端。

![image-20231112160812619](https://gitee.com/tjlxy/img/raw/master/image-20231112160812619.png)

### 3.16 用户行为数据的怎么采集记录的

备注:这里我们可以把大数据计算拉进来，虽然我们不懂，但是可以作为话术介绍一下，追求更加真实的推荐项目。把个性化推荐功能交给大数据完成，但是强调一下，我负责完成了实时计算的一个流程：热点文章推荐，是借助Kafka Stream 实现的，把这亮点强调出来，面试官肯定不会问你大数据东西，但是可能会对这个实时计算感兴趣。



我们项目中主要收集了注册信息、登录地点(ip)、点赞和分享、评论和回复、收藏、关注、广告点击、搜索行为、设备信息、页面停留时长等数据。

这些数据有的是用户主动发生的行为，比如：点赞、分享、评论；

有的数据是通过数据埋点，针对用户行为数据进行捕获，例如：用户在广告页面、视频停留时长，文章页面停留时长等；

关于用户画像和智能推荐的，是由大数据小组完成数据埋点和采集的，以及推荐计算的。而我们java这边的话，是根据用户的行为进行统计，完成热点文章的计算与推荐。

因为不同的用户行为数据，对应的微服务是不一样的，比如收藏是在文章微服务，关注是在用户微服务。

所以为了能够集中式的采集用户行为数据，我们这边是利用Kafka进行实现的，当发生用户的阅读、评论、点赞、收藏这4种行为时，在对应的微服务业务流程处理完毕后，除了保存到数据库中以外，还会把用户行为数据发送到Kafka中用于实现实时计算热度文章流程。

关于用户行为这块的业务，我们是设计了单独的用户行为微服务，依据这些用户行为数据完成相关的业务，比如我负责的**热点文章**的**定时统计**和**实时统计**。

### 3.17 文章热点怎么计算的（技术亮点：XXl-JOB、Redis、Kafka Stream）

是这样的，文章热度我们主要是根据用户的**阅读、点赞、评论、收藏**这4种行为进行计算。在文章表中，我们设计了相应的点赞数量、收藏数量、评论数量和阅读数量进行记录：

**ap_article文章表**

```sql
-- ----------------------------
-- Table structure for ap_article
-- ----------------------------
DROP TABLE IF EXISTS `ap_article`;
CREATE TABLE `ap_article` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '标题',
  `author_id` int(11) unsigned DEFAULT NULL COMMENT '文章作者的ID',
  `author_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '作者昵称',
  `channel_id` int(10) unsigned DEFAULT NULL COMMENT '文章所属频道ID',
  `channel_name` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '频道名称',
  `layout` tinyint(1) unsigned DEFAULT NULL COMMENT '文章布局\r\n            0 无图文章\r\n            1 单图文章\r\n            2 多图文章',
  `flag` tinyint(3) unsigned DEFAULT NULL COMMENT '文章标记\r\n            0 普通文章\r\n            1 热点文章\r\n            2 置顶文章\r\n            3 精品文章\r\n            4 大V 文章',
  `images` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文章图片\r\n            多张逗号分隔',
  `labels` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文章标签最多3个 逗号分隔',
  `likes` int(5) unsigned DEFAULT NULL COMMENT '点赞数量',
  `collection` int(5) unsigned DEFAULT NULL COMMENT '收藏数量',
  `comment` int(5) unsigned DEFAULT NULL COMMENT '评论数量',
  `views` int(5) unsigned DEFAULT NULL COMMENT '阅读数量',
  `province_id` int(11) unsigned DEFAULT NULL COMMENT '省市',
  `city_id` int(11) unsigned DEFAULT NULL COMMENT '市区',
  `county_id` int(11) unsigned DEFAULT NULL COMMENT '区县',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  `publish_time` datetime DEFAULT NULL COMMENT '发布时间',
  `sync_status` tinyint(1) DEFAULT '0' COMMENT '同步状态',
  `origin` tinyint(1) unsigned DEFAULT '0' COMMENT '来源',
  `static_url` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1383828014629179394 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='文章信息表，存储已发布的文章';

```



当用户针对某一篇文章发生了这4种行为后，不仅更新数据库文章表中的字段，同时还要根据这4种行为数据，进行文章热度的统计计算，求出来哪些文章是比较火。

**统计的需求**：针对5天以内发布的文章进行统计，统计普通频道和热点频道当中，最热门的30条文章数据。防止很久以前一些老的文章，长期占据榜首的情况出现。

**统计的方式**：我们分为定时计算和实时计算两种方式，不管是哪种方式，统计的结果是不会保存在MySQL，而是保存在Redis，因为每天凌晨2点，都会重置热点数据，说白了每天都会重新查询MySQL重新开始新一轮的热点文章计算。所以说就没必要把文章热度数据存在MySQL当中。

**定时计算**主要是借助XXL-JOB，每天2点的时间，执行计划任务，进行统计，主要是针对5天以内发布的文章做一个统计，作为每天新一轮的热点文章，热度初始数据。

**实时计算**是借助Kafka Stream实现的，主要是针对当天新产生的用户行为，进行实时计算。业务上，我们认为当天发布的文章，发生的用户行为所占的权重分值比重会高一点，避免一些老的文章一直霸榜的情况出现。实时计算出来的分值，会基于每天定时计算的结果进行累计，两种计算方式结合在一起，实现这个业务需求。

**统计的权重**：

- 用户不同的行为，权重不一样：阅读权重: 1，点赞权重：3，评论权重：5，收藏权重：8
- 当天发布的文章，对应的用户行为权重得分是非当天发布的文章权重得分的3倍。这块实现方式是主要是在实时计算中实现的。

我给您分开详细介绍一下具体的定时计算和实时计算的实现方式吧。

我先给您说一下定时计算是怎么实现的。

![image-20231112163959385](https://gitee.com/tjlxy/img/raw/master/image-20231112163959385.png)

每天凌晨两点，执行定时任务，针对前5天的文章，进行分值统计，这里的定时任务是使用XXL-JOB实现的。

因为文章的阅读、点赞、评论、收藏这些数据都在文章数据表中存在的、所以这个计算逻辑特别简单：

![image-20231112164138351](https://gitee.com/tjlxy/img/raw/master/image-20231112164138351.png)

- 1、按照发布时间字段，查询出来最近5天发布的文章，并且文章状态处于正常状态；

```xml
    <select id="findArticleListByLast5days" resultMap="resultMap">
        SELECT
        aa.*
        FROM
        `ap_article` aa
        LEFT JOIN ap_article_config aac ON aa.id = aac.article_id
        <where>
            and aac.is_delete != 1
            and aac.is_down != 1
            <if test="dayParam != null">
                and aa.publish_time <![CDATA[>=]]> #{dayParam}
            </if>
        </where>
    </select>
```

- 2、根据文章的4项行为数据，结合他们对应的权重分值，做个加法计算，计算出来每篇文章的权重分值，并将所有文章的分值结果保存在一个List集合中。因为我还需要针对这些文章进行分类，确定他们是哪些频道的文章。

- 3、远程调用媒体服务，得到所有的频道集合，遍历频道列表，在每次循环中，再次使用流式编程的方式，遍历前面计算出来的文章分值集合，比如：调用filter方法进行过滤，将每一篇文章归类到对应的频道下。然后调用sort方法进行排序，按照每篇文章的分值进行降序排序。最后，判断一下当前频道下的文章数量是否大于30，如果大于30篇文章，就截取前30篇文章，作为当前频道的热点文章，并将他们缓存到Redis 中，把频道ID作为key，把热点文章列表作为值。如果小于等于30，就直接把这些数据缓存到Redis，不用进行截取。

- 4、求出所有文章热点排名前30的文章，并缓存到Redis 中，这些数据作为【热点栏目】中的热点文章进行推荐。

  我们使用Redis进行缓存热点文章数据以后，再针对热点文章查询时，直接从Redis返回就可以了。包括后续实时计算的时候，针对当天的用户行为进行计算，只需要更新Redis中的数据即可。

- 5、最后，我设计了XXL-JOB定时调度，每天凌晨2点，执行定时任务，将前5天的数据重新计算，最终的热点文章重新缓存到Redis。

![image-20231112173057040](https://gitee.com/tjlxy/img/raw/master/image-20231112173057040.png)

还有一个实时计算，主要是借助**Kafka Stream**实现的，针对当天新发生的用户行为，进行计算，并基于定时任务计算出来的结果做一个加法计算，得到最新的文章热度数据。

![image-20231112173221441](https://gitee.com/tjlxy/img/raw/master/image-20231112173221441.png)

我先给您说一下实时计算和定时计算的区别吧。

这两种方式，计算的数据，都不会持久化保存到MySQL，而是不断动态变化的。

首先是每天凌晨2点执行定时计算，作为当天的基础数据，缓存在Redis 中。

然后当天发生的新增用户行为，会被发送到Kafka 的热点文章分值主题中保存。

```java
//发送消息，数据聚合
kafkaTemplate.send(HotArticleConstants.HOT_ARTICLE_SCORE_TOPIC,JSON.toJSONString(mess));
```

最终，在文章微服务中，定义了一个Kafka Stream负责针对队列中不断生产出来的用户行为消息，进行消费处理。

处理步骤大概是这样的：

![image-20231112181323812](https://gitee.com/tjlxy/img/raw/master/image-20231112181323812.png)

- 1、**重置消息kv格式**：定义 Stream对象时，重置关于消息的key value数据，将文章id作为key，将消息类型和行为分值作为值，比如说: key是1234，value是likes:3，代表点赞行为加3分。
- 2、**分组**：在后续的处理中，我会按照key进行分组，同一篇文章的行为数据，分到一个组里面，这样我就可以在聚合的时候，针对同一篇文章进行聚合。
- 3、**聚合**：聚合是发生在同一个分组内部的，也就是说，针对同一篇文章发生的不同行为，进行聚合计算，比如:针对点赞加3分，如果用户取消点赞，那就减3分。这样就能算出来，在某一个时间窗口期内，用户针对同一篇文章，发生的各种行为，得出的最终分数。
- 4、**输出**：最后，再将聚合后的结果数据，转换为key value的形式，输出到热点文章处理完毕的主题中。

消息处理完毕后，还需要定义一个消费者，消费处理完毕的结果。

这个消费者也是定义在文章微服务当中的，当接收到Kafka Stream输出的【文章统计结果消息】，则进行更新操作：

- 首先，先更新文章数据表中的用户行为记录，比如:阅读、点赞、收藏、评论的数量

- 然后我会判断一下当前文章是否是当天发布的文章，如果是当天发布的文章，则分数值乘以3，然后更新到Redis 中。

  比如说，用户收藏了非当天发布的文章，分值权重加8分，而收藏了当天发布的文章，分值权重加24分。

  如果不是当天发布的文章，则分数值按照正常的分值进行存储。

- 最后，我会将热点数据，更新到Redis缓存中，主要是更新两个项目，分别是：

  - 更新当前文章所属频道的热点文章数据；
  - 更新热门推荐栏目的热点文章数据；

  如果当前文章是热门数据，那么它一定在Redis缓存中，所以只需要更新Redis中的分值，做一个加法计算即可。

  如果当前文章，不是热门数据，但是它的分值经过计算，大于热门文章的最后一片文章的分值，那么当前文章就作为新的热点文章替换掉原先分值最低的热门文章就可以了。

这个就是我们借助Kafka Stream 实现的流式计算，针对每天新发生的用户行为进行统计，并且将最新的分值更新到Redis中，说白了其实就是基于每天定时统计出来的基础数据进行动态的调整。

### 3.18 项目中的持续集成是如何实现的（技术亮点：Jenkins，同样适用：项目CI流程）

题外话：一般，如果公司做这种CICD的话，由专门的运维负责，普通java开发，一般是不会接触的。但如果面试官问到这个问题，我们说不知道，也不合适，所以，博哥这里就编一种最简单的实现方案，讲给面试官听就行了。

我当然知道，可以搭建K8S+Docker+Jenkins+Prometheus等等各种技术，构建一套大型集群环境，直接一站式部署、动态扩容，非常方面，但这种规模一般公司是不可能采用的！

一般公司，能整合一波Jenkins，做到持续集成，把自动编译、打包、发布镜像、自动发布项目做好，就已经很不错了。

所以我们这里使用Jenkins的目的就是为了简化工作流程，没有别的目的。至于说动态扩容、K8S等东西，我们项目用不到。

![image-20231112201048413](https://gitee.com/tjlxy/img/raw/master/image-20231112201048413.png)

下面的回答：

我们是使用Jenkins实现项目的可持续集成，在Jenkins 中，我们整合了Git、SSH、Maven.Docker等工具，然后编写了一波构建的脚本，当需要进行构建或者发布时，只需要在Jenkins Web页面中，执行提前写好的任务即可。

在我之前的公司，是内网部署了Jenkins服务器、GitLab、MySQL、本地镜像私服。一切行为都是在公司内部网络中执行的。

每一个微服务中，都提前编写了DockerFile，写好了编译的细节，比如:基于JDK1.8构建镜像，设置JVM内存初始参数，运行java -jar命令等。

日常开发我们将代码提交到开发分支，每次到发版或者部署测试环境时，组长会将开发分支的代码合并到预发布分支或者测试分支，然后在Jenkins web页面中，执行构建脚本，自动部署开发环境或者测试环境。

Jenkins的执行流程很简单：

1、首先是创建一个简单的流水线工作，然后编写每一个步骤；

2、从 gitlat中拉取分支的代码，执行maven 命令，编译完毕后，同时把docker镜像也构建出来了；

3、将构建好的镜像推送到公司内部搭建的镜像私服

4、我们会提前配好目标服务器的SSH公私钥，这样在Jenkins 中直接就可以通过SSH远程连接的方式，在目标服务器中执行部署操作:先停掉并删除旧的容器和镜像，再拉取要部署的镜像，启动最新镜像就可以了。

我们大概就是这样部署的。

当然，我们在Jenkins 不止只写了一个脚本，我们还写了服务降级的脚本和服务版本回退的脚本。需要用到的时候，直接一键执行就可以了。



### 3.19 项目是如何部署的（Jenkins）

这种关于项目中的部署问题，在面试中还是经常会问到的，比如：

- 你们项目部署了几台服务器?(可以说公司自己搭建的机房，也可以说买的云服务器)
- 是你部署的吗?部署环境是你搭建的吗?(这种问题很变态...我TMD是Java)
- 服务状态你们是怎么监控的？
- 面对并发压力，你们是怎么扩容的？

这些问题，说法不一，这里按照课件的配置，编一套简单容易实现的方案话术，大家参考一下。

![img](https://gitee.com/tjlxy/img/raw/master/57104862935e41fba11af650b205b193.png)

好的，面试官，我按照我们项目的访问顺序，挨个给您介绍一下吧。

1、首先是前置网关层。我们部署了两台Nginx，基于KeepAlive搭建了主备模式的高可用方案。

Nginx主服务器绑定一个VIP(虚拟IP），作为项目的入口，一旦主服务器挂掉，从服务器KeepAlive 会感知到Nginx主服务器，自动提升从服务器作为主服务器，从服务器绑定VIP，继续作为项目的入口。

我们项目的一些静态资源，比如前端编译后的静态资源，是部署在Nginx服务器的。当然我们也会额外买一些CDN资源。

当用户请求到达Nginx，Nginx会根据提前配置好的规则，将请求转发给Gateway微服务网关。

我们在Gateway网关处，通过调整同一个group分组下的路由权重，实现了灰度发布。

2、Gateway 网关以及业务微服务和微服务组件，基本上是部署3个以上的服务实例。当然会根据实际情况动态调整服务实例的数量，微服务实例的部署方式就是利用提前写好的Jenkins脚本实现的。

3、而关于MySQL、Redis、Kafka、MongoDB、Elasticsearch等软件，是单独独立部署，并且都做了主备或集群。



线上生产环境不是我部署的，是专门的运维同事负责部署，我们公司机房有十几台刀架式服务器，用于部署当前应用系统以及大数据计算系统。

关于线上服务日志，我们是主要是分为监控微服务状态和服务内部日志两部分：

- 监控微服务状态是通过 SkyWalking 实现的，既可以监控某一个服务的实例信息，比如：JVM参数、GC工作情况、内存、CPU利用率等，还可以监控微服务调用链路的异常、超时等情况；
- 另外关于服务内部日志，我们是通过整合ELK，实现的。工作原理很简单，就是在每一个微服务中，引入Logstash依赖，并配置好关于Logstash Server端的配置。这样，在工作的时候，所有的日志输出，都会上报给Logstash Server端，并输出到Elasticsearch 中。我们配置了一个Kibana的 Discover界面，可以直接检索每一个服务内部的运行日志。

实际运行过程中，我们会监控SkyWalking面板，观测服务运行的状态，当发现某些服务实例的资源利用占比一直非常高，首先我们就会通过动态上线新的服务实例，承担部分压力。然后继续观测监控面板，如果服务实例的资源利用占比下降了，并且GC回收不是那么频繁那就没问题了。如果说，即便上线了多个新的服务实例，依然解决不了问题，那可能是运维开发中的某些环节出错。

如果要排查的话，首先单独看每一个服务实例的运行状态是否正常，网络是否畅通，包括客端请求响应时间是否频繁阻塞超时等等。

如果运维这边没问题，那就考虑通过分析项目日志，以及JVM GC的内存快照，判断是否是业务代码有问题，比如：SQL查询较慢、微服务远程调用慢、是否有导致内存泄露的代码，一点点的分析问题。

==return==

### 3.20 项目部署后如何监控微服务的日志（技术亮点：ELK，同样适用：怎么监控运行日志？线上怎么排除）

ELK介绍：

ELK是三个软件的首字母的缩写，分别表示: Elasticsearch , Logstash, Kibana，它们都是开源软件。新增了一个FileBeat，它是一个轻量级的日志收集处理工具(Agent)，Filebeat占用资源少，适合于在各个服务器上搜集日志后传输给Logstash，官方也推荐此工具。

Elasticsearch是个开源分布式搜索引擎，提供搜集、分析、存储数据三大功能。它的特点有:分布式，零配置，自动发现，索引自动分片，索引副本机制，restful 风格接口，多数据源，自动搜索负载等。主要负责将日志索引并存储起来，方便业务方检索查询。

Logstash主要是用来日志的搜集、分析、过滤日志的工具，支持大量的数据获取方式。一般工作方式为C/S 架构，client端安装在需要收集日志的主机上，server端负责将收到的各节点日志进行过滤、修改等操作在一并发往上去。是一个日志收集、过滤、转发的中间件，主要负责将各条业务线的各类日志统一收集、过滤后，转发给Elasticsearch进行下一步处理。

Kibana也是一个开源和免费的工具，Kibana可以为Logstash和Elasticsearch 提供的日志分析友好的Web 界面，可以帮助汇总、分析和搜索重要数据日志。

最简单的ELK架构图如下：

。。。

通常还会加上FileBeat和Kafka异步收集日志，这也是常用的架构。

一切都配置好后，就可以直接在Kibana中进行快速检索了。

![image-20231112211637535](https://gitee.com/tjlxy/img/raw/master/image-20231112211637535.png)

当然，这里并不是讲技术，上面只是大概介绍了一下ELK,下面的才是话术。

每一个微服务项目中，都依赖了Logstash。在项目运行时，所有的日志都会发送到LogstashServeri端。

在安装Logstash Server端的时候，会在配置文件中配置好ES相关的配置，比如说：hosts主机地址、index索引名称。

在每一个业务微服务中的logback配置文件中，我额外的配置了一个Logstash的Appender，意思就是将日志发送一份到Logstash Server端。

当Logstash Server端接收到旧志后，会按照提前写好的配置，将日志输出到ES当中。

最后，在Kibana中配置好一个Discover,代表一个可以快速检索微服务日志的界面。在界面中，我可以通过关键字检索，也可以通过日志的时间进行检索。

这样就可以快速的查询某一个微服务运行时的日志信息以及ERROR级别的日志。

当遇到错误日志时，会根据实际情况处理：

- 比如，抛出一个微服务调用相关的错误日志，可能是网络分区、超时的情况，做一个记录即可，因为微服务之间调用，偶尔超时一次很正常，项目中都会提前写好降级方法进行处理的。如果频繁抛出超时异常，就立刻反赝给运维，立刻进行处理，比如：重启服务，或者上线新的服务实例先顶一下。如果重启能解决的问题，以后再去优化。
- 再比如，如果是抛出业务逻辑的异常，可能是业务代码没写好，例如：参数校验、非空判断、空指计问题没解决好，也可能是业务逻辑写的有问题，测试的时候没有测试出来。遇到这种问题，就立刻进行处理，处理完毕后，经过测试与审核，快速发布替换。



### 3.21点赞/阅读/不喜欢功能如何实现（技术亮点：Redis、限流算法）

这部分头条课程中没有，提供的源码中是放到了Redis中，我感觉这不太合理。存储数据还得专业的关系型数据库存储比较让我放心。

原因如下：

- 数据存放到Redis,检索方式只能通过KV键值对方式检索，不好玩；
- MySQL其实性能很高的，不要动不动认为MySQL性能不行，8C16G+固态硬盘的服务器，可以轻松应对万级数据库连接。即便受到大表查询、慢查询等极少数场景的影响，一般情况下，服务器就算不是高负荷运转，满足三五干QPS,还是非常容易的（当然您要故
  意说所有的查询都是慢查询、大表查询，不可能达到千级QPS。那就当我没说，您喜欢抬杠就抬吧，您的公司也是倒了八辈子血霉了，咋你做的项目的SQL性能咋都是慢查询..…)

- 如果业务是并发场景&AP选型，那么就可以使用Rdis预先缓存，然后定时更新到MySQL,降低频繁读写对MySQL的压力；
- 如果业务是并发场景&AP选型&必须保证最终一致性&关于数据库更新流程比较麻烦（比如：多表查询、更新、服务调用、全局事务)，这种情况很明显不能依赖MySQL同步实现，而应该使用MQ进行解耦，异步的方式，更新到MySQL中。
- 如果业务是强CP选型（这种情况一般较少），那就只能依赖MySQL同步更新，必须等到MySQL写入成功再返回。如果恰好这种业务是并发场景，那就只能在业务流程或者技术设计中做一些优化，例如：把一个流程中的非重要数据进行异步，重要数据同步更新到
  MySQL,再结合一些SQL优化手段、分库分表等手段，提升SQL处理速度。

设计思路：

- 使用Redis缓存用户的点赞、阅读、不喜欢等用户行为数据；
- 每隔10秒，异步刷新的方式，将最新一次更新的数据批量更新到MySQL中；

思路上的东西，在前面的业务流程介绍中都体现过多次了，并且对于现在阶段的大家来说，这两个思路上的东西应该很容易理解吧？

所以，按照自己的想法，合理就行。

点赞、阅读、不喜欢等用户行为，是放在用户行为微服务中实现的，实现方式非常简单。就是基本的CRUD操作，设计相应的中间表，记录用户对某一篇文章的点赞、阅读、不喜欢的情况。

当用户触发了点赞、阅读、不喜欢等用户行为时，由用户行为微服务处理，先更新到Rdis。

我会使用Zset类型，将用户行为封装为JSON格式，作为值，将时间戳作为score分值。

更新到Rdis成功后，立刻响应前端，前端可以先标注点赞、阅读、不喜欢成功。可能会出现用户点赞后，立刻退出文章界面，点击个人中心，查询点赞记录，可能会出现几秒中看不到点赞记录的情况，但是无所谓，这种情况出现的可能性较少，就算有人故意点赞完毕立刻退出文章列表、打开个人中心、查看点赞记录，可能会看不到刚才点赞的结果，但这种情况我们业务上根本就不在意。

后续每隔10秒钟，使用XXL-JOB定时任务，以异步的方式将Rdis中的数据进行处理即可，处理步骤分3步：

- 先更新到MySQL的数据表中，记录用户的行为的数据；
- 将这3种用户行为数据发送到Kafka中，因为在文章热度计算流程中，会监听用户的点赞和阅读行为数据，而不喜欢行为数据需要被大数据系统采集；
- 更新Redis，我们使用hash类型，记录每一个用户对文章产生的行为数据。这样，当用户重新打开以前阅读过的文章，只需要查询Redis,就可以获取到用户对应的行为数据，比如查询用户是否之前针对这篇文章点赞、不喜欢。直接在redis返回，不需要查询MySQL
  。每次查询完毕后，重置用户在Rdis的行为数据的TTL过期时间，默认设置过期时间为30天。用户长期不使用App,就先把缓存中的数据自动清理掉，等下次查询没有时，重新从MySQL中缓存。
- 还有就是在用户发生点赞行为后，会同步更新一下用户的点赞列表缓存，使用的是redis list类型实现的.
- 将来用户查询对某一篇文章的用户行为数据，以及用户的阅读记录，用户的点赞记录，直接从Redis中缓存返回就可以了。

题外话：其实这里用Kafka实现也可以，如果面试官问你，为啥用Redis不用Kafka?

我们在设计项目的时候，针对异步解耦复杂业务流程、跨服务的通信，我们会优先考虑Kafka消息中间件进行实现。

而针对缓存、同一个服务内部的更新、数据非强一致性的场景，比如当前业务场景，用户发生点赞、阅读、不喜欢这些行为，处理这些行为的业务流程中，并不需要调用其他服务，并且在极端情况下，丢失一两条数据，也无关紧要，所以我们就选择Rdis+XXL-JOB定时任务进行实现了。

### 3.22 文章评论如何实现（技术亮点：MongoDB，同样适用：MongoDB在项目中的应用）

文章评论是单独设计了评论微服务进行实现。所有的评论数据包括评论回复，评论点赞，都是保存在了MongoDB当中。

选择MongoDB的主要原因是：

文章评论算的上有点并发需求，最好基于内存实现以及非结构化数据实现；

>题外话：mongodb的数据是存储在硬盘上的，只不过需要经常读取的数据会被加载到内存中，这样提高查询效率，所谓内存数据映射，所以mongodb本身很吃内存。

- 我们需要设计单独的评论管理模块，如果单纯使用Rdis这种简单的KEY VALUE方式实现，无法满足基础的CRUD操作，比如：评论基本信息查询、分页展示、时间排序、评论状态修改等等；

- 查询评论时，往往会同时查询前几条评论的回复数据和点赞数据，在设计表结构的时候必然是一张评论表，一张评论回复表，传统的关系型数据库实现的话，那必然是频繁的JON连接查询，在并发场景下，这样操作非常消耗性能。

所以我们综合考虑下，使用MongoDB进行设计实现，我们在MongoDB中创建了4张表：

- ap_comment评论表，
- ap_comment_like评论点赞表；
- ap_comment_repay评论回复表；
- ap_comment_repay_Iike评论回复点赞表；

在实现查询文章评论流程的时候，我会做一个分页查询，默认查询前10条评论，同时使用MongoDB的管道聚合查询的方式，将评论点赞、评论回复信息一并查询出来，返回给前端展示。

包括后续用户发生评论、评论回复、评论点赞，都是针对MongoDB中的数据进行更新的。

还有就是，在实现评论相关流程中，也有些业务逻辑需要考虑，下面说一下大概流程

![image-20231113101627367](https://gitee.com/tjlxy/img/raw/master/image-20231113101627367.png)

首先，无论是用户发布或回复评论、还是自媒体端作者发布或回复评论，都得遵守《互联网跟帖评论服务管理规定》，针对发布的任何言论进行审核，这里主腰是使用到项目内部的敏感词过滤以及阿里云第三方的内容审核服务再加人工审核实现的。

还有就是作者可以针对文章进行删除、查询以及发布评论，流程是请求先发送到自媒体微服务，校验作者信息，校验文章是否是当前作者上传的，如果是，再调用评论微服务。

包括用户删除自己发布过的评论，也是一样的，先请求到用户行为服务，判断用户状态是否正常，判断用户是否阅读过当前文章，如果用户状态正常，且阅读过这篇文章，再调用评论微服务进行删除或者评论回复。



### 3.23 用户评论时携带的IP是怎么查询的（用户归属地实现）

按照《网信办的网络言论净化相关规定》，是需要在发布文章、评论的时候，除了基本的用户名、内容主体、发布时间以外，还需要标注发布的归属地。

目的就是为了防治一些恶意造谣、娱乐水军、迷惑性的负面言论等等。

所以我们按照相关规定，除了内部实现评论审核以外，还需要显示用户的信息，这样有些别有用心的水军或者用户就会收敛一些。

相关新闻看这里：
https://baijiahao.baidu.com/s?id=1731977216920334108&wfr=spider&for=pc

实现方式很简单，我们提前购买了IP地址数据的省级离线库 https://user.ip138.com/ip/lib/ 

我们是在发布的时候，从请求头中获取到客户端P地址信息，然后查询数据库中的数据，得到发布的归属地地点，随着文章或评论一起保存到数据库表中就可以了。



### 3.24 实名认证怎么做

题外话，有些东西或者细节，头条的课程中并没有讲解，导致很多细节上大家出现纰漏，比如

- 评论也要进行审核
- 发布评论得带上归属地
- 机构资质审核、自媒体人实名认证
- 普通用户可以不实名认证，但是如果要解锁更多功能，比如：系统内部的付费项目（虽然目前没有)，必须经过实名认证。

任何机构入驻、自媒体人发布文章，必定需要进行资质认证，这一点是毋庸置疑的。

机构就是公司，需要认证它的营业执照、经营范围是否匹配，这里我从网上搜了一个天眼查的api:https://open.tianyancha.com/open/1116

自媒体人必定需要实名认证，这里我直接从阿里云市场找了一个第三方商家提供的服务，一个是人脸比对，一个是身份证实名认证：

- 人脸比对：
  https://market.aliyun.com/products/57000002/cmapi00046900.html?spm=5176.730005...

并且我也开通了一下，进行了人脸识别、实名认证的在线测试，对接起来还是非常容易的。

因为我们这里毕竟是讲话术，就不引入到代码里面进行测试的。其实功能能调试通的话，接入代码中实现，也是一回事，你可以按照下图的方式，直接在阿里云控制台进行测试

- 身份证实名认证
  https://market.aliyun.com/products/57000002/cmapi00035880.html?spm=5176.202...

而普通用户，可选的方式进行实名认证，业务上不强制要求普通用户进行实名认证。

leadnews user库下的用户实名认证表：

。。。

头条项目中，它没有支持机构入驻。但事实上，怎么可能会没有机构入驻？

比如传统的某些报社、各种媒体公司，我们必然希望和他们合作，因为他们才有能力持续输出优质内容，甚至我们公司都要花钱请他们入驻，或者提供广告分成等服务。

所以，我们就假设项目中还有一张机构资质信息表。

下面是话术：

我们项目是有做实名认证的，认证流程主要分两部分：

- 一个是机构认证，机构入驻时，会要求机构上传公司的营业执照、法人信息、公户信息等等。后台实现的时候，是直接调用天眼查的API,将营业执照照片发过去后，天眼查会返回验证结果、机构的各种信息、以及经营范围。

  然后我会判断公司状态是否正常，经营范围是否包含它提交资料时，指定类目的经营范围，例如：公司是一家传统养殖公司，很明显不符合媒体服务相关的业务。

  如果没问题，就修改机构资质表的认证状态为通过。

- 还有一个就是个人实名认证，主要针对个人入驻，或者机构下的发布作者个人进行实名认证。认证方式就是前端要求用户录一段人脸视频，并且上传手持身份证以及身份证正方面照片。我们后端会把视频保存下来，从视频中随机截取一张关键帧作为活体检测图片，进行校验。

  - 首先将身份证照片进行OCR识别，截取出来身份证照片中的人名与身份证号码，并且与表单中填写的姓名、身份证比对，判断用户在前端填写的数据是否与身份证照片一致，防止盗用他人身份证照片；

  - 然后调用实名认证服务，将身份证号码、姓名传给阿里云市场第三方商家提供的实名认证服务，返回认证结果；

  - 如果实名认证通过，就再次调用阿里云市场第三方商家提供的人脸识别服务，传入身份证、姓名、人脸关键帧照片，第三方商家会调用公安部接口，进行校验，并返回认证结果。

    我只需要根据认证结果，更新数据库中的数据就可以了。

### 3.25 自媒体图文数据统计怎么做

自媒体人登录到自媒体系统中，可以仕修文数据栏目中，查看最近的统计报表。

其实话说回来，自媒体人除了查看收藏、点赞、评论、转发、阅读这些基本的用户数据以外，我觉得吧，再加一个广告分成比较好点，不然自媒体人很闲吗，那么多广告分成的项目人家做，就在你这个项目中做？

咱可以说广告分成计算和分成模块不是我们做的，但是不影响我们去给面试官吹啊。

下面是项目话术：

自媒体账号可以登录到自媒体服务平台，在数据模块中，查询各项数据。

这些数据主要包含：

- 以日、周、月季度为单位，统计的各项数据，如：总的阅读量、总收藏、总评论、总转发、总收益等数据；
- 当前媒体机构或个人发布的文章数据，如：单篇文章的阅读、单篇文章收藏、单篇文章的转发数量以及单篇文章的累计收益；
- 以图表的形式，展示当前账号的各项运营指标，如：
  - 折线图标注粉丝增长、阅读、点赞、收益等数据的变化情况；
  - 饼图形式展示账号收益，如：创作激励、广告分成等项目的占比；
  - 柱状图展示环比上个月的各项指标的变化；

这些要查询的数据种类有很多，可以来自于Redis缓存、数据库表以及MongoDB中的数据，所以查询会比较慢一点，但是可以接受。

我走之前，我已经把这个需求进行了重构，并且给接手的同事讲明白了思路以及实现的方式。

就是为了防止以后随着自媒体用户增多以及当前接口的频繁查询，给DB带来压力，而且当前实现方式是从Redis、MongoDB、MySQL中进行查询，实现方式太乱，性能也不高，与其他服务的耦合度太高，并且不利于后期维护。

所以在下一个版本中，会改成定时更新，就是使用定时任务，每天凌晨3点，更新每一个机构或者媒体人的账号各项数据的统计结果，并且存储到MySQL中，且缓存到Rdis中一份第二天早上8点，再开放查询功能，确保每天自媒体机构或个人，上班后，就可以看到前一天
的各项维度的数据。



### 3.26 头条项目功能大盘点

![image-20231113114033354](https://gitee.com/tjlxy/img/raw/master/image-20231113114033354.png)

微服务：

- 用户使用平台（前端用户能够直接访问的不同系统）
  - 用户端：面向普通用户的，App、小程序、网页端
  - 用户自媒体平台：面向自媒体机构/自媒体人的，App、网页端
  - 管理平台：面向平台管理员、审核员的，网页端
- 业务模块：
  - 用户移动端：内容推荐模块、**内容搜索**、**频道管理**、**内容展示**、内容社交、**登录注册**、**个人首页**、**实名认证**、**个人中心**、系统设置；
  - 用户自媒体平台：**内容发布**、**内容管理**、**粉丝管理**、**评论管理**、权限管理、**个人看板**、**粉丝画像**、私信管理、**素材管理**、系统设置；
  - 管理平台：用户管理、内容管理、数据统计、标签管理、公告管理、系统管理
  - 支撑系统：爬虫系统、广告系统、**推荐系统**、**计算系统**、知识系统
- 拆分的微服务及其模块（我是按照课程讲过的业务进行判断，以及一些模块，虽然课程没做过，但较为容易实现的模块盘点出来一些业务功能模块，方便后续写简历用，所以下面并非列举了所有的业务模块)：
  - 用户个人中心服务：用户登录注册、个人信息查询修改、点赞、浏览历史查看等；
  - 文章服务：文章发布、文章收藏、文章信息、热点文章计算、实名认证
  - 自媒体服务：自媒体文章CRUD、文章审核、素材管理、自媒体数据看板（各项数据&粉丝画像等等)、实名认证
  - 用户行为服务：点赞、阅读、不喜欢流程
  - 用户检索服务：文章内容检索
  - 评论服务：评论发布、评论回复、评论点赞
  - 平台管理服务
  - 任务调度服务
  - 图片管理服务
- 技术栈
  - SpringCloud Alibaba系列微服务组件：Nacos、Sentinel、OpenFeign、Ribbon、Gateway、SkyWalking、SpringCloud Admin;
  - 业务服务：SpringBoot、MybatisPlus、XXL-JOB
  - 数据层：MySQL、Redis、Elasticsearch、MongoDB
  - 中间件：Kafka、MinIO、ELK日志框架
  - 其他工具：Jenkins、Docker、GitLab
  - 开发环境：JDK8、MySQL8、Maven:3、Redis5
  - 前端：Vue、Echarts、uniapp、ELementUl

核心流程：

- 登录：3
- 文章发布与审核：10、11
- 文章热度计算：17

## 4. 简历编写

### 实习生/应届生

实习生指的是大三结束后的同学，寻找实习岗位。实习生同学简历中注意如下事项：

- 真诚：突出自己的专业技能、主修课程、在校获奖&荣誉情况，不要过度吹虚技术栈；
- 项目：重点准备一个项目即可，不需要准备太多，你直接写明这是在校设计的、参加青创大赛的、学院工作室的项目等等，如果你能力强，学的不错你可以强调一下这是你带领小组做的；如果你学的一般，你直接写这是你跟着网上的头条课程做的。

简历上的个人信息、在校经验就省略了，这里直接提供一份项目编写例子：

---

TY虎哈河职业技术学院校园文明平台（工作室项目）			2023.02-2023.06

Java实习生

项目介绍

本项目为响应TY市文明办的精神文明创城动法，发起的文明校园创建活动。本项目由学院主任牵头组织学生工作室，完成文明校园线上文明创建平台。致力于发掘更多的文明故事、宣扬文明活动、营造文明校园氛围、带动全校师生共创文明校园。

项目分为文明管理平台、文明之窗、文明活动平台三大业务板块。

核心业务模块：内容管理、用户管理、媒体平台服务、内容管理、文明校园公告、素材管理、热点推荐模块等；

技术架构：SpringBoot、MybatisPlus、Kafka、Redis、XXL-JOB、MongoDB、Elasticsearch、MySQL、Vue、ELementUl、Echarts

项目经历

- 作为小组核心开发，负责与院办老师讨论业务需求，校园实地调研各岗位工作人员、学院师生，收集大家的热心建议，设计文明校园的核心业务；
- 主要负责用户管理模块、内容管理、热点推荐、媒体平台服务模块的核心业务流程设计与开发；
- 围绕业务需求，设计出合理的ER图，编写最终项目交付使用手册；

技术亮点：

- 使用Elasticsearch实现内容资源检索功能，并合理的设计索引Mapping规则，引入IK中文分词器，
- 整合MongoDB，以非结构化数据存储用户评论、评论点赞、评论回复等数据；
- 使用Redis设计限流组件，针对用户行为，如：频繁点赞、评论、发送验证码登行为进行时间窗口限流；
- 使用XXL-JOB设计定时任务场景，例如：定时文明文章发布、定时同步Redis数据到MySQL、定时计算热点文章等等；
- 使用Kafka解耦同步业务场景，如：文章审核、用户行为采集等，并借助Kafka Stream流式计算，设计了文章热点实时计算功能；

---

实习生同学，可以根据实际掌握情况，再自行调整，技术亮点写五六条就够用了，切记，技术亮点一定要结合业务场景来讲。不然你单纯说：使用Rdis作为缓存组件，谁不知道Redis可以作缓存呀，对不对？是不是感觉脱离需求谈技术，就像没说一样？

> 其实像这种校园项目，我不太建议用微服务，完全没必要，你也不可能准备太多东西，能够把自己负责的业务流程、实现细节讲的特别好就行了。而且我不认为大三的同学，对微服务技术有特别深入的理解。我个人是极度讨厌、憎恶疯狂内卷的UP主，大三毕业的同学我认为在他们完成自己主修的课程以外，java方面能熟练掌握到Springboot完成CRUD,再会个redis和mq就非常棒了。
>
> 有些UP主啊，自己当年入行的时候啥也不是，混到一把年纪了，再找工作没人要，积累点项目经验，就在小白面前炫耀自己的技能，是谁我就不点名了嗷，多了去了！
>
> 让实习生对标不可能达到的水平，纯粹居心不良！技术上的东西，有的时候真的不是说靠内卷能够速成的，真的是需要工作经验和时间进行沉淀的。单纯的理论上掌握了毫无意义。
>
> 所以我就不按照微服务技术栈写了，我觉得强行让大三同学写一个校园项目还整微服务，有点离谱！
> (不认可我观点的喷子给我闭嘴！)

### 3年经验

瑞丽美妆APP		2022.06-2023.07

Java开发

“瑞丽美妆”集免费试用活动、化妆品库、美容微杂志于一体垂直类目ToC项目。公司依靠多年沉淀的美妆行业资源以及合作的美妆达人，构建一站式美妆分享、社交平台。

项目核心业务板块：

- 美妆达人业务：提供创作激励、推广拉新结算；
- 微杂志：达人分享、达人美妆经验分享，吸引粉丝互动，做到30天新用户留存率达到30%
- 美妆库：垂直于美妆类目电商系统，致力于提供美容美体预约、美容仪器、护肤产品销售，目前该业务板块处于规划状态；
- 营销系统：致力于新用户留存、粉丝互动、日活UV等各项指标的提升，提高用户粘性;

技术架构：

- 基于业务拆分多个微服务子系统：用户个人中心服务、达人分享服务、达人服务、用户行为服务、检索服务、评论服务、平台管理服务、任务调度服务、图片管理服务、营销系统、结算系统；
- 技术选型：SpringCloud Alibaba、SpringBoot、.MybatisPlus、Kafka、Redis、XXL-JOB、MongoDB、Elasticsearch、MySQL、Vue、ELementUl、Echarts

岗位职责：

- 需求分析：参与产品研讨，围绕产品提出的初版需求进行二次分析，确立实现方式，并与组长讨论技术上的可行性方案；
- 文档交付：围绕我负责的部分项目模块，编写接口详细设计文档，完善需求文档部分内容；
- 代码编写：主要负责用户个人中心服务、达人分享服务、达人服务、用户行为服务、检索服务、评论服务中的部分核心业务流程开发；
- 其他工作：解决测试、生产反馈的各种问题；

技术栈介绍：

- 使用Elasticsearch实现内容资源检索功能，并合理的设计索引Mapping规则，引入IK中文分词器；
- 整合MongoDB,以非结构化数据存储用户评论、评论点赞、评论回复等数据；
- 使用Rdis设计限流组件，针对用户行为，如：频繁点赞、评论、发送验证码登行为进行时间窗口限流；
- 使用XXL-JOB设计定时任务场景，例如：定时文明文章发布、定时同步Rdis数据到MySQL、定时计算热点文章等等；
- 使用Kafka解耦非强一致性场景下服务之间的调用，如：文章审核、用户行为采集等，并借助Kafka Stream流式计算，设计了文章热点实时计算功能；
- 搭建ELK日志框架，实现微服务内部日志一站式监控；
- 对接第三方平台，完成：健康内容审核、实名认证、企业资质认证、短信服务等功能；

### 5年经验

瑞丽美妆APP		2022.06-2023.07

高级开发/组长

“瑞丽美妆”集免费试用活动、化妆品库、美容微杂志于一体垂直类目ToC项目。公司依靠多年沉淀的美妆行业资源以及合作的美妆达人，构建一站式美妆分享、社交平台。

项目核心业务板块：

- 美妆达人业务：提供创作激励、推广拉新结算；
- 微杂志：达人分享、达人美妆经验分享，吸引粉丝互动，做到30天新用户留存率达到30%
- 美妆库：垂直于美妆类目电商系统，致力于提供美容美体预约、美容仪器、护肤产品销售，目前该业务板块处于规划状态；
- 营销系统：致力于新用户留存、粉丝互动、日活UV等各项指标的提升，提高用户粘性;

技术架构：

- 基于业务拆分多个微服务子系统：用户个人中心服务、达人分享服务、达人服务、用户行为服务、检索服务、评论服务、平台管理服务、任务调度服务、图片管理服务、营销系统、结算系统；
- 技术选型：SpringCloud Alibaba、SpringBoot、.MybatisPlus、Kafka、Redis、XXL-JOB、MongoDB、Elasticsearch、MySQL、Vue、ELementUl、Echarts

岗位职责：

- 团队管理：合理的安排任务进度，有计划的控制加班、调休等管理工作，确保项目按期完成，组织需求评审，参与产品研讨，协调开发、测试、运维等相关资源；
- 技术架构：围绕实际需求，拆分业务微服务，设计数据模型；合理的选择技术架构，解决项目中遇到的各种问题；
- 文档交付：参与需求文档的完善、负责接口文档的设计与编写；
- 代码编写：主导整个项目的研发，针对不同业务场景，合理的设计解决方案，负责部分核心业务、复杂业务流程的编码实现；
- 其他工作：解决测试、生产反馈的各种问题，监控线上日志，持续对项目进行升级和优化；
- 指导初中级开发，完成项目的编码工作；

技术栈介绍：

- 使用Elasticsearch实现内容资源检索功能，并合理的设计索引Mapping规则，引入IK中文分词器；
- 整合MongoDB,以非结构化数据存储用户评论、评论点赞、评论回复等数据；
- 使用Rdis设计限流组件，针对用户行为，如：频繁点赞、评论、发送验证码登行为进行时间窗口限流；
- 使用XXL-JOB设计定时任务场景，例如：定时文明文章发布、定时同步Rdis数据到MySQL、定时计算热点文章等等；
- 使用Kafka解耦非强一致性场景下服务之间的调用，如：文章审核、用户行为采集等，并借助Kafka Stream流式计算，设计了文章热点实时计算功能；
- 搭建ELK日志框架，实现微服务内部日志一站式监控；
- 对接第三方平台，完成：健康内容审核、实名认证、企业资质认证、短信服务等功能；

### 举例

> 主要流程
>
> 1、登录
>
> 2、文章发布
>
> 3、文章审核
>
> 4、文章上下架
>
> 5、查看文章详情
>
> 6、点赞、关注
>
> - 使用Elasticsearch实现内容资源检索功能，并合理的设计索引Mapping规则，引入IK中文分词器，
> - 整合MongoDB，以非结构化数据存储用户评论、评论点赞、评论回复等数据；
> - 使用Redis设计限流组件，针对用户行为，如：频繁点赞、评论、发送验证码登行为进行时间窗口限流；
> - 使用XXL-JOB设计定时任务场景，例如：定时文明文章发布、定时同步Redis数据到MySQL、定时计算热点文章等等；
> - 使用Kafka解耦同步业务场景，如：文章审核、用户行为采集等，并借助Kafka Stream流式计算，设计了文章热点实时计算功能；
>
> 用户可以在移动端浏览文章、搜索文章、按标签选择相关文章，并进行点赞和评论。创作驿站提供了发布文章、管理内容和素材图片等功能，同时还可以对用户数据进行统计分析。管理系统用于用户管理、频道标签管理、内容审核、上下架和敏感词管理。
>
> ---
>
> 2022.09 – 2022.12 知识小站 
>
> **项目内容：** 
>
> 知识小站是一个面向广大用户的在线学习分享平台，旨在提供高质量的知识资源和个性化学习服务。用户可以通过知识小站轻松获取各个领域的学习资料、参与互动讨论，并享受个性化的学习推荐。 
>
> **业务模块：** 
>
> 用户移动端：提供文章列表浏览、文章搜索和个人中心功能。 
>
> 创作驿站：支持用户发布文章、内容管理、素材管理和数据可视化。 
>
> 后台管理：包括用户管理、频道管理、内容审核、内容上下架和敏感词管理等功能。 
>
> **核心技术：**SpringBoot、MybatisPlus、MySQL、Kafka、Redis、XXL-JOB、Elasticsearch。
>
> **项目要点：** 
>
> 1、 使用 SpringBoot+MybatisPlus 进行快速开发和 ORM 映射，提高整体的开发效率和稳定性。 
>
> 2、 采用自定义的接口返回格式，统一返回结果，并遵循 Restful 接口规范，提高代码的规范性。 
>
> 3、 使用 Redis 延迟队列解决方案实现文章定时发布功能，提供系统的稳定性和可靠性。 
>
> 4、 使用 Kafka 实现文章上下架解耦，并借助 Kafka Stream 流式计算，设计了文章热点实时计算功能。 
>
> 5、 使用 ElasticSearch 完成文章搜索功能，引入 IK 中文分词器，提供高效的搜索体验。
>
> 6、 采用分布式调度任务 XXL-Job 完成定时任务的调度和管理，完成定时计算热点文章。 
>
> 7、 利用计算框架 Spark 对用户数据进行分析统计，例如每个频道下的文章数量占比情况、文章评论数量、点赞数量占比情况，并结合 Echarts 进行数据可视化，以提供直观的数据展示和分析。





## 5. 附录（关键代码+流程图）

### 文章搜索

#### 1）创建索引库

可以根据页面展示信息创建ElasticSearch索引库，标题和内容需要添加分词

PUT请求添加映射: http://192.168.200.130:9200/app_info_article

```json
{
    "mappings": {
        "properties": {
            "id": {
                "type": "long"
            },
            "publishTime": {
                "type": "date"
            },
            "layout": {
                "type": "integer"
            },
            "images": {
                "type": "keyword",
                "index": false
            },
            "staticUrl": {
                "type": "keyword",
                "index": false
            },
            "authorId": {
                "type": "long"
            },
            "authorName": {
                "type": "text"
            },
            "title": {
                "type": "text",
                "analyzer": "ik_smart"
            },
            "content": {
                "type": "text",
                "analyzer": "ik_smart"
            }
        }
    }
}

```

#### 2）批量导入ES索引库

查询所有的文章信息，在项目上线之前，进行一次批量导入到es索引库中（关键代码查看附录-文章搜索）

```java
/**
 * 注意：数据量的导入，如果数据量过大，需要分页导入
 * @throws Exception
 */
@Test
public void init() throws Exception {
    //1.查询所有符合条件的文章数据
    List<SearchArticleVo> searchArticleVos = apArticleMapper.loadArticleList();
    //2.批量导入到es索引库
    BulkRequest bulkRequest = new BulkRequest("app_info_article");
    for (SearchArticleVo searchArticleVo : searchArticleVos) {
        IndexRequest indexRequest = new IndexRequest()
            .id(searchArticleVo.getId().toString())
            .source(JSON.toJSONString(searchArticleVo), XContentType.JSON);
        //批量添加数据
        bulkRequest.add(indexRequest);
    }
    BulkResponse response = restHighLevelClient.bulk(bulkRequest, RequestOptions.DEFAULT);  
    System.out.println("插入结果："+response.status());
}
```

#### 3）新增文章异步创建索引

文章微服务发送消息

```java
@Autowired
private KafkaTemplate<String,String> kafkaTemplate;

/**
 * 送消息，创建索引
 * @param apArticle
 * @param content
 * @param path
 */
private void createArticleESIndex(ApArticle apArticle, String content, String path) {
    SearchArticleVo vo = new SearchArticleVo();
    BeanUtils.copyProperties(apArticle,vo);
    vo.setContent(content);
    vo.setStaticUrl(path);

    kafkaTemplate.send(ArticleConstants.ARTICLE_ES_SYNC_TOPIC, JSON.toJSONString(vo));
}
```

搜索微服务进行接受消息

```java
    @Autowired
    private RestHighLevelClient restHighLevelClient;

    @KafkaListener(topics = ArticleConstants.ARTICLE_ES_SYNC_TOPIC)
    public void onMessage(String message){
        if(StringUtils.isNotBlank(message)){

            log.info("SyncArticleListener,message={}",message);

            SearchArticleVo searchArticleVo = JSON.parseObject(message, SearchArticleVo.class);
            IndexRequest indexRequest = new IndexRequest("app_info_article");
            indexRequest.id(searchArticleVo.getId().toString());
            indexRequest.source(message, XContentType.JSON);
            try {
                restHighLevelClient.index(indexRequest, RequestOptions.DEFAULT);
            } catch (IOException e) {
                e.printStackTrace();
                log.error("sync es error={}",e);
            }
        }

    }
```

#### 4）文章搜索

```java
    @Override
    public ResponseResult search(UserSearchDto dto) throws IOException {
        //1.检查参数
        if(dto == null || StringUtils.isBlank(dto.getSearchWords())){
            return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID);
        }
        ApUser user = AppThreadLocalUtil.getUser();
        //异步调用 保存搜索记录
        if(user != null && dto.getFromIndex() == 0){
            apUserSearchService.insert(dto.getSearchWords(), user.getId());
        }
        //2.设置查询条件
        SearchRequest searchRequest = new SearchRequest("app_info_article");
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        //布尔查询【构建查询条件和过滤等，放多个查询条件->1)、2)】
        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
        //1)关键字的分词之后查询 【queryStringQuery-分词之后查询、field-指定查询域，这里是标题和内容、defaultOperator-指定查询条件，或的关系】
        QueryStringQueryBuilder queryStringQueryBuilder = QueryBuilders.queryStringQuery(dto.getSearchWords()).field("title").field("content").defaultOperator(Operator.OR);
        boolQueryBuilder.must(queryStringQueryBuilder);
        //2)查询小于mindate的数据
        RangeQueryBuilder rangeQueryBuilder = QueryBuilders.rangeQuery("publishTime").lt(dto.getMinBehotTime().getTime());
        boolQueryBuilder.filter(rangeQueryBuilder);
        //分页查询
        searchSourceBuilder.from(0);
        searchSourceBuilder.size(dto.getPageSize());
        //按照发布时间倒序查询
        searchSourceBuilder.sort("publishTime", SortOrder.DESC);
        //设置高亮  title
        HighlightBuilder highlightBuilder = new HighlightBuilder();
        highlightBuilder.field("title");//【设置域】
        highlightBuilder.preTags("<font style='color: red; font-size: inherit;'>");//【前缀】
        highlightBuilder.postTags("</font>");//【后缀】
        searchSourceBuilder.highlighter(highlightBuilder);
		//进行封装
        searchSourceBuilder.query(boolQueryBuilder);
        searchRequest.source(searchSourceBuilder);
        SearchResponse searchResponse = restHighLevelClient.search(searchRequest, RequestOptions.DEFAULT);
        //3.结果封装返回
        List<Map> list = new ArrayList<>();
        SearchHit[] hits = searchResponse.getHits().getHits();//【获取所有数据，高亮+不高亮】
        for (SearchHit hit : hits) {
            String json = hit.getSourceAsString();
            Map map = JSON.parseObject(json, Map.class);
            //处理高亮
            if(hit.getHighlightFields() != null && hit.getHighlightFields().size() > 0){
                Text[] titles = hit.getHighlightFields().get("title").getFragments();
                String title = StringUtils.join(titles);
                //高亮标题
                map.put("h_title",title);
            }else {
                //原始标题
                map.put("h_title",map.get("title"));
            }
            list.add(map);
        }
        return ResponseResult.okResult(list);
    }
```

#### 5）历史记录

1）保存历史记录

保存历史记录，保存10条，多余的则删除最久的历史记录，流程图如下

![image-20231112160654053](https://gitee.com/tjlxy/img/raw/master/image-20231112160654053.png)

保存历史记录，保存10条，多余的则删除最久的历史记录，关键代码如下：

```java
    @Autowired
    private MongoTemplate mongoTemplate;
    /**
     * 保存用户搜索历史记录
     * @param keyword
     * @param userId
     */
    @Override
    @Async
    public void insert(String keyword, Integer userId) {
        //1.查询当前用户的搜索关键词
        Query query = Query.query(Criteria.where("userId").is(userId).and("keyword").is(keyword));
        ApUserSearch apUserSearch = mongoTemplate.findOne(query, ApUserSearch.class);
        //2.存在 更新创建时间
        if(apUserSearch != null){
            apUserSearch.setCreatedTime(new Date());
            mongoTemplate.save(apUserSearch);
            return;
        }
        //3.不存在，判断当前历史记录总数量是否超过10
        apUserSearch = new ApUserSearch();
        apUserSearch.setUserId(userId);
        apUserSearch.setKeyword(keyword);
        apUserSearch.setCreatedTime(new Date());

        Query query1 = Query.query(Criteria.where("userId").is(userId));
        query1.with(Sort.by(Sort.Direction.DESC,"createdTime"));
        List<ApUserSearch> apUserSearchList = mongoTemplate.find(query1, ApUserSearch.class);

        if(apUserSearchList == null || apUserSearchList.size() < 10){
            mongoTemplate.save(apUserSearch);
        }else {
            ApUserSearch lastUserSearch = apUserSearchList.get(apUserSearchList.size() - 1);
            mongoTemplate.findAndReplace(Query.query(Criteria.where("id").is(lastUserSearch.getId())),apUserSearch);
        }

    }
```

2）加载10条搜索历史记录，按照搜索关键词的时间倒序。关键代码如下：

```java
  	/**
     * 查询搜索历史
     *
     * @return
     */
    @Override
    public ResponseResult findUserSearch() {
        //获取当前用户
        ApUser user = AppThreadLocalUtil.getUser();
        if(user == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.NEED_LOGIN);
        }
        //根据用户查询数据，按照时间倒序
        List<ApUserSearch> apUserSearches = mongoTemplate.find(Query.query(Criteria.where("userId").is(user.getId())).with(Sort.by(Sort.Direction.DESC, "createdTime")), ApUserSearch.class);
        return ResponseResult.okResult(apUserSearches);
    }
```

3）删除搜索历史记录。关键代码如下：

```java
    /**
     * 删除历史记录
     *
     * @param dto
     * @return
     */
    @Override
    public ResponseResult delUserSearch(HistorySearchDto dto) {
        //1.检查参数
        if(dto.getId() == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID);
        }

        //2.判断是否登录
        ApUser user = AppThreadLocalUtil.getUser();
        if(user == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.NEED_LOGIN);
        }

        //3.删除
        mongoTemplate.remove(Query.query(Criteria.where("userId").is(user.getId()).and("id").is(dto.getId())),ApUserSearch.class);
        return ResponseResult.okResult(AppHttpCodeEnum.SUCCESS);
    }
```

#### 6）关键字联想词

通过模糊查询实现联想词

```java
    @Autowired
    private MongoTemplate mongoTemplate;

    /**
     * 搜索联想词
     * @param dto
     * @return
     */
    @Override
    public ResponseResult search(UserSearchDto dto) {
        //1.检查参数
        if(StringUtils.isBlank(dto.getSearchWords())){
            return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID);
        }

        //2.分页检查
        if(dto.getPageSize() > 20){
            dto.setPageSize(20);
        }

        //3.执行查询，模糊查询
        Query query = Query.query(Criteria.where("associateWords").regex(".*?\\" + dto.getSearchWords() + ".*"));
        query.limit(dto.getPageSize());
        List<ApAssociateWords> apAssociateWords = mongoTemplate.find(query, ApAssociateWords.class);
        return ResponseResult.okResult(apAssociateWords);
    }
```



### 文章发布

#### 1）文章发布

流程图

该功能为保存、修改（是否有id）、保存草稿的共有方法

![image-20231117232407206](https://gitee.com/tjlxy/img/raw/master/image-20231117232407206.png)

关键代码

```java
@Service
@Slf4j
@Transactional
public class WmNewsServiceImpl  extends ServiceImpl<WmNewsMapper, WmNews> implements WmNewsService {


    @Autowired
    private WmNewsAutoScanService wmNewsAutoScanService;

    @Autowired
    private WmNewsTaskService wmNewsTaskService;

    /**
     * 发布修改文章或保存为草稿
     * @param dto
     * @return
     */
    @Override
    public ResponseResult submitNews(WmNewsDto dto) {

        //0.条件判断
        if(dto == null || dto.getContent() == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID);
        }

        //1.保存或修改文章
        WmNews wmNews = new WmNews();
        //属性拷贝 属性名词和类型相同才能拷贝
        BeanUtils.copyProperties(dto,wmNews);
        //封面图片  list---> string
        if(dto.getImages() != null && dto.getImages().size() > 0){
            //[1dddfsd.jpg,sdlfjldk.jpg]-->   1dddfsd.jpg,sdlfjldk.jpg
            String imageStr = StringUtils.join(dto.getImages(), ",");
            wmNews.setImages(imageStr);
        }
        //如果当前封面类型为自动 -1
        if(dto.getType().equals(WemediaConstants.WM_NEWS_TYPE_AUTO)){
            wmNews.setType(null);
        }

        saveOrUpdateWmNews(wmNews);

        //2.判断是否为草稿  如果为草稿结束当前方法
        if(dto.getStatus().equals(WmNews.Status.NORMAL.getCode())){
            return ResponseResult.okResult(AppHttpCodeEnum.SUCCESS);
        }

        //3.不是草稿，保存文章内容图片与素材的关系
        //获取到文章内容中的图片信息
        List<String> materials =  ectractUrlInfo(dto.getContent());
        saveRelativeInfoForContent(materials,wmNews.getId());

        //4.不是草稿，保存文章封面图片与素材的关系，如果当前布局是自动，需要匹配封面图片
        saveRelativeInfoForCover(dto,wmNews,materials);

        //审核文章
//        wmNewsAutoScanService.autoScanWmNews(wmNews.getId());

        wmNewsTaskService.addNewsToTask(wmNews.getId(),wmNews.getPublishTime());

        return ResponseResult.okResult(AppHttpCodeEnum.SUCCESS);

    }

    /**
     * 第一个功能：如果当前封面类型为自动，则设置封面类型的数据
     * 匹配规则：
     * 1，如果内容图片大于等于1，小于3  单图  type 1
     * 2，如果内容图片大于等于3  多图  type 3
     * 3，如果内容没有图片，无图  type 0
     *
     * 第二个功能：保存封面图片与素材的关系
     * @param dto
     * @param wmNews
     * @param materials
     */
    private void saveRelativeInfoForCover(WmNewsDto dto, WmNews wmNews, List<String> materials) {

        List<String> images = dto.getImages();

        //如果当前封面类型为自动，则设置封面类型的数据
        if(dto.getType().equals(WemediaConstants.WM_NEWS_TYPE_AUTO)){
            //多图
            if(materials.size() >= 3){
                wmNews.setType(WemediaConstants.WM_NEWS_MANY_IMAGE);
                images = materials.stream().limit(3).collect(Collectors.toList());
            }else if(materials.size() >= 1 && materials.size() < 3){
                //单图
                wmNews.setType(WemediaConstants.WM_NEWS_SINGLE_IMAGE);
                images = materials.stream().limit(1).collect(Collectors.toList());
            }else {
                //无图
                wmNews.setType(WemediaConstants.WM_NEWS_NONE_IMAGE);
            }

            //修改文章
            if(images != null && images.size() > 0){
                wmNews.setImages(StringUtils.join(images,","));
            }
            updateById(wmNews);
        }
        if(images != null && images.size() > 0){
            saveRelativeInfo(images,wmNews.getId(),WemediaConstants.WM_COVER_REFERENCE);
        }

    }


    /**
     * 处理文章内容图片与素材的关系
     * @param materials
     * @param newsId
     */
    private void saveRelativeInfoForContent(List<String> materials, Integer newsId) {
        saveRelativeInfo(materials,newsId,WemediaConstants.WM_CONTENT_REFERENCE);
    }

    @Autowired
    private WmMaterialMapper wmMaterialMapper;

    /**
     * 保存文章图片与素材的关系到数据库中
     * @param materials
     * @param newsId
     * @param type
     */
    private void saveRelativeInfo(List<String> materials, Integer newsId, Short type) {
        if(materials!=null && !materials.isEmpty()){
            //通过图片的url查询素材的id
            List<WmMaterial> dbMaterials = wmMaterialMapper.selectList(Wrappers.<WmMaterial>lambdaQuery().in(WmMaterial::getUrl, materials));

            //判断素材是否有效
            if(dbMaterials==null || dbMaterials.size() == 0){
                //手动抛出异常   第一个功能：能够提示调用者素材失效了，第二个功能，进行数据的回滚
                throw new CustomException(AppHttpCodeEnum.MATERIASL_REFERENCE_FAIL);
            }

            if(materials.size() != dbMaterials.size()){
                throw new CustomException(AppHttpCodeEnum.MATERIASL_REFERENCE_FAIL);
            }

            List<Integer> idList = dbMaterials.stream().map(WmMaterial::getId).collect(Collectors.toList());

            //批量保存
            wmNewsMaterialMapper.saveRelations(idList,newsId,type);
        }

    }


    /**
     * 提取文章内容中的图片信息
     * @param content
     * @return
     */
    private List<String> ectractUrlInfo(String content) {
        List<String> materials = new ArrayList<>();

        List<Map> maps = JSON.parseArray(content, Map.class);
        for (Map map : maps) {
            if(map.get("type").equals("image")){
                String imgUrl = (String) map.get("value");
                materials.add(imgUrl);
            }
        }

        return materials;
    }

    @Autowired
    private WmNewsMaterialMapper wmNewsMaterialMapper;

    /**
     * 保存或修改文章
     * @param wmNews
     */
    private void saveOrUpdateWmNews(WmNews wmNews) {
        //补全属性
        wmNews.setUserId(WmThreadLocalUtil.getUser().getId());
        wmNews.setCreatedTime(new Date());
        wmNews.setSubmitedTime(new Date());
        wmNews.setEnable((short)1);//默认上架

        if(wmNews.getId() == null){
            //保存
            save(wmNews);
        }else {
            //修改
            //删除文章图片与素材的关系
            wmNewsMaterialMapper.delete(Wrappers.<WmNewsMaterial>lambdaQuery().eq(WmNewsMaterial::getNewsId,wmNews.getId()));
            updateById(wmNews);
        }

    }

    /**
     * 查询文章详情
     * @param id
     * @return
     */
    @Override
    public ResponseResult findOne(Integer id) {
        //1.检查参数
        if(id == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID);
        }
        //2.查询文章
        WmNews wmNews = getById(id);
        if(wmNews == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.DATA_NOT_EXIST);
        }
        //3.结果返回
        return ResponseResult.okResult(wmNews);
    }

    @Autowired
    private KafkaTemplate kafkaTemplate;

    /**
     * 文章的上下架
     * @param dto
     * @return
     */
    @Override
    public ResponseResult downOrUp(WmNewsDto dto) {
        //1.检查参数
        if(dto.getId() == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID);
        }

        //2.查询文章
        WmNews wmNews = getById(dto.getId());
        if(wmNews == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.DATA_NOT_EXIST,"文章不存在");
        }

        //3.判断文章是否已发布
        if(!wmNews.getStatus().equals(WmNews.Status.PUBLISHED.getCode())){
            return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID,"当前文章不是发布状态，不能上下架");
        }

        //4.修改文章enable
        if(dto.getEnable() != null && dto.getEnable() > -1 && dto.getEnable() < 2){
            update(Wrappers.<WmNews>lambdaUpdate().set(WmNews::getEnable,dto.getEnable())
                    .eq(WmNews::getId,wmNews.getId()));

            //发送消息，通知article端修改文章配置
            if(wmNews.getArticleId() != null){
                Map<String,Object> map = new HashMap<>();
                map.put("articleId",wmNews.getArticleId());
                map.put("enable",dto.getEnable());
                kafkaTemplate.send(WmNewsMessageConstants.WM_NEWS_UP_OR_DOWN_TOPIC,JSON.toJSONString(map));
            }
        }
        return ResponseResult.okResult(AppHttpCodeEnum.SUCCESS);
    }

    @Autowired
    private WmNewsMapper wmNewsMapper;

    /**
     * 查询文章列表
     * @param dto
     * @return
     */
    @Override
    public ResponseResult findList(NewsAuthDto dto) {
        //1.参数检查
        dto.checkParam();

        //记录当前页
        int currentPage = dto.getPage();

        //2.分页查询+count查询
        dto.setPage((dto.getPage()-1)*dto.getSize());
        List<WmNewsVo> wmNewsVoList = wmNewsMapper.findListAndPage(dto);
        int count = wmNewsMapper.findListCount(dto);

        //3.结果返回
        ResponseResult responseResult = new PageResponseResult(currentPage,dto.getSize(),count);
        responseResult.setData(wmNewsVoList);
        return responseResult;
    }

    @Autowired
    private WmUserMapper wmUserMapper;

    /**
     * 查询文章详情
     * @param id
     * @return
     */
    @Override
    public ResponseResult findWmNewsVo(Integer id) {
        //1.检查参数
        if(id == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID);
        }
        //2.查询文章信息
        WmNews wmNews = getById(id);
        if(wmNews == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.DATA_NOT_EXIST);
        }

        //3.查询用户信息
        WmUser wmUser = wmUserMapper.selectById(wmNews.getUserId());

        //4.封装vo返回
        WmNewsVo vo = new WmNewsVo();
        //属性拷贝
        BeanUtils.copyProperties(wmNews,vo);
        if(wmUser != null){
            vo.setAuthorName(wmUser.getName());
        }

        ResponseResult responseResult = new ResponseResult().ok(vo);

        return responseResult;
    }

    /**
     * 文章审核，修改状态
     * @param status 2  审核失败  4 审核成功
     * @param dto
     * @return
     */
    @Override
    public ResponseResult updateStatus(Short status, NewsAuthDto dto) {
        //1.检查参数
        if(dto == null || dto.getId() == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID);
        }
        //2.查询文章信息
        WmNews wmNews = getById(dto.getId());
        if(wmNews == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.DATA_NOT_EXIST);
        }

        //3.修改文章的状态
        wmNews.setStatus(status);
        if(StringUtils.isNotBlank(dto.getMsg())){
            wmNews.setReason(dto.getMsg());
        }
        updateById(wmNews);

        //审核成功，则需要创建app端文章数据，并修改自媒体文章
        if(status.equals(WemediaConstants.WM_NEWS_AUTH_PASS)){
            //创建app端文章数据
            ResponseResult responseResult = wmNewsAutoScanService.saveAppArticle(wmNews);
            if(responseResult.getCode().equals(200)){
                wmNews.setArticleId((Long) responseResult.getData());
                wmNews.setStatus(WmNews.Status.PUBLISHED.getCode());
                updateById(wmNews);
            }
        }

        //4.返回
        return ResponseResult.okResult(AppHttpCodeEnum.SUCCESS);
    }


}
```



#### 2）定时发布（Redis实现延迟任务）

流程图

![image-20231117230623335](https://gitee.com/tjlxy/img/raw/master/image-20231117230623335.png)



### 文章上下架

#### 1）异步通知文章上下架流程图

![image-20231112152803613](https://gitee.com/tjlxy/img/raw/master/image-20231112152803613.png)

#### 2）异步通往文章上下架代码

自媒体微服务进行发送消息

```java
 @Autowired
    private KafkaTemplate<String,String> kafkaTemplate;

    /**
     * 文章的上下架
     * @param dto
     * @return
     */
    @Override
    public ResponseResult downOrUp(WmNewsDto dto) {
        //1.检查参数
        if(dto.getId() == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID);
        }
        //2.查询文章
        WmNews wmNews = getById(dto.getId());
        if(wmNews == null){
            return ResponseResult.errorResult(AppHttpCodeEnum.DATA_NOT_EXIST,"文章不存在");
        }
        //3.判断文章是否已发布
        if(!wmNews.getStatus().equals(WmNews.Status.PUBLISHED.getCode())){
            return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID,"当前文章不是发布状态，不能上下架");
        }
        //4.修改文章enable
        if(dto.getEnable() != null && dto.getEnable() > -1 && dto.getEnable() < 2){
            update(Wrappers.<WmNews>lambdaUpdate().set(WmNews::getEnable,dto.getEnable())
                    .eq(WmNews::getId,wmNews.getId()));

            if(wmNews.getArticleId() != null){
                //发送消息，通知article修改文章的配置
                Map<String,Object> map = new HashMap<>();
                map.put("articleId",wmNews.getArticleId());
                map.put("enable",dto.getEnable());
                kafkaTemplate.send(WmNewsMessageConstants.WM_NEWS_UP_OR_DOWN_TOPIC, JSON.toJSONString(map));
            }
        }
        return ResponseResult.okResult(AppHttpCodeEnum.SUCCESS);
    }
```

文章微服务接受消息

```java
    @Autowired
    private ApArticleConfigService apArticleConfigService;

    @KafkaListener(topics = WmNewsMessageConstants.WM_NEWS_UP_OR_DOWN_TOPIC)
    public void onMessage(String message){
        if(StringUtils.isNotBlank(message)){
            Map map = JSON.parseObject(message, Map.class);
            apArticleConfigService.updateByMap(map);
            log.info("article端文章配置修改，articleId={}",map.get("articleId"));

        }
    }
```



### 计算热点文章

#### 1）定时计算 XXL-JOB

流程图

![image-20231112163959385](https://gitee.com/tjlxy/img/raw/master/image-20231112163959385.png)

关键代码

```java
@Service
@Slf4j
@Transactional
public class HotArticleServiceImpl implements HotArticleService {
    @Autowired
    private ApArticleMapper apArticleMapper;
    /**
     * 计算热点文章
     */
    @Override
    public void computeHotArticle() {
        //1.查询前5天的文章数据
        Date dateParam = DateTime.now().minusDays(5).toDate();
        List<ApArticle> apArticleList = apArticleMapper.findArticleListByLast5days(dateParam);
        //2.计算文章的分值
        List<HotArticleVo> hotArticleVoList = computeHotArticle(apArticleList);
        //3.为每个频道缓存30条分值较高的文章
        cacheTagToRedis(hotArticleVoList);
    }
    @Autowired
    private IWemediaClient wemediaClient;
    @Autowired
    private CacheService cacheService;
    /**
     * 为每个频道缓存30条分值较高的文章
     * @param hotArticleVoList
     */
    private void cacheTagToRedis(List<HotArticleVo> hotArticleVoList) {
        //每个频道缓存30条分值较高的文章
        ResponseResult responseResult = wemediaClient.getChannels();
        if(responseResult.getCode().equals(200)){
            String channelJson = JSON.toJSONString(responseResult.getData());
            List<WmChannel> wmChannels = JSON.parseArray(channelJson, WmChannel.class);
            //检索出每个频道的文章
            if(wmChannels != null && wmChannels.size() > 0){
                for (WmChannel wmChannel : wmChannels) {
                    List<HotArticleVo> hotArticleVos = hotArticleVoList.stream().filter(x -> x.getChannelId().equals(wmChannel.getId())).collect(Collectors.toList());
                    //给文章进行排序，取30条分值较高的文章存入redis  key：频道id   value：30条分值较高的文章
                    sortAndCache(hotArticleVos, ArticleConstants.HOT_ARTICLE_FIRST_PAGE + wmChannel.getId());
                }
            }
        }

        //设置推荐数据
        //给文章进行排序，取30条分值较高的文章存入redis  key：频道id   value：30条分值较高的文章
        sortAndCache(hotArticleVoList, ArticleConstants.HOT_ARTICLE_FIRST_PAGE+ArticleConstants.DEFAULT_TAG);
    }

    /**
     * 排序并且缓存数据
     * @param hotArticleVos
     * @param key
     */
    private void sortAndCache(List<HotArticleVo> hotArticleVos, String key) {
        hotArticleVos = hotArticleVos.stream().sorted(Comparator.comparing(HotArticleVo::getScore).reversed()).collect(Collectors.toList());
        if (hotArticleVos.size() > 30) {
            hotArticleVos = hotArticleVos.subList(0, 30);
        }
        cacheService.set(key, JSON.toJSONString(hotArticleVos));
    }
    /**
     * 计算文章分值
     * @param apArticleList
     * @return
     */
    private List<HotArticleVo> computeHotArticle(List<ApArticle> apArticleList) {
        List<HotArticleVo> hotArticleVoList = new ArrayList<>();
        if(apArticleList != null && apArticleList.size() > 0){
            for (ApArticle apArticle : apArticleList) {
                HotArticleVo hot = new HotArticleVo();
                BeanUtils.copyProperties(apArticle,hot);
                Integer score = computeScore(apArticle);
                hot.setScore(score);
                hotArticleVoList.add(hot);
            }
        }
        return hotArticleVoList;
    }

    /**
     * 计算文章的具体分值
     * @param apArticle
     * @return
     */
    private Integer computeScore(ApArticle apArticle) {
        Integer scere = 0;
        if(apArticle.getLikes() != null){
            scere += apArticle.getLikes() * ArticleConstants.HOT_ARTICLE_LIKE_WEIGHT;
        }
        if(apArticle.getViews() != null){
            scere += apArticle.getViews();
        }
        if(apArticle.getComment() != null){
            scere += apArticle.getComment() * ArticleConstants.HOT_ARTICLE_COMMENT_WEIGHT;
        }
        if(apArticle.getCollection() != null){
            scere += apArticle.getCollection() * ArticleConstants.HOT_ARTICLE_COLLECTION_WEIGHT;
        }
        return scere;
    }
}
```

查询前5天的文字数据mapper

```xml
    <select id="findArticleListByLast5days" resultMap="resultMap">
        SELECT
        aa.*
        FROM
        `ap_article` aa
        LEFT JOIN ap_article_config aac ON aa.id = aac.article_id
        <where>
            and aac.is_delete != 1
            and aac.is_down != 1
            <if test="dayParam != null">
                and aa.publish_time <![CDATA[>=]]> #{dayParam}
            </if>
        </where>
    </select>
```

XXL-JOB定时调度

```java
@Component
@Slf4j
public class ComputeHotArticleJob {

    @Autowired
    private HotArticleService hotArticleService;

    @XxlJob("computeHotArticleJob")
    public void handle(){
        log.info("热文章分值计算调度任务开始执行...");
        hotArticleService.computeHotArticle();
        log.info("热文章分值计算调度任务结束...");

    }
}
```

![image-20231112173057040](https://gitee.com/tjlxy/img/raw/master/image-20231112173057040.png)

#### 2）实时计算 Kafka Stream

流程图：

![image-20231112173221441](https://gitee.com/tjlxy/img/raw/master/image-20231112173221441.png)

![image-20231112181323812](https://gitee.com/tjlxy/img/raw/master/image-20231112181323812.png)

关键代码

当天发生的新增用户行为，会被发送到Kafka 的热点文章分值主题中保存

修改ApLikesBehaviorServiceImpl和ApReadBehaviorServiceImpl新增发送消息

修改ApLikesBehaviorServiceImpl类，喜欢+1、，不喜欢-1

```java
		UpdateArticleMess mess = new UpdateArticleMess();
        mess.setArticleId(dto.getArticleId());
        mess.setType(UpdateArticleMess.UpdateArticleType.LIKES);

        //3.点赞  保存数据
        if (dto.getOperation() == 0) {
            Object obj = cacheService.hGet(BehaviorConstants.LIKE_BEHAVIOR + dto.getArticleId().toString(), user.getId().toString());
            if (obj != null) {
                return ResponseResult.errorResult(AppHttpCodeEnum.PARAM_INVALID, "已点赞");
            }
            // 保存当前key
            log.info("保存当前key:{} ,{}, {}", dto.getArticleId(), user.getId(), dto);
            cacheService.hPut(BehaviorConstants.LIKE_BEHAVIOR + dto.getArticleId().toString(), user.getId().toString(), JSON.toJSONString(dto));
            mess.setAdd(1);
        } else {
            // 删除当前key
            log.info("删除当前key:{}, {}", dto.getArticleId(), user.getId());
            cacheService.hDelete(BehaviorConstants.LIKE_BEHAVIOR + dto.getArticleId().toString(), user.getId().toString());
            mess.setAdd(-1);
        }

        //发送消息，数据聚合
        kafkaTemplate.send(HotArticleConstants.HOT_ARTICLE_SCORE_TOPIC,JSON.toJSONString(mess));
```

ApReadBehaviorServiceImpl类，阅读+1

```java
        //发送消息，数据聚合
        UpdateArticleMess mess = new UpdateArticleMess();
        mess.setArticleId(dto.getArticleId());
        mess.setType(UpdateArticleMess.UpdateArticleType.VIEWS);
        mess.setAdd(1);
        kafkaTemplate.send(HotArticleConstants.HOT_ARTICLE_SCORE_TOPIC,JSON.toJSONString(mess));

```

在leadnews-article微服务中集成kafkaStream

在leadnews-article微服务中实时接收消息，聚合内容

```java
@Configuration
@Slf4j
public class HotArticleStreamHandler {

    @Bean
    public KStream<String,String> kStream(StreamsBuilder streamsBuilder){
        //接收消息
        KStream<String,String> stream = streamsBuilder.stream(HotArticleConstants.HOT_ARTICLE_SCORE_TOPIC);
        //聚合流式处理
        stream.map((key,value)->{
            UpdateArticleMess mess = JSON.parseObject(value, UpdateArticleMess.class);
            //重置消息的key:1234343434   和  value: likes:1
            return new KeyValue<>(mess.getArticleId().toString(),mess.getType().name()+":"+mess.getAdd());
        })
                //按照文章id进行聚合
                .groupBy((key,value)->key)
                //时间窗口
                .windowedBy(TimeWindows.of(Duration.ofSeconds(10)))
                /**
                 * 自行的完成聚合的计算
                 */
                .aggregate(new Initializer<String>() {
                    /**
                     * 初始方法，返回值是消息的value
                     * @return
                     */
                    @Override
                    public String apply() {
                        return "COLLECTION:0,COMMENT:0,LIKES:0,VIEWS:0";
                    }
                    /**
                     * 真正的聚合操作，返回值是消息的value
                     */
                }, new Aggregator<String, String, String>() {
                    @Override
                    public String apply(String key, String value, String aggValue) {
                        if(StringUtils.isBlank(value)){
                            return aggValue;
                        }
                        String[] aggAry = aggValue.split(",");
                        int col = 0,com=0,lik=0,vie=0;
                        for (String agg : aggAry) {
                            String[] split = agg.split(":");
                            /**
                             * 获得初始值，也是时间窗口内计算之后的值
                             */
                            switch (UpdateArticleMess.UpdateArticleType.valueOf(split[0])){
                                case COLLECTION:
                                    col = Integer.parseInt(split[1]);
                                    break;
                                case COMMENT:
                                    com = Integer.parseInt(split[1]);
                                    break;
                                case LIKES:
                                    lik = Integer.parseInt(split[1]);
                                    break;
                                case VIEWS:
                                    vie = Integer.parseInt(split[1]);
                                    break;
                            }
                        }
                        /**
                         * 累加操作
                         */
                        String[] valAry = value.split(":");
                        switch (UpdateArticleMess.UpdateArticleType.valueOf(valAry[0])){
                            case COLLECTION:
                                col += Integer.parseInt(valAry[1]);
                                break;
                            case COMMENT:
                                com += Integer.parseInt(valAry[1]);
                                break;
                            case LIKES:
                                lik += Integer.parseInt(valAry[1]);
                                break;
                            case VIEWS:
                                vie += Integer.parseInt(valAry[1]);
                                break;
                        }

                        String formatStr = String.format("COLLECTION:%d,COMMENT:%d,LIKES:%d,VIEWS:%d", col, com, lik, vie);
                        System.out.println("文章的id:"+key);
                        System.out.println("当前时间窗口内的消息处理结果："+formatStr);
                        return formatStr;
                    }
                }, Materialized.as("hot-atricle-stream-count-001"))
                .toStream()
                .map((key,value)->{
                    return new KeyValue<>(key.key().toString(),formatObj(key.key().toString(),value));
                })
                //发送消息
                .to(HotArticleConstants.HOT_ARTICLE_INCR_HANDLE_TOPIC);

        return stream;


    }

    /**
     * 格式化消息的value数据
     * @param articleId
     * @param value
     * @return
     */
    public String formatObj(String articleId,String value){
        ArticleVisitStreamMess mess = new ArticleVisitStreamMess();
        mess.setArticleId(Long.valueOf(articleId));
        //COLLECTION:0,COMMENT:0,LIKES:0,VIEWS:0
        String[] valAry = value.split(",");
        for (String val : valAry) {
            String[] split = val.split(":");
            switch (UpdateArticleMess.UpdateArticleType.valueOf(split[0])){
                case COLLECTION:
                    mess.setCollect(Integer.parseInt(split[1]));
                    break;
                case COMMENT:
                    mess.setComment(Integer.parseInt(split[1]));
                    break;
                case LIKES:
                    mess.setLike(Integer.parseInt(split[1]));
                    break;
                case VIEWS:
                    mess.setView(Integer.parseInt(split[1]));
                    break;
            }
        }
        log.info("聚合消息处理之后的结果为:{}",JSON.toJSONString(mess));
        return JSON.toJSONString(mess);

    }
}
```

重新计算文章的分值，更新到数据库和缓存中

```java
/**
     * 更新文章的分值  同时更新缓存中的热点文章数据
     * @param mess
     */
@Override
public void updateScore(ArticleVisitStreamMess mess) {
    //1.更新文章的阅读、点赞、收藏、评论的数量
    ApArticle apArticle = updateArticle(mess);
    //2.计算文章的分值
    Integer score = computeScore(apArticle);
    score = score * 3;

    //3.替换当前文章对应频道的热点数据
    replaceDataToRedis(apArticle, score, ArticleConstants.HOT_ARTICLE_FIRST_PAGE + apArticle.getChannelId());

    //4.替换推荐对应的热点数据
    replaceDataToRedis(apArticle, score, ArticleConstants.HOT_ARTICLE_FIRST_PAGE + ArticleConstants.DEFAULT_TAG);

}

/**
     * 替换数据并且存入到redis
     * @param apArticle
     * @param score
     * @param s
     */
private void replaceDataToRedis(ApArticle apArticle, Integer score, String s) {
    String articleListStr = cacheService.get(s);
    if (StringUtils.isNotBlank(articleListStr)) {
        List<HotArticleVo> hotArticleVoList = JSON.parseArray(articleListStr, HotArticleVo.class);

        boolean flag = true;

        //如果缓存中存在该文章，只更新分值
        for (HotArticleVo hotArticleVo : hotArticleVoList) {
            if (hotArticleVo.getId().equals(apArticle.getId())) {
                hotArticleVo.setScore(score);
                flag = false;
                break;
            }
        }

        //如果缓存中不存在，查询缓存中分值最小的一条数据，进行分值的比较，如果当前文章的分值大于缓存中的数据，就替换
        if (flag) {
            if (hotArticleVoList.size() >= 30) {
                hotArticleVoList = hotArticleVoList.stream().sorted(Comparator.comparing(HotArticleVo::getScore).reversed()).collect(Collectors.toList());
                HotArticleVo lastHot = hotArticleVoList.get(hotArticleVoList.size() - 1);
                if (lastHot.getScore() < score) {
                    hotArticleVoList.remove(lastHot);
                    HotArticleVo hot = new HotArticleVo();
                    BeanUtils.copyProperties(apArticle, hot);
                    hot.setScore(score);
                    hotArticleVoList.add(hot);
                }


            } else {
                HotArticleVo hot = new HotArticleVo();
                BeanUtils.copyProperties(apArticle, hot);
                hot.setScore(score);
                hotArticleVoList.add(hot);
            }
        }
        //缓存到redis
        hotArticleVoList = hotArticleVoList.stream().sorted(Comparator.comparing(HotArticleVo::getScore).reversed()).collect(Collectors.toList());
        cacheService.set(s, JSON.toJSONString(hotArticleVoList));

    }
}

/**
     * 更新文章行为数量
     * @param mess
     */
private ApArticle updateArticle(ArticleVisitStreamMess mess) {
    ApArticle apArticle = getById(mess.getArticleId());
    apArticle.setCollection(apArticle.getCollection()==null?0:apArticle.getCollection()+mess.getCollect());
    apArticle.setComment(apArticle.getComment()==null?0:apArticle.getComment()+mess.getComment());
    apArticle.setLikes(apArticle.getLikes()==null?0:apArticle.getLikes()+mess.getLike());
    apArticle.setViews(apArticle.getViews()==null?0:apArticle.getViews()+mess.getView());
    updateById(apArticle);
    return apArticle;

}

/**
     * 计算文章的具体分值
     * @param apArticle
     * @return
     */
private Integer computeScore(ApArticle apArticle) {
    Integer score = 0;
    if(apArticle.getLikes() != null){
        score += apArticle.getLikes() * ArticleConstants.HOT_ARTICLE_LIKE_WEIGHT;
    }
    if(apArticle.getViews() != null){
        score += apArticle.getViews();
    }
    if(apArticle.getComment() != null){
        score += apArticle.getComment() * ArticleConstants.HOT_ARTICLE_COMMENT_WEIGHT;
    }
    if(apArticle.getCollection() != null){
        score += apArticle.getCollection() * ArticleConstants.HOT_ARTICLE_COLLECTION_WEIGHT;
    }

    return score;
}
```

定义监听，接收聚合之后的数据，文章的分值重新进行计算

```java
    @Autowired
    private ApArticleService apArticleService;

    @KafkaListener(topics = HotArticleConstants.HOT_ARTICLE_INCR_HANDLE_TOPIC)
    public void onMessage(String mess){
        if(StringUtils.isNotBlank(mess)){
            ArticleVisitStreamMess articleVisitStreamMess = JSON.parseObject(mess, ArticleVisitStreamMess.class);
            apArticleService.updateScore(articleVisitStreamMess);

        }
    }
```

