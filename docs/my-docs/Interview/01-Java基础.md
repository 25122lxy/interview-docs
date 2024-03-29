# Java基础

## Java概述

### Java语言有哪些特点

- 1、面向对象（封装、继承、多态）
- 2、平台无关性（跨平台、一次编写，到处运行）
- 3、支持多线程
- 4、支持网络编程
- 5、编译与解释共存
- 6、**可靠性、安全性**

### Java和C++有什么关系，它们有什么区别

- 1、Java没有明确的指针概念；而C++存在指针
- 2、Java支持单继承、多实现；而C++支持多继承
- 3、Java有自动回收垃圾机制；C++需要开发人员手动管理内存
- **4、Java不支持操作符重载；C++支持操作符重载**
- 5、Java没有goto语句
- 6、Java是完全面向对象；C++更加偏向面向过程

### JVM、JRE和JDK的关系是什么✔

- JDK=JRE+开发工具集（例如javac编译工具等【将java代码编译成字节码】）
- JRE=JVM【执行Java字节码】+JavaSE标准类库

### 什么是字节码？采用字节码的好处是什么✔

编译器（javac）将Java源文件（.java）文件编译成字节码文件（.class）

- 1、**编译生成固定格式的字节码（.class文件）供JVM使用**，一次编译，到处运行（实现了跨平台）
- 2、提高了代码执行的性能

### OracleJDK和OpenJDK的区别是什么

| OracleJDK                                  | OpenJDK                                          |
| ------------------------------------------ | ------------------------------------------------ |
| **<font color=red>三年发布一次</font>**    | 三个月发布一次                                   |
| 不是完全开源                               | 完全开源                                         |
| **性能更好、更稳定**                       | 相对来说，性能没有OracleJDK好，没有OracelJDK稳定 |
| **不提供长期支持，每次必须更新到最新版本** | 提供长期支持                                     |

## 基础语法

### Java有哪些数据类型✔

**基本数据类型**

- 数值型

  - 整型

    1、字节型`byte`1

    2、短整型`short`2

    3、整型`int`4

    4、长整型`long`8

  - 浮点型

    5、单精度`float`4

    6、双精度`double`8

- 7、字符型**`char`2**

- 8、布尔型**`Boolean`1**

**引用数据类型**

- 1、类 `class`
- 2、接口 `interface`
- 3、数组 `[]`

### char型变量中能不能存贮一个中文汉字

 在Java中，char类型占2个字节，而且Java默认采用Unicode编码，一个Unicode码是16位，所以一个Unicode码占两个字节，Java中无论汉字还是英文字母都是用Unicode编码来表示的。所以，在Java中，char类型变量可以存储一个中文汉字。

```java
char ch = 'hello Java';
System.out.println("char:" + ch);
```

### Switch是否能作用在byte上，是否能作用在long上，是否能作用在String上

- java5之前byte、short、char、int
- java5开始+enum
- **java7开始+String**
- 长整型(long)在目前所有的版本中都是不可以的。

### 访问修饰符public、private、protected、以及不写（默认）时的区别❗

- `private`当前类
- `default`当前类、同一包（+同一包子类）
- `protected`当前类、同一包（+同一包子类）、不同包的子类
- `public`当前类、同一包（+同一包子类）、不同包的子类、同一工程	

### break，continue，return的区别及作用✔

- break：结束当前循环体
- continue：结束正在执行的循环体，进入下一个循环条件
- return：结束当前的方法，直接返回

### final、finally、finalize的区别✔

- `final`：修饰类（不可被继承）、方法（不可被重写）、变量（不能改变）
- `finally`：异常处理的一部分，通常情况一定执行
- `finalize`：是`java.lang.Object`里定义的方法，在gc启动，垃圾回收时调用

### 我们能将int强制转换为 byte类型的变量吗？如果该值大于byte 类型的范围，将会出现什么现象

可以，我们可以做强制转换，但是在Java中，int是32位，byte是8位，如果强制做转化，int类型的高24位将会被丢弃。

## 关键字

### 为什么要用static关键字

只想为特定域分配单一存储空间，不考虑要创建多少对象或者说根本不创建任何对象，再就是我们想在没有创建对象的情况下也想调用方法

### "static"关键字是什么意思？Java中是否可以覆盖（override）一个private或者是static的方法

- **表明一个成员变量或者是成员方法可以在没有所属的类的实例变量的情况下被访问**
- 不可以覆盖，因为方法覆盖是基于运行时动态绑定的，而static方法是编译时静态绑定的。static方法跟类的任何实例都不相关，所以概念上不适用。

### 是否可以在static环境中访问非static变量

- 不可以，非static变量可能还没有创建出来

### static静态方法能不能引用非静态资源✔

不能，new的时候才会产生的东西，对于初始化后就存在的静态资源来说，根本不认识它

- 非static方法是要与对象实例息息相关的，必须在创建一个对象后，才可以在该对象上进行非static方法调用，而static方法跟类相关的，不需要创建对象，可以由类直接调用。
- 当一个static方法被调用时，可能还没有创建任何实例对象，如果从一个static方法中发出对非static方法的调用，那个非static方法是关联到哪个对象上的呢？这个逻辑是不成立的
- 因此，一个static方法内部不可以发出对非static方法的调用。

### static静态方法里面能不能引用静态资源？非静态方法里面能不能引用静态资源

都可以

### Static静态代码块、构造代码块、普通代码块、构造函数的执行顺序是什么✔

- 基本上代码块分为三种：Static静态代码块、构造代码块、普通代码块
- 代码块执行顺序**静态代码块——> 构造代码块 ——> 构造函数——> 普通代码块** 
- 继承中代码块执行顺序：**父类静态代码块——>子类静态代码块——>父类构造代码块——>父类构造函数——>子类构造代码块——>子类构造函数——>父类普通代码块——>子类普通代码块**

```java
public class Parent {

    static {
        System.out.println("静态代码块");
    }
    {
        System.out.println("构造代码块");
    }
    public Parent() {
        System.out.println("构造器");
    }
    public void test(){
        {
            System.out.println("普通代码块");
        }
    }
}
```

> **构造代码块是在类中定义的一段代码块，用于在对象创建时执行某些操作**。每次创建对象时，构造代码块会自动执行，并且在所有构造方法之前执行，可以用来初始化实例变量或执行其它必要的操作。
>
> **普通代码块是在方法或类中定义的一段代码块**，用于在程序运行时执行某些操作。普通代码块可以在方法内部定义，也可以在类中定义，但不能单独定义。普通代码块在定义后会在程序运行时被执行，可以用来初始化局部变量或执行其它必要的操作。

## 面向对象

### 面向对象和面向过程的区别✔

**面向对象**

  - 简单来说，面向对象的开发范式中，程序员将问题分解成一个一个步骤，对每个步骤进行相应的抽象，形成对象，通过不同对象之间的调用，组合解决问题。

    就是说，在进行面向对象进行编程的时候，要把属性、行为等封装成对象，然后基于这些对象及对象的能力进行业务逻辑的实现。

    - 面向对象中把某一类事物所共有的属性和行为抽象出来之后就形成了一个类，类的一个实际例子就叫对象
    - 类是具有共同属性名称和行为的一组对象的抽象，而对象则是一个类的真实例子

  - 优点：易维护、易复用

    缺点：性能比面向过程低

**面向过程**

  - 面向过程(Procedure Oriented)是一种以过程为中心的编程思想，是一种自顶而下的编程模式。最典型的面向过程的编程语言就是C语言。

    简单来说，面向过程的开发范式中，程序员需要把问题分解成一个一个步骤，每个步骤用函数实现，依次调用即可。

  - 优点：性能比面向对象高

    缺点：没有面向对象易维护、易复用

### 讲讲面向对象三大特征✔

**封装**

- 把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏
- 简单的说，一个类就是一个封装了数据以及操作这些数据的代码的逻辑实体。**在一个对象内部，某些代码或某些数据可以是私有的，不能被外界访问。通过这种方式，对象对内部数据提供了不同级别的保护，以防止程序中无关的部分意外的改变或错误的使用了对象的私有部分**。

**继承**

- 继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。
- 通过继承创建的新类称为“子类”或“派生类”，被继承的类称为“基类”、“父类”或“超类”。继承的过程，就是从一般到特殊的过程。
- 子类可以通过继承获得父类的非私有属性和非私有方法

**多态**

