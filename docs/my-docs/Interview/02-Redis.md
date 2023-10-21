# Redis

## Redis基础

### 1.Redis是什么？简述它的优缺点✔

Redis是一个key-value类型的内存数据库，<font color=red>**整个数据库加载在内存当中操作，定期通过异步操作把数据库中的数据flush到硬盘上进行保存**</font>

优点：

1、基于内存，读写性能极高，（110000/s、80000/s）

2、丰富的数据结构：字符串、哈希、集合、有序集合、列表

3、支持**持久化**：AOF、RDB

4、**支持事务**

5、支持主从复制

6、发布订阅

7、分布式锁

缺点：

1、不适合海量数据的高性能读写，压垮内存

2、主从架构，**降低了系统的可用性**（**主机宕机造成数据不一致问题**）

### 2.Redis为什么这么快✔

1、基于内存存储，没有磁盘上的开销

2、单线程实现，单线程处理请求，避免的多个线程之间线程切换和锁资源争用的开销

**3、非阻塞IO，使得处理大量并发请求而不会出现阻塞情况**

4、提供了多种数据结构，并对每种数据结构进行了高度优化

5、内部使用的底层模式不同，实现了多种优化机制

### 3.Redis相比Memcached有哪些优势



### 4.为什么要用redis做缓存



### 5.为什么要用redis而不用map/guava做缓存



### 6.Redis的常用场景有哪些✔




### 7.Redis的数据类型有哪些



### Redis大key怎么处理✔



## 持久化

### 8.Redis持久化机制✔



### 9.如何选择合适的持久化方式  



### 10.Redis持久化数据和缓存怎么做扩容



## 过期键的删除策略、淘汰策略

### 11.Redis过期键的删除策略✔



### 12.Redis key的过期时间和永久有效分布怎么设置



### 13.Redis内存淘汰策略✔（缓存过多，内存是有限的，内存被占满了怎么办）



## 缓存异常

### 14.如何保证缓存与数据库双写时的数据一致性✔❤



### 17.什么是缓存击穿✔❤



### 18.什么是缓存穿透✔



### 19.什么是缓存雪崩✔



### 20.什么是缓存预热



### 21.什么是缓存降级



## 线程模型

### 22.Redis为何选择单线程



### 23.Redis真的是单线程



### 24.Redis6.0为何引入多线程



### 25.Redis6.0采用多线程后，性能提升效果如何

### 26.介绍下Redis的线程模型

### 27.Redis 6.0 多线程的实现机制

### 28.Redis6.0开启多线程后，是否会存在线程并发安全问题



### 29.Redis6.0与Memcached多线程模型的对比



## 事务

### 30.Redis事务的概念



### 31.Redis事务的三个阶段



### 32.Redis事务相关命令



### 33.Redis事务支持隔离性吗



### 34.Redis为什么不支持事务回滚



### 35.Redis事务其他实现

## 主从、哨兵、集群

### 36.Redis常见使用方式有哪些✔



### 37.介绍下Redis的单副本



### 38.介绍下Redis多副本（主从）✔



### 介绍一下主从同步✔



### 主从同步数据的流程✔



###  39.介绍下Redis Sentinel（哨兵）✔



### 怎么保证Redis的高并发高可用✔



### 使用redis是单点还是集群，哪种集群✔



### redis集群脑裂，该怎么解决呢✔



### 40.介绍下Redis Cluster （分片集群）✔



### redis的分片集群有什么作用✔



### Redis分片集群中数据是怎么存储和读取的✔



### 41.介绍下Redis自研



### 42.Redis高可用方案具体怎么实施✔



### 43.了解主从复制原理吗✔❤



### 44.由于主从延迟导致读取到过期数据怎么处理



### 45.主从复制的过程中，如果因为网络原因停止复制了会怎么样



### 46.Redis主从架构数据会丢失吗，为什么



### 47.如何解决主从架构数据丢失的问题



### 48.Redis哨兵是怎么工作的

### 49.故障转移时会从剩下的slave选举一个新的master，被选举为master的标准是什么



### 50.同步配置的时候其他哨兵根据什么更新自己的配置呢

### 51. 为什么Redis哨兵集群只有2个节点无法正常工作



### 52.Redis cluster中是如何实现数据分布式的？这种方式有什么优点

### 53.Redis cluster节点间通信是什么机制

## 分布式问题

### 54.什么是分布式锁？为什么用分布式锁



### 55.常见的分布式锁有哪些解决方案



### 56.Redis实现分布式锁✔



### 57.了解RedLock吗

### 58.RedLock的原理

## 其他

### 59.Redis如何做内存优化



### 60.如果现在有个读超高并发的系统，用Redis来抗住大部分读请求，你会怎么设计

### 怎么使用Redis实现一个延时队列✔





 