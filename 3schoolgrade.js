function calcularAlunoNota(nota) {
        if (nota < 0 || nota > 10) {
            console.log("Nota Invalida, digite uma nota de 0 a 10");
        } else if (nota >= 7) {
            console.log("Aprovado");
        } else if (nota >= 5) {
            console.log("Recuperação");
        } else {
            console.log("Reprovado");
        }

}

calcularAlunoNota(3)