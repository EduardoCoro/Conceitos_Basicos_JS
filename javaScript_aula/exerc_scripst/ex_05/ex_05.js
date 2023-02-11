'use strict'

let n1='1';
let n2=1;

console.log('Valores inseridos : n1 -  "',n1,'" n2 - ',n2);

if(n1==n2)
{
     console.log("O valor de n1 e n2 são equivalentes usando ==");
}
 else
 {
    console.log("O valor de n1 e n2 não são equivalentes usando ==");
 }

if( n1===n2)
{
    console.log("O valor de n1 e n2 são equivalentes usando '===' ");
}
   else
    {
        console.log("O valor de n1 e n2 não são equivalentes usando '===' ");
    }
    

if(n1!=n2)
{
    console.log("O valor de n1 e n2 são diferentes usando '!=' ");
}
 else
    {
        console.log("O valor de n1 e n2 não são diferentes usando '!=' ");
    }


if(n1!==n2)
{
     console.log("O valor de n1 e n2 é diferente entre o valor e o tipo '!=='");
}
 else
 {
    console.log("O valor de n1 e n2 não é diferente entre o valor e o tipo '!=='");
 }