function listarMenores(vetorNomes, vetorIdades) {
    console.log("Pessoas menores de idade:");
    for (let i = 0; i < vetorIdades.length; i++) {
        if (vetorIdades[i] < 18) {
            console.log("- " + vetorNomes[i] + " (" + vetorIdades[i] + " anos)");
        }
    }
}
let nomes = ["Matheus", "Guilherme", "João", "Maria", "Talita", "Ana", "Gabriel", "Sofia", "Daniel"];

let idade = [26, 22, 16, 13, 23, 17, 10, 19, 8];

listarMenores(nomes, idade);