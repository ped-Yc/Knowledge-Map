## AXIOS
- 取消请求——CancelToken
  - 防抖，短时间内多次请求只会发送第一次请求
  - 取消重复请求，短时间内多次请求，只会发送最后一次请求

## JS
- 闭包指的是函数在初始词法作用域之外的地方被调用
- 创建一个`x*y`矩阵
```javascript
var matrix = new Array(x).fill(0).map(() => new Array(y).fill(0));
```
- 位运算的一些技巧
```javascript
// 英文大小写转换
('d' ^ ' ') = 'D'
('D' ^ ' ') = 'd'

// 判断两数是否异号
let x=-1,y=2;
Boolean((x^y)<0);// true 异号

// n&(n-1)消除二进制数n的最后一位1
```

