
// Type inference 
let a = 20; 
console.log(a);

// a = "";


/* First — what is type annotation?
Before we get to objects, understand this: in TypeScript, annotation means telling the compiler what type a variable is going to hold.
typescriptlet name: string = "Don";   // annotation: this will always be a string */
let age: number = 21;       // annotation: this will always be a number

// type annotation 
let b : string = "Saksham gupta";


// if you do not assign any value while declaring the variable then the variable is assigned "any" datatype (special dt)
let anyType;

// now you can assign any value to the variable
anyType = true;
anyType = "Saksham Gupta";
anyType = 10;


// can store any type of data but cannot perform any opertion without knowing the datatype of variable
let uk : unknown = 10n;

// to perform a operation we perform type narrowing(type guards)
if(typeof uk === "string") {
    console.log(uk.toUpperCase());
}else if(typeof uk === "bigint") {
    console.log(uk + 45n);
}



let num : number = 1000;

let val : bigint = 2000000n;

let val2 : undefined = undefined;

let val3 : boolean = true;

let val4 : null = null;

console.log(val)
console.log(val2)
console.log(val3)
console.log(val4)

// no value can be assigned to void other than undefined
let val6 : void = undefined;


function demo3(a: number, b?:string) {
    console.log(a);
}

demo3(100);


let arr:string[] = ["hello" , "world"];
arr.push("this is angular batch");
// arr.push(23);   // although this throws error , but still gets added into the array 

console.log(arr);

let numbers: number[] = [10, 20, 30];
numbers.unshift(5);
numbers.unshift(4);

console.log(numbers);


// Union and Intersection


let x : number | string | bigint = 30;
x = "saksham";
x = 20n;
// x = false; // cant assign boolean coz its not verified 

// let arr2 : string | number[] = ["hello"]; //  wrong syntax of using union in hetrogeneous array declaration 

let arr2 : (number | string | boolean | bigint)[] = ["hello", 20, 30n, true];

// let arr2 : (number | string | boolean | bigint)[] = ["hello", 20, 30n, true, undefined]; // cannot store the undefined datatype in this array

function func(num:number | string | boolean) : void{
    console.log(num);
} 

func(3);
func("20");
func(true);

// this is tuple fixed length array 
let arr4 : [number, string, boolean, bigint] = [10, "Heeloo", true, 30n];

// disadv of using tuple is (you can use the array methods and it will throw an error )

// let arr5 : [number, string, boolean, bigint] = [10, "Heeloo", true, 30n, undefined];  // cannot add more elements target can only hold only 4 elem

let user_obj = {
    firstname: "Saksham",
    lastname:"XYXZ",
    age : 20, 
}

// user_obj.age = 20n; // here type inference is working 


/* 
    object annotation 
    optional property
    readonly property
*/ 

/**
 * Semicolons (;) separate properties inside the annotation.
 * Commas (,) separate properties in the actual object value.
 * This trips up many beginners — annotation uses semicolons, object value uses commas.
 */

let obj : {
    firstName : string;
    lastName?: string | Number | boolean;
    readonly age : number;
    isAlive?: boolean;
}

/**
 * Lesson 2 — Optional properties with ?
 * Sometimes a property may or may not exist. 
 * Use ? to mark it as optional.
 */

let employee: {
  name: string;
  department: string;
  salary?: number;   // optional — may or may not be present
} = {
  name: "Don",
  department: "Engineering"
  // salary is not provided — that is perfectly fine
};

// Both of these are valid:
let emp1: { name: string; age?: number } = { name: "Don" };          // age missing — OK
let emp2: { name: string; age?: number } = { name: "Don", age: 21 }; // age present — OK

/*
    readonly annotation can be used in such cases like 
    Aadhaar card , Pan Card , something that is fixed  
*/

obj = {
    firstName : "saksham",
    age: 22,
    lastName: 40
}

// obj.age = 21  // still getting updated in js code 
// to stop this behavior , we need to add config file of typescript
console.log(obj);

// Lesson 4 — Nested object annotation

let student: {
  name: string;
  age: number;
  address: {
    city: string;
    pincode: number;
  };
} = {
  name: "Don",
  age: 21,
  address: {
    city: "Phagwara",
    pincode: 144401
  }
};

console.log(student.address.city); // "Phagwara"


// Lesson 5 — Array of objects annotation

let products : {
    id: number;
    name: string;
    price: number;
} [] = [
        { id: 1, name: "Laptop", price: 75000 },
        { id: 2, name: "Phone",  price: 25000 },
        { id: 3, name: "Tablet", price: 35000 }
]