- 父类中定义的属性和方法被子类继承之后，具有不同的行为，或者说在各个子类中具有不同的含义的行为
- 多态机制使具有不同内部结构的对象可以共享相同的外部接口。

### Java语言是如何实现多态的✔❗

- 多态机制包括静态多态（编译时多态）和动态多态（运行时多态）

  静态多态比如说重载，动态多态一般指在运行时才能确定调用哪个方法。

- 多态实现方式：子类继承父类（extends）和类实现接口（implements）

- **多态核心之处就在于对父类方法的改写或对接口方法的实现，以取得在运行时不同的执行效果。**

- Java 里对象方法的调用是依靠类信息里的方法表实现的，对象方法引用调用和接口方法引用调用的大致思想是一样的。当调用对象的某个方法时，JVM查找该对象类的方法表以确定该方法的直接引用地址，有了地址后才真正调用该方法。

**我们通常所说的多态指的都是运行时多态，也就是编译时不确定究竟调用哪个具体方法，一直延迟到运行时才能确定。**

Java实现多态有 3 个必要条件：**继承、重写和向上转型**。只有满足这 3 个条件，开发人员才能够在同一个继承结构中使用统一的逻辑实现代码处理不同的对象，从而执行不同的行为。

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
        Parent p =  new Son(); //3.父类的引用指向子类的对象
        Parent p1 =  new Daughter(); //3.父类的引用指向子类的对象

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

### 重载（Overload）和重写（Override）的区别是什么✔

**重载**

- 在同一个类中，同一个方法名，参数个数不同，参数类型不同，顺序不同

  就是说在同一个类中，多个函数或者方法有同样的名称，但是参数列表不相同的情形，这样的同名不同参数的函数或者方法之间，互相称之为重载函数或者方法。

**重写**

- 子类继承父类后，可以对父类中同名同参数的方法，进行覆盖操作
- 返回值范围小于等于父类，抛出异常范围小于等于父类，因为不能坑die~~
- **访问修饰符范围大于等于父类**；**如果父类方法访问修饰符为private则子类就不能重写该方法**

### 重载的方法能否根据返回值类型进行区分

不能，因为调用时不指定类型信息

### 构造器（constructor）是否可被重写（override）

不能被继承，因此不能被重写

### 抽象类和接口的区别是什么✔

- 1、内部方法细节
  - 抽象类中可以作方法声明，也可以做方法实现。
  - 接口中只能存在`public static final`方法，因此接口只能做方法声明，不能做方法的实现
- 2、**成员变量类型**
  - 抽象类中成员变量可以是各种类型，
  - 接口中的成员变量只能是`public static final`
- 3、继承、实现
  - 抽象类要被子类继承，抽象类只能继承一个。
  - 接口要被子类实现，接口可以实现多个

- 4、关键字
  - 抽象类的关键字是abstract
  - 接口的关键字是interface

- 5、**<font color=red>接口中不能含有静态代码块和静态方法，而抽象类可以有静态代码块和静态方法；</font>**
- 6、抽象类可以有构造方法，接口中不能有构造方法。
- 7、抽象级别（从高到低）：接口>抽象类>实现类。
- 8、抽象类主要是用来抽象类别，接口主要是用来抽象方法功能。

### 抽象类能使用final修饰吗

- 不能，因为需要用其他类进行继承

### java创建对象有哪几种方式✔

- 1、new 创建新对象

  使用类的构造函数和 `new` 关键字来创建对象，例如：`ClassName object = new ClassName();`。

- 2、通过反射机制

  通过使用 Java 的反射 API，可以在运行时动态地创建对象。这种方式通常用于需要在运行时动态确定类名的情况。

- 3、采用 clone 机制

  如果一个类实现了 `Cloneable` 接口，就可以使用 `clone()` 方法创建该类的副本。

- 4、通过序列化机制

  通过将对象写入流中并从流中读取对象来创建对象。这种方式可以将对象保存到磁盘或通过网络传输。

- 5、使用 `newInstance()` 方法：对于那些提供默认构造函数的类，可以使用 `Class` 对象的 `newInstance()` 方法来创建对象。

### 对象的创建过程✔❤❗

- 1、类加载：当程序引用一个类时，Java虚拟机（JVM）会通过类加载器查找并加载该类的字节码文件。类加载是将类的字节码文件加载到内存，并在方法区中创建类的Class对象的过程。
- 2、分配内存：在内存中为对象分配一块连续的内存空间，用于存储对象的实例变量。
- 3、初始化零值：在内存中分配的空间被初始化为默认值，基本类型的实例变量被初始化为0或false，引用类型的实例变量被初始化为null。
- 4、设置对象头信息：在对象头中存储对象的元数据，如哈希码、GC 信息、锁状态等。
- 5、**执行构造方法**：根据对象所属类的构造方法，执行相应的构造逻辑，完成对象的初始化。构造方法的执行会对对象的实例变量进行赋值操作，可以进行自定义的初始化逻辑。
- 6、**返回对象的引用**：对象创建完成后，返回一个指向该对象的引用，可以通过该引用来访问和操作对象的实例变量和方法。

值得注意的是，Java 中的对象创建是在堆内存中完成的，而不是栈内存。栈内存只存储了对象的引用，而真正的对象实例及其数据是分配在堆内存中的。

另外，如果对象是通过关键字 `new` 创建的，则会在堆内存中分配新的对象；如果是通过反射或克隆等方式创建的对象，则会相应地调用不同的机制来完成对象的创建过程。

### 什么是不可变对象?好处是什么

- 任何修改都会创建一个新的对象（如：String、Integer）
- **<font color=red>线程安全</font>**

### 值传递和引用传递的区别的什么？为什么说Java中只有值传递✔

- **值传递**：指的是在方法调用时，传递的参数是按值的拷贝传递，传递的是值的拷贝，也就是说传递后就互不相关了。

- **引用传递**：指的是在方法调用时，传递的参数是按引用进行传递，其实传递的是引用的地址，也就是变量所对应的内存空间的地址。传递的是值的引用，也就是说传递前和传递后都指向同一个引用（也就是同一个内存空间）。

> 举例：你有一把钥匙，当你的朋友想要去你家的时候，如果你`直接`把你的钥匙给他了，这就是引用传递。
>
> 这种情况下，如果他对这把钥匙做了什么事情，比如他在钥匙上刻下了自己名字，那么这把钥匙还给你的时候，你自己的钥匙上也会多出他刻的名字。
>
> 你有一把钥匙，当你的朋友想要去你家的时候，你`复刻`了一把新钥匙给他，自己的还在自己手里，这就是值传递。
>
> 这种情况下，他对这把钥匙做什么都不会影响你手里的这把钥匙。

**<font color=red>值传递和引用传递最大的区别是传递的过程中有没有复制出一个副本来，如果是传递副本，那就是值传递，否则就是引用传递</font>。**

在Java中，其实是通过值传递实现的参数传递，只不过对于Java对象的传递，传递的内容是对象的引用

```java
//判断输出结果
//1. 引用传递
//2. 堆栈内存分析
public static void main(String args[]) {
    StringBuffer a = new StringBuffer("A");
    StringBuffer b = new StringBuffer("B");
    operater(a,b);

    System.out.println(a+" "+b);

}

public static void operater(StringBuffer x, StringBuffer y) {

    x.append(y);
    y = x;
}
//结果：AB A
```

### 能否创建一个包含可变对象的不可变对象

- `final Person[] persons = new Persion[]{}`

### Java支持多继承么,为什么

不支持多继承，原因：

- 安全性的考虑，如果子类继承的多个父类里面有相同的方法或者属性，子类将不知道具体要继承哪个。
- Java提供了接口和内部类以达到实现多继承功能，弥补单继承的缺陷。

### 接口是否可继承接口？抽象类是否可实现接口？抽象类是否可继承实体类

都可以的

## 对象相等判断

### ==和equals区别是什么✔

- 1、`==`：如果是基本数据类型，比较是值，如果是引用类型，比较的是引用地址
- 2、`equals`：具体看各个类重写`equals`方法之后的比较逻辑，比如String类，虽然是引用类型，但是String类中重写了`equals()`方法，方法内部比较的是字符串中的各个字符是否全部相等
  - 没有重写，相当于“==”
  - 重写后，一般比较对象内容

### 介绍下hashCode()？hashCode的作用是什么

- hashCode()->哈希值(散列码)->确定该对象在哈希表中的索引位置

**作用：**

