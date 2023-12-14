import React from 'react'
import './Contacto.css';
import { Link } from 'react-router-dom';


function Contacto() {
  return (
    <>
<div className='hero-container'>
      <video src='/videos/rrr.mp4' autoPlay loop muted />
    
    
   <div class="main-wrapper">
        <div class="container-form">
            <div class="formLogin-left">
                <div class="border">
                    <h1>Iniciar secion</h1>
                    <form action="">
                        <div class="form-group">
                            <label for="email">Correo electrónico</label>
                            <input type="email" name="email" id="email" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="password">Contraseña</label>
                            <input type="password" name="password" id="password" class="form-control" />
                        </div>
                        <button type="submit" class="btn1 btn-primary1 large">Iniciar Sesión</button>
                        <div class="password">
                            <a href="">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div class="link">
                            <span>¿No tienes una cuenta? </span>
                           <li> 
                           <Link to='/Registrarse'>Registrarse</Link>
                           </li>
                        </div>
                    </form>
                </div>
            </div>
            
            <div class="formLogin-right">
                <div class="border1">
                    <h1>Bienvenido. Aqui tus ordenes al instante 
                    </h1>
                </div>
            </div>
            
        </div>
    </div>
    </div>
    </>
  )
};

export default Contacto