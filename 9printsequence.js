function imprimirFibonacci() {
    let a = 0, b = 1, proximo;
    console.log(a);
    console.log(b);
    
    for (let i = 3; i <= 10; i++) {
        proximo = a + b;
        console.log(proximo);
        a = b; 
        b = proximo;  
    }
}
imprimirFibonacci();