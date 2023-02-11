'use strict'

let num=4;
let fat=1;

    for(let i=num; i>=1 ;i--)
    {
        fat= fat * i;   
    } 

    console.log('O fatorial de  '+ num + '  é : ' + fat);

    
   let fat1=(num) => 
   {
       if(num===0)
        return 1;

       return num * fat1(num-1);
   }
   let resultado=fat1(4);
   console.log('outra forma ',resultado);
   
    