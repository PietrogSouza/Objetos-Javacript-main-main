/* Exercícios:
  1. No molde da classe 'Senai', adicione o atributo 'statusFuncionamento' 
     que deve iniciar sempre como 'false' (escola fechada por padrão).
  2. Crie o método 'abrirEscola()' para alterar o status para 'true' e
     exibir uma mensagem de boas-vindas.
  3. Crie o método 'fecharEscola()' para alterar o status para 'false' e
     avisar que as atividades encerraram.
  4. Teste as funcionalidades nas instâncias criadas.
*/

class Senai{
    constructor(codigo, cidade, anoConstrucao, qtdeCursos){
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.qtdeCursos = qtdeCursos;
        this.statusFuncionamento = false

        this.idade = new Date().getFullYear() - anoConstrucao;
    }

    abrirEscola(){
        if (this.statusFuncionamento === false){
            this.statusFuncionamento = true
            console.log('Status: Bem-vindo a escola está aberta')
        }
    }

    fecharEscola(){
        if (this.statusFuncionamento === true){
            this.statusFuncionamento = false
            console.log('Status: A escola está fechada no momento')
        }
    }


    
    dadosEscola(){
        console.log(`\n=== RELATÓRIO DE CADASTRO: ${this.cidade} ===`);
        console.log(`- Código: ${this.codigo}`);
        console.log(`- Fundação: ${this.anoConstrucao} (${this.idade} anos de história)`);
        console.log(`- Capacidade: ${this.qtdeCursos} cursos ativos.`);
        console.log(`- Status: ${this.statusFuncionamento ? 'Aberto': 'fechado'}`);
        console.log(`===========================================\n`);
    }
}

const compararEscolas = (escola1, escola2) => {
    console.log(`> Comparando oferta de cursos: ${escola1.cidade} vs ${escola2.cidade}...`)

    if (escola1.qtdeCursos > escola2.qtdeCursos) {
        console.log(`Resultado: O SENAI ${escola1.cidade} possui mais cursos.`);
    } else if (escola2.qtdeCursos > escola1.qtdeCursos) {
        console.log(`Resultado: O SENAI ${escola2.cidade} possui mais cursos.`);
    } else {
        console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`);
    }
    console.log(`Status: ${escola1.cidade} (${escola1.qtdeCursos}) | ${escola2.cidade} (${escola2.qtdeCursos})\n`);
}

const escola1 = new Senai(507, 'Americana', 1950, 300);
const escola2 = new Senai(514, 'Santa Barbado d Oeste', 1980, 400);


escola1.abrirEscola();
escola1.dadosEscola();


escola1.fecharEscola();
escola1.dadosEscola();





