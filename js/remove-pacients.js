pacientes = document.querySelectorAll(".paciente");

let tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    // let alvoEvento = event.target;
    // let paiDoAlvo = alvoEvento.parentNode;   //TR = paciente = remover
    // paiDoAlvo.remove();

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    } ,500)
});
 