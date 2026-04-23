let x;
let a = "hello";
let val = "string";
val = 45;
val = true;
val = { x: 1 };
val = null;
let abc = val;
let y = "edefeffer";
y = 345;
y = true;
y = null;
y = { x: 1 };
y = "this is unkown variable";
y = null;
if (y === null) {
    console.log("this unkown variable holds null value");
}
if (typeof y === "object") {
    console.log("this unkown variable holds null value");
}
if (typeof y === "string") {
    console.log(y.toUpperCase());
}
if (typeof y === "number") {
    console.log("This unkown variable holds a number");
}
let c;
let d;
function processPayment(method) {
    switch (method) {
        case "card": return "Processing card payment";
        case "upi": return "Processing UPI payment";
        case "netbanking": return "Processing net banking";
        default:
            const unhandled = method;
            throw new Error(`Unhandled payment method: ${unhandled}`);
    }
}
export {};