products.forEach((p) => {console.log(p)});


// Lesson 6 — Object as a function parameter
// This is where object annotation really shines. When you pass objects into functions, TypeScript checks that you are passing the right shape:

function greetUser(user : {name : string; role: string}) : string{
    return `Hello ${user.name} , your role is ${user.role}`;
}

greetUser({name : "saksham" , role: "Admin"});
// greetUser({name : "Don"});  // throws error
// greetUser({name : "Don", role: "user", x : "edef"}); 


// Lesson 7 — Object as function return type
function getProduct(id: number): { name: string; price: number } {
  return { name: "Laptop", price: 75000 }; // TypeScript checks this shape
}

const item = getProduct(1);
console.log(item.name);  // TypeScript knows .name exists and is a string
console.log(item.price); // TypeScript knows .price exists and is a number



/**
 * The { name: string; age: number } part is the object annotation. 
 * You are telling TypeScript — this variable will always be an object that has a name (string) and an age (number). Nothing more, nothing less.
 */




// Type Alias :- code reusability
/**
 * Primitive
 * Non Primitive
 */
type val = string;
let myName : val;
type marks = string | number | boolean;
let marks : marks = "450";
// literal type 

function func2(a : marks) {
    console.log(typeof a);
}

/**
 * Type alias in Non primitive
*/
type data=string[];
let arr7 : data = ["s", "a", "k"];


/*
 * Union with type alias
*/
type dt = (string|number)[];
let arr8 : dt = ["Saksham" , "effrfr" , 49];


/**
 * using tuple with type alias
*/
type tp = [string , number , boolean];
let arr9 : tp = ["hii", 50, true];

type tp2 = [string , number? , boolean?];
let arr10 : tp2 = ["hello"];

/*
 * readonly tuple (solution to the disadv of tuple is using readonly with it)
*/

type tp3 = readonly[number, string, boolean];
let arr11 : tp3 = [89, "", true];

// arr11.push(20); // now this throws error

/*
 * making tuple readonly removes its disadv
 */
let arr12 : readonly string[] = ["html", "css", "js"];
// arr12.push("rfrge");  

type tp4 = readonly(string|number)[];
let arr13 : tp4 = ["wefef", 46, "cergf", 809];
// arr13.push(68);  // cant do it as it is readonly


/**
 * type alias with function
 * we only do function declaration while using type alias
 * we do not do function implementation 
*/

type addition = (a:number, b:number) => number;
// type addition = ()=>;

let add : addition = (x : number , y : number) : number => {
    return x+y;
}

// we can have fewer parameters
let add2 : addition = () : number => {
    return 10;
}

type func3 = () => string;

// its not necessary to pass the return type while giving func definition
let demo4 : func3 = () => {
    return "string";
}

type func4 = (x:boolean) => boolean;

// its also not necessary to pass the datatype of parameter while giving func definition
let demo5 : func4 = (k) => {
    return true;
}


/**
 * Type alias with object
*/

type user = {
    firstName :string;
    lastName : string,
    age : number;
}

// now can create n objects -> code reusability
let user2 : user = {
    firstName : "saksham",
    lastName : "gupta", 
    age : 22
}

let user3 : user = {
    firstName : "Shreya", 
    lastName : "saxena", 
    age : 21
}

type user_with_restriction = {
    firstName :string;
    lastName? : string,
    age : number;
    readonly AadhaarNumber: bigint
}


// nested objects using type alias

type user_with_address = {
    firstName :string;
    lastName? : string,
    age : number;
    address : {
        state : string,
        readonly pincode : number
    }
}



let user_withadress : user_with_address = {
    firstName : "saksham",
    lastName : "gupta", 
    age : 22, 
    address : {
        state : "UP",
        pincode : 243720,
    }
}


// alternative way of nested objects with type alias
type Address = {
    state : string,
    readonly pincode : number
}


type user_with_address2 = {
    firstName :string;
    lastName? : string,
    age : number;
    address : Address
}

let user_withadress2 : user_with_address = {
    firstName : "saksham",
    lastName : "gupta", 
    age : 22, 
    address : {
        state : "UP",
        pincode : 243720,
    }
}



/**
 * Modification in object annotation
 */

let modified_obj : {
    [key:string] : string;
}

// modified_obj.firstName = "saksham";

// let modified_obj2 : modified_obj = {
    
// } 

let objj :  {
    firstName : string;
    lastName : string ;
}

