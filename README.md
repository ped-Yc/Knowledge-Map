# 前端知识地图

## **原生JS**

### `基础概念`

- javascript 是单线程语言
    > 在浏览器中，一个页面只有一个线程执行JS代码

- javascript 是异步执行的，通过事件循环（Event Loop）的方式实现
    > 代码解析十分迅速，不会发生解析阻塞

- 执行上下文（Excution Context EC）
    > 存在三种 EC：全局执行上下文  GlobalEC ，函数执行上下文  Function EC，Eval

- 执行上下文栈（Excution Context Stack ECS）
    > 引擎记录EC的容器，栈底是 GlobalEC ，只有在关闭页面时出栈；栈顶是当前正在执行的 EC ，函数执行完毕后出栈，并将执行权交给下一个 EC 

- 作用域（Scope）
    > 根据名称查找变量的一套规则，用于管理引擎如何在当前作用域以及嵌套的子作用域中根据标识符名称进行变量查找

- 变量对象（Variable Object）&& 活动对象（Activation Object）
    > 存储当前EC中变量声明（必须是 var 关键字声明而不是 let 与 const）与函数声明（必须是显式声明而不是表达式）的容器

- LHS（Left Hand Side） && RHS（Right Hand Side）
    > LHS：赋值操作的目标。例如：a=2; 是对 a 进行 LHS
    > 
    > RHS：赋值操作的源头。例如：console.log(a); 是对 a 进行 RHS

### `一些重要的知识点`

1、JS代码执行流程
```
JS引擎是边编译边执行的，在载入一段脚本时（进入任意的<script>标签）
```

简述：

*参考资料*
- [彻底明白作用域、执行上下文](https://segmentfault.com/a/1190000013915935)
- [JS引擎的执行过程](https://heyingye.github.io/2018/03/19/js%E5%BC%95%E6%93%8E%E7%9A%84%E6%89%A7%E8%A1%8C%E8%BF%87%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89/)
- [深入理解JavaScript的执行流程，执行上下文EC、变量对象VO、活动对象AO、作用域Scope](https://blog.csdn.net/yangxinxiang84/article/details/113051811?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&dist_request_id=1328641.10297.16155372256670345&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)
- 《你不知道的Javascript》（上卷），第一部分，作用域和闭包

### `变量`

变量提升&&函数提升:
> 为什么会产生变量提升？

JS引擎在执行JS代码时流程如下：

JS执行流-->创建全局EC（Excution Context 执行上下文）-->压入ECS-->一行行执行代码-->遇见函数，创建函数EC-->压入ECS-->一行行执行代码-->函数执行完毕，弹出ECS-->...

在创建EC时，主要做三件事：

1、初始化作用域链[[scope]]

2、创建AO(activation object 活动对象)

3、确定上下文中 this 的值

在第二部创建AO时，会扫描上下文获取函数声明和变量声明，并加入AO成为其属性



### `对象与原型`:

`变量对象`&&`活动对象`&&`执行环境`


一个对象拥有内置属性和自有属性
```javascript
var obj={};
var obj.a='aaa';
/**
{
  a:"aa" //自有属性
  __proto__:{...} //内置属性
}
*/
```

---

## 三大框架
- React
- Vue
- Angular

---

## 实用类库
- Lodash
- Underscore
  
---

## 重要功能

---

## Node
- express
