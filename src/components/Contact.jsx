import React from "react";

const Contact = () => {
  return (
    <div 
      name="contact" 
      className="w-full p-4 pt-24"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="justify-center items-center flex">
          <form 
            action="https://getform.io/f/f38c2658-2348-46f6-8c24-e84ed0d2159b" 
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-t from-cyan-600 to-blue-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Contact me !
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
