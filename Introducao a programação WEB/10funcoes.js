// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do calculo da média

const alunosTurmaA = [
    {
        nome : "Mayk",
        nota : 9.8
    },

    {
        nome : "Diego",
        nota : 10
    },

    {
        nome : "Fulano",
        nota : 2
    }
]

const alunosTurmaB = [
    {
        nome : "Cleiton",
        nota : 9.4
    },

    {
        nome : "Robson",
        nota : 10
    },

    {
        nome : "Siclano",
        nota : 2
    }
]

function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)


function enviaMensagem(media, turma){
    //Se a media for maior que 5, parabenizar a turma
    if(media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}. Parabens`)
    } else {
        console.log(`A media da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')
