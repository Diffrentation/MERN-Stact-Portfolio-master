import Marquee from "react-fast-marquee";
import HeaderText from "../HeaderText/HeaderText";

const Skills = () => {
  return (
    <div id="skills" className="py-10"  data-aos="fade-up"  data-aos-duration="1000">
      <HeaderText text1="Learn about my" text2="Skills" />
      <div>
        <Marquee gradient={true} speed={100} pauseOnHover={true} >
          <img src="assets/images/html5.png" alt="image" className="mx-6 md:mx-10 w-10 sm:w-20 md:w-28"/>
          <img src="assets/images/css.png" alt="image" className="mx-6 md:mx-10 w-10 sm:w-20 md:w-28"/>
          <img src="assets/images/js.png" alt="image" className="mx-6 md:mx-10 w-10 sm:w-20 md:w-28"/>
          <img src="assets/images/tailwind.png" alt="image" className="mx-6 md:mx-10 w-20 md:w-36"/>
          <img src="assets/images/bootstrap.png" alt="image" className="mx-6 md:mx-10 w-10 sm:w-20 md:w-28"/>
          <img src="assets/images/fire.png" alt="image" className="mx-6 md:mx-10 w-16 sm:w-20 md:w-40"/>
          <img src="assets/images/github.png" alt="image" className="mx-6 md:mx-10 w-10 sm:w-20 md:w-28"/>
          <img src="assets/images/react-router-color.png" alt="image" className="mx-6 md:mx-10 w-20 md:w-36"/>
          <img src="assets/images/nextjs.png" alt="nextjs" className="mx-6 md:mx-10 w-20 md:w-36"/>
          <img src="assets/images/material-ui.png" alt="nextjs" className="mx-6 md:mx-10 w-20 md:w-36"/>
        </Marquee>
      </div>
      <div className="my-20 grid grid-cols-5 justify-center items-center text-center">
          <p className="md:text-lg text-xs font-semibold row-span-2 md:row-span-1">Core Skills |</p>
          <img src="assets/images/mongo.png" alt="image" className="mx-auto w-10 md:w-24"/>
          <img src="assets/images/express.png" alt="image" className="mx-auto w-10 md:w-24"/>
          <img src="assets/images/react.png" alt="image" className="mx-auto w-10 md:w-24 "/>
          <img src="assets/images/node.png" alt="image" className="mx-auto w-10 md:w-24"/>
         <p className="hidden md:block"></p>
          <p className="mx-auto my-6 text-primary">M</p>
          <p className="mx-auto my-6 text-primary">E</p>
          <p className="mx-auto my-6 text-primary">R</p>
          <p className="mx-auto my-6 text-primary">N</p>
 
      </div>
    </div>
  );
};

export default Skills;
