function contador() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var msg = document.querySelector('div#resultado-contagem')
    var num_init = Number(inicio.value)
    var num_final = Number(fim.value)
    var pass = Number(passo.value)

    if (num_init == 0) {
        msg.innerHTML = 'Não e possivel contar tente de novo!'
    } else if (pass == 0) {
        window.alert('Não e possivel começar por 0 logo começaram por 1')
        passo.value = 1
    } else {
        msg.innerHTML = 'Contando:<br>'
        msg.innerHTML = `${num_init} `
        while (num_init <= num_final) {
            num_init += pass
            msg.innerHTML += `${num_init} `
        }
    }
}