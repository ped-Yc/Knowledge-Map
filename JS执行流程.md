# **JS执行流程**

【*正文*】

```
执行流程：JS执行流-->语法检查-->预编译-->执行

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
```

【*代码分析*】

```javascript
// 代码
var a = "outer";

function foo(i) {
    console.log(a);
    console.log(b);
    console.log(c);
    var a = 'hello';
    var b = function () {};

    function c() {};
    console.log(`------------`);
    console.log(a);
    console.log(b);
    console.log(c);
}

foo(22);// 对形参i的LHS查询

//结果：
undefined
undefined
ƒ c() {}
------------
hello
ƒ() {}
ƒ c() {}

// 分析
// 代码载入前，创建全局EC的伪代码
GlobalEC : {
    [[Scope]] : [{VO}],
    VO : {
        foo : fnFoo,// 指向函数Foo的引用
        a :  undefined
    },
    this
}
// 调用函数foo(22)时，创建当前EC的伪代码
CurrentEC : {
    [[Scope]] : [{AO}, {VO}],
    AO : {
        // 形参优先于函数声明优先于变量声明
        arguments : {
            0 : 22,
            length : 1
        },
        i : 22,// 形参，接受实参赋值
        c : fnC,//指向函数c的引用
        a : undefined,
        b : undefined
    },
    this
}
```

【*总结*】

> 为什么会产生变量提升与函数提升？

 ```javascript
 答：在代码执行之前的预编译阶段，创建当前EC时，会在活动对象上创建一个与函数声明与变量声明对应的属性，然后将活动对象推入作用域链。在查询变量时，是通过作用域链进行RHS查询。所以会查询到作用域链上已经定义的函数与变量。
 ```

> var，let，const的联系与区别

 ```javascript
 答：在ES6之前，JS中只有全局作用域和函数作用域，而不存在块级作用域。在以下代码中，如果只希望在for循环内部使用变量 i 是做不到的。

// {}限制不了 i 的访问范围
 for(var i = 0; i< 10; i++){ 
     console.log('inner' + i);// inner1~9
 }
 console.log('outer' + i);// outer10

 ES6新增了 let 与 const 关键字，可以用来创建块级作用域，由这两个关键字声明的变量会绑定块级作用域，存在暂时性死区：进入块级作用域不会有编译过程，只不过通过let或者const声明的变量会在进入块级作用域的时被创建，但是在该变量没有赋值之前，引用该变量JavaScript引擎会抛出错误---这就是“暂时性死区”。

// 变量 i 只在{}内有效
console.log('start'+i);// ReferenceError: Cannot access 'i' before initialization
  for(let i = 0; i< 10; i++){ 
     console.log('inner' + i);// inner1~9
 }
 console.log('outer' + i);// ReferenceError: i is not defined
 ```

> VO与AO的区别

```javascript
可以抽象的理解为，AO 是VO 的实例化，AO 在执行函数前被激活。
```

【*参考资料*】

- 《你不知道的Javascript》（上卷），第一部分，作用域和闭包
- [JS引擎的执行过程](https://heyingye.github.io/2018/03/19/js%E5%BC%95%E6%93%8E%E7%9A%84%E6%89%A7%E8%A1%8C%E8%BF%87%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89/)
- [彻底明白作用域、执行上下文](https://segmentfault.com/a/1190000013915935)
- [深入理解JavaScript的执行流程，执行上下文EC、变量对象VO、活动对象AO、作用域Scope](https://blog.csdn.net/yangxinxiang84/article/details/113051811?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&dist_request_id=1328641.10297.16155372256670345&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)
- [浅谈JS的 VO|AO](https://blog.csdn.net/Ancecis/article/details/104382441)
- [let实现原理](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/133)

