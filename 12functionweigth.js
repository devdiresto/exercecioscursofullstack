function calcularPesoIdeal(alt, sexo) {
    let pesoIdeal;
    if (sexo.toLowerCase() === 'm') {
        pesoIdeal = (72.7 * alt) - 58;
    } else if (sexo.toLowerCase() === 'f') {
        pesoIdeal = (62.1 * alt) - 44.7;
    } else {
        return "Sexo inválido. Use 'M' ou 'F'.";
    }
    return pesoIdeal.toFixed(2); // Retorna com 2 casas decimais
}

// Testando um homem de 1.75m de altura (use ponto para decimais!)
console.log("Homem 1.75m:", calcularPesoIdeal(1.75, "M")); 

// Testando uma mulher de 1.60m de altura
console.log("Mulher 1.60m:", calcularPesoIdeal(1.60, "f")); 

// Testando um erro proposital
console.log("Teste de erro:", calcularPesoIdeal(1.80, "X"));