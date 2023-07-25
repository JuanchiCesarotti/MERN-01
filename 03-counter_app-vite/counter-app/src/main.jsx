import React from 'react'
import reactDOM from 'react-dom/client'


// MY IMPORTS 
import FirstApp from './FirstApp'
import DefaultApp from './DefaultApp'



reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DefaultApp></DefaultApp>
    </React.StrictMode>
)