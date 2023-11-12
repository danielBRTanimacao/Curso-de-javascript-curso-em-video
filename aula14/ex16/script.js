function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número... seu vacilão!')
    } else {
        let number = Number(num.value)
        let count = 1
        tab.innerHTML = ''
        while (count <= 10) {
            let item = document.createElement('option')
            item.text = `${number} X ${count} = ${number*count}`
            item.value = `tab${count}`
            tab.appendChild(item)
            count++
        }
    }
}