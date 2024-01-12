import React from 'react';
import './Navbar.css';

function Navbar() {

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('currentUser')); // Obtener el usuario del localStorage desde Loginscreen.

    const isAdmin = user && user.isAdmin;

    function logout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        window.location.href = '/inicio';
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {isLoggedIn === 'true' && user && user.name ? <a className="navbar-brand" href="/home">Sara House</a> : <a className="navbar-brand" href="/">Sara House</a>} 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {isLoggedIn === 'true' && user && user.name ? (
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-regular fa-user"></i> {user.name}
                                    </button>
                                    <ul className="dropdown-menu">

                                        {isAdmin && <li><a className="dropdown-item" href="/admin">Administrador</a></li>}
                                        <li><a className="dropdown-item" href="/inicio">Inicio</a></li>
                                        <li><a className="dropdown-item" href="/profile">Mi Perfil</a></li>
                                        <li><a className="dropdown-item" href="/home">Cabañas</a></li>
                                        <li><a className="dropdown-item" href="/" onClick={logout} >Cerrar Sesión</a></li>
                                    </ul>
                                </div>


                            ) : (
                                // Si no hay un usuario, mostrar enlaces de navegación
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/inicio">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/registro">Registrarme</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="acceso">Acceso</a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

