const nome = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 23

const tempoMinimoContribuicaoHomem = 35 
const tempoMinimoContribuicaoMulher = 30 

const CalculoAposentadoria = idade + contribuicao

const VerificaoAposentadoriaHomem = CalculoAposentadoria >= 95 && contribuicao >= tempoMinimoContribuicaoHomem
const VerificaoAposentadoriaMulher = CalculoAposentadoria >= 85 && contribuicao >= tempoMinimoContribuicaoMulher


if(sexo == 'M'){
    if(VerificaoAposentadoriaHomem){
        console.log(`${nome}, você pode se aposentar`)
    }else{
        console.log(`${nome}, você nao pode se aposentar`)
    }

}else{
    if(VerificaoAposentadoriaMulher){
        console.log(`${nome}, você pode se aposentar`)
    }else{
        console.log(`${nome}, você nao pode se aposentar`)
    }
}