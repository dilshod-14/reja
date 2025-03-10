// const moment = require("moment");
// class Shop {
//   constructor(non, lagmon, suv) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.suv = suv;
//   }

//   hisobat() {

//     const time = moment().format("HH:mm:ss");
//     console.log(
//       `${time}Hozirgi holat: ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.suv}ta suv bor.`
//     );

//   }
//   qabul(mahsulot, miqdor) {
//     const time = moment().format("HH:mm:ss");

//     if (mahsulot === "non") this.non += miqdor;
//     else if (mahsulot === "lagmon") this.lagmon += miqdor;
//     else if (mahsulot === "suv") this.suv += miqdor;
//     else {"Notogri mahsulot nomi!"};
// console.log( `${time} da ${miqdor} ta ${mahsulot} qabul qilindi.`);
//   }

//   sotish(mahsulot, miqdor) {
//     const time = moment().format("HH:mm:ss");
//     if (mahsulot == "non" && this.non >= miqdor) this.non -= miqdor;
//     else if (mahsulot == "lagmon" && this.lagmon >= miqdor)
//       this.lagmon -= miqdor;
//     else if (mahsulot == "suv" && this.suv >= miqdor) this.suv -= miqdor;
//     else return "Yetarlicha mahsulot yoq yoki notogri mahsulot nomi!";

//     console.log( `${time} da ${miqdor} ta ${mahsulot} sotildi.`);
//   }
// }

// const myShop = new Shop(10, 10, 10);
// setTimeout(() => {
//   myShop.hisobat();
// }, 1000);
// setTimeout(() => {
// myShop.qabul("non",10 );
// }, 2000);
// setTimeout(() => {
//  myShop.sotish("lagmon", 1);
// }, 3000);
// setTimeout(() => {
//  myShop.sotish("suv", 1);
// }, 4000);

// setTimeout(() => {
//   myShop.hisobat();
// }, 5000);

// function list(a, b) {
//   if (a.length !== b.length) return false;

//   let list1 = a.split("").sort().join("");
//   let list2 = b.split("").sort().join("");
//   return list1 === list2;
//   // console.log(list1);
//   // console.log(list2);
// }

// console.log(list("maktab", "bkmata"));

// function getrevers(a) {
//   if (a.lenght === "");
//   let list = a.split("").reverse().join("");
//   return list;
//   // console.log(list)
// }

// console.log(getrevers("hello"));

function list (soz) {
    return soz.split("").some((a, i, arr) => arr.indexOf(a) !== i)
}
console.log(list("hello"))







