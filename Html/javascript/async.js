let a = 20;
console.log(a);

let b = setTimeout(
  (a, b) => {
    console.log("SetTimeout");
  },
  2000,
  "arg1",
  "arg2",
);

console.log(b);

console.log("middle log");

let count = 1;

let intervalID = setInterval(() => {
  console.log("this is interval " + count);

  if (count > 5) {
    clearInterval(intervalID);
  }

  count++;
}, 1000);

console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");
console.log("last log");

// let data = fetch("https://dummyjson.com/products");

// event listener
//EventListener

// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   console.log("welcome");
// });

// let inp = document.getElementById("inp");
// let head = document.getElementById("head");

// inp.addEventListener("input", () => {
//   head.textContent = inp.value;
// });

