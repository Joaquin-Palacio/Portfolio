import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import postgreSQL from '../assets/postgreSQL.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import sequelize from '../assets/sequelize.png';
import express from '../assets/express.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-600',
    },
    {
      id: 3,
      src: react,
      title: 'React',
      style: 'shadow-sky-500',
    },
    {
      id: 4,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 5,
      src: redux,
      title: 'Redux',
      style: 'shadow-violet-500',
    },

    {
      id: 6,
      src: express,
      title: 'Express',
      style: 'shadow-gray-500',
    },
    {
      id: 7,
      src: sequelize,
      title: 'Sequelize',
      style: 'shadow-sky-500',
    },
    {
      id: 8,
      src: node,
      title: 'Node',
      style: 'shadow-green-400',
    },
    {
      id: 9,
      src: postgreSQL,
      title: 'PostgreSQL',
      style: 'shadow-blue-300',
    },
  ];

  return (
    <div name='tecnologías' className='pt-24'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full '>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Tecnologías
          </p>
          <p className='py-6'>
            Estas son las tecnologías con las que he trabajado.
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-xl ${style}`}
            >
              <img src={src} alt='' className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
