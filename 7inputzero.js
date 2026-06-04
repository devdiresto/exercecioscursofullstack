function mediaAteZero(numeros) {
    let soma = 0;
    let contador = 0;
    let i = 0;

    while (numeros[i] !== 0 && i < numeros.length) {
        soma += numeros[i];
        contador++;
        i++;
    }

    if (contador > 0) {
        console.log("A média é: " + (soma / contador));
    } else {
        console.log("Nenhum número válido foi digitado antes do 0.");
    }
}
mediaAteZero([5, 10, 15, 0, 8]);