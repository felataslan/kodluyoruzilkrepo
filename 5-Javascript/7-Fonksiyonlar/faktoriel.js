'use strict';


function faktoriel(n){
    let total=1;
    for(n;n>=1;n--){
        total*=n;
    }
    return total;

}


    const n= +(readLine());

    console.log(faktoriel(n));

