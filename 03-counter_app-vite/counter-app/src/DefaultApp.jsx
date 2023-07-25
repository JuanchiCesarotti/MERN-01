import React from 'react'
const newMessage = 'Juanchi';

const JsonTest = {
    nombre: 'Juuanchi',
    apellido: 'Cesarotti'
}

const getResault = () => {
    return 4+4
}


export default function DefaultApp() {

    return (
    <>
    <h1>Default App</h1>
    <p>{getResault()}</p>
    {/* <p>{JSON.stringify(JsonTest)}</p> */}
    </>
  )
}
