'use strict'

let num=5; // var tipo int
let sm=0;
for(let i=0; i<=10; i++)
{
    
   // let tab=[11]; usando array
   // tab[i]= num * i; 

    console.log(num+ ' x '+ i + ' = ' + num * i); 
  sm+=num *i;
}

console.log('A soma entre eles é : '+ sm);