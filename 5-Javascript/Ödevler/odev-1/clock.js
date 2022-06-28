let userName=prompt("Lütfen Adınızı Giriniz");

let myName=document.querySelector("#myName");

myName.innerHTML=userName;
 
function showTime(){
    let anlık = new Date();  
    // saat 
    let saat = anlık.getHours(); 
    // dakika 
    let dakika = anlık.getMinutes(); 
    // saniye 
    let saniye = anlık.getSeconds(); 
    // güne ekstra zaman
    var d = new Date(); 
    // günleri ekledik
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
    // id tanımmladık
    let iceaktarma = document.querySelector("#myClock") 
    // burda oluşturduğumuz değerleri ekrana yazdırıyoruz
    iceaktarma.innerHTML= saat + ":" + dakika +":" + saniye + " " + gunler[d.getDay()]; 
    
}
let simdi = setInterval(showTime,100); 

