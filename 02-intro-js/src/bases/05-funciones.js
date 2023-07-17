

// FUNCION EN JS
const saludar = function(nombre){
    return `hola ${nombre}`
}


 const saludar2 = (nombre) => {
    return `hola ${nombre}`
 }


 const saludar3 = (nombre) =>  `hola ${nombre}`
 

// console.log( saludar('Juanchi'))
// console.log(saludar2('Arrow Function'))
// console.log(saludar3('Test inLine'))


const getUser = (nombre) => ({
    userId: 'JuanchiCesarotti',
    userEmail: 'Jcesarotti.dev@gmail.comn'
})

const user = getUser()
console.table(user)



// --TEST USER --

const getUsuarioActivo = (nombre) => ({
    userId: 'UsuarioPrueba',
    userEmail: nombre
})
const usuarioPruebas = getUsuarioActivo('Usuario de Pruebas')
console.table(usuarioPruebas)