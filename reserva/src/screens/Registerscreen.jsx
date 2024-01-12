import React, {useState } from 'react'
import './Registerscreen.css'
import axios from 'axios'

import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';

function Registerscreen() {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dni, setDni] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);


    async function register() {
        if(password===cpassword){
            const user = {
                name,
                lastName,
                email,
                phone,
                dni,
                password,
                cpassword,
            }
            
            try {
                setLoading(true);
                const result = await axios.post('/api/users/register', user);
                if (result.status === 200) {
                    //alert('Usuario registrado exitosamente');
                setLoading(false);
                setSuccess(true);

                setName('')
                setEmail('')
                setPassword('')
                setCPassword('')

                } else {
                    console.log('Registro fallido. Estado:', result.status);
                }
            } catch (error) {
                console.log('Error durante el registro:', error);
                setLoading(false);
                setError(true);
            }
            
        }else {
            alert('Las contraseñas no coinciden');
        } 
        
    }  

    return (
        <div>

            {loading && <Loader />}
            {error && <Error message={'Error durante el registro'} />}
            
            <div className='row justify-content-center'>
                <div className='col-md-5 mt-2'>
                {success && <Success message={'Usuario registrado exitosamente'} /> }
                    <div className='bs'>
                        <h1 className='titulo-registro'>Registro</h1>
                        <input type="text" className='form-control1' placeholder='Nombre'  value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="text" className='form-control1' placeholder='Apellido' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        <input type="email" className='form-control1' placeholder='Email'value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" className='form-control1' placeholder='Teléfono' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <input type="text" className='form-control1' placeholder='DNI' value={dni} onChange={(e) => setDni(e.target.value)}/>
                        <input type="password" className='form-control1' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <input type="password" className='form-control1' placeholder='Confirmar contraseña' value={cpassword} onChange={(e) => setCPassword(e.target.value)}/>
                    
                        <button className='btn btn-primary mt-3' onClick={register}>Registrarme</button>
                    
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Registerscreen

