const readline = require('readline')
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o primeiro número de entrada: ', function (valor1) {
    let numero1 = valor1

    entradaDeDados.question('Digite o secundo número de entrada: ', function (valor2) {
        let numero2 = valor2

        entradaDeDados.question('Qual operação matemática deseja realizar? \n-Soma  \n-Subtração \n-Multiplicação \n-Divisão \n', function (operação) {

            let operaçãoReal = operação

            let calculos = require('./model/calculos')


            let validacao = calculos.ValidarDados(numero1, numero2, operaçãoReal)

            if (validacao) {

                let resultado = calculos.Calcular(numero1, numero2, operaçãoReal)

                if(resultado){
                console.log('O resultado da operação é: ' + resultado)
                }else{
                    console.log('ERRO: Não é permitido divisão por 0')
                    entradaDeDados.close
                }

            } else {
                console.log('Programa encerrado')
                entradaDeDados.close()
            }









        })


    })

})