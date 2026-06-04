function exercicioPessoa() {
    let pessoa = { nome: "João", idade: 25 };
    console.log("Pessoa: Nome: "+ pessoa.nome +", idade: "+ pessoa.idade);
    
    // Adicionando a nova propriedade
    pessoa.email = "joao@email.com";
    return pessoa;
}

let resultadoPessoa = ( exercicioPessoa);

console.log("Dados de pessoa atualizados:", resultadoPessoa());