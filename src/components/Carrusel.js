import React from 'react'
import './Carrucel.css';

/* Creacion de carrucel: el id es el identificador de la foto, 
   la etiqueta <i> contiene el el icono de para pasar las fotos 
   y la clase itemCarrouseliconos contiene la posicion de los iconos */

function Carrusel() {
  return (
    <>
        <div class="contenedorCarrousel">
            <div class="itemCarrousel" id="itemCarrousel-1"> 
                <div class="itemCarrouseliconos">
                    <a href="#itemCarrousel-3">
                        <i class="fas fa-chevron-left"></i> 
                    </a>
                    <a href="#itemCarrousel-2">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
            <div class="itemCarrousel" id="itemCarrousel-2">
                <div class="itemCarrouseliconos">
                    <a href="#itemCarrousel-1">
                        <i class="fas fa-chevron-left"></i>
                    </a>
                    <a href="#itemCarrousel-3">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
            <div class="itemCarrousel" id="itemCarrousel-3">
                <div class="itemCarrouseliconos">
                    <a href="#itemCarrousel-2">
                        <i class="fas fa-chevron-left"></i>
                    </a>
                    <a href="#itemCarrousel-1">
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
   
    </>
  )
}

export default Carrusel