import React from 'react'
import './Cuadros.css';


function Cuadros() {
  return (
    <>
    <div className='destino'>
    <h1> CONOCE LOS DESTINOS</h1>
    <p> Si está pensando en viajar a Suiza le recomendamos que conozca nuestra amplia oferta de propuestas, 
        diseñadas para todo tipo de viajeros: </p>
    </div>
    <div className='Contenedor1'>
    <div class="container">
        <div class="grupo">
            <div className='row'> 
            <img className="img"/>
            </div>
            <section>
                <article>
                    <h2>Destinos de vacaciones y ciudades</h2>
                    <h4>Ciudades:</h4>
                    <p>Gracias a su manejable tamaño, las ciudades suizas ofrecen tanto calidad de vida como un aire urbano. 
                        En pocos kilómetros cuadrados, encontrará históricos cascos urbanos bien conservados, 
                        obras maestras de la arquitectura moderna e innumerables zonas verdes.
                    </p>
                    <p>Centros históricos, Parques urbanos, Arquitectura y mucho mas.</p>
                </article>
                <article>
                    <h4>Destinos de verano:</h4>
                    <p>Tanto si busca ciudades con encanto, parques naturales, impresionantes paisajes de montaña o lagos centelleantes. 
                        Ya sean mediterráneos o alpinos: Suiza ofrece destinos únicos que harán que sus vacaciones de verano sean inolvidables. 
                        Déjese inspirar por la diversidad de los destinos de vacaciones suizos.
                        No tiene por qué elegir entre el ambiente sureño y la brisa fresca que le espera en las montañas: Con nosotros puede tener ambas cosas. 
                        Descubra nuestros destinos para los que quieren disfrutar de la belleza de Suiza en verano.
                    </p>
                    <p>Vacaciones en el agua, Especial urbanitas, Parques suizos, Patrimonios de la Humanidad de un vistazo, 
                        Destinos para familias y mucho mas.</p>
                </article>
               
               
                <div class="button">
                    <button type="submit" class=" btn-primary">Mostrar todos</button>
                </div>
            </section> 
        </div>
    </div>
    <div class="container">
        <div class="grupo">
            <section>
            <article>
            <h2>Naturaleza</h2>
                    <h4>Montañas y glaciares:</h4>
                    <p>Aparte de los relojes, los quesos y el chocolate, no hay nada que se asocie más con nuestro país que su singular mundo montañoso.
                    No importa si es verano o invierno, si quiere caminar o esquiar: Suiza es un paraíso para escaladores y aquellos que quieren llegar a serlo.
                    </p>
                </article>
                <article>
                    <p>Algunas de ellas son realmente familiares para todos los niños del país, por ejemplo, el Cervino o el Eiger, el Mönch y la Jungfrau. 
                        Pero esta es solo una modesta selección
                        de un número casi inagotable de cordones montañosos y rocas que puede recorrer con nosotros. O, por lo menos, 
                         admirarlas desde la distancia.
                    </p>
                    <p>Adéntrese en el hielo eterno y explore los numerosos glaciares de nuestro país. La mayoría se encuentran en los Alpes valesanos y grisones, así como en el Oberland bernés. 
                        El de mayor tamaño es el glaciar Aletsch, que no solo es parte del patrimonio de la Unesco, sino que también es de fácil acceso.</p>
                </article>
               
                <div class="button1">
                    <button type="submit" class=" btn-primary">Mostrar todos</button>
                </div>
            </section>
            <div className='row1'> 
            <img className="img1"/>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="grupo">
        <div className='row2'> 
            <img className="img2"/>
            </div>
            <section>
                <article>
                <h2>Atracciones</h2>
                <h4>Atracciones más destacadas</h4>
                    <p>Símbolos hasta donde alcanza la vista: Suiza destaca con una increíble variedad de lugares de interés. Descubra glaciares, paisajes montañosos, ríos y construcciones imponentes. 
                        O explore museos e instituciones que representan especialmente la identidad de nuestro país.
                    </p>
                </article>
                <article>
                    <p>Los conocedores ya hace tiempo que descubieron que la forma más cómoda de conocer Suiza es en tren, autobús o barco. De esta forma se puede acceder 
                        a los más remotos rincones del país sin riesgo de atascos:
                    </p>
                    <p>Viaje en tren, Transportes de montaña, Viaje en barco y mucho mas.</p>
                </article>
                <div class="button2">
                    <button type="submit" class=" btn-primary">Mostrar todos</button>
                </div>
            </section> 
        </div>
       
        </div>
        
    </div>
    </>
  )
}

export default Cuadros