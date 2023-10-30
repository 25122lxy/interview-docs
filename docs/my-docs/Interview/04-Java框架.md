# Java框架

## Spring 

### 1.使用Spring框架的好处是什么（为什么要用Spring框架）✔

- 轻量、控制反转、面向切面编程（AOP）、容器（IOC）、**MVC框架**、事务管理、异常处理

> - 控制反转(IoC=InversionofControl)IoC，用白话来讲，就是由容器控制程序之间的（依赖）关系，而非传统实现中，由程序代码直接操控。这也就是所谓“控制反转”的概念所在：(依赖)控制权由应用代码中转到了外部容器，控制权的转移，是所谓反转。
> - IoC还有一个另外的名字：“依赖注入(DI=DependencyInjection)”，即由容器动态的将某种依赖关系注入到组件之中

Spring是一个轻量级的应用框架，ta提供了IOC和AOP两个核心功能

它的核心目的：

- 简化企业级应用程序的开发

  使得开发者只需要关心业务需求，不需要关心Bean的管理

- 通过切面增强功能减少代码的侵入性

从Spring本身特性来看：

- 轻量级

  Spring是一个轻量级框架，它的基本的版本大约2MB

- IOC/DI

  Spring通过IOC容器来实现Bean的生命周期的管理以及通过DI来实现依赖注入，从而实现对向依赖的松耦合管理

- 面向切面编程（AOP）

  Spring支持面向切面编程，从而把应用业务逻辑和系统服务分开，

- MVC框架

  SpringMVC提供了功能更加强大且更加灵活的Web框架支持

- 事务管理

  Spring通过AOP实现了事务的统一管理，对应用开发中的事务处理提供了非常灵活的支持

- Spring从第一个版本发布到现在，整个生态已经非常庞大了，在业务开发领域，Spring生态几乎提供了非常完善的支持， 更重要的是社区的活跃度和技术成熟度都非常高

### 2.什么是SpringIOC容器✔

Spring容器使用依赖注入来管理组成应用程序的组件。

- 控制对象的创建，控制对象内属性的赋值（控制）
- 我们不需要手动创建对象，仅仅需要定义类和相关属性即可，加上注解，交给Spring帮我们创建对象及赋值（反转）
- 总结：IOC表示**控制反转**，表示如果用Spring，那么Spring会负责来创建对象，以及给对象内的属性赋值，也就是如果用Spring，那么对象的控制权会交给Spring

### 3.什么是依赖注入？可以通过多少种方式完成注入✔✏️

- 依赖注入是指将依赖的对象实例交给spring帮我们注入管理，从而释放对对象的管理权，比如可以统一替换接口的实现，更高效的开发程序

  是指在程序运行过程中，需要对象协作时，无需在代码中创建对象，通过ioc容器将他们装配在一起

- 构造函数注入、setter注入、（接口）、@Autowire自动注入

### 4.区分BeanFactory和ApplicationContext✔❤

ApplicationContext是BeanFactory的子接口

- `BeanFactory`
  - 使用懒加载、不支持国际化、不支持依赖注解、（使用语法显式提供资源对象）
  - 优点：启动时资源占用少
  - 缺点：运行速度相对较慢，可能存在空指针异常
- `ApplicationContext`
  - 即使加载、( 继承MessageSource)**支持国际化**、**支持依赖注解**、（自己创建和管理资源对象）
  - 优点：所有bean在启动时就进行了加载，系统运行的速度快；在启动时，可以发现系统中的配置问题
  - 缺点：所有对象进行了预加载，内存占用较大

### 5.区分构造函数注入和setter注入

| 构造函数注入                             | setter注入                 |
| ---------------------------------------- | -------------------------- |
| **<font color=blue>没有部分注入</font>** | 有部分注入                 |
| 不会覆盖setter属性                       | 会覆盖setter属性           |
| 任意修改都会创建一个新实例               | 任意修改不会创建一个新实例 |
| 适用于设置很多属性                       | 适用于设置很少属性         |

### 6.Spring提供了那些配置方式

- 基于xml配置
- 基于注解配置
- 基于JavaAPI配置`@Bean 和 @Configuration`

### 7.Spring中的bean的作用域有哪些（Spring支持几种beanscope）✔✏️

- `singleton`唯一bean实例，Spring中bean默认都是单例的，每个容器只有一个bean的实例（单实例）
- `prototype`每次注入时都会创建一个新的对象（多实例）
- `request`每一次HTTP请求都会产生一个新的bean，该bean仅在当前HTTP request内有效。
- `session`在一个HTTP Session中，一个Bean定义对应一个实例。该作用域仅在基于web的Spring ApplicationContext情形下有效。
- `global-session`全局session作用域

