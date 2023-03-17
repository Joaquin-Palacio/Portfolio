import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const LinksMobile = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/joaquin-palacio/',
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Joaquin-Palacio',
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/CV-Joaquin Palacio.pdf',
      download: true,
    },
  ];

  return (
    <div className='flex mt-4 md:hidden'>
      <ul className='flex m-4 w-full flex-wrap md:hidden'>
        {links.map(({ id, href, child, download }) => (
          <li
            key={id}
            className='flex items-center h-10 w-34 px-2 m-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 md:hidden'
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
              rel='noreferrer'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksMobile;
