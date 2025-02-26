// console.log("Jack Ma maslahatlari");
// const list = [
//   "yahshi talaba boling", //0 -20
//   "togri boshliq tanlang va koproq hato qiling", //20-30
//   "uzingizga ishlashini boshlang", //30-40
//   "siz kuchli bolga narsalarni qiling", //40-50
//   "yoshlarga investitsiya kiriting", //50-60
//   "endi dam oling, foydasi yoq" //60
// ];
// //CALBACK function
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//     callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR", err);
//   else {
//     console.log("javob", data);
//   }
// });
// console.log("passed here 1");

// //ASYNC FUNCTION
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
// }
<<<<<<< HEAD
// }
// CALL VAI THEN/CATCH
=======
// }   
  // CALL VAI THEN/CATCH
>>>>>>> author
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {maslahatBering(31)
//     .then((data) => {maslahatBering(41)
//         .then((data) => {
//           console.log("javob", data);
//         })
//         .catch((err) => {
//           console.log("ERROR:", err);
//         });
//       console.log("javob", data);
//     })
//     .catch((err) => {
//       console.log("ERROR:", err);
//     });
//     console.log("javob", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");
//then/catch
// console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

//CALL VIA ASYN/AWAIT

// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//    javob = await maslahatBering(71);
//   console.log(javob);
//    javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

<<<<<<< HEAD
// function ismlar(e, dostlar) {
//     let count = 0;
//     for(let salom of dostlar) {
//         if(salom === e) {
//             count++;
//         }
//     }
// return count;
// }

// console.log(ismlar("e", "elmurod"));
// console.log(ismlar("o", "Shog,zod"));
//asdff

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yahshi talaba boling", //0 -20
//   "togri boshliq tanlang va koproq hato qiling", //20-30
//   "uzingizga ishlashini boshlang", //30-40
//   "siz kuchli bolga narsalarni qiling", //40-50
//   "yoshlarga investitsiya kiriting", //50-60
//   "endi dam oling, foydasi yoq" //60
// ];
// //CALBACK function
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number");
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 7000);
//   }
// }
// console.log("bu yerdan otdi");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR", err);
//   else {
//     console.log("javob", data);
//   }
// });
// console.log("bu yerdan otdi");
// function tekshir(value) {
//     if (typeof value === "string") {
//       console.log("Bu son!");
//     } else {
//       console.log("Bu son emas!");
//     }
//   }

//   tekshir("");  // "Bu son!"
//   tekshir("salom"); // "Bu son emas!"
//   tekshir("");
=======
function ismlar(e, dostlar) {
    let count = 0;
    for(let salom of dostlar) {
        if(salom === e) {
            count++;
        }
    }
return count;
}

console.log(ismlar("e", "elmurod"));
console.log(ismlar("o", "Shog,zod"));
//asdff
>>>>>>> author