- hashCode的存在主要是用于查找的快捷性，如Hashtable，HashMap等，hashCode是用来在散列存储结构中确定对象的存储地址的；
- 如果两个对象相同，就是适用于equals(java.lang.Object) 方法，那么这两个对象的hashCode一定要相同；
- 如果对象的equals方法被重写，那么对象的hashCode也尽量重写，并且产生hashCode使用的对象，一定要和equals方法中使用的一致，否则就会违反上面提到的第2点；
- 两个对象的hashCode相同，并不一定表示两个对象就相同，也就是不一定适用于equals(java.lang.Object) 方法，只能够说明这两个对象在散列存储结构中.

### 为什么要有hashCode❗

- 比较对象是否重复
- 比较对象时候，大大减少了equals()的次数，相应就大大提高了执行速度
- 【先比较hashCode，在比较equals()】

### hashCode(),equals()两种方法是什么关系✔

- 若重写`equals()`方法，必须重写`hashcode()` 方法，确保`equals()`方法判断结果为true的两个对象具备相等的`hashcode()`方法返回值【如果两个对象相同，那么他们的hashcode应该相同】
- 如果两个对象不相同，他们的hashcode可能相同

### 为什么重写equals方法必须重写hashcode方法✔

如果只重写equals方法，不重写hashCode方法。就有可能导致`a.equals(b)`这个表达式成立，但是hashCode却不同

那么这个只重写equals方法的对象在使用散列集合进行存储的时候就会出现问题，因为散列集合是使用HashCode来计算key的存储位置，如果存储两个完全相同的对象，但是有不同的hashCode，就会导致这两个对象存储在hash表的不同位置，我们想要根据这个对象去获取数据的时候，就会出现一个悖论，**一个完全相同的对象会存储在hash表的两个位置**，就会破坏约定俗成的规则，使得在程序中出现一些不可预料的错误。

### 两个对象的hashCode()相同，则 equals()是否也一定为 true

两个对象equals相等，则它们的hashcode必须相等，如果两个对象的hashCode()相同，则equals()不一定为true。

**hashCode 的常规协定：**

- 在 Java 应用程序执行期间，在对同一对象多次调用 hashCode 方法时，必须一致地返回相同的整数，前提是将对象进行 equals 比较时所用的信息没有被修改。从某一应用程序的一次执行到同一应用程序的另一次执行，该整数无需保持一致。
- 两个对象的equals()相等，那么对这两个对象中的每个对象调用 hashCode 方法都必须生成相同的整数结果。
- 两个对象的equals()不相等，那么对这两个对象中的任一对象上调用 hashCode 方法不要求一定生成不同的整数结果。但是，为不相等的对象生成不同整数结果可以提高哈希表的性能。

## String相关

### String,StringBuffer,StringBuilder的区别是什么✔

String、StringBuffer和StringBuilder都是在 Java 中用于处理字符串的类，底层是`char[]`

- 1、**不可变性**:
   - String 类是不可变的，一旦创建了一个String对象，就不能更改其内容。**每次对字符串进行修改时，都会创建一个新的字符串对象，存在内存开销**。String是final类，不能被继承
   - StringBuffer 和 StringBuilder 类是可变的，它们可以通过修改现有对象来实现字符串的操作。继承自AbstractStringBuilder
- **2、线程安全性**：
   - String 是线程安全的，因为它的不可变性保证了多个线程操作同一个字符串对象时不会产生问题。
   - StringBuffer 是线程安全的，它的方法使用了**同步锁**来确保在多线程环境下的线程安全性。
   - StringBuilder 不是线程安全的，它的方法没有使用同步锁，因此在多线程环境下使用时需要自行处理同步问题。
- 3、**<font color=red>性能</font>：**
   - 由于 String 是不可变的，每次对字符串进行修改都会创建一个新的字符串对象，这会带来较大的内存开销。
   - StringBuffer 的方法使用同步锁，保证了线程安全性，但可能会影响性能。
   - StringBuilder 不考虑线程安全，方法未使用同步锁，因此在单线程环境下执行性能更好。

### String为什么要设计成不可变的✔❤❗

保证数据的完整性、线程安全性、缓存的利用、安全性、效率优化

- 1、**保护数据的完整性**：

   不可变性确保了字符串对象的内容不会被修改。这是因为字符串被广泛用作映射关键字、缓存哈希码和网络传输中的标识符等，若可变，可能会导致数据的不一致性。

- 2、**线程安全性**：

   由于 String 对象的不可变性，多个线程可以共享同一个字符串对象，而无需担心静态条件和并发修改问题。这样简化了在多线程环境下对字符串的使用和处理，提高了线程安全性。

- 3、**缓存的利用**：

   由于 String 的不可变性，字符串对象可以被缓存，以便在需要时重复使用。例如，Java 中的字符串常量池就可以通过缓存相同的字符串值来提高内存利用率和性能。

- 4、**安全性**：

   在 Java 中，String 类作为参数传递给其他方法时，由于不可变性，你无需担心参数的值会被修改，从而增加了程序的可靠性和安全性。例如， 网络连接地址URL，文件路径path，反射机制所需要的String参数

- 5、**效率优化**：

   字符串不可变性允许进行一些额外的优化，加快了字符串的处理速度。例如，可以使用字符串的哈希值进行缓存、通过共享相同的字符串实例来节省内存，并且可以避免重复计算。

因为字符串不可变，所以可以用字符串池缓存，可以大大节省堆内存。而且还可以提前对hashcode进行缓存，更加高效

由于字符串是应用最广泛的数据结构，提高字符串的性能对提高整个应用程序的总体性能有相当大的影响。

### 字符型常量和字符串常量的区别❕

- 形式上：字符常量是单引号引起的一个字符，字符串常量是双引号引起的若干个字符；

