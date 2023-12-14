import React from 'react'
import './Tarjetas.css';

function Tarjetas() {
  return (
    <>
    <div className='hero'>
      <video src='/videos/rrr.mp4' autoPlay loop muted />
      <h1> DESCUBRE LOS PLANES QUE TENEMOS PARA TI</h1>
      </div>
     <div class="cards-grid">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front" >

                    </div>
                    <div class="flip-card-back">
                        <h1> Arte  y Cultura</h1>
                        <p>Por su enorme variedad de exposiciones y actos de primera, Suiza es el paraíso para los amantes de la cultura y el arte contemporáneos.</p>
                       
                    </div>
                </div>
            </div>
            <div class="flip-card1">
                <div class="flip-card-inner1">
                    <div class="flip-card-front1" >

                    </div>
                    <div class="flip-card-back1">
                        <h1> Visitas turísticas</h1>
                        <p>¿Desea saber de forma breve y concisa lo más importante sobre la historia de un lugar y sus habitantes? Entonces, ¡nada mejor que una visita guiada por nuestros centros urbanos! Con un poco de suerte, nuestros guías incluso le revelarán alguna que otra sugerencia secreta.</p>
                       
                    </div>
                </div>
            </div>
            <div class="flip-card2">
                <div class="flip-card-inner2">
                    <div class="flip-card-front2" >

                    </div>
                    <div class="flip-card-back2">
                        <h1> Compras</h1>
                        <p>En nuestros barrios comerciales no solo encontrará las grandes marcas y pequeñas boutiques de calidad, sino además mercados con productos frescos, artesanía o moda de segunda mano. En caso de que la variedad no sea suficiente, le recomendamos que visite también nuestros centros comerciales.</p>
                       
                    </div>
                </div>
            </div>

        </div>

    </>
  )
}

export default Tarjetas