var botaoAdicionaPaciente = document.querySelector("#adicionar-paciente");
var campoNome = document.querySelector("#campo-nome");
var campoPeso = document.querySelector("#campo-peso");
var campoAltura = document.querySelector("#campo-altura");

botaoAdicionaPaciente.addEventListener("click", function(event) {
    var paciente = "<tr class='paciente'>" +
            "<td class='info-nome'>"+ campoNome.value +"</td>" +
            "<td class='info-peso'>"+ campoPeso.value +"</td>" +
            "<td class='info-altura'>"+ campoAltura.value +"</td>" +
            "<td class='info-imc'>"+ campoPeso.value / (campoAltura.value * campoAltura.value); +"</td>" +
        "</tr>";
    var tabela = document.querySelector("table");

    event.preventDefault();

    tabela.innerHTML += paciente;

    document.querySelector("form").reset();
});
