// fatorial

function fatorial(number) {
    let fatorial_ = 1
    for (let contador = number; contador > 1; contador--) {
        fatorial_ *= contador
    }
    return fatorial_
}

console.log(fatorial(5))