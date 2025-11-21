import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      alert("Email service is not configured. Please try again later.");
      return;
    }

    if (!formRef.current) {
      console.error("Contact form reference is not available.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.error("EmailJS error:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
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
          className="inline-block w-full rounded-lg btn btn-primary px-5 py-3 font-medium text-white sm:w-auto disabled:opacity-50"
          style={{ backgroundColor: "#16423C" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Mail"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
