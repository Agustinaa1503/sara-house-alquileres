import React, { useEffect, useState } from 'react'
import { Tabs, Tag } from 'antd';
import './Adminscreen.css';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';

import Swal from 'sweetalert2';

const { TabPane } = Tabs;
function Adminscreen() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser.isAdmin) {
            setIsAdmin(true);
        } else {
            window.location.href = '/home';
        }
    }, []);

    return (
        <div className='m-5 bs'>
            <h1 className='title-Adm'>Panel Administrador</h1>
            <Tabs defaultActiveKey="1">

                <TabPane tab="Reservas" key="1">
                    <Bookings isAdmin={isAdmin} />
                </TabPane>

                <TabPane tab="Cabañas" key="2">
                    <Rooms />
                </TabPane>
                <TabPane tab="Usuarios" key="3">
                    <Users />
                </TabPane>
                <TabPane tab="Agregar Cabaña" key="4">
                    <Addroom />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Adminscreen


// ---------------------------------------------------------------------------- PANEL DE RESERVAS --------------------------------

export function Bookings() {

    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const confirmedBookings = bookings.filter(booking => booking.status === 'booked');
    const cancelledBookings = bookings.filter(booking => booking.status === 'cancelled');



    useEffect(() => {

        const fetchBookings = async () => {
            try {
                const res = await axios.get('/api/bookings/getallbookings')
                setBookings(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error)
            }
        }
        fetchBookings();
    }, []);


/* ------------------------------------------ CANCELACION DE RESERVA POR EL ADMINISTRADOR ------ */
    const handleCancelBooking = async (bookingid, id) => {

        try {
            setLoading(true);
            const result = await axios.post('/api/bookings/cancelbooking', { bookingid, id });
            console.log(result);
            setLoading(false);
            Swal.fire(
                'CANCELACIÓN EXITOSA', ' La reserva se canceló con exito', 'success'
            )

        } catch (error) {
            console.log(error);
            setLoading(false);
            Swal.fire(
                'ERROR', 'La reserva no pudo ser cancelada', 'error'
            )
        }
    }




    return (
        <div className='row'>

            <div className='col-md-15'>

                {loading && <Loader />}

                {error && <Error message="Error en la carga de datos" />}

                <h1 className='cantidad-reservas'>Reservas Confirmadas: {confirmedBookings.length}</h1>
                <h1 className='cantidad-reservas'>Reservas Canceladas: {cancelledBookings.length}</h1>

                <table className='table table-bordered table-dark'>
                    <thead className='bs thead-dark'>
                        <tr>
                            <th>ID Reserva</th>
                            <th>Usuario</th>
                            <th>Cabaña</th>
                            <th>Fecha <br /> Entrada</th>
                            <th>Fecha <br /> Salida</th>
                            <th>Días</th>
                            <th>Huespedes</th>
                            <th>Precio <br /> Total</th>
                            <th>Estado</th>
                            <th>Cancelar</th>
                        </tr>
                    </thead>

                    <tbody>

                        {bookings.length && bookings.map(booking => {
                            return (
                                <tr>
                                    <td>{booking._id}</td>
                                    <td>{booking.user}</td>
                                    <td>{booking.room}</td>
                                    <td>{booking.fromdate}</td>
                                    <td>{booking.todate}</td>
                                    <td>{booking.totalDays}</td>
                                    <td>{booking.guests}</td>
                                    <td>{<Tag color='#2db7f5'>${booking.totalAmount}</Tag>}</td>
                                    <td>{booking.status === 'cancelled' ? (<Tag color="red">CANCELADA</Tag>) : (<Tag color="green">CONFIRMADA</Tag>)}</td>
                                    <td><button className='btn' onClick={() => handleCancelBooking(booking._id, booking.id)}> x </button></td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>


        </div>
    )
}


// ---------------------------------------------------------------------------- PANEL DE CABAÑAS --------------------------------


export function Rooms() {

    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {

        const fetchRooms = async () => {
            try {
                const res = await axios.get('/api/rooms/getallrooms')
                setRooms(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error)
            }
        }
        fetchRooms();
    }, []);

    return (
        <div className='row'>

            <div className='col-md-15'>

                {loading && <Loader />}

                {error && <Error message="Error en la carga de datos" />}

                <table className='table table-bordered table-dark'>
                    <thead className='bs thead-dark'>
                        <tr>
                            <th>ID Cabaña</th>
                            <th>Nombre</th>
                            <th>Precio <br /> Diario</th>
                            <th>Capacidad <br /> Máxima</th>

                        </tr>
                    </thead>

                    <tbody>

                        {rooms.length && rooms.map(room => {
                            return (
                                <tr>
                                    <td>{room._id}</td>
                                    <td>{room.name}</td>
                                    <td>{room.rentperday}</td>
                                    <td>{room.maxcount}</td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>


        </div>
    )
}

// ---------------------------------------------------------------------------- PANEL DE USUARIOS --------------------------------

export function Users() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const res = await axios.get('/api/users/getallusers')
                setUsers(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error)
            }
        }
        fetchUsers();
    }, []);

    return (
        <div className='row'>

            <div className='col-md-15'>

                {loading && <Loader />}

                {error && <Error message="Error en la carga de datos" />}

                <table className='table table-bordered table-dark'>
                    <thead className='bs thead-dark'>
                        <tr>
                            <th>ID Usuario</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Dni</th>
                            <th>Teléfono</th>
                            <th>Administrador</th>

                        </tr>
                    </thead>

                    <tbody>

                        {users.length && users.map(user => {
                            return (
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dni}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.isAdmin ? (<Tag color='green'>Si</Tag>) : (<Tag color='red'>No</Tag>)}</td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>


        </div>
    )
}






// ---------------------------------------------------------------------------- PANEL AGREGADO DE CABAÑAS ----------------------------



export function Addroom() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const [name, setName] = useState('')
    const [rentperday, setRentperday] = useState()
    const [maxcount, setMaxcount] = useState()
    const [description, setDescription] = useState()
    const [phone, setPhone] = useState()
    const [type, setType] = useState()
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()
    const [image4, setImage4] = useState()
    const [image5, setImage5] = useState()


    async function addRoom() {

        const newRoom = {
            name,
            rentperday,
            maxcount,
            description,
            phone,
            type,
            image: [image1, image2, image3, image4, image5]
        }

        try {
            setLoading(true)
            const result = await axios.post('/api/rooms/addroom', newRoom)
            console.log(result)
            setLoading(false)
            Swal.fire(
                'Felicidades', 'Cabaña agregada con exito', 'success'
            ).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/home'
                }
            })
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error)
            Swal.fire(
                'Error', 'Error al agregar cabaña', 'error'
            )
        }
    }



    return (
        <div className='row'>



            <div className='col-md-5'>

                {loading && <Loader />}
                {error && <Error message="Error al agregar cabaña" />}

                <input type="text" className='form-control3' placeholder='Nombre Cabaña' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" className='form-control3' placeholder='Precio Diario' value={rentperday} onChange={(e) => setRentperday(e.target.value)} />
                <input type="text" className='form-control3' placeholder='Max Capacidad' value={maxcount} onChange={(e) => setMaxcount(e.target.value)} />
                <input type="text" className='form-control3' placeholder='Teléfono' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="text" className='form-control3' placeholder='Tipo de Cabaña' value={type} onChange={(e) => setType(e.target.value)} />
                <input type="text" className='form-control3' placeholder='Descripción' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className='col-md-5'>
                <input type="text" className='form-control3' placeholder='Imagen 1' value={image1} onChange={(e) => setImage1(e.target.value)} />
                <input type="text" className='form-control3' placeholder='Imagen 2' value={image2} onChange={(e) => setImage2(e.target.value)} />
                <input type="text" className='form-control3' placeholder='Imagen 3' value={image3} onChange={(e) => setImage3(e.target.value)} />
                <input type="text" className='form-control3' placeholder='Imagen 4' value={image4} onChange={(e) => setImage4(e.target.value)} />
                <input type="text" className='form-control3' placeholder='Imagen 5' value={image5} onChange={(e) => setImage5(e.target.value)} />
            </div>

            <div className='text-right'>

                <button className='btn btn-success mt-5' onClick={addRoom}>Agregar Cabaña</button>

            </div>

        </div>
    )
}


// ------------------------------------------------------------ PANEL DE CANCELACIÓN DE RESERVAS --------------------------------

