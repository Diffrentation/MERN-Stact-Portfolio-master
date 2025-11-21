/* eslint-disable react/no-unescaped-entities */
import HeaderText from "../HeaderText/HeaderText";
import { Element } from "react-scroll";

const About = () => {
  return (
    <div name="about" id="about" data-aos="fade-down" data-aos-duration="600">
      <Element name="aboutEle"></Element>

      {/* Header */}
      <HeaderText
        text1="Get to know"
        text2="More About Me"
        style={{ color: "#16423C" }}
      />

      {/* About Text */}
      <div className="flex flex-col justify-center items-center gap-6 md:w-3/4 mx-auto mt-6">
        
        {/* Paragraph 1 */}
        <p
          className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Welcome to my portfolio! My name is{" "}
          <span className="text-primary font-semibold" style={{ color: "#227B94" }}>
            Bhupendra Singh
          </span>
          , a passionate{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            MERN Stack Developer
          </span>
          . I’ve completed my{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            Bachelor's in Computer Applications (B.C.A)
          </span>{" "}
          from CCS University, Meerut. Originally from{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            Uttar Pradesh
          </span>
          , I’m deeply passionate about building impactful digital products.
        </p>

        {/* Paragraph 2 */}
        <p
          className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          I’m currently gaining hands-on experience as a{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            Frontend Developer Intern (MERN Stack) at 
          </span>{" "}
          <span className="font-semibold" style={{ color: "#001a33" }}>
            <a href="https://clinginfotech.com/">Cling Info Tech</a>
          </span>
          . During my internship, I work on real-world projects, building dynamic web applications and contributing to both frontend and backend development. This experience is helping me strengthen my skills in{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            React.js, Node.js, Express.js, MongoDB
          </span>{" "}
          and other modern web technologies.
        </p>

        {/* Paragraph 3 */}
        <p
          className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          I have worked on several projects including an{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            Online Learning Platform (LMS)
          </span>{" "}
          similar to Udemy or Coursera, which includes course management, video streaming, quizzes, and role-based access for students, instructors, and admins. The project uses React.js, Tailwind CSS, React Router on the frontend, Node.js, Express.js, Multer, Cloudinary on the backend, MongoDB as database, and JWT + bcrypt for authentication.
        </p>

        {/* Paragraph 4 */}
        <p
          className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          I have also built a{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            URL Shortener Platform
          </span>{" "}
          like Bitly/TinyURL, with simple authentication, analytics, secure link management. It uses React.js, Context API, Tailwind CSS on the frontend, Node.js and Express.js on the backend, MongoDB for storage, and JWT + bcrypt for authentication.
        </p>

        {/* ⭐ NEW Real Estate Paragraph (Added) */}
        <p
          className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          I am also developing a{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            Real Estate Platform
          </span>{" "}
          as a full-stack project. The frontend is built using{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            Next.js (App Router)
          </span>{" "}
          with property listings, filters, vendor profiles, and responsive UI. 
          I am currently building the backend with{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            advanced OTP-based authentication
          </span>
          , secure APIs, role-based access, and scalable architecture for managing properties, users, and vendors.
        </p>

        {/* Paragraph 6 - Skills */}
        <p
          className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          My technical skills include{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            C, C++, Java, JavaScript
          </span>{" "}
          for programming;{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            HTML, CSS, Tailwind CSS, Bootstrap, Material-UI, Next.js, React.js, Redux Toolkit
          </span>{" "}
          for frontend;{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            Node.js, Express.js, REST API, OAuth, Firebase
          </span>{" "}
          for backend; and{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            MongoDB, Git, GitHub, Linux
          </span>{" "}
          as tools and database technologies. I am fluent in{" "}
          <span className="font-semibold" style={{ color: "#227B94" }}>
            English and Hindi
          </span>.
        </p>

        {/* Paragraph 7 - Education */}
        <p
          className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="font-semibold" style={{ color: "#227B94" }}>
            Education:
          </span>{" "}
          Bachelor of Computer Applications (B.C.A) from Royal Educational Institute, Ghaziabad — affiliated to CCS University (Sep 2022 – Jun 2025).
        </p>

      </div>
    </div>
  );
};

export default About;
