`NOte: push, concat, spread operatoer, flat, from, of
push = to add a new values in array, this wi'll change main array.

concat = to merge two array in single array (limit with 2 max array), create a new array with new converted value and resualt, this is not change anything into main array.

spread operator = this is the very new and morden way to merge arrays there are no limits for mergeing and alswase given new array with final result, not changeing in main array.

flat = ??

from = when we need to convert another formate into a array then we 'll use this from method 

of = 
`;

const marvel_heros = ["THor", "IronMan", "Spiderman"];
const dc_heros = ["superman", "Flash", "Batman"];
const in_heros = ["shaktiman", "hero", "Sanju"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const final_array = [...marvel_heros, ...dc_heros];

const final_array2 = [...marvel_heros, ...dc_heros, ...in_heros];

const nfa = [...final_array, ...in_heros];

// console.log(final_array);
// console.log();

// console.log(final_array2);

// console.log();
// console.log(nfa);
// console.log();

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

// console.log(another_array);
// console.log();

// console.log(real_another_array);

console.log(Array.isArray("Sumit"));
console.log(Array.from("Sumit"));
console.log(Array.from("12345"));
let tempN = "1, 2, 3, 4, 5";
const extrim = Array.from(tempN.split(","));
console.log(tempN); 
console.log(
  extrim.map((num) => {
    return Number(num.trim());
  })
);
// console.log(Array.from({ name: "Sumit" })); // need to give array init name or position more about ne future lecture

// let sr1 = 100;
// let sr2 = 200;
// let sr3 = 300;
// console.log(Array.of(sr1, sr2, sr3));
