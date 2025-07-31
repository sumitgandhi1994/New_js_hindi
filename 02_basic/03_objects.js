// there are two type of object creation object constraction and literals

// object constraction will create a "singleton" lern in feture
// exp: Object.create

// how to create a symbol
const mySym = Symbol("Hello SYM");

// object literals
const jsUser = {
  name: "Sumit",
  "full name": "sumit gandhi",
  age: 18,
  location: "Jaora",
  email: "sumit@google.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"],
  [mySym]: "Obj SYM",
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "sugandhi@gpt.com";
// Object.freeze(jsUser)
jsUser.email = "sugandhi@mcs.com";

// console.log(jsUser);
jsUser.greeting = function () {
    console.log("Hello Js User");
};
jsUser.greetingtwo = function () {
    console.log(`Hello Js User ${this.name}`);
};
  
console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

// console.log(jsUser);