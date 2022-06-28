let userName= prompt("kullanıcı bilgilerini giriniz");
let info = document.querySelector("#info");


info.innerHTML=` ${userName.length>0 ? userName: "kullanıcı bilgisi bulunamadı"}`;

// let boolean;

// const isBooleanTrue = boolean ? true : false;

// console.log(isBooleanTrue)
// >> false

// console.log(boolean)
// var money;
//     var canBuy = 
//         (money < 17) ? "Satın alamazsın..":
//         (money > 30) ? "Satın alabilirsin..":
//         "Para miktarını girmen gerekmektedir..";

//     console.log(canBuy) 