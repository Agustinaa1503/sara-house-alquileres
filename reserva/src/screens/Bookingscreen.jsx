import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Bookingscreen.css'
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';


function Bookingscreen() {

    const { id, fromdate, todate } = useParams();
    const [room, setRoom] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedGuests, setSelectedGuests] = useState(1);

    const totalDays = moment.duration(moment(todate).diff(moment(fromdate))).asDays();

    const [totalAmount, setTotalAmount] = useState();



    useEffect(() => {

        if (!localStorage.getItem('currentUser')) {
            window.location.href = '/login';
        }

        const fetchRoomId = async () => {

            try {
                setLoading(true);
                const room = await axios.post('/api/rooms/getroombyid', { id });
                setRoom(room.data);

                if (room.data && room.data.name && room.data.image) {
                    setRoom(room.data);

                    //Calcular el monto total de la reserva según total de días y total de huespedes.
                    setTotalAmount(room.data.rentperday * totalDays * selectedGuests);
                } else {
                    throw new Error('Error al cargar los datos de la habitación');
                }
                setLoading(false);
            } catch (error) {
                console.log('error al cargar los datos de la habitación:', error);
                setLoading(false);
                setError(error);

            }

        };
        fetchRoomId();
    }, [id, totalDays, selectedGuests]);

    async function bookRoom() {

        const bookingDetails = {
            room,
            user: JSON.parse(localStorage.getItem('currentUser'))._id,
            fromdate,
            todate,
            totalAmount,
            totalDays,
            guests: selectedGuests,
        }

        try {
            setLoading(true);
            const result = await axios.post('/api/bookings/bookroom', bookingDetails);
            //alert(result.data);
            console.log(result.data);
            setLoading(false);
            Swal.fire({
                //'RESERVA EXITOSA', 'Hemos recibido su reserva, nos contactaremos a la brevedad', 'success'
                position:'center',
                icon: 'success',
                title: 'RESERVA EXITOSA',
                text: 'Hemos recibido su reserva, nos contactaremos a la brevedad',
                showConfirmButton: true,

            }).then ((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/profile';
                }
            })
        } catch (error) {
            setLoading(false);
            Swal.fire({
                //'Lo sentimos', 'Error al realizar la reserva, inténtalo nuevamente', 'error'
                position:'center',
                icon: 'error',
                title: 'Lo sentimos',
                text: 'Error al realizar la reserva, reintente nuevamente',
                showConfirmButton: true,
            })
        }

    }



    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Error message={`Error al cargar la página. Intente nuevamente!`} />

            ) : (
                <div className='m-5'>
                    <div className='row justify-content-center mt-5 bs'>

                        <div className='col-md-5'>
                            <h1 className='titleName'>{room.name}</h1>
                            <img src={room.image[0]} alt="Sara House" className='img-reservation' />
                        </div>
                        <div className='col-md-5'>

                            <div style={{ textAlign: 'right' }}>
                                <h1>Detalles de la Reserva</h1>
                                <hr />
                                <b>
                                    <p>Nombre: {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                                    <p>Desde: {fromdate} </p>
                                    <p>Hasta: {todate} </p>

                                    <p>Capacidad máxima de la cabaña : {room.maxcount}</p>
                                    <p>Cantidad de huéspedes en la reserva:
                                        <input
                                            className='form-control-canthusp'
                                            type="number"
                                            min={1}
                                            max={room.maxcount}
                                            value={selectedGuests}
                                            onChange={(e) => setSelectedGuests(e.target.value)}
                                        />
                                    </p>
                                </b>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <b>
                                    <h1>Descripción</h1>
                                    <hr />
                                    <p>Alquiler diario por huesped : {room.rentperday} </p>
                                    <p>Total noches reservadas : {totalDays} </p>
                                    <p>Monto total de la reserva: {totalAmount}</p>

                                </b>

                                <div style={{ float: 'right' }}>

                                    <button className='btn btn-primary m-3' onClick={bookRoom}>Pagar 30% de la reserva para confirmar mi estadía</button>

                                    <Link to="https://wa.link/zjyonq" target="_blank"><button className='btn-1 m-3'>Contactarme con el Administrador</button></Link>

                                
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Bookingscreen




