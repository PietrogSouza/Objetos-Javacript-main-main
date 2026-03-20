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

const mensagem = document.querySelector('.area__mensagem')




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

// Gera um número aleatório
const gerarNumeroAleatorio = (min, max) =>{
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1));
    numeroAleatorio += min;
    return numeroAleatorio;
    
}

// Atualiza o valor na interface
const atualizarTexto = (elemento, valor) => {
    elemento.textContent = valor;
};

// Função que cria uma Li que guarda o número SORTEADO
// E quando clicar no número sorteado la no histórico copia para área de tranferência
const criarItemHistorico = (numero) => {
    const li = document.createElement('li');
    li.textContent = numero;

    li.addEventListener('click', () => {
        navigator.clipboard.writeText(numero);
        alert('Item copiado!');
    });

    return li
}

// Função para gerenciar a lista de números sorteados
const atualizarHistorico = (lista, item, limite) => {
    lista.prepend(item);

    if (lista.children.length > limite) {
        lista.removechild(lista.lastChild);
    }
};

// Função para limpar o histórico de sorteios
const limparHistorico = () => {
    if (confirm('Deseja realmente limpar o histórico de sorteios?')) {
        listaNumeros.textContent = '';
        elementoNumero.textContent = '0';
    }
};

botaoSortear.addEventListener('click', () => {
    
    const min = Number(sliderMin.value);
    const max = Number(sliderMax.value);

    if (min > max){
        mensagem.textContent = 'O valor mínimo deve ser menor ou igual ao valor máximo'
        return;
    }

    mensagem.textContent = '';

    const numeroSorteado = gerarNumeroAleatorio(min, max);

    atualizarTexto(elementoNumero, numeroSorteado);

    const item = criarItemHistorico(numeroSorteado);
    atualizarHistorico(listaNumeros, item, quantidadeNumerosRecentes);
});

botãoLimparHistorico.addEventListener('click', limparHistorico);































