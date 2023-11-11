var time = new Date()
var time_now = time.getHours()
// var time_now = 19
var writing_time = document.getElementById('horas')
var img = document.querySelector('img#img-select')

if (time_now < 12) {
    writing_time.innerText = `Agora são ${time_now} horas.`
} else if (time_now > 17) {
    writing_time.innerText = `Agora são ${time_now} horas.`
    img.setAttribute('src', 'imgs/noite.jpg')
    document.body.style.background = 'rgb(109, 55, 236)' //noite
} else {
    writing_time.innerText = `Agora são ${time_now} horas.`
    img.setAttribute('src', 'imgs/tarde.jpg') 
    document.body.style.background = 'rgb(255, 115, 0)' // tarde
}
