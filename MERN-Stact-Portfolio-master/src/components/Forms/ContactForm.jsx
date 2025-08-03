import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="space-y-6"
    >
      <div>
        <input type="hidden" name="access_key" value="not-needed-anymore" />

        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          className="w-full rounded-lg border-gray-200 p-3 text-sm border-2 focus:outline-[#A9CBB7] lg:py-5 lg:px-5"
          placeholder="Your Full Name"
          type="text"
          name="username"
          id="name"
          required
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="email">
          Your Email
        </label>
        <input
          className="w-full rounded-lg border-gray-200 p-3 text-sm border-2 focus:outline-[#A9CBB7] lg:py-5  lg:px-5"
          placeholder="Your Email"
          name="user_email"
          type="email"
          id="user_email"
          required
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="message">
          Your Message
        </label>
        <textarea
          className="w-full rounded-lg border-gray-200 p-3 text-sm border-2 focus:outline-[#A9CBB7] lg:px-5 lg:py-5"
          placeholder="Your Message"
          rows="8"
          name="message"
          id="message"
        ></textarea>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="inline-block w-full rounded-lg btn btn-primary px-5 py-3 font-medium text-white sm:w-auto"
          style={{ backgroundColor: "#16423C" }}
        >
          Send Mail
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