objj = {
    firstName : " d",
    lastName : "sdqe"
}

objj.firstName = "Saksham";

// throws error cannot add new properties
// objj.salary = 450000n;

// solution is :- object index
/**
 * the datatype of key : string must match with the required properties 
 * so use union and pass all the datatypes that are there for required properties
*/

let objj2 :  {
    firstName : string;
    lastName : string;
    /**
     * this is object 
     * takes case of required properties also 
     * so you have to pass their datatypes also , else will not work
    */
    [key: string] : number | string 
}

objj2 = {
    firstName :"saksham",
    lastName:"gupta",
    salary : 800000
}

objj2.address = "bilsi bypass road , bisauli, budaun , UP";


/**
 * 
 * UNION & INTERSECTION WITH OBJECT
*/

type user_type_1 = {
    firstName: string, 
    lastName : string
} 

type user_details = {
    salary : number,
    age : number,
}

/**
 * UNION --> ANYONE BUT FULL DATATYPE 
 * (SHOULD SATISFY ONE OF THE ALIAS COMPLETELY , IF YES THEN DOES NOT MATTER IF YOU PARTIALLY SATISFY
 * A SECOND ALIAS)
 */

let user_data : user_type_1 | user_details = {
    firstName : "saksham" , 
    lastName : "gupta",
}

let user_data2 : user_type_1 | user_details = {
    firstName : "saksham" , 
    lastName : "gupta",
    salary : 560000
}

let user_data3 : user_type_1 | user_details = {
    firstName : "saksham" , 
    salary : 560000,
    age: 22
}

/**
 * In this example , we are neither satisfying user_type_1 nor user_details , so it will throw error
*/

// let user_data4 : user_type_1 | user_details = {
//     firstName : "saksham" , 
//     salary : 780000,
// }


/**
 * INTERSECTION --> BOTH ALIAS SHOULD BE SATISFIED FULLY (NO PARTIAL) 
*/

let user_data_intersection : user_type_1 & user_details = {
    firstName : "saksham",
    lastName : "gupta" , 
    salary : 699999,
    age : 34
}

// if you not pass any of the properties , will throw an error 

/**
 * MERGE TWO ALIASES (INTERSECTION)
*/

type Merge = user_type_1 & user_details;

let data01 : Merge = {
    firstName : "saksham",
    lastName : "gupta" , 
    salary : 699999,
    age : 34
}

/**
 * INTERFACE (USED TO PROVIDE THE STRUCTURE TO OBJECT)
 * here you can reopen the block in interface 
 * this is the difference between interface vs type alias 
*/

interface user01 {
    name : string;
    isAlive : boolean;
    marks : [number , number , number];
}

interface user01 {
    salary : number;
    open : (a : string , b:boolean) => number
}

type Address2 = {
    state : string
    pincode : number
}

interface _user_with_address_ {
    userData : user01;
    age : number;
    address : Address2
}

let objj3 : _user_with_address_  = {
    age : 45,
    userData : {
        name : "ssfw",
        isAlive : true,
        salary :4500788,
        open(a, b) {
            return 20;
        },
        marks : [34, 45, 67],
    },
    address : {
        state : "up",
        pincode : 334676
    }
}


/**
 * INHERITANCE 
*/

//  single level 
interface parent {      
    name : string;
    readonly pincode : 243720;
    printParent : () => string;
}

interface child extends parent {
    age : number;   
    readonly zipcode : 342720;
    printChild : () => string;
}

let objOfInterface : child = {
    pincode:243720,
    age : 45,
    name : "qdwerf",
    printParent : function () {
        console.log(this)
        return ``;
    },
    zipcode : 342720,
    printChild : () => {
        return ``
    }

}

objOfInterface.printParent();


let obj01 = {
    name : "saksham",
    open : function () {
        console.log(this.name);
    }
}

obj01.open()

/**
 * CLASS
*/

// we cannot use let and const outside methods inside the class
// inside the class we can directly create a method, constructor, access modifiers, 
// by default properties are public only
// there are 4 access modifiers :- 

class Parent {
    firstName:string;
    lastName : string;

    /**
     * Multiple constructor implementations are not allowed in class (constructor overloading is not allowed)
     */ 
    constructor(a:string, b:string) {
        this.firstName = "saksham";
        this.lastName = "";
    }

    handle(a:string):void
    handle(a:number) : void 
    handle(b:any) : void {
        let a = 23435;
        console.log(a)
    }

    demo() {

    }
}


// generics & decorators , abstract class

