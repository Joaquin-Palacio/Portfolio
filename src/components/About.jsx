import React from "react";

const About = () => {
  return (
    <div name="sobre mi" className="w-full pt-24">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre mí
          </p>
        </div>
        <p className="text-xl mt-20">
            Hola, soy Joaquin, tengo 20 años. Me considero responsable, comunicativo,
            también disfruto del trabajo en equipo. Soy graduado del bootcamp de Henry.
            Mi objetivo es conseguir mi primera experiencia laboral como Full Stack Developer
            o Frontend Developer. Actualmente me encuentro realizando algunos proyectos, cursos, etc
            para seguir puliendo y ampliando mis conocimientos.  
        </p>
        <br />
        <p className="text-xl">
            Por otra parte, juego y me apasiona el básquet desde chico, en mis tiempos libres veo
            alguna película o serie 🎬, también me gustan muchos los videojuegos 🎮. Veo mucho fútbol ⚽ y
            no me pierdo ni un partido de River Plate ⚪🔴⚪. Todo el día, todos los dias estoy escuchando
            música 🎧.
        </p>
      </div>
    </div>
  );
};

export default About;
