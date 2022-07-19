let counter =localStorage.getItem("counter") ? Number(localStorage.getItem("counter")):0
let counterDOM=document.querySelector("#counter")

let increaseDOM=document.querySelector("#increase")
let decreaseDOM=document.querySelector("#decrease")

counterDOM.innerHTML=counter

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)

function clickEvent(){

    console.log(typeof(counter))
    console.log(this.id)
    this.id=="increase" ? counter+=1 : counter-=1
    localStorage.setItem("counter",counter)
    counterDOM.innerHTML=counter;
    // if(this.id=="increase"){
    //     counter++
    //     counterDOM.innerHTML=counter
    // }else if(this.id=="decrease"){
    //     counter--
    //     counterDOM.innerHTML=counter
    // }

}
