import React from "react";;

const ContactForm = () => {

  return (
    <form  action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
      <div>
      <input type="hidden" name="access_key" value="54963b8a-adc3-4b8d-a6a0-53c4307817b3"/>

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
          type="text"
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
        style={{backgroundColor: '#16423C'}} >
          Send Mail
        </button>
        
      </div>
    </form>
  );
};

export default ContactForm;
