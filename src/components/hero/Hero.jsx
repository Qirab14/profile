import { React, useEffect, useRef }from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    typedRef.current = new Typed(".auto-type", {
      strings: [
        "Web Developer",
        "MERN Stack Developer"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-100 p-10" id="Home">
      <div className="flex flex-col container mx-auto md:flex-row md:space-x-10 items-center">
        <div className="w-3/5 w-full md:w-full sm:w-full text-center md:text-left">
          <h1 className="text-[30px] font-bold mb-5 font-montserrat ">
            I am <b></b> <span className="auto-type text-[38px] text-[#800080] "></span>
          </h1>
          <p className="text-gray-700 leading-loose font-montserrat text-[17px] font-weight-500">
            As a Passionate MERN stack developer, I specialize in crafting
            scalable, efficient, and visually stunning web applications that
            drive business results. With expertise in MongoDB, Express, React,
            and Node.js, I deliver tailored solutions that meet the unique needs
            of my clients. From e-commerce platforms to social media apps, I
            bring ideas to life with my proficiency in front-end and back-end
            development, ensuring seamless user experiences and robust
            performance. Whether you're looking to build a new application from
            scratch or revamp an existing one, I'm dedicated to delivering
            top-notch MERN stack development services that exceed your
            expectations
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
            Let's discuss your project
          </button>
        </div>
        <div className="w-2/5 w-full md:w-full sm:w-full flex justify-center md:justify-start mt-10 md:mt-0 sm:mt-10">
          <img
            className="w-48 h-48 rounded-full object-cover mx-auto"
            src="https://placeholder.com/48x48" // Replace with your image
            alt="About Me"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;