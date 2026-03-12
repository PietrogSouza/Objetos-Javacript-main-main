// let quadrado = {};
// let quadrado2 = {};
// let quadrado3 = [{}];

let quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
    return this.lados * lado;  }

}

const lados = 10
let quadrado2 = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
    return this.lados * lado;
 }
};

console.log(quadrado2.perimetro(4))

const senai = {
    codigo: 603,
    cidade: 'Araraquara'

};

console.log('---------------')

senai.telefone = 16987759346
senai.rua = 'Hugo Negrini'
delete senai.rua;

senai.endereco = {rua: 'Hugo Negrini', bairro: 'Quitandinha', numero: 60}
senai.alunos = ['SESI', 'EEBA', 'Comunidade'];

senai.endereco.numero = 62;
senai.alunos[2] = 'tecnico'

console.log(senai)

4