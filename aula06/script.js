// Meus pequenos testes
// var name = 'cUrurU'
// var age = 20
// var nota = 10
var num = 1250.4
// console.log(`O aluno ${name} com ${age} anos tirou a nota ${nota}`)
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase()) crtl + ; comenta //

// console.log('R$' + num.toFixed(2).replace('.', ',')) 
console.log(num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))