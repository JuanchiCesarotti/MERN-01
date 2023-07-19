const personajes = ['Goku', 'Vegetta', 'Tronks']



const [p1, p2, p3] = personajes;

console.log(p1, p2)




const retornArrgelo = () => {
    return ['ABC', 123]
}

const [letras,numeros] = retornArrgelo()

console.log(numeros)


const use_State = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}]
}

const [nombre, setNombre] = use_State('Goku')
console.log(nombre)

setNombre()