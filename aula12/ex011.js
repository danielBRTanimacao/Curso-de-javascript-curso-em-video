var age = 19

console.log(`Você tem ${age} anos`)
if (age < 16) {
    console.log('Não vota')
} else if (age < 18 || age >= 65) {
    console.log('voto Não obrigatorio')
} else {
    console.log('Voto obrigatorio')
}