import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { Link } from "react-router-dom";

import ShortLink from "./ProjectImg/ShortLink.png";
import NewLms from "./ProjectImg/crystal.png";
import OldLms from "./ProjectImg/RealState.png";
import PasswordGenerator from "./ProjectImg/passwordGenerator.png";
import ToDoList from "./ProjectImg/TodoList.png";
import ECommerce from "./ProjectImg/E-commerce.png";

import "./ProjectCard.css";

const ProjectCard = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      img: ECommerce,
      live: "https://fluxfit-five.vercel.app/",
    },
    {
      title: "Real State Platform",
      img: OldLms,
      live: "https://real-state-nu-coral.vercel.app/",
    },
    {
      title: "Learning Management System",
      img: NewLms,
      live: "https://crystal-vision-academy-0udv.onrender.com/",
    },
    {
      title: "Password Generator",
      img: PasswordGenerator,
      live: "https://genpass100.netlify.app/",
    },
    {
      title: "To-Do List Application",
      img: ToDoList,
      live: "https://todo-list-five-azure-84.vercel.app/",
    },
    {
      title: "ShortLink: URL Shortener",
      img: ShortLink,
      live: "#",
    },
  ];

  return (
    <div className="my-16 space-y-6 md:space-y-12">
      {projects.map((project, index) => (
        <div
          key={index}
          className="grid grid-cols-1 gap-6 text-center justify-center shadow-md p-6 rounded-xl transition duration-150 bg-cyan-50 items-center border"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="content">
            <h2 className="text-xl font-bold gap-4 items-center text-center">
              {project.title}
            </h2>
            <div className="screen">
              <img
                src={project.img}
                alt={project.title}
                className="cursor-pointer"
              />
            </div>
            <div className="font-semibold my-8 space-x-6">
              <Link
                to="mailto:bbhupender100@gmail.com"
                target="_blank"
                className="transition duration-150 hover:text-primary"
              >
                Request for code <FaGithub className="inline ml-4" />
              </Link>
              <Link
                to={project.live}
                target="_blank"
                className="transition duration-150 hover:text-primary"
              >
                Live Demo <MdWeb className="inline ml-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
