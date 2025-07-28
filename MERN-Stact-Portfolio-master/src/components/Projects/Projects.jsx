import ProjectCard from "../Cards/ProjectCard";
import HeaderText from "../HeaderText/HeaderText";

const Projects = () => {
    return (
        <div id="projects" data-aos="fade-up"  data-aos-duration="500">
           <HeaderText text1={"View my"} text2={"Projects"}/>
           <div>
            <h3 className="text-lg font-bold text-accent">PORTFOLIO</h3>
            <h2 className="font-bold text-2xl my-2">Each project is unique piece of developement 👨🏻‍💻</h2>
            <p className="text-xs text-slate-400">/Also projects are user login based </p>
           </div>
           <div>
            <ProjectCard/>
           </div>
        </div>
    );
};

export default Projects;