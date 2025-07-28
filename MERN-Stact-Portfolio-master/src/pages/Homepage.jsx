import Aos from "aos";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Homepage = () => {
  Aos.init()
  return (
    <>
     <Helmet>
        <title>Bhupendra Singh - Full Stack Developer</title>
        <meta name="description" content="Mahnoor Khan - Front-end Web Developer | MERN Stack Developer | Software Engineeering Graduate | Portfolio | Reactjs Developer" />
        <meta name="keywords" content="front-end, web developer, MERN stack, computer science, JavaScript, React,ReactJS, MongoDB, Node.js, HTML, CSS" />
        <meta name="author" content="Mahnoor Khan" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="w-[90%] md:w-[80%] mx-auto space-y-8 ">
        <Nav />
        <Header />
      </section>
      <section className="w-[90%] md:w-[80%] mx-auto space-y-8  bg-white">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ToastContainer />
      </section>
      <div className="mt-10 md:mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
