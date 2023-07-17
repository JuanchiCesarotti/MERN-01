

const persona = {
    nombre: 'Tony',
    edad: 45, 
    clave: 'Iron man',
    
}


// const {nombre,edad,clave} = persona

// console.log(nombre, edad, clave)



// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)

const use_Context = (nombre, clave, edad, rango = 'Capitan') => {
    // console.log(nombre,edad, rango)

    return{
        nombeClave: clave,
        edad: edad
    }
}

const avenger = use_Context(persona);
console.table(avenger)