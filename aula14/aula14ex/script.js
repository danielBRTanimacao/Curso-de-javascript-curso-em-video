function contar() {
    let ini = document.getElementById('txti') // let permite que você declare variáveis limitando seu escopo no bloco, 
    let fim = document.getElementById('txtf') // instrução, ou em uma expressão na qual ela é usada
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo invalido!')
            p = 1
        }
        if (i < f) {
            // crescente
            for (var c = i; c <= f; c += p) { // utilizando itens das aulas anteriores
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // decrecente
            for (var c = i; c >= f; c -= p) { // utilizando itens das aulas anteriores
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}