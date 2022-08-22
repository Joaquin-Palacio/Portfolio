import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="inicio" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            Soy Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            Bienvenidos a mi portfolio!! <br /> Me llamo Joaquín. Me gusta mucho el mundo IT y estoy en busca de mi primera experiencia como Full Stack Developer o Frontend Developer.
          </p>
          <div>
            <Link
              to="proyectos"
              smooth
              duration={500}
              className="group text-white w-fit hover:scale-105 hover:duration-200 px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-700 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="Coder GIF"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
