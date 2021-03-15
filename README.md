[toc]

# 前端知识地图

## **原生JS**

### `名词与基础概念`

*基础概念*
- javascript 是单线程语言
    > 在浏览器中，一个页面只有一个线程执行JS代码。

- javascript 是异步执行的，通过事件循环（Event Loop）的方式实现
    > 代码解析十分迅速，不会发生解析阻塞。

*名词*
- 引擎、编译器与作用域
    > 引擎：从头到尾负责整个javascript程序的编译及执行过程。浏览器不同，其引擎也不同，比如Chrome采用的是v8，Safari采用的是SquirrelFish Extreme。
    > 
    > 编译器：编译过程主要分为”词法分析”、“语法分析”及“代码生成“。
    >
    > 作用域（Scope）：根据名称查找变量的一套规则，用于管理引擎如何在当前作用域以及嵌套的子作用域中根据标识符名称进行变量查找。

- 执行上下文（Excution Context EC）&& 执行上下文栈（Excution Context Stack ECS）
    > 存在三种 EC：全局执行上下文  GlobalEC ，函数执行上下文  Function EC，Eval。
    > 
    > ECS：引擎记录EC的容器，栈底是 GlobalEC ，只有在关闭页面时出栈；栈顶是当前正在执行的 EC ，函数执行完毕后出栈，并将执行权交给下一个 EC 。

- 变量对象（Variable Object）&& 活动对象（Activation Object）
    > 存储当前EC中变量声明（必须是 var 关键字声明而不是 let 与 const）与函数声明（必须是显式声明而不是表达式）的容器。

- LHS（Left Hand Side） && RHS（Right Hand Side）
    > LHS：赋值操作的目标。例如：a=2; 是对 a 进行 LHS查询。
    > 
    > RHS：赋值操作的源头。例如：console.log(a); 是对 a 进行 RHS查询。
    >
    > 非严格模式下，LHS查询不到变量会在顶层作用域创建具有该名称的变量，RHS查询不到变量会报ReferenceError的异常；严格模式下禁止自动创建全局变量，两种查询方式失败均报ReferenceError的异常。

### `JS执行流程`

JS执行流程如下：

JS执行流-->语法检查-->预编译-->执行

在预编译阶段主要进行两件事，创建当前环境EC，EC入栈

创建当前环境EC流程如下：

1. 初始化作用域[[Scope]]，（拷贝传入的父执行上下文的Scope），数据结构应该是数组或者链表。
 
        例如：[[Scope]] : AO1（当前）-->VO（全局）

2. 创建活动对象，创建完成之后，将活动对象推入作用域链的最前端：

        例如：[[Scope]] : AO2（当前）-->AO1（父级）-->VO（全局）

   2.1. 创建arguments对象，检查上下文，初始化参数名称和值并创建引用的复制。

    2.2. 扫描上下文的函数声明（而非函数表达式）：

        为发现的每一个函数，在变量对象上创建一个属性——确切的说是函数的名字——其有一个指向函数在内存中的引用。如果函数的名字已经存在，引用指针将被重写。函数声明比变量优先级要高，并且定义过程不会被变量覆盖，除非是赋值

    2.3. 扫描上下文的变量声明：

        为发现的每个变量声明，在变量对象上创建一个属性——就是变量的名字，并且将变量的值初始化为undefined，如果变量的名字已经在变量对象里存在，将不会进行任何操作并继续扫描。

3. 求出上下文内部this的值。

*代码分析*
```javascript

```
*总结*
> 为什么会产生变量提升与函数提升？
    
    答：在代码执行之前的预编译阶段，创建活动对象时，会在活动对象上创建一个与函数声明与变量声明对应的属性，其值是变量名

> var，let，const

> VO与AO的区别

*参考资料：*

- [彻底明白作用域、执行上下文](https://segmentfault.com/a/1190000013915935)
- [JS引擎的执行过程](https://heyingye.github.io/2018/03/19/js%E5%BC%95%E6%93%8E%E7%9A%84%E6%89%A7%E8%A1%8C%E8%BF%87%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89/)
- [深入理解JavaScript的执行流程，执行上下文EC、变量对象VO、活动对象AO、作用域Scope](https://blog.csdn.net/yangxinxiang84/article/details/113051811?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&dist_request_id=1328641.10297.16155372256670345&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)
- 《你不知道的Javascript》（上卷），第一部分，作用域和闭包


### `异常`

- ReferenceError 与 TypeError
    > ReferenceError 同作用域判别失败相关，而 TypeError 则代表作用域判别成功了，但是对结果的操作是非法或不合理的。

---

## **三大框架**
- React
- Vue
- Angular

---

## **实用类库**
- Lodash
- Underscore
  
---

## **重要功能**

---

## **Node**
- express
