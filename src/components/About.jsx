import React from "react";

const About = () => {
  return (
    <div 
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          rerum eos dicta hic exercitationem nobis praesentium delectus ullam.
          Sit nemo, quam consectetur nisi id iusto commodi quas eveniet
          blanditiis animi reiciendis. Doloremque eum sequi vel! Voluptatum
          maxime rerum hic ex, suscipit quas? Facere, repellat saepe? Est saepe
          fugit nemo officiis!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          eum dolorum vel quas ducimus numquam consequatur ea delectus amet
          iusto, laborum eveniet odio aliquam debitis libero natus a veniam
          sequi, dolores quos accusamus? Tempore cum, magni sapiente qui ut
          voluptatem adipisci rem praesentium quasi nulla reiciendis voluptate
          commodi pariatur laboriosam!
        </p>
      </div>
    </div>
  );
};


export default About;