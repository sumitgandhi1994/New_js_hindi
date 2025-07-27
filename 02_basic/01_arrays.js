// array

// shallow copy and deep copy !ipm

// how to init array
const myArr = [1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "nagraj"];
const newArr = new Array(11, 22, 33, 44, 55, 66);
// console.log(myArr[0]);
// myArr.push(4)
// myArr.push(7)
// myArr.pop(7)
// myArr.unshift(8);
// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();

// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const nArr = myArr.join();

// console.log(typeof myArr);
// console.log(myArr);
// console.log(newArr);
// console.log(nArr);
// console.log(typeof nArr);

// slice and splice

console.log("A ", myArr);
console.log();

const myn1 = myArr.slice(2,4);
console.log("myn1 ", myn1 + " " + "B ", myArr);
console.log();

const myn2 = myArr.splice(2,4);
console.log("myn2 ", myn2 + " " + "C ", myArr);
console.log("D ", myArr);
