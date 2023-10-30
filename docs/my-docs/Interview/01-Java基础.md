# Java基础

## Java概述

### 1.Java语言有哪些特点

1、面向对象：封装、继承、多态

2、一次编译、到处运行（跨平台）

3、支持多线程

4、支持网络编程

5、可靠性、安全性

6、<font color=red>**解释与编译共存**</font>

### 2.Java和C++有什么关系，它们有什么区别

1、Java没有明确的指针概念；而C++存在指针

2、Java支持单继承、多实现；而C++支持多继承

3、Java有自动回收垃圾机制；C++需要开发人员手动管理内存

4、Java不支持操作符重载；C++支持操作符重载

5、Java没有goto语句

6、**Java是完全面向对象；C++更加偏向面向过程**

### 3.JVM、JRE和JDK的关系是什么✔

**JDK=JRE+开发工具集（编译工具：将Java代码编译成字节码）**

**JRE=JVM（执行Java字节码）+Java类库**

### 4.什么是字节码？采用字节码的好处是什么✔

编译器将Java源文件（`.java`）编译成字节码文件（`.class`）

1、<font color=red>**编译生成固定格式的字节码供JVM使用**</font>，一次编译，到处运行（**实现了跨平台**）

2、提高**代码执行的性能**

### 5.OracleJDK和OpenJDK的区别是什么

| OracleJDK                                  | OpenJDK                                          |
| ------------------------------------------ | ------------------------------------------------ |
| 三年发布一次                               | 三个月发布一次                                   |
| 不是完全开源                               | 完全开源                                         |
| 性能更好、更稳定                           | 相对来说，性能没有OracleJDK好，没有OracelJDK稳定 |
| **不提供长期支持，每次必须更新到最新版本** | **提供长期支持**                                 |

## 基础语法

### 6.Java有哪些数据类型✔

**1、基本数据类型**

1）数值型

- 整型

  - 字节型：`byte`（1）

  - 短整型：`short`（2）

  - 整型：`int`（4）

  - 长整型：`long`（8）

- 浮点型
  - 单精度：`float`（4）
  - 双精度：**`double`**（8）

2）字符型：`char`（2）

3）布尔型：`boolean`（1）

**2、引用数据类型**

1）类`class`

2）数组`[]`

3）接口**`interface`**

### 7.Switch是否能作用在byte上，是否能作用在long上，是否能作用在String上

- Java5之前byte、short、char、int
- Java5开始+enum
- Java7开始+String
- 长整型（long）在目前所有的版本中都是不可以的

### 8.访问修饰符public、private、protected、以及不写（默认）时的区别

- `private`：**当前类**
- `default`：当前类、**同一包**（+同一包子类）
- `protected`：当前类、同一包（+同一包子类）、**不同包的子类**
- `public`：当前类、同一包（+同一包子类）、不同包的子类、**同一工程**	

### 9.break，continue，return的区别及作用✔

- `break`：结束当前循环体
- `continue`：结束正在执行的循环体，进入下一个循环条件
- `return`：结束当前的方法，直接返回

### 10.final、finally、finalize的区别✔

- `final`：修饰类、方法、变量
- `finally`：异常处理的一部分，通常情况一定执行
- `finalize`：是`java.lang.Object`里定义的方法，在gc启动，垃圾回收时调用

## 关键字

### 11.为什么要用static关键字

只想为特定域分配单一存储空间，不考虑创建多少对象或者说根本不创建任何对象，再就是我们想要**在没有创建对象的情况下也想调用方法**

### 12."static"关键字是什么意思？Java中是否可以覆盖（override）一个private或者是static的方法✏️

- **表明一个成员变量或者是成员方法可以在没有所属的类的实例变量的情况下被访问**
- 不可以覆盖，因为方法覆盖是基于运行时动态绑定的，而static方法是编译时静态绑定的。static方法跟类的任何实例都不相关，所以概念上不适用

### 13.是否可以在static环境中访问非static变量

不可以，static是静态绑定的，随着类的加载而加载，非static变量可能还没有创建出来

### 14.static静态方法能不能引用非静态资源

- 不能，new 的时候才回出现的东西，对于初始化后就存在的静态资源来说，根本不认识它

