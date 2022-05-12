const asenkronfonksiyon=(sayi)=>{
    return new Promise((resolve,reject)=>{
        if(sayi===4){
            resolve("every think okay ");
        }else{
            reject('we have a problem big brother!');
        }
    })
};

asenkronfonksiyon(4)
    .then((data)=>{
        console.log(data);
        return 1;
    })
    .then((data)=>{
        console.log(data);
        return 2;
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })