class senai {
    constructor(codigo, cidade){
        this.codigo = codigo;
        this.cidade = cidade;
    }
    

    //  A palavra reservada this refere ao objeto no
    //  contexto atual. é usado para acessar
    //  propriedades de métodos do onjeto corrente

    descreverEscola(){
        console.log(`O código ${this.codigo} pertence a
        Escola SENAI de ${this.cidade}.`)
    }

};

const senaiArqa = new Senai();
senaiArqa.codigo = 603;
senaiArqa.cidade = 'Araraquara'

const senaiMat = new Senai();
senaiMat.codigo = 142;
senaiMat.cidade = 'Rua das flores'

senai.descreverEscola()

senaiArqa.descreverEscola();
senaiMat.descreverEscola();