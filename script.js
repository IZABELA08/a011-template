// const estudante = {
//     nome: 'Iza',
//     sobrenome: 'Lima',
//     nomeMatricula: 414400,
//     notasDoSemestre: [9, 5]
// }


// estudante.modulo = 'javascript' //add nova propriedade

// console.log(estudante.nome)
// console.log(estudante.sobrenome)
// console.log(estudante.notasDoSemestre [0])
// console.log(estudante.nomeMatricula)
// console.log(estudante.modulo)


// //copiar obj e alterar as propiedades

// const novoEstudante = {
//     ...estudante,
//     nome: 'astroDev',
//     notasDoSemestre: [...estudante.notasDoSemestre, 7],
//     modulo: 'HTML'
// }
// console.log(novoEstudante)

// const arrayEstudantesLabenu = [{...estudante}, {...novoEstudante}, {nome: 'iza', graduacao: 'Sistemas'}, 
// {nome: 'Maria', graduacao:'Enfermagem'},
// {nome: 'Fernanda', graduacao: 'Letras'}
// ]

// console.log(arrayEstudantesLabenu)

const carrinhoDeCompras = {
    nomeCliente: 'Iza',
    formaDePagamento: 'Credito',
    enderecoDoCliente: 'Rua a, n200, apt 301'
}

carrinhoDeCompras.compras = [{produto:'Blusa', valor: 89.99, quant: 3}, 
{produto:'Calça',valor: 120.00, quant: 2}, {produto: 'tenis', valor: 340.00, quant: 1}]

console.log(carrinhoDeCompras.compras.length) // quantidade de objetos
console.log(carrinhoDeCompras.compras[2].produto) // acessando a propriedade do objeto ([] posicao do indice)(."propriedade")

const carrinhoDePresente = { 
    ...carrinhoDeCompras,
    nomeCliente: 'Anna',
    formaDePagamento: 'Cartão Presente'
}

console.log(carrinhoDePresente)
