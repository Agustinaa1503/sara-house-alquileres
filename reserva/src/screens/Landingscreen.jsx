import React from 'react';
import { Link } from 'react-router-dom';
import './Landingscreen.css';

function Landingscreen() {

    return (
        <div className='row landing'>
            <div className='col-md-12'>
                <h2 className='title-landing'>SARA HOUSE</h2>
                <h1 className='title-landing2'>
                    <i>Alquiler de Cabañas. ¡Tranquilidad asegurada!</i>
                </h1>

                <Link to='/inicio'>
                    <button className='btn1 mt-3'>Comenzar</button>
                </Link>
            </div>
        </div>
    );
}

export default Landingscreen;