- **含义上**：字符常量相当于一个整型值( ASCII 值),可以参加表达式运算；字符串常量代表一个地址值(该字符串在内存中存放位置，相当于对象；

- 占内存上：字符常量只占2个字节；字符串常量占若干个字节(至少一个字符结束标志) (注意: char 在Java中占两个字节)。


### 什么是字符串常量池❕

- **避免字符的重复创建，其维护了一块特殊的内存空间**
- 当需要使用字符串时，先去字符串池中查看该字符串是否已经存在，如果存在，则可以直接使用，如果不存在，初始化，并将该字符串放入字符串常量池中。

### String str="aaa"与String str=new String("aaa")一样吗

- 使用`String b = new String("aaa");`，**程序会在堆内存中开辟一片新空间存放新对象**，**同时会将”aaa”字符串放入常量池**，相当于创建了两个对象，无论常量池中有没有”aaa”字符串，程序都会在堆内存中开辟一片新空间存放新对象。 （**考虑常量池中是否有"aaa"**） 


### new String("abc")到底创建了几个对象✔

当使用`new`关键字创建字符串对象时，无论常量池中是否存在相同值的字符串，都会在堆内存中创建一个新的字符串对象。因此，即使常量池中已经存在字符串"abc"，这个语句也会创建一个新的堆对象，该对象包含与常量池中的字符串相同的值。

如果常量池中不存在相同字符串时：

- 1、在堆内存中创建了一个新的字符串对象，该对象包含值为"abc"的字符串。
- 2、在常量池中存在一个字符串"abc"的对象。

因此，如果常量池中不存在相同字符串时，总共创建了两个对象：一个位于堆中，另一个位于常量池中。

总结：如果 "abc" 的这个字符串常量在常量池中不存在，需要创建**abc 这个字符串常量、new String 实例对象**；如果 "abc" 字符串存在，只会创建一个 String 对象

### String是最基本的数据类型吗

不是

### String有哪些特性❕

- 不变性（只读）
- **常量池优化**
- final（不能被继承，提高安全性）

### 在使用 HashMap 的时候，用 String 做 key 有什么好处

- String 不可变，创建字符串时候（Hashcode值已经被缓存），不需要再次计算，相比于其他对象更快

### String类能被继承吗，为什么✔

首先，String是一个final修饰的类，final修饰的类不可以被继承。

```java
public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence {
```

**String类为什么不能被继承呢？**

有两个原因：

- 1、效率性，String 类作为最常用的类之一，禁止被继承和重写，可以提高效率。
- 2、安全性，String 类中有很多调用底层的本地方法，调用了操作系统的 API，如果方法可以重写，可能被植入恶意代码，破坏程序。

### String 类的常用方法都有那些

- indexOf()：返回指定字符的索引。
- charAt()：返回指定索引处的字符。
- replace()：字符串替换。
- trim()：去除字符串两端空白。
- split()：分割字符串，返回一个分割后的字符串数组。
- getBytes()：返回字符串的 byte 类型数组。
- length()：返回字符串长度。
- toLowerCase()：将字符串转成小写字母。
- toUpperCase()：将字符串转成大写字符。
- substring()：截取字符串。
- equals()：字符串比较。

### 如何将字符串反转呢

- 使用 StringBuilder 或 StringBuffer 的 reverse 方法，本质都调用了它们的父类 AbstractStringBuilder 的 reverse 方法实现。（JDK1.8）
- 使用chatAt函数，倒过来输出；

## 包装类型

### 包装类型是什么？基本类型和包装类型有什么区别

| 基本数据类型 | 包装类    |
| ------------ | --------- |
| byte         | Byte      |
| boolean      | Boolean   |
| short        | Short     |
| char         | Character |
| int          | Integer   |
| long         | Long      |
| float        | Float     |
| double       | Double    |

在这八个类名中，除了 Integer 和 Character 类以后，其它六个类的类名和基本数据类型一致，只是类名的第一个字母大写即可。区别如下：

- 1、包装类型可以为null，基本数据类型不可以
- 2、**包装类型可用于泛型，而基本数据类型不可以**
- 3、**基本类型比包装类型更高效**
- 4、自动装箱都是通过包装类的 `valueOf()` 方法来实现的.自动拆箱都是通过包装类对象的 `xxxValue()` 来实现的。

```java
System.out.println("基本数据类型<==>包装类");
//自动装箱 基本数据类型->包装类
Integer age1 = age;
//自动拆箱 包装类->基本数据类型
int age2 =age1;

System.out.println("基本数据类型、包装类==>String");
String s = String.valueOf(age); //基本数据类型->String
String s1 = String.valueOf(age1); //包装类->String

System.out.println("String==> 基本数据类型、包装类");
int age3 = Integer.valueOf(s); //String->基本数据类型
//int age3 = Integer.parseIns(s);
Integer age4 = Integer.parseInt(s); //String->包装类
//Integer age4 = Integer.valueOf(s); //String->包装类
```

###   解释一下自动装箱和自动拆箱✔

- 自动装箱：基本数据类型-->对象，就是将基本数据类型自动转换成对应的包装类。
- 自动拆箱：对象 --> 基本数据类型，就是将包装类自动转换成对应的基本数据类型。

```java
Integer i = 10;  //自动装箱
int b = i;     //自动拆箱
```

### int 和 Integer 有什么区别✔❗

- 1、数据类型：Integer是int的包装类，int则是java的一种基本的数据类型；

- 2、使用：Integer变量必须实例化后才能使用；int变量不需要

- 3、本质：Integer实际是对象的引用，当new一个Integer时，实际上生成一个指针指向对象，而int则直接存储数值

- 4、默认值：Integer的默认值是null，Interger使用需要判空处理。而int的默认值是0。

- 5、存储位置：Integer存储在堆内存中，int类型是直接存储在栈空间

- 6、Integer的缓存机制：为了节省内存和提高性能，Integer类在内部通过使用相同的对象引用实现缓存和重用，Integer类默认在-128 ~ 127 之间，可以通过 -XX:AutoBoxCacheMax进行修改，且这种机制仅在自动装箱的时候有用，在使用构造器创建Integer对象时无用。

```java
public static void main(String[] args){
    Integer a = 211;//相当于Integer a = Integer.valueOf(211);
    Integer b = 211;//相当于Integer b = Integer.valueOf(211);
    //比较的是对象地址，不相等

    System.out.println(a == b);//false
}
```

### Java为什么设计封装类

如：Integer、Long

Java本身是面向对象的语言，一切操作都是以对象作为基础。比如说集合里面存元素，也只支持Object类型，普通类型是无法通过集合来存储的

### 两个new生成的Integer变量的对比，Integer变量和int变量的对比  

- 1、永远不相等

- 2、会自动拆箱

### 非new生成的Integer变量和new Integer()生成变量的对比 ❕

- 非new生成的对象指的是常量池中的对象
- new生成的对象指的是堆空间的的对象
- 内存地址不同，结果为**false**

### 两个非new生成的Integer对象的对比✔❕

- 常量池【-128~127】
- **超出范围，会在堆空间中新建一个对象**

Integer是一个封装类型，对应的是一个int类型的包装，Integer对象类型对-128到127之间的数据做了一层缓存，也就是说如果Integer类型的目标值在-128到127之间，就之间从缓存中去获取Integer这样一个对象实例，并且返回，否则会创建应该新的Integer对象，这样做是减少频繁创建Integer带来的消耗，从而去提升性能，如果两个Integer类型在-128到127之间，用==判断，返回的结果则是true，否则是false。

### 为什么阿里巴巴强制要求使用包装类型定义属性❕

- 1、**默认值的问题**

   使用基本数据类型定义属性的时候，如果没有给属性赋予初始值，会使用默认值

- 2、拆箱问题

   一些场景下，如果使用基本数据类型定义属性，需要进行多次拆箱和装箱操作，会带来额外的性能开销和代码复杂度，使用包装类型可以避免这个问题，提高代码效率和可读性

- 3、java中泛型只能使用对象来存储

   如果要在泛型编程中使用基本类型，就必须使用对应的包装类型

- 4、包装类型提供了基本类型不具备的方法属性，比如`hashCode()`，`equals()`，`toString()`等	

## 反射

###  什么是反射✔

- 反射是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；

- 对于任意一个对象，都能够调用它的任意一个方法和属性；

这种动态获取的信息以及动态调用对象的方法的功能称为 Java 语言的反射机制。

### 反射机制的优缺点有哪些✔

优点：能够运行时动态获取类的实例，提高灵活性
- 1、增加程序的灵活性，可以在运行的过程中动态对类进行修改和操作
- 2、提高代码的复用率，比如动态代理，就是用到了反射来实现
- 3、可以在运行时轻松获取任意一个类的方法、属性，并且还能通过反射进行动态调用

缺点：**性能较低，需要解析字节码，将内存中的对象进行解析**
- 1、反射会涉及到动态类型的解析，所以无法对这些代码进行优化，导致性能要比非反射调用更低。
- 2、使用反射以后，代码的可读性会下降
- 3、反射可以绕过一些限制访问的属性或者方法，可能会导致破坏了代码本身的抽象性


### 如何获取反射中的Class对象✔

- 1、**`Class.forName("类名路径")`**

- 2、`类名.class`

- 3、`对象名.getClass()`

- 如果是基本类型的包装类，可以调用包装类的Type属性来获得该包装类的Class对象。

  eg:`Class intClass = Integer.TYPE;`

### Java反射API有几类❕

- Class类
- Field类
- Method类
- Constructor类

### 反射使用的步骤❕

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

### 为什么引入反射概念？反射机制的应用有哪些

反射机制允许程序在运行时**获取和操作**其自身的信息，包括类、对象、属性、方法等

1、动态获取类和对象的信息

2、动态加载类和对象的方法

3、运行时注解处理：反射机制可以与注解配合使用，动态地读取类和方法上的注解信息，并根据注解信息做出相应的处理。这在很多框架和库中广泛应用，比如JUnit测试框架中的@Test注解，Spring框架中的依赖注入等。

4、动态代理：通过反射，可以在运行时生成代理对象，使得可以在不修改原有代码的情况下增加额外的处理逻辑。这在AOP编程中经常使用，可以实现诸如日志记录、性能监控等横切关注点的统一处理

5、jdbc数据库连接、Spring框架的使用

### 反射机制的原理是什么❤❗

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

## 泛型

### Java中的泛型是什么✔❗

- 将类型参数化，其在**编译**时才确定具体的参数

> 在Java中，编译是指将源代码文件(.java)转换为可执行的字节码文件(.class)的过程，而运行则是指执行已编译的字节码文件。编译过程通常由编译器完成，Java中的编译器是javac。
>
> 在IntelliJ IDEA中，编译Java代码通常是自动完成的，当你保存文件时，IDEA会自动编译相应的Java文件。如果没有出现编译错误，你可以直接点击运行按钮来运行程序。如果有编译错误，则需要先解决这些错误才能成功运行程序。当程序成功运行后，你可以在控制台窗口中看到输出结果。

### 使用泛型的好处是什么❕

- 1、类型安全

  在编译时编译器并不知道类型转换是否正常，运行时才知道，不安全。

- 2、消除强制类型转换

  每次使用时都需要强制转换成想要的类型

- 3、潜在的性能收益

  - 由于泛型的实现方式，支持泛型（几乎）不需要 JVM 或类文件更改
  - 所有工作都在编译器中完成 
  - 编译器生成的代码跟不使用泛型（和强制类型转换）时所写的代码几乎一致，只是更能确保类型安全而已


泛型最⼤的好处是可以提⾼代码的复⽤性。 以List接⼜为例，我们可以将String、 Integer等类型放⼊List中， 如不⽤泛型， 存放String类型要写⼀个List接口， 存放Integer要写另外⼀个List接口， 泛型可以很好的解决这个问题。

### Java泛型的原理是什么? 什么是类型擦除✔❕

泛型是一种语法糖，泛型这种语法糖的基本原理是类型擦除。Java中的泛型基本上都是在编译器这个层次来实现的，也就是说：**泛型只存在于编译阶段，而不存在于运行阶段**。在编译后的 class 文件中，是没有泛型这个概念的。

类型擦除：使用泛型的时候加上的类型参数，编译器在编译的时候去掉类型参数。

eg：

```java
Class c1 = new ArrayList<Integer>().getClass();
Class c2 = new ArrayList<String>().getClass();
System.out.println(c1 == c2);
/* Output
true
*/
```

`ArrayList <Integer>` 和`ArrayList <String>` 很容易被认为是不同的类型。但是这里输出结果是true，这是因为Java泛型是使用擦除实现的，不管是`ArrayList<Integer>()` 还是`new ArrayList<String>()`，在编译生成的字节码中都不包含泛型中的类型参数，即都擦除成了ArrayList，也就是被擦除成“原生类型”，这就是泛型擦除

### 什么是泛型中的限定通配符和非限定通配符

对类型进⾏限制， 泛型中有两种限定通配符：

- 1、限定通配符
  - `<? extends T>`即类型必须为T类型或者T子类，表示类型的下界
  - `<? super T>`即类型必须为T类型或者T的父类
- 2、非限定通配符
  - eg`List<?>`

### List<? extends T>和List<? supere T> 之间有什么区别 ✔

- `List<? extends T>`可以接受任何继承自T 的类型的List，
- `List<? super T>`可以接受任何T的父类构成的List

### 可以把 `List<String>`传递给一个接受` List<Object>`参数的方法吗✔

- 不可以，编译错误，真这样做的话会导致编译错误。因为`List<Object>`可以存储任何类型的对象包括String, Integer等等，而 `List<String>`却只能用来存储String。

```java
List<Object> objectList;
List<String> stringList;
objectList = stringList; //compilation error incompatible types
//------------------------------
List<String> stringList = new ArrayList<>();
List<Object> objectList = stringList; // 假设允许这种赋值

objectList.add(123); // 试图将 Integer 添加到一个实际上是 List<String> 的列表中

```

在上述代码中，如果我们成功将 `List<String>` 赋值给 `List<Object>`，然后向 `objectList` 中添加一个整数，这将导致类型不匹配的错误。因为实际上的 `objectList` 引用的是一个 `List<String>` 对象，而不是一个能够容纳任意类型对象的 `List<Object>`。

### 判断`ArrayList<String>`与`ArrayList<Integer>`是否相等✔

- 相等，Class类型都是`ArrayList.Class`
- **<font color=red>泛型只在编译期</font>**

## 序列化

### Java序列化与反序列化是什么✔

- 1、序列化：将对象转换为字节序列

  就是说将对象转换为可传输格式的过程。 是一种数据的持久化手段。一般广泛应用于网络传输，RMI和RPC等场景中。

- 2、反序列化：将字节序列转换成对象，以便能够重新恢复对象的状态。


### 为什么需要序列化与反序列化

- 对内存中的对象进行持久化或网络传输

### 序列化实现的方式有哪些

- 实现`Serializable`接口或者`Externalizable`接口

### 实现序列化和反序列化为什么要实现Serializable接口✔❤

在Java中实现Serializable这个接口是为了**支持对象的序列化和反序列化操作**，Serializable是Java提供的一个标记接口，它没有定义任何方法，只是起到一个标记的作用，当一个类实现了Serializable接口的时候，**表明这个类的对象可以被序列化成字节流，或者从字节流反序列化还原成对象**。

之所以要对序列化对象实现Serializable这个接口，有以下原因

1、**可以确保只有那些被设计为可序列化的类的对象才能被序列化**，这是一种类型安全性的保障，防止对不可序列化对象进行序列化操作

2、**它规范了类的行为，表示该类的对象可以被序列化**，通过判断对象是否实现了Serializable这个接口，可以遵循该规范，确保对象的序列化操作是否是合法的。

### 什么是`serialVersionUID`

- 表明类的**不同版本间的兼容性**（反序列化）

### 为什么还要显示指定`serialVersionUID`的值✔

- 持久化（序列化、**反序列化**）

但是，**虚拟机是否允许反序列化**， 不仅取决于类路径和功能代码是否⼀致， ⼀个⾮常重要的⼀点是两个类的**序列化 ID** 是否⼀致， 即`serialVersionUID`要求⼀致。

在进⾏反序列化时， JVM会把传来的字节流中的`serialVersionUID`与本地相应实体类的`serialVersionUID`进⾏⽐较， 如果相同就认为是⼀致的， 可以进⾏反序列化， 否则就会出现序列化版本不⼀致的异常， 即是`InvalidCastException`。

基于以上原理， 如果我们⼀个类实现了Serializable接口， 但是没有定义`serialVersionUID`， 然后序列化。 在序列化之后， 由于某些原因， 我们对该类做了变更， 重新启动应⽤后， 我们相对之前序列化过的对象进⾏反序列化的话就会报错

### `serialVersionUID`什么时候修改

### Java序列化中如果有些字段不想进行序列化，怎么办

使用` transient  `修饰

### 静态变量会被序列化吗

- 不会，序列化是针对**对象**而言的，静态变量。。

## 异常

### Error 和 Exception 区别是什么✔

⼆者都是 Java异常处理的重要⼦类， 各⾃都包含⼤量⼦类。均继承自Throwable类。

- 1、`Error`非程序异常，指编译或者系统性错误

  java运⾏环境内部错误或者硬件问题， 不能指望程序来处理这样的问题， 除了退出运⾏外别⽆选择， 它是Java虚拟机抛出的。如OOM

- 2、`Exception`程序异常，由程序内部产生，又分为运行时异常和非运行时异常、

  表⽰程序需要捕捉、 需要处理的异常， 是由与程序设计的不完善⽽出现的问题， 程序必须处理的问题。

  - 运行时异常：编译通过，运行时错误
  - 非运行时异常：编译不通过，必须捕获或者抛出

- **常见异常**

  - NullPointExceprion空指针异常
  - OutOfMemoryError内存异常
  - IOExceptionIO异常
  - FileNotFoundException文件找不到异常
  - ClassNotFoundException类找不到异常
  - ClassCastException类型转换异常

- **关键字特点**

  - Try：可能发生的异常
  - Catch：异常类型，一旦其中一条捕获到异常，后面就不执行了,(先写子类异常，再写父类异常)
  - Finaly：通常情况下一定执行，如system.exit,等，前面终止的话finaly就不会执行了

### 非受检查异常(运行时异常)和受检查异常(一般异常)区别是什么✔

所谓受检查异常表示是在编译的时候，要强制检查的异常，这个异常需要通过 try/catch 来进行捕捉，或者通过 throws 抛出去，否则程序是无法通过编译的，而非受检查异常表示编译器可以不需要去强制检查异常，不需要去捕获。

Throw 有两个直接子类，一个是 error，一个是 exception，error表示的是程序底层或者硬件层面的一些错误，和程序本身没有什么关系，比如 OOM，不需要去检查，属于非受检查异常。而Exception 表示程序里的一些异常，是由于程序不严谨导致，比如 NullPointerException。

Exception 派生了两种异常，一种是 RuntimeException 和其他 Exception，其中 RuntimeException  是属于运行时异常，属于非受检异常，**所以除了 error，以及RuntimeException  的派生类以外，其他异常都是受检异常**

- 是否强制要求调用者必须处理此异常（强制要求，受检查异常；非强制要求，非受检查异常）
- 非受检查异常=运行时异常
- 受检查异常 = 非运行时异常（一般异常）

###  throw 和 throws 的区别是什么✔

- Throw （抛出异常）只能抛出一个具体的异常，将异常显示在当段代码
- Throws（声明异常） 可以抛出多个异常，抛给调用者，用来声明一个方法可能抛出的所有异常信息

### NoClassDefFoundError 和 ClassNotFoundException 区别✔

- `NoClassDefFoundError`error类型异常

  这个异常表示在编译时存在对某个类的引用，但在运行时找不到该类的定义

- `ClassNotFoundException`exception类异常中的受检查异常（非运行时异常）

  这个异常表示在运行时试图使用 `Class.forName()` 或 `ClassLoader.loadClass()` 来加载类时，找不到对应名称的类

### try-catch-finally 中哪个部分可以省略

- `catch`
- `try`运行时异常
- `try+catch`运行时异常+普通异常

```java
try {
    // 可能会抛出异常的代码段
} catch (Exception e) {
    // 捕获并处理异常
} finally {
    // 最终要执行的代码段
}
```

其中，try 块是必须的，用于包含可能会引发异常的代码。catch 块可以根据需要使用，用于捕获和处理 try 块中引发的异常。finally 块也可以根据需要使用，它包含的代码总是会在 try 或 catch 块中的代码执行完毕后执行，无论是否引发了异常。

根据不同的情况，try-catch-finally 块中的某些部分可以省略：

- 1、如果您确定不会抛出异常，则可以省略 catch 块
- 2、如果您确信没有任何需要在 finally 块中执行的代码，则可以省略 finally 块。
- 3、如果您只想捕获特定类型的异常，而不是所有可能的异常，则可以在 catch 块中指定异常类型。

### finally块一定会执行吗

finally在两种情况下不会执行

- 1、程序没有进入到try语句块因为异常导致程序终止，这个问题主要是开发人员在编写代码的时候，异常捕获的范围不够
- 2、在try或者cache语句块中，执行了System.exit(O)语句，导致JVM直接退出

### try-catch-finally 中，如果 catch 中 return 了，finally 还会执行吗

- 会执行，在return之前执行

### JVM 是如何处理异常的

- 抛出异常：创建异常对象，并转交给JVM的过程

 ### 异常代码分析✔❕

#### **代码一**：

关键点：

- 1、异常会阻断正常代码运行
- 2、finally 一定会执行

```java
public static void main(String[] args) {

    try {
        int i = 100 / 0;
        System.out.print(i);
    } catch (Exception e) {

        System.out.println(1);
        throw new RuntimeException();
    } finally {
        System.out.println(2);
    }
    System.out.println(3);
}
```

答： 1 2 异常

#### **代码二**：

关键点：

- 1、在finally中return 后不再执行后续代码
- 2、catch中return 不影响finally的执行
- 3、try catch 后的finally一定会执行

```java
public static String output = " ";

public static void foo(int i) {
    try {
        if (i == 1) {
            throw new Exception();
        }
    } catch (Exception e) {
        output += "2";
        return;
    } finally {
        output += "3";
        return;
    }

    //output += "4"; //不注释无法运行，看关键点1
}

public static void main(String[] args) {
    foo(0);
    foo(1)
    System.out.println(output);
}
/**
 * foo(0); try中不符合条件，直接finally输出 3
 * foo(1); try中符合条件，进行抛出异常，在catch中捕获，输出 2，再进入finally中，输出 3
 */
```

答：323

### try-catch-finally-return执行顺序

try-catch-finally-return 执行描述:

- 如果不发生异常，不会执行catch部分。
- 不管有没有发生异常，finally都会执行到。
- 即使try和catch中有return时，finally仍然会执行
- finally是在return后面的表达式运算完后再执行的。（此时并没有返回运算后的值，而是先把要返回的值保存起来，若finally中无return，则不管finally中的代码怎么样，返回的值都不会改变，仍然是之前保存的值），该情况下函数返回值是在finally执行前确定的)
- finally部分就不要return了，要不然，就回不去try或者catch的return了。

