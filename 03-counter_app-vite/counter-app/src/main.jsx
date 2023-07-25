import React from 'react'
import reactDOM from 'react-dom/client'


// MY IMPORTS 
import FirstApp from './FirstApp'


reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp></FirstApp>
    </React.StrictMode>
)