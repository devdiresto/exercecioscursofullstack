function gerarMatrizIdentidade() {
    let matriz = [];
    for (let i = 0; i < 7; i++) {
        matriz[i] = [];
        for (let j = 0; j < 7; j++) {
            if (i === j) {
                matriz[i][j] = 1; // Diagonal principal
            } else {
                matriz[i][j] = 0; // Demais elementos
            }
        }
    }
    console.table(matriz); // Exibe bonitinho no console
}

gerarMatrizIdentidade();