function hello(firstName){
    console.log(`merhaba ${firstName}`);
}

hello("javascript")

const helloFuncv1= (firstName)=> { console.log(`merhaba ${firstName}`)}

helloFuncv1("hellofuncv1")

const helloFuncv2= (firstName)=>  console.log(`merhaba ${firstName}`)
// tek satır olduğu için süslü parantez kullanmamıza gerek yok tıpkı if şart bloğunda olduğu gibi.
helloFuncv1("hellofuncv2")

const helloFuncv3= (firstName,lastName)=> { console.log(`merhaba ${firstName} ${lastName}`)}

helloFuncv3("Hellofuncv3 ","other last name info")

const helloFuncv4= (firstName,lastName)=> { 
   let info= console.log(`merhaba ${firstName} ${lastName}`)
    console.log(info)
    return info

}

helloFuncv4("hellofunc4" ,"Other info")