仅当用户使用支持 Web 的 ApplicationContext 时，最后三个才可用。

### 8.如何理解IOC和DI




### 9.将一个类声明为Spring的bean的注解有哪些



### 11.Spring中的bean生命周期✔



### 12.什么是Spring的内部bean



### 13.什么是Spring装配✔



### 14.自动装配有什么局限？



### 15.Spring中出现同名bean怎么办



### 16.Spring怎么解决循环依赖问题✔？



### Spring中的循环引用✔



### 循环依赖具体解决流程✔



### 构造方法出现了循环依赖怎么解决✔



### 17.Spring中的单例bean的线程安全问题✔



### 18.什么是AOP✔



### AOP的使用情景有哪些?简述其实现原理✔



### 你们项目中有没有使用到AOP



### 19.Aop有哪些实现方式




### 20.Spring Aop and AspectJ Aop有什么区别



### 21.Spring框架中用到了那些设计模式✔



### 22.Spring事务实现方式有哪些（如何实现）✔



#### 在如下代码中，当调用insertA 方法的时候，如果insertB 插入b表的时候有异常，能否保证 insertA中的a 表插入成功，如果不能，应该如何修改

```java
@Service
@Transactional
public class TestService{
    @Autowired
    private JdbcTemplate jt;

    public void insertA(){
        jt.execute("insert into a(m,n) values(1,2)");
        insertB();
    }

    public void insertB(){
        jt.execute("insert into b(h,j) values(1,2)");
    }
}
```



### 23.Spring框架的事务管理有哪些优点



### 24.Spring事务定义的传播规则✔



### 25.SpringMVC工作原理了解吗✔



### 26.简单介绍SpringMVC的核心组件✔



### 27.`@Controller`注解有什么用



### 28.`@RequestMapping`注解有什么用



### 29.@RestController 和 @Controller 有什么区别



### 30.@RequestMapping 和 @GetMapping 注解的不同之处在哪里



### 31.`@RequestParam`和`@PathVariable`两个注解的区别



### 32.返回 JSON 格式使用什么注解



### 33.什么是SpringMVC拦截器以及如何使用它✔



### 34.SpringMVC和Structs2的异同



### 35. REST 代表着什么 




### 36. 什么是安全的 REST 操作



### 37. REST API 是无状态的吗



### 38. REST安全吗? 你能做什么来保护它  



### 39.为什么要用SpringBoot✔✏️

- **快速创建**独立 Spring 应用<font color=red>**-简化开发**</font>
  - SSM：导包、写配置、启动运行
- 直接**嵌入**Tomcat、Jetty or Undertow（无需部署 war 包）【Servlet容器】<font color=red>**-简化部署**</font>
  - linux java tomcat mysql： war 放到 tomcat 的 webapps下
  - jar： java环境； java -jar
- **重点**：提供可选的starter，简化应用**整合**<font color=red>**-简化整合**</font>
  - **场景启动器**（starter）：web、json、邮件、oss（对象存储）、异步、定时任务、缓存...
  - 导包一堆，控制好版本。
  - 为每一种场景准备了一个依赖； **web-starter。mybatis-starter**
- **重点**：按需自动配置 Spring 以及 第三方库<font color=red>**-简化配置**</font>
  - 如果这些场景我要使用（生效）。这个场景的所有配置都会自动配置好。
  - **约定大于配置**：每个场景都有很多默认配置。
  - 自定义：配置文件中修改几项就可以
- 提供生产级特性：如 监控指标、健康检查、外部化配置等<font color=red>**-简化监控、简化运维**</font>
  - 监控指标、健康检查（k8s）、外部化配置
- 无代码生成、无xml

总结：简化开发，简化配置，简化整合，简化部署，简化监控，简化运维。

### SpringBoot中约定优于配置的理解✏️

- 约定优于配置是一种软件设计范式。

  **核心思想是减少开发人员对于配置项的维护，从而让开发人员更加聚集在业务逻辑上**

- SpringBoot就是约定优于配置这一理念下的产物，类似于Spring框架中的一个脚手架，通过SpringBoot可以**快速开发基于Spring生态下的应用程序**

- 基于传统的Spring框架开发web应用，需要做很多和业务开发无关的并且只做一次的配置

  比如：**管理jar包依赖、web.xml维护、Dispatch-servlet.xml配置项的维护、应用部署到web容器、第三方Ioc容器中的配置项维护**

  在SpringBoot中不需要再次做这些繁琐的配置，SpringBoot已经完成

- 默认加载配置文件Application.yml等等

