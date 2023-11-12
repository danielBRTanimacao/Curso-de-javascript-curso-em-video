function carregar() {
    var message = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora_atual = data.getHours()
    message.innerHTML = `Agora são ${hora_atual} horas.`
    if (hora_atual >= 0 && hora_atual < 12) {
        img.scr = 'imgs/manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora_atual >= 12 && hora_atual <= 18) {
        img.scr = 'imgs/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.scr = 'imgs/noite.jpg'
        document.body.style.background = '#515154'
    }
}

