// Variáveis globais
const quantidadeNumerosRecentes = 5;

const sliderMin = document.querySelector('.intervalo__slider--min');
const sliderMax = document.querySelector('.intervalo__slider--max');
// console.log(sliderMin, sliderMax)

// Seção com o botão sortear e exibição do resultado
const botaoSortear = document.querySelector('.area__button');
const elementoNumero = document.querySelector('.area__numero');

const listaNumeros = document.querySelector('.historico__lista')
const botãoLimparHistorico = document.querySelector('.sorteador__limpar')

const mensagem = document.querySelector('.area_mensagem')




const atualizarValorSlider = () =>{
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);
    console.log(min,max)

    // Exibir o valor do slider na interface
    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;
};
    // Evento para atualizar o valor em tempo real
    sliderMin.addEventListener('input', atualizarValorSlider);
    sliderMax.addEventListener('input', atualizarValorSlider)

// Iniciarlizar interface com valores atuais
atualizarValorSlider();

const gerarNumeroAleatorio = (min, max) =>{
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1));
    numeroAleatorio += min;
    return numeroAleatorio;
    
}

const atualizarTexto = (elemento, valor) => {
    elemento.textContent = valor;
};

const criarItemHistorico = (numero) => {
    const li = document.createElement('li');
    li.textContent = numero;

    li.addEventListener('click', () => {
        navigator.clipboard.writeText(numero);
        alert('Item copiado!');
    });

    return li
}































