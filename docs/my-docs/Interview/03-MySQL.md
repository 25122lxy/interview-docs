# MySQL



## 索引

### 1.索引是什么（无过滤不索引）✔

- 数据库索引，是数据库管理系统中一个排序的数据结构，以协助快速查询、更新数据库表中的数据

  > 主要是用来提高数据检索的效率，降低数据库的IO成本，同时通过索引列对数据进行排序，降低数据排序的成本，**也能降低CPU的消耗**

- **是一个文件**，**占据物理内存**

### 2.索引有哪些优缺点✔

优点

1、加快了数据的检索速度

2、使用索引，**可以在查询过程中**，**使用底层优化器**，提供系统性能

缺点

1、时间方面：创建索引和维护索引（添加、修改、删除）要耗费时间

2、空间方面：占据实际的物理空间

> 1. 会占用空间
> 2. **更新时会级联更新索引**
> 3. **高并发写影响性能**

### 数据库索引的原理✏️

1. 以mysql为例，默认引擎InnoDB使用了b+树实现索引，在索引查找时,实现了log（n）的时间复杂度
2. 聚簇索引记录了主键id（完整数据），非聚簇索引的索引树中记录数据（索引字段+主键）
3. 在聚簇索引的叶子节点中记录了完整的值，非聚簇索引的叶子节点记录的是主键以及索引字段，如果需要完整值的话需要回表操作，即使用主键去聚簇索引中再次查找完整数据
4. 索引的叶子节点以链表的形式存储，方便顺序查找和排序

### 3.MySQL有哪几种索引类型✔

- 存储结构：BTree、Hash、full-index、R-Tree
- 应用层面：
  - 普通索引：一个索引只能包含单个列，一个表可以有多个单列索引
  - 唯一索引：索引列的值必须唯一，但允许有空值
  - 复合索引：多列值组成一个索引，用于组合搜索，效率大于搜索合并
  - 聚簇索引：在同一个结构中保存了B-Tree索引(技术上来说是B+Tree)和数据行。
  - 非聚簇索引

### 4.说一说索引的底层实现✔

- B树
  - 节点排序
  - 一个节点可以存放多个元素，多个元素也排序了
- B+树
  - 拥有B树的特点
  - 叶子节点之间有指针
  - 非叶子节点上的元素在叶子节点上都冗余了，也就是叶子节点中存储了所有的元素，并且排好顺序，B+树查找效率更加稳定
  - 在进行范围查询的时候，B+树效率更高，因为B+树都在叶子节点存储，并且叶子节点是一个双向链表
- Hash
  - 将所有的哈希码存储在索引中
  - 只有精确匹配所有列的查询才有效

### Hash索引和B+树索引的区别✔✏️

Hash索引的结构和HashMap的结构有点类似，**键值key通过hash映射到一个bucket桶里面**，桶指的是一个**能存储一条或多条记录的存储单位**，**一个桶的结构包含了一个内存指针的数组**，**桶中的每行数据都会指向下一行**，**形成一个链表结构**，当遇到Hash冲突的时候，会在桶中进行键值的查找，采用Hash进行检索的效率非常高，基本上一次检索就可以找到对应的数据

B+Tree索引结构是一个多路平衡树，**特点是根节点和分支只保存索引**，**所有的数据都存储在叶子节点**，叶子节点会包含所有的关键字，以及指向数据记录的指针，并且叶子节点本身是根据关键字的大小从小到大顺序组成一个双向链表，基于这样的特点，使得B+Tree树的高度在3~4层左右，就能够实现千万级的数据存储，以及适合对于组件范围的查找和分页查找

| Hash索引                                                 | B+Tree索引                                 |
| -------------------------------------------------------- | ------------------------------------------ |
| 哈希表结构                                               | 多路平衡树结构                             |
| **在等值查询上具有较好的性能，对范围查询和排序操作较差** | **在范围查询和排序操作上更加高效**         |
| **对磁盘存储的利用效率不高（随机存储）**                 | **节点是有序的，有利于磁盘的顺序访问**     |
| 在插入和删除操作上相对比较简单                           | 插入和删除操作更复杂（需要维护树的平衡性） |

