// Variáveis globais
const quantidadeNumerosRecentes = 5;

const sliderMin = document.querySelector('.intervalo__slider--min')
const sliderMax = document.querySelector('.intervalo__slider--max')
// console.log(sliderMin, sliderMax)




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

