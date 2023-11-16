import '../styles/style.css';
import React from 'react'
import { useLocation } from 'react-router-dom';

function Main(){
    const location=useLocation()


    return(
        <div class="container mt-3">
            <h1>Hello {location.state.id} and welcome to the main page</h1>
    </div>
    )
    

}

export default Main;