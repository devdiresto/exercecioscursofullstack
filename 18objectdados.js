function filtrarApenasArrays(dados) {
    let novoObjeto = {};
    for (let chave in dados) {
        if (Array.isArray(dados[chave])) {
            novoObjeto[chave] = dados[chave];
        }
    }
    return novoObjeto;
}

let dadosDoServidor = {
    nome: "Sistema RH",         // String (vai ser ignorado)
    versao: 2.5,                // Número (vai ser ignorado)
    ativo: true,                // Booleano (vai ser ignorado)
    funcionarios: ["Ana", "João", "Lucas"], // ARRAY! (vai ser copiado)
    salarios: [3000, 4500, 2100]            // ARRAY! (vai ser copiado)
};

let resultadoFiltrado = filtrarApenasArrays(dadosDoServidor);

console.log("Objeto original tinha 5 chaves.");
console.log("Objeto filtrado ficou assim:", resultadoFiltrado);