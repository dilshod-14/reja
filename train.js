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

// function countDigits(str) {  // Funktsiyani to'g'ri e'lon qilish
//     const result = str.split('').filter((ele) => {
//       return ele === '7';  // '7' ni ajratib olish
//     });
//     return result;
//   }

//   const newcountDigits = countDigits("ad2a54y79wet0sfgb9");
//   console.log(newcountDigits);  // ['7', '7']

const liste = ["ad2a54y79wet0sfgb9"];
const newListe = liste[0].split('').filter((ele) => {
  return ele === "7";
});

console.log("newListe", newListe);
