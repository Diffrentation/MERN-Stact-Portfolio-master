import { GoHomeFill } from "react-icons/go";
import { MdContactMail } from "react-icons/md";
import { Link } from "react-scroll";
import { RiUserSettingsFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { CgCodeSlash } from "react-icons/cg";
import "./Nav.css";
const Nav = () => {
  // const handleSetActive = (to) => {
  //   console.log(to);
  // };
  return (
    <div className="flex text-slate-600 fixed items-center justify-center w-[90%] md:w-[80%] mx-auto bottom-6  z-10 ">
      <div className="flex items-center gap-1  bg-[#111111a9] py-2 sm:py-1 backdrop-blur-sm text-white px-6 rounded-full  ">
        <Link
          to="header"
          smooth={true}
        >
          <img
            src="assets\images\Bhupendra.png"
            alt="ABD Portfolio"
            className="md:mx-4 w-[40px] md:w-[48px] hidden md:block cursor-pointer"
          />
        </Link>
        <ul className="flex gap-6 font-semibold text-xl">
          <Link
            to="header"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            // onSetActive={handleSetActive}
            className="text-2xl md:mx-1 rounded-full text-slate-200 hover:text-white cursor-pointer p-1 sm:p-2"
          >
            <GoHomeFill />
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            // onSetActive={handleSetActive}
            className="text-2xl md:mx-1 rounded-full text-slate-200 hover:text-white cursor-pointer p-1 sm:p-2"
          >
            <SiAboutdotme />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            // onSetActive={handleSetActive}
            className="text-2xl md:mx-1 rounded-full text-slate-200 hover:text-white cursor-pointer p-1 sm:p-2"
          >
            <RiUserSettingsFill />
          </Link>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            // onSetActive={handleSetActive}
            className="text-2xl md:mx-1 rounded-full text-slate-200 hover:text-white cursor-pointer p-1 sm:p-2"
          >
            <CgCodeSlash />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            // onSetActive={handleSetActive}
            className="text-2xl md:mx-1 rounded-full text-slate-200 hover:text-white cursor-pointer p-1 sm:p-2"
          >
            <MdContactMail />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
