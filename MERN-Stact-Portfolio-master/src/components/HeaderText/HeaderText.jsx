import PropTypes from "prop-types";
const HeaderText = ({text1,text2}) => {
    return (
        <div className="flex justify-center flex-col items-center gap-2 my-10 md:my-20" data-aos="fade-up"  data-aos-duration="800">
            <h4 className="">{text1}</h4>
            <h1 className="text-2xl md:text-3xl font-bold text-primary" style={{color: "#16423C"}}>{text2}</h1>
            <hr className="border-b-4 border-primary w-[10%]" style={{borderColor: '#227B94'}}/>
        </div>
    );
};
HeaderText.propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string,
  };
export default HeaderText;