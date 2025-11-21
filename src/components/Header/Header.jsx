/* eslint-disable react/no-unescaped-entities */
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { SiGoogledocs } from "react-icons/si";
import { LuMouse } from "react-icons/lu";
import { FaAngleDoubleDown } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

import Resume from "../../../public/assets/images/Mr.BhupendraSingh.pdf";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Header = () => {
  const options = {
    duration: 1500,
    smooth: true,
    offset: 50,
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  const [, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  const optionsp = {
    autoPlay: true,
    background: {
      color: {
        value: "#fffff",
      },
      image: "",
      position: "",
      repeat: "",
      size: "",
      opacity: 1,
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: {
          value: "#fff",
        },
        opacity: 1,
      },
      enable: false,
    },
    clear: true,
    defaultThemes: {},
    delay: 0,
    fullScreen: {
      enable: true,
      zIndex: -10,
    },
    detectRetina: false,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: false,
          mode: [],
        },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: "circle",
        },
        onHover: {
          enable: true,
          mode: "trail",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        trail: {
          delay: 0.005,
          pauseOnStop: true,
          quantity: 5,
          particles: {
            color: {
              value: "#ff0000",
              animation: {
                enable: true,
                speed: 400,
                sync: true,
              },
            },
            collisions: {
              enable: false,
            },
            links: {
              enable: false,
            },
            move: {
              outModes: {
                default: "destroy",
              },
              speed: 2,
            },
            size: {
              value: {
                min: 1,
                max: 5,
              },
              animation: {
                enable: true,
                speed: 5,
                sync: true,
                startValue: "min",
                destroy: "max",
              },
            },
          },
        },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: {
          distance: 200,
        },
        bubble: {
          distance: 200,
          duration: 0.4,
          mix: false,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: [],
          },
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 100,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        push: {
          default: true,
          groups: [],
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: [],
          },
        },
        slow: {
          factor: 3,
          radius: 200,
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#ffffff",
              },
              stop: {
                value: "#000000",
              },
            },
            radius: 1000,
          },
          shadow: {
            color: {
              value: "#000000",
            },
            length: 2000,
          },
        },
      },
    },
    manualParticles: [],
    particles: {
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
      collisions: {
        absorb: {
          speed: 2,
        },
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        enable: false,
        maxSpeed: 50,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: "#2ed5ff",
        animation: {
          h: {
            count: 0,
            enable: true,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
          s: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
          l: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: true,
            offset: 0,
          },
        },
      },
      effect: {
        close: true,
        fill: true,
        options: {},
        type: [],
      },
      groups: {},
      move: {
        angle: {
          offset: 0,
          value: 90,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 3000,
            y: 3000,
          },
        },
        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 0,
        },
        decay: 0,
        distance: {},
        direction: "none",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: {
            value: 0,
          },
          enable: false,
          options: {},
        },
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        random: false,
        size: false,
        speed: 2,
        spin: {
          acceleration: 0,
          enable: false,
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {},
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
        limit: {
          mode: "delete",
          value: 0,
        },
        value: 100,
      },
      opacity: {
        value: {
          min: 0.3,
          max: 0.8,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 0.5,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: {
          value: "#000",
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        close: true,
        fill: true,
        options: {},
        type: "circle",
      },
      size: {
        value: {
          min: 1,
          max: 3,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 3,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
        },
      },
      stroke: {
        width: 0,
      },
      zIndex: {
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1,
      },
      destroy: {
        bounds: {},
        mode: "none",
        split: {
          count: 1,
          factor: {
            value: 3,
          },
          rate: {
            value: {
              min: 4,
              max: 9,
            },
          },
          sizeOffset: true,
          particles: {},
        },
      },
      roll: {
        darken: {
          enable: false,
          value: 0,
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0,
        },
        mode: "vertical",
        speed: 25,
      },
      tilt: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        enable: false,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 0,
          color: {
            value: "#2bc7ee",
          },
        },
        particles: {
          enable: true,
          frequency: 4,
          opacity: 1,
          color: {
            value: "#67e0fe",
          },
        },
      },
      wobble: {
        distance: -3,
        enable: false,
        speed: {
          angle: 50,
          move: 10,
        },
      },
      life: {
        count: 0,
        delay: {
          value: 0,
          sync: false,
        },
        duration: {
          value: 0,
          sync: false,
        },
      },
      rotate: {
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        path: false,
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: {
          value: 45,
        },
        width: 1,
      },
      links: {
        blink: false,
        color: {
          value: "random",
        },
        consent: false,
        distance: 100,
        enable: true,
        frequency: 1,
        opacity: 1,
        shadow: {
          blur: 5,
          color: {
            value: "#000",
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      repulse: {
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: false,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    emitters: [],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true,
      },
    },
  };

  return (
    <div className="w-full py-10 md:py-16 " id="header">
      <Particles
        id="tsparticles"
        // particlesLoaded={particlesLoaded}
        options={optionsp}
      />
      <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
        <div data-aos="fade-right" data-aos-duration="1200">
          {/* <img src="assets/images/abd2.png" className="max-w-sm rounded-lg " /> */}
        </div>
        <div className="py-6">
          <h1
            className="text-4xl  md:text-5xl font-bold"
            data-aos="fade-up"
            style={{ color: "#16423C" }}
          >
            Hey ! I'm Bhupendra Singh
          </h1>
          {/* <h3 className="py-4 text-2xl font-semibold text-slate-600">
            Frontend Developer
          </h3> */}
          <h3 className="py-4 text-2xl font-semibold text-slate-600 ">
            <span
              className="text-primary bg-white"
              style={{ color: "#227B94" }}
            >
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Full Stack Web Developer",
                  "React Developer",
                  "Backend - MERN Stack Developer",
                  "Mern Stack Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
                onLoopDone={handleDone}
              />
            </span>
          </h3>
          <p
            className="py-6 text-lg md:text-xl bg-white rounded-xl "
            data-aos="fade-up"
          >
            Highly motivated and detail-oriented MERN stack developer with a
            strong passion for building scalable, efficient, and user-friendly
            web applications. Proficient in modern technologies and frameworks
            including Next.js, MongoDB, Express.js, React, Node.js, along with tools like
            Redux, Axios, git, github and Mongoose. I am committed to delivering clean,
            maintainable, and high-performance code while constantly seeking
            opportunities to learn and grow. Explore my portfolio to see how I
            can bring your ideas to life with robust full-stack solutions!
          </p>
          <p
            className="text-primary flex gap-2 font-semibold items-center mb-6"
            style={{ color: "#227B94" }}
          >
            <CiLocationOn className="animate-pulse text-xl" /> Vijay Nagar, Ghaziabad,
            Uttar Pradesh
          </p>

          <a href={Resume} download data-aos="fade-up" data-aos-duration="1500">
            <button
              className="btn btn-primary text-white transition duration-300 ease-in-out hover:scale-105"
              style={{ backgroundColor: "#16423C", border: "0" }}
            >
              <SiGoogledocs className="text-xl" /> Download Resume
            </button>
          </a>
        </div>
        <div className="flex lg:flex-col gap-6 text-2xl text-primary items-center">
          <hr
            className="border-b-3 md:rotate-90 w-10"
            style={{ backgroundColor: "#16423C" }}
          />
          <Link
            to={"https://www.linkedin.com/in/bhupender-singh-899704276/"}
            target="_blank"
          >
            <FiLinkedin
              className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer"
              style={{ color: "#227B94" }}
            />
          </Link>
          <Link to={"https://github.com/Diffrentation"} target="_blank">
            <RiGithubLine
              className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer"
              style={{ color: "#227B94" }}
            />
          </Link>
          <hr
            className="border-b-3 md:rotate-90 border-primary w-10 m-2"
            style={{ backgroundColor: "#16423C" }}
          />
        </div>
      </div>
      <button
        onClick={() => scroller.scrollTo("aboutEle", options)}
        className="cursor-pointer md:ml-[15%] flex gap-2 items-center mx-4  my-10 transition duration-300 ease-in-out hover:scale-105 "
      >
        <LuMouse className="text-2xl text-accent" />
        Scroll Down
        <FaAngleDoubleDown className=" text-accent animate-bounce" />
      </button>
    </div>
  );
};

export default Header;
