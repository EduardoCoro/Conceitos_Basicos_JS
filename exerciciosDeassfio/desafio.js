// print('---------------------------------------');

var linhaTraçada = '';
var lihaHorizontal = '';
for (let i = 1; i <= 38; i++) {
    linhaTraçada += '-';    
    if (i == 1 || i == 38) lihaHorizontal += '|'
    else lihaHorizontal += ' ';
}

console.log(linhaTraçada);
for (let i = 0; i <= 4; i++) {
    console.log(lihaHorizontal);
    
}
console.log(linhaTraçada);