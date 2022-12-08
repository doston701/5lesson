///////////////////////////////////////////////////////

// FIZZBAZZ ALGORITHM

// function fizzBuzz(input) {
//   if (typeof input !== "number") return "it is not number";
//   if (input % 3 === 0 && input % 5 === 0) return "fizzBazz";
//   if (input % 3 === 0) return "fizz";
//   if (input % 5 === 0) return "Bazz";
//   return input;
// }

// let result = fizzBuzz(20);
// console.log(result);

///////////////////////////////////////////////////////

//  SPEED ALGORITHM

// Tezlik cheklovi -> 70km/soat
// Har 5 km/soatga 1 pointdan beriladi
// agar 12 point bosa -> Guvohnoma olib qoyiladi

// const speed_limit = 70;
// const km_per_point = 5;
// const max_points = 12;

// checkspeed(120);

// function checkspeed(speed) {
//   if (speed < speed_limit + km_per_point) console.log("Ok");
//   else {
//     const points = Math.floor((speed - speed_limit) / km_per_point);
//     if (points >= max_points) {
//       console.log("Guvohnoma olib qoyiladi");
//     } else {
//       console.log(points);
//     }
//   }
// }

//////////////////////////////////////////////////

// let a;
// let result = (a = true ? "20%" : "5%");
// console.log("szga chegrma: ", result);

//////////////////////////////////////////////////////

// let a;
// let b = null;
// let c = undefined;
// let d = 4;
// let e = "five";
// let f = a || b || c || d || e;
// console.log(f);

//////////////////////////////////////////////////////

// let color1 = "oq";
// let color2 = "qora";
// let colorTemp = color1;
// color1 = color2;
// color2 = colorTemp;

// console.log(color1);
// console.log(color2);

////////////////////////////////////////////////////////

// soat 6 dan 12gacha bolsa consolega "hayrli tong"
// soat 12 dan kechgi 18 gacha bolsa "hayrli kung"
// aks holda "hayrli kech" chiqarlsin

/////////////////////////////////////////////////////////

// let hour = prompt("what time is it?");

// if (hour >= 6 && hour <= 12) {
//   alert("Good morning");
// } else if (hour > 12 && hour <= 18) {
//   alert("Good afternoon");
// } else if (hour > 24) {
//   alert("There is not avaliable like this number");
// } else {
//   alert("Good evening");
// }

/////////////////////////////////////////////////////////

// let word = prompt("what are you going to translate");

// if (word === "pencil") {
//   alert("qalam");
// } else if (word === "book") {
//   alert("kitob");
// } else {
//   alert("undefined");
// }

///////////////////////////////////////////////////////

// for loop

// for (let i = 1; i <= 5; i++) {
//   console.log("Salom");
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// let scape = isLandscape(100, 100);

// function isLandscape(width, height) {
//   if (height < width) console.log(true);
//   else if (width < height) console.log(false);
//   else {
//     console.log("equal");
//   }
// }

// let number = getMax(900, 660);

// function getMax(max, min) {
//   if (max > min) {
//     console.log(max);
//   } else {
//     console.log(min);
//   }
// }

// let number = getMax(900, 300);
// console.log(number);

// function getMax(max, min) {
//   return max > min ? max : min;
// }

// let fizzbazz = fizzBazz(15);
// console.log(fizzbazz);

// function fizzBazz(input) {
//   if (typeof input !== "number") return "it is not a number";
//   if ()
// }

// let a = +prompt("Write first number");
// let b = prompt("choose on of them +,-,*,/");
// let c = +prompt("Write second number");

// function calc(a) {
//   if (b == "+") {
//     let result = a + c;
//     alert(result);
//   } else if (b == "-") {
//     result = a - c;
//     alert(result);
//   } else if (b == "*") {
//     result = a * c;
//     alert(result);
//   } else if (b == "/") {
//     result = a / c;
//     alert(result);
//   } else {
//     alert("not a true try again");
//   }
// }

// calc(a);

// let result = fizzBazz();
// console.log(result);

// function fizzBazz(input) {
//   if (typeof input !== "number") return "son emas";
//   if (input % 3 === 0 && input % 5 === 0) return "fizzBazz";
//   if (input % 3 === 0) return "fizz";
//   if (input % 5 === 0) return "Bazz";
//   else {
//     return input;
//   }
// }

// let result = getMax(198, 198);
// console.log(result);

// function getMax(max, min) {
//   if (max > min) return max;
//   else if (max === min) {
//     return "equal";
//   } else {
//     return min;
//   }
// }

// let result = islandScape(13, 19);
// console.log(result);

// function islandScape(width, height) {
//   if (height < width) return true;
//   else return false;
// }

// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// }

// console.log(sum(20));

// let a = +prompt("Write first number");
// let b = prompt("choose on of them +,-,*,/");
// let c = +prompt("Write second number");

// function calc(a) {
//   if (b == "+") {
//     let result = a + c;
//     alert(result);
//   } else if (b == "-") {
//     result = a - c;
//     alert(result);
//   } else if (b == "*") {
//     result = a * c;
//     alert(result);
//   } else if (b == "/") {
//     result = a / c;
//     alert(result);
//   } else {
//     alert("not a true try again");
//   }
// }

// calc(a);

// let result = fizzBazz();
// console.log(result);

// function fizzBazz(input) {
//   if (typeof input !== "number") return "son emas";
//   if (input % 3 === 0 && input % 5 === 0) return "fizzBazz";
//   if (input % 3 === 0) return "fizz";
//   if (input % 5 === 0) return "Bazz";
//   else {
//     return input;
//   }
// }

// let result = getMax(198, 198);
// console.log(result);

// function getMax(max, min) {
//   if (max > min) return max;
//   else if (max === min) {
//     return "equal";
//   } else {
//     return min;
//   }
// }

// let result = islandScape(13, 19);
// console.log(result);

// function islandScape(width, height) {
//   if (height < width) return true;
//   else return false;
// }

// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// }

// console.log(sum(20));

// let array = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// function countSheeps(arrayOfSheep) {
//   let sum = 0;
//   for (const element of arrayOfSheep) {
//     if (element === true) {
//       sum = sum + element;
//     }
//   }
//   return sum;
// }

// const result = countSheeps(array);
// console.log(result);
