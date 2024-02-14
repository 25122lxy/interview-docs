

# 校园行(Campus-trip)

## 1. 项目概述

### 1.1 项目介绍

该项目是一个校园社交活动管理平台，旨在帮助学生组织和参与校园内的各种社交活动。学生可以通过小程序浏览和查询校园内的活动，并报名参加感兴趣的活动。后台管理端可以管理区域、活动、用户和报名信息等，以及统计分析活动数据。

一款专门针对大学校园内社交活动的管理工具。它为学生组织和参与者提供了一种方便、高效的方式来组织和参加各种社交活动。

随着校园文化的多元化和学生兴趣的多样化，学生对校园活动的需求也在增加。目前市场上虽然有一些校园活动平台，但大多数功能较为简单，缺乏数据分析和挖掘能力。因此，校园活动日历项目将结合先进的技术和深入的数据分析，为学生提供更加丰富和个性化的活动选择，满足他们的实际需求。

PC管理端：工作台（数据可视化）、用户管理、区域管理、活动管理（分类、活动信息）、报名管理（报名提醒、报名时间区间、报名状态设置）、（登录登出）、反馈管理

小程序端：微信登录、活动浏览与查询（查看活动详情）、报名参加活动（报名成功提醒或活动开始前提醒）、个人中心等功能（个人报名管理、查看已报名的活动、用户催单、历史活动记录、个人信息）

参加活动可以活动虚拟工资，学期末通过统计，给予前50名学生奖品

活动报名限制人数、50、100、200等

采用定时任务，检测活动开始前两小时通过WebSocket提醒学生

学生可以在线联系管理员，询问活动详情疑惑点（必须管理员在线状态）

报名成功10min内可以取消报名

当用户报名或取消报名某个活动时，需要修改活动报名信息。为了提高系统的响应速度，可以将修改活动报名信息的操作放入消息队列中异步处理。

**结合专家校园行和活动大咖**

1. 活动发布和管理：学生组织可以在平台上发布他们的活动，并进行活动的管理，如审核报名、确认参与人员等。
2. 活动搜索和参与：学生可以在平台上浏览所有可参加的活动，并通过平台报名参加感兴趣的活动。
3. 活动评价和反馈：学生可以在平台上对参加过的活动进行评价和反馈，帮助其他人更好地了解这些活动的质量和特点。
4. 活动统计和分析：平台可以对所有活动进行统计和分析，以便学校和学生组织更好地了解他们的社交活动情况，优化他们的活动策略和管理方法。
5. 社交互动和交流：平台还提供了社交互动和交流的功能，让学生可以更好地了解彼此的兴趣爱好和想法，建立更紧密的社交网络

---

"校园行"是一款专门针对大学校园内社交活动的管理工具，旨在为学生组织和参与者提供方便、高效的方式来组织和参加各种社交活动。该平台结合先进的技术和深入的数据分析，旨在满足学生们多元化的校园文化需求和兴趣多样化。

**PC管理端：**

- 工作台（数据可视化）：提供直观的数据图表和报告，帮助管理员了解活动情况和学生参与度。
- 区域管理：管理不同区域的社交活动，确保活动覆盖全校各个地方。
- 活动管理：支持分类和编辑活动信息，包括活动时间、地点、主题等。
- 报名管理：设置报名时间区间和报名提醒，方便学生报名参加活动。
- 用户管理：管理学生用户的注册和权限，确保平台的安全性和准确性。
- 登录登出：提供登录和登出功能，保护用户隐私和账户安全。
- 评价管理：收集学生对活动的反馈和评价，改进活动质量和体验。
- 报名提醒：向学生发送报名成功和活动提醒的通知，确保参与者准时参加活动。
- 报名状态设置：管理学生的报名状态，包括待审核、已通过、已取消等。

**小程序端：**