### B树和B+树的理解✔

B树和B+树都是多路平衡树，能够在一个比较矮的层高中去存储大量的数据

**B Tree**

1. 在B树中，每个节点都包含索引及数据，所以树的层高相对来说会高一些
2. 同时在进行数据查找的时候，由于数据的存储在每个节点的，所以极端情况下要遍历整个树才能找到数据，所以查询时间的稳定性较差
3. B树的所有叶子节点都在同一层意味着从根节点到每个叶子节点的距离相等，这样可以保证无论访问哪个叶子节点，时间复杂度都是O(logn)

**B + Tree**是在B树上做的一个优化

1. **B+树的非叶子节点只存储索引，所有数据记录保存到叶子节点中**，这样可以更好的缩小树的层高，提高查询效率
2. B+树的所有叶子节点通过一个双向指针连接，使得范围查找的效率更高

### 5.为什么索引结构默认使用B+Tree，而不是B-Tree，Hash，二叉树，红黑树✔✏️

- B+Tree
  - B+Tree的内部节点没有执行关键字的具体信息的指针，内部节点相对B树更小，一次性读入内存的需要查找的关键字也就越多，相对IO读写次数就降低了
  - **B+Tree的数据都存储在叶子结点中**，这使得每个节点可以存储更多的索引值，整棵树更矮，减少了I/O次数，从而降低了磁盘读写代价。
  - B+Tree阶数更多，路径更短
  - **B+树的查询效率更加稳定**。在B+树中，顺序检索比较明显，随机检索时，由于所有数据都存储在叶子节点上，无论关键字在哪个位置，查询效率都相同。因此，时间复杂度固定为O(log n)。而在B-树中，由于非叶子节点也可能存储数据，查询时间复杂度不固定，与关键字在树中的位置有关
- Hash：
  - **没有顺序，io复杂度高**
  - **不支持范围查询**
  - 不支持部分索引列的匹配
  - 。。。
- 二叉树：不能自平衡
- 红黑树：是一颗平衡二叉树，数据量大的时候，树的深度也很深，IO代价高

### 6.讲一讲聚簇索引（聚集索引）与非聚簇索引（二级索引）✔

- 聚簇索引：B+Tree叶子节点**存储了整行数据**（主键索引），有且只有一个，一般情况下主键在作为聚簇索引的

> <font color=red>**聚集索引选取规则**</font>:
>
> 如果存在主键，主键索引就是聚集索引。
>
> 如果不存在主键，将使用第一个唯一（UNIQUE）索引作为聚集索引。
>
> 如果表没有主键，或没有合适的唯一索引，则InnoDB会自动生成一个rowid作为隐藏的聚集索引。

- 非聚簇索引：数据与索引分开存储，B+Tree叶子节点**存储了主键的值**，可以有多个，一般我们自己定义的索引都是非聚簇索引

### 什么是回表✔✏️

当查询需要返回的列不在索引页中时，就需要进行回表查询。

回表是和聚簇索引、非聚簇索引是由关系的，回表的意思就是**查询并需要返回非索引列的值时通过二级索引找到对应的主键值，然后再通过主键值找到聚集索引中所对应的整行数据**，这个过程就是回表

> 当我们在表上创建了非聚集索引（通常是B树索引）时，该索引仅包含索引列的值和指向相应行的引用。当使用这个索引来执行查询并需要返回非索引列的值时，MySQL需要通过这个引用进行额外的查找，去主键索引或聚集索引中找到完整的行数据，这个过程就被称为回表。

### 什么是覆盖索引✔

覆盖索引是指select查询语句使用了索引，**在返回的列，必须在索引中全部能够找到**，如果我们使用id查询，它会直接走聚集索引查询，一次索引扫描，直接返回数据，性能高。（覆盖索引（Covering Index）是指一个索引包含了查询所需的所有列，而无需回表到表格中进行进一步的查找。）

