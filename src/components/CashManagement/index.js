import React from "react";
import Footer from "../Footer";

const CashManagement = () => {
  const services = [
    {
      title: "BUSINESS ONLINE & MOBILE BANKING",
      description:
        "Our suite of cash management tools was designed to save businesses time and money.",
      imgLink: "/images/services/s1.jpg",
    },
    {
      title: "MERCHANT SERVICES",
      description:
        "Maximize sales opportunities and accept electronic payments from major credit and debit cards.",
      imgLink: "/images/services/s2.jpg",
    },
    {
      title: "BUSINESS REMOTE DEPOSIT",
      description:
        "Deposit checks from your office with our remote deposit capture service.",
      imgLink: "/images/services/s3.jpg",
    },
    {
      title: "E-STATEMENTS",
      description:
        "Trade the paper statements for electronic statements to reduce clutter and opportunities for identity theft.",
      imgLink: "/images/services/s4.jpg",
    },
    {
      title: "ACH & CHECK POSITIVE PAY",
      description:
        "ACH and Check Positive Pay are automated fraud detection tools that identify unauthorized transactions before final payment.",
      imgLink: "/images/services/s5.jpg",
    },
    {
      title: "MOBILE WALLET",
      description:
        "Make payments with your smartphone using Apple Pay, Google Pay, and Samsung Pay.",
      imgLink: "/images/services/s6.jpg",
    },
  ];
  return (
    <div className="h-screen">
      <div>
        <div className="h-[40vh] w-full z-10 relative">
          <img
            src="/images/bg4.jpg "
            className="w-full h-full object-cover object-center"
          />
          <div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
              <h1 className="text-2xl text-white font-poppins lg:mx-20  items-center flex h-full mx-10  ">
                Cash Management & Business Services
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-[60vw] mx-auto text-center font-montserrat my-16 ">
          <h1>
            We offer a number of business services to support you and your
            business. These services offer easy and convenient ways to manage
            your finances to help you keep your time focused on the success of
            your business.
          </h1>
        </div>

        {/* cards */}

        <div className="flex flex-wrap gap-12 pb-20 justify-center items-center max-w-[80vw] mx-auto ">
          {services.map((service, index) => (
            <div key={index} className="w-[300px] ">
              <div className="relative rounded-sm border-t-[2rem] border-[#102c52]">
                <img
                  src={service.imgLink}
                  className="w-full h-[200px] object-cover object-center "
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-3">
                  <h1 className="text-white text-xl font-montserrat mb-4">
                    {service.title}
                  </h1>
                  <p className="text-white font-poppins">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:max-w-[60vw] max-w-[80vw] space-y-6 mx-auto text-center font-poppins my-10 ">
          <h1 className="text-sm">
            Some services may not be available for Money Market and Savings
            accounts due to transaction limitations.
          </h1>
          <p>
            HIMC Capital believes in creating amazing customer experiences with
            the best in banking online and in person so your financial goals
            become your reality. We're your community bank with several branches
            in Northeast Pennsylvania.
          </p>
        </div>
        <div className="max-w-[80vw]  mx-auto my-20 gap-12 flex lg:flex-row flex-col justify-between ">
            <div className="flex-1">
                <img src='/images/services/hero.jpg' className='w-full h-[300px] object-cover object-center rounded-md' />
            </div>
            <div className="space-y-3 flex-1">
                <h1 className="text-xs font-semibold font-poppins uppercase tracking-wide">ways to bank</h1>
                <h2 className="font-montserrat text-xl text-[#142b54]">Focus on what's important.</h2>
                <p className="font-montserrat">We offer a number of business services to support you and your business. These services offer easy and convenient ways to manage your finances to help you keep your time focused on the success of your business.</p>
                <button className="mt-10 underline font-semibold">Learn more about our many ways to bank</button>

            </div>

        </div>
      </div>
      <div className='border-t border-gray-300 pt-3'>
        <Footer />
      </div>
    </div>
  );
};

export default CashManagement;