- 微信登录：支持学生使用微信账号快速登录，提高用户体验和便捷性。
- 活动浏览与查询：学生可以浏览和查询不同的社交活动，查看活动详情和相关信息。
- 报名参加活动：学生可以通过平台报名参加感兴趣的活动，提前预定位置。
- 查看已报名的活动：学生可以查看自己已经报名参加的活动，并获取相关的提醒和通知。
- 个人报名管理：学生可以管理自己的报名信息，包括修改、取消报名等操作。
- 历史活动记录：学生可以查看自己参与过的历史活动记录，回顾和分享活动经历。
- 个人信息中心：学生可以管理和编辑个人信息，包括头像、昵称、联系方式等。
- 用户催单：学生可以向管理员发起催单请求，提醒他们及时处理问题和反馈。

---

校园活动的种类和形式有很多，以下是一些常见的校园活动示例：

1. 文化艺术类活动：
   - 话剧表演
   - 音乐会或乐队演出
   - 舞蹈比赛或表演
   - 绘画、摄影或手工艺品展览
   - 书法、诗歌或散文比赛
2. 学术科技类活动：
   - 学术讲座或研讨会
   - 科技创新竞赛
   - 科学展览
   - 编程或机器人比赛
   - 学术论文发表会
3. 社会公益类活动：
   - 志愿者服务活动
   - 社区清洁行动
   - 环保讲座或展览
   - 爱心捐赠活动
   - 义卖会或义演
4. 运动健身类活动：
   - 篮球、足球或排球比赛
   - 游泳或跑步比赛
   - 健身操或瑜伽课程
   - 登山或徒步活动
   - 卡拉OK比赛或舞蹈大赛
5. 主题文化节日类活动：
   - 学校周年庆典
   - 外国文化体验活动
   - 元宵节灯会
   - 毕业晚会或舞会
   - 春节联欢晚会

6. 职业规划类活动：
   - 职业生涯规划讲座或咨询
   - 校园招聘会或面试培训
   - 企业参观或实习机会推介
7. 心理健康类活动：
   - 心理健康讲座或辅导活动
   - 精神鸡汤分享会或读书会
   - 压力管理和情绪控制课程
8. 出国留学类活动：
   - 留学资讯讲座或展览
   - 外国大使馆开放日活动
   - 外语角、文化交流活动或海外游学计划
9. 创业创新类活动：
   - 创业讲座或创业比赛
   - 创意市集或设计展览
   - 创新工作坊或创客空间开放日
10. 社交互动类活动：
    - 交友晚会或联谊活动
    - 活动策划与组织培训
    - 社团招新或社团活动推介

### 1.2 数据库表设计

#### 管理员表

```sql
CREATE TABLE `admin` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(32) DEFAULT NULL COMMENT '姓名',
  `username` varchar(32) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `phone` varchar(11) DEFAULT NULL COMMENT '手机号',
  `status` tinyint(1) DEFAULT NULL COMMENT '状态，0正常，1锁定',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='管理员';
```



#### 区域表

```sql
CREATE TABLE `site` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(100) NOT NULL COMMENT '场地名称',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='场地信息';
```



#### 分类表

```sql
CREATE TABLE `category` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(32) NOT NULL COMMENT '分类名称',
  `description` varchar(255) DEFAULT NULL COMMENT '分类描述',
  `status` int DEFAULT '0' COMMENT '分类状态 0：禁用，1：启用',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `create_user` bigint DEFAULT NULL COMMENT '创建人',
  `update_user` bigint DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_category_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='活动分类';
```



#### 活动表

```sql
CREATE TABLE `activity` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(32) NOT NULL COMMENT '活动名称',
  `category_id` bigint NOT NULL COMMENT '活动分类id',
  `description` varchar(255) DEFAULT NULL COMMENT '活动描述',
  `site_id` bigint DEFAULT NULL COMMENT '活动场地id',
  `registration_start_time` datetime DEFAULT NULL COMMENT '报名开始时间',
  `registration_end_time` datetime DEFAULT NULL COMMENT '报名结束时间',
  `activity_start_time` datetime DEFAULT NULL COMMENT '活动开始时间',
  `activity_end_time` datetime DEFAULT NULL COMMENT '预计活动结束时间',
  `quota_num` bigint DEFAULT NULL COMMENT '活动名额',
  `people_num` bigint DEFAULT NULL COMMENT '活动人数',
  `virtual_salary` decimal(10,2) DEFAULT NULL COMMENT '虚拟工资',
  `note` varchar(255) DEFAULT NULL COMMENT '注意事项',
  `head` varchar(32) DEFAULT NULL COMMENT '负责人',
  `head_phone` bigint DEFAULT NULL COMMENT '负责人联系方式',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `create_user` bigint DEFAULT NULL COMMENT '创建人',
  `update_user` bigint DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_activity_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='活动信息';
```



