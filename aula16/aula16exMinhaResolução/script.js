function numeroAdict() {
    let text_number = document.querySelector('input#txtnum')
    let number_config = Number(text_number.value)
    let numbers_array = []

    if (number_config > 100 || number_config < 1) {
        window.alert('Por favor digite um número entre 1 ate 100!')
    } else if (text_number.value.length == 0) {
        window.alert('Por favor digite um número')
    } else {
        numbers_array.push(`O número é ${number_config}`)
    }
}