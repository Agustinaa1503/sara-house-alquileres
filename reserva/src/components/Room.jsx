import React from 'react';
import './Room.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

import { Link } from 'react-router-dom';



function Room({ room, fromdate, todate }) {

    console.log("fromdate:", fromdate);
    console.log("todate:", todate);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='row bs'>
            <div className='col-md-4'>
                <img src={room.image[0]} alt="Sara House" className='smallimg' />
            </div>
            <div className='col-md-7'>
                <h1>{room.name}</h1>

                <b>
                    <p>Capacidad máxima de la cabaña : {room.maxcount}</p>
                    <p>Teléfono de contacto : {room.phone}</p>
                    <p>Tipo de cabaña : {room.type}</p>
                </b>

                <div style={{ float: 'right' }}>

                    {(fromdate && todate) && (
                        <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
                            <button className='btn btn-primary m-2'>Reservar</button>
                        </Link>
                    )}






                    <button className='btn btn-primary' onClick={handleShow}>Ver Detalles</button>
                </div>

            </div>


            <Modal key={room._id} show={show} onHide={handleClose} size='lg'>
                <Modal.Header>
                    <Modal.Title className='titulo'>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Carousel>
                        {
                            room.image.map((img) => (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 bigimg"
                                        src={img}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>

                    <p className='description1'>{room.description}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-primary' variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>

                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Room;