let counter =0
let counterDOM=document.querySelector("#counter")

let increaseDOM=document.querySelector("#increase")
let decreaseDOM=document.querySelector("#decrease")

counterDOM.innerHTML=counter

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)

function clickEvent(){

    this.id=="increase" ? counter+=1 : counter-=1
    counterDOM.innerHTML=counter;
    // if(this.id=="increase"){
    //     counter++
    //     counterDOM.innerHTML=counter
    // }else if(this.id=="decrease"){
    //     counter--
    //     counterDOM.innerHTML=counter
    // }

}

