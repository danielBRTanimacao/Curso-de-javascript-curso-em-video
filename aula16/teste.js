// function somar(num1, num2) {
//     res = Number(num1) + Number(num2)
//     console.log('Digite numeros validos')
//     return res
// }

// console.log(somar(1, 2))

function parOrImpar(number) {
    if (number <= 0) {
        console.log('Digite um valor acima de zero')
    } else if (number % 2 == 0) {
        console.log('PAR')
    } else {
        console.log('IMPAR')
    }

}

parOrImpar(-1)