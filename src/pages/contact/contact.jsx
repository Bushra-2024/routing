import React from "react";
import map from '../../assets/Map.png'
import pin from '../../assets/Pin.png'
import logos from "../../assets/Logos.png";
import logoss from "../../assets/Frame 1171275273.png";
import Imageeee from "../../assets/Image (2).png";
const Contact = () => {
  return (
    <div>
      <section>
        <div className="lg:w-[53%] w-[80%] px-[4%] py-10 mx-4">
          <h1 className="lg:text-6xl text-2xl font-semibold">Contact our team to find out more</h1>
        </div>

        <div className="flex lg:flex-row flex-wrap justify-between lg:px-[10%] relative items-center">
          <img className="lg:w-[60%] w-[100%]" src={map} alt="" />
          <div className="lg:w-[30%] flex lg:flex-col flex-wrap px-[5%] pt-20 lg:pt-0">
            <div className="border-b-2 border-gray-300 w-full mb-5">
              <h1 className="text-[22px] font-bold lg:py-1">Support</h1>
              <p className="text-[#7E8492] lg:py-1">Our friendly team is here to help.</p>
              <h3 className="text-[18px] py-1">support@sans.com</h3>
            </div>
            <div className="border-b-2 border-gray-300 w-full mb-5">
              <h1 className="text-[22px] font-bold lg:py-1">Sales</h1>
              <p className="text-[#7E8492] lg:py-1">Questions or queries? Get in touch!</p>
              <h3 className="text-[18px] py-1">support@sans.com</h3>
            </div>
            <div className="border-b-2 border-gray-300 mb-10">
              <h1 className="text-[22px] font-bold lg:py-1">Phone</h1>
              <p className="text-[#7E8492] lg:py-1">Mon-Fri from 8am to 5pm.</p>
              <h3 className="text-[18px] py-1">+1 (435) 345-7655</h3>
            </div>

            <div className="lg:p-2 p-[2px] rounded-lg lg:w-[220px] lg:h-[80px] w-[100px] bg-white lg:absolute lg:top-[230px] lg:left-[520px] top-[100px] left-[200px]">
              <h1 className="lg:text-sm font-bold">Yogja, INA</h1>
              <p className="lg:text-[13px] text-[#7E8492]">100 Smith Street, Collingwood VIC 3066 AU</p>
            </div>
            <div className="lg:absolute lg:top-[380px] lg:left-[600px] top-7 right-24 lg:block hidden">
              <img src={pin} alt="" />
            </div>
          </div>
        </div>
      </section>

  <section className="my-[15%] flex lg:flex-row flex-col lg:px-32 px-10">
    <div>
      <h2 className="text-[60px] font-semibold">890+</h2>
      <p className="text-[#7E8492] text-[15px] w-[60%] pb-10 lg:pb-0">some big companies that we work with, and trust us very much</p>
    </div>
    <img src={logos} alt="" className="lg:block hidden" />
    <img src={logoss} alt="" className="lg:hidden block" />
  </section>

      <section className="flex items-center justify-center min-h-screen mb-20">
        <div className="bg-white rounded-lg lg:pl-[10%] w-full flex flex-col lg:flex-row">
          <div className="lg:p-8 px-7 lg:px-0">
            <h1 className="lg:text-3xl text-xl font-bold mb-4">Let’s level up your brand</h1>
            <p className="text-gray-600 mb-6">
              You can reach us anytime{" "}
              <a href="mailto:hellosansbrothers@gmail.com" className="text-blue-500 no-underline">
                hellosansbrothers@gmail.com
              </a>
            </p>
            <form className="leading-loose">
  <div className="flex flex-col lg:flex-row">
    <div className="px-1">
      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
        First Name
      </label>
      <input
        type="text"
        id="first_name"
        name="first_name"
        placeholder="First name"
        className="border border-gray-300 rounded-lg w-full p-2.5 focus:ring-2 outline-none"
      />
    </div>
    <div className="lg:px-5 mt-3">
      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
        Last Name
      </label>
      <input
        type="text"
        id="last_name"
        name="last_name"
        placeholder="Last name"
        className="border border-gray-300 rounded-lg w-full p-2.5 outline-none"
      />
    </div>
  </div>
  <div className="px-2 mt-4">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="you@company.com"
      className="border border-gray-300 rounded-lg w-full p-2.5 focus:outline-none"
    />
  </div>
  <div className="px-2 mt-4">
    <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-2">
      Phone Number
    </label>
    <input
      type="tel"
      id="phone_number"
      name="phone_number"
      placeholder="+1 (555) 000-0000"
      className="border border-gray-300 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
  <div className="px-2 mt-4">
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      placeholder="Leave us a message..."
      className="border border-gray-300 rounded-lg w-full p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    ></textarea>
  </div>
  <div className="px-2 mt-6">
    <button
      type="submit"
      className="bg-black text-white w-[36%] px-3 py-3 rounded-3xl hover:bg-gray-800"
    >
      Get Started
    </button>
  </div>
</form>

          </div>
          <div className="hidden lg:flex">
            <img src={Imageeee} alt="" className="object-contain lg:w-[90%]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