### 在java的异常处理机制中，什么时候应该抛出异常，什么时候捕获异常✔

异常相当于一种提示，如果我们抛出异常，就相当于告诉上层方法，我抛了一个异常，我处理不了这个异常，交给你来处理，而对于上层方法来说，它也需要决定自己能不能处理这个异常，是否也需要交给它的上层。

所以我们在写一个方法时，我们需要考虑的就是，**本方法能否合理的处理该异常，如果处理不了就继续向上抛出异常，包括本方法中在调用另外一个方法时，发现出现了异常，如果这个异常应该由自己来处理，那就捕获该异常并进行处理。**

## IO

### Java的IO 流分为几种✔

- 流的方向：输入流、输出流
- 实现方向：节点流、处理流
- 处理数据的单位：字节流、字符流

根据输入和输出的不同组合，可以得到四种基本的IO流类型：

- 1、字节输入流（`InputStream`）：从源读取字节数据。
- 2、字节输出流（`OutputStream`）：向目标写入字节数据。
- 3、字符输入流（`Reader`）：从源读取字符数据。
- 4、字符输出流（`Writer`）：向目标写入字符数据。

### 字节流如何转为字符流✔

- `InputStreamReader  `是Reader的子类，将输入的字节流变为字符流，即将一个字节流的输入对象变为字符流的输入对象。
- `OutputStreamWriter`是Writer的子类，将输出的字符流变为字节流，即将一个字符流的输出对象变为字节流输出对象。

