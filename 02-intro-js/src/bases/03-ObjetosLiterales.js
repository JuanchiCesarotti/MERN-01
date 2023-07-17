

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    age: 45,
    dieccion: {
        line1: 'Buenos Aires',
        line2: '12 de Octubre'
    }
    
}

console.table(persona)


const persona2 = {...persona};

persona2.nombre = 'Peter'

console.log(persona2)
console.log(persona)