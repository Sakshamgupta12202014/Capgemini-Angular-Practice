// let x = 10;
// sayHi();
// // var z = 60;

// function sayHi() {
//   var name = "salsjaspdje";
//   {
//     const y = 40;
//   }

//   //   console.log(x);
//   // console.log(y);
//   //   console.log(z);
// }

// // Known bug in javascript (to display intentional absense of value we write null)
// // Javascript never returns null implicitly
// // console.log(typeof null); // is object
// // console.log(typeof NaN); // is number
// // console.log(typeof undefined) // is undefined

// // console.log(a)
// // var a;
// // // console.log(b);
// // let b;
// // console.log(b);

// // console.log(10 - "hi");

// // console.log(10 - "20");

// // study this topic
// // Type coercion and Type conversion
// // console.log(10 == "10");
// // console.log(10 - "10");
// // console.log(10 + "hii"); // outputs: NaN
// // console.log(10n + "10n");

// // console.log("hi" && undefined);
// // console.log(10 > 20 && "hii");
// // console.log(10 < 20 && "hii");
// // console.log(undefined || "hii");
// // console.log(undefined && "hii");
// // console.log(undefined || 10);
// // console.log(undefined && -79);

// // console.log(undefined && NaN);
// // console.log(undefined || NaN);
// // console.log(undefined && null);
// // console.log(undefined || null);
// // console.log(null && NaN);
// // console.log(null || NaN);
// // console.log(null || undefined);
// // console.log(null && undefined);

// // Anonymous function , arrow function in js , implicit return

// // Higher order functions in js (A higher-order function is a function that does at least one of the following: takes one or more functions as arguments (callbacks) or returns a function as its result.)

// // function demo(a, b, c) {
// //   console.log(a, b, c);
// //   console.log(c(a, b));
// // }

// // function add(a, b) {
// //   return a + b;
// // }

// // let add2 = (a, b) => a + b;

// // demo(10, 20, add);

// // debugger;

// // closures
// // function f() {
// //   let counterVal = 0;
// //   return function increment() {
// //     counterVal++;
// //     return counterVal;
// //   };
// // }

// // let increment = f();
// // console.log(increment());
// // console.log(increment());
// // console.log(increment());

// // Arrays

// // literal way
// let arr4 = [10, 20, 30, 40];
// console.log(arr4);

// let arr5 = [10];
// console.log(arr5);

// // constructor way
// let arr3 = new Array();
// console.log(arr3);

// let arr = new Array(10); // does not put 10 as element in the array , it takes it as the length of the array , so here 10 is taken as the size of array , this lines makes an empty array of size 10
// console.log(arr);

// // now to overcome this we have this method
// let arr2 = Array.of(10);
// console.log(arr2);

// // ============================================================//

// let arr6 = new Array(10, 20, 30, 40, 50);
// arr6[0] = () => {
//   console.log("this is a function");
//   return "This is a function";
// };
// // delete operator only removes the value from array , It does not reduce the size of the array , it makes an empty space

// arr6[1] = new Array("hello", true, 20n);

// arr6[6] = null;
// console.log(arr6);

// let arr7 = [10, 20, 30, 40];

// console.log(arr7);

// // push and pop methods
// arr7.push("This is push value");
// console.log(arr7);

// arr7.push(50);
// console.log(arr7);

// arr7.pop();

// arr7.unshift(0); // adds value at the start
// console.log(arr7);
// arr7.shift(); // removing elem from start
// console.log(arr7);

// let sliceArray = arr7.slice(1, 4); // will not affect original array
// // console.log(sliceArray);
// // console.log(arr7.slice(1, 4)); // returns a new array (extracting a part if the array)

// arr7.splice(1, 2); // will modify the original array (will start from index 1 and delete 2 values from array and add nothing new to the array (3rd parameter that is optional))

// console.log(arr7);

// console.log(arr7.at(1));

// let obj = {
//   "first name": "Saksham",
//   age: 22,
//   height: null,
//   sub: ["html", "css", "js"],
//   data: function () {
//     console.log("User data");
//   },
//   open() {
//     console.log(
//       "this is shorthand form of writing funciton inside the object ",
//     );
//     return this;
//   },
// };

// console.log(obj["open"]());
// obj.lastName = "edfwerfwwevw";  // if key not present then it will create it inside the object

// obj.joiningDate = "01-12-2025";

// delete obj.age;
// delete obj.isAlive;

// console.log(obj);
// // Object.freeze(obj);

// import { global_var } from "./js.js";

// console.log(global_var);

// let anchor = document.getElementById("link");
// console.log(typeof anchor);
// console.log(anchor);
// console.dir(anchor);

// let elements = document.getElementsByClassName("elem");
// console.log(elements);
// console.log(elements[0]);
// console.log(typeof elements);
// console.log(Array.isArray(elements)); // false

// let elem = [...elements];
// console.log(typeof elem);
// console.log(Array.isArray(elem));

// Pyramid Of Doom (Callback hell)

function addTen(num, callback) {
  setTimeout(() => {
    callback(num + 10);
  }, 1000);
}

function multiplyByTwo(num, callback) {
  setTimeout(() => {
    callback(num * 2);
  }, 1000);
}

function subtractFive(num, callback) {
  setTimeout(() => {
    callback(num - 5);
  }, 1000);
}

// addTen(5, function (step1Result) {
//   multiplyByTwo(step1Result, function (step2Result) {
//     subtractFive(step2Result, (answer) => {
//       console.log("The final answer is : " + answer);
//     });
//   });
// });

function addTenAsync(num) {
  return new Promise((resolve) => setTimeout(() => resolve(num + 10), 1000));
}

function multiplyByTwoAsync(num) {
  return new Promise((resolve) => setTimeout(() => resolve(num * 2), 1000));
}

function subtractFiveAsync(num) {
  return new Promise((resolve) => setTimeout(() => resolve(num - 5), 1000));
}

async function calculateMath() {
  // We start with the number 5
  const step1Result = await addTenAsync(5); // Pauses for 1 sec, returns 15
  const step2Result = await multiplyByTwoAsync(step1Result); // Pauses for 1 sec, returns 30
  const finalResult = await subtractFiveAsync(step2Result); // Pauses for 1 sec, returns 25

  console.log("Final Answer:", finalResult);
}

// calculateMath();

// 3. Browser Storage (The classroom cabinets)
window.localStorage.setItem("username", "Student123"); // Saves data permanently
// console.log(window.localStorage.getItem("username"));

// window.setInterval(() => {
//   console.log("1 sec passed");
// }, 1000);

// * The size of the actual web page you can see (excluding browser tabs and bookmarks bars).
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// * The size of the entire browser application on your screen.
// console.log(window.outerHeight);
// console.log(window.outerWidth);

// * A string containing information about the user's browser, version, and Operating System.
// console.log(window.navigator.userAgent);

// * The primary language set in the user's browser settings (e.g., "en-US").
// console.log(window.navigator.language);

// * Returns true if the computer is connected to the internet, and false if offline.
// console.log(window.navigator.onLine);

// window.prompt("Enter your name");
// window.confirm("are you sure?");
// window.alert("hacker attacked!");
