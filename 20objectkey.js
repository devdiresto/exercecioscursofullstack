function contarFrequencia(vetorStrings) {
    let contador = {};
    for (let i = 0; i < vetorStrings.length; i++) {
        let palavra = vetorStrings[i];
        if (contador[palavra]) {
            contador[palavra]++; // Se já existe, soma 1
        } else {
            contador[palavra] = 1; // Se não existe, começa no 1
        }
    }
    return contador;
}

