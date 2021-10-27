// 1.1 JavaScript 数据结构与算法

// 1.2 环境搭建
// 1.2.1 最简单的环境搭建
// 开发者工具
// 1.2.2 使用 Web 服务器
// Web Server for Chrome
// 1.2.3 Node.js http-server
// npm install http-server -g
// sudo npm install http-server -g

// 1.3 JavaScript 基础
// 方式一
/**
 * <!DOCTYPE html>
 * <html>
 *  <head>6 第 1 章 JavaScript 简介
 *    <meta charset="UTF-8">
 *  </head>
 *  <body>
 *    <script>
 *      alert('Hello, World!');
 *    </script>
 *  </body>
 * </html>
 */
// 方式二
/**
 * <!DOCTYPE html>
 * <html>
 *  <head>6 第 1 章 JavaScript 简介
 *    <meta charset="UTF-8">
 *  </head>
 *  <body>
 *    <script src="01-HelloWorld.js"></script>
 *  </body>
 * </html>
 */

// 1.3.1 变量
var num = 1; // {1}
num = 3; // {2}
var price = 1.5; // {3}
var myName = "Packt"; // {4}
var trueValue = true; // {5}
var nullVar = null; // {6}
var und; // {7}
console.log("num: " + num);
console.log("myName: " + myName);
console.log("trueValue: " + trueValue);
console.log("price: " + price);
console.log("nullVar: " + nullVar);
console.log("und: " + und);

// 变量作用域
var myVariable = "global";
myOtherVariable = "global";
function myFunction() {
  var myVariable = "local";
  return myVariable;
}
function myOtherFunction() {
  myOtherVariable = "local";
  return myOtherVariable;
}
console.log(myVariable); // {1} global
console.log(myFunction()); // {2} local
console.log(myOtherVariable); // {3} global
console.log(myOtherFunction()); // {4} local
console.log(myOtherVariable); // {5} local

// 1.3.2 运算符
var num = 0; // {1}
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1; // {2}
num -= 2;
num *= 3;
num /= 2;
num %= 3;
console.log(num);
console.log("num == 1 : " + (num == 1)); // {3}
console.log("num === 1 : " + (num === 1));
console.log("num != 1 : " + (num != 1));
console.log("num > 1 : " + (num > 1));
console.log("num < 1 : " + (num < 1));
console.log("num >= 1 : " + (num >= 1));
console.log("num <= 1 : " + (num <= 1));
console.log("true && false : " + (true && false)); // {4}
console.log("true || false : " + (true || false));
console.log("!true : " + !true);
// 位运算
console.log("5 & 1:", 5 & 1);
console.log("5 | 1:", 5 | 1);
console.log("~ 5:", ~5);
console.log("5 ^ 1:", 5 ^ 1);
console.log("5 << 1:", 5 << 1);
console.log("5 >> 1:", 5 >> 1);
// typeof 运算符
console.log("typeof num:", typeof num);
console.log("typeof Packt:", typeof "Packt");
console.log("typeof true:", typeof true);
console.log("typeof [1,2,3]:", typeof [1, 2, 3]);
console.log("typeof {name:John}:", typeof { name: "John" });
// 原始数据类型： null、 undefined、字符串、数、布尔值和 Symbol
// 派生数据类型/对象： JavaScript 对象，包括函数、数组和正则表达式
// delete 运算符
var myObj = { name: "John", age: 21 };
delete myObj.age;
console.log(myObj); // 输出对象{name: "John"}

// 1.3.3 真值和假值
/**
 * undefined       false
 * null            false
 * 布尔值           true 是 true， false 是 false
 * 数               +0、 -0 和 NaN 都是 false，其他都是 true
 * 字符串           如果字符串是空的（长度是 0）就是 false，其他都是 true（长度大于等于 1）
 * 对象             true
 */
function testTruthy(val) {
  return val ? console.log("truthy") : console.log("falsy");
}
testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (对象始终为 true)
testTruthy(""); // false
testTruthy("Packt"); // true
testTruthy(new String("")); // true (对象始终为 true)
testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (对象始终为 true)
testTruthy({}); // true (对象始终为 true)
var obj = { name: "John" };
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // age (属性不存在)

// 1.3.4 相等运算符（ == 和 === ）
/**
 * null           undefined       true
 * undefined      null            true
 * 数             字符串           x == toNumber(y)
 * 字符串          数              toNumber(x) == y
 * 布尔值          任何类型         toNumber(x) == y
 * 任何类型        布尔值           x == toNumber(y)
 * 字符串或数      对象             x == toPrimitive(y)
 * 对象           字符串或数        toPrimitive(x) == y
 */
console.log("packt" == true); // false
console.log("packt" == false); // false
console.log("packt" === true); // false
console.log("packt" === "packt"); // true
var person1 = { name: "John" };
var person2 = { name: "John" };
console.log(person1 === person2); // false，不同的对象

// 1.4 控制结构
// 1.4.1 条件语句
var num = 1;
if (num === 1) {
  console.log("num 等于 1");
}
var num = 0;
if (num === 1) {
  console.log("num 等于 1");
} else {
  console.log("num 不等于 1, num 的值是 " + num);
}
num === 1 ? num-- : num++;
var month = 5;
if (month === 1) {
  console.log("一月");
} else if (month === 2) {
  console.log("二月");
} else if (month === 3) {
  console.log("三月");
} else {
  console.log("月份不是一月、二月或三月");
}
var month = 5;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("Month is not January, February or March");
}

// 1.4.2 循环
for (var i = 0; i < 10; i++) {
  console.log(i);
}
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

// 1.5 函数
function sayHello() {
  console.log("Hello!");
}
sayHello();
function output(text) {
  console.log(text);
}
output("Hello!");
output("Hello!", "Other text");
function sum(num1, num2) {
  return num1 + num2;
}
var result = sum(1, 2);
output(result); // 输出 3

// 1.6 JavaScript 面向对象编程
// 创建方式一
var obj = new Object();
// 创建方式二
var obj = {};
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}
// 用下面的代码实例化这个类
var book = new Book("title", "pag", "isbn");
// 然后，我们可以访问和修改对象的属性
console.log(book.title); // 输出书名
book.title = "new title"; // 修改书名
console.log(book.title); // 输出新的书名
Book.prototype.printTitle = function () {
  console.log(this.title);
};
book.printTitle();
// 我们也可以直接在类的定义里声明函数
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}
book.printIsbn();

// 1.7 调试工具
// WebStorm
// Sublime Text
// Atom
// Visual Studio Code