如果按照二级索引查询数据的时候，返回的列中没有创建索引，有可能会触发回表查询，尽量避免使用select *，尽量在返回的列中都包含添加索引的字段

> | id   | name | gender | createdate |
> | ---- | ---- | ------ | ---------- |
> | 2    | Arm  | 1      | 2021-01-01 |
> | 3    | Lily | 0      | 2021-05-01 |
> | 5    | Rose | 0      | 2021-02-14 |
> | 6    | Zoo  | 1      | 2021-06-01 |
> | 8    | Doc  | 1      | 2021-03-08 |
> | 11   | Lee  | 1      | 2020-12-03 |
>
> - id为主键，默认是主键索引
> - name字段为普通索引
>
> ```sql
> select * from tb_user where id = 1						#覆盖索引
> select id，name from tb_user where name = ‘Arm’			#覆盖索引
> select id，name，gender from tb_user where name = ‘Arm’	#非覆盖索引（需要回表查询）
> ```

### 7.非聚簇索引一定会一定会回表查询吗



### 8.联合索引是什么？为什么需要注意联合索引中的顺序



### 9.讲一讲MySQL的最左前缀原则（最左匹配原则）✔



### 10.讲一讲前缀索引



### 11.了解索引下推吗（减少回表次数）✔



### 12.怎么查看MySQL语句有没有使用到索引✔



### 13.为什么官方建议使用自增长主键作为索引



### 14.如何创建索引✔



### 15.创建索引时需要注意什么✔



### 16.建索引的原则有哪些✔



### 17.使用索引查询一定能提高查询的性能吗



### 18.什么情况下不走索引（索引失效场景）✔



## 基础

### 19.数据库的三范式是什么



### 20.MySQL支持哪些存储引擎✔



### InnoDB和MyISAM有什么区别✔



### 21.超键、候选键、主键、外键分别是什么



### 22.SQL约束有哪几种✔



### 23.MySQL中的varchar和char有什么区别✔



### 24.MySQL中in和exists区别



### 25.drop、delete与truncate的区别✔



### 26.什么是存储过程？有哪些优缺点



### 为什么阿里的java手册禁止使用存储过程



### 27.MySQL执行查询的过程✔



### 为什么不能用浮点型表示金额



### 为什么数据库字段建议设置为NOT NULL✔



## 事务

### 28.什么是数据库事务

- 从一种**一致性状态**变成另一种**一致性状态**
- 事务是逻辑上的一种操作，要么都执行，要么都不执行

### 29.介绍一下事务具有的四个特征（特性）✔

- **原子性**(Atomicity)：要么都做，要么都不做
- **一致性**(Consistency)：事务执行的结果必须是使数据库从一个一致性状态变到另一个一致性状态。
- 隔离性(Isolation)：并发执行的各个事务之间不能互相干扰
- 持久性(Durability)：它对数据库中的数据的改变就应该是永久性的

> A向B转账500，转账成功，A扣除500元，B增加500元，
>
> 原子操作体现在要么都成功，要么都失败 
>
> 在转账的过程中，数据要一致，A扣除了500，B必须增加500 
>
> 在转账的过程中，隔离性体现在A向B转账，不能受其他事务干扰 
>
> 在转账的过程中，持久性体现在事务提交后，要把数据持久化（可以说是落盘操作）

### 30.说一下MySQL的四种隔离级别✔

- 读未提交（Read Uncommitted）		有脏读、不可重复读、幻读问题
- 读已提交（Read Committed）		有不可重复读、幻读问题
- 可重复读（Repeatable Read）		**默认事务隔离级别**，有幻读问题（新增+删除）
- 可串行化（Serializable）		可以解决以上这几种问题 ，但由于让是事务串行执行的，性能比

### 31.什么是脏读、幻读、不可重复读（并发事务带来哪些问题）✔

