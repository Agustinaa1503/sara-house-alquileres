import React from 'react'
import './inicio.css'
import { Link } from 'react-router-dom'

function Inicio() {

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('currentUser')); // Obtener el usuario del localStorage desde Loginscreen.


    return (

        <div>

            <div className='portada1'>
                <div className='information-content container'>
                    <div class="information-1"></div>
                    <div class="information-2">
                        <h2 className='title-inicio'>¡Tenemos las <span> MEJORES </span> cabañas para que disfrútes como <span> LO MERECES! </span></h2>
                    </div>
                </div>
            </div>



            <section className='about container'>
                <div className='about-img'>
                    <img className='img-inicio' src="./img/Casa2.jpg" alt="Sara House" />
                    <img className='img-inicio' src="./img/DingoPort2.jpg" alt="Sara House" />
                </div>

                <div className='about-txt'>
                    <h2 className='title-inicio'>Con nosotros obtenés la <span> MEJOR EXPERIENCIA!</span> </h2>
                    <p className='parrafo-inicio'>
                        <br /> Somos <i> <b> Sara House </b> </i> una empresa familiar dedicada a brindar un servicio de alojamiento, en el que tu única preocupación sea la de tu descanso  y disfrute.
                        <br /> Contamos con una amplia variedad de opciones para que tu estadía sea impecable.
                        <br /> Disponemos de complejos de cabañas , departamentos y casas premiun de uso exclusivo.
                        <br /> Amplio espectro en la capacidad de huéspedes.
                        <br /> Equipadas con todos los servicios para su confort.
                        <br /> Ubicadas en las sierras y a minutos de todo.
                        <br /> <span> ¡BIENVENIDOS A SARA HOUSE! </span>
                    </p>
                    {isLoggedIn === 'true' && user && user.name ? <Link to="/home"> <button className='btn-1'>Reservar</button></Link> : <Link to="/acceso"> <button className='btn-1'>Reservar</button></Link>} 
                    
                </div>
            </section>

            <div className='products container'>
                <h2 className='title-inicio'>Cabañas en <span>ALQUILER</span> en <br /> <span>Santa Rosa de Calamuchita</span> y <br /> Villa General Belgrano </h2>

                <div className='products-content'>
                    <div className='product'>
                        <img className='img-inicio' src="./img/Large6.jpeg" alt="Sara House" />
                        <div className='product-txt'>
                            <h3>Large Sara House <br /> Santa Rosa de Calamuchita </h3>
                            <p className='parrafo-inicio'>
                                CASA DE LUJO <br />
                                Capacidad 7 personas <br />
                                Pscina uso exclusivo <br />
                                Desayuno de campo incluido<br />
                                Todos los servicios <br />
                                Pet Friendly <br />
                            </p>
                            {isLoggedIn === 'true' && user && user.name ? <Link to="/home"> <button className='btn-1'>Reservar</button></Link> : <Link to="/acceso"> <button className='btn-1'>Reservar</button></Link>} 
                        </div>
                    </div>

                    <div className='product'>
                        <img className='img-inicio' src="./img/Casa3.jpg" alt="Sara House" />
                        <div className='product-txt'>
                            <h3>Casa en Complejo Sara House <br /> Santa Rosa de Calamuchita</h3>
                            <p className='parrafo-inicio'>
                                Capacidad 5 personas <br />
                                Pscina uso compartido <br />
                                Desayuno de campo incluido<br />
                                Todos los servicios <br />
                                Pet Friendly <br />
                            </p>
                            {isLoggedIn === 'true' && user && user.name ? <Link to="/home"> <button className='btn-1'>Reservar</button></Link> : <Link to="/acceso"> <button className='btn-1'>Reservar</button></Link>} 
                        </div>
                    </div>

                    <div className='product'>
                        <img className='img-inicio' src="./img/Dpto1.jpeg" alt="Sara House" />
                        <div className='product-txt'>
                            <h3>Departamento 2 en Complejo <br /> Santa Rosa de Calamuchita </h3>
                            <p className='parrafo-inicio'>
                                Capacidad 4 personas <br />
                                Pscina uso compartido <br />
                                Desayuno de campo incluido<br />
                                Todos los servicios <br />
                                Pet Friendly <br />
                            </p>
                            {isLoggedIn === 'true' && user && user.name ? <Link to="/home"> <button className='btn-1'>Reservar</button></Link> : <Link to="/acceso"> <button className='btn-1'>Reservar</button></Link>} 
                        </div>
                    </div>

                    <div className='product'>
                        <img className='img-inicio' src="./img/Dpt1.jpg" alt="Sara House" />
                        <div className='product-txt'>
                            <h3>Departamento 3 en Complejo <br /> Santa Rosa de Calamuchita </h3>
                            <p className='parrafo-inicio'>
                                Capacidad 4 personas <br />
                                Pscina uso compartido <br />
                                Desayuno de campo incluido<br />
                                Todos los servicios <br />
                                Pet Friendly <br />
                            </p>
                            {isLoggedIn === 'true' && user && user.name ? <Link to="/home"> <button className='btn-1'>Reservar</button></Link> : <Link to="/acceso"> <button className='btn-1'>Reservar</button></Link>} 
                        </div>
                    </div>

                    <div className='product'>
                        <img className='img-inicio' src="./img/Cab2.jpeg" alt="Sara House" />
                        <div className='product-txt'>
                            <h3>Cabaña 1 en <br /> Villa General Belgrano </h3>
                            <p className='parrafo-inicio'>
                                Capacidad 4 personas <br />
                                Pscina uso compartido <br />
                                Desayuno de campo incluido<br />
                                Todos los servicios <br />
                                Pet Friendly <br />
                            </p>
                            {isLoggedIn === 'true' && user && user.name ? <Link to="/home"> <button className='btn-1'>Reservar</button></Link> : <Link to="/acceso"> <button className='btn-1'>Reservar</button></Link>} 
                        </div>
                    </div>

                    <div className='product'>
                        <img className='img-inicio' src="./img/Cab3.jpeg" alt="Sara House" />
                        <div className='product-txt'>
                            <h3>Cabaña 2 en <br /> Villa General Belgrano </h3>
                            <p className='parrafo-inicio'>
                                Capacidad 4 personas <br />
                                Pscina uso compartido <br />
                                Desayuno de campo incluido<br />
                                Todos los servicios <br />
                                Pet Friendly <br />
                            </p>
                            {isLoggedIn === 'true' && user && user.name ? <Link to="/home"> <button className='btn-1'>Reservar</button></Link> : <Link to="/acceso"> <button className='btn-1'>Reservar</button></Link>} 
                        </div>
                    </div>

                    <div className='product'>
                        <img className='img-inicio' src="./img/Cab5.jpeg" alt="Sara House" />
                        <div className='product-txt'>
                            <h3>Cabaña 3 en <br /> Villa General Belgrano </h3>
                            <p className='parrafo-inicio'>
                                Capacidad 4 personas <br />
                                Pscina uso compartido <br />
                                Desayuno de campo incluido<br />
                                Todos los servicios <br />
                                Pet Friendly <br />
                            </p>
                            {isLoggedIn === 'true' && user && user.name ? <Link to="/home"> <button className='btn-1'>Reservar</button></Link> : <Link to="/acceso"> <button className='btn-1'>Reservar</button></Link>} 
                        </div>
                    </div>
                </div>

            </div>

            <div className='information'>
                <div className='information-content container'>
                    <div className="information-1"></div>
                    <div className="information-2">
                        <h2 className='title-inicio'>¡Siempre pensando <span> EN VOS </span> nadie lo hace mejor, <span> CONOCENOS! </span></h2>
                        <div class="img-content">
                            <img className='img-inicio' src="./img/Santa3.jpg" alt="Sara House" />
                            <img className='img-inicio' src="/img/Santa5.jpg" alt="Sara House" />
                            <img className='img-inicio' src="/img/Santa4.jpg" alt="Sara House" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="contact container">

                <div class="seguinos">

                    <h2 className='title-inicio'><i> ¡Síguenos en nuestras redes! </i></h2>
                    <div className="redes">
                        <Link to="https://www.instagram.com/sarahouse_cba/" target="_blank"><img src="/img/Instagram2.jpg" alt="Instagram" /></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100093331984811" target="_blank"><img src="/img/Facebook2.jpg" alt="facebook" /></Link>
                        <Link to="https://wa.link/zjyonq" target="_blank"><img src="/img/Whatsapp.jpg" alt="WhatsApp" /></Link>
                        <Link to="https://www.google.com/maps/place/SARA+HOUSE+LARGE/@-32.0770189,-64.587024,17z/data=!4m14!1m7!3m6!1s0x95d2bbf0fcac3837:0xbaa65826f6875b1c!2sSARA+HOUSE+LARGE!8m2!3d-32.0770235!4d-64.5844491!16s%2Fg%2F11tj90gnp1!3m5!1s0x95d2bbf0fcac3837:0xbaa65826f6875b1c!8m2!3d-32.0770235!4d-64.5844491!16s%2Fg%2F11tj90gnp1?hl=es&entry=ttu" target="_blank"><img src="/img/abd4263a-6e53-44a6-b3e4-ca0b0a364f01.png" alt="Ubicación" /></Link>
                    </div>

                </div>
            </div>

            
                <footer className="footer">

                    <div className="footer-content container">
                        <div className="link-inicio">
                            <h3>Sara House</h3>
                            <ul>
                                {isLoggedIn === 'true' && user && user.name ? <Link to="/inicio"> <a href='/inicio' className='link-inicio'>Inicio</a></Link> : <Link to="/inicio"> <a href='/inicio' className='link-inicio'>Inicio</a></Link>} 
                                {isLoggedIn === 'true' && user && user.name ? <Link to="/home"> <a href='/home' className='link-inicio'>Cabañas</a></Link> : <Link to="/acceso"> <a href='/acceso' className='link-inicio'>Cabañas</a></Link>} 
                                {isLoggedIn === 'true' && user && user.name ? <Link to="/registro"> <a href='/registro' className='link-inicio'>Registrarme</a></Link> : <Link to="/registro"> <a href='/registro' className='link-inicio'>Registrarme</a></Link>} 
                                {isLoggedIn === 'true' && user && user.name ? <Link to="/acceso"> <a href='/acceso' className='link-inicio'>Iniciar Sesión</a></Link> : <Link to="/acceso"> <a href='/acceso' className='link-inicio'>Iniciar Sesión</a></Link>} 
                                
                            </ul>
                        </div>

                        <div className="link-inicio">
                            <h3>Ayuda</h3>
                            <ul>
                                <li><Link to="/formaspago">Formas de Pagos</Link></li>
                                <Link to="https://wa.link/zjyonq" target="_blank">Contacto</Link>
                            </ul>
                        </div>

                        <div className="link-inicio">
                            <h3>Póliticas de Privacidad</h3>
                            <ul>
                                <li><Link to={"/terminos"}>Terminos y Condiciones</Link></li>
                            </ul>
                        </div>

                        {/*<div >
                            <h3 className="mi-sitio">Sitio Web</h3>
                            <ul>
                                <li><Link className="mi-sitio1" to="/">@ProfessionalDevelopment</Link></li>
                            </ul>
                        </div>*/}

                    </div>

                    <p className='copyright'>&copy; 2024. Todos los derechos reservados</p>

                </footer>
            



        </div>
    )
}

export default Inicio