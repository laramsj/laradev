import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Card() {
  return (
    <div className='cards'>
      <h1>Check all flowers available for 2021</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/plectranthus.jpg'
              text='Large double. Good grower, heavy bloomer. Early to mid-season, acid loving plants. Plant in moist well drained soil with pH of 4.0-5.5.'
              label='Plectranthus'
              path='/flowers'
            />
            <CardItem
              src='images/hibiscus.jpg'
              text='Blooms in summer, 20-35 inches high. Fertilize regularly for best results. Full sun, drought tolerant.'
              label='Hibiscus'
              path='/flowers'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/camelliajaponica.jpg'
              text='Slow growing, upright to spreading shrub. Oval, glossy, leaves and profuse winter to spring blooming flowers."'
              label='Camellia Japonica'
              path='/flowers'
            />
            <CardItem
              src='images/bougainvillea.jpg'
              text='Thorny woody vine scrambles over other plants with their hooked thorns. Pest free.'
              label='Bougainvillea Spectabilis'
              path='/flowers'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;