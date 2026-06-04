function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    console.log("Seu IMC é: " + imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Categoria: baixo peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Categoria: Peso normal") ;
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("Categoria: Sobrepeso") ;
    } else {
        console.log("Categoria: Obesidade");
    } 
}

calcularIMC(68, 1.76);