### 15.static静态方法里面能不能引用静态资源

- 可以

### 16.非静态方法里面能不能引用静态资源

- 可以

### 17.Static静态代码块、构造代码块、普通代码块、构造函数的执行顺序是什么✏️

- 基本上代码块分为三种：Static静态代码块、构造代码块、普通代码块
- 代码块执行顺序**静态代码块——> 构造代码块 ——> 构造函数——> 普通代码块**
- 继承中代码块执行顺序：**父类静态代码块——>子类静态代码块——>父类构造代码块——>父类构造函数——>子类构造代码块——>子类构造函数——>父类普通代码块——>子类普通代码块**

## 面向对象

### 18.面向对象和面向过程的区别✔✏️

1、面向对象

- 简单来说，面向对象的开发范式中，程序员将问题分解成一个一个步骤，对每个步骤进行相应的抽象，形成对象，通过不同对象之间的调用，组合解决问题。

  就是说，在进行面向对象进行编程的时候，要把属性、行为等封装成对象，然后基于这些对象及对象的能力进行业务逻辑的实现。

- 优点：易维护、易复用

- 缺点：性能比面向过程低

2、面向过程

- 面向过程(Procedure Oriented)是一种以过程为中心的编程思想，是一种自顶而下的编程模式。最典型的面向过程的编程语言就是C语言。

  简单来说，面向过程的开发范式中，程序员需要把问题分解成一个一个步骤，每个步骤用函数实现，依次调用即可。

- 优点：性能比面向对象高

- 缺点：没有面向对象易维护、易复用

### 19.讲讲面向对象三大特征✔

1. 封装

   - 把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏
   - 简单的说，一个类就是一个封装了数据以及操作这些数据的代码的逻辑实体。**在一个对象内部，某些代码或某些数据可以是私有的，不能被外界访问。通过这种方式，对象对内部数据提供了不同级别的保护，以防止程序中无关的部分意外的改变或错误的使用了对象的私有部分。**

2. 继承

   - 继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。

     通过继承创建的新类称为“子类”或“派生类”，被继承的类称为“基类”、“父类”或“超类”。继承的过程，就是从一般到特殊的过程。

     子类可以通过继承获得父类的非私有属性和非私有方法

3. 多态

   - 父类中定义的属性和方法被子类继承之后，具有不同的行为，或者说在各个子类中具有不同的含义的行为
   - 多态机制使具有不同内部结构的对象可以共享相同的外部接口。

### 20.Java语言是如何实现多态的

- 编译时多态
  - 重载。。
- 运行时多态

**我们通常所说的多态指的都是运行时多态，也就是编译时不确定究竟调用哪个具体方法，一直延迟到运行时才能确定。**

Java实现多态有 3 个必要条件：继承、重写和向上转型。只有满足这 3 个条件，开发人员才能够在同一个继承结构中使用统一的逻辑实现代码处理不同的对象，从而执行不同的行为。

- 继承：在多态中必须存在有继承关系的子类和父类。
- 重写：子类对父类中某些方法进行重新定义，在调用这些方法时就会调用子类的方法。
- 向上转型：在多态中需要将子类的引用赋给父类对象，只有这样该引用才既能可以调用父类的方法，又能调用子类的方法。

```java
public class Parent{
    
    public void call(){
        sout("im Parent");
    }
}

public class Son extends Parent{// 1.有类继承或者接口实现
    public void call(){// 2.子类要重写父类的方法
        sout("im Son");
    }
}

public class Daughter extends Parent{// 1.有类继承或者接口实现
    public void call(){// 2.子类要重写父类的方法
        sout("im Daughter");
    }
}

public class Test{
    
    public static void main(String[] args){
        Son p = (Son) new Parent(); //3.父类的引用指向子类的对象
        Daughter p1 = (Daughter) new Parent(); //3.父类的引用指向子类的对象
    }
}
/**
 *这样，就实现了多态，同样是Parent类的实例，p.call 调用的是Son类的实现、p1.call调用的是Daughter的实现。
 *
 *有人说，你自己定义的时候不就已经知道p是son，p1是Daughter了么。但是，有些时候你用到的对象并不都是自己声明的。
 *
 *比如Spring 中的IOC出来的对象，你在使用的时候就不知道他是谁，或者说你可以不用关心他是谁。根据具体情况而定。
 */
```

