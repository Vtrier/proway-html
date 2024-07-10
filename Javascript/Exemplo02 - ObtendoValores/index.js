let numero1 = 0;
let numero2 = 0;
let operacao = "";

function somar(){
    const tagInput = document.querySelector("input");
    numero1 = parseInt(tagInput.value);

    tagInput.value = "";
    operacao = "+";
}

function realizarOperacao(){
    const tagInput = document.querySelector("input")
    numero2 = parseInt(tagInput.value);

    let resultado = "";
    if (operacao === "+") {
        resultado = numero1 + numero2;
    }else if (operacao === "-"){
        resultado = numero1 - numero2;
    } else if (operacao === "*"){
        resultado = numero1 * numero2;
    }else if (operacao === "/"){
        resultado = numero1 / numero2;
    }
    tagInput.value = resultado;
}

function subtrair(){
    const tagInput = document.querySelector("input");
    numero1 = parseInt(tagInput.value);

    tagInput.value = "";
    operacao = "-";
}


function multiplicar(){
    const tagInput = document.querySelector("input");
    numero1 = parseInt(tagInput.value);
    
    tagInput.value = "";
    operacao = "*";
}

function dividir(){
    const tagInput = document.querySelector("input");
    numero1 = parseInt(tagInput.value);

    tagInput.value = "";
    operacao = "/";
}

function preencherNumero1(){
    const numero = 1;
    const tagInput = document.querySelector("input")
    tagInput.value = tagInput.value + numero;
}

function preencherNumero2(){
    const numero = 2;
    const tagInput = document.querySelector('input');
    tagInput.value = tagInput.value + numero;
}

function preencherNumero3(){
    const numero = 3;
    const tagInput = document.querySelector('input');
    tagInput.value = tagInput.value + numero;
}

function preencherNumero4(){
    const numero = 4;
    const tagInput = document.querySelector('input');
    tagInput.value = tagInput.value + numero;
}

function preencherNumero5(){
    const numero = 5;
    const tagInput = document.querySelector('input');
    tagInput.value = tagInput.value + numero;
}

function preencherNumero6(){
    const numero = 6;
    const tagInput = document.querySelector('input');
    tagInput.value = tagInput.value + numero;
}

function preencherNumero7(){
    const numero = 7;
    const tagInput = document.querySelector('input');
    tagInput.value = tagInput.value + numero;
}

function preencherNumero8(){
    const numero = 8;
    const tagInput = document.querySelector('input');
    tagInput.value = tagInput.value + numero;
}

function preencherNumero9(){
    const numero = 9;
    const tagInput = document.querySelector('input');
    tagInput.value = tagInput.value + numero;
}

function preencherNumero0(){
    const numero = 0;
    const tagInput = document.querySelector('input');
    tagInput.value = tagInput.value + numero;
}

function limpar(){
    const tagInput = document.querySelector("input")
    tagInput.value = "";
    numero1 = 0;
    numero2 = 0;
}