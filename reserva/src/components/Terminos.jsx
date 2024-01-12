import React from 'react'
import { Link } from 'react-router-dom'
import './Terminos.css'

function Terminos() {
    return (
        <div>

            <div className='row justify-content-center'>
                <div className='col-md-9 mt-3'>

                    <div className='bs'>

                        <h1 className='terminos'>TÉRMINOS Y CONDICIONES</h1>
                        <br />
                        <h3> 1. RESERVA </h3>

                        <p> Para realizar la reserva, se requiere un pago inicial del 30% a través de transferencia bancaria en pesos argentinos o en caso de ser extranjero podrán abonarla mediante link de pago que lo proporcionará el administrador del complejo.
                            <br />
                            El saldo restante se abona en efectivo, transferencia bancaria o tarjeta, al momento del check-in.
                            <br />
                            <br />
                            Si usted quisiera abonar el total de la estadía, deberá comunicarse con el Administrador del alojamiento, donde le proporcionará la forma de pago adecuada según corresponda.
                        </p>

                        <h3> 2. CANCELACIÓN </h3>
                        <p>
                            La cancelación es GRATUITA si la realiza antes de abonar el 30% de la reserva. <br />
                            Una vez realizado el pago de la reserva, para cancelarla, deberá contactarse con el Administrador del complejo para la devolución de la misma SI CORRESPONDE o reprogramar la fecha de su estadía.
                            <br />
                            <b>Si se reprograma la fecha de su estadía, deberá hacerse cargo el huesped de las posibles variaciones que pueda sufrir el monto total de la reserva.</b>
                            <br />
                            Si la cancelación no es solicitada, no se realizará la devolución de la reserva.
                        </p>

                        <h1>PREGUNTAS FRECUENTES</h1>

                        <h3>1. ¿Tienen servicio de desayuno?</h3>
                        <p>
                            Brindamos desayuno de campo. <br />
                            Además las cabañas cuentan con cocina completa para los huéspedes.
                        </p>
                        <h3> 2. ¿Son Pet Friendly?</h3>
                        <p>Si, aceptamos mascotas. 
                            <br /> Sólo deberá avisarnos para estar informados con anterioridad de la situación.</p>
                        <h3> 3. Horario de Check-in y Check-out</h3>
                        <p>
                            Check-in: 13:00 HS a 19:00 HS <br />
                            Check-out: 10:00 HS <br />
                        </p>

                        <div className='footer-gral'>
                            <p className='txt-footer'>Experiencia Sara House <br /> Seguinos en nuestras redes.</p>
                            <Link className='redesFoot' to="https://www.instagram.com/sarahouse_cba/" target="_blank"><img src="/img/Instagram2.jpg" alt="Instagram" /></Link>
                            <Link className='redesFoot' to="https://wa.link/zjyonq" target="_blank"><img src="/img/Whatsapp.jpg" alt="WhatsApp" /></Link>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Terminos