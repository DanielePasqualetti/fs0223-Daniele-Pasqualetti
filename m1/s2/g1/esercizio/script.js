// onclick = document.getElementById("button").innerHTML = Date

function date(){
    console.log("prova");
    document.getElementById("data").innerHTML = new Date();
    console.log("prova2");
}

function vuoto(){
    document.getElementById("data").innerHTML = "";
}

//un pulsante al cui click esce il risultato di 12x42

function moltiplica(){
    var moltiplicazione = 12*42;
    document.getElementById("risultato").innerHTML = moltiplicazione;
}

function reset(){
    document.getElementById("risultato").innerHTML = "12*42";
}
