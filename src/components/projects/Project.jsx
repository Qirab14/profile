import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import register from "../../Images/1.png";
import Products from "../../Images/Products Management.png"
import CarSearch from "../../Images/carsearch.png"
import Bucket from "../../Images/BucketList.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../projects/Project.css";

const ProjectCard = ({ image, title, description, link }) => (
  <div className="project-card bg-[rgb(14,49,97)] shadow-md rounded-lg p-4 flex flex-col mx-2 items-center">
    <img className="w-full h-58 object-cover mb-4" src={image} alt={title} />
    <h3 className="text-xl text-center font-bold mb-2">{title}</h3>
    <p className="text-white text-center">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Visit Website
      </button>
    </a>
  </div>
);

const Project = () => {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };

  const projects = [
    {
      image: register,
      title: "SignIn/SignUp",
      description: "Elegant register and login form designed to provide hassle-free experience for users",
    },
    {
      image: Products, 
      title: "Products Management",
      description: "Manage and organize your products efficiently with intuitive interface",
    },
    {
      image: Bucket, // Replace with your image
      title: "To-Do List",
      description: "Boost your productivity, stay organized and focused with our easy-to-use To-Do List app.",
    },
    {
      image: CarSearch, // Replace with your image
      title: "Car Search",
      description: "A dynamic application that connects potential buyers with the car of their dreams.",
      link: "https://car-search-psi.vercel.app/",
    },
    // Add more projects here
  ];

  return (
    <motion.div 
    initial={{ opacity: 0 }} // initial opacity is 0 (fully transparent)
    whileInView={{ opacity: 1 }} // animate to opacity 1 (fully visible)
    transition={{ delay: 0.5, duration: 0.5 }} // delay for 1 second, then animate for 0.5 seconds
    className="mainDiv bg-black text-white pt-[60px] pb-[50px]" id="Project">
      <h1 className="text-[35px] font-bold text-center mb-[60px] font-montserrat">
        Projects
      </h1>
      <div className="widthDiv container mx-auto">
        <Slider {...settings}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Project;
