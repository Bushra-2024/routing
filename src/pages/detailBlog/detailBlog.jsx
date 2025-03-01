import React from "react";
import round from '../../assets/Ellipse 15 (1).png'
import table from '../../assets/Rectangle 44.png'
import girl from '../../assets/Rectangle 45.png'
import media from '../../assets/Frame 1171275082.png'
function DetailBlog() {
  return (
    <div>
      <header>
        <h1 className="text-[30px] lg:text-[44px] mt-10 font-bold lg:w-[50%] w-full lg:mx-32 ">
          How we perform long-running tasks using AWS <br /> services
        </h1>
      </header>
      <main>
        <div className="flex flex-col lg:flex-row justify-around ml-3 mt-20">
          <div className="flex gap-5">
            <img src={round} alt="" />
            <div className="">
              <p className=" text-[20px] font-bold">Renee Wells</p>
              <p className="text-gray-500 text-[18px]">
                Product Designer, Quotient
              </p>
            </div>
          </div>
          <div className="">
            <span className="text-gray-500 text-start text-[18px] mt-5">
              10 min read November 10, 2023
            </span>
          </div>
        </div>
        <img src={table} alt="" className="m-auto py-10" />
        <p className="text-gray-500 m-auto lg:w-[60%] py-10 px-10">
          Depending on the input, this can result in using a lot of processing
          power and time. The whole process would take approximately 5 seconds
          to return a result to the client. Keep in mind we’re talking about 1
          item, a contact from a contact book. After a while, a new requirement
          is added. Solution must support companies that manage their contacts
          organized in files. We agreed to develop a web application that would
          support upload of dataset files, like .csv. The new web application
          should support third party integrations. Some of them are the ESP/CRM
          services, like Mailchimp. User does not need to see the result
          immediately. System can later notify the user about the result, when
          the process finishes. This information is the key that we need to
          leverage on when developing our solution. So here’s how we did it.
        </p>
        <div className="lg:w-[60%] m-auto px-10">
          <h2 className="text-[45px] font-bold ">Initial approach</h2>
          <p className="text-gray-500 m-auto py-10">
            Our initial approach went like this: The web application would read
            a .csv file line-by-line and submit an array of entries to the
            backend REST API. Processing is in real time, immediately after the
            user makes a request for the process to start, he expects a result.
            Another approach is to apply vertical scaling to AWS architecture.
            Meaning we used larger, more expensive instances that have more RAM
            and processing power. This system worked well for smaller datasets,
            maybe up to 5k entries, but for larger datasets multiple problems
            arose. This solution is prone to failure due to long request time.
            Also, because of some 3rd party services that aren’t optimized for
            large scale loads or they don’t have batch endpoints. 3rd party
            services also tend to protect their architecture from making a huge
            bill on their end. The whole process was done in real-time. The
            request can take a lot of time hanging in there while the backend
            would do all the work and return the result to the client. The
            request was limited to 300 seconds (at time of writing the article)
            before AWS would cancel it… Also I need to mention that the user has
            to wait a few minutes to see the results. They can’t use the app
            during the process, which makes for a bad user experience.
          </p>
        </div>

        <div className="flex justify-around mb-10 mt-5 lg:mb-3">
          <div className="flex gap-5">
            <img src={girl} alt="" />
            <div className="">
              <div className="flex items-baseline gap-[10px]">
                <img src={media} alt="" />{" "}
                <span className="hidden lg:block text-[18px] font-bold">
                  Share this article
                </span>
              </div>
              <p className="text-gray-500 text-[18px] py-2">Written by</p>
              <p className="text-[22px] font-bold py-1">Renee Wells</p>
              <p className="text-gray-500 text-[18px] py-1">
                Product Designer, Quotient
              </p>
            </div>
          </div>
        </div>
        <div className="px-3 lg:ml-[570px] lg:w-[480px] lg:mt-[-40px] mb-32">
          <p>
            Skilled in React Native, iOS and backend, Toni has a demonstrated
            knowledge of the information technology and services industry, with
            plenty of hands-on experience to back it up.
          </p>
        </div>
      </main>
    </div>
  );
}

export default DetailBlog;
