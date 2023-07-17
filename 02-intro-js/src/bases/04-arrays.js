


const arreglo = [1,2,3,4]

let arreglo2 = [...arreglo,5]

const arreglo3 = arreglo2.map(function(numero){
    return numero*2 
})

console.table(arreglo)
console.table(arreglo2)
console.table(arreglo3)