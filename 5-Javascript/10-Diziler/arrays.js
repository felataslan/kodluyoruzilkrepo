

let domain = "kodluyoruz"
let isActive=false
let arr= [1,2,3,isActive,domain]
console.log(arr)

let amptyArray=[]//boş liste
console.log(arr.length)// dizinin içindeki eleman sayısını consola yazdırma

document.querySelector("#info").innerHTML=arr.length

console.log(arr[0])//arrayın ilk elemanı

console.log(arr.length-1)//arrayın son elemanı

//ortadaki elemanın bulunması
if(arr.length/2==0){
    console.log(arr[(arr.length/2)-1])
}else{
    arr.length+=1
    console.log(arr[(arr.length/2)-1])
}

// array olup olmadığını kontrol etme
console.log(
    typeof(arr)//object çıkıyor sonuç

)
console.log(

    Array.isArray(arr)
    //OR
    
)//array olup olmadığını kontrol eder.


