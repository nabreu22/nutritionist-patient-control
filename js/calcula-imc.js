let titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0 ; i < pacientes.length ; i++ ){
   
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");

    let tdImc = paciente.querySelector(".info-imc");

    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(!alturaEhValida){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
    }
    
    if(alturaEhValida && pesoEhValido){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos"
    }
    
    
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
    return true;
    }else{
        return false;
    }    
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 1000){
        return true;
    }else{
        return false;
    }    
}

function calculaImc (peso, altura){
    let imc = 0;
    imc= peso / (altura * altura);
    return imc.toFixed(2);
}




