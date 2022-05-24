// pathname 

// console.log(document.location.pathname)
//****Ders-1
// let title = document.getElementById('title')
// title.innerHTML="değişen bilgi"
// console.log(title.innerHTML)


//****Ders-2
// let link=document.querySelector("ul#list>li>a")

// link.innerHTML+=" değişti"
// link.style.color="red"
// link.classList.add("btn")

//****Ders-3
// let fullname= prompt("lütfen ad - soyad giriniz")

// let data=document.querySelector("#veri")

// data.innerHTML=`${data.innerHTML} <small style="color:red">${fullname}</small>`

//****Ders-4
// Liste içindeki son elemana ulaşma veya yeni eleman ekleme

// let item=document.querySelector("ul#list>li:last-child")
// let item2=document.querySelector("ul#list>li:first-child")
// item.innerHTML="son öğe değiştirildi"
// item2.innerHTML="ilk  öğe değiştirildi"


// console.log(item.innerHTML)
// console.log(item2.innerHTML)

// let ulDom=document.querySelector("ul#list")
// let liDom=document.createElement("li")

// liDom.innerHTML="kendi oluşturduğumuz öğe"

// ulDom.append(liDom)//en sona ekler
// ulDom.prepend(liDom)//en başa ekler

//****Ders-5
let centence=document.querySelector("div#centence")
//class ekleme
centence.classList.add("text-primary")
centence.classList.add("title")
centence.classList.add("new-info","second-class","third-class") //birden fazla class ekleme
//class silme
centence.classList.remove("new-info")
centence.classList.remove("new-info","second-class","third-class") // birden fazla class silme
console.log(!!2);

console.log(centence.classList)

