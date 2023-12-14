import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div>
        <div>
          <ul className='cards__item'>
            <CardItem
              src='images/Playa.jpg'
              text='Aproveche las ventajas de viajar por Suiza con nuestros circuitos diseñados para todo tipo de viajeros -en pareja, en grupo o con niños- y disfrute de unas vacaciones sin sopresas. '
              label='Adventurate'
              path='/services'
            />
            <CardItem
              src='images/india.jpg'
              text='Disfrute de la experiencia de viajar en los trenes de Suiza, ya sea en simples trayectos con nuestros paquetes de tren con alojamiento.'
              label='Aventurate'
              path='/services'
            />
            <CardItem
              src='images/india.jpg'
              text='Si está pensando hacer un viaje a los Alpes suizos queremos recomendarle alguna de las propuestas que hemos incluido en nuestro catálogo.'
              label='Aventurate'
              path='/services'
            />
          </ul>
          <ul className='cards__item'>
            <CardItem
              src='images/hh.jpg'
              text='Bañarse en uno de los muchos lagos o ríos. Subir una montaña y practicar senderismo. Montar en bici por paisajes únicos. O ir de excursión, que es aún más bonito cuando las temperaturas son cálidas. En verano, Suiza se convierte en un paraíso para las experiencias al aire libre.'
              label='Adventurate'
              path='/services'
            />
            <CardItem
              src='images/oo.jpg'
              text='Los bosques resplandecen con los colores más vivos, el follaje cruje a cada paso y las especialidades de temporada despiertan la ilusión por una gastronomía deliciosa. El otoño seduce los sentidos como ninguna otra estación. Con su cálida luz, muestra los tesoros de la naturaleza con una intensidad especial. Déjese hechizar por la magia del otoño suizo.'
              label='Explora'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Encuéntrese con los animales salvajes nacionales, deguste las exquisiteces típicas y aprenda todo sobre la artesanía y los testimonios arquitectónicos de distintas épocas de nuestro país. Y si no le parece suficiente aventura, tendrá que explorar nuestras sendas temáticas y educativas.'
              label='Explora'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;