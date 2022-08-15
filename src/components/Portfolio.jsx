import React from "react";
import HenryGames from "../assets/HenryGames.png";
/* import LolixGames from "../assets/LolixGames.png"; */

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: HenryGames,
    },
    /*  {
      id: 2,
      src:LolixGames
    } */
  ];

/*   const handleOnClick = () => ({

  }); */

  return (
    <div name="portfolio" className="w-full mt-32 pt-24">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-lg" />
              <div className="flex items-center justify-center">
                <a href="https://henry-games-pg.vercel.app/" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 hover:bg-gradient-to-r from-cyan-600 to-blue-700 rounded-md ">
                  Demo
                </a>
                <a href="https://github.com/nicolasgonzalez98/HenryGames-PG" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 hover:bg-gradient-to-r from-cyan-600 to-blue-700 rounded-md ">
                  Code
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
