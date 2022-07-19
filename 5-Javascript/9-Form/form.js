let formDOM=document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event){
    event.preventDefault()//default işlemini engelledik

    console.log("işlem gerçekleşti");
    let scoreinputDOM=document.querySelector("#score")

    console.log(scoreinputDOM.value);
    localStorage.setItem("score",scoreinputDOM.value);

    let skor=Number(localStorage.getItem("score"))

    skor<18 ? console.log("skor: ",skor+1): console.log("skor yeterince küçük değil")
    // let skor=Number(scoreinputDOM.value);

    // if(skor<18){
    //     console.log("skor: "+skor)
    // }

    
}