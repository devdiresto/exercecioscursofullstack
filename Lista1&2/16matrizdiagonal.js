function contarNegativos(matriz) {
    let vetorC = [];
    for (let i = 0; i < matriz.length; i++) {
        let negativosNaLinha = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                negativosNaLinha++;
            }
        }
        vetorC.push(negativosNaLinha);
    }
    console.log("Quantidade de negativos por linha: ", vetorC);
}

let matrizDeTeste = [
    [10, -5, 3, -1],  // Linha 0: tem 2 negativos
    [-2, -8, -1, -4], // Linha 1: tem 4 negativos
    [7, 14, 22, 5]    // Linha 2: tem 0 negativos
];

contarNegativos(matrizDeTeste);