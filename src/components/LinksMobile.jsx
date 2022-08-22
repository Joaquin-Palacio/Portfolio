import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const LinksMobile = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/joaquin-palacio/",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Joaquin-Palacio",
    },
    {
      id: 3,
      child: (
        <>
          Enviar Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:joaquinpalacio2311@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Descargar CV <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/CV-Joaquin Palacio.pdf",
      download: true,
    },
  ];

  return (
    <div className="flex mt-12 mx-auto md:hidden ">
      <ul>
        {links.map(({ id, href, child, download }) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 px-4 mx-10 my-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 md:hidden"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
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
