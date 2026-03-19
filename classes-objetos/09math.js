// const gerarNumeroAletorio = (numero) => {
//     // Math.random() gera um número entre 0 e 1 (exclusivo)
//     let numeroAleatorio = Math.random();
//     console.log(`Sorteio: ${numeroAleatorio}`);

//     // Multiplicamos por 15 para obter um número entre 0 e 14 (exclusivo)
//     // numeroAleatorio *= 15; --> numeroAleatorio = numeroAleatorio * 15
//     numeroAleatorio *= numero;
//     console.log(`Multiplicar: ${numeroAleatorio}`)

//     // Math.floor() para arredondar para baixo para um número inteiro
//     numeroAleatorio = Math.floor(numeroAleatorio);
//     console.log(`Arredondar: ${numeroAleatorio}`);

//     // Somamos 1 para obter um número entre 1 e 15 (inclusivo)
//     numeroAleatorio += 1;
//     console.log(`Somar 1: ${numeroAleatorio}`);

//     // Retorna o número aleatório
//     return numeroAleatorio;
// }

// // Atribuindo a Função a uma variável
// let numeroSorteado = gerarNumeroAletorio(20);

// // Exibindo o número sorteado
// console.log(`Número sorteado: ${numeroSorteado}`)


    // ----------------------------------------CÓDIGO OTIMIZADO-------------------------------------------------------

    const gerarNumeroAletorioR = (min = 1, meax = 15) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    console.log(gerarNumeroAletorioR()); // Gera um número entre 1 e 15
    console.log(gerarNumeroAletorioR(10,15)); // Gera um número entre 5 e 10
    
    