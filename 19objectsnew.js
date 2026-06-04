function combinarObjetos(obj1, obj2) {
    // As propriedades de obj2 sobrescrevem as de obj1 automaticamente
    return { ...obj1, ...obj2 };
}

let = dadosPessoais = {
    nome: "Matheus Guilherme",
    idade: 26
};

let dadosAtualizados = {
    cidade: "Porto Alegre",
    idade: 27,
    Profissao: "Desenvolvedor Java"
};

let dadosFinais = combinarObjetos(dadosPessoais, dadosAtualizados);

console.log(dadosFinais);