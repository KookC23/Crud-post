import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  // El docigo a continuacion de js configura que la barra de menu sea adaptable al tamaño de la ventana, en este caso gunvionable para un dispositibo movil.

  const [click, setClick] = useState(false);  // Esto controla si el menu desplegable esta activo o no
  const [button, setButton] = useState(true); // Este controla si de debe mostrar o no un boton de registro


  const handleClick = () => setClick(!click); // Al hacer click en el icono de menu para movil este deplegue la barra de menu para dispositivo movil.
  const closeMobileMenu = () => setClick(false); //  Esto establece el estado como falso, cerrando asi el menú desplegable en dispositivos moviles.

  // Esto verifica el ancho de la ventana y decide si muestra el botón de registro o no, teniendo en cuenta el ancho maximo de la pagina que seria 960px
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

// Esto se usa para ejecutar una vez al cargar el componente, asegurandose de que el botnon de login se muestre segun el ancho de la pagina en la barra de menu movil.
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton); //Esto garantiza que el botón de registro se muestre o se oculte según el tamaño de la ventana

  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>D-SarayK23</Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/services'className='nav-links' onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Destinos' className='nav-links' onClick={closeMobileMenu}>Destinos</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Vacaciones' className='nav-links' onClick={closeMobileMenu}>Vacaciones</Link>
            </li>
            <li className='nav-item'>
              <Link to='/Descubrir' className='nav-links' onClick={closeMobileMenu}>Descubrir</Link>
            </li>
            <li>
              <Link to='/sign-up' className='nav-links-mobile'onClick={closeMobileMenu}>Sign Up</Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;