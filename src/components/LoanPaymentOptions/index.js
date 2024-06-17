import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Footer";

const LoanPaymentOptions = () => {
  const [currentOption, setCurrentOption] = useState(null);

  const handleOptionClick = (index) => {
    if (index === currentOption) {
      setCurrentOption(null);
    } else {
      setCurrentOption(index);
    }
  };

  const options = [
    {
      title: "online banking",
      content: (
        <div className="space-y-6">
          <span>
            Conveniently transfer funds from your HIMC Capital checking or savings
            account to pay your loan. You can even set these to recur monthly!
          </span>
          <ul className="list-disc list-inside">
            <li>Log in to your online banking account (LOGIN button above)</li>
            <li>Click the Transfer tab</li>
            <li>Select the loan to want to transfer your funds to</li>
            <li>Enter your payment amount</li>
            <li>Select Submit</li>
          </ul>
          <p>
            You can set this transfer to recur each month that your payment is
            due by selecting More and changing the frequency to Monthly, then
            pick your date and select Submit.
          </p>
        </div>
      ),
    },
    {
      title: "automatic payments",
      content: (
        <div>
          You can set this transfer to recur each month that your payment is due
          by selecting More and changing the frequency to Monthly, then pick
          your date and select Submit.
        </div>
      ),
    },
    {
      title: "online payment portal",
      content: (
        <div>
          Use<span className="underline"> Online Payment Portal</span> to make a
          loan payment.
        </div>
      ),
    },
    {
      title: "in-person",
      content: (
        <div>
          Visit{" "}
          <span className="underline">HIMC Capital branch locations.</span>{" "}
        </div>
      ),
    },
    {
      title: "by phone",
      content: (
        <div>
          <span>
            Transfer funds at no cost to you from another HIMC Capital account
            through our toll-free telephone banking service, 
          </span>
          
        
        </div>
      ),
    },
    {
      title: "by mail",
      content: (
        <a href='mailto:support@himccapital.com'>
          support@himccapital.com
        </a>
      ),
    },
  ];
  return (
    <div>
      <div className="h-[40vh] w-full z-10 relative">
        <img
          src="/images/bg6.jpg "
          className="w-full h-full object-cover object-center"
        />
        <div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
            <h1 className="text-2xl text-white font-poppins lg:mx-20  items-center flex h-full mx-10  ">
              Loan Payment Options
            </h1>
          </div>
        </div>
      </div>
      <div className="lg:ml-[10vw] max-w-[90vw] mt-20 mx-auto">
        <div className="flex flex-col lg:flex-row  w-full h-full gap-20">
          <div className="flex-[1.8]">
            <h3 className="font-poppins mb-6">
              HIMC Capital offers several convenient ways for you to pay down or
              make a payment on your HIMC Capital loan(s). We appreciate you
              choosing HIMC Capital and offer you easy and secure options to
              repay your loans.
            </h3>

            <div>
              {options.map((option, index) => (
                <div key={index} className="mb-2">
                  <button
                    className="text-lg flex justify-between mb-0 p-4 rounded-sm text-gray-500 font-semibold w-full border border-gray-200 text-left  font-poppins uppercase"
                    onClick={() => handleOptionClick(index)}
                  >
                    {option.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`size-6 ${
                        currentOption === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  {currentOption === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-10 my-10"
                    >
                      {option.content}
                    </motion.div>
                  )}
                </div>
              ))}
              <span className="text-center text-gray-500">
                Thank you for choosing HIMC Capital
              </span>
            </div>
          </div>

          <div className="flex-[1] space-y-14 max-w-full pr-10">
            <button className="p-4 bg-[#142b54] text-xs font-semibold uppercase text-white rounded">
              information request
            </button>

            <div className="space-y-3">
              <h1 className="font-semibold font-sm uppercase text-gray-500">
                locations
              </h1>
              <div>
                Find one of our several locations or ATMs nearest you. We're
                also only a phone call away!
              </div>
              <button className="p-4 bg-[#142b54] text-xs font-semibold uppercase text-white rounded">
                find a location
              </button>
            </div>
            <div className="space-y-3">
              <h1 className="font-semibold font-sm uppercase text-gray-500">
                contact us securely
              </h1>
              <div>
              If you need to exchange sensitive information, we request that you visit one of our branch locations or call us. For non-sensitive information you may contact us online
              </div>
              <button className="p-4 bg-[#142b54] text-xs font-semibold uppercase text-white rounded">
                contact us 
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[80vw]  mx-auto my-20 gap-12 flex lg:flex-row flex-col justify-between ">
        <div className="flex-1">
          <img
            src="/images/loan-options/sub.jpg"
            className="w-full h-[300px] object-cover object-center rounded-md"
          />
        </div>
        <div className="space-y-3 flex-1">
          <h1 className="text-xs font-semibold font-poppins uppercase tracking-wide">
            calculators
          </h1>
          <h2 className="font-montserrat text-xl text-[#142b54]">
            Making it easy to manage your money.
          </h2>
          <p className="font-montserrat">
            Use our financial calculators to create a budget, compare loan
            costs, and plan for your future.
          </p>
          <button className="mt-10 underline font-semibold">
            Check out our Financial Calculators
          </button>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default LoanPaymentOptions;
