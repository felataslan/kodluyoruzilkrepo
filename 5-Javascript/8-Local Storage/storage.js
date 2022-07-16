let user= {userName: "felataslan", isActive:true}
console.log(user)

localStorage.setItem("userInfo",JSON.stringify(user))

let userInfo=localStorage.getItem("userInfo") // bilgiyi alma 
userInfo=JSON.parse(userInfo)
console.log(userInfo)
let items= [1,2,3,user]

localStorage.setItem("newitem",JSON.stringify(items))

let item =localStorage.getItem("newitem")

let item1=JSON.parse(item)

console.log(item1)

