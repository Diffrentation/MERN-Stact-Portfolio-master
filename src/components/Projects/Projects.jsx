import ProjectCard from "../Cards/ProjectCard";
import HeaderText from "../HeaderText/HeaderText";

const Projects = () => {
    return (
        <div id="projects" data-aos="fade-up"  data-aos-duration="500">
           <HeaderText text1={"View my"} text2={"Projects"}/>
           <div>
            <h3 className="text-lg font-bold text-accent">EXPERIENCE</h3>
            <h2 className="font-bold text-2xl my-2">Four platforms. Four ways to make work simpler.</h2>
            <p className="text-sm text-slate-500">A closer look at the products, workflows, and quality work behind my recent experience.</p>
           </div>
           <div>
            <ProjectCard/>
           </div>
        </div>
    );
};

export default Projects;
