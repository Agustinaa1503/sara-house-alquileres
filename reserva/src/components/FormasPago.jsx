import React from 'react'
import './FormasPago.css'
import { Link } from 'react-router-dom'

function FormasPago() {
    return (
        <div>

            <div className='row justify-content-center'>
                <div className='col-md-9 mt-3'>

                    <div className='bs'>
                        <h1 className='titulo-registro'>¿CÓMO PUEDO PAGAR MI ESTADÍA?</h1>

                        <table className='table table-bordered'>

                            <thead>
                                <tr>
                                    <th className='td'>Formas de Pago</th>
                                    <td className='td-formaspago'>Efectivo al Ingresar </td>
                                    <td className='td-formaspago'>Transferencia </td>
                                    <td className='td-formaspago'>Tarjeta Débito</td>
                                    <td className='td-formaspago'>Tarjeta Crédito</td>

                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th className='td'>Descripción</th>
                                    <td className='td-formaspago'>Realizar el deposito de reserva para confirmar.<br />Luego abona el total al ingresar al establecimiento en efectivo. </td>
                                    <td className='td-formaspago'>Realizar el deposito de reserva para confirmar.<br />Luego abona el total al ingregar al establecimiento en efectivo o transferencia.</td>
                                    <td className='td-formaspago'>Realizar el deposito de reserva para confirmar.<br /> Luego abonar el total al ingregar al establecimiento con tu tarjeta de débito. </td>
                                    <td className='td-formaspago'>Realizar el deposito de reserva para confirmar.<br /> Luego abonar el total al ingregar al establecimiento con tu tarjeta de crédito. </td>
                                </tr>
                            </thead>

                        </table>

                        <br />

                        <h3 className='medio-pago'>La reserva queda CONFIRMADA abonando el 30% del total de la estadía con anticipación. <br />
                            O si abona el total de su estadía con cualquier medio de pago correspondiente. <br /> La seña es para confirmar fecha y congelar tarifa. </h3>
                        <br />

                        <Link to="https://wa.link/zjyonq" target="_blank"><button className='btn-1 mt-3'>Contactarme con el Administrador</button></Link>
                        <a className='condiciones' href="/terminos">Terminos y condiciones </a>

                        <br />

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

export default FormasPago