- 脏读是一个事务回滚影响另外一个事务

  脏读是指一个事务读取了另一个事务未提交的数据。换句话说，如果事务A读取了事务B尚未提交的数据，而事务B最终回滚了，那么事务A读取的数据就是脏数据。脏数据主要发生在并发场景下，可能会引发数据一致性的问题。

- 幻读侧重于新增或删除（多了或少了行）

- 不可重复读侧重于修改

> 第一是脏读， 当一个事务正在访问数据并且对数据进行了修改，而这种修改还没有提交到数据库中，这时另外一个事务也访问了这个数据，因为这个数据是还没有提交的数据，那么另外一个事务读到的这个数据是“脏数据”，依据“脏数据”所做的操作可能是不正确的。
>
> 第二是不可重复读：比如在一个事务内多次读同一数据。在这个事务还没有结束时，另一个事务也访问该数据。那么，在第一个事务中的两次读数据之间，由于第二个事务的修改导致第一个事务两次读取的数据可能不太一样。 这就发生了在一个事务内两次读到的数据是不一样的情况，因此称为不可重复读。
>
> 第三是幻读（Phantom read）：幻读与不可重复读类似。它发生在一个事务 （T1）读取了几行数据，接着另一个并发事务（T2）插入了一些数据时。在随后的查询中，第一个事务（T1）就会发现多了一些原本不存在的记录，就好像发生了幻觉一样，所以称为幻读。

### 32.事务的实现原理✏️

- 事务是基于重做日志文件（redolog）和回滚日志（undolog）实现的
- 每提交一个事务必须先将该事务的所有日志写到redolog日志中进行持久化，保证事务的原子性和持久性
- 每当有修改事务时，会产生uodolog，如需回滚，根据undolog的方向语句进行逻辑操作，实现数据库的一致性

1. MySQL是由MVCC实现的事务控制
2. MVCC 的实现依赖于：隐藏字段、Red View、undo log
3. 在不同的事务隔离级别下通过设置readview内容，控制了哪些数据可见于不可见

### 33.MySQL事务日志介绍下（undo log和redo log的区别）✔✏️

InnoDB事务日志包括redolog和undolog

- `undolog`**指事务开始之前，在操作任何数据之前，首先将需要操作的数据备份到一个地方**。

  undo log 用来回滚行记录到某个版本。事务未提交之前，Undo 保存了未提交之前的版本数据，Undo 中的数据可作为数据旧版本快照供其他并发事务进行快照读。是为了实现事务的原子性而出现的产物,在 MySQL innodb 存储引擎中用来实现多版本并发控制。

- `redolog`**指事务中操作的任何数据，将最新的数据备份到一个地方**。

  redo log 不是随着事务的提交才写入的，而是在事务的执行过程中，便开始写入 redo 中。具体的落盘策略可以进行配置 。防止在发生故障的时间点，尚有脏页未写入磁盘，在重启 MySQL 服务的时候，根据 redo log 进行重做，从而达到事务的未入磁盘数据进行持久化这一特性。RedoLog 是为了实现事务的持久性而出现的产物。

- 事务日志的目的：实例或者介质失败，事务日志文件就能派上用场

> 其中redo log日志记录的是数据页的物理变化，服务宕机可用来同步数据，
>
> 而undo log 不同，它主要记录的是逻辑日志，当事务回滚时，通过逆操作恢复原来的数据，比如我们删除一条数据的时候，就会在 undo log日志文件中新增一条delete语句，如果发生回滚就执行逆操作；
>
> redo log保证了事务的持久性，undo log保证了事务的原子性和一致

### 34.什么是MySQL的binlog

- MySQL的`binlog`是记录所有数据库表结构变更以及表数据修改的二进制日志。`binlog`不会记录`select`和`show`这类操作，因为这类操作对数据本身并没有修改

### binlog和redolog有什么区别✔✏️

binlog和redolog都是MySQL里面**用来记录数据库变更操作的日志**，其中binlog主要用来做**数据备份、数据恢复、数据同步**，而redolog主要是在MySQL数据库事务的ACID特性里面，用来保证数据的持久化特性，数据库奔溃时，可以通过redolog来恢复未完成的数据，保证数据的完整性，还可以通过合理的配置redolog的大小和数量优化MySQL性能

