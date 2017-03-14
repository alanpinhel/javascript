var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", function() {
    var trsPacientes = document.getElementsByClassName("paciente");

    percorreArray(trsPacientes, function(pacienteTr) {
        var pacienteAtual = montaPaciente(pacienteTr);
        var imc = pacienteAtual.pegaImc();
        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

        tdImc.textContent = imc;
    });
});

function montaPaciente(pacienteTr) {
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

    return paciente = {
        nome: tdNome.textContent,
        peso: tdPeso.textContent,
        altura: tdAltura.textContent,
        pegaImc: function() {
            if (this.altura != 0) {
                var imc = this.peso / (this.altura * this.altura);
                return imc;
            }
            else {
                console.log("Impossível divisão por 0.");
            }
        }
    }
}
