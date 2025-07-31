// Object Construcation (Singleton)

const tinderUser = new Object();
// const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUSer = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Sumit",
      lastName: "Gandhi",
    },
  },
};

// console.log(regularUSer);
// console.log(regularUSer.fullName);
// console.log(regularUSer.fullName.userFullName);
// console.log(regularUSer.fullName.userFullName.firstName);
// console.log(regularUSer.fullName.userFullName.lastName);

const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};
const obj2 = {
  4: "d",
  5: "e",
  6: "f",
};

// not right way and not right result
// const obj3 = {
//   obj1,
//   obj2,
// };

const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

// when getting api data in array of object

const users = [
  {
    id: "1",
    name: "sumit",
  },
  {
    id: "2",
    name: "sumit",
  },
  {
    id: "3",
    name: "sumit",
  },
];

// console.log(users[2].id);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn1'));

const course = {
  courseName: "Js in Hindi",
  cp: "999",
  tn: " hitesh",
};

const { tn: inst } = course;
// console.log(inst);

// {
//   'name': 'hitesh',
//   'courseName': 'js  in hindi ',
//   'price':'free'
// }
