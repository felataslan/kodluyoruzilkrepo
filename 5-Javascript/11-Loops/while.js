let arabalar=["honda","mercedes","bmw","fiat","renault"]

const userListDOM= document.querySelector("#userList")
let i=0
while(i<arabalar.length){
    const liDOM=document.createElement('li')
    liDOM.innerHTML=arabalar[i]
    userListDOM.appendChild(liDOM)
    console.log(arabalar[i])
    i++
}