### 40.SpringBoot中如何对不同环境的属性配置文件的支持

- `application.properties`文件中添加`spring.profiles.active=test`

### 41.Spring Boot 的核心注解是那个？它主要由那几个注解组成的✔

- `@SpringBootApplication`这个注解标识了一个SpringBoot工程，实际上也是另外三个注解的组合
  - `@SpringBootConfiguration`配置文件（实际就是一个`@Configuration`，表示启动类也是一个配置类）
  - **`@EnableAutoConfiguration`**打开自动配置
  - **`@ComponentScan`**spring组件扫描
- `@Bean`注解：定义Bean，通过执行方法得到你的bean对象
- `@Controller`，`@Service`，`@ResponseBody`，`@Autowired`等

### 42.你如何理解SpringBoot中的Starters✔

- 启动器

### 43.SpringBoot Starter的工作原理是什么

- 读取配置信息
- 对资源进行初始化
- 直接注入对应的bean资源

### 44.保护SpringBoot应用有哪些方法

- 生成中使用HTTPS
- 升级到最新版本
- 使用Snyk检查你的依赖关系
- 启用CSRF保护
- 使用内容安全策略防止XSS攻击

### 45.Spring、SpringBoot和SpringCloud的关系



### springboot是如何管理版本依赖的

关键点：

1.maven

2.springboot pom.xml 父子关系

3.spring-boot-starter

答：



### SpringBoot自动配置机制



### Springboot自动配置原理✔



**什么是起步依赖**



### SpringBoot如何解决跨域问题✔



### 如何实现一个IOC容器  



### Spring单例bean和单例模式



### Spring事务什么时候会失效（Spring中事务失效的场景有哪些）✔



### 为什么有些公司禁止使用@Transactional声明式事务✔



### Spring是什么



### Spring Boot是如何启动Tomcat的  

### Spring Boot中配置⽂件的加载顺序是怎样的



### @Component和@Bean区别✔



### Spring 的常见注解有哪些✔



### SpringMVC常见的注解有哪些✔



### Springboot常见注解有哪些✔



## Mybatis

### 1.Mybatis是什么



### 2.Mybatis的优缺点✔




### 3.为什么说Mybatis是半自动ORM映射工具？它与全自动的区别在哪里



### 4.Hibernate和MyBatis的区别✔



### 5.JDBC编程有哪些不足之处，Mybatis是如何解决这些问题的




### 6.Mybatis编程步骤是什么样的



### 8.Mybatis的优点



### 9.Mybatis框架的缺点



### Mybatis是如何进行分页的✔



### 10.Mybatis中#{}和${}的区别✔



### 11.通常一个XML映射文件，都会写一个Dao接口与之对应，那么这个Dao接口的工作原理是什么？Dao接口里的方法、参数不同时，方法能重载吗



### 12.在Mapper中如何传递多个参数



### 13.Mybatis动态SQL有什么用？执行原理是什么？有哪些动态SQL



### 14.XML映射文件中，不同的xml映射文件id是否可以重复



### 15.Mybatis实现一对一有几种方式？具体是怎么操作的



### 16.Mybatis的一级、二级缓存（缓存机制）✔



### Mybatis的二级缓存什么时候会清理缓存中的数据✔



### 18.使用Mybatis的Mapping接口调用时有哪些要求



### Mybatis的执行流程✔



### Mybatis是否支持延迟加载✔



### 延迟加载的底层原理知道吗



## Other

### jsp的8个隐含对象有哪些

jsp本质上就是servlet

**1 pageContext**

类型：PageContext

代表：当前页面的上下文

作用：可以获取到页面中的其他隐含对象，同时它还是一个域对象。

**2 request**

类型：HttpServletRequest

代表：请求

作用：可以获取用户发送的请求信息，它也是一个域对象。

**3 session**

类型：HttpSession

代表：当前会话

作用：可以作为域对象，用来共享数据。

**4 application** 

类型：ServletContext

代表：代表整个WEB应用

作用：是JavaWeb中最大的域对象。

**5 response**

类型：HttpServletResponse

代表：响应

作用：向浏览器发送响应信息

**6 out**

类型：JspWriter

代表：输出流

作用：可以向页面输出内容

**7 config**

类型：ServletConfig

代表：当前JSP的配置信息

作用：可以获取到Servlet标签中初始化参数

**8 page**

类型：Object 在service方法中有如下代码 Object page = this;

代表：代表当前JSP的对象

**9 exception**

类型：Throwable

代表：异常信息

作用：获取页面中的异常

### JDBC连接数据库步骤

![image-20230922095746828](https://gitee.com/tjlxy/img/raw/master/image-20230922095746828.png)