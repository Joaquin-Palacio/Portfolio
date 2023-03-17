import React from 'react';
import HenryGames from '../assets/HenryGames.png';
import LolixGames from '../assets/LolixGames.png';
import WeatherApp from '../assets/WeatherApp.png';
import Calculadora from '../assets/Calculadora.png';
import CounterClicks from '../assets/CounterClicks.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: HenryGames,
      hrefDemo: 'https://henry-games-pg.vercel.app/',
      hrefGit: 'https://github.com/nicolasgonzalez98/HenryGames-PG',
    },
    {
      id: 2,
      src: LolixGames,
      hrefDemo:
        'https://st2.depositphotos.com/1051996/10200/v/600/depositphotos_102002680-stock-illustration-404-page-not-found-error.jpg',
      hrefGit: 'https://github.com/Joaquin-Palacio/PI-Videogames',
    },
    {
      id: 3,
      src: WeatherApp,
      hrefDemo: 'https://weatherapp-joaquin.netlify.app/',
      hrefGit: 'https://github.com/Joaquin-Palacio/Weather-App',
    },
    {
      id: 4,
      src: Calculadora,
      hrefDemo: 'https://calculator-app-4acu.vercel.app/',
      hrefGit: 'https://github.com/Joaquin-Palacio/Calculator-App',
    },
    {
      id: 5,
      src: CounterClicks,
      hrefDemo: 'https://counter-clicks.netlify.app/',
      hrefGit: 'https://github.com/Joaquin-Palacio/Counter-Clicks',
    },
  ];

  return (
    <div name='proyectos' className='w-full mt-32 pt-24'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Proyectos
          </p>
          <p className='py-6'>Proyectos en los que trabajé.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, hrefDemo, hrefGit }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='' className='rounded-lg' />
              <div className='flex items-center justify-center'>
                <a
                  href={hrefDemo}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 hover:bg-gradient-to-r from-cyan-600 to-blue-700 rounded-md '
                >
                  Demo
                </a>
                <a
                  href={hrefGit}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 hover:bg-gradient-to-r from-cyan-600 to-blue-700 rounded-md '
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