### 字符流与字节流的区别

- 字符流只适用于纯文本格式（效率大于字节流）
- 字节流适用于所有文件格式

### 什么是阻塞IO？什么是非阻塞IO✔

- **IO读请求的两个阶段**

  - 查看数据是否就绪

    - 1）没有就绪，一直等待，直到数据就绪（阻塞IO）

    - 2）没有就绪，返回一个标志信息，告知当前线程数据没有就绪（非阻塞IO）

      阻塞与非阻塞描述的是调用者的

      如A调用B：

      如果是阻塞，A在发出调用后，要一直等待，等着B返回结果。

      如果是非阻塞，A在发出调用后，不需要等待，可以去做自己的事情。

  - 进行数据拷贝

### 同步，异步 和 阻塞，非阻塞之间的区别✔

同步：指的是任务按照顺序依次执行，每个任务必须等待上一个任务完成后才能开始执行。在同步模式下，**任务之间存在依赖关系，后续任务必须等待前一任务完成后才能执行**。

异步：指的是任务可以独立于主线程按照预定的顺序进行执行，不需要等待上一个任务完成。在异步模式下，**任务之间相互独立，可以并发地执行**。

同步、异步，是描述被调用方的。

阻塞，非阻塞，是描述调用方的。

同步不一定阻塞，异步也不一定非阻塞。没有必然关系。

举个简单的例子，老张烧水。 1 老张把水壶放到火上，一直在水壶旁等着水开。（同步阻塞） 2 老张把水壶放到火上，去客厅看电视，时不时去厨房看看水开没有。（同步非阻塞） 3 老张把响水壶放到火上，一直在水壶旁等着水开。（异步阻塞） 4 老张把响水壶放到火上，去客厅看电视，水壶响之前不再去看它了，响了再去拿壶。（异步非阻塞）

1和2的区别是，调用方在得到返回之前所做的事情不一行。 1和3的区别是，被调用方对于烧水的处理不一样。

### BIO、NIO、AIO的区别✔

> - 1、BIO：线程发起 IO 请求，不管内核是否准备好 IO 操作，从发起请求起，线程一直阻塞，直到操作完成。
> - 2、NIO：线程发起 IO 请求，立即返回；内核在做好 IO 操作的准备之后，通过调用注册的回调函数通知线程做 IO 操作，线程开始阻塞，直到操作完成。
> - 3、AIO：线程发起 IO 请求，立即返回；内存做好 IO 操作的准备之后，做 IO 操作，直到操作完成或者失败，通过调用注册的回调函数通知线程做 IO 操作完成或者失败。


BIO 是一个连接一个线程。NIO 是一个请求一个线程。AIO 是一个有效请求一个线程。

> - BIO：同步并阻塞，服务器实现模式为一个连接一个线程，即客户端有连接请求时服务器端就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销，当然可以通过线程池机制改善。
> - NIO：同步非阻塞，服务器实现模式为一个请求一个线程，即客户端发送的连接请求都会注册到多路复用器上，多路复用器轮询到连接有I/O请求时才启动一个线程进行处理。
> - AIO：异步非阻塞，服务器实现模式为一个有效请求一个线程，客户端的 IO 请求都是由 OS 先完成了再通知服务器应用去启动线程进行处理。

