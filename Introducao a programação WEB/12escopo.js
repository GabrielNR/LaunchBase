// criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média.

/*se você declara ela num escopo, ela funciona dentro do escopo, e nos escopos filhos, mas não nos escopos acima, ou escopo pai, ou escopo anterior, não sei como vai ser melhor pra explicar rsrsrs Mas é isso. Conforme mostrei na prática, na aula de escopos, o comportamento é aquele.*/

const alunosDaTurmaA = [
    {
        nome: 'Mayk',
        nota: 9.8,
    },
    {
        nome: 'Diego',
        nota: 10
    },
    {
        nome: 'Fulano',
        nota: 2
    },
    {
        nome: 'novo aluno',
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Cleiton',
        nota: 10
    },
    {
        nome: 'Robson',
        nota: 10
    },
    {
        nome: 'ciclano',
        nota: 2
    },
    {
        nome: 'nome Aluno',
        nota: 5
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length;
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {
    //Se a media for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}. Parabens`)
    } else {
        console.log(`A media da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

