/*

throw
try
catch
finally


*/

//throw
// var isim="mehmet";
// if(isim!="mehmet"){
// throw Error("beklenmeyen hata");
// }
// console.log(isim);

try{
    var sayi1=4;
    var sayi2=1;
    sonuc=sayi1/sayi2;
    if(sayi2===0){
        throw Error("sayı2 sıfır olamaz ")
    }else{
        console.log(sonuc);
    }
}catch(error){
    console.log(error);
}finally{
    console.log("burası finally bloğu");
}
// try catch yapısı ile bulunan hata yakalanır finally bloğu arasına ise hata yakalansın yada yakalanmasın çalışacak kod bloğu yazılır.