#### 用户表

```sql
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `openid` varchar(45) DEFAULT NULL COMMENT '微信用户唯一标识',
  `name` varchar(32) DEFAULT NULL COMMENT '姓名',
  `phone` varchar(11) DEFAULT NULL COMMENT '手机号',
  `sex` tinyint(1) DEFAULT NULL COMMENT '性别，0男，1女，2未知',
  `avatar` varchar(500) DEFAULT NULL COMMENT '头像',
  `status` tinyint(1) DEFAULT '0' COMMENT '状态，0正常，1锁定',
  `create_time` datetime DEFAULT NULL COMMENT '注册时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户信息';
```



#### 报名表

```sql
CREATE TABLE `registration` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `activity_id` bigint DEFAULT NULL COMMENT '活动id',
  `status` varchar(50) NOT NULL DEFAULT '1' COMMENT '报名状态，1未开始，2已完成，3已取消',
  `user_id` bigint DEFAULT NULL COMMENT '报名活动的用户id',
  `registration_time` datetime DEFAULT NULL COMMENT '报名时间',
  `remark` varchar(100) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`,`status`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='报名信息';
```

#### 聊天表

```sql
CREATE TABLE `record` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `is_admin` tinyint(1) DEFAULT NULL COMMENT '发送方是否是管理员，1管理员，2用户',
  `send_id` bigint DEFAULT NULL COMMENT '发送人id',
  `receive_id` bigint DEFAULT NULL COMMENT '接收人id',
  `content` varchar(255) DEFAULT NULL COMMENT '发送内容',
  `time` datetime DEFAULT NULL COMMENT '发送时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='聊天记录信息';
