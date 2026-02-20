function ValidarDados(valor1, valor2, operação){
    let numero1      = valor1.replace(',','.')
    let numero2      = valor2.replace(',','.')
    let operaçãoReal = operação

    if(isNaN(numero1) || numero1 == '' || isNaN(numero2) || numero2 == ''){

        console.log('ERRO: Dados não preenchidos corretamente')
        return false

    }else if(operaçãoReal != 'Soma' && operaçãoReal != 'Subtração' && operaçãoReal != 'Multiplicação' && operaçãoReal != 'Divisão'){

        console.log('ERRO: operação não preenchida corretamente')
        return false

    }else{

    return true

    }

}


function Calcular(valor1, valor2, operação){
    let numero1      = Number(valor1.replace(',','.'))
    let numero2      = Number(valor2.replace(',','.'))
    let operaçãoReal = operação

    if(operaçãoReal == 'Soma'){

        let resultado = numero1 + numero2

        return resultado.toFixed(2)


    }else if(operaçãoReal == 'Subtração'){
        let resultado = numero1 - numero2

        return resultado.toFixed(2)

    }else if(operaçãoReal == 'Multiplicação'){
        let resultado = numero1 * numero2

        return resultado.toFixed(2)

    }else if(operaçãoReal == 'Divisão'){
        if(numero2 == 0){
            return false
        }else{
        let resultado = numero1/numero2
        
        return resultado.toFixed(2)
        }

    }else{
        return false
    }
}



module.exports = {
    ValidarDados,
    Calcular
    

}
