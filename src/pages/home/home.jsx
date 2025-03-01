import React from 'react'
import sales from "../../assets/Sales-Light.png";
import sales1 from "../../assets/CustomerGrowthLight.png";
import sales2 from "../../assets/Statistic-Light.png";
import image from "../../assets/Image.png";
import bar from "../../assets/Bar Chart.png";
import '../../App.css'
import grouppic from "../../assets/Image (1).png";
import logos from "../../assets/Logos.png";
import logoss from "../../assets/Frame 1171275273.png";
import office from '../../assets/office.png'
import office2 from '../../assets/office2.png'
import office3 from '../../assets/office3.png'
import office4 from '../../assets/office4.png'
import laptop from "../../assets/Rectangle 5650.png"
import laptop2 from "../../assets/Rectangle 5651 (1).png"
import icon from "../../assets/Icon (1).png"
import rating from "../../assets/Rating.png"
import Ellipse from "../../assets/Ellipse 15.png"
import btnArrow from "../../assets/Button Arrow.png"

export default function Home (){
  return (
  <div>
  <header className="flex flex-wrap lg:pl-[140px] mt-20 justify-between">
  <div className="w-full lg:w-[40%] px-10 lg:px-0">
    <h1 className="lg:text-[50px] text-[30px] font-bold">Digitally forward creative</h1>
    <p className="flex items-start lg:text-[25px] font-semibold pt-20">
      <img src="./img/Line 69.png" alt="" className="mr-2 lg:pt-5 pt-3 lg:w-96 w-10" />
      When it comes to interactive marketing, we've got you covered. Be where the world is going
    </p>
    <div className="pt-10 lg:pl-10 flex gap-2 ">
      <input 
        type="email" 
        name="email" 
        id="email" 
        className="bg-white p-2 outline-none lg:border-transparent border-b-2 border-[#7E8492]"
        placeholder="Enter your email" 
      />
      <button className="bg-[#1D1E25] text-white font-semibold p-3 lg:p-1 border rounded-3xl lg:px-10 px-">
        Try for free
      </button>
    </div>
  </div>

  <div className="relative w-full lg:w-[60%] lg:mb-0 mb-[500px] lg:mt-0 mt-20">
    <img src={sales} className="absolute top-16 left-0 z-10" />
    <img src={sales1} className="absolute top-0 right-0 z-20 w-[50%] lg:w-80" />
    <img src={sales2} className="absolute top-[350px] lg:left-[50px] z-30 w-full lg:w-[80%]" />
  </div>
</header>
<main>
  <section className="bg-[#1D1E25] w-screen lg:my-32 p-[10%] text-white">
    <h2 className="lg:text-[40px] text-[25px] font-semibold lg:w-[50%]">Coca help our client solve complex customer problems with date that does more.</h2>
    <p className="text-[#7E8492] text-[15px] lg:w-[46%] py-2">
      Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration
    </p>

    <div className="lg:flex justify-between mt-20 mb-10">
      <div className="lg:w-[35%] py-10 lg:py-0">
        <img src="./img/Icon (1).png" alt="" />
        <h3 className="font-semibold lg:text-[30px] text-[20px] py-3">Build your date fundamental</h3>
        <p className="text-[#7E8492] text-[15px]">Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.</p>
      </div>
      <div className="lg:w-[35%] py-10 lg:py-0">
        <img src="./img/Icon (2).png" alt="" />
        <h3 className="font-semibold lg:text-[30px] text-[20px] w-[60%] py-3">Measure more effective</h3>
        <p className="text-[#7E8492] text-[15px]">Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.</p>
      </div>
    </div>
    <div className="lg:flex justify-between lg:mt-16">
      <div className="lg:w-[35%] py-10 lg:py-0">
        <img src="./img/Icon (3).png" alt="" />
        <h3 className="font-semibold lg:text-[30px] text-[20px] w-[50%] py-3">Activate your date</h3>
        <p className="text-[#7E8492] text-[15px]">Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.</p>
      </div>
      <div className="lg:w-[35%] py-10 lg:py-0">
        <img src="./img/Icon (4).png" alt="" />
        <h3 className="font-semibold lg:text-[30px] text-[20px] py-3">Strengthen consumer privacy</h3>
        <p className="text-[#7E8492] text-[15px]">Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.</p>
      </div>
    </div>
  </section>

  <section className="lg:flex px-[10%] justify-center my-20 m-auto">
    <div className="lg:[45%] relative">
      <img src={image} alt="" className="relative lg:w-[90%] z-10" />
      <img src={bar} alt="" className="absolute lg:bottom-16 lg:right-20 bottom-10 right-10 z-20 w-[50%] lg:w-80" />
    </div>
    <div className="lg:w-[45%]">
      <h2 className="lg:text-[50px] text-[28px] font-semibold">Passion to increase company revenue up to 85%</h2>
      <p className="text-[#7E8492] text-[15px] lg:py-10 py-5 lg:w-[54%]">Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging</p>
      <div>
        <p className="flex gap-5 py-3 text-[18px] lg:w-[70%] items-center"><img src="./img/Icon (5).png" alt="" />Close more deals with single - page contact managment</p>
        <p className="flex gap-5 py-3 text-[18px] lg:w-[70%] items-center"><img src="./img/Icon (5).png" alt="" />Enjoy one-click calling, call scripts and voicemail automation</p>
        <p className="flex gap-5 py-3 text-[18px] lg:w-[70%] items-center"><img src="./img/Icon (5).png" alt="" />Take stages and milestones of your deals to keep the sales process an track</p>
      </div>
    </div>
  </section>

  <section className="lg:flex lg:flex-row flex-wrap px-[5%] justify-center items-center gap-[5%] my-30">
    <div>
      <h2 className="text-[60px] font-semibold">17k</h2>
      <p className="text-[#7E8492] text-[15px] lg:w-[60%]">happy customers on worldwide</p>
    </div>
    <div>
      <h2 className="text-[60px] font-semibold">15+</h2>
      <p className="text-[#7E8492] text-[15px] lg:w-[60%]">Hours of work experience</p>
    </div>
    <div>
      <h2 className="text-[60px] font-semibold">50+</h2>
      <p className="text-[#7E8492] text-[15px] lg:w-[70%]">Creativity & passionate members</p>
    </div>
    <div>
      <h2 className="text-[60px] font-semibold">100+</h2>
      <p className="text-[#7E8492] text-[15px] lg:w-[60%]">Integrations lorem ipsum integrations</p>
    </div>
  </section>

  <section className="mb-20">
    <img src={grouppic} alt="" className="lg:m-20 w-[90%] lg:w-[90%] m-auto" />
    <div className="lg:flex lg:px-20 lg:justify-between ">
      <h2 className="lg:text-[50px] text-[25px] font-semibold lg:w-[50%] mx-5 lg:mx-0 mt-10 lg:mt-0">Lift your business to new heights with our digital marketing services</h2>
      <p className="text-[#7E8492] text-[15px] py-10 lg:w-[28%] w-[90%] ml-5 lg:ml-0">To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers</p>
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

  <section className="lg:px-24 my-20 px-5">
    <h2 className="lg:text-[50px] text-[30px] font-semibold lg:w-[47%]">Advertise, analyze, and optimize! We do it all for you</h2>
    <p className="text-[#7E8492] text-[15px] lg:w-[30%] py-4">Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
    <div className="lg:flex justify-between mt-20">
      <div className="lg:w-[45%] flex items-center lg:gap-[7%] gap-5 my-10 lg:my-0">
        <img src={office} alt="" className="lg:w-96 w-[50%]" />
        <div>
          <h5 className="lg:text-[30px] font-semibold">Lead happiness for customers</h5>
          <p className="text-[#7E8492] lg:text-[15px] lg:py-4 lg:leading-loose">Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
        </div>
      </div>
      <div className="lg:w-[45%] flex items-center lg:gap-[7%] gap-5 my-10 lg:my-0">
        <img src={office2} alt="" className="lg:w-96 w-[50%]" />
        <div>
          <h5 className="lg:text-[30px] font-semibold">Reach your goals in advance</h5>
          <p className="text-[#7E8492] lg:text-[15px] lg:py-4 lg:leading-loose">Create perfect customer experience and trust us 100% when it comes to creating the right solution</p>
        </div>
      </div>
    </div>
    <div className="lg:flex justify-between mt-20">
      <div className="lg:w-[45%] flex items-center lg:gap-[7%] gap-5 my-10 lg:my-0">
        <img src={office3} alt="" className="lg:w-96 w-[50%]" />
        <div>
          <h5 className="lg:text-[30px] font-semibold">Lead happiness for customers</h5>
          <p className="text-[#7E8492] lg:text-[15px] lg:py-4 lg:leading-loose">Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster</p>
        </div>
      </div>
      <div className="lg:w-[45%] flex items-center lg:gap-[7%] gap-5 my-10 lg:my-0">
        <img src={office4} alt="" className="lg:w-96 w-[50%]" />
        <div>
          <h5 className="lg:text-[30px] font-semibold">Reach your goals in advance</h5>
          <p className="text-[#7E8492] lg:text-[15px] lg:py-4 lg:leading-loose">Create perfect customer experience and trust us 100% when it comes to creating the right solution</p>
        </div>
      </div>
    </div>
  </section>

  <section className="my-20 mt-32">
      <h2 className="lg:text-[50px] text-[30px] font-semibold text-center">Trending news from Coca</h2>
      <p className="text-[#7E8492] lg:text-[15px] text-[17px] text-center py-4">We have some new services to pamper you</p>

      <div className="flex lg:flex-row flex-col justify-center items-center gap-8 mt-10 relative">
          <div className="lg:w-[40%] w-[90%]">
              <img src={laptop} alt=""/>
              <div className="p-2">
                  <p className="text-sm text-[#7E8492] flex justify-between pb-5">Published in Insight Jan 30, 2021
                      <span>by: Albert Sans</span>
                  </p>
                  <h3 className="lg:text-3xl text-xl font-semibold mt-2">What makes an authentic employee profile, and why does
                      it matter ?</h3>
              </div>
          </div>

       <img src={icon} alt="" className="absolute top-[120px] z-100 hidden lg:block"/>
                <div className="lg:w-[40%] hidden lg:block">
                   <img src={laptop2} alt=""/>
                   <div className="p-2">
                       <p className="text-sm text-[#7E8492] flex justify-between pb-5">Published in Insight Jan 30, 2021
                           <span>by: Albert Sans</span>
                       </p>
                       <h3 className="text-3xl font-semibold mt-2">How to build a Kaylen relationship with a good company
                       </h3>
                   </div>
               </div>
           </div>
      </section>

      <section class="my-32 lg:px-32 px-10">
            <div class="flex lg:flex-row flex-col lg:justify-between lg:items-center items-start">
                <h2 class="lg:text-[50px] text-[30px] font-semibold lg:w-[45%] w-[80%]">What our customer are saying</h2>
                <p class="text-[#7E8492] text-[15px] py-10 lg:w-[28%] w-[60%]">We are trusted numerous companies from different
                    business to meet their needs</p>
            </div>
            <div class="lg:pl-[10%] p-[5%]">
                <img src={rating} alt=""/>
                <h3 class="font-semibold lg:text-[35px] text-[22px] lg:pr-[10%] pt-10">“With Agency the results are very satisfying.
                    wrapped with Hight quality and innovative design that
                    makes a surge of visitors on my website”</h3>
                <div class="flex items-center justify-between pt-20">
                    <div class="flex gap-[20px] items-center">
                        <img src={Ellipse} alt=""/>
                        <div>
                            <h2 class="font-semibold text-[24px]">Renee Wells</h2>
                            <p>Product Designer, Quotient</p>
                        </div>
                    </div>
                    <img src={btnArrow} alt=""/>
                </div>
            </div>
        </section>
</main>

    </div>
  )
}
