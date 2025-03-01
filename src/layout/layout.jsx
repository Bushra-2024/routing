import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/Logo (2).png";  
import Icon from "../assets/Icon.png";
import social from "../assets/Socialmedia.png";
import '../App.css'

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <div>
      <nav className="wrapper flex px-[10%] justify-between items-center py-4 bg-white">
        <img src={Logo} alt="Logo" className="w-24" />
        <div className="hidden lg:flex gap-12 font-semibold">
          <Link to="/" className="hover:border-b-2">Home</Link>
          <Link to="/about" className="hover:border-b-2">About</Link>
          <Link to="/blog" className="hover:border-b-2">Blog</Link>
          <Link to="/pricing" className="hover:border-b-2">Pricing</Link>
          <Link to="/detailBlog" className="hover:border-b-2">Detail Blog</Link>
          <Link to="/contact" className="hover:border-b-2">Contact Us</Link>
        </div>

        <img 
          src={Icon} 
          className="lg:hidden w-[40px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)} 
        />
      </nav>
      {menuOpen && (
  <div className="lg:hidden fixed top-0 left-0 w-[30%] h-[200px] z-50" onClick={() => setMenuOpen(false)} >
    <div className="bg-white border-2 border-black w-[40%] h-full fixed left-0 top-0 p-6 shadow-lg">
      <button className="absolute top-4 right-4 text-sm text-white bg-black p-1 rounded-b-sm" onClick={() => setMenuOpen(false)}>Close</button>
      <div className="flex flex-col gap-6 text-lg font-semibold mt-10">
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>
    </div>
  </div>
)}


      <main className="flex justify-center gap-5 p-5">
        <Outlet />
      </main>

      <footer className="wrapper bg-[#1D1E25] lg:px-[10%] py-20 text-white">
        <div className="lg:flex items-center justify-between px-[7%]">
          <div>
            <h2 className="lg:text-[40px] text-[30px] font-semibold lg:w-[60%]">
              Think beyond the wave
            </h2>
            <p className="text-[#7E8492] text-[15px] lg:w-[55%] py-4">
              Ask about Sans products, pricing, implementation, or anything else.
              Our highly trained reps are ready to help.
            </p>
          </div>
          <button className="text-[#1D1E25] bg-white font-semibold p-3 border rounded-3xl lg:px-10 px-5">
            Try for free
          </button>
        </div>

        <div className="flex justify-between my-[5%] mt-[10%]">
          <div className="lg:w-[30%] w-[80%] font-medium px-[7%]">
            <img src={Logo} alt="Logo" />
            <p className="pt-5 text-[#7E8492] pr-5">
              We built an elegant solution. Our team created a fully integrated 
              sales and marketing solution for SMBs.
            </p>
          </div>

          <div className="hidden lg:flex gap-[70px]">
            <div>
              <h2 className="font-semibold text-[18px] pb-5">Company</h2>
              <p className="py-2 text-[#7E8492]">About</p>
              <p className="py-2 text-[#7E8492]">Pricing</p>
              <p className="py-2 text-[#7E8492]">Jobs</p>
              <p className="py-2 text-[#7E8492]">Blog</p>
            </div>
            <div>
              <h2 className="font-semibold text-[18px] pb-5">Product</h2>
              <p className="py-2 text-[#7E8492]">Sales Software</p>
              <p className="py-2 text-[#7E8492]">Marketplace</p>
              <p className="py-2 text-[#7E8492]">Terms & Conditions</p>
              <p className="py-2 text-[#7E8492]">Privacy Policy</p>
            </div>
            <div>
              <h2 className="font-semibold text-[18px] pb-5">Discover</h2>
              <p className="py-2 text-[#7E8492]">CRM Comparison</p>
              <p className="py-2 text-[#7E8492]">Partner Program</p>
              <p className="py-2 text-[#7E8492]">What is CRM</p>
              <p className="py-2 text-[#7E8492]">Resource</p>
            </div>
            <div>
              <h2 className="font-semibold text-[18px] pb-5">Help Center</h2>
              <p className="py-2">Community</p>
              <p className="py-2">Knowledge Base</p>
              <p className="py-2">Academy</p>
              <p className="py-2">Support</p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#CED1D8] pt-16 lg:pt-0 text-[#FFFFFF] lg:flex justify-between">
          <div className="flex flex-wrap lg:flex-row items-center gap-[30px] justify-center">
            <img src={social} alt="Social Media" className="lg:mr-10 mx-40 lg:mx-0" />
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Support</p>
          </div>
          <p className="py-10 text-center mx-16 text-[#AFB3BB]">
            © Copyright 2023 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
