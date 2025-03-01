import React from 'react';
import Toggle from '../../assets/_Toggle base.png'
import starter from '../../assets/Icon (2).png'
import green from '../../assets/Icon (3).png'
import gray from '../../assets/Icon (4).png'
import light from '../../assets/Icon (5).png'
import crown from '../../assets/Icon (6).png'
import '../../App.css'
const Pricing = () => {
  return (
    <div className="wrapper">
      <section>
        <p className="text-center rounded-2xl bg-sky-100 m-auto mt-10 text-sky-500 font-bold text-[18px] py-2 px-[2px] w-50">
          Pricing plans 🤑
        </p>
        <h1 className="text-center text-[30px] lg:text-5xl py-3 font-bold">
          Choose a plan for a more <br /> advanced business
        </h1>
        <div className="flex justify-center gap-2 mt-10">
          <img src={Toggle} alt="" />
          <p className="text-gray-500">Annual pricing (save 20%)</p>
        </div>
      </section>

      <section className="lg:w-[90%] w-full m-auto flex flex-col lg:flex-row justify-between mt-10  gap-10 lg:mt-30">
        <div className="lg:w-[30%] w-[90%] m-auto rounded-2xl py-20 shadow-2xl shadow-slate-200">
          <img className="px-7" src={starter} alt="" />
          <p className="text-[24px] px-7 font-bold">Starter</p>
          <p className="py-3 text-slate-400 px-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="text-5xl py-3 px-7 font-bold">$100 <span className="text-gray-200">/mo</span></p>
          <h1 className="text-2xl px-7">What’s included:</h1>
          <div className="flex gap-2 px-7">
            <img src={green} alt="" />
            <p>Unlimited Upload</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p>Advanced Statistic</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p>Profile Badge</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p>Access to the community</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={gray} alt="" />
            <p className="text-gray-400">History of all Liked Photos</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={gray} alt="" />
            <del className="text-gray-400">Directory Listing</del>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={gray} alt="" />
            <del className="text-gray-400">Customize Your Profile</del>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={gray} alt="" />
            <del className="text-gray-400">Display Your Workshops</del>
          </div>
          <button className="rounded-2xl py-1 px-2 text-center flex items-center justify-self-center font-bold hover:bg-gray-300 w-[50%] border-2 border-slate-200 m-auto ml-20 mt-10">
            Choose Plan
          </button>
        </div>

        <div className="lg:w-[30%] m-auto h-auto rounded-2xl p-5 shadow-2xl shadow-slate-200 mt-[-20px] bg-[#161A34] pb-10">
          <img className="px-7 pt-10" src={light} alt="" />
          <p className="text-lg px-7 text-white font-bold text-[24px]">Popular</p>
          <p className="py-3 text-gray-400 px-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="text-5xl py-3 px-7 font-bold text-white">$1400 <span className="text-gray-200 text-sm">/mo</span></p>
          <h1 className="text-lg px-7 text-white">What’s included:</h1>
          <div className="flex gap-2 px-7">
            <img src={green} alt="" />
            <p className="text-white">Unlimited Upload</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p className="text-white">Advanced Statistic</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p className="text-white">Profile Badge</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p className="text-white">Unlimited Upload</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={gray} alt="" />
            <del className="text-slate-300">Profile Badge</del>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={gray} alt="" />
            <del className="text-slate-300">Advanced Statistic</del>
          </div>
          <button className="rounded-2xl mt-10 py-1 px-2 text-center flex bg-white text-black items-center justify-center hover:text-black font-bold hover:bg-gray-300 w-[50%] border-2 border-slate-200 ml-7 m-auto justify-self-center">
            Choose Plan
          </button>
        </div>
        <div className="lg:w-[30%] m-auto rounded-2xl py-20 shadow-2xl shadow-slate-200">
          <img className="px-7" src={crown} alt="" />
          <p className="text-[24px] px-7 font-bold">Starter</p>
          <p className="py-3 text-slate-400 px-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="text-5xl py-3 px-7 font-bold">$100 <span className="text-gray-200">/mo</span></p>
          <h1 className="text-2xl px-7">What’s included:</h1>
          <div className="flex gap-2 px-7">
            <img src={green} alt="" />
            <p>Unlimited Upload</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p>Advanced Statistic</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p>Profile Badge</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p>Access to the community</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p>History of all Liked Photos</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p>Directory Listing</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p>Customize Your Profile</p>
          </div>
          <div className="flex gap-2 py-3 px-7">
            <img src={green} alt="" />
            <p>Display Your Workshops</p>
          </div>
          <button className="rounded-xl py-1 px-2 text-center flex items-center justify-center font-bold hover:bg-gray-300 w-[60%] border-2 border-slate-200 m-auto ml-7 justify-self-center mt-10">
            Choose Plan
          </button>
        </div>
      </section>

      <section className="w-[90%] m-auto px-[4%] mt-10">
  <h1 className="text-center text-[32px] font-bold">Frequently asked questions</h1>
  <p className="text-center text-gray-500 py-5 pb-20 text-[18px]">Everything you need to know about the product and billing.</p>
  
  <div className="flex justify-between border-b-2 border-gray-200">
    <div>
      <p className="text-black font-bold text-[20px]">Is there a free trial available?</p>
      <p className="text-gray-500 text-[18px]">
        Yes, you can try us for free for 30 days. <br /> If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and <br /> running as soon as possible.
      </p>
    </div>
    <div>
      <p className="ml-0">_</p> 
    </div>
    <hr />
  </div>
  <div className="flex justify-between border-b-2 border-gray-200 py-6">
    <h1 className="text-black font-bold text-[18px]">How Can I Add More Emails To My Account?</h1>
    <p>+</p>
  </div>
  <div className="flex justify-between border-b-2 border-gray-200 py-6">
    <h1 className="text-black font-bold text-[18px]">Can I Change Plans Or Cancel My Subscription At Any Time?</h1>
    <p>+</p>
  </div>
  <div className="flex justify-between border-b-2 border-gray-200 py-6">
    <h1 className="text-black font-bold text-[18px]">How Secure Is My Data With Sans CRM?</h1>
    <p>+</p>
  </div>
  <div className="flex justify-between border-b-2 border-gray-200 py-6">
    <h1 className="text-black font-bold text-[20px]">What Is The Uptime Guarantee?</h1>
    <p>+</p>
  </div>
</section>

    </div>
  );
};

export default Pricing;
