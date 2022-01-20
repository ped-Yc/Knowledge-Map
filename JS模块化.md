# JS 模块化

## 前言

模块化是编程中绕不过去的一点，可以说在我们的开发流程中，每时每刻都在使用着模块化，这无疑是一个非常重要的知识点。本文只讨论 JS 模块化。请思考以下几点：

-   模块化的前世今生：为什么要模块化，为什么模块化存在几种不同的标准
-   模块化的本质：模块化的原生实现
-   几种不同模块化标准的原理及差异：CommonJS、AMD、CMD、ESM


## 模块化的核心

> 模块化的本质在于外部只能访问模块暴露出来的属性和方法。

```javascript
/*
 * 原生函数实现模块模式
 *
 */
function moduleA() {
    var something = "something";
    var another = "another";
    function doSomething() {
        console.log(something);
    }
    function doAnother() {
        console.log(another);
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}
// 调用模块内方法
var foo = moduleA();
foo.doSomething(); // something
foo.another; // undefined
```


## 引用

-   《你不知道的 Javascript》(上卷)
-
