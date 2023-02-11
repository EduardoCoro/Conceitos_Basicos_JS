'use strict'



let vetor=[];

// 3 - num. int.
vetor.push(11);
vetor.push(22);
vetor.push(33);
// 3 - string 
vetor.push('a');
vetor.push('b');
vetor.push('c');

// 3 - objt

let pessoa={
    nome : 'du',
    estado: 'SP',
    animais: ['nica','jao']
}
vetor.push(pessoa);


vetor.push({ })

     // arow fuction - declarar funçoes 

vetor.push( () =>{
   cosole.log()
})

// 1 a soma dos 3 num

let pos=0; 
let valor=0;
for(var i=0; i< vetor.length ;i++)
    {
         pos=vetor[i];
         
         if(typeof (pos) ==='number')
            {
               valor += pos;
            }
    }
vetor.push(valor);

for(let valor of vetor)
    {
        console.log(valor)
    }
