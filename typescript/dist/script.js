let a = 20;
console.log(a);
let age = 21;
let b = "Saksham gupta";
let anyType;
anyType = true;
anyType = "Saksham Gupta";
anyType = 10;
let uk = 10n;
if (typeof uk === "string") {
    console.log(uk.toUpperCase());
}
else if (typeof uk === "bigint") {
    console.log(uk + 45n);
}
let num = 1000;
let val = 2000000n;
let val2 = undefined;
let val3 = true;
let val4 = null;
console.log(val);
console.log(val2);
console.log(val3);
console.log(val4);
let val6 = undefined;
function demo3(a, b) {
    console.log(a);
}
demo3(100);
let arr = ["hello", "world"];
arr.push("this is angular batch");
console.log(arr);
let numbers = [10, 20, 30];
numbers.unshift(5);
numbers.unshift(4);
console.log(numbers);
let x = 30;
x = "saksham";
x = 20n;
let arr2 = ["hello", 20, 30n, true];
function func(num) {
    console.log(num);
}
func(3);
func("20");
func(true);
let arr4 = [10, "Heeloo", true, 30n];
let user_obj = {
    firstname: "Saksham",
    lastname: "XYXZ",
    age: 20,
};
let obj;
let employee = {
    name: "Don",
    department: "Engineering"
};
let emp1 = { name: "Don" };
let emp2 = { name: "Don", age: 21 };
obj = {
    firstName: "saksham",
    age: 22,
    lastName: 40
};
console.log(obj);
let student = {
    name: "Don",
    age: 21,
    address: {
        city: "Phagwara",
        pincode: 144401
    }
};
console.log(student.address.city);
let products = [
    { id: 1, name: "Laptop", price: 75000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Tablet", price: 35000 }
];
products.forEach((p) => { console.log(p); });
function greetUser(user) {
    return `Hello ${user.name} , your role is ${user.role}`;
}
greetUser({ name: "saksham", role: "Admin" });
function getProduct(id) {
    return { name: "Laptop", price: 75000 };
}
const item = getProduct(1);
console.log(item.name);
console.log(item.price);
let myName;
let marks = "450";
function func2(a) {
    console.log(typeof a);
}
let arr7 = ["s", "a", "k"];
let arr8 = ["Saksham", "effrfr", 49];
let arr9 = ["hii", 50, true];
let arr10 = ["hello"];
let arr11 = [89, "", true];
let arr12 = ["html", "css", "js"];
let arr13 = ["wefef", 46, "cergf", 809];
let add = (x, y) => {
    return x + y;
};
let add2 = () => {
    return 10;
};
let demo4 = () => {
    return "string";
};
let demo5 = (k) => {
    return true;
};
let user2 = {
    firstName: "saksham",
    lastName: "gupta",
    age: 22
};
let user3 = {
    firstName: "Shreya",
    lastName: "saxena",
    age: 21
};
let user_withadress = {
    firstName: "saksham",
    lastName: "gupta",
    age: 22,
    address: {
        state: "UP",
        pincode: 243720,
    }
};
let user_withadress2 = {
    firstName: "saksham",
    lastName: "gupta",
    age: 22,
    address: {
        state: "UP",
        pincode: 243720,
    }
};
let modified_obj;
let objj;
objj = {
    firstName: " d",
    lastName: "sdqe"
};
objj.firstName = "Saksham";
let objj2;
objj2 = {
    firstName: "saksham",
    lastName: "gupta",
    salary: 800000
};
objj2.address = "bilsi bypass road , bisauli, budaun , UP";
let user_data = {
    firstName: "saksham",
    lastName: "gupta",
};
let user_data2 = {
    firstName: "saksham",
    lastName: "gupta",
    salary: 560000
};
let user_data3 = {
    firstName: "saksham",
    salary: 560000,
    age: 22
};
let user_data_intersection = {
    firstName: "saksham",
    lastName: "gupta",
    salary: 699999,
    age: 34
};
let data01 = {
    firstName: "saksham",
    lastName: "gupta",
    salary: 699999,
    age: 34
};
let objj3 = {
    age: 45,
    userData: {
        name: "ssfw",
        isAlive: true,
        salary: 4500788,
        open(a, b) {
            return 20;
        },
        marks: [34, 45, 67],
    },
    address: {
        state: "up",
        pincode: 334676
    }
};
let objOfInterface = {
    pincode: 243720,
    age: 45,
    name: "qdwerf",
    printParent: function () {
        console.log(this);
        return ``;
    },
    zipcode: 342720,
    printChild: () => {
        return ``;
    }
};
objOfInterface.printParent();
let obj01 = {
    name: "saksham",
    open: function () {
        console.log(this.name);
    }
};
obj01.open();
class Parent {
    firstName;
    lastName;
    constructor(a, b) {
        this.firstName = "saksham";
        this.lastName = "";
    }
    handle(b) {
        let a = 23435;
        console.log(a);
    }
    demo() {
    }
}
export {};
