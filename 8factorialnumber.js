function calcularFatorial(numero) {
    let resultado = 1;
    for (let i = numero; i > 0; i--) {
        resultado *= i;
    }
    console.log("O fatorial de " + numero + " é: " + resultado);
}

calcularFatorial(5);