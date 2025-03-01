import React from "react";
import smth from '../../assets/Linked Path Group.png'
import Rectangle from '../../assets/Rectangle 13.png'
import Rectangle2 from '../../assets/Rectangle 37.png'
import Rectangle3 from '../../assets/Rectangle 38.png'
import Rectangle4 from '../../assets/Rectangle 4.png'
import Rectangle5 from '../../assets/Rectangle 5.png'
import Rectangle6 from '../../assets/Rectangle 6.png'
import media from '../../assets/Frame 1171275129.png'
import '../../App.css'
export default function About() {
    return (
        <div className="wrapper">
            <header className="flex flex-wrap lg:px-[140px] lg:justify-between lg:items-center">
                <div className="w-full lg:w-[60%] px-10 lg:px-0">
                    <h1 className="lg:text-[50px] text-[33px] font-bold pt-10">
                        Everything you need to get the attention of your audience
                    </h1>
                    <p className="flex items-start lg:text-[25px] font-semibold pt-20">
                        <img src="./img/Line 69.png" alt="" className="lg:mr-5 mr-3 pt-3 lg:w-[30%] w-8" />
                        Our digital agency helps clients develop, implement and maintain successful digital marketing strategies
                        across all channels. Also work with you to build your website and create online businesses that grow.
                    </p>
                </div>
                <img src={smth} alt="" className="lg:mt-[27%] lg:w-[20%] w-20 ml-[330px] lg:ml-0 max-w-full" />
            </header>

            <section className="lg:pl-20 my-[20%] flex justify-center gap-10 items-start relative px-10 lg:px-0">
                <img src={Rectangle} alt="" className=" hidden lg:block" />
                <div>
                <img src={Rectangle2} alt="" className=" top-20 right-[700px] hidden lg:block" />
                    <img src="./img/Rectangle 37.png" alt="" />
                    <h2 className="font-semibold lg:text-[30px] text-[27px] py-4">What we believe in</h2>
                    <p className="text-[#7E8492] text-[17px]">Over the years at Sans, we’ve put a lot of thought into what it is
                        that makes us who we are. The qualities that unite us, that make us such an effective team, and...</p>
                    <button className="bg-[#1D1E25] text-white font-semibold mt-10 p-3 border rounded-3xl lg:px-10 px-5">
                        See Details &rarr;
                    </button>
                </div>
                <img src={Rectangle3} alt="" className="hidden lg:block" />
            </section>

            <section className="my-10">
                <div className="lg:flex lg:px-20 lg:justify-between items-center">
                    <h2 className="lg:text-[50px] text-[30px] font-semibold lg:w-[40%] mx-5 lg:mx-0 mt-10 lg:mt-0 text-center lg:text-left">
                        Powerful ideas & sales acceleration
                    </h2>
                    <p className="text-[#1D1E25] text-[20px] py-10 lg:w-[38%] w-[90%] ml-5 lg:ml-0 font-medium">
                        We are a software development firm specializing in digital products. We build beautiful, functional and cross-platform solutions that are accessible to all.
                    </p>
                </div>
            </section>

            <section className="my-[10%] lg:px-24 px-5">
                <h2 className="lg:text-[50px] text-[30px] font-semibold lg:w-[60%]">Meet our team of creators, designers, and world-class problem solvers</h2>
                <p className="text-[#7E8492] text-[15px] lg:w-[35%] py-4">To become the company that customers want, it takes a group of passionate people. Get to know the people who lead</p>

                <div className="flex justify-center gap-[30px] relative">
                    <div className="pt-20 lg:w-[33%] w-96">
                        <img src={Rectangle4} alt="" />
                        <h2 className="text-[20px] font-semibold flex justify-between pt-4">Arlyne Stefano <img src={media} alt="" /></h2>
                        <p className="text-[#7E8492] text-[15px] pt-2">Founder & CEO</p>
                    </div>
                    <img src="./img/Group 3260.png" alt="" className="absolute top-[200px] right-[740px] hidden lg:block" />
                    <div className="pt-20 w-[33%] hidden lg:block">
                        <img src={Rectangle5}  alt="" />
                        <h2 className="text-[20px] font-semibold flex justify-between pt-4">Katy Cristy <img src={media} alt="" /></h2>
                        <p className="text-[#7E8492] text-[15px] pt-2">Chief Technology Officer</p>
                    </div>
                    <div className="pt-20 w-[33%] hidden lg:block">
                        <img src={Rectangle6}  alt="" />
                        <h2 className="text-[20px] font-semibold flex justify-between pt-4">Roger Dzawin <img src={media} alt="" /></h2>
                        <p className="text-[#7E8492] text-[15px] pt-2">Chief Technology Officer</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:flex lg:px-20 lg:justify-between items-center">
                    <h2 className="lg:text-[40px] text-[25px] font-semibold lg:w-[40%] mx-5 lg:mx-0 mt-10 lg:mt-0">
                        Join our team, The one with the master touch
                    </h2>
                    <div className="text-[#7E8492] text-[17px] py-10 lg:w-[38%] w-[90%] ml-5 lg:ml-0 font-medium">
                        <p>We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values.</p>
                        <button className="text-black pt-10">See Open Position &rarr; </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
