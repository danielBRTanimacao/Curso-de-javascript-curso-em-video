var now = new Date()
var time = now.getHours()

console.log(`Agora são exatamente ${time} horas`)

if (time < 12) {
    console.log('Bom dia!')
} else if(time >= 18) {
    console.log('Boa Noite')
} else {
    console.log('Boa tarde')
}