/* =======================================================================
    OPERADORES DE COMPARAÇÃO

    > MAIOR
    < MENOR
    >= MAIOR IGUAL A
    <= MENOR IGUAL A
    == IGUAL A]
    === IGUAL E DO MESMO TIPO
    != DIFERENTE DE 
    !== DIFERENTE, INCLUSIVE DO TIPO
==========================================================================*/
/*
    console.log( 5 > 4) // true
    console.log( 5 < 4) // false
    console.log( 5 >= 4) // true
    console.log( 4 <= 4 ) // true

    console.log( 4 == '4') // true
    console.log( 4 === '4') // false
    console.log( 4 != '5') // true
    console.log( 4 !== '5' ) // true
*/

// DESAFIO 01
const idade = 17
//verificar se a pessoa é maior igual a 18 anos
//se sim, deixar entrar, se nao, bloquear a entrada
if(idade >= 18){
    console.log('Deixar entar')
}else{
    console.log('bloquear a entrada')
}
//se a pessoa tiver 17 anos
//avisar para voltar quando fizer 18 anos
if (idade === 17) {
    console.log('volte quando tiver 18 anos')
}