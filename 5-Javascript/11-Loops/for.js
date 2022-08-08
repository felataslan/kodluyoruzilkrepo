let users=["lorem","ipsum","dolor"]


const userListDOM= document.querySelector("#userList")
for(let i=0;i<users.length;i++){
    const liDOM=document.createElement('li')
    liDOM.innerHTML=users[i]
    userListDOM.appendChild(liDOM)
    
    // console.log(users[i])
}