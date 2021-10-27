// 2.1 ECMAScript 还是 JavaScript
// 2.1.1 ES6、 ES2015、 ES7、 ES2016、 ES8、 ES2017 和 ES.Next
// 2.1.2 使用 Babel.js

// 2.2 ECMAScript 2015+的功能
// 2.2.1 用 let 替代 var 声明变量
var framework = "Angular";
var framework = "React";
console.log(framework);
let language = "JavaScript!"; // {1}
// let language = 'Ruby!'; // {2} - 抛出错误
console.log(language);
const PI = 3.141593;
// PI = 3.0; // 抛出错误
console.log(PI);
const jsFramework = {
  name: "Angular",
};
jsFramework.name = "React";
// 错误，不能重新指定对象的引用
// jsFramework = {
//   name: 'Vue'
//   };

// let 和 const 的变量作用域
let movie = "Lord of the Rings"; // {1}
//var movie = 'Batman v Superman'; // 抛出错误， movie 变量已声明
function starWarsFan() {
  const movie = "Star Wars"; // {2}
  return movie;
}
function marvelFan() {
  movie = "The Avengers"; // {3}
  return movie;
}
function blizzardFan() {
  const isFan = true;
  let phrase = "Warcraft"; // {4}
  console.log("Before if: " + phrase);
  if (isFan) {
    let phrase = "initial text"; // {5}
    phrase = "For the Horde!"; // {6}
    console.log("Inside if: " + phrase);
  }
  phrase = "For the Alliance!"; // {7}
  console.log("After if: " + phrase);
}
console.log(movie); // {8}
console.log(starWarsFan()); // {9}
console.log(marvelFan()); // {10}
console.log(movie); // {11}
blizzardFan(); // {12}

// 2.2.2 模板字面量
const book = {
  name: "学习 JavaScript 数据结构与算法",
};
console.log("你正在阅读" + book.name + ".,\n 这是新的一行\n 这也是");
// 我们可以用如下代码改进上面这个 console.log 输出的语法
console.log(`你正在阅读${book.name}
  这是新的一行
  这也是`);

// 2.2.3 箭头函数
var circleAreaES5 = function circleArea(r) {
  var PI = 3.14;
  var area = PI * r * r;
  return area;
};
console.log(circleAreaES5(2));
// 上面这段代码的语法可以简化为如下代码
const circleArea = (r) => {
  // {1}
  const PI = 3.14;
  const area = PI * r * r;
  return area;
};
console.log(circleArea(2));

// 2.2.4 函数的参数默认值
function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}
console.log(sum(4, 2)); // 输出 9
// 由于我们没有传入参数 z，它的值默认为 3。因此， 4 + 2 + 3 == 9。
// 在 ES2015 之前，上面的函数只能写成下面这样
// function sum(x, y, z) {
//   if (x === undefined) x = 1;
//   if (y === undefined) y = 2;
//   if (z === undefined) z = 3;
//   return x + y + z;
// }
// 也可以写成下面这样
// function sum() {
//   var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
//   var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
//   var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
//   return x + y + z;
// }

// 2.2.5 声明展开和剩余参数
let params = [3, 4, 5];
console.log(sum(...params));
// 以上代码和下面的 ES5 代码的效果是相同的
console.log(sum.apply(undefined, params));
function restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, "hello", true, 7));
// 以上代码和下面代码的效果是相同的（同样输出 9）
function restParamaterFunction(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, "hello", true, 7));

// 2.2.6 增强的对象属性
// 数组解构
let [x, y] = ["a", "b"];
// let x = 'a';
// let y = 'b';
[x, y] = [y, x];
// var temp = x;
// x = y;
// y = temp;

// 属性简写
// let [x, y] = ["a", "b"];
let obj = { x, y };
console.log(obj); // { x: "a", y: "b" }
// var x = 'a';
// var y = 'b';
// var obj2 = { x: x, y: y };
// console.log(obj2); // { x: "a", y: "b" }
const hello = {
  name: "abcdef",
  printHello() {
    console.log("Hello");
  },
};
console.log(hello.printHello());
// var hello = {
//   name: "abcdef",
//   printHello: function printHello() {
//     console.log("Hello");
//   },
// };
// console.log(hello.printHello());