```



### 1.3 项目架构



### 1.4 项目工程结构



### 1.5 项目演示



## 2. 项目业务

### 2.1 PC管理端

#### 1）工作台

使用Apache Echarts完成数据可视化，使用Apache POI完成各项活动数据的导出

需求安排：

- 活动报名统计
- 用户统计
- 活动类型统计

- 导出运营数据Excel报表

<font color=blue>**活动报名统计**</font>

活动报名统计通过折线图来展示，X轴为活动名，Y轴为报名数

- 这里的报名数指有效报名数，就是报名成功并成功参加活动的数量

- 报名取消和报名成功没有参加活动的学生不算有效报名

- 根据时间选择区间，展示**各个活动的有效报名数**

<font color=blue>**用户统计**</font>

通过折线图来统计用户的数量，X轴为日期，Y轴为用户数，具体到每一天。

- 根据时间选择区间，展示每天的**用户总量**和**新增用户量**数据

<font color=blue>**活动类型统计**</font>

通过柱形图来展示各个类型的活动报名数量，X轴为活动类型，Y轴为该类型下活动的总报名数量

- 根据时间选择区间，展示**各个类型的活动报名数量**

<font color=blue>**导出运营数据Excel报表**</font>

导出Excel形式的报表文件

导出最近两周（14天）的运营数据，主要由**概览数据（总活动数和总报名数）**和**明细数据（统计图数据）**两部分组成

实现步骤：

1). 设计Excel模板文件

2). 查询近14天的运营数据

3). 将查询到的运营数据写入模板文件

4). 通过输出流将Excel文件下载到客户端浏览器

#### 2）用户管理

小程序端如果是首次登录，那么就是插入新的用户信息，并使用OpenID+随机字符串作为默认用户名，其他非必要信息默认为空。

接口安排

- 用户分页查询
- 启用禁用用户账号
- 编辑用户

#### 3）区域管理

需求安排

- 活动场地查询
- 添加活动场地
- 编辑活动场地
- 删除活动场地

实则就是简单的CRUD

首先录入校园中可以进行活动的场地，在进行发布活动时，可以从场地列表中快速选取合适活动场地

#### 4）活动管理

关于活动管理，主要围绕活动相关的业务设计的，包含：活动分类、活动信息这些相关的业务流程。

##### ①活动分类管理

活动分类这块主要有十多个类别，比如有：文化艺术类活动、学术科技类活动、社会公益类活动、运动健身类活动、主题文化节日类活动、职业规划类活动、心理健康类活动、出国留学类活动、创业创新类活动、社交互动类活动

可以针对活动分类进行管理，活动分类字段就是主键id、活动分类名称、活动类型详情、分类状态以及排序顺序这么几个字段。

需求安排：

- 分页查询活动分类

  系统中的分类很多的时候，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据。

- 添加活动分类

  当我们在后台系统中添加活动时需要选择一个活动分类，在移动端也会按照活动分类来展示对应的菜品

- 编辑活动分类

  在活动分类管理列表页面点击修改按钮，弹出修改窗口，在修改窗口回显分类信息并进行修改，最后点击确定按钮完成修改操作。

- 删除活动分类

  在活动分类管理页面，可以对某个类型进行删除操作。需要注意的是当分类关联了活动时，此分类不允许删除。

- 启用禁用活动分类

  在分类管理列表页面，可以对某个分类进行启用或者禁用操作。

- 分类类型查询（条件查询）

  当点击分类类型下拉框时，从数据库中查询所有的菜品分类数据进行展示。

注意：

- 分类名称必须是唯一的
- 新添加的分类状态默认为“禁用”

接口安排

- 新增分类
- 分类分页查询
- 根据id删除分类
- 修改分类
- 启用禁用分类
- 根据类型查询分类



##### ②活动信息管理

需求安排

- 公共字段自动填充
- 发布活动
- 开始/结束报名（报名时间24h，定时任务实现）
- 活动分页查询
- 修改活动
- 取消活动

<font color=blue>**公共字段自动填充**</font>

使用AOP切面编程，实现功能增强，来完成公共字段自动填充功能

在实现公共字段自动填充，也就是在插入或者更新的时候为指定字段赋予指定的值，使用它的好处就是可以统一对这些字段进行处理，避免了重复代码。在上述的问题分析中，我们提到有四个公共字段，需要在新增/更新中进行赋值操作, 具体情况如下: 

| **序号** | **字段名**  | **含义** | **数据类型** | **操作类型**   |
| -------- | ----------- | -------- | ------------ | -------------- |
| 1        | create_time | 创建时间 | datetime     | insert         |
| 2        | create_user | 创建人id | bigint       | insert         |
| 3        | update_time | 修改时间 | datetime     | insert、update |
| 4        | update_user | 修改人id | bigint       | insert、update |

实现步骤：

1). 自定义注解 AutoFill，用于标识需要进行公共字段自动填充的方法

2). 自定义切面类 AutoFillAspect，统一拦截加入了 AutoFill 注解的方法，通过反射为公共字段赋值

3). 在需要实现的业务方法上加入 AutoFill 注解（Impl实现类）

==AOP实现统一业务日志的打印==

日志和业务混合在一起，AOP要做的就是将日志代码全部抽象出去，统一进行处理，处理方法中只保留核心业务代码，做到核心业务和非业务代码的解耦合

实现步骤：

1). 自定义注解 LogAnnotation，用于标识需要进行公共字段自动填充的方法

2). 自定义切面类 LogAspect，统一拦截加入了 LogAnnotation注解的方法，通过反射为公共字段赋值

3). 在需要实现的业务方法上加入 LogAnnotation注解（controller类）

<font color=blue>**发布活动**</font>

后台系统中可以管理活动，通过 **新增功能**来添加一个新的活动，在添加活动时需要选择当前活动所属的活动分类和活动场地

信息项有：活动名称、**活动分类**、活动描述、活动场地、报名开始时间、报名截止时间、活动开始时间、预计活动结束时间、活动名额、虚拟工资、注意事项、活动负责人、联系方式。。。

注意：

- 活动名称必须是唯一的
- 活动必须属于某个分类下，不能单独存在
- 活动场地可选，不选的情况下默认线上

<font color=blue>**开始/结束报名（报名时间24h，定时任务实现）**</font>

发布活动，小程序端即可看到活动信息，报名时间开始，用户可以进行报名

报名开始后，不能取消活动。只要活动报名截止前可以取消活动

<font color=blue>**活动分页查询**</font>

系统中的活动越来越多，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据。

<font color=blue>**修改活动**</font>

通过修改功能完成对活动相关信息的修改操作，**已开始报名的活动不能修改**，必须取消活动才可修改

<font color=blue>**取消活动**</font>

在活动信息列表页面，每个活动后面对应的操作分别为**修改**、**取消**、**开始/结束**，可通过取消功能完成对活动及相关的数据进行删除。**已开始报名的活动不能删除**，必须取消活动才可删除

#### 5）报名管理

只要用户报名成功就会生产报名信息，报名数据统一管理，详细数据可查，可以进行导出，分析处理

- 分页查看报名信息
- 根据报名条件查看报名信息（已报名，已取消，已参加）
- 定时任务，活动开始前两小时提醒学生

#### 6）在线沟通

- 开启/关闭在线状态
- 在线聊天

### 2.2 小程序端

#### 1）微信登录

用户进入到小程序的时候，只能查看活动列表，微信授权登录之后才能查看活动详情并报名。

需要获取当前微信用户的相关信息，比如昵称、头像等，这样才能够进入到小程序进行报名操作。

是基于微信登录来实现小程序的登录功能，没有采用传统账户密码登录的方式。

若第一次使用小程序来报名，就是一个新用户，需要把这个新的用户保存到数据库当中完成自动注册。

<font color=blue>**微信登录流程**</font>

前端调用wx.login()进行登录，**首先用户在小程序端点击登录，前端会调用微信的登录方法wx.login()，用户在微信端需要点击允许登录**。

**当用户允许后，微信Server端就会返回一个临时票据code，前端将这个临时票据code发送给后端**。

**后端需要带着自己的AppID和App秘钥以及这个临时票据code，去向微信Server端发起请求，交换回来一个SessionKey 和openld**。

- SessionKey代表一个会话的秘钥，用于校验会话数据的签名和解密，这个是有有效期的。
- 而Openld代表用户的唯一标识，这个是不会改变的，所以后面我们也是通过OpenIlD判断用户的唯一性。

因为这是一个HTTP 的远程调用，于是封装了一个HttpClient的工具类和微信Service专门用于对接微信的开放API。

**得到用户的SessionKey和Openld 以后，根据Openld 判断用户是否是首次登录**。

**如果是首次登录，那么就是插入新的用户信息，使用Openld+随机字符串作为默认用户名，用户将来可以在个人中心进行修改**。

查到用户信息以后，根据用户id和用户name，生成一个自定义的Token，这个格式我们采用JWT格式进行实现

**最后就是封装返回给客户端的数据，比如Token、用户信息返回给前端**。

**另外还要把用户的个人信息缓存到Redis当中**。

==微信登录认证流程==

当用户登录成功后，前端每次请求都会把Token放到请求头里面，这个Token 就是登录时下发的JWT格式的Token。

在后端代码中，设计了一个拦截器，拦截到请求后，从 Request请求头中获取Token，然后调用预先封装好的JWT工具类校验Token没有问题，从Token中取到Userld，再拿着Userld去Redis 中获取用户信息。如果用户信息没有过期，那么就可以获取到，如果过期了就获取不到，前端需要重新登录。

当获取到用户信息后，直接把用户信息封装到ThreadLocal中，这样，在后续的处理业务的过程中，就可以随时取到用户信息进行相应的业务处理了。

#### 2）活动浏览与查询

需求安排：

- 查询所有活动列表
- 根据分类查询活动
- 查看活动详情
- **在线联系管理员**



#### 3）报名参加活动

需求安排：

- 报名活动
- 查看我的活动（包括参加过还有报名后还未参加的活动）
- 取消活动（活动开始前10min，开始后不许取消活动，不参加记录个人信用分）



#### 4）个人中心

需求安排：

- 查看个人信息
- 修改个人信息
- 退出登录



## 3. 简历编写

**校园行**		2023.3-2023.5

**项目内容**：校园行是一个专注于大学生群体的校园活动平台，致力于帮助学生更便捷地组织和参与校园内的各种活动，并提供丰富多样的奖品，例如学术科技类、社会公益类、文化节日类、体育竞技类等等。

**业务模块：**

PC管理端：包括数据可视化、用户管理、区域管理、活动管理、报名管理等模块。

小程序端：支持微信登录，用户可以浏览和查询活动信息，报名参加活动，并在个人中心查看信息等功能。

**核心技术：**SpringBoot、MyBatisPlus、MySQL、SpringData Redis、Spring Task、RabbitMQ、POI、WebSocket。

**项目要点：**

1、基于JWT封装用户Token，使用Redis对其进行存储管理，并自定义封装了拦截器校验JWT的数据有效性，提供系统安全性。

2、使用自定义AOP切面，实现统一日志的打印和公共字段填充，如：创建时间、创建人ID、修改时间、修改人ID，提高开发效率和代码质量。

3、使用 Redis 作为缓存组件，缓存了管理员在线状态、活动分类数据、活动信息、活动报名数据。 使用SpringCache优化了缓存编码设计，提供系统性能和响应速度。

4、对接微信登录，前端调用 wx.login()，后端通过登录凭证校验接口交换到用户唯一标识OpenID完成业务逻辑，提高用户体验。

5、针对管理员发布活动、用户报名成功和取消报名等非强一致性业务需求使用 RabbitMQ 进行异步实现，避免用户等待时间过长，提高系统的吞吐量和响应速度。

6、使用Spring Task定时扫描活动报名状态即活动开始时间，报名时间截止，则关闭报名入口。

7、使用WebSocket全双工协议，设计活动开始前2小时提醒学生相关事项，并提供学生与联系管理员的在线聊天功能。增强平台的互动性和便捷性。

8、在平台运营管理端，数据统计模块中，使用Apache Echarts多种图表对接后端接口，展示活动报名数据、用户统计数据、活动类型统计，同时使用Apache POI完成各项活动数据的导出，方便运营管理分析。



9、 （通过集成 Knife4j 接口测试文档，可以将已编写好的 Swagger 注解自动转换为文档页面，实现在线调用接口的测试功能，极大地提高了测试效率。 ）

10、 （为减少项目冗余的报错细节，自定义异常类并封装了全局异常处理器，便于集中统一处理系统异常。）





https://www.yuque.com/boge8/lqrzl9/iotdy6sz8ne2wnat

## 4. 附录（关键代码+流程图）

### 发布活动

![image-20240117155147549](https://gitee.com/tjlxy/img/raw/master/image-20240117155147549.png)

### 微信登录

![image-20230729161411964](https://gitee.com/tjlxy/img/raw/master/image-20230729161411964.png)

具体步骤：

1. 小程序端，调用wx.login()获取code，就是授权码。
2. 小程序端，调用wx.request()发送请求并携带code，请求开发者服务器(自己编写的后端服务)。
3. 开发者服务端，通过HttpClient向微信接口服务发送请求，并携带appId+appsecret+code三个参数。
4. 开发者服务端，接收微信接口服务返回的数据，session_key+opendId等。opendId是微信用户的唯一标识。
5. 开发者服务端，自定义登录态，生成令牌(token)和openid等数据返回给小程序端，方便后绪请求身份校验。
6. 小程序端，收到自定义登录态，存储storage。
7. 小程序端，后绪通过wx.request()发起业务请求时，携带token。
8. 开发者服务端，收到请求后，通过携带的token，解析当前登录用户的id。
9. 开发者服务端，身份校验通过后，继续相关的业务逻辑处理，最终返回业务数据。

### 报名活动

![image-20240117160338916](https://gitee.com/tjlxy/img/raw/master/image-20240117160338916.png)

### 在线聊天



