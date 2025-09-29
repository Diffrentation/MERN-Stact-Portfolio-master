import { BsCarFront, BsFillBuildingsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
const ProjectCard = () => {
  return (
    <div className="my-16 space-y-6 md:space-y-12">
      <div
        className="grid grid-cols-1 md:grid-cols-1 gap-6 text-center justify-center shadow-md p-6 rounded-xl  transition duration-150 bg-cyan-50 items-center border"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="content">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            ShortLink: URL Shortner{" "}
          </h2>
          <div className="screen">
            <img
              src="src\components\Cards\ProjectImg\ShortLink.png"
              className="cursor-pointer"
            />
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            <Link
              to="mailto:bbhupender100@gmail.com"
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Request for code <FaGithub className="inline ml-4" />
            </Link>
            <Link
              to={"https://learnsphere-1-zs8q.onrender.com/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline ml-4" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-1 gap-6 text-center justify-center shadow-md p-6 rounded-xl  transition duration-150 bg-cyan-50 items-center border"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="content">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            Learning Management System{" "}
          </h2>
          <div className="screen">
            <img
              src="src\components\Cards\ProjectImg\NewLms.png"
              className="cursor-pointer"
            />
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            <Link
              to="mailto:bbhupender100@gmail.com"
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Request for code <FaGithub className="inline ml-4" />
            </Link>
            <Link
              to={"https://learnsphere-1-zs8q.onrender.com/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline ml-4" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-1 gap-6 text-center justify-center shadow-md p-6 rounded-xl  transition duration-150 bg-cyan-50 items-center border"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="content">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            Learning Management System 2{" "}
          </h2>
          <div className="screen">
            <img
              src="src\components\Cards\ProjectImg\OldLms.png"
              className="cursor-pointer"
            />
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            <Link
              to="mailto:bbhupender100@gmail.com"
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Request for code <FaGithub className="inline ml-4" />
            </Link>
            <Link
              to={"https://learnsphere-1-zs8q.onrender.com/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline ml-4" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-1 gap-6 text-center justify-center shadow-md p-6 rounded-xl  transition duration-150 bg-cyan-50 items-center border"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="content">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            PasswordGenerator{" "}
          </h2>
          <div className="screen">
            <img
              src="src\components\Cards\ProjectImg\passwordGenerator.png"
              className="cursor-pointer"
            />
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            <Link
              to="mailto:bbhupender100@gmail.com"
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Request for code <FaGithub className="inline ml-4" />
            </Link>
            <Link
              to={"https://genpass100.netlify.app/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline ml-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
