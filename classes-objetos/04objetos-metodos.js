// Método e uma função dentro de um objeto 

const senai = {

    codigo: 603,
    cidade: 'Araraquara',

    //  A palavra reservada this refere ao objeto no
    //  contexto atual. é usado para acessar
    //  propriedades de métodos do onjeto corrente

    descreverEscola: function(){
        console.log(`O código ${this.codigo} pertence a
        Escola SENAI de ${this.cidade}.`)
    }

};

