const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron Man'
}


const {nombre, edad, clave} = persona



const use_Context = ({nombre, edad, clave, rango = 'capitan'}) => {

    
    // console.table(nombre, clave, edad, rango)
    return{
        nombreClave: clave,
        years: edad,
        location: {
            lat: 2,
            lon: 45
        }
    }


}

const avenger = use_Context(persona)

const {nombreClave,years, location:{lat,lon}} = avenger

console.log(avenger)
// console.log(nombre)
// console.log(edad)
// console.log(clave)
