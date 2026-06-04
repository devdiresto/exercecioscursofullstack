function classificarTriangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            console.log("Triângulo Equilátero: todos os lados iguais.");
        } else if (a !== b && b !== c && a !== c) {
            console.log("Triângulo Escaleno: todos os lados diferentes.");
        } else {
            console.log("Triângulo Isósceles: dois lados iguais.");
        }
    } else {
        console.log("Os valores informados não formam um triângulo.");
    }
}

classificarTriangulo(10, 10, 10);