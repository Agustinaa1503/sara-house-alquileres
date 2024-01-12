import React, { useState, useEffect } from 'react';
import axios from "axios";
import Room from "../components/Room";
import Loader from '../components/Loader';
import Error from "../components/Error";
import './Homescreen.css'
import moment from 'moment';

import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;
function Homescreen() {

    const [rooms, setrooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [fromdate, setfromdate] = useState();
    const [todate, settodate] = useState();

    const [duplicateRooms, setDuplicateRooms] = useState([]);

    const [searchInput] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const rooms = await axios.get('/api/rooms/getallrooms');
                setrooms(rooms.data);
                setDuplicateRooms(rooms.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(error);
            }
        };

        fetchData();
    }, []);

    function filterByDate(dates, dates2) {
        const fromDate = moment(dates2[0]).format('YYYY-MM-DD');
        const toDate = moment(dates2[1]).format('YYYY-MM-DD');

        const filteredRooms = duplicateRooms.filter((room) => {

            const selectedGuests = parseInt(searchInput, 10) || 1; // Parsear la entrada de cantidad de huéspedes

            for (const booking of room.currentbookings) {
                if (
                    moment(fromDate).isBetween(booking.fromdate, booking.todate, null, '[]') ||
                    moment(toDate).isBetween(booking.fromdate, booking.todate, null, '[]') ||
                    moment(booking.fromdate).isBetween(fromDate, toDate, null, '[]') ||
                    moment(booking.todate).isBetween(fromDate, toDate, null, '[]')
                ) {
                    return false; // La habitación no está disponible para el rango de fechas seleccionado
                }

                if (selectedGuests >= booking.guest) {
                    return false; // La habitación no está disponible para la cantidad de huespedes seleccionada
                }
            }
            return true; // La habitación está disponible para el rango de fechas seleccionado
        });

        setfromdate(fromDate);
        settodate(toDate);
        setrooms(filteredRooms);
    }




    return (
        <div className='container'>

            <div className='row mt-3 bs'>
                <div className="col-md-5 mt-2">
                    <Space direction="vertical" size={12}>
                        <RangePicker format='YYYY-MM-DD' onChange={filterByDate} />
                    </Space>
                </div>

            </div>

            <div className='row justify-content-center mt-5 '>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Error message={'Error al cargar la página. Intente nuevamente!'} />
                ) : (

                    rooms.map((room) => {
                        return (
                            <div className='col-md-9 mt-2' key={room._id}>
                                <Room room={room} fromdate={fromdate} todate={todate} />
                            </div>
                        );
                    })
                )}

            </div>

        </div>


            
    );
}

export default Homescreen;
