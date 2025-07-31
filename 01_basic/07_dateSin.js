// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

let myDate1 = new Date(2025, 7, 26);
let myDate2 = new Date(2025, 7, 26, 5, 36, 100);

// console.log(myDate1);
// console.log(myDate2);
// console.log(myDate2.toLocaleString());

let myDate3 = new Date("2025-11-05");
let myDate4 = new Date("07-20-2025");
// console.log(myDate3.toLocaleString());
// console.log(myDate4.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myDate4.getTime());

// console.log(Math.floor(myTimeStamp / 1000));

let nNewDate = new Date();

// console.log(nNewDate);
// console.log(nNewDate.getMonth() + 1);
// console.log(nNewDate.getDate());
// console.log(`today date is ${nNewDate.getDate()}`);

let latestDate = nNewDate.toLocaleString("default", {
  weekday: "long",
//   weekday: "narrow",
//   weekday: "short"
});

console.log(latestDate);