## 补充

### 自定义注解的场景及实现

- 之前我这边有这么一个业务场景，用Redis控制接口调用频率，有使用过自定义注解。
- 通过 AOP（动态代理机制）给方法添加切面，通过反射来获取方法包含的注解，如果包含自定义关键字注解，就通过Redis进行校验拦截请求。

### 用最有效率的方法计算2乘以8

```
2 << 3
```

- 将一个数左移n位，就相当于这个数乘以了2的n次方。
- 那么，一个数乘以8只要将其左移3位即可。
- 而cpu直接支持位移运算，且效率最高。

###  object中定义了哪些方法

- getClass(); 获取类结构信息
- hashCode() 获取哈希码
- equals(Object) 默认比较对象的地址值是否相等，子类可以重写比较规则
- clone() 用于对象克隆
- toString() 把对象转变成字符串
- notify() 多线程中唤醒功能
- notifyAll() 多线程中唤醒所有等待线程的功能
- wait()  让持有对象锁的线程进入等待
- wait(long timeout) 让持有对象锁的线程进入等待，设置超时毫秒数时间
- wait(long timeout, int nanos) 让持有对象锁的线程进入等待，设置超时纳秒数时间
- finalize() 垃圾回收前执行的方法

### 在自己的代码中，如果创建一个java.lang.String类，这个类是否可以被类加载器加载

不可以。因为JDK处于安全性的考虑，基于双亲委派模型，优先加载JDK的String类，如果java.lang.String已经加载，便不会再次被加载。

### JDK 7有哪些新特性

- Try-with-resource语句 
- NIO2 文件处理Files
- switch可以支持字符串判断条件
- 泛型推导
- 多异常统一处理

### java8的新特性

- Lambda 表达式：Lambda允许把函数作为一个方法的参数
- Stream API ：新添加的Stream API（java.util.stream） 把真正的函数式编程风格引入到Java中
- 方法引用：方法引用提供了非常有用的语法，可以直接引用已有Java类或对象（实例）的方法或构造器。
- 默认方法：默认方法就是一个在接口里面有了一个实现的方法。
- Optional 类 ：Optional 类已经成为 Java 8 类库的一部分，用来解决空指针异常。
- Date Time API ：加强对日期与时间的处理。

### 匿名内部类是什么？如何访问在其外面定义的变量呢

匿名内部类就是没有名字的内部类，日常开发中使用的比较多。

```java
public class Outer {

    private void test(final int i) {
        new Service() {
            public void method() {
                for (int j = 0; j < i; j++) {
                    System.out.println("匿名内部类" );
                }
            }
        }.method();
    }
}
//匿名内部类必须继承或实现一个已有的接口 
interface Service{
    void method();
}

```

匿名内部类还有以下特点：

- 1、没有名字
- 2、匿名内部类必须继承一个抽象类或者实现一个接口。
- 3、匿名内部类不能定义任何静态成员和静态方法。
- 4、当所在的方法的形参需要被匿名内部类使用时，必须声明为 final。
- 5、匿名内部类不能是抽象的，它必须要实现继承的类或者实现的接口的所有抽象方法。
- 6、匿名内部类不能访问外部类方法中的局部变量，除非该变量被声明为final类型 

### 简述一下面向对象的”六原则一法则”

- 1、单一职责原则:一个类只做它该做的事情。
- 2、开闭原则：软件实体应当对扩展开放，对修改关闭。
- 3、依赖倒转原则：面向接口编程。
- 4、接口隔离原则：接口要小而专，绝不能大而全。
- 5、合成聚合复用原则：优先使用聚合或合成关系复用代码。
- 6、迪米特法则：迪米特法则又叫最少知识原则，一个对象应当对其他对象有尽可能少的了解。

### 数组有没有length()方法？String有没有length()方法

- 数组没有length()方法，而是length；
- String有length()方法

要获取集合的长度，可以使用 `size()` 方法

### this和super关键字的作用

**this：**

- 对象内部指代自身的引用
- 解决成员变量和局部变量同名问题
- 可以调用成员变量，不能调用局部变量
- 可以调用成员方法
- 在普通方法中可以省略 this
- 在静态方法当中不允许出现 this 关键字

**super：**

- 调用父类 的成员或者方法
- 调用父类的构造函数

### 列举出JAVA中6个比较常用的包

- `java.lang`：提供了Java语言的核心类和基本功能，如Object类、String类、异常处理等。
- `java.util`：提供了一些常用的工具类和数据结构，如集合框架（List、Set、Map等）、日期时间处理、随机数生成等。
- `java.io`：提供了用于进行输入和输出操作的类和接口，用于处理文件、流、字符编码等。
- `java.sql`：提供了Java与关系型数据库交互的类和接口，用于执行SQL语句、连接数据库、事务处理等。
- `java.awt`：提供了Java的抽象窗口工具包，用于创建图形用户界面（GUI）应用程序，包括图形组件、布局管理器等。
- `java.net`：提供了用于网络编程的类和接口，用于创建和管理网络连接、发送和接收数据等。

### 64 位 JVM 中，int 的长度是多数

int数据类型占4个字节 32位，跟JVM位数没关系的

### 如何将GB2312编码的字符串转换为ISO-8859-1编码的字符串呢

```java
public class Test {
    public static void main(String[] args) throws UnsupportedEncodingException {
        String str = "书中自有黄金屋";
        String strIso = new String(str.getBytes("GB2312"), "ISO-8859-1");
        System.out.println(strIso);
    }
}
```

### 守护线程是什么？用什么方法实现守护线程

- 守护线程是运行在后台的一种特殊进程。
- 它独立于控制终端并且周期性地执行某种任务或等待处理某些发生的事件。
- 在 Java 中垃圾回收线程就是特殊的守护线程。

### &和&&的区别

- 按位与, a&b 表示把a和b都转换成二进制数，再进行与的运算；
- &和&&都是逻辑运算符号，&&又叫短路运算符
- 逻辑与，a&& b ，a&b 都表示当且仅当两个操作数均为 true时，其结果才为 true，否则为false。
- 逻辑与跟短路与的差别是非常巨大的，虽然二者都要求运算符左右两端的布尔值都是true，整个表达式的值才是true。但是，&&之所以称为短路运算，是因为如果&&左边的表达式的值是false，右边的表达式会被直接短路掉，不会进行运算。

### Comparator与Comparable有什么区别✔

- Comparable & Comparator 都是用来实现集合中元素的比较、排序的，只是 **Comparable 是在集合内部定义的方法实现的排序**，**Comparator 是在集合外部实现的排序**，所以，如想实现排序，就需要在集合外定义 Comparator 接口的方法或在集合内实现Comparable 接口的方法。
- Comparator位于包java.util下，而Comparable位于包 java.lang下。
- Comparable 是一个对象本身就已经支持自比较所需要实现的接口（如 String、Integer 自己就可以完成比较大小操作，已经实现了Comparable接口） 自定义的类要在加入list容器中后能够排序，可以实现Comparable接口，在用Collections类的sort方法排序时，如果不指定Comparator，那么就以自然顺序排序， 这里的自然顺序就是实现Comparable接口设定的排序方式。
- 而 Comparator 是一个专用的比较器，当这个对象不支持自比较或者自比较函数不能满足你的要求时，你可以写一个比较器来完成两个对象之间大小的比较。 
- 可以说一个是自已完成比较，一个是外部程序实现比较的差别而已。 用 Comparator 是策略模式（strategy design pattern），就是不改变对象自身，而用一个策略对象（strategy object）来改变它的行为。 比如：你想对整数采用绝对值大小来排序，Integer 是不符合要求的，你不需要去修改 Integer 类（实际上你也不能这么做）去改变它的排序行为，只要使用一个实现了 Comparator 接口的对象来实现控制它的排序就行了。

### 深拷贝和浅拷贝✔

深拷贝和浅拷贝就是指对象的拷贝，一个对象中存在两种类型的属性，**一种是基本数据类型一种是实例对象的引用**

