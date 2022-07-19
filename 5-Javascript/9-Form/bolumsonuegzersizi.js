/*
1: formu se.
2: ınput bilgisini ul içerisine al
3: form içindeki bilgiyi sıfırla
4: eğer formda bilgi girilmezse kullanıcıyı uyar

*/
let userFormDOM = document.querySelector('#userForm')
let alertDOM=document.querySelector("#alert")
userFormDOM.addEventListener('submit', formHandler)

const alertfunction= (title="UYARI",message,className="danger")=>`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}!</strong> ${message}
<button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close">

</button>
</div>`

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if(USER_NAME.value&&SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value=""//Gönderdikten sonra sıfırlama 
        SCORE.value=""

    }else{
        alertDOM.innerHTML=alertfunction("DANGER","Eksik Bilgi Girdiniz","danger")
    }
    // localStorage.setItem("username",USER_NAME)
    // localStorage.setItem("score",SCORE)
    // let un =localStorage.getItem("username")
    // let point= localStorage.getItem("score")
    

}

let userlistDOM=document.querySelector("#userList")
const addItem=(userName,score)=>{
    let liDOM =document.createElement('li')
    liDOM.innerHTML=`${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    userlistDOM.prepend(liDOM)


}