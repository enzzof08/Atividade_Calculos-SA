function ValidarDados(valor1, valor2, operação){
    let numero1      = valor1.replace(',','.')
    let numero2      = valor2.replace(',','.')
    let operaçãoReal = operação
    let n1 = Number(numero1)
    let n2 = Number(numero2)

    if(isNaN(n1) || n1 == '' || isNaN(n2) || n2 == ''){
        console.log('ERRO: Dados não preenchidos corretamente')
        return false

    }else if(operaçãoReal != 'soma' && operaçãoReal != 'subtração' && operaçãoReal != 'multiplicação' && operaçãoReal != 'divisão'){
        console.log('ERRO: Dados não preenchidos corretamente')
        return false
    }else{

    return true

    }

}


function Calcular(valor1, valor2, operação){
    let numero1      = Number(valor1.replace(',','.'))
    let numero2      = Number(valor2.replace(',','.'))
    let operaçãoReal = operação

    if(operaçãoReal == 'soma'){

        let resultado = numero1 + numero2

        return resultado.toFixed(2)


    }else if(operaçãoReal == 'subtração'){
        let resultado = numero1 - numero2

        return resultado.toFixed(2)

    }else if(operaçãoReal == 'multiplicação'){
        let resultado = numero1 * numero2

        return resultado.toFixed(2)

    }else if(operaçãoReal == 'divisão'){
        let resultado = numero1/numero2
        
        return resultado.toFixed(2)

    }
}


module.exports = {
    ValidarDados,
    Calcular

}
