// Criar um programa que calcula a média
// das notas entre alunos e envia
// mensagem do calculo da média

const aluno1 = 'Gabriel'
const notaAluno01 = 9.8

const aluno2 = 'Maycao'
const notaAluno02 = 10.0

const aluno3 = 'Diego'
const notaAluno03 = 2.8

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


// Se a media for maior que 5, parabenizar a turma
if (media > 5) {
    //Faz alguma coisa
    console.log(`A media foi de ${media}. Parabéns`)
}else{
    //Faz outra coisa
    console.log('A media e menor que 5')
}

