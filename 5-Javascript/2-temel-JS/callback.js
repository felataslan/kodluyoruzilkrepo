function soyle(text, callback){
  console.log(text);
  callback();
}

function cayDemle(){
    console.log("çay demleniyor...");

};

soyle("merhaba",cayDemle);
// callback fonsiyonlarına ihtiyac duymamızın sebebi örnek a fonksiyonu 3 sn sürüyor çalışması  b fonksiyonu ise 20 saniye sürüyor javascript asenkron çalıştığı için callback fonksiyonlarını kullnamamız gerekiyor.yoksa önce 3 sn olan a fonksiyonu çalışıyor sonra 20 saniye olan b fonksiyonu çalışır.
 