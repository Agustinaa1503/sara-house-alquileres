import React, { useEffect, useState } from 'react';
import { Tabs, Tag } from 'antd';
// import type { TabsProps } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Profilescreen.css'

import Loader from '../components/Loader';
import Error from '../components/Error';
import Swal from 'sweetalert2';

const { TabPane } = Tabs;
function Profilescreen() {

    const user = JSON.parse(localStorage.getItem('currentUser'))

    useEffect(() => {
        if (!user) {
            window.location.href = '/login';
        }
    }, [user]);

    return (
        <div className='m-3'>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Perfil" key="1">

                    <ul className='listProfile'>
                        <li><h3> <b> Nombre: </b> {user.name}</h3></li>
                        <li><h3> <b>Apellido:</b>{user.lastName}</h3></li>
                        <li><h3> <b>Email:</b>  {user.email}</h3></li>
                        <li><h3> <b>Telefono:</b>  {user.phone}</h3></li>
                        <li><h3> <b>DNI:</b>  {user.dni}</h3></li>
                        <li><h3> <b>Administrador:</b>  {user.isAdmin ? 'Si' : 'No'}</h3></li>
                        <li><Link to="https://wa.link/zjyonq" target="_blank"><button className='btn-1 mt-3'>Contactarme con el Administrador</button></Link></li>
                    </ul>




                </TabPane>
                <TabPane tab="Reservas" key="2">
                    <MyBookings />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Profilescreen


export function MyBookings() {

    const user = JSON.parse(localStorage.getItem('currentUser'))

    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        const myBookings = async () => {
            try {
                setLoading(true)
                const rooms = await axios.post('/api/bookings/getbookingsbyuserid', { userid: user._id })
                console.log(rooms.data)
                setBookings(rooms.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error)
            }
        };

        // Llamada solo al montar el componente
        if (user) {
            myBookings();
        }
    }, []); // Array vacío para ejecutar el efecto solo al montar el componente




    async function cancelBooking(bookingid, id) {
        try {
            setLoading(true);
            const result = await axios.post('/api/bookings/cancelbooking', { bookingid, id });
            console.log(result);
            setLoading(false);
            Swal.fire({
                //'CANCELACIÓN EXITOSA', ' Su reserva ha sido cancelada', 'success'
                position: 'center',
                icon: 'success',
                title: 'CANCELACIÓN EXITOSA',
                text: ' Su reserva ha sido cancelada',
                showConfirmButton: true
            }).then((result) => {
                window.location.reload();
            })
        } catch (error) {
            console.log(error);
            setLoading(false);
            Swal.fire({
                //'ERROR', ' Su reserva no pudo ser cancelada', 'error'
                position: 'center',
                icon: 'error',
                title: 'ERROR',
                text: ' Su reserva no pudo ser cancelada',
                showConfirmButton: true
            })
        }
    }




    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>

                    {loading && (<Loader />)}
                    {error && (<Error message='Error al modificar las reservas' />)}

                    {bookings && bookings.map((booking) => {

                        return (
                            <div key={booking._id} className='bs'>
                                <h3 className='title-reservation'>{booking.room}</h3>
                                <p> <b>Nombre y Apellido de usuario: </b> {user.name} {user.lastName}</p>
                                <p> <b>Fecha de Ingreso: </b> {booking.fromdate}</p>
                                <p> <b>Fecha de Salida: </b> {booking.todate}</p>
                                <p> <b>Cantidad de huespedes a alojarse: </b> {booking.guests}</p>
                                <p> <b>Cantidad de noches reservadas: </b> {booking.totalDays}</p>
                                <p> <b>Precio total de la reserva: </b> {booking.totalAmount}</p>
                                <p> <b>Estado de la reserva: </b> {booking.status === 'cancelled' ? (<Tag color="red">CANCELADA</Tag>) : (<Tag color="green">CONFIRMADA</Tag>)}</p>
                                <p> <b>Identificador de la reserva: </b> {booking._id}</p>

                                {booking.status !== 'cancelled' && (<div className='text-right'>
                                    <button className='btn btn-primary mt-3' onClick={() => cancelBooking(booking._id, booking.id)}>Cancelar Reserva</button>
                                    <br />
                                    <Link to="https://wa.link/9oi85a" target="_blank"><button className='btn-1 mt-3'>Abonar el 30% de la reserva</button></Link>
                                </div>
                                )}


                            </div>
                        )
                    })}


                </div>

            </div>
        </div>
    )
}
