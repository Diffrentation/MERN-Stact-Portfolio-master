/* eslint-disable react/no-unescaped-entities */
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FcBriefcase } from "react-icons/fc";
import HeaderText from "../HeaderText/HeaderText";
import { Element, Link } from "react-scroll";

const About = () => {
  return (
    <div name="about" id="about" data-aos="fade-down" data-aos-duration="600">
       <Element name="aboutEle"></Element>

      <HeaderText text1="Get to know" text2="More About Me"  style={{color: '#16423C'}}/>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
    
        <div
          className=" text-lg md:text-xl md:w-3/4"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <p
            className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
          Welcome to my portfolio,  My name is{" "}
            <span className="text-primary font-semibold"  style={{color: '#227B94'}}>
              Bhupendra Singh, {' '}
            </span>
            a passionate  {" "}
            <span className=" font-semibold" style={{color: '#227B94'}}> MERN Stack Developer </span>  and 
            <span className=" font-semibold"  style={{color: '#227B94'}}> ReactJs specialist. </span>  I’ve completed my{" "}
            <span className=" font-semibold"  style={{color: '#227B94'}}> </span> in 
            <span className=" font-semibold"  style={{color: '#227B94'}}> Bachelor's in Computer Applications (B.C.A)</span>  from
            from CCS University, Meerut. Originally from{" "}
            <span className="font-semibold"  style={{color: '#227B94'}}> Uttar Pradesh,</span>
          </p>
          <p
            className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
           having more than <span className="font-semibold"  style={{color: '#227B94'}}> 2 years </span> in Both, Web Development,  Proficient in a range of technologies and Frameworks including <span className="font-semibold"  style={{color: '#227B94'}}> Redux, Axios, Mongoose</span>, etc.
           I bring a comprehensive skill set and a deep understanding of both Frontend and
            Backend technologies. From building dynamic, user-centric web applications to crafting 
            seamless and scalable solutions, I’m dedicated to turning your vision into reality. 
            Explore my work and see how my expertise can elevate your next project!
          </p>

            {/* <h2 className="text-2xl font-bold py-3 textpri">Work Experience</h2>
            <HeaderText text1="Practical" text2="Work Experience"  style={{color: '#16423C'}}/>

          <div className="p-8 mt-10 border-4 border- rounded-lg w-[%80] relative group hover:drop-shadow-md hover:shadow-primary transition duration-300 ">
          <FcBriefcase className="absolute text-5xl right-3 top-2 rotate-6 opacity-70 transition duration-300 group-hover:rotate-[20deg] group-hover:scale-125 "/>
            <div className="">
              <p>
                <span className="font-semibold" style={{color: '#227B94'}}>MERN STACK TRAINER</span> at{" "}
                <p className="font-semibold" >
                  Aptech Learning, Latifabad
                </p>
              </p>
              <p className="text-base"></p>
              <p className="text-base text-gray-700">Dec 2023 - Present</p>
              <p className="text-base text-gray-700">
                Hyderabad, Sindh, Pakistan
              </p>
            </div>
          </div>

          <div className="p-8 mt-10 border-4 border- rounded-lg w-[%80] relative group hover:drop-shadow-md hover:shadow-primary transition duration-300 ">
          <FcBriefcase className="absolute text-5xl right-3 top-2 rotate-6 opacity-70 transition duration-300 group-hover:rotate-[20deg] group-hover:scale-125 "/>
            <div className="">
              <p>
                <span className="font-semibold" style={{color: '#227B94'}}>Frontend Development (intern)</span> at{" "}
                <p className="font-semibold" >
                 XCL Technologies, Defence
                </p>
              </p>
              <p className="text-base"></p>
              <p className="text-base text-gray-700">Sept 2023 - Nov 2023</p>
              <p className="text-base text-gray-700">
                Hyderabad, Sindh, Pakistan
              </p>
            </div>
          </div>
          <div className="p-8 mt-10 border-4 border- rounded-lg w-[%80] relative group hover:drop-shadow-md hover:shadow-primary transition duration-300 ">
          <FcBriefcase className="absolute text-5xl right-3 top-2 rotate-6 opacity-70 transition duration-300 group-hover:rotate-[20deg] group-hover:scale-125 "/>
            <div className="">
              <p>
                <span className="font-semibold" style={{color: '#227B94'}}>Web Development (intern)</span> at{" "}
                <p className="font-semibold" >
                Codealpha Infotech
                </p>
              </p>
              <p className="text-base"></p>
              <p className="text-base text-gray-700">Aug 2023 - Sept  2023</p>
              <p className="text-base text-gray-700">
                Hyderabad, Sindh, Pakistan
              </p>
            </div>
          </div>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
          >
            <button className="btn btn-secondary hover:btn-transition duration-300 ease-in-out hover:scale-105 mt-10 m-4 border-0" style={{backgroundColor: '#227B94', color: 'white'}}>
              <MdOutlineConnectWithoutContact className="text-xl"   /> Let's Talk
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default About;
