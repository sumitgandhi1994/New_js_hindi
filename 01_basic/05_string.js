const name = "Sumit";
const repoCount = 50;

// console.log(name + repoCount + 'Value');
// console.log(`${name} ${repoCount} Value`);

const gameName = new String("GTA-6");

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(typeof gameName.length);
// console.log(typeof gameName.toUpperCase());
// console.log(typeof gameName.endsWith());
// console.log(typeof gameName.valueOf());
// console.log(typeof gameName.toString());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('6'));
// console.log(gameName);

// Note: Go to MDN or ask chat gpt to learn all string methods

const newString = gameName.substring(0, 3);
// console.log(newString);

const anotherString = gameName.slice(-3, 4);
// console.log(anotherString);

const newStrOne = "       Sumit        ";
// console.log(newStrOne);
// console.log(newStrOne.trim());

const url = "https://naiti%20Technologies.com";
// console.log(url);

const newUrl = url.replace('%20','');
// console.log(newUrl);

console.log(url.includes('naitii'));


console.log(url.split('-'));
