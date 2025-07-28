import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

import { Link } from "react-router-dom";

const Footer = () => {
    const date = new Date()
    return (
        <footer className="footer pt-10 px-[10%] text-neutral-content pb-24"  style={{backgroundColor: '#16423C'}}>
        <aside>
          {/* <img src="/assets/images/logoABD.png" alt="logo" className="w-[20%]" /> */}
          <p className="font-semibold text-lg">Bhupendra Singh</p>
          <p>Copyright © {date.getFullYear()} - All right reserved</p>
        </aside> 
        <nav>
          <header className="footer-title">Social</header> 
          <div className="py-4">
            <p>Get in touch with me through social media platform.</p>
          </div>
          <div className="grid grid-flow-col gap-4 text-2xl text-primary">
            
          <Link
            to={"https://www.linkedin.com/in/bhupender-singh-899704276"}
            target="_blank"
          >
            <FiLinkedin className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer" />
          </Link>
          <Link to={"https://github.com/Diffrentation"} target="_blank">
            <RiGithubLine className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer" />
          </Link>
          <Link to={"https://www.facebook.com/profile.php?id=100052737592384"} target="_blank">
            <SlSocialFacebook  className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer" />
          </Link>
          <Link to={"https://www.instagram.com/official_mr.bhupendra/?next=%2F"} target="_blank">
            <SlSocialInstagram  className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer" />
          </Link>
          </div>

        </nav>
       
      </footer>
    );
};

export default Footer;