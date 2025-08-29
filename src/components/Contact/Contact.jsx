/* eslint-disable react/jsx-no-target-blank */
import { RiWhatsappFill } from "react-icons/ri";
import HeaderText from "./../HeaderText/HeaderText";
import { MdEmail } from "react-icons/md";
import ContactForm from "../Forms/ContactForm";


const Contact = () => {
  return (
    <div id="contact"  >
      <HeaderText text1={"Let's connect with me"} text2={"Contact"} />
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center  gap-6 lg:gap-16" >
        <div className="flex gap-6 flex-col md:col-span-1">
          <article className="p-6 justify-center items-center text-center gap-6 flex flex-col lg:text-xl font-medium hover:border-[#d94b44] hover:text-[#d94b44] hover:bg-[#f7f8fc]  hover:shadow-lg" data-aos="fade-right" data-aos-duration="800"
            style={{ borderColor: '#16423C', color: '#227B94' }}>           <div>

              <p>
                <MdEmail className="text-5xl w-full  " style={{ color: '#16423C' }} />
              </p>
              <h4 style={{color:'#16423C'}}>Email</h4>
            </div>
            <h5 className="break-normal md:break-all">
              bbhupender100@gmail.com
            </h5>
            <a
              href="mailto:mahnoorkhan1034@gmail.com"
              className="transition duration-150 text-base font-bold hover:scale-130 btn btn-ghost btn-sm hover:bg-transparent"
              style={{ color: '#16423C' }} >
              Click here to Send a mail
            </a>
          </article>

          <article className="p-6 justify-center items-center text-center gap-6 flex flex-col lg:text-xl font-medium hover:border-[#d94b44] hover:text-[#d94b44] hover:bg-[#f7f8fc]  hover:shadow-lg"
            style={{ borderColor: '#16423C', color: '#227B94' }}>           <div>

              <p>
                <RiWhatsappFill className="text-5xl w-full " style={{color: '#16423C'}} />              </p>
              <h4 style={{color:" #16423C"}}>Whatsapp</h4>
            </div>
            <h5 className="break-normal md:break-all">
              +91 9311278407
            </h5>
            <a
              href="https://api.whatsapp.com/send?phone=919311278407"
              target="_blank"
              className="transition duration-150 text-base font-bold hover:scale-130 btn btn-ghost btn-sm hover:bg-transparent"
              style={{ color: '#16423C' }} >
              Click here to Send a message
            </a>
          </article>

        </div>
        <div className="md:col-span-2 lg:max-w-[80%]" data-aos="fade-up" data-aos-duration="1000">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
