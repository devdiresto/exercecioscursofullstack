function emitirContracheque(funcionarios) {
    for (let i = 0; i < funcionarios.length; i++) {

        let f = funcionarios[i];

        if (                   // fiz essa pequena validação no tipo dado enviado
            typeof f.nome !== 'string' ||
            typeof f.salarioBruto !== 'number' ||
            typeof f.matricula !== 'number'
        ){
            console.log("Erro dados do funcionario da posição "+ i +" pussui dados invalidos")
            continue;
        }
    

        let deducaoINSS = f.salarioBruto * 0.12;
        let salarioLiquido = f.salarioBruto - deducaoINSS;

        console.log("--- Contracheque ---");
        console.log("Matrícula: " + f.matricula);
        console.log("Nome: " + f.nome);
        console.log("Salário bruto: R$ " + f.salarioBruto.toFixed(2));
        console.log("Dedução INSS: R$ " + deducaoINSS.toFixed(2));
        console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));
    }
}


let listaRH = [
    { matricula: "m", nome: "João", salarioBruto: 3000.00 }, //deixei uma propriedade incorreta para validar o tratamento de dados
    { matricula: 102, nome: "Ana", salarioBruto: 4500.50 },
    { matricula: 103, nome: "Carlos", salarioBruto: 2100.00 }
];

emitirContracheque(listaRH);