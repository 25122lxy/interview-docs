# Java集合

## 算法复杂度

### 时间复杂度

#### 常见复杂度表示形式

![image-20230628143849093](https://gitee.com/tjlxy/img/raw/master/image-20230628143849093.png)

速记口诀：**常对幂指阶** 

越在上面的性能就越高，越往下性能就越低

####  时间复杂度O(1)

```java
public int test01(int n){
    int i=0;
    int j = 1;
    return i+j;
}
```

代码只有三行，它的复杂度也是O(1)，而不是O(3）

```java
public void test02(int n){
    int i=0;
    int sum=0;
    for(;i<100;i++){
        sum = sum+i;
    }
    System.out.println(sum);
}

```

整个代码中因为循环次数是固定的就是100次，这样的代码复杂度我们认为也是 O(1) 

一句话总结：只要代码的执行时间不随着n的增大而增大，这样的代码复杂度都 是O(1)

#### 时间复杂度O(n)

```java
/**
* 求1~n的累加和
* @param n
* @return
*/
public int sum(int n) {
    int sum = 0;
    for ( int i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
```

一层for循序时间复杂度就是O(n)

```java
public static int sum2(int n){
    int sum = 0;
    for (int i = 1; i < n; ++i) {
        for (int j = 1; j < n; ++j) {
            sum = sum + i * j;
        }
    }
    return sum;
}

```

这个代码的执行行数为：O( 3n^2 + 3n + 3 )，不过，依据大O表示的规则：常 量、系数、低阶，可以忽略 

所以这个代码最终的时间复杂度为：O(n^2)

#### 时间复杂度O(logn)

```java
public void test04(int n){
    int i=1;
    while(i<=n){
        i = i * 2;
    }
}

```

分析这个代码的复杂度，我们必须要再强调一个前提：复杂度分析就是要弄清 楚代码的执行次数和数据规模n之间的关系 

以上代码最关键的一行是： i = i * 2 ，这行代码可以决定这个while循环执行 代码的行数， i 的值是可以无限接近 n 的值的。如果 i 一旦大于等于了 n 则循 环条件就不满足了。也就说达到了最大的行数。我们可以分析一下 i 这个值变化 的过程

![image-20230628144242349](https://gitee.com/tjlxy/img/raw/master/image-20230628144242349.png)

由此可知，代码的时间复杂度表示为O(log n)

#### 间复杂度O(n * log	n)

分析完O( log n )，那O( n * log n )就很容易理解了，比如下列代码：

```java
public void test05(int n){
    int i=0;
    for(;i<=n;i++){
        test04(n);
    }
}

public void test04(int n){
    int i=1;
    while(i<=n){
        i = i * 2;
    }
}
```



### 空间复杂度

空间复杂度全称是渐进空间复杂度，表示算法占用的额外**存储空间**与**数据规模**之间的增长关系

看下面代码

```java
public void test(int n){
    int i=0;
    int sum=0;
    for(;i<n;i++){
        sum = sum+i;
    }
    System.out.println(sum);
}
```

代码执行并不需要占用额外的存储空间，只需要常量级的内存空间大小，因此空间复杂度是O(1)

再来看一个其他例子：

```java
void print(int n) {
    int i = 0;
    int[] a = new int[n];
    for (i; i <n; ++i) {
        a[i] = i * i;
    }
    for (i = n-1; i >= 0; --i) {
        System.out.println(a[i]);
    }
}
```

传入一个变量n，决定申请多少的int数组空间内存，此段代码的空间复杂度为O(n)

我们常见的空间复杂度就是O(1),O(n),O(n ^2)，其他像对数阶的复杂度几乎用不到，因此空间复杂度比时间复杂度分析要简单的多。

##  基础

### 常见的集合有哪些✔

- 1、`Collection`接口（单列集合）
  - 1）`List`接口-集合：存储有序，可重复的数据->动态数组
    * `ArrayList`底层是**数组**(线性，有角标，索引)，查询快，删除、插入慢，线程不安全
    * `LinkedList`底层是**双向链表**，查询慢，插入、删除快，线程不安全
    * `Vector`底层是**数组**，查询快，删除、插入慢，线程安全(古老实现类)
  - 2）`Set`接口-集合：存储无序，不可重复的数据->集合
    * `HashSet`底层是**哈希表**，元素无序且唯一
    * `LinkedHashSet`底层是**链表和哈希表**，元素无序且唯一
    * `TreeSet`底层是**红黑树**，元素无序且唯一
- 2、`Map`接口（双列集合）
  - `HashMap`**链表+数组+（红黑树）**作为主要实现类，线程不安全，效率高，存储null的key和value
  - `LinkedHashMap`**哈希表+双向链表**
    * 保证在遍历map元素时，可以照添加的顺序实现遍历
    * 在原有的HashMap底层结构基础上，添加了一对指针，指向前一个和后一个元素
    * 对于频繁的遍历操作，此类执行效率高于HashMap
  - `TreeMap`红黑树
    * 保证照添加的key- value对进行排序，实现排序遍历。此时考虑key的自然排序或定制排序

> 在java中提供了大量的集合框架，主要分为两类： 
>
> 第一个是Collection 属于单列集合，第二个是Map 属于双列集合 
>
> - 在Collection中有两个子接口List和Set。在我们平常开发的过程中用的比较多像list 接口中的实现类ArrarList和LinkedList。 在Set接口中有实现类HashSet和 TreeSet。 
> - 在map接口中有很多的实现类，平时比较常见的是HashMap、TreeMap，还有一个线程安全的map：ConcurrentHashMap

### 线程安全的集合有哪些？线程不安全的呢

- 线程安全的
  - Hashtable
  - ConcurrentHashMap
  - Vector
  - Stack
- 线程不安全
  -  其余基本都是

## List


### ArrayList与LinkedList异同点✔

- `ArrayList`
- `LinkedList`
- 线程安全、底层数据结构、查询，插入删除效率、内存占用（ArrayList体现在list列表的结尾会预留一定空间，LinkedList需要消耗更多的空间，要存放直接后继和直接前驱以及数据）

> 它们两个主要是底层使用的数据结构不一样，ArrayList 是动态数组， LinkedList 是双向链表，这也导致了它们很多不同的特点。
>
> 1、从操作数据效率来说
>
> - ArrayList按照下标查询的时间复杂度O(1)【内存是连续的，根据寻址公式】， LinkedList不支持下标查询
>
> - 查找（未知索引）： ArrayList需要遍历，链表也需要遍历，时间复杂度都是 O(n)
>
> 新增和删除
>
> - ArrayList尾部插入和删除，时间复杂度是O(1)；其他部分增删需要挪动数组，时间复杂度是O(n) 
> - LinkedList由于只需要调整节点的链接关系，插入和删除操作的效率较高，无论在任何位置进行插入和删除，时间复杂度都为O(1)。
>
> 2、**从内存空间占用来说**
>
> ArrayList底层是数组，内存连续，节省内存 
>
> LinkedList 是双向链表需要存储数据，和两个指针，更占用内存
>
> 3、从线程安全来说，ArrayList和LinkedList都不是线程安全的

根据具体的需求，选择合适的集合类可以提高代码的效率和可读性。如果需要频繁随机访问元素或在末尾进行插入和删除操作，可以选择ArrayList。如果需要频繁在任意位置进行插入和删除操作，可以选择LinkedList。

### ArratList与Vector区别

- 线程安全问题
- 扩容问题`0.5 -> 1`（ArrayList有利于节省内存空间）

### 说一说ArrayList的扩容机制✔

- 将原有数组内容复制到新数组中去。

ArrayList是一个数组结构的存储容器，默认情况下数组的长度是10个，当然可以在构建ArrayList对象的时候指定初始长度，随着在程序里面不断的往ArrayList里面添加数据，当添加的数据达到10个的时候，ArrayList里面就没有足够的容量去存储后续的数据，这时就会触发自动扩容，**首先创建一个新的数组，长度是原来数组的1.5倍，然后使用Arrays.copyOf把老数组中的数据拷贝到新数组中，扩容完成以后，把当前需要添加的元素加入到新的数组里面，完成动态扩容**。

### ArrayList底层是数组，怎么实现不断扩容的

1、使用无参构造创造ArrayList

```java
    /**
     * Default initial capacity.
     默认的初始化容量
     */
    private static final int DEFAULT_CAPACITY = 10;

    /**
     * Shared empty array instance used for default sized empty instances. We
     * distinguish this from EMPTY_ELEMENTDATA to know how much to inflate when
     * first element is added.、
     这个是创建的默认大小的空数组。EMPTY_ELEMENTDATA用于表示当第一个数据被添加时该空数组初始化的大小
     */
    private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};
    
    /**
     * Constructs an empty list with an initial capacity of ten.
     构造一个空的List，该List具有10个容量
     */
    public ArrayList() {
        this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
    }
...
```

使用ArrayList空参的构造器创建集合时，数组并没有创建。当集合中添加第一个元素时，数组被创建，初始化容量为10

2、使用有参构造创建ArrayList

有参构造创建时，如果制定了容量则会创建出指定容量大小的数组。如果指定容量为0，则无参构造一样。

```java

    /**
     * Constructs an empty list with the specified initial capacity.
     *
     * @param  initialCapacity  the initial capacity of the list
     * @throws IllegalArgumentException if the specified initial capacity
     *         is negative
     */
    public ArrayList(int initialCapacity) {
        if (initialCapacity > 0) {
            this.elementData = new Object[initialCapacity];
        } else if (initialCapacity == 0) {
            this.elementData = EMPTY_ELEMENTDATA;
        } else {
            throw new IllegalArgumentException("Illegal Capacity: "+
                                               initialCapacity);
        }
    }

...
    
    
    /**
     * Appends the specified element to the end of this list.
     *
     * @param e element to be appended to this list
     * @return <tt>true</tt> (as specified by {@link Collection#add})
     */
    public boolean add(E e) {
        ensureCapacityInternal(size + 1);  // Increments modCount!!
        elementData[size++] = e;
        return true;
    }


    private void ensureCapacityInternal(int minCapacity) {
        ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
    }

    private void ensureExplicitCapacity(int minCapacity) {
        modCount++;

        // overflow-conscious code
        if (minCapacity - elementData.length > 0)
            grow(minCapacity);
    }
    /**
     * Increases the capacity to ensure that it can hold at least the
     * number of elements specified by the minimum capacity argument.
     * 增加容量，以确保它至少可以容纳由最小容量参数指定的数目的元素
     * @param minCapacity the desired minimum capacity
     */
    private void grow(int minCapacity) {
        // overflow-conscious code
        int oldCapacity = elementData.length;
        int newCapacity = oldCapacity + (oldCapacity >> 1);
        if (newCapacity - minCapacity < 0)
            newCapacity = minCapacity;
        if (newCapacity - MAX_ARRAY_SIZE > 0)
            newCapacity = hugeCapacity(minCapacity);
        // minCapacity is usually close to size, so this is a win:
        elementData = Arrays.copyOf(elementData, newCapacity);
    }
```

### ArrayList(int initialCapacity)会不会初始化数组大小

```java
 

    /**
     * The size of the ArrayList (the number of elements it contains).
     * 数组列表的大小（包含的元素数）
     * @serial
     */
    private int size;

	/**
     * Constructs an empty list with the specified initial capacity.
     *
     * @param  initialCapacity  the initial capacity of the list
     * @throws IllegalArgumentException if the specified initial capacity
     *         is negative
     */
    public ArrayList(int initialCapacity) {
        if (initialCapacity > 0) {
            this.elementData = new Object[initialCapacity];
        } else if (initialCapacity == 0) {
            this.elementData = EMPTY_ELEMENTDATA;
        } else {
            throw new IllegalArgumentException("Illegal Capacity: "+
                                               initialCapacity);
        }
    }

    
    /**
     * Appends the specified element to the end of this list.
     *
     * @param e element to be appended to this list
     * @return <tt>true</tt> (as specified by {@link Collection#add})
     */
    public boolean add(E e) {
        ensureCapacityInternal(size + 1);  // Increments modCount!!
        elementData[size++] = e;
        return true;
    }
```

会初始化大小，但如果通过ArrayList的`size()`方法进行判断时结果依然为0，因为只有在添加元素时才会对ArrayList的size属性+1

### ArrayList1.7之前和1.7及以后的区别

1.7之前ArrayList在初始化的时候直接调用this(10)，初始化容量为10的数组。在1.7及以后，只要第一次执行add方法向集合添加元素时才会创建容量为10的数组

### 为什么ArrayList增删比较慢，增删是如何做的

**添加元素**：

1、没有指定index添加元素

直接添加到最后，如果容量不够，则需要扩容

```java
    /**
     * Appends the specified element to the end of this list.
     *
     * @param e element to be appended to this list
     * @return <tt>true</tt> (as specified by {@link Collection#add})
     */
    public boolean add(E e) {
        ensureCapacityInternal(size + 1);  // Increments modCount!!
        elementData[size++] = e;
        return true;
    }
```

2、如果指定了index添加元素

```java

    /**
     * Inserts the specified element at the specified position in this
     * list. Shifts the element currently at that position (if any) and
     * any subsequent elements to the right (adds one to their indices).
     *
     * @param index index at which the specified element is to be inserted
     * @param element element to be inserted
     * @throws IndexOutOfBoundsException {@inheritDoc}
     */
    public void add(int index, E element) {
        rangeCheckForAdd(index);

        ensureCapacityInternal(size + 1);  // Increments modCount!!
        System.arraycopy(elementData, index, elementData, index + 1,
                         size - index);
        elementData[index] = element;
        size++;
    }
```

从源码里看到，是将要添加的元素位置index之后的已有元素全部拷贝到原数组index+1处，然后再把新的数据加入

**删除元素**：

```java

    /**
     * Removes the element at the specified position in this list.
     * Shifts any subsequent elements to the left (subtracts one from their
     * indices).
     *
     * @param index the index of the element to be removed
     * @return the element that was removed from the list
     * @throws IndexOutOfBoundsException {@inheritDoc}
     */
    public E remove(int index) {
        rangeCheck(index);

        modCount++;
        E oldValue = elementData(index);

        int numMoved = size - index - 1;
        if (numMoved > 0)
            System.arraycopy(elementData, index+1, elementData, index,
                             numMoved);
        elementData[--size] = null; // clear to let GC do its work

        return oldValue;
    }
...
```

ArrayList删除数据时同样使用拷贝数组的方式，将要删除的位置之后的所有元素拷贝到当前位置，最后再对最后一个位置的数据设置为null，交给gc来回收。这种删除，其实就是覆盖，如果数据量大，那么效率很低。

### ArrayList插入和删除数据一定慢吗

不一定，取决于删除的数据距离数组末端有多远，如果距离末端较劲，则性能不一定差

### ArrayList适合做队列吗

队列需要遵循先进先出的原则，如果从ArrayList的数组头部入队列，数组尾部处队列，那么对于入队列时的操作，会涉及大数据量的数组拷贝，十分消耗性能。队头队尾反过来也是一样，因此ArrayList不适合做队列

### 数组时候做队列吗

`ArrayBlockingQueue`（阻塞队列）环形队列就是用数组来实现的。ArrayBlockingQueue的存和取操作的索引是在索引值等于容量值时，将索引值设置为0实现环形队列的效果，因此在这种情况下，数组适合做队列。

```java

    /**
     * Inserts element at current put position, advances, and signals.
     * Call only when holding lock.
     */
    private void enqueue(E x) {
        // assert lock.getHoldCount() == 1;
        // assert items[putIndex] == null;
        final Object[] items = this.items;
        items[putIndex] = x;
        if (++putIndex == items.length)
            putIndex = 0;
        count++;
        notEmpty.signal();
    }

    /**
     * Extracts element at current take position, advances, and signals.
     * Call only when holding lock.
     */
    private E dequeue() {
        // assert lock.getHoldCount() == 1;
        // assert items[takeIndex] != null;
        final Object[] items = this.items;
        @SuppressWarnings("unchecked")
        E x = (E) items[takeIndex];
        items[takeIndex] = null;
        if (++takeIndex == items.length)
            takeIndex = 0;
        count--;
        if (itrs != null)
            itrs.elementDequeued();
        notFull.signal();
        return x;
    }

```

### ArrayList和LinkedList两者的遍历性能谁更好

ArrayList的遍历性能要比LinkedList好，因为ArrayList存储的数据在内存中是连续的，CPU内存缓存结构会缓存连续的内存片段，可以大幅度降低读取内存的性能开销。

### Array和ArrayList有什么区别？什么时候该用Array而不是ArrayList呢

- 类型：
  - 数组可以包含任何类型的元素，包括基本数据类型+对象类型
  - ArrayList 是泛型类，它可以指定特定类型的元素，对象类型
- **大小**：
  - 数组在创建时需要指定固定的大小，一旦创建后其大小就不能改变。
  - 动态数组具有可变的大小，可以根据需要动态地添加或删除元素。
- 后者提供了更多的方法和特性：
  - 使用索引直接访问数组元素，例如 `array[0]`。
  - ArrayList 提供了一组方法来操作元素，例如添加、删除、查找等。

### ArrayList线程不安全，为什么还要用

实际开发中有以下几种场景：

- 1、频繁增删：使用LinkedList，但是设计到频繁增删的场景比较少
- 2、追求线程安全：使用Vector
- 3、普通的用来查询：使用ArrayList，使用的场景最多

根据数据结构的特性，三者难以全包容，只能在相互之间做取舍

### sortedSet和List异同点❕

相同点：

1、都可以用来存储一组有序的元素

2、都支持随机访问和按照索引位置插入元素

3、都是派生自Collection接口

不同点：

1、SortedSet是有序集合，不允许有元素重复；List是一个有序列表，允许元素重复

2、SortedSet可以按照元素的自然顺序或者自定义比较器进行排序；List只能按照元素的添加顺序排序

3、SortedSet中元素的添加和删除操作时间复杂为O(Logn)；List中元素的添加和删除操作的时间复杂度为O(n)

4、最后SortedSet可以方便的进行范围查询；而list只能通过遍历实现范围查找

## Map

### HashMap的底层结构和原理(1.7和1.8有什么区别)✔

- 1.7 数组+链表
- 1.8 数组+链表+红黑树
  - 链表超过8，数据总量超过64转换为红黑树，
  - 数组长度小于64，先对数组进行扩容，减少查询数据
  - 1.8中链表插入使用尾插法（需判断元素个数）
- 1.7中链表插入使用头插法，哈希算法比较复杂，1.8新增红黑树，简化哈希算法，节省CPU资源
- 1.8中加红黑树的目的是提高HashMap插入和查询整体效率

![image-20240203091445300](https://gitee.com/tjlxy/img/raw/master/image-20240203091445300.png)

- 1.7版本：根据hash(key)确定存储位置后，以链表的形式在该位置存数据。此时数组该位置的链表存了多个数据，因此也称为桶，存放的数据用Entry描述

```java
static class Entry<K,V> implements Map.Entry<K,V> {
    final K key;
    V value;
    Entry<K,V> next;
    int hash;

    /**
     * Creates new entry.
     */
     Entry(int h, K k, V v, Entry<K,V> n) {
         value = v;
         next = n;
         key = k;
         hash = h;
     } 
...
}
```

- 1.8版本：存放的数据是用Node描述

```java

    /**
     * Basic hash bin node, used for most entries.  (See below for
     * TreeNode subclass, and in LinkedHashMap for its Entry subclass.)
     */
    static class Node<K,V> implements Map.Entry<K,V> {
        final int hash;
        final K key;
        V value;
        Node<K,V> next;

        Node(int hash, K key, V value, Node<K,V> next) {
            this.hash = hash;
            this.key = key;
            this.value = value;
            this.next = next;
        }
    ...
    }
```

链表有可能过长，所以在满足以下条件时，链表会转换成红黑树：

- 1）链表长度`>`8
- 2）数组大小`>=`64

当红黑树节点个数<6时，转换为链表



### 解决Hash冲突的办法有那些？HashMap用的那种✔❕

所谓哈希冲突是由于哈希算法被计算的数据是无限的，而计算后的结果的范围是有限的，所以总会存在不同的数据经过计算之后得到的值是一样的，这时就会出现哈希冲突。

通常解决Hash冲突的方式有四种：

- 1、**开放定址法（线性探测法）**

   就是从发生冲突的哪个位置开始，按照一定次序从 Hash 表中去找到一个空闲的位置，然后把发生冲突的元素存入到这个位置

- 2、**链式寻址法（链地址法）**

   就是把存在哈希冲突的 key，以单向链表的方式进行存储，如 HashMap

- 3、**再哈希法**

   就是通过某个 Hash 函数计算 key 存在冲突的时候，再用另外一个 Hash 函数对这个 key  进行 Hash，一直运行，直到不在产生冲突为之，性能会有一些影响

- 4、**建立公共溢出区**

   把哈希表分为基本表和溢出表，凡是冲突的元素，一律放到溢出表中

HashMap 在 JDK1.8 版本中，是通过链式寻址法以及红黑树的方式来解决 Hash 冲突问题的，**其中红黑树是为了优化 Hash 表的链表过长，导致时间复杂度增加了一个问题**，当链表长度超过一定阈值时（默认为8），并且Hash 表的容量大于 64 的时候，再向链表中添加元素，就会触发链表向红黑树的一个转换。

> **HashMap使用的哈希冲突解决方法是链地址法**（Chaining）。当发生哈希冲突时，新的键值对会通过链表（或红黑树）的方式插入到相应的桶中，在同一个桶中的键值对通过链表的形式进行存储。当链表长度超过一定阈值时（默认为8），链表会转换为红黑树，以提高查找效率。这种解决冲突的方法在实际应用中性能较好，并且能够保持较低的插入成本和查找成本。

#### 为什么在解决hash冲突的时候，不直接用红黑树？而选择先用链表，再转红黑树

- **元素个数小于8的时候，链表查询性能大于红黑树**

### HashMap默认加载因子是多少？为什么是0.75，不是0.6或者0.8

HashMap 加载因子表示哈希表中元素的填充长度，扩容因子的值越大，意味着触发扩容的元素个数会更多，哈希冲突概率也会增加，相反扩容因子的值越小，触发扩容的元素会更少，所以这就是维持平衡的一个过程，当扩容因子在0.75的时候，链表长度达到8的可能性几乎为0，比较好的达到了一个空间成本，和时间成本的平衡

### HashMap 中 key 的存储索引是怎么计算的

- 根据key的值计算出hashcode的值，
- 然后根据hashcode计算出hash值，
- 最后通过hash&（length-1）计算得到存储的位置

### HashMap 的put方法(插入数据)流程✔❕

- 是否为空、是否出现hash冲突、key是否存在、数据结构是否为红黑树、链表长度是否大于8、数据容量是否小于64

![image-20240203202538983](https://gitee.com/tjlxy/img/raw/master/image-20240203202538983.png)

> - 1、判断键值对数组table是否为空或为null，如果是则需要执行resize()进行扩容（初始化） 
> - 2、根据键值key计算hash值得到数组索引 （通过哈希函数将键转换为哈希值，并计算索引位置）
> - 3、判断table[i]==null或空，条件成立，直接新建节点添加 
> - 4、如果table[i]==null ,不成立 
>    - 判断table[i]的首个元素是否和key一样，如果相同直接覆盖value 
>    - 判断table[i] 是否为treeNode，即table[i] 是否是红黑树，如果是红黑树，则直接在树中插入键值对 
>    - 遍历table[i]，如果是链表，则链表的尾部插入数据，然后判断链表长度是否大于8，大于8的话把链表转换为红黑树，在红黑树中执行插入操作，遍历过程中若发现key已经存在直接覆盖value 
> - 5、插入成功后，判断实际存在的键值对数量size是大于等于最大容量threshold（数组 长度*0.75），如果大于等于，进行扩容。

### HashMap初始化，怎么设定初始容量大小✔

1、如果没有指定容量：则使用默认的容量为16，负载因子0.75

```java
    /**
     * Constructs an empty <tt>HashMap</tt> with the default initial capacity
     * (16) and the default load factor (0.75).
     */
    public HashMap() {
        this.loadFactor = DEFAULT_LOAD_FACTOR; // all other fields defaulted
    }
```

2、如果指定了容量，则会初始化容量为：大于指定容量的，最近的2的整数次方的数。比如传入10，则会初始化容量为16（2的4次方）

```java
    /**
     * Constructs an empty <tt>HashMap</tt> with the specified initial
     * capacity and the default load factor (0.75).
     *
     * @param  initialCapacity the initial capacity.
     * @throws IllegalArgumentException if the initial capacity is negative.
     */
    public HashMap(int initialCapacity) {
        this(initialCapacity, DEFAULT_LOAD_FACTOR);
    }
   
	/**
     * Constructs an empty <tt>HashMap</tt> with the specified initial
     * capacity and load factor.
     *
     * @param  initialCapacity the initial capacity
     * @param  loadFactor      the load factor
     * @throws IllegalArgumentException if the initial capacity is negative
     *         or the load factor is nonpositive
     */
    public HashMap(int initialCapacity, float loadFactor) {
        if (initialCapacity < 0)
            throw new IllegalArgumentException("Illegal initial capacity: " +
                                               initialCapacity);
        if (initialCapacity > MAXIMUM_CAPACITY)
            initialCapacity = MAXIMUM_CAPACITY;
        if (loadFactor <= 0 || Float.isNaN(loadFactor))
            throw new IllegalArgumentException("Illegal load factor: " +
                                               loadFactor);
        this.loadFactor = loadFactor;
        this.threshold = tableSizeFor(initialCapacity);
    }

    /**
     * Returns a power of two size for the given target capacity.
     */
    static final int tableSizeFor(int cap) {
        int n = cap - 1;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
    }
```

该算法的逻辑是让高位1的之后所有位上的数都为1，再做+1的操作，实现初始化容量为：大于指定容量的，最近的2的整数次方的数。

![image-20240204094916361](https://gitee.com/tjlxy/img/raw/master/image-20240204094916361.png)

### HashMap的hash函数是如何设计的✔

```java
	// jdk1.8
    static final int hash(Object key) {
        int h;
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    }
	// jdk1.7相比jdk.18，jdk1.7做了四次移位和四次异或运算，效率比1.8要低
	h ^= (h >>> 20) ^ (h >>> 12);
	return h ^ (h >>> 7) ^ (h >>> 4);
```

用key的`hashCode()`与其低16位做异或运算，这个扰动函数的设计有两个原因：

- 1）计算出来的hash值尽量分散，降级hash碰撞的概率
- 2）用位运算做算法，更加高效

具体来说，深层的内容是这样的：

首先要知道hash运算目的是用来定位改数据要存放在数组的那个位置，如何计算？

```java
    // jdk1.7
	static int indexFor(int h, int length) {
        // 确保 length 是非零的2的幂
        // assert Interger.bitCount(length) == 1 : "length must be a non-zero power of 2";
        return h & (length-1);
    }
    // jdk 1.8
    if ((p = tab[i = (n - 1) & hash]) == null)
        tab[i] = newNode(hash, key, value, null);
```

是通过n-1的操作与原hash值做"与”运算，其中n是数组的长度。相当于是更高效的%取模运算。而n-1恰好是一个低位掩码。比如初始化
长度是16，那n-1是15，即二进制的0000 1111。

此时得到了另一个问题的答案: 那么为什么不能直接用key的hashCode0作为hash值，而一定要A(h >>>16)?

因为如果直接用key的hashCode0作为hash值，很容易发生hash碰撞

使用扰动函数^(h >>>16)，就是为了混淆原始哈希码的高位和低位，以此来加大低位的随机性。且低位中参杂了高位的信息，这样高位
的信息也作为扰动函数的关键信息。

![image-20240204112610555](https://gitee.com/tjlxy/img/raw/master/image-20240204112610555.png)

### HashMap1.8相比于1.7做了哪些优化✔

1.8引入了红黑树，将时间复杂度由O(n)降到O(log n)以外，还将1.7的头插法改为1.8的尾插法。

1、头插法（先扩容再插入）

作者认为，后插入的数据，被访问的概率更高，所以使用了头插法，但头插法会存在遍历时死循环的情况。

扩容之前：

![image-20240204115017622](https://gitee.com/tjlxy/img/raw/master/image-20240204115017622.png)

扩容之后：获得新的index，头插法会导致链表反转：

![image-20240204140338868](https://gitee.com/tjlxy/img/raw/master/image-20240204140338868.png)

当线程1执行反转过程中，线程2执行，就可能会出现如下情况，造成链表成环的死循环问题

扩容时，将原数组中的值拷贝到新数组，当遍历到链表中的数据时，先遍历到B，则会将B放入数组中，放A，采用头插法，则A会指向B，由于并发访问，原来的B指向A可能没有及时断开，则会造成A指向B，B又指向A，形成死循环问题

![image-20240204140651501](https://gitee.com/tjlxy/img/raw/master/image-20240204140651501.png)

2、尾插法（先插入再扩容）

在扩容时会保持链表原先的顺序，因此不会出现链表成环的死循环问题



### HashMap啥时候要扩容，为什么要扩容✔❕

- **容器大小**？

当创建一个集合对象的时候，实际上就是在内存里面一次性申请了一块内存空间，而内存空间的大小是在创建集合对象的时候指定的，比如list的默认大小10，HashMap的默认大小是16。

- **长度不够怎么办**？

当存储的数据量大于存储容器的大小，通常做法就是扩容，当存储容量达到某个阈值的时候，集合就会进行一个动态扩容，从而去更好的满足更多的数据存储的一个需求，而List和HashMap本质上是一个数组的结构，所以基本上只需要去创建一个更长的数组，然后把原来数组里面的数据拷贝到新数组里面就可以了。

- **HashMap是如何扩容的**？

当HashMap里面的元素个数超过临界值的时候会自动触发扩容，这个临界值有一个计算公式，它等于负载因子乘以它的一个容量大小，负载因子默认值0.75，HashMap容量值默认16，也就是说元素达到12的时候，会触发扩容，扩容的大小是原来的两倍，由于动态扩容这个机制存在，所以在集合初始化的时候明确去指定集合的大小避免频繁扩容带来性能上的影响，在扩容时候，需要重新创建哈希表，并且进行数据迁移，对性能影响非常大

- **为什么扩容因子是0.75**？

表示哈希表中元素的填充长度，扩容因子的值越大，意味着触发扩容的元素个数会更多，哈希冲突概率也会增加，相反扩容因子的值越小，触发扩容的元素会更少，所以这就是维持平衡的一个过程，当扩容因子在0.75的时候，链表长度达到8的可能性几乎为0，比较好的达到了一个空间成本，和时间成本的平衡。

### HashMap是如何实现扩容的

HashMap执行扩容关系到两个参数：

- 1）`Capacity`：HashMap当前容量（已经存在元素所占的容量）
- 2）`loadFactor`负载因子（默认是0.75）

当HashMap容量达到`Capacity*loadFactor`时，进行扩容。（16*0.75=12）

1.7和1.8版本的扩容区别：

- 1.7版本：

先扩容，再插入数据。扩容时会创建一个为原数组的2倍大小的数组，然后将原数组的元素重新hash，存进新数组。

- 1.8版本：

先插入数据，再执行扩容。扩容时会创建一个为原数组的2倍大小的数组，然后将原数组的元素存进新数组。不同的是1.8使用位移操作创建2倍大小的新数组

```java
	newThr = oldThr << 1;
```

### HashMap插入数据时扩容的重新hash是怎么做的✔

- 1.7：需要再做一次hash

```java
void addEntry(int hash, K key, V value, int bucketIndex) {
    // 判断是否需要扩容
    if ((size >= threshold) && (null != table[bucketIndex])) {
        resize(2 * table.length);
        hash = (null != key) ? hash(key) : 0;
        bucketIndex = indexFor(hash, table.length);
    }
    // 创建新的 Entry 对象
    createEntry(hash, key, value, bucketIndex);
}
```

- 1.8：不需要做hash，通过原方式获取存储位置

```java
	newTab[e.hash & (newCap - 1)] = e;
```

由于newCap为新数组的大小，因此在做与操作时，在没有改变key的hash的情况下，改变了与数的值来获取新的存储位置，效率更高。而且位运算的newCap-1实际上由于2的幂的关系，-1的操作实际上就是在高位补1，效率更高。

### 为什么重写equals方法后还要 重写hashCode方法✔

因为在put的时候，如果数据已经存在，就需要把老的数据return，存入新的数据。那如何判断数据已存在呢?是通过先比较hash值，如果hash值相同，再用equals判断

```java
    Node<K,V> e; K k;
    if (p.hash == hash &&
        ((k = p.key) == key || (key != null && key.equals(k))))
        e = p;
```

重写equals和hashCode方法的目的就是根据对象的属性来进行判断对象是否相同，而非根据对象的内存地址来判断。

### HashMap 的扩容方式✔

- HashMap在容量超过负载因子所定义的容量之后，就会扩容。（扩大为原来数组的两倍）

![image.png](https://cdn.nlark.com/yuque/0/2023/png/29617954/1678539957979-f62f356e-0435-4493-8eb5-6c7c99310b17.png#averageHue=%23eeeeee&clientId=u749efe4e-f659-4&from=paste&height=430&id=u1645ff50&name=image.png&originHeight=538&originWidth=954&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=288416&status=done&style=none&taskId=u30875403-9d9c-459b-9cc2-1cf5e0cecaf&title=&width=763.2)

> - 在添加元素或初始化的时候需要调用resize方法进行扩容，第一次添加数据初始化数组长度为16，以后每次每次扩容都是达到了扩容阈值（数组长度 * 0.75） 
> - 每次扩容的时候，都是扩容之前容量的2倍； 
> - 扩容之后，会新创建一个数组，需要把老数组中的数据挪动到新的数组中 
> - 没有hash冲突的节点，则直接使用 e.hash & (newCap - 1) 计算新数组的索引位置 
> - 如果是红黑树，走红黑树的添加 
> - 如果是链表，则需要遍历链表，可能需要拆分链表，判断(e.hash & oldCap)是否为 0，该元素的位置要么停留在原始位置，要么移动到原始位置+增加的数组大小这个位置上

### 通过hash计算后找到数组的下标，是如何找到的呢，你了解hashMap的寻址算法吗

这个哈希方法首先计算出key的hashCode值，然后通过这个hash值右移16位后的二进制进行按位异或运算得到最后的hash值。 

在putValue的方法中，计算数组下标的时候使用hash值与数组长度取模得到存储数据下标的位置，hashmap为了性能更好，并没有直接采用取模的方式，而是使用了数组长度-1 得到一个值，用这个值按位与运算hash值，最终得到数组的位置。

### 为何HashMap的数组长度一定是2的次幂

第一： 

计算索引时效率更高：如果是 2 的 n 次幂可以使用位与运算代替取模 

第二： 

扩容时重新计算索引效率更高：在进行扩容是会进行判断 hash值按位与运算旧数组长度是否 == 0 

如果等于0，则把元素留在原来位置 ，否则新位置是等于旧位置的下标+旧数组长度

### HashMap中的Hash方法为什么要右移16位进行异或运算✔

```java
    static final int hash(Object key) {
        int h;
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    }
```

之所以要右移16位进行异或运算，核心目的是为了让hash值的散列度更高，尽可能的去**减少Hash表的hash冲突**，从而去提升数据的查找性能

![image-20230923093921572](https://gitee.com/tjlxy/img/raw/master/image-20230923093921572.png)

```java
final V putVal(int hash, K key, V value, boolean onlyInAbsent, boolean evict){
    Node<K,V>[] tab; Node<K,V> p; int n, i;
    //...
    if ((p = tab[i = (n - 1) & hash]) == null){
        tab[i] = newNode(hash, key, value, null);
    }
    //...
}
```

在hashMap的put方法里面呢，是通过key的hash值与数组的长度取模计算得到数组的位置，而在绝大部分的情况下呢，n的值一般是小于2^16次方，也就是65536，所以意味着i的值始终是使用hash值的低16位，与（n-1）进行取模运算，这个是由与运算符的一个特征决定的，这样就会造成key的散列度不是很高，导致大量的key集中存储在一个固定的几个数组位置上，很显然会影响到数据的查找性能，因此为了提升key的hash值的一个散列度，在hash方法里面做了一个位移运算，首先使用key的hashCode无符号右移16位，意味着把hashCode的高位移动到了低位，然后再用hashCode与右移之后的值进行异或运算，相当于把高位和低位的特征进行了个组合，这样通过一个高位和低位组合后的一个hashCode，通过与运算符进行运算之后，它得到的一个数组的位置的散列度一定会更高，所以通过这种方式呢，可以去**降低hash冲突的概率**

### 你知道hashmap在1.7情况下的多线程死循环问题吗

jdk7的的数据结构是：数组+链表 

在数组进行扩容的时候，因为链表是头插法，在进行数据迁移的过程中，有可能导致死循环 

比如说，现在有两个线程 

线程一：读取到当前的hashmap数据，数据中一个链表，在准备扩容时，线程二介入 

线程二也读取hashmap，直接进行扩容。因为是头插法，链表的顺序会进行颠倒过来。比如原来的顺序是AB，扩容后的顺序是BA，线程二执行结束。 

当线程一再继续执行的时候就会出现死循环的问题。 

线程一先将A移入新的链表，再将B插入到链头，由于另外一个线程的原因， B的next指向了A，所以B->A->B,形成循环。 

当然，JDK 8 将扩容算法做了调整，不再将元素加入链表头（而是保持与扩容前一样的顺序），尾插法，就避免了jdk7中死循环的问题。

### 一般用什么作为HashMap的key

- **String**
  - 不可变， 所以在它创建的时候 hashcode 就被缓存了，不需要重新计算  
  - 获取对象时要用到 equals() 和 hashCode() 方法，String已经重写过了

### HashMap为什么线程不安全

- 多线程下扩容循环
  - 1.7采用头插法，容易导致环形链表
  - 1.8采用尾插法，保持链表原有的顺序
- 多线程的put可能导致元素的丢失
  - 索引位置相同时，前一个key被后一个key覆盖
- put和get并发时，可能导致get为null

我们可以采用ConcurrentHashMap进行使用，它是一个线程安全的 HashMap

### HashMap在多线程使用场景下会存在线程安全问题，怎么解决✔

处理方案通常有以下三种：

- 1、使用`Collections.synchronizedMap()`创建线程安全的map集合
- 1、使用`Hashtable`

- 3、使用`ConcurrentHashMap`

鉴于效率考虑，推荐使用`ConcurrentHashMap`

### Collections.synchronizedMap()如何实现线程安全✔

```java
private static class SynchronizedMap<K,V>
    implements Map<K,V>, Serializable {
    private static final long serialVersionUID = 1978198479659022715L;

    private final Map<K,V> m;     // Backing Map
    final Object      mutex;        // Object on which to synchronize

    SynchronizedMap(Map<K,V> m) {
        this.m = Objects.requireNonNull(m);
        mutex = this; //设置当前对象互斥量
    }
    ...
}
```

Collections.synchronizedMap(map)创建出的SynchronizedMap对象，把当前对象作为互斥量（也可以指定互斥量）

之后操作该SynchronizedMap，其操作Map的方法都被加上了synchronized

```java
    public int size() {
        synchronized (mutex) {return m.size();}
    }
    public boolean isEmpty() {
        synchronized (mutex) {return m.isEmpty();}
    }
    public boolean containsKey(Object key) {
        synchronized (mutex) {return m.containsKey(key);}
    }
    public boolean containsValue(Object value) {
        synchronized (mutex) {return m.containsValue(value);}
    }
    public V get(Object key) {
        synchronized (mutex) {return m.get(key);}
    }

    public V put(K key, V value) {
        synchronized (mutex) {return m.put(key, value);}
    }
    public V remove(Object key) {
        synchronized (mutex) {return m.remove(key);}
    }
    public void putAll(Map<? extends K, ? extends V> map) {
        synchronized (mutex) {m.putAll(map);}
    }
    public void clear() {
        synchronized (mutex) {m.clear();}
    }
```

### Hashtable的性能为什么不好

Hashtable的每个操作都使用了synchronized上了锁，甚至读的操作也上锁。

```java
public synchronized V get(Object key) {
    Entry<?,?> tab[] = table;
    int hash = key.hashCode();
    int index = (hash & 0x7FFFFFFF) % tab.length;
    for (Entry<?,?> e = tab[index] ; e != null ; e = e.next) {
        if ((e.hash == hash) && e.key.equals(key)) {
            return (V)e.value;
        }
    }
    return null;
}
```

### ConcurrentHashMap 的实现原理是什么✔

- JDK1.7
  - segment数组+HashEntry数组+链表
- JDK1.8
  - 数组+链表+红黑树

1、ConcurrentHashMapl的整体架构

- 在JDK1.7中的存储结构

![image-20230922213829764](https://gitee.com/tjlxy/img/raw/master/image-20230922213829764.png)

其中，Segment 继承了 ReentrantLock，所以 Segment 是一种可重入锁，扮演锁的角色；HashEntry 用于存储键值对数据，首先将数据分为一段一段的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据时，其他段的数据也能被其他线程访问，能够实现真正的并发访问。

在JDK1.8中的存储结构

![image-20230922211504842](https://gitee.com/tjlxy/img/raw/master/image-20230922211504842.png)

由数组+红黑树+单向链表构成，当初始化ConcurrentHashMap时，默认会初始化一个长度为16的数组，由于ConcurrentHashMap的核心仍然是Hash表，所以必然会存在hash冲突的问题，所以ConcurrentHashMap采用链式寻址的方式解决Hash表的冲突，当Hash冲突比较多的时候会造成链表长度较长的问题，所以这种情况会使得ConcurrentHashMap中的一个数组元素的查询复杂度会增加，所以在JDK1.8中引入红黑树，当数组长度大于64，并且链表长度大于等于8时，单向链表就会转换成红黑树，另外随着CurrentHashMap的动态扩容，一旦链表的长度小于6，红黑树会退化成单向链表

2、ConcurrentHashMap的基本功能

![image-20230922212248466](https://gitee.com/tjlxy/img/raw/master/image-20230922212248466.png)

CurrentHashMap本质是一个HashMap，因此功能和HashMap是一样的，但是CurrentHashMap在HashMap的基础上提供了并发安全的一个实现，主要是通过对于Node节点去加锁，来保证数据更新的安全性。

3、ConcurrentHashMap在性能方面的优化

![image-20230922212838860](https://gitee.com/tjlxy/img/raw/master/image-20230922212838860.png)

- 在JDK1.8中，CurrentHashMap锁的粒度是数组中的某个节点，而在JDK1.7中锁定的是Segment，锁的范围更大，性能更低
- 引入红黑树这样一个机制，去降低数据查询的时间复杂度，红黑树的时间复杂度是O(logn)
- 当数组长度不够时候，CurrentHashMap需要对数组进行扩容，而在扩容的时间上，CurrentHashMap引入了多线程并发扩容的一个实现，就是多个线程对原始数组进行分片，分片之后，每个线程去负责一个分片的数据迁移，从而去整体的提升了扩容过程中数据迁移的一个效率
- CurrentHashMap有一个size()方法获取总的元素个数，而在多线程并发0场景中，在保证原子性的前提下，去实现元素个数的累加性能是非常低的，所有CurrentHashMap在这方面做了两个优化
  - 当线程竞争不激烈的时候，之间采用CAS的方式，实现元素个数的一个原子递增
  - 线程竞争激烈的情况下，使用一个数组来维护元素个数，如果要增加总的原子个数之间从数组中随机选择一个，在通过CAS算法来实现原子递增，核心思想是引入了数组来实现对并发更新的一个负载。	

### ConcurrentHashMap的数据结构✔

![image-20240206084046316](https://gitee.com/tjlxy/img/raw/master/image-20240206084046316.png)

从类关系图上来看HashMap和ConcurrentHashMap都来自于Map，因此ConcurrentHashMap数据结构遵循HashMap1.7和1.8的特征。

- 1.7版本使用的是数组+链表结构
- 1.8版本使用的是数组+链表+红黑树结构

但是ConcurrentHashMap在数组中存的元素不同

1、**1.7版本**：

存入的数据用Segment类型来封装

做两次Hash，第一次确定在Segment数组中的位置，第二次确定在HashEntry数组中的位置

```java
static final class Segment<K,V> extends ReentrantLock implements Serializable {

    ...
}
```

![image-20240206121528012](https://gitee.com/tjlxy/img/raw/master/image-20240206121528012.png)

一个ConcurrentHashMap包含一个Segment数组，Segment里包含一个HashEntry数组，每个HashEntry数组中是一个链表结构的元素，每个Segment守护着一个HashEntry数组里的元素，当对HashEntry数组的数据进行修改时，必须首先获得它对应的Segment锁。每个Segment元素相当于一个小的HashMap。

默认Segment数组存放16个，最多允许16个线程并发访问。

一个ConcurrentHashMap中有一个Segment<K,V>类型的segment数组，每个segment中只有一个HashEntry<K,V>类型的table数组，table数组中存放一个HashEntry节点。

HashEntry的内部结构：

```java
static final class HashEntry<K, V> {
    final int hash;
    final K key;
    volatile V value; // 加了volatile修饰，保证内存可见性及防止指令重排
    volatile HashEntry<K, V> next;

    HashEntry(int hash, K key, V value, HashEntry<K, V> next) {
        this.hash = hash;
        this.key = key;
        this.value = value;
        this.next = next;
    }

    // 省略其他方法
}

```

很显然，1.7版本的ConcurrentHashMap采用了分段锁（Segment）技术，其中Segment继承了ReentrantLock。

在插入ConcurrentHashMap元素时，先尝试获得Segment锁，先是自旋获锁，如果自旋次数超过阈值，则转为ReentrantLock上锁。

。。。

2、**1.8版本**：

1.8版本放弃了Segment，根HashMap一样，用Node描述插入集合中的元素。但是Node中的val和next使用了volatile来修饰，保存了内存可见性。与HashMap相同的是，ConcurrentHashMap1.8版本使用了数组+链表+红黑树的结构。

```java
static class Node<K,V> implements Map.Entry<K,V> {
    final int hash;
    final K key;
    volatile V val;
    volatile Node<K,V> next;

    Node(int hash, K key, V val, Node<K,V> next) {
        this.hash = hash;
        this.key = key;
        this.val = val;
        this.next = next;
    }
    ...
}
```

同时，ConcurrentHashMap使用了CAS+Synchronized保证了并发的安全性。

下面介绍ConcurrentHashMap的put过程：

```java

/** Implementation for put and putIfAbsent */
final V putVal(K key, V value, boolean onlyIfAbsent) {
    if (key == null || value == null) throw new NullPointerException();
    int hash = spread(key.hashCode());//更为分散的hash值
    int binCount = 0;//统计节点个数
    for (Node<K,V>[] tab = table;;) {
        Node<K,V> f; int n, i, fh;
        if (tab == null || (n = tab.length) == 0)
            tab = initTable();//初始化数组
        else if ((f = tabAt(tab, i = (n - 1) & hash)) == null) {//该位置没有元素，则使用CAS自旋获锁，存入节点
            if (casTabAt(tab, i, null,
                         new Node<K,V>(hash, key, value, null)))
                break;                   // no lock when adding to empty bin
        }
        else if ((fh = f.hash) == MOVED)
            tab = helpTransfer(tab, f);//如果ConcurrentHashMap正在扩容，则协助其转移
        else {
            V oldVal = null;
            synchronized (f) {//对根节点上锁
                if (tabAt(tab, i) == f) {
                    if (fh >= 0) {//fh>=0 说明是链表，否则是红黑树
                        binCount = 1;
                        for (Node<K,V> e = f;; ++binCount) {
                            K ek;
                            if (e.hash == hash &&
                                ((ek = e.key) == key ||
                                 (ek != null && key.equals(ek)))) {
                                oldVal = e.val;
                                if (!onlyIfAbsent)
                                    e.val = value;
                                break;
                            }
                            Node<K,V> pred = e;
                            if ((e = e.next) == null) {
                                pred.next = new Node<K,V>(hash, key,
                                                          value, null);
                                break;
                            }
                        }
                    }
                    else if (f instanceof TreeBin) {
                        Node<K,V> p;
                        binCount = 2;
                        if ((p = ((TreeBin<K,V>)f).putTreeVal(hash, key,
                                                              value)) != null) {
                            oldVal = p.val;
                            if (!onlyIfAbsent)
                                p.val = value;
                        }
                    }
                }
            }
            if (binCount != 0) {
                if (binCount >= TREEIFY_THRESHOLD)
                    treeifyBin(tab, i);
                if (oldVal != null)
                    return oldVal;
                break;
            }
        }
    }
    addCount(1L, binCount);
    return null;
}
```

### CAS是什么（乐观锁——没有上任何锁，所有线程不会阻塞，但依然会有上锁效果）✔

使用Synchronized时：当某一时刻有两个线程同时访问一个节点，线程1先进行上锁（Synchronized），线程2则无法访问，变成**阻塞**状态，进行**挂起**操作，当前线程1执行完毕后，释放锁资源，线程2再由挂起变成**唤醒**状态，进行访问，这种频繁的挂起、唤醒非常影响线程的性能。

CAS避免了线程被频繁的挂起、唤醒，提供线程的整体性能。

CAS是英文单词Compare and Swap的缩写，翻译过来就是比较并替换。

CAS机制中使用了3个基本操作数：**内存地址V，旧的预期值A，要修改的新值B**。

更新一个变量的时候，只有当变量的预期值A和内存地址V当中的实际值相同时，才会将内存地址V对应的值修改为B。

举个例子：

- 在内存地址V当中，存储着值为10的变量。

![image-20240206203142501](https://gitee.com/tjlxy/img/raw/master/image-20240206203142501.png)

- 此时线程1想把变量的值增加1，对线程1来说，旧的预期值A=10，要修改的新增B=11。
- 在线程1要提交更新之前，另一个线程2抢先一步，把内存地址V中的变量值率先更新成了11。

![image-20240206203806676](https://gitee.com/tjlxy/img/raw/master/image-20240206203806676.png)

- 线程1开始提交更新，首先进行A和地址V的实际值比较，发现A不等于V的实际值，提交失败

![image-20240206204122829](https://gitee.com/tjlxy/img/raw/master/image-20240206204122829.png)

- 线程1重新获取内存地址V的值，并重新计算想要修改的值。此时对线程1来说，A=11，B=12。这个重新尝试的过程被称为自旋

![image-20240206204441698](https://gitee.com/tjlxy/img/raw/master/image-20240206204441698.png)

- 这一次比较幸运，没有其他线程改变地址V的值。线程1进行比较，发现A和地址V的实际值是相等的。
- 线程1进行交换，把地址V的值替换为B，也就是12

![image-20240206204859530](https://gitee.com/tjlxy/img/raw/master/image-20240206204859530.png)

### CAS的缺点及ABA问题如何解决✔

缺点：

1、CPU开销过大

在并发量比较高的情况下，如果许多线程反复尝试更新某一个变量，却又一直更新不成功，循环往复，会给CPU带来很高的压力。

2、不能保证代码块的原子性

CAS机制所保证的只是一个变量的原子性操作，而不能保证整个代码块的原子性。比如需要保证3个变量共同进行原子性的更新，就不得不使用Synchronized了

3、ABA问题

这是CAS机制最大的问题所在。

- 假设内存中有一个值为A的变量，存储在地址V中。

![image-20240206214441695](https://gitee.com/tjlxy/img/raw/master/image-20240206214441695.png)

- 此时有三个线程想同时使用CAS的方式更新这个变量的值，每个线程的执行时间有略微偏差。线程1和线程2已经获得当前值，线程3还未获取当前值

![image-20240206214837916](https://gitee.com/tjlxy/img/raw/master/image-20240206214837916.png)

- 接下来，线程1先一步执行成功，把当前值成功从A更新为B；同时线程2因为某种原因被阻塞住，没有做更新操作；线程3在线程1更新之后，获取了当前值B

![image-20240206223122027](https://gitee.com/tjlxy/img/raw/master/image-20240206223122027.png)

- 在之后，线程2仍然处于阻塞状态，线程3继续执行，成功把当前值从B更新成了A

![image-20240206223504693](https://gitee.com/tjlxy/img/raw/master/image-20240206223504693.png)

- 最后，线程2终于恢复了运行状态，由于阻塞之前已经活动了“当前值A”，并且经过compare检查，内存地址V中的实际值也是A，所以成功把变量值A更新成了B

![image-20240206224001698](https://gitee.com/tjlxy/img/raw/master/image-20240206224001698.png)

这个例子就造成了线程安全问题，结合实际情况，可以更好的发现问题所在。

假设一个提款机场景的例子。

- 假设有一个遵循CAS原理的提款机，小雨有100元存款，要用这个提款机来提款50元

- 由于提款机硬件出了点问题，小雨的提款操作被同时提交了两次，开启了两个线程，两个线程都是获取当前值100元，要更新成50元。理想情况下，应该一个线程更新成功，一个线程更新失败，小雨的存款值就被扣一次

![image-20240206225729744](https://gitee.com/tjlxy/img/raw/master/image-20240206225729744.png)

-  线程1首先执行成功，把余额从100改成50，线程2因为某种原因阻塞。这是小雨的妈妈刚好给小雨汇款50元

![image-20240206230123868](https://gitee.com/tjlxy/img/raw/master/image-20240206230123868.png)

- 线程2仍然是阻塞状态，线程3执行成功，把余额从50改成了100

![image-20240206230416637](https://gitee.com/tjlxy/img/raw/master/image-20240206230416637.png)

- 线程2恢复运行，由于阻塞之前获得了“当前值100”，并经过compare检测，此时存款实际值也是100，所以会成功把变量值100更新成50

![image-20240206230759396](https://gitee.com/tjlxy/img/raw/master/image-20240206230759396.png)

原本线程2应该提交失败，小雨的正确余额应该保持100元，结果由于ABA问题提交成功了。

怎么解决呢？加个版本号就可以了。

真正要做到严谨的CAS机制，在compare阶段不仅要比期望值A和地址V中的实际值，还要比较变量的版本号是否一致。假设地址V中存储着变量值A，当前版本号是01.线程1获取了当前值A和版本号01，想要更新为B，但是被阻塞了

![image-20240207104818907](https://gitee.com/tjlxy/img/raw/master/image-20240207104818907.png)

这时候，内存地址V中变量发生了多次改变，版本号提升为03，但是变量值仍然是A

![image-20240207105129629](https://gitee.com/tjlxy/img/raw/master/image-20240207105129629.png)

随后线程1恢复运行，进行compare操作。经过比较，线程1所获得的值和地址的实际值都是A，但是版本号不相等，所以这一次更新失败

![image-20240207105657134](https://gitee.com/tjlxy/img/raw/master/image-20240207105657134.png)

在数据库层面操作版本号：判断原来的值和版本号是否匹配，中间有别的线程修改，值可能相等。但是版本号100%不一样

```sql
update a set value = newValue, vision = vision + 1 where value = #{oldValue} and vision = #{vision}
```

### ConcurrentHashMap中Segment如何实现扩容✔

ConcurrentHashMap的扩容仅仅和每个Segment元素中的HashEntry数组的长度有关，但需要扩容时，只扩容当前Segment中HashEntry数组即可。也就是说ConcurrentHashMap中Segment[]数组的长度是在初始化的时候就确定了，后面扩容不会改变这个长度。

如果找不到相同的Hash索引位置，则继续找下一个，直到找到最后一个相同的索引位置。

找到第一个后续节点新的index不变的节点。第一个后续节点新index不变节点前所有节点均需要重新创建分配，用以提升效率

具体流程：

- 1、遍历旧哈希表（HashEntry数组）的每个槽位。
- 2、对于每个槽位，如果只有一个节点，则直接将该节点转移到新哈希表的相应槽位上。
- 3、如果一个槽位中存在多个节点，则需要重新哈希。
- 4、在重新哈希过程中，找到最后一个属于同一槽位的节点，并将其放入新哈希表的相应槽位上。
- 5、然后再依次将该槽位中的节点重新分配到新哈希表的相应槽位上。

### ConcurrentHashMap 的 put 方法执行逻辑是什么

先来看JDK1.7

首先，会尝试获取锁，如果获取失败，利用自旋获取锁；如果自旋重试的次数超过 64 次，则改为阻塞获取锁。 

获取到锁后： 

- 1、将当前 Segment 中的 table 通过 key 的 hashcode 定位到 HashEntry。 
- 2、遍历该 HashEntry，如果不为空则判断传入的 key 和当前遍历的 key 是否相等，相等则覆盖旧的 value。 
- 3、不为空则需要新建一个 HashEntry 并加入到 Segment 中，同时会先判断是否需要扩容。 
- 4、释放 Segment 的锁。 

再来看JDK1.8 

大致可以分为以下步骤： 

- 1、根据 key 计算出 hash值。 
- 2、判断是否需要进行初始化。 
- 3、定位到 Node，拿到首节点 f，判断首节点 f： 
   1. 如果为 null ，则通过cas的方式尝试添加。 
   2. 如果为 f.hash = MOVED = -1 ，说明其他线程在扩容，参与一起扩容。 
   3. 如果都不满足 ，synchronized 锁住 f 节点，判断是链表还是红黑树，遍历插入。 
- 4、当在链表长度达到8的时候，数组扩容或者将链表转换为红黑树。

### ConcurrentHashMap 的 get 方法是否要加锁，为什么

- `volatile`修饰

#### get方法不需要加锁与volatile修饰的哈希桶有关吗

ConcurrentHashMap的get方法在读取哈希桶时不需要加锁或使用volatile修饰符，这与其内部实现有关。

ConcurrentHashMap使用了一种称为分段锁（Segment）的机制来实现并发安全。它将整个哈希表分成了多个小的段（Segment），每个段维护着一部分哈希桶。每个段都拥有自己的锁，因此在不同的段上可以同时进行读写操作而不会相互阻塞。

在ConcurrentHashMap中，每个哈希桶都使用了一种称为volatile读写的技术。当进行读操作时，不需要加锁，而只需要读取对应哈希桶的volatile变量即可获取最新的值。这是因为volatile变量的特性保证了可见性，即当一个线程修改了volatile变量的值后，其他线程可以立即看到最新的值。

所以，在使用ConcurrentHashMap的get方法时，不需要额外的加锁操作或使用volatile修饰符，因为分段锁和volatile变量已经保证了并发安全和读写的一致性

### ConcurrentHashMap 不支持 key 或者 value 为 null 的原因

- key
  - 源码就是这样编写的
- value（二义性）
  - 无法判断映射的`value`是空值，还是没有找到对应的`key`而为null

### ConcurrentHashMap 的并发度是多少

默认16

### ConcurrentHashMap 迭代器是强一致性还是弱一致性

- 弱一致性
  -  在遍历过程中，内部元素可能会发生变化，如果变化发生在已遍历过的部分，迭代器就不会反映出来，而如果变化发生在未遍历过的部分，迭代器就会发现并反映出来，这就是弱一致性。 

### JDK1.7与JDK1.8 中ConcurrentHashMap 的区别

- 1、数据结构：
  - 取消了Segment分段锁的数据结构，取而代之的是数组+链表+红黑树的结构。	

- 2、保证线程安全机制：
  - JDK1.7采用Segment的分段锁机制实现线程安全，其中segment继承自 ReentrantLock。JDK1.8 采用CAS+Synchronized保证线程安全。

- 3、锁的粒度
  - 对需要进行数据操作的Segment加锁
  - 对每个数组元素加锁
- 4、链表转换为红黑树
  - hash算法简化
- 5、查询时间复杂度
      - O(n)
          - O(logN)

### ConcurrentHashMap 和Hashtable的效率哪个更高？为什么

- ConcurrentHashMap的效率要高于Hashtable
- ConcurrentHashMap的锁粒度更低

### ConcurrentHashMap效率为什么高✔

因为ConcurrentHashMap的get方法并没有上锁。get时通过hash(key)定位到Segment上，再通过一次hash定位到具体的HashEntry上。

由于HashEntry的value属性使用了volatile修饰，保证了内存可见性，每次获取都是最新的值，因此整个过程不需要加锁

### 说一下Hashtable的锁机制 

- 给整个哈希表加了一把大锁
- 多线程环境下。。。

### 多线程下安全的操作 map还有其他方法吗

- 使用`Collections.synchronizedmap`方法，对方法加同步锁

### HashMap 和 HashSet 区别 ✔

- 1、上层实现接口
  - Map接口
  - Set接口

- 2、存储内容
  - 存储键值对
  - 存储对象

- 3、添加元素方法
  - put()
  - add()

- 4、速度
  - HashMap相对于HashSet较快，因为它使用唯一的键获取对象
  - HashSet较HashMap来说比较慢

### HashMap和Hashtable有什么区别✔❕

1、Hashtable的键不能为null（因为HashMap会把null转换为0进行存储），但HashMap可以为null

HashMap在存放null的键时做了处理

```java
    static final int hash(Object key) {
        int h;
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    }
```

为什么要Hashtable设计成不能null？

因为Hashtable如果可以存null，那么有可能导致判断数据是否已存在时，没办法判断是否是null还是不存在

```java
    public synchronized boolean containsKey(Object key) {
        Entry<?,?> tab[] = table;
        int hash = key.hashCode();
        int index = (hash & 0x7FFFFFFF) % tab.length;
        for (Entry<?,?> e = tab[index] ; e != null ; e = e.next) {
            if ((e.hash == hash) && e.key.equals(key)) {
                return true;
            }
        }
        return false;
    }
```

2、Hashtable的初始化容量是11，扩容时是`当前容量*2+1`。但HashMap的初始容量16，扩容时是`当前容量*2`

```java
//Hashtable扩容源码
int newCapacity = (oldCapacity << 1) + 1;
```

3、数据结构不一样，hashtable是数组+链表，hashmap在1.8之后改为了 数组+链表+红黑树 

4、hash算法不同，hashtable是用本地修饰的hashcode值，而hashmap经常了二次hash 

HashTable直接是使用key的hashcode对数组长度做取模。而HashMap对Key的hashcode做了二次散列，从而避免key的
分布不均匀问题影响到查询性能	

5、hashtable是线程安全的，操作数据的时候加了锁synchronized， hashmap不是线程安全的，效率更高一些在实际开中不建议使用HashTable，在多线程环境下可以使用 ConcurrentHashMap类

HashTable直接是使用key的hashcode对数组长度做取模。而HashMap对Key的hashcode做了二次散列，从而避免key的
分布不均匀问题影响到查询性能	

### Collection框架中实现比较要怎么做

- 内部比较器
  - 实现`compare(T t)`
- 外部比较器
  - 实现`compare(T t1,T t2)`

### Iterator 和 ListIterator 有什么区别

- 遍历元素
  - 前者可以遍历所有集合  ，后者只能可以向前和向后遍历集合中的元素。
- 修改元素
  - Iterator无法修改集合中的元素
- 添加元素
  - Iterator无法向集合中添加元素
- 获取索引

遍历List数组

```java
List<String> list = Arrays.asList("Apple", "Banana", "Orange");

// 使用for循环遍历List
for (int i = 0; i < list.size(); i++) {
    String item = list.get(i);
    System.out.println(item);
}

// 使用增强型for循环遍历List
for (String item : list) {
    System.out.println(item);
}

//使用Iterator遍历List
List<String> list = Arrays.asList("Apple", "Banana", "Orange");

Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    String item = iterator.next();
    System.out.println(item);
}

//使用ListIterator遍历List
List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.add("Orange");

ListIterator<String> listIterator = list.listIterator();
while (listIterator.hasNext()) {
    String item = listIterator.next();
    System.out.println(item);
}

// 反向遍历List
while (listIterator.hasPrevious()) {
    String item = listIterator.previous();
    System.out.println(item);
}
//忽略集合名
```

遍历Map数组

```java
Map<Integer, String> map = new HashMap<>();
map.put(1, "Apple");
map.put(2, "Banana");
map.put(3, "Orange");

// 遍历Map的键值对
for (Map.Entry<Integer, String> entry : map.entrySet()) {
    Integer key = entry.getKey();
    String value = entry.getValue();
    System.out.println("Key: " + key + ", Value: " + value);
}

// 遍历Map的键
for (Integer key : map.keySet()) {
    System.out.println("Key: " + key);
}

// 遍历Map的值
for (String value : map.values()) {
    System.out.println("Value: " + value);
}

```

### 讲一讲快速失败(fail-fast)和安全失败(fail-safe)  ✔

"快速失败"（fail-fast）和"安全失败"（fail-safe）是用来描述在多线程环境下集合类的迭代器行为的两种不同策略。

1、快速失败（fail-fast）： 快速失败是指Java集合在使用迭代器遍历操作的过程中，**如果集合的结构发生了变化（例如添加或删除元素），那么会立即抛出`ConcurrentModification Exception`异常**，以确保在多线程环境下迭代器的一致性。这种策略可以及早地发现并防止潜在的并发修改问题，但不能保证线程安全，因此需要开发者自己处理并发修改的情况。

及时不存在并发，也会抛出该异常，所以称之为快速失败

快速失败的容器包括ArrayList、HashMap和HashSet等非线程安全的集合类。

```java
	//例如HashMap中的foreach
    @Override
    public void forEach(BiConsumer<? super K, ? super V> action) {
        Node<K,V>[] tab;
        if (action == null)
            throw new NullPointerException();
        if (size > 0 && (tab = table) != null) {
            int mc = modCount;
            for (int i = 0; i < tab.length; ++i) {
                for (Node<K,V> e = tab[i]; e != null; e = e.next)
                    action.accept(e.key, e.value);
            }
            //在执行任何修改(put、remove...)的操作，都可以看到最后++modCount，判断不一致则抛出异常
            if (modCount != mc)
                throw new ConcurrentModificationException();
        }
    }
```

2、安全失败（fail-safe）： 安全失败是指在进行迭代操作的过程中，**如果集合的结构发生了变化，迭代器仍然可以继续正常工作而不会抛出异常**。这是通过在迭代器内部使用原始的数据副本或快照来实现的，因此即使其他线程对集合进行修改，也不会影响当前迭代器的工作。这种策略保证了线程安全，但可能会导致迭代器返回的数据不一致或过期。

安全失败的容器包括ConcurrentHashMap和CopyOnWriteArrayList等线程安全的集合类。

总结来说，快速失败策略可以及早检测到并发修改问题，但不保证线程安全；而安全失败策略虽然保证了线程安全，但可能导致迭代器返回的数据不一致或过期。开发者在选择使用哪种策略时需根据具体情况进行权衡和选择。



### 谈谈ConcurrentHashMap的扩容机制✔

- **1.7版本**
  - 1.7版本的ConcurrentHashMap是基于segment分段实现的
  - 每个Segment相对于小型的HashMap
  - 每个Segment内部会进行扩容，和HashMap的扩容逻辑类似
  - 先生成新的数组，然后转移元素到新数组中
  - 扩容的判断也是每个Segment内部单独判断的，判断是否超过阈值
- **1.8版本**
  - 1.8版本的ConcurrentHashMap不再基于Segment实现
  - 当某个线程进行put时，如果发现ConcurrentHashMap正在进行扩容那么该线程一起进行扩容
  - 如果某个线程put时，发现没有正在进行扩容，则将key-value添加到ConcurrentHashMap中，然后判断是否超过阈值，超过了则进行扩容
  - ConcurrentHashMap是支持多个线程扩容的
  - 扩容之前也先生成一个新的数组
  - 在转移元素时，先将原数组分组，将每组分给不同的线程来进行元素的转移，每个线程负责一组或多组的元素转移工作

### CopyOnWriteArrayList的底层原理是怎样的

- 1、首先CopyOnWriteArrayList内部也是用过数组来实现的，在向CopyOnWriteArrayList添加元素时，会复制一个新的数组，写操作在新数组上进行，读操作在原数组上进行
- 2、并且，写操作会加锁，防止出现并发写入丢失数据的问题
- 3、写操作介绍之后会把原数组指向新数组
- 4、CopyOnWriteArrayList允许在写操作时来读取数据，大大提高了读的性能，因此此适合读多写少的应用场景，但是CopyOnWriteArrayList会比较占内存，同时可能读到的数据不是实时最新的数据，所有不适合实时性要求很高的场景

### HashMap和HashTable有什么区别？底层实现是什么

- HashMap方法没有`synchronized`修饰，线程不安全；HashTable线程安全
- HashMap允许key和value为null，而HashTable不允许

### ArrayList list=new	ArrayList(10)中的list扩容几次☆☆

![image-20230628112442241](https://gitee.com/tjlxy/img/raw/master/image-20230628112442241.png)

该语句只是声明和实例了一个 ArrayList，指定了容量为 10，未扩容

在ArrayList的源码中提供了一个带参数的构造方法，这个参数就是 指定的集合初始长度，所以给了一个10的参数，就是指定了集合的初始长度是10，这里面并没有扩容。

### 如何实现数组和List之间的转换☆☆

![image-20230628112508529](https://gitee.com/tjlxy/img/raw/master/image-20230628112508529.png)

- 数组转List ，使用JDK中java.util.Arrays工具类的asList方法 
- List转数组，使用List的toArray方法。无参toArray方法返回 Object数组，传入初始化长度的数组对象，返回该对象数组

#### 用Arrays.asList转List后，如果修改了数组内容，list受影响吗 

数组转List受影响

Arrays.asList转换list之后，如果修改了数组的内容，list会受影响，因为它的底层使用的Arrays类中的一个内部类ArrayList来构造的集合，在这个集合的构造器中，把我们传入的这个集合进行了包装而已，最终指向的都是同一个内存地址

#### List用toArray转数组后，如果修改了List内容，数组受影响吗

List转数组不受影响

list用了toArray转数组后，如果修改了list内容，数组不会影响，当调用了toArray 以后，在底层是它是进行了数组的拷贝，跟原来的元素就没啥关系了，所以即使 list修改了以后，数组也不受影响

![image-20230628112736563](https://gitee.com/tjlxy/img/raw/master/image-20230628112736563.png)

### ArrayList底层是如何实现的

我主要说一下add方法吧 

第一：确保数组已使用长度（size）加1之后足够存下下一个数据 

第二：计算数组的容量，如果当前数组已使用长度+1后的大于当前的数组长度，则调用grow方法扩容（原来的1.5倍） 

第三：确保新增的数据有地方存储之后，则将新元素添加到位于size的位置 上。 

第四：返回添加成功布尔值。

### ArrayList 和 LinkedList 不是线程安全的，在项目中是如何解决这个的线程安全问题的

第一：我们使用这个集合，优先在方法内使用，定义为局部变量，这样的话，就不会出现线程安全问题。

第二：如果非要在成员变量中使用的话，可以使用线程安全的集合来替代 ArrayList可以通过Collections 的 synchronizedList 方法将 ArrayList 转换成线程安全的容器后再使用。

LinkedList 换成ConcurrentLinkedQueue来使用

### HashMap的实现原理

- 1、底层使用hash表数据结构，即数组+（链表 | 红黑树） 

- 2、添加数据时，计算key的值确定元素在数组中的下标 

   key相同则替换 

   不同则存入链表或红黑树中

- 3、获取数据通过key的hash计算数组下标获取元素



## 常见算法

### 查找算法

#### 1. 基本查找/顺序查找

```java
package com.lxy25122.search;

/**
 * @user 25122
 * @date 2023/8/27
 * @time 20:52
 * @description 基本查找/顺序查找
 * 核心：从第0个索引开始挨个往后查找
 */
public class A01_BasicSearchDemo1 {

    /**
     * 需求：定义一个方法利用基本查找，查询某个元素是否存在
     * 数据如下：{132,12,43,64,3,75,3,1}
     */
    public static void main(String[] args) {
        int [] arr = {132,12,43,64,3,75,3,1};
        int number = 132;
        boolean result = basicSearch(arr, number);
        System.out.println(result);
    } 

    /**
     *
     * @param arr 数组
     * @param number 要查找的元素
     * @return 元素是否存在
     */
    public static boolean basicSearch(int[] arr, int number){
        //利用基本查找来查找number在arr数组中是否存在
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == number) return true;
        }
        return false;
    }

}
```

**扩展**

```java
package com.lxy25122.search;

import java.util.ArrayList;
import java.util.List;

/**
 * @user 25122
 * @date 2023/8/27
 * @time 20:52
 * @description 基本查找/顺序查找
 * 核心：从第0个索引开始挨个往后查找
 */
public class A01_BasicSearchDemo2 {

    /**
     * Exe1
     * 需求：定义一个方法利用基本查找，查询某个元素在数组中的索引
     * 要求：不需要考虑数组中元素是否重复
     * <p>
     * Exe2：
     * 需求：定义一个方法利用基本查找，查询某个元素在数组中的索引
     * 要求：需要考虑数组中元素有重复的可能性
     * {132,12,43,64,3,75,3,1,12}
     * 需要查找12，想要返回的是所有索引 1 8
     * 如果要返回多个数据的话，可以把这些数据放到数组或者集合中
     */
    public static void main(String[] args) {
        int[] arr = {132, 12, 43, 64, 3, 75, 3, 1, 12};
        int number = 2;
        int index = exe1(arr, number);
        System.out.println(index);
        System.out.println("---------------------");
        List<Integer> integers = exe2(arr, 12);
        System.out.println(integers);
    }


    public static int exe1(int[] arr, int number) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == number) return i;
        }
        return -1;
    }

    public static List<Integer> exe2(int[] arr, int number) {
        ArrayList<Integer> arrayList = new ArrayList<Integer>();
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == number) arrayList.add(i);
        }
        return arrayList;
    }


}
```

#### 2. 二分查找/折半查找

```java
package com.lxy25122.search;

/**
 * @user 25122
 * @date 2023/8/28
 * @time 20:20
 * @description 二分查找/折半查找
 * 核心：每次排除一半的查找范围
 * 1、数据必须是有序的（前提）
 * 2、查找过程：
 *  min和max表示当前要查找的范围
 *  mid在min和max中间的
 *  如果要查找的元素在mid的左边，在缩小范围的时候，min不变，max等于mid减1
 *  如果要查找的元素在mid的右边，在缩小范围的时候，max不变，min等于mid加1
 * <br></br>
 * 二分查找：mid每次都是指向范围的中间位置
 * 插值查找：mid尽可能的靠近要查找的数据，但是要求数据尽可能分别均匀
 * 斐波那契查找：根据黄金分割点来计算mid指向的位置
 */
public class A02_BinarySearchDemo1 {

    /**
     * 需求：定义一个方法利用二分查找，查询某个元素在数组中的索引
     * 数据如下：{2,7,9,13,25,26,47,58,70,99,121}
     * min      mid     max
     */
    public static void main(String[] args) {
        int[] arr = {2,7,9,13,25,26,47,58,70,99,121};
        int index = binarySearch(arr, 13);
        System.out.println(index);
    }

    /**
     * 二分查找/折半查找
     * @param arr 数组
     * @param number 要查找的元素
     * @return 索引位置
     */
    public static int binarySearch(int[] arr, int number){
        //1、定义两个变量，记录要查找的范围
        int min = 0;
        int max =arr.length - 1;
        //2、利用循环不断的去找要查找的数据
        while (true){
            if (min > max){
                return -1;
            }
            //3、找到min和max的中间位置 mid
            int mid = (min + max)/2;
            //4、拿着mid指向的元素跟要查找的元素进行比较
            if (number < arr[mid]){
                //4.1、number在mid的左边
                // min不变，max=mid-1
                max = mid - 1;
            }else if (number > arr[mid]){
                //4.2、number在mid的右边
                //min = mid + 1，max不变
                min = mid + 1;
            }else {
                //4.3、number跟mid指向的元素一样
                //mid = number
                return mid;
            }
        }
    }

}

```

#### 3. 插值查找

```java
public class InterpolationSearch {  
    public static int interpolationSearch(int[] arr, int x) {  
        int low = 0;  
        int high = arr.length - 1;  
  
        while (low <= high && x >= arr[low] && x <= arr[high]) {  
            if (low == high) {  
                if (arr[low] == x) return low;  
                return -1;  
            }  
  
            int pos = low + ((x - arr[low]) * (high - low)) / (arr[high] - arr[low]);  
  
            if (arr[pos] == x) return pos;  
  
            if (arr[pos] < x) low = pos + 1;  
            else high = pos - 1;  
        }  
  
        return -1;  
    }  
  
    public static void main(String[] args) {  
        int[] arr = {1, 3, 5, 7, 9, 11, 13, 15};  
        int x = 7;  
        int index = interpolationSearch(arr, x);  
        if (index != -1) System.out.println("Element found at index: " + index);  
        else System.out.println("Element not found in the array");  
    }  
}
```

在这个程序中，我们首先设定一个低位(low)和高位(high)。然后，我们使用目标值(x)与数组的低端和高端的差值，来计算出一个位置(pos)。这个位置是根据插值公式计算出来的，这个公式就是 `pos = low + ((x - arr[low]) * (high - low)) / (arr[high] - arr[low])`。然后我们检查这个位置的值是否等于目标值。如果等于，我们就返回这个位置。如果这个位置的值小于目标值，我们就把低位移动到这个位置的右边一位。否则，我们就把高端移动到这个位置的左边一位。然后我们重复这个过程，直到低位大于高端，或者我们找到目标值。

#### 4. 分块查找

```java
package com.lxy25122.search;

/**
 * @user 25122
 * @date 2023/8/28
 * @time 21:35
 * @description 分块查找
 * 核心思想：块内无序，块间有序
 * 实现步骤：
 *  1、创建数组BlockArr存放每一块对象的信息
 *  2、先查找blockArr确定要查找的数据属于那一块
 *  3、再单独遍历这一块数据即可
 */
public class A03_BlockSearchDemo1 {

    public static void main(String[] args) {

        int[] arr = {
                16, 5, 9, 12, 21, 18,
                32, 23, 37, 26, 45, 34,
                50, 48, 61, 52, 73, 66
        };
        //1. 要把数据进行分块
        //  要分为几块：arr.length=18 开根号 4.24块
        //  18/4 = 4.5块

        //创建三个块的对象
        Block block1 = new Block(21,0,5);
        Block block2 = new Block(45,6,11);
        Block block3 = new Block(66,12,17);

        //定义数组用来管理三个块的对象（索引表）
        Block[] blockArr = {block1,block2,block3};

        //定义一个变量用来记录要查找的元素
        int number = 37;

        //调用方法，传递、索引表，数组，要查找的元素
        int index = getIndex(blockArr,arr,number);
        System.out.println(index);

    }

    /**
     * 利用分块查找的原理，查询number的索引 ✔
     * @param blockArr
     * @param arr
     * @param number
     * @return
     */
    private static int getIndex(Block[] blockArr, int[] arr, int number) {
        //1.确定number在那一块当中
        int indexBlock = findIndexBlock(blockArr, number);
        if (indexBlock == -1){
            //表示number不在数组当中
            return -1;
        }
        //2. 获取这一块的起始索引和结束索引
        //获取当前块的对象
        Block block = blockArr[indexBlock];
        int startIndex = block.getStartIndex();
        int endIndex = block.getEndIndex();
        //3. 遍历原始数组
        for (int i = startIndex; i <= endIndex; i++){
            if (arr[i] == number){
                return i;
            }
        }
        return -1;
    }

    /**
     * 确定number在索引表的位置
     * @return
     */
    public static int findIndexBlock(Block[] blockArr, int number){
//        Block block1 = new Block(21,0,5);     ---0
//        Block block2 = new Block(45,6,11);    ---1
//        Block block3 = new Block(66,12,17);   ---2
        //从0索引开始遍历blockArr，如果number小于max，那么就表示number是在这一块当中的
        for (int i = 0; i < blockArr.length; i++) {
            if (number <= blockArr[i].getMax()){
                return i;
            }
        }
        return -1;
    }


}

class Block{

    private int max;//最大值
    private int startIndex;//起始索引
    private int endIndex;//结束索引

    public Block() {
    }

    public Block(int max, int startIndex, int endIndex) {
        this.max = max;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
    }

    public int getMax() {
        return max;
    }

    public void setMax(int max) {
        this.max = max;
    }

    public int getStartIndex() {
        return startIndex;
    }

    public void setStartIndex(int startIndex) {
        this.startIndex = startIndex;
    }

    public int getEndIndex() {
        return endIndex;
    }

    public void setEndIndex(int endIndex) {
        this.endIndex = endIndex;
    }
}

```

**扩展**

```java
package com.lxy25122.search;

/**
 * @user 25122
 * @date 2023/8/28
 * @time 21:35
 * @description 【扩展的分块查找，块内无序，块外无序】
 * 核心思想：块内无序，块间有序
 * 实现步骤：
 *  1、创建数组BlockArr存放每一块对象的信息
 *  2、先查找blockArr确定要查找的数据属于那一块
 *  3、再单独遍历这一块数据即可
 */
public class A03_BlockSearchDemo2 {

    public static void main(String[] args) {

        int[] arr = {
                27, 22, 30, 40, 36,
                13, 19, 16, 20,
                7, 10,
                43, 50, 48
        };
        //1. 要把数据进行分块
        //  要分为几块：arr.length=18 开根号 4.24块
        //  18/4 = 4.5块

        //创建四个块的对象
        Block2 block1 = new Block2(40,22,0,4);
        Block2 block2 = new Block2(20,13,5,8);
        Block2 block3 = new Block2(10,7,9,10);
        Block2 block4 = new Block2(50,43,11,13);

        //定义数组用来管理三个块的对象（索引表）
        Block2[] blockArr = {block1,block2,block3,block4};

        //定义一个变量用来记录要查找的元素
        int number = 7;

        //调用方法，传递、索引表，数组，要查找的元素
        int index = getIndex(blockArr,arr,number);
        System.out.println(index);

    }

    /**
     * 利用分块查找的原理，查询number的索引 ✔
     * @param blockArr
     * @param arr
     * @param number
     * @return
     */
    private static int getIndex(Block2[] blockArr, int[] arr, int number) {
        //1.确定number在那一块当中
        int indexBlock = findIndexBlock(blockArr, number);
        if (indexBlock == -1){
            //表示number不在数组当中
            return -1;
        }
        //2. 获取这一块的起始索引和结束索引
        //获取当前块的对象
        Block2 block = blockArr[indexBlock];
        int startIndex = block.getStartIndex();
        int endIndex = block.getEndIndex();
        //3. 遍历原始数组
        for (int i = startIndex; i <= endIndex; i++){
            if (arr[i] == number){
                return i;
            }
        }
        return -1;
    }

    /**
     * 确定number在索引表的位置
     * @return
     */
    public static int findIndexBlock(Block2[] blockArr, int number){
//        Block2 block1 = new Block2(40,22,0,4);        --0
//        Block2 block2 = new Block2(20,13,5,8);        --1
//        Block2 block3 = new Block2(10,7,9,10);        --2
//        Block2 block4 = new Block2(50,43,11,13);      --3
        //从0索引开始遍历blockArr，如果number小于max，那么就表示number是在这一块当中的
        for (int i = 0; i < blockArr.length; i++) {
            if (number <= blockArr[i].getMax() && blockArr[i].getMin() <= number){
                return i;
            }
        }
        return -1;
    }


}

class Block2{

    private int max;//最大值
    private int min;//最小值
    private int startIndex;//起始索引
    private int endIndex;//结束索引

    public Block2() {
    }

    public Block2(int max, int min, int startIndex, int endIndex) {
        this.max = max;
        this.min = min;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
    }

    public int getMax() {
        return max;
    }

    public void setMax(int max) {
        this.max = max;
    }

    public int getMin() {
        return min;
    }

    public void setMin(int min) {
        this.min = min;
    }

    public int getStartIndex() {
        return startIndex;
    }

    public void setStartIndex(int startIndex) {
        this.startIndex = startIndex;
    }

    public int getEndIndex() {
        return endIndex;
    }

    public void setEndIndex(int endIndex) {
        this.endIndex = endIndex;
    }

}
```

### 排序算法

#### 1.冒泡排序✔

相邻的数据两两比较，小的放前面，大的放后面。

```java
package com.lxy25122.mysort;

/**
 * @user 25122
 * @date 2023/9/3
 * @time 10:43
 * @description 冒泡排序
 * 核心思想
 * 1、相邻的元素两两比较，大的放右边，小的放左边。
 * 2、第一轮比较完毕之后，最大值就已经确定，第二轮可以少循环一次，后面以此类推。
 * 3、如果数组中有n个数据，总共我们只要执行n-1轮的代码就可以。
 *
 */
public class A01_BubbleDemo1 {

    public static void main(String[] args) {

        //1.定义数组
        int[] arr = {2, 4, 5, 3, 1};
        //2.利用冒泡排序将数组中的数据变成 1 2 3 4 5
        //第一轮：结束之后，最大值在数组的最右边。。。。5
//        for (int i = 0; i < arr.length - 1; i++) {
//            //i 依次表示数组中的每一个索引： 0 1 2 3 4
//            if (arr[i] > arr[i + 1]){
//                int temp = arr[i];
//                arr[i] = arr[i + 1];
//                arr[i + 1] = temp;
//            }
//        }
//        printArr(arr);
//        //第二轮：
//        for (int i = 0; i < arr.length - 1 - 1; i++) {
//            //i 依次表示数组中的每一个索引： 0 1 2 3 4
//            if (arr[i] > arr[i + 1]){
//                int temp = arr[i];
//                arr[i] = arr[i + 1];
//                arr[i + 1] = temp;
//            }
//        }
//        printArr(arr);
        //最终代码：
        //外循环：表示我要执行多少轮，如果有n个数据，那么执行n-1轮
        for (int i = 0; i < arr.length - 1; i++) { // 0 1 2 3
            //内循环：每一轮中我如何比较数据并找到当前的最大值
            //-1：为了防止索引越界
            //-i：提高效率，每一轮执行的次数应该比上一轮少一次
            for (int j = 0; j < arr.length - 1 - i; j++){
                //i 依次表示数组中的每一个索引： 0 1 2 3 4
                if (arr[j] > arr[j + 1]){
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
            printArr(arr);
        }

    }

    public static void printArr(int[] arr){
        //3.遍历数组
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "、");
        }
        System.out.println();
    }

}
```



#### 2.选择排序✔

从0索引开始，拿着每一个索引上的元素跟后面的元素依次比较，小的放前面，大的放后面，依次类推

```java
package com.lxy25122.mysort;

/**
 * @user 25122
 * @date 2023/9/4
 * @time 21:27
 * @description 选择排序
 * 1、从 0 索引开始，跟后面的元素一一比较。
 * 2、小的放前面，大的放后面。
 * 3、第一次循环结束后，最小的数据已经确定。
 * 4、第二次循环从 1 索引开始以此类推。
 */
public class A02_SelectionDemo1 {

    public static void main(String[] args) {
        //1.定义数组
        int[] arr = {2, 4, 5, 3, 1};
        //2.利用选择排序让数组变成 1 2 3 4 5
        //第一轮：从 0 索引开始，跟后面元素一一比较
//        for (int i = 0 + 1; i < arr.length; i++) {
//            //拿着 0 索引跟后面的数据进行比较
//            if (arr[0] > arr[i]){
//                int temp = arr[0];
//                arr[0] = arr[i];
//                arr[i] = temp;
//            }
//        }
        //最终代码：
        //外循环：i 表示这一轮中，拿着哪个索引上的数据跟后面的数据进行比较并交换
        for (int i = 0; i < arr.length - 1; i++) {
            //内循环：拿着 i 跟 i 后面的数据进行比较交换
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]){
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        printArr(arr);
    }


    public static void printArr(int[] arr){
        //3.遍历数组
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "、");
        }
        System.out.println();
    }

}

```





#### 3.插入排序

将数组分为有序和无序两组，遍历无序数据，将元素插入有序序列中即可

```java
package com.lxy25122.mysort;

/**
 * @user 25122
 * @date 2023/9/6
 * @time 10:39
 * @description 插入排序
 * 将 0 索引的元素到 N 索引的元素看做是有序的，把 N+1 索引的元素到最后一个当做是无序的，
 * 遍历无序的数据，将遍历的元素插入有序序列中适当位置，如遇到相同数据，插在后面，
 * N 的范围：0到最大索引
 */
public class A03_InsertDemo1 {

    public static void main(String[] args) {
        int[] arr = {3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48};
        //1.找到无序的那一组数据是从哪个索引开始的。index-2
        int startIndex = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]){
                System.out.println(i);//表示有序的那一组数据到 1 索引就结束了
                startIndex = i + 1;
                break;
            }
        }
        System.out.println("------------------");
        //2.遍历从startIndex 开始到最后一个元素，依次得到无序的那一组数据中的每一个元素
//        int[] arr = {3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48};

        for (int i = startIndex; i < arr.length; i++) {
//            System.out.println(arr[i]);
            //开始向有序的数据中插入
            //记录当前要插入数据的索引
            int j = i;
            while (j > 0 && arr[j] < arr[j - 1]){
                //交换位置
                int temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                j--;
            }

            //修改这个索引

        }

        printArr(arr);

    }

    public static void printArr(int[] arr){
        //3.遍历数组
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "、");
        }
        System.out.println();
    }

}

```





#### 4.快速排序

**递归算法**

指的是方法中调用本身的现象

注意：递归一定要有出口，否则就会出现内存溢出

作用：

- 把一个复杂的问题层层转化为一个**与原问题相似的规模较小**的问题
- 递归策略只需**少量的程序**就可描述出解题过程所需要的多次重复计算

核心：

- 找出口：什么时候不再调用方法
- 找规则：如何把大问题变成规模较小的问题

eg：递归求和，求1-100之间的和

```java
package com.lxy25122.mysort;

/**
 * @user 25122
 * @date 2023/9/11
 * @time 20:46
 * @description 递归求1-100之间的和
 * 100 + 99 + 98 + .. + 2 + 1
 * 1~100 = 100 + (1~99)
 * 1~99 = 99 + (1~98)
 * 1~98 = 98 + (1~97)
 * ...
 * 1~3 = 3 + (1 ~ 2)
 * 1~2 = 2 + (1 ~ 1)
 * 1~1 = 1(递归出口)
 */
public class A04_RecursionDemo2 {

    public static void main(String[] args) {
        int sum = getSum(100);
        System.out.println(sum);//5050
    }

    public static int getSum(int number){
        //如果是1
        if (number == 1){
            return 1;
        }
        //如果不是1
        return number + getSum(number - 1);
    }

}

```

eg：递归求5的阶乘

```java
package com.lxy25122.mysort;

/**
 * @user 25122
 * @date 2023/9/11
 * @time 20:46
 * @description 递归求5的阶乘
 * 核心：
 *
 * - 找出口：什么时候不再调用方法
 * - 找规则：如何把大问题变成规模较小的问题
 * 5! = 5 * 4!
 * 4! = 4 * 3!
 * 3! = 3 * 2!
 * 2! = 2 * 1!
 * 1! = 1(递归出口)
 */
public class A04_RecursionDemo3 {

    public static void main(String[] args) {

        int sum2 = deliveryX(5);
        System.out.println(sum2);//120
    }

    public static int deliveryX(int number){
        if (number == 1){
            return 1;
        }
        return number * deliveryX(number - 1);
    }


}

```

**快速排序**

第一轮：把0索引的数字作为基准数，确定基准数在数组中正确的位置。比基准数小的全部在左边，比基准数大的全部在右边

后续递归操作，完成排序

```java
package com.lxy25122.mysort;

import javafx.scene.input.DataFormat;

import java.util.Date;

/**
 * @user 25122
 * @date 2023/9/12
 * @time 16:05
 * @description 快速排序
 * 第一轮：
 * 把 0 索引的数字作为基准数，确定基准数在数组中正确的位置。
 * 比基准数小的全部在左边，比基准数大的全部在右边，【先从结束索引开始比较】
 * 后面以此类推， end索引和start索引都移动位置后 进行互换
 *
 */
public class A05_QuickSortDemo {

    public static void main(String[] args) {
        /**
         *    {6, 1【start】, 2, 7, 9, 3, 4, 5, 10, 8【end】} end
         *    基准数：0->6，起始索引：1->1，结束索引：arr.length-1->8
         *    6,1【start】,2,7,9,3,4,5【end】,10,8 start
         *    6,1,2,5【start】,9,3,4,7【end】,10,8 end
         *    6,1,2,5,4【start】,3,9【end】,7,10,8 start
         *    6,1,2,5,4【start】,3【end】,9,7,10,8 end
         *    6,1,2,5,4,3【start】【end】,9,7,10,8 start
         *    3,1,2,5,4,6【start|end】，9,7,10,8 一轮结束
         */
        int arr[] = {6, 1, 2, 7, 9, 3, 4, 5, 10, 8};
        long start = System.currentTimeMillis();
        quickSort(arr,0,arr.length - 1);
        long end = System.currentTimeMillis();
        System.out.println(end - start);
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + ",");
        }
    }

    /**
     * 快速排序
     * @param arr 要排序的数组
     * @param startIndex 数组的起始索引
     * @param endIndex  数组的结束索引
     */
    public static void quickSort(int arr[], int startIndex, int endIndex){
        //定义两个变量记录要查找的范围
        int start = startIndex;
        int end = endIndex;

        if (start > end){
            //递归出口
            return;
        }

        //记录基准数
        int baseNumber = arr[startIndex];
        //利用循环找到要交换的数字
        while (start != end){
            //1、利用 end 从后往前开始找，比基准数小的数字
            while (true){
                //结束索引位置 <= 起始索引位置 || 结束索引位置的值 < 基准数
                if (end <= start || arr[end] < baseNumber){
                    break;
                }
                end--;//不满足条件，结束索引向左移一位
            }
            //2、利用 start 从前往后找，比基准数大的数字
            while (true){
                //结束索引位置 <= 起始索引位置 || 起始索引位置的值 > 基准数
                if (end <= start || arr[start] > baseNumber){
                    break;
                }
                start++;//不满足条件，起始索引向右移一位
            }
            //交换 end 和 start 指向的元素
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
        }
        //当start和end指向了同一个元素的时候，那么上面的循环就会结束
        //表示已经找到了基准数在数组中应存入的位置
        //3、基准数归位 就是拿着这个范围中的第一个数字，跟start指向的元素进行交换
        int temp = arr[startIndex];
        arr[startIndex] = arr[start];
        arr[start] = temp;
        //一轮结束结果：3,1,2,5,4,6,9,7,10,8,
        //确定 6 左边的范围，重复刚刚调用【递归】
        quickSort(arr,startIndex,start - 1);
        //确定 6 右边的范围【递归】
        quickSort(arr, start + 1, endIndex);

    }

}

```



### 综合练习

#### 1.按照要求进行排序

定义数组并存储一些女朋友对象，利用Arrays中的sort方法进行排序

要求1：属性有姓名、年龄、身高。

要求2：按照年龄的大小进行排序，年龄一样，按照身高排序，身高一样按照姓名的字母进行排序。

(姓名中不要有中文或特殊字符，会涉及到后面的知识)

**GirlFriend.java**

```java
package com.lxy25122.testExe;

import jdk.nashorn.internal.objects.annotations.Constructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @user 25122
 * @date 2023/9/14
 * @time 15:54
 * @description 练习一
 *
 * 要求1：属性有姓名、年龄、身高。
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GirlFriend {

    private String name;

    private Integer age;

    private double height;


}
```

**Test1.java**

```java
package com.lxy25122.testExe;

import java.util.Arrays;
import java.util.Comparator;

/**
 * @user 25122
 * @date 2023/9/14
 * @time 15:51
 * @description 练习一
 * 定义数组并存储一些女朋友对象，利用Arrays中的sort方法进行排序
 *
 * 要求1：属性有姓名、年龄、身高。
 *
 * 要求2：按照年龄的大小进行排序，年龄一样，按照身高排序，身高一样按照姓名的字母进行排序。
 *
 * (姓名中不要有中文或特殊字符，会涉及到后面的知识)
 *
 */
public class Test1 {

    public static void main(String[] args) {

        //1.创建三个女朋友对象
        GirlFriend gf1 = new GirlFriend("xiaotu",18,1.67);
        GirlFriend gf2 = new GirlFriend("xiaobai",18,1.67);
        GirlFriend gf3 = new GirlFriend("xiaomei",21,1.65);
        //2.定义数组存储女朋友信息
        GirlFriend[] arr = {gf1,gf2,gf3};
        //3.利用Arrays 中的 sort 方法进行排序
//        //匿名内部类方式
//        Arrays.sort(arr, new Comparator<GirlFriend>() {
//            @Override
//            public int compare(GirlFriend o1, GirlFriend o2) {
//                //要求2：按照年龄的大小进行排序，年龄一样，按照身高排序，身高一样按照姓名的字母进行排序。
//                double temp = o1.getAge() - o2.getAge();//比较年龄
//                temp = temp == 0 ? o1.getHeight() - o2.getHeight() : temp;//比较身高
//                temp = temp == 0 ? o1.getName().compareTo(o2.getName()) : temp;//比较姓名字母
//                if (temp > 0){
//                    return 1;
//                }else if (temp < 0){
//                    return -1;
//                }else {
//                    return 0;
//                }
//            }
//        });
        //Lambda方式
        Arrays.sort(arr, (o1, o2) -> {
                //要求2：按照年龄的大小进行排序，年龄一样，按照身高排序，身高一样按照姓名的字母进行排序。
                double temp = o1.getAge() - o2.getAge();//比较年龄
                temp = temp == 0 ? o1.getHeight() - o2.getHeight() : temp;//比较身高
                temp = temp == 0 ? o1.getName().compareTo(o2.getName()) : temp;//比较姓名字母
                if (temp > 0){
                    return 1;
                }else if (temp < 0){
                    return -1;
                }else {
                    return 0;
                }
            }
        );
        //4.展示数组中的内容
        System.out.println(Arrays.toString(arr));


    }


}

```

#### 2.不死神兔

有一个很有名的数学逻辑题叫做不死神兔问题，有一对兔子，从出生后第三个月起每个月都生一对兔子,小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问第十二个月的兔子对数为多少？

![image-20230915133528986](https://gitee.com/tjlxy/img/raw/master/image-20230915133528986.png)

```java
package com.lxy25122.testExe;

/**
 * @user 25122
 * @date 2023/9/15
 * @time 13:36
 * @description 不死神兔
 * 有一个很有名的数学逻辑题叫做不死神兔问题，有一对兔子，从出生后第三个月起每个月都生一对兔子,
 * 小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问第十二个月的兔子对数为多少？
 * 特点：从第三个数据开始，是前两个数据的和（斐波那契数列）
 */
public class Test2 {

    public static void main(String[] args) {
        //求解一：
        //1.创建一个长度为12的数组
        int[] arr = new int[12];
        //2.手动给 0 索引和 1 索引的数据进行赋值
        arr[0] = 1;
        arr[1] = 1;
        //3.利用循环给剩余的数据进行赋值
        for (int i = 2; i < arr.length; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];

        }
        //4.获取最大索引上的数据即可
        System.out.println(arr[11]);
        System.out.println("-------------------------");

        //求解二：
        /**
         * 递归的方式去完成
         * 1.递归的出口
         * 2.找到递归的规律
         * Fn(12) = Fn(11) + Fn(10)
         * Fn(11) = Fn(10) + Fn(9)
         * Fn(10) = Fn(9) + Fn(8)
         * ...
         * Fn(3) = F(2) + F(1)
         * Fn(2) = 1
         * Fn(1) = 1
         */
        System.out.println(getSum(12));
    }

    public static Integer getSum(int month){
        if (month == 1 || month == 2){
            return 1;
        }else {
            return getSum(month - 1) + getSum(month - 2);
        }
    }

}

```



#### 3.猴子吃桃子

有一堆桃子，猴子第一天吃了其中的一半，并多吃了一个！

以后每天猴子都吃当前剩下来的一半，然后再多吃一个，

第18天的时候（还没吃），发现只利下一个桃子了，请问，最初总共多少个桃子？

```java
package com.lxy25122.testExe;

/**
 * @user 25122
 * @date 2023/9/16
 * @time 21:13
 * @description 猴子吃桃子
 * 有一堆桃子，猴子第一天吃了其中的一半，并多吃了一个！
 * 以后每天猴子都吃当前剩下来的一半，然后再多吃一个，
 * 第18天的时候（还没吃），发现只利下一个桃子了，请问，最初总共多少个桃子？
 *
 * 分析：
 * day 10：  1
 * day 9：   (day10 + 1) * 2 = 4
 * day 8：   (day9 + 1) * 2 = 10
 * day 7：   (day8 + 1) * 2 = 22
 * ...
 * day 1:   (day2 + 1) * 2 = ?
 *
 *
 * 1.出口
 *  day==10 剩下1
 * 2.规律
 *  每一天桃子数量都是后一天数量加1，乘以2
 *
 *  反向递归
 */
public class Test3 {

    public static void main(String[] args) {
//        long start = System.currentTimeMillis();
        int count = getCount(1);
//        long end = System.currentTimeMillis();
        System.out.println(count);
//        System.out.println(start - end);
    }

    public static int getCount(int day){
        if (day <= 0 || day >11){
            System.out.println("当前时间错误");
            return -1;
        }
        //递归出口
        if (day == 10){
            return 1;
        }else {
            return (getCount(day + 1) + 1) * 2;
        }

    }

}

```



#### 4.爬楼梯

可爱的小明特别喜欢爬楼梯，他有的时候一次爬一个台阶，有的时候一次爬两个台阶。

如果这个楼梯有20个台阶，小明一共有多少种爬法呢？

运算结果：

1层台阶、1种爬法

2层台阶、2种爬法

7层台阶、21种爬法

```java
package com.lxy25122.testExe;

/**
 * @user 25122
 * @date 2023/9/17
 * @time 11:26
 * @description 爬楼梯
 * 可爱的小明特别喜欢爬楼梯，他有的时候一次爬一个台阶，有的时候一次爬两个台阶。
 *
 * 如果这个楼梯有20个台阶，小明一共有多少种爬法呢？
 * 运算结果：
 *
 * 1 层台阶、1种爬法
 *
 * 2 层台阶、2种爬法
 *
 * 7 层台阶、21种爬法
 *
 * --------------------------
 * 分析：
 * 1    1
 * 2    11,2
 * 3    111,12,21
 * 4    1111,112,121,211,22
 * 5    11111,1112,1121,1211,122,2111,212,221,
 */
public class Test4 {

    public static void main(String[] args) {
        System.out.println(getCount(20));
    }

    public static int getCount(int n){
        if (n == 1){
            return 1;
        }
        if (n == 2){
            return 2;
        }
        return getCount(n - 1) + getCount(n - 2);
    }

}

```

**扩展**

可爱的小明特别喜欢爬楼梯，他有的时候一次爬一个台阶，有的时候一次爬两个台阶，有的时候一次爬三个台阶。

如果这个楼梯有20个台阶，小明一共有多少种爬法呢？

```java
package com.lxy25122.testExe;

/**
 * @user 25122
 * @date 2023/9/17
 * @time 11:26
 * @description 爬楼梯
 * 可爱的小明特别喜欢爬楼梯，他有的时候一次爬一个台阶，有的时候一次爬两个台阶，有的时候一次爬三个台阶。
 *
 * 如果这个楼梯有20个台阶，小明一共有多少种爬法呢？
 * 运算结果：
 *
 * 1 层台阶、1种爬法
 *
 * 2 层台阶、2种爬法
 *
 *
 *
 * --------------------------
 * 分析：
 * 1    1                                                           1
 * 2    11,2                                                        2
 * 3    111,12,21,3                                                 4
 * 4    1111,112,121,13,211,22,31                                   7
 * 5    11111,1112,1121,113,1211,122,131,
 *      2111,212,221,23,
 *      311,32                                                      13
 * 6    111111,11112,11121,1113,11211,1122,1131,12111,1212,1221,123,1311,132
 *      21111,2112,2121,213,2211,222,231
 *      3111,312,321,33                                             24
 *
 */
public class Test5 {

    public static void main(String[] args) {
        System.out.println(getCount(1));
        System.out.println(getCount(2));
        System.out.println(getCount(3));
        System.out.println(getCount(4));
        System.out.println(getCount(5));
        System.out.println(getCount(6));
    }

    public static int getCount(int n){
        if (n == 1){
            return 1;
        }else if (n == 2){
            return 2;
        }else if (n == 3){
            return 4;
        }
        return getCount(n - 1) + getCount(n - 2) + getCount(n - 3);
    }

}

```



