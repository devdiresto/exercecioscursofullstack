function sumarizarVendas(vendas) {
    let resumo = {};
    for (let i = 0; i < vendas.length; i++) {
        let venda = vendas[i];
        if (resumo[venda.vendedor]) {
            resumo[venda.vendedor] += venda.valor;
        } else {
            resumo[venda.vendedor] = venda.valor;
        }
    }
    return resumo;
}


let arrayVendas = [
   { vendedor: "Ana", valor: 150 },
   { vendedor: "Carlos", valor: 200 },
   { vendedor: "Ana", valor: 50 }
 ];
 console.log(sumarizarVendas(arrayVendas));