- 1、浅拷贝是指，**只会拷贝基本数据类型的值，以及实例对象的引用地址**，并不会复制一份引用地址所指向的对象，也就是浅拷贝出来的对象，内部的类属性指向的是同一个对象
- 2、深拷贝是指，**即会拷贝基本数据类型的值，也会针对实例对象的引用地址所指向的对象进行复制**，**深拷贝出来的对象**，内部的属性指向的不是同一个对象

### Java SPI 是什么，有什么作用

Java SPI 是Java提供的一种接口的扩展机制，作用有以下两个

- 1、把标准定义和接口实现分离，在模块化开发中很好的实现了解耦
- 2、实现功能的扩展，更好的满足定制化的需求

### 什么是零拷贝

零拷贝就是指应用程序可以直接把磁盘的数据从内核层面之间传输给socket，而不需要经过应用程序所在的用户空间，零拷贝通过DMA技术，把文件内容复制到内核空间的Read Buffer，接着把包含数据位置和长度信息的文件描述加载到是Socket Buffer里面，DMA直接可以把数据从内核空间传递到网卡设备，在这个流程中，数据只需要经过两次拷贝，就发送到网卡里面，减少了两次CPU的上下文切换，对效率有非常大的提高

### java中的Math.round(-1.5) 等于多少呢

JDK 中的 java.lang.Math 类:

- round() ：返回四舍五入，负 .5 小数返回较大整数，如 -1.5 返回 -1。
- ceil() ：返回小数所在两整数间的较大值，如 -1.5 返回 -1.0。
- floor() ：返回小数所在两整数间的较小值，如 -1.5 返回 -2.0。

### 为啥有时会出现 4.0 - 3.6 = 0.40000001 这种现象

**这种舍入误差的主要原因是：**

**浮点数值采用二进制系统表示， 而在二进制系统中无法精确地表示分数 1/10。这就好像十进制无法精确地表示分数 1/3—样。如果在数值计算中不允许有任何舍入误差， 就应该使用 BigDecimal类。**

### JDK动态代理为什么只能代理有接口的类✔

动态代理需要传入被动态代理的一个接口类，之所以要传入接口而不能传入类，还是取决于JDK动态代理的一个底层实现，JDK 动态代理会在程序的运行期间去动态生成一个代理类，**动态生成的代理类会去继承一个 java.lang.reflect.Proxy这样一个类，同时还会去实现被代理类的接口，在Java里面不支持多种继承，所以只能代理接口**。

### 描述动态代理的几种实现方式，它们分别有什么优缺点

- JDK动态代理
- CGLIB动态代理
- JDK原声动态代理时java原声支持的、不需要任何外部依赖、但是它只能基于接口进行代理
- CGLIB通过继承的方式进行代理、无论目标对象没有没实现接口都可以代理，但是无法处理final的情况

### Java有几种拷贝方式，哪一种效率最高✔

1、使用java.io包下的库，使用FilelnputStream读取，再使用FileOutputStream写出

2、利用iava.nio包下的库，使用transferTo或transfFrom方法实现

3、Java标准类库本身已经提供了Files.copy的实现

对于文件拷贝效率，和操作系统和配置的情况有关系

### 有哪些设计模式

设计模式分为创建者模式、结构型模式和行为型模式

- 1、创建型模式：对象实例化的模式，创建型模式用于解耦对象的实例化过程
  - 单例模式、工厂方法模式、抽象工厂、建造者模式、原型模式
- 2、结构型模式：把类或对象结合在一起形成一个更大的结构
  - 适配器模式、组合模式、装饰器模式、代理模式、享元模式、外观模式、桥接模式、
- 3、行为型模式：类和对象如何交互，及划分责任和算法
  - 迭代器模式、模板方法模式、策略模式、命令模式、状态模式、责任链模式、备忘录模式、观察者模式、访问者模式、中介者模、解释器模式

### 介绍下策略模式和观察者模式

策略模式和观察者模式都属于行为型模式

- **策略模式主要是用在根据上下文动态控制类的行为的一个场景**，一方面可以解决多个if..else判断带来的代码复杂性和维护性问题，另一方面，把类的不同行为进行封装，使得程序可以进行动态的扩展和替换，增加了程序的灵活性，比如像支付路由这样一个场景就可以使用策略模式去实现
- **观察者模式主要是用在一对多的对象依赖关系的一个处理过程，实现某一个对象状态变更之后的感知的场景**，一方面可以降低对象依赖关系的耦合度，弱化依赖关系，另一方面，通过这种状态通知机制，可以保证这些依赖对象之间的状态协同

### 在Java中实现单例模式有哪些方法

- 1、通过双重检查锁方式

   是一种线程安全并且延迟实例化的方式，但是因为加锁，所以会有性能上的一个影响

- 2、通过静态内部类方式

   也是一种延迟实例化方式，由于是静态内部类，所以只会在使用时加载一次，不存在线程安全问题

- 3、**通过枚举类的方式**

   既是线程安全，又能防止反序列化破坏线程安全的问题，但是多线程、克隆、反序列化、反射都有可能会造成单例破坏，通过枚举实现单例模式，能够阻止所有可能被破坏的一个情况

### 选择

某java web应用以jar的方式部署在linux服务器上,应用的文件名为app.jar，为实现在后台运行jar包，且关闭终端窗口不会停止应用，以下关于启动应用正确的命令是（）（5分）

A.java -jar app.jar

B.java -jar app.jar &

C.nohup java -jar app.jar

D.nohup java -jar app.jar &

答：D

### Git如何处理冲突

当在Git中进行代码合并（merge）或者代码重置（reset）操作时，可能会出现冲突（conflict）。冲突通常发生在两个或多个分支中对同一代码文件的相同部分进行了不同的修改。为解决这些冲突，可以按照以下步骤进行处理：

- 1、执行合并操作后，如果出现冲突，Git会在冲突文件中标记出冲突的部分，类似于以下形式：

   ```
   Copy Code<<<<<<< HEAD
   // 当前分支的代码
   =======
   // 合并分支的代码
   >>>>>>> branch_name
   ```

- 2、打开包含冲突的文件，查看冲突部分的代码。根据你的需求，选择保留某个分支的代码或者进行修改。

- 3、根据需要，手动编辑冲突文件，将代码修改为想要的最终结果。你可以选择保留某个分支的代码，也可以将两者进行合并。

- 4、在完成编辑后，保存文件并使用`git add`命令将修改的文件标记为已解决冲突。

- 5、当所有冲突都解决完毕后，运行`git commit`命令来提交合并后的结果。

请注意，解决冲突是一个手动的过程，需要仔细审查冲突代码并确保最终结果正确。如果对解决冲突感到困惑，可以使用图形化

### Maven生命周期

Maven是一个流行的项目管理工具，它使用约定优于配置的原则来管理项目的构建、发布和依赖管理。在Maven中，构建过程被划分为不同的阶段，这些阶段被称为"生命周期"。Maven生命周期包括三个标准的构建生命周期：clean、default（或build）和site。

- 1、clean生命周期：
   - 这个生命周期负责清理项目，删除之前构建生成的文件。
   - 主要阶段包括pre-clean、clean和post-clean。
   - 例如，可以使用`mvn clean`命令来执行clean生命周期，从而清理目标目录中的所有生成文件。

- 2、default（或build）生命周期：
   - 这是Maven的主要生命周期，负责构建项目、生成可部署的输出。
   - 主要阶段包括validate、compile、test、package、verify、install和deploy。
   - 例如，运行`mvn install`将执行default生命周期，它会编译代码、运行测试、打包以及将项目安装到本地仓库中。

- 3、site生命周期：
   - 这个生命周期负责生成项目站点文档。
   - 主要阶段包括pre-site、site和post-site。
   - 例如，可以使用`mvn site`命令来执行site生命周期，从而生成项目站点文档。

通过使用这些生命周期，开发人员可以方便地执行项目构建、测试、清理和站点文档生成等操作。此外，Maven还允许用户扩展现有的生命周期并自定义构建过程，以满足特定项目的需求。

### 常见的HTTP状态码

- 200（OK）：表示请求成功，并返回请求的内容。
- 201（Created）：表示成功创建了新资源。
- 204（No Content）：表示服务器成功处理了请求，但没有返回任何内容。
- 400（Bad Request）：表示客户端发送了一个无效的请求，服务器无法理解。
- 401（Unauthorized）：表示请求要求身份验证，客户端未提供有效的身份验证凭据。
- 403（Forbidden）：表示服务器拒绝了请求访问资源的权限。
- 404（Not Found）：表示请求的资源不存在。
