function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade <= 10) { // vou testar com uma func depois
                // creança
                img.setAttribute('scr', 'imgs/bebe-m.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('scr', 'imgs/jovem-m.jpg')
            } else if (idade < 50){
                // adulto
                img.setAttribute('scr', 'imgs/adulto-m.jpg')
            } else {
                img.setAttribute('scr', 'imgs/idoso-m.jpg')
                // idoso
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                // creança
                img.setAttribute('scr', 'imgs/bebe-f.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('scr', 'imgs/jovem-f.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('scr', 'imgs/adulto-f.jpg')
            } else {
                // idoso
                img.setAttribute('scr', 'imgs/idoso-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }
}