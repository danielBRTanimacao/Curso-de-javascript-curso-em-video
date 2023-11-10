var now = new Date()
var day_week = now.getDay()

// day_week = 8
// day_week = 5
/*
    Domingo
    Segunda
    Terça
    Quarta
    Quinta
    Sexta
    Sabado
*/ 

// console.log(day_week)

switch (day_week) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('Dia invalido!')
        break
}