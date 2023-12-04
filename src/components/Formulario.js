import React from 'react'
import './Formulario.css';


function Formulario() {
  return (
    <>
    <form class="formulario">
    
  
     <div class="contenedor">
       
    <h1>Registrate</h1>
     
 
         <label for="nombre">Nombre</label>
         <input type="text" placeholder="Ingresa el Nombre"/>

         
         <label for="apellido">Apellido</label>
         <input type="text" placeholder="Ingresa el Apellido"/>

         
         <label for="email">Email</label>
         <input type="text" placeholder="Ingresa el Email"/>
       
         
       
         <input type="submit" value="Registrate" class="button" />
         <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
         <p>¿Ya tienes una cuenta?<a class="link" href="loginvista.html">Iniciar Sesion</a></p>
     </div>
    </form>
    </>
  )
}

export default Formulario