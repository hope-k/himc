import React from "react";
import Footer from "../Footer";

const Business = () => {
  const services = [
    {
      title: "BUSINESS LINE OF CREDIT",
      description:  "Manage your cash flow and access funding when you need it. Successful businesses have financing available with a business line of credit.",
        imgLink: "/images/business/s1.jpg",
    },
    {
      title: "BUSINESS TERM LOAN",
      description:
        "We offer competitive financing for everything your business might need to succeed.",
      imgLink: "/images/business/s2.jpg",
    },
    {
      title: "BUSINESS VEHICLE LOAN",
      description:
        "Be smart and avoid putting unnecessary wear and tear on your employee's personal cars or trucks.",
      imgLink: "/images/business/s3.jpg",
    },
    {
      title: "BUSINESS EQUIPMENT LOAN",
      description:
        "Whether you just need an upgrade, or you want to start brand new, we offer competitive financing.",
      imgLink: "/images/business/s4.jpg",
    },
    {
      title: "CAPITAL IMPROVEMENT LOAN",
      description:
        "Get competitive financing for point of sale or seasonal upgrades, expansion, repairs, and much more.",
      imgLink: "/images/business/s5.jpg",
    },
    {
      title: "COMMERCIAL REAL ESTATE LOAN",
      description:
        "Our experienced commercial lenders understand the markets we serve and will work hard to land you a deal.",
      imgLink: "/images/business/s6.jpg",
    },
    {
        title: "ACQUISITION FINANCING",
        description: 'Start expanding your business horizons with the help of acquisition financing — a sound way to purchase an established business.',
        imgLink: "/images/business/s7.jpg",
    }, 
    {
        title: "BUSINESS CREDIT CARD",
        description: "Choose from our popular business credit card options to find the one that works best for your business.",
        imgLink: "/images/business/s8.jpg",
    },
    {
        title: "FIND A LOCATION",
        description: "Find one of our several locations or ATMs nearest you. We're also only a phone call away!",
        imgLink: "/images/business/s9.jpg",
    }
  ];
  return (
    <div className="h-screen">
      <div>
        <div className="h-[40vh] w-full z-10 relative">
          <img
            src="/images/bg3.jpg "
            className="w-full h-full object-cover object-center"
          />
          <div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
              <h1 className="text-2xl text-white font-poppins lg:mx-20  items-center flex h-full mx-10  ">
                Business Lending
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-[60vw] mx-auto text-center font-montserrat my-16 ">
          <h1>
          HIMC Capital has customized solutions to help your business grow. We provide flexible financing options for a variety of business needs. Our expert lending team will partner with you to understand your business and create a solution to take your business to the next level. 
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
        
          <p>
            HIMC Capital believes in creating amazing customer experiences with
            the best in banking online and in person so your financial goals
            become your reality. We're your community bank with several branches
            in Northeast Pennsylvania.
          </p>
        </div>
        <div className="max-w-[80vw]  mx-auto my-20 gap-12 flex lg:flex-row flex-col justify-between ">
            <div className="flex-1">
                <img src='/images/business/hero.jpg' className='w-full h-[300px] object-cover object-center rounded-md' />
            </div>
            <div className="space-y-3 flex-1">
                <h1 className="text-xs font-semibold font-poppins uppercase tracking-wide">news</h1>
                <h2 className="font-montserrat text-xl text-[#142b54] uppercase">keep up to date with us</h2>
                <p className="font-montserrat">Learn about all of the exciting things going on at HIMC Capital on our News page.</p>
                <button className="mt-10 underline font-semibold">Find out what's new</button>

            </div>

        </div>
      </div>
      <div className='border-t border-gray-300 pt-3'>
        <Footer />
      </div>
    </div>
  );
};

export default Business;
