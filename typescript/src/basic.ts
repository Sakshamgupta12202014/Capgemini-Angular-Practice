// The colon : is only used for type annotations in declarations and parameters, not in normal assignment statements.
let x;
// is not valid TypeScript syntax for assigning a typed value.
// x : number = 34; 


// here type inference comes into picture 
let a = "hello";  
// a = 45; now storing any other type after the initialization will throw error


/*
 * Special Types in TS 
*/

/*
 * any 
 * can hold any type of value and 
 * lets you use any method or property without throwing error
 */
let val:any = "string";
val = 45;
val = true;
val = {x : 1};
val = null;

let abc : null = val; // OK — any can be assigned anywhere, no check

// does not throw error as variable is of type any
// console.log(val.toUpperCase())
// val.foo.bar.baz();

// error :- cannot change the type 
// val:string = "edefr";

let y : unknown = "edefeffer";
y = 345;
y = true;
y = null;
y = {x : 1};
y = "this is unkown variable"
y = null;

// let xyz : null = y; // ERROR — cannot assign unknown to other DT without checking


// before using the variable of type unknown you must type guard it

// without using TYPE GUARD throws error
// console.log(y.toUpperCase());

// when using type guard


/**
 * typeof y === "null" is invalid for checking null because:
 * In JavaScript, typeof null returns "object" (this is a historical behavior)
 * There is no "null" result from typeof
 * So the condition is always false and does not match null
*/

if(y === null) {
    console.log("this unkown variable holds null value");
}

if(typeof y === "object") {
    console.log("this unkown variable holds null value");
}

if(typeof y === "string") {
    console.log(y.toUpperCase());
}

if(typeof y === "number") {
    console.log("This unkown variable holds a number");
}

// Nothing can be assigned to never
let c : never;
// c = 1;        // ERROR
// c = "hello";  // ERROR
// c = null;     // ERROR
// never means it is impossible to have a value here

let d : never;


type PaymentMethod = "card" | "upi" | "netbanking";

function processPayment(method: PaymentMethod): string {
  switch (method) {
    case "card":       return "Processing card payment";
    case "upi":        return "Processing UPI payment";
    case "netbanking": return "Processing net banking";
    default:
      const unhandled: never = method; // TypeScript error if a case is missing
      throw new Error(`Unhandled payment method: ${unhandled}`);
  }
}

processPayment("");