function percorreArray(trsPacientes, comportamento) {
    for (var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++) {
        var pacienteTr = trsPacientes[posicaoAtual];
        comportamento(pacienteTr);
    }
}
