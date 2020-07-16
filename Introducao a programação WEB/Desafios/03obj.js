// Construção e impressão de objetos

const empresa = {
    nome : "Rockeseat",
    cor : "Roxo",
    foco : "Programacao",
    endereco : {
        rua : "Rua Guilherme Gembala",
        numero : 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)