### 21.重载（Overload）和重写（Override）的区别是什么✔



### 22.重载的方法能否根据返回值类型进行区分



### 23.构造器（constructor）是否可被重写（override）



### 24.抽象类和接口的区别是什么✔



### 25.抽象类能使用final修饰吗



### 26.java创建对象有哪几种方式



### 对象的创建过程✔❤



### 27.什么是不可变对象?好处是什么



### 28.值传递和引用传递的区别的什么？为什么说Java中只有值传递✔



### 29.能否创建一个包含可变对象的不可变对象



## 对象相等判断

### 30.==和equals区别是什么✔



### 31.介绍下hashCode()



### 32.为什么要有hashCode



### 33.hashCode(),equals()两种方法是什么关系✔



### 34.为什么重写equals方法必须重写hashcode方法✔



## String相关

### 35.String,StringBuffer,StringBuilder的区别是什么✔



### 36.String为什么要设计成不可变的✔❤



### 37.字符型常量和字符串常量的区别




### 38.什么是字符串常量池



### 39.String str="aaa"与String str=new String("aaa")一样吗




### new String("abc")到底创建了几个对象✔



### 40.String是最基本的数据类型吗

### 41.String有哪些特性



### 42. 在使用 HashMap 的时候，用 String 做 key 有什么好处



## 包装类型

### 43. 包装类型是什么？基本类型和包装类型有什么区别



###   44. 解释一下自动装箱和自动拆箱✔



### 45. int 和 Integer 有什么区别✔



### Java为什么设计封装类



### 46. 两个new生成的Integer变量的对比  



### 47. Integer变量和int变量的对比  



### 48. 非new生成的Integer变量和new Integer()生成变量的对比 



### 49. 两个非new生成的Integer对象的对比✔



### 为什么阿里巴巴强制要求使用包装类型定义属性



## 反射

###  50. 什么是反射✔

1、在运行状态中，对于任意一个类，都能够知道它的所有属性和方法

2、对于一个对象，可以调用它的属性和方法

**这种动态获取的信息以及动态调用对象的方法的功能称为反射机制**。

### 51.反射机制的优缺点有哪些✔

优点：能够动态获取类的实例，提供灵活性

缺点：1、性能较低，需要解析字节码，将内存中的对象进行解析

​			2、<font color=red>**可读性下降**</font>


### 52. 如何获取反射中的Class对象

1、`class.forname("类名全路径")`

2、`类名.class`

3、`对象名.getClass()`

4、<font color=red>**如果是基本类型的包装类，可以调用包装类的Type属性来获得该包装类的Class对象**</font>

eg:`Class intClass = Integer.TYPE;`

### 53. Java反射API有几类

1、<font color=red>**Class类**</font>

2、Construct类

3、Method类

4、Filed类

### 54. 反射使用的步骤✏️

1、获取目标类的Class对象（三种方式）

2、调用Class类中的方法

- `getFields()`：获取类的公共字段
- `getDeclaredFields()`：获取类的所有字段（包括私有字段）
- `getMethods()`：获取类的公共方法
- `getDeclaredMethods()`：获取类的所有方法（包括私有方法）

3、使用反射Api进行操作

- 实例化对象：调用Class对象的`newInstance()`方法
- 调用方法：使用Method对象的`invoke()`方法
- 访问字段：使用Field对象的`set()`和`get()`方法

### 55. 为什么引入反射概念？反射机制的应用有哪些✏️

反射机制允许程序在运行时**获取和操作**其自身的信息，包括类、对象、属性、方法等

1、动态获取类和对象的信息

2、动态加载类和对象的方法

3、运行时注解处理：反射机制可以与注解配合使用，动态地读取类和方法上的注解信息，并根据注解信息做出相应的处理。这在很多框架和库中广泛应用，比如JUnit测试框架中的@Test注解，Spring框架中的依赖注入等。

4、动态代理：通过反射，可以在运行时生成代理对象，使得可以在不修改原有代码的情况下增加额外的处理逻辑。这在AOP编程中经常使用，可以实现诸如日志记录、性能监控等横切关注点的统一处理

