// Atividade Prática 05 - Desafio ilhas Growdev

/*

    Contextualização do desafio:

    As Ilhas Growdev formam um reino independente nos mares do Pacífico.
    Como é um reino recente, a sociedade é muito influenciada pela
    informática. A moeda oficial é a GrowCoin; existem notas de GC$ 50,00,
    GC$ 10,00, GC$ 5,00 e GC$ 1,00. Vocês foram contratados para ajudar na
    programação dos caixas automáticos de um grande banco das Ilhas
    Growdevs.

    Tarefa:

    Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
    notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
    clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
    um certo número inteiro de GrowCoins.
    Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
    desejado pelo cliente, determine o número de cada uma das notas
    necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
    retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
    Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
    GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

    Exemplo de entrada:
    72

    Exemplo de saída:
    GC$ 50,00 -> 1
    GC$ 10,00 -> 2
    GC$ 5,00 -> 0
    GC$ 1,00 -> 2

*/

let valorSolicitado = Number(prompt("valor a sacar"))

let notas50 = 0
let notas10 = 0
let notas5 = 0
let notas1 = 0
let valorSaque = valorSolicitado

if (valorSolicitado <= 0 || valorSolicitado == '' || valorSolicitado % 1 != 0) {
    if (valorSolicitado <= 0) {
        console.log("Valor solicitado deve ser maior que 0.");
    } else if (valorSolicitado == '') {
        console.log("Valor solicitado deve ser informado.");
    } else {
        console.log("Valor solicitado deve ser inteiro.");
    }
} else {
    console.log(`valor solicitado ${valorSolicitado}.`);
    notas50 = valorSaque / 50
    valorSaque = valorSaque % 50

    console.log(`Serão dadas ${Math.trunc(notas50)} notas de 50`);
    console.log(`Sobra ${valorSaque}`)

    notas10 = valorSaque / 10
    valorSaque = valorSaque % 10

    console.log(`Serão dadas ${Math.trunc(notas10)} notas de 10`);
    console.log(`Sobra ${valorSaque}`)

    notas5 = valorSaque / 5
    valorSaque = valorSaque % 5

    console.log(`Serão dadas ${Math.trunc(notas5)} notas de 5`);
    console.log(`Sobra ${valorSaque}`)

    notas1 = valorSaque / 1
    valorSaque = valorSaque % 1
    
    console.log(`Serão dadas ${Math.trunc(notas1)} notas de 1`);
    console.log(`Sobra ${valorSaque}`)

    console.log("Obrigada por nos deixar sem troco!!!! Até a próxima...");
}