import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./SliderProject.css";
// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SliderProject = ({ projectImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // console.log(projectImages);
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
      >
        {projectImages?.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div className="screen">
              <img src={image} className="cursor-pointer" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4.5}
       
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-[50%]"
      >
        {projectImages?.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={image}
              className="cursor-pointer aspect-video object-cover rounded-xl "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
SliderProject.propTypes = {
  projectImages: PropTypes.array,
};
export default SliderProject;
