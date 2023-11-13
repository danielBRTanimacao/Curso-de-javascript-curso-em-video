let amigo = {
    nome:'jose', 
    sexo:'M', 
    peso: 85, 
    engordar(p=0){
        this.peso += p
    }
}

console.log(amigo.nome)
amigo.engordar(10)
console.log(amigo.peso)