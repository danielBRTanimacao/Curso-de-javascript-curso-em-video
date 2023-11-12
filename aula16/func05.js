// RECURSIVIDADE
function fatorial(number) {
    if (number == 1) {
        return 1
    } else {
        return number * fatorial(number-1)
    }
}

console.log(fatorial(5))
