function menuinterativo(opcao){
    console.log("--- Menu Interativo ---");
    console.log("1. Ver perfil");
    console.log("2. Editar configurações");
    console.log("3. Sair");

    switch (opcao){
        case 1:
            console.log("Você escolheu: ver perfil.");
            break;
        case 2:
            console.log("Você escolheu: editar configurações");
            break;
        
        case 3:
            console.log("Você escolheu: Sair.");
            break;
        default:
            console.log("Opção invalida. escolha 1, 2, ou 3.");
            break;
    }
}
menuinterativo(3);