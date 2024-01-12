import React, { useState } from 'react'
import axios from 'axios';

import Loader from '../components/Loader';
import Error from '../components/Error';

import './Loginscreen.css'


function Loginscreen() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    async function login() {

        const user = {

            email,
            password

        };

        try {
            setLoading(true);
            const result = await axios.post('/api/users/login', user);
            setLoading(false);

            if (result.status >= 200 && result.status < 300) {
                localStorage.setItem('currentUser', JSON.stringify(result.data));
                
                // línea para indicar que el usuario ha iniciado sesión
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = '/inicio';
            } else {
                console.error('Error al iniciar sesión:', result.data.message);
                setError(true);
            }
        }catch (error) {
            // Muestra un mensaje de error si ocurre un error durante la solicitud
            console.error('Error al iniciar sesión:', error);
            setLoading(false);
            setError(true);
        

        }
    }

    return (
        <div>
            {loading && <Loader />}
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-3'>
                    {error && <Error message={'Email o contraseña incorrectos'} />}
                    <div className='bs'>
                        <h1 className='titulo-registro'>Inicio de Sesión</h1>
                        <input type="email" className='form-control2' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className='form-control2' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button className='btn btn-primary mt-3' onClick={login}>Iniciar Sesión</button>

                    </div>
                </div>

            </div>
        </div>
    )
}


export default Loginscreen