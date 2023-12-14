import React from 'react'
import './Registrarse.css';


function Registrarse() {
  return (
    <>
    <section class="main-wrapper">
        <div class="container-form">
            <div class="formLogin-left">
                <div class="border">
                    <h1>Iniciar secion</h1>
                    <form action="">
                        <div class="form-group">
                            <label for="id">Número de documento</label>
                            <input type="id" name="email" id="id" class="form-control"  required />
                        </div>
                        <div class="form-group">
                            <label for="nombre">Nombre completo</label>
                            <input type="nombre" name="nombre" id="nombre" class="form-control"  required />
                        </div>
                        <div class="form-group">
                            <label for="email">Correo electrónico</label>
                            <input type="email" name="email" id="email" class="form-control" required />
                        </div>
                        <div class="form-group">
                            <label for="password">Contraseña</label>
                            <input type="password" name="password" id="password" class="form-control"  required />
                        </div>
                        <div class="form-group">
                            <label for="password">Confirmar contraseña</label>
                            <input type="password" name="password" id="password" class="form-control" required />
                        </div>
                        <button type="submit" class="btn btn-primary large">Registrate</button>
                        <div class="link">
                            <span>¿Ya tienes cuenta? </span>
                            <a href="Registrarse.js">Iniciar Sesión</a>
                        </div>
                    </form>
                </div>
            </div>
            <div class="formLogin-right">
                <div class="border1">
                    <h1>Bienvenido 
                        Tus ordenes 
                        Al instante 
                    </h1>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Registrarse