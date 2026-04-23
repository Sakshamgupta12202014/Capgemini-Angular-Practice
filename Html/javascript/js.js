// // // debugger;

// var global_var = 10000;

// export { global_var };

// // var a = 10; // stored inside window object
// // var b = "hello"; // stored inside the window object
// // let c = "wjfbhwcb"; // stored inside the script scope

// // // this function is stored in var type container so this function gets stored in window object in browser
// // var func_var = function () {
// //   console.log("function definition stored inside var");
// // };

// // // this one is stored in let tyoe container , so this function gets stored in script scope in browser
// // let func_let = function () {
// //   console.log("function definition stored inside let and const");
// // };

// // // console.log(global);
// // console.log(window);

// // ============== TYPE COERCION =========================//

// console.log(10 - "10");
// console.log(10 + "10");
// console.log(null + "hello"); // null ---> "null"
// console.log(undefined + "hello"); // undefined ---> "undefined"
// console.log([] + "hello"); // [] ---> ""
// console.log({} + "hello"); // {} --> [Object Object]
// console.log("10" * "2");

// console.log(typeof undefined);
// console.log(typeof NaN);

// console.log(undefined + 1); // NaN
// console.log(null + 10); // null ---> 0
// console.log({} + 1); // {}  ---> [Object Object]
// console.log([] + 1); // [] ---> 0

// if ({}) {
//   console.log("Its true");
// }

// if ([]) {
//   console.log("Its true");
// }

// if (!null) {
//   console.log("Its false");
// }

// if (!undefined) {
//   console.log("Its false");
// }

// let arr = [10, 20, 30, 40, 50];

// console.log(...arr);

// //  Rest ---> pack the elements
// //  Spread ---> unpack the elements

// // destructuring the array , objects , or iterable

// let [a, ...b] = [10, 20, 30, 40, 50, 60];
// let [c, d] = [10, 20, 30, 40];

// // catch in object destructuring ---> you have to use the same key identifier to get the value
// let { address } = {
//   username: "fwrefe",
//   age: 20,
//   address: {
//     pincode: 243720,
//   },
// };

// console.log(address);

// let { pincode } = address;

// console.log(pincode);

let likeBtn = document.getElementById("likeBtn");
console.log(likeBtn.textContent);

likeBtn.addEventListener("click", (e) => {
  let likeVal = parseInt(likeBtn.textContent, 10);

  let newVal = likeVal + 1;

  console.log(newVal);
  likeBtn.textContent = newVal;
}); 
