// let num = [3, 45, 2, 7, 9, 300]
// // num[6] = 1
// // num.push(66)
// // num.sort()

// // console.log(num.length)
// // console.log(num)

// for (let pos=0; pos<num.length; pos++) {
//     console.log(num[pos])
// }

let num = [3, 45, 2, 7, 9, 300]

num.push(6)
num.sort()
console.log(num)

console.log(`O vetor possui ${num.length} valores`)
console.log(num[3])

for (let pos in num) {
    console.log(`Na posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(6)

if (pos == -1) {
    console.log('Valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}