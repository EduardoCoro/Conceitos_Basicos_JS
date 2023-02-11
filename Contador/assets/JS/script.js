var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    verificaDado();
}

function decrement(){
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;

    verificaDado();
}

function verificaDado(){
    // habilita ou desabilita botao
    if(currentNumber >= 10){
        document.getElementById("adicionar").disabled = true;    
    } 
    else if(currentNumber <= -10){
        document.getElementById("subtrair").disabled = true;
    }
    else{
        document.getElementById("adicionar").disabled = false;
        document.getElementById("subtrair").disabled = false;
    }

    //Numero negativo ou 
    
    if(currentNumber > -1 )
    {
        document.getElementById("currentNumber").classList.remove("NumeroNegativo"); 
        document.getElementById("currentNumber").classList.add("NumeroPositivo");        
    }
    if(currentNumber < 0){
        document.getElementById("currentNumber").classList.remove("NumeroPositivo"); 
        document.getElementById("currentNumber").classList.add("NumeroNegativo");
    }
}

// atribuindo o evento no botao

document.getElementById("adicionar").addEventListener("click", increment); 
document.getElementById("subtrair").addEventListener("click", decrement); 

// função de mudança
// document.getElementById("currentNumber").onchange =  addEventListener("onchange", verificaDado); 
// document.getElementById("currentNumber").onchange = verificaDado;  