**区别**

1. 使用场景不同

   binlog主要做**数据备份，数据恢复，以及主从集群的数据同步**

   redolog主要用来实现**MySQL数据库的事务恢复，保证事务的ACID特性**，当数据库出现奔溃时，Redlog可以把未提交的事务回滚，把已提交的事务进行持久化

2. 记录信息不同

   binlog是记录数据库的逻辑变化，三种日志格式statement、row、mixed

   redolog记录的是物理的变化，数据页的变化的结果

3. 记录的时机不同

   binlog是在执行SQL语句的时候，在主线程生成逻辑变化，写入到磁盘里面，**是语句级别的记录方式**

   redolog是在InnoDB存储引擎层面的操作，它是在MySQL后台线程中去生成，并写入磁盘中，**是事务级别的记录方式**，一个事务被操作完后才会写入redolog中

### 35.在事务中可以混合使用存储引擎吗✏️

- 尽量不要在同一个事务中使用多种存储引擎，MySQL服务器层不管理事务，事务是由下层存储引擎实现的。
- 正常提交的情况是不会有什么问题的，**但如果该事务需要回滚，非事务型的表上的变更就无法撤销，这会导致数据库处于不一致的状态**，这种情况很难修复，事务的最终结果将无法确定，所有选择合适的存储引擎非常重要

### 36.MySQL中是如何实现事务隔离的



### 37.什么是MVCC✔



### 38.MVCC的实现原理（事务中的隔离性是如何保证的呢）✔



### InnoDB如何解决幻读✔



## 锁

### 39.为什么要加锁



### 40.按照锁的粒度分数据库锁有哪些



### 41.从锁的类别上分MySQL那些锁呢



### 42.数据库的乐观锁和悲观锁是什么？怎么实现的✔



### 43.InnoDB引擎的行锁是怎么实现的



### 44.什么是死锁？怎么解决



### 45.隔离级别与锁的关系



### 46.优化锁的方面的意见



## 分库分表

### 47.为什么要分库分表



### 48.用过哪些分库分表中间件？不同的分库分表中间件都有什么优点

### 49.如何对数据库进行垂直拆分或水平拆分的✔



### 使用过水平分库吗✔



### 你们项目用过MySQL的分库分表吗



## 读写分离、中从同步（复制）

### 50.什么是MySQL主从同步



### 51.MySQL主从同步的目的？为什么要做主从同步✔



### 52.如何实现MySQL的读写分离



### 53.MySQL主从复制流程和原理(MySQL主从同步原理)✔



### 54.MySQL主从同步延时问题如何解决✔



## 优化

### 55.如何定位及优化SQL语句的性能问题(SQL语句执行很慢, 如何分析)✔



### 56.大数据表查询，怎么优化



### 57.超大分页怎么处理✔



### 58.统计过慢查询吗？对慢查询都怎么优化过✔



### 如何定位慢查询✔



### 59.如何优化查询过程中的数据访问



### 60.如何优化关联查询



### 61.数据库结构优化



### 62.MySQL数据库CPU飙升到500%的话他怎么处理



### 63.大表怎么优化



### SQL优化经验✔



### 优化数据库的方法有哪些✔



### limit 500000,10和limit 10速度一样快吗



### 使用innodb引擎，mysql索引的最左前缀如何优化orderby语句



## 其他

**典型的JDBC程序按(dbecfa)顺序编写( 排序)**

A.释放资源

B.获得与数据库的物理连接

C.执行SQL命令

D.注册JDBC Driver

E.创建不同类型的statement

F.如果有结果集，处理结果集

**下列语句哪一个正确(B)**

A.Java 程序经编译后会产生 machine code

> 在CPU上执行的指令集，0101...

B.Java 程序经编译后会产生 byte code

> 字节码

C.Java 程序经编译后会产生 DLL

> 动态链接库

D.以上都不正确