### 56. 反射机制的原理是什么❤✏️

1、获取目标类的Class对象

2、根据Class对象实例获取Construct对象

3、使用Construct对象的newInstance()方法获取反射类对象

4、使用Class对象实例获取Method对象

5、根据Method实例调用invoke()方法

```java
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

class MyClass {
    private String message;

    public MyClass() {
        this.message = "Hello, World!";
    }

    public void printMessage() {
        System.out.println(message);
    }

    public void printMessage(String name) {
        System.out.println("Hello, " + name + "!");
    }
}

public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        // 获取Class对象实例
        Class<?> clazz = MyClass.class;

        // 根据Class对象实例获取Constructor对象
        Constructor<?> constructor = clazz.getConstructor();

        // 使用Constructor对象的newInstance()方法获取反射类对象
        Object obj = constructor.newInstance();

        // 根据Class对象实例获取Method对象
        Method printMessageMethod = clazz.getMethod("printMessage");
        Method printMessageWithNameMethod = clazz.getMethod("printMessage", String.class);

        // 调用invoke()方法
        printMessageMethod.invoke(obj);
        printMessageWithNameMethod.invoke(obj, "Alice");
    }
}
//在上面的示例中，首先通过MyClass.class获取了对应的Class对象实例。接着使用getConstructor()方法获取默认的构造函数的Constructor对象。然后可以使用newInstance()方法创建一个MyClass的实例对象。

//之后，通过getMethod()方法分别获取了printMessage()和printMessage(String)这两个方法的Method对象。最后，通过invoke()方法调用这两个方法，并传入对应的参数。

//运行上述代码，将会输出以下结果：

//Hello, World!
//Hello, Alice!
//这样就完成了通过反射获取类实例、构造函数和方法，并进行调用的过程。
```

### 57. Java中的泛型是什么✔

将类型参数化，在**编译**时才确定具体的参数

### 58. 使用泛型的好处是什么

- 类型安全：防止在运行过程中，因为类型转换问题异常。编译时编译器并不知道类型转换是否正常，运行时才知道，不安全
- 消除强制类型转换：每次使用时都需要强制转换成想要的类型
- **潜在的性能收益**：由于泛型的实现方式，支持泛型（几乎）不需要 JVM 或类文件更改。。。

泛型最⼤的好处是可以提⾼代码的复⽤性。

### 59.Java泛型的原理是什么 ? 什么是类型擦除✏️

泛型是一种语法糖，泛型这种语法糖的基本原理是类型擦除。Java中的泛型基本上都是在编译器这个层次来实现的，也就是说：**泛型只存在于编译阶段，而不存在于运行阶段**。在编译后的 class 文件中，是没有泛型这个概念的。

类型擦除：使用泛型的时候加上的类型参数，编译器在编译的时候去掉类型参数

### 60. 什么是泛型中的限定通配符和非限定通配符✏️

**对类型进⾏限制**， 泛型中有两种限定通配符

- 限定通配符
  - `<? extends T>`即类型必须为T类型或者T子类，表示类型的下界
  - `<? super T>`即类型必须为T类型或者T的父类
- 非限定通配符
  - eg`List<?>`

### 61.List<? extends T>和List<? supere T> 之间有什么区别 ✔

- `List<? extends T>`可以接受任何继承自T 的类型的List，
- `List<? super T>`可以接受任何T的父类构成的List

### 62.可以把 `List<String>`传递给一个接受` List<Object>`参数的方法吗✔✏️

- 不可以，编译错误，真这样做的话会导致编译错误。因为`List<Object>`可以存储任何类型的对象包括String, Integer等等，而 `List<String>`却只能用来存储String。
- 如果我们成功将 `List<String>` 赋值给 `List<Object>`，然后向 `objectList` 中添加一个整数，这将导致类型不匹配的错误。因为实际上的 `objectList` 引用的是一个 `List<String>` 对象，而不是一个能够容纳任意类型对象的 `List<Object>`。

### 63.判断`ArrayList<String>`与`ArrayList<Integer>`是否相等✔

- 相等，Class类型都是`ArrayList.Class`
- **泛型只在编译期**

## 序列化

### 64.Java序列化与反序列化是什么✔

- 序列化：将对象转换为字节序列

  就是说将对象转换为可传输格式的过程。是一种数据的**持久化**手段。一般广泛用于网络传输，RMI和RPC等场景中。

- 反序列化：将字节序列转换成对象，以便能够重新恢复对象的状态。


### 65.为什么需要序列化与反序列化✏️

- 对内存中的对象进行持久化或网络传输

### 66.序列化实现的方式有哪些

- 实现`Serializable`接口或者`Externalizable`接口

### 实现序列化和反序列化为什么要实现Serializable接口✔❤✏️

在Java中实现Serializable这个接口是为了**支持对象的序列化和反序列化操作**，Serializable是Java提供的一个标记接口，它没有定义任何方法，只是起到一个标记的作用，当一个类实现了Serializable接口的时候，**表明这个类的对象可以被序列化成字节流，或者从字节流反序列化还原成对象**。

之所以要对序列化对象实现Serializable这个接口，有以下原因

1、**可以确保只有那些被设计为可序列化的类的对象才能被序列化**，这是一种类型安全性的保障，防止对不可序列化对象进行序列化操作

2、**它规范了类的行为，表示该类的对象可以被序列化**，通过判断对象是否实现了Serializable这个接口，可以遵循该规范，确保对象的序列化操作是否是合法的。

### 67.什么是`serialVersionUID`

- 表明类的不同版本间的兼容性（反序列化）

### 68.为什么还要显示指定`serialVersionUID`的值✔✏️

- 持久化（序列化、**反序列化**）

但是，**虚拟机是否允许反序列化**， 不仅取决于类路径和功能代码是否⼀致， ⼀个⾮常重要的⼀点是两个类的序列化 ID 是否⼀致， 即`serialVersionUID`要求⼀致。

在进⾏反序列化时， JVM会把传来的字节流中的`serialVersionUID`与本地相应实体类的`serialVersionUID`进⾏⽐较， 如果相同就认为是⼀致的， 可以进⾏反序列化， 否则就会出现序列化版本不⼀致的异常， 即是`InvalidCastException`。

基于以上原理， 如果我们⼀个类实现了Serializable接口， 但是没有定义`serialVersionUID`， 然后序列化。 在序列化之后， 由于某些原因， 我们对该类做了变更， 重新启动应⽤后， 我们相对之前序列化过的对象进⾏反序列化的话就会报错

### 69.`serialVersionUID`什么时候修改

### 70.Java序列化中如果有些字段不想进行序列化，怎么办



### 71. 静态变量会被序列化吗



## 异常

### 72. Error 和 Exception 区别是什么✔



### 73. 非受检查异常(运行时异常)和受检查异常(一般异常)区别是什么✔



###  74. throw 和 throws 的区别是什么✔



### 75. NoClassDefFoundError 和 ClassNotFoundException 区别✔



### 76. Java常见异常有哪些

### 77. try-catch-finally 中哪个部分可以省略



### finally块一定会执行吗



### 78. try-catch-finally 中，如果 catch 中 return 了， finally 还会执行吗



### 79. JVM 是如何处理异常的



 ### 异常代码分析✔



## IO

### 80. Java的IO 流分为几种



### 81. 字节流如何转为字符流✔



### 82. 字符流与字节流的区别



### 83. 什么是阻塞IO？什么是非阻塞IO✔



### 同步，异步 和 阻塞，非阻塞之间的区别✔



### 84. BIO、NIO、AIO的区别



### 85. Java IO都有哪些设计模式



## 补充

### 深拷贝和浅拷贝✔



### Java SPI 是什么，有什么作用



### 在java的异常处理机制中，什么时候应该抛出异常，什么时候捕获异常✔



### 面向对象



### 什么是零拷贝



### 为啥有时会出现 4.0 - 3.6 = 0.40000001 这种现象



### JDK动态代理为什么只能代理有接口的类✔



### Java有几种拷贝方式，哪一种效率最高✔



### 有哪些设计模式



### 介绍下策略模式和观察者模式



### 在Java中实现单例模式有哪些方法



### 常见的HTTP状态码：



### 其他前沿技术





