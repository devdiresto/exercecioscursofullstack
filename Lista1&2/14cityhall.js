function processarPesquisa(dadosHabitantes) {
    
    let somaSalario = 0, somaFilhos = 0, maiorSalario = 0, pessoasAte350 = 0;
    let totalPessoas = dadosHabitantes.length;

    for (let i = 0; i < totalPessoas; i++) {
        let p = dadosHabitantes[i];
        somaSalario += p.salario;
        somaFilhos += p.filhos;

        if (p.salario > maiorSalario) maiorSalario = p.salario;
        if (p.salario <= 350) pessoasAte350++;
    }

    console.log("Média de salário: R$ " + (somaSalario / totalPessoas).toFixed(2));
    console.log("Média de filhos: " + (somaFilhos / totalPessoas).toFixed(1));
    console.log("Maior salário: R$ " + maiorSalario.toFixed(2));
    console.log("Percentual até R$350: " + ((pessoasAte350 / totalPessoas) * 100).toFixed(2) + "%");
}

// Criando os dados fictícios da prefeitura (Array de Objetos)
let dadosPrefeitura = [
    { salario: 1200.00, filhos: 2 },
    { salario: 300.00, filhos: 3 }, // Entra na estatística de <= 350
    { salario: 5500.00, filhos: 0 }, // Esse vai assumir como o Maior Salário
    { salario: 350.00, filhos: 5 }   // Entra na estatística de <= 350
];

// Rodando o sistema
processarPesquisa(dadosPrefeitura);