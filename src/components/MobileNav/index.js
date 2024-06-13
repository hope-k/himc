import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";
import gsap from "gsap";
import { BiTransfer } from "react-icons/bi";
import { FaFileInvoice } from "react-icons/fa";
import { GiHistogram } from "react-icons/gi";
import { HiOutlineLogout } from "react-icons/hi";
import { BsEnvelope, BsCashCoin, BsQuestionCircle } from "react-icons/bs";
import { VscRemote } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/Slices/authSlice";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { InformationCircleIcon } from "@heroicons/react/outline";

const MobileNav = ({ open, toggleOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const t1 = React.useRef();

  useLayoutEffect(() => {
    t1.current = gsap
      .timeline({ paused: true, defaults: { duration: 0.55 } })
      .to("#menu", {
        xPercent: 100,
        ease: "expo.out",
      });
  }, []);

  useEffect(() => {
    if (open) {
      t1.current.play();
    } else {
      t1.current.reverse();
    }
  }, [open, t1]);
  const logoutUser = () => {
    dispatch(logout());
    navigate(0);
  };

  const menus = [
    {
      title: "Personal",
      submenus: [
        {
          name: "Checking",
          // link: "https://www.thedime.bank/personal/checking",
          link: '/sign-in'
        },
        {
          name: "Savings & CDs",
          // link: "https://www.thedime.bank/personal-savings-and-cds",
          link: '/sign-in'

        },
        {
          name: "Online & Mobile Banking",
          // link: "https://www.thedime.bank/personal/online-and-mobile-banking",
          link: '/sign-in'

        },
        {
          name: "Credit Cards",
          // link: "https://www.thedime.bank/credit-cards",
          link: '/sign-in'

        },
        {
          name: "Debit Cards",
          // link: "https://www.thedime.bank/debit-card",
          link: '/sign-in'

        },
      ],
    },
    {
      title: "Lending",
      submenus: [
        {
          name: "Business",
          // link: "https://www.thedime.bank/business/lending",
          link: "/business",
        },
        {
          name: "Loan Payment Options",
          // link: "https://www.thedime.bank/loan-payment-options",
          link: "/loan-payment-options",
        },
        {
          name: "Financial Calculators",
          // link: "https://www.thedime.bank/financial-calculators",
          link: '/sign-in'

        },
      ],
    },
    {
      title: "Business",
      submenus: [
        {
          name: "Order checks",
          // link: "https://orderpoint.deluxe.com/personal-checks/welcome.htm",
          link: '/sign-in'

        },
        {
          name: "Checking",
          // link: "https://www.thedime.bank/business/checking",
          link: '/sign-in'

        },
        {
          name: "Cash Management & Business Services",
          // link:"https://www.thedime.bank/business/cash-management-and-business-services"
          link: "/cash-management",
        },
      ],
    },
    {
      title: "Digital",
      submenus: [
        {
          name: "Personal Digital Banking",
          // link: "https://www.thedime.bank/personal/online-and-mobile-banking",
          link: '/sign-in'

        },
        {
          name: "Business Digital Banking",
          // link: "https://www.thedime.bank/business/cash-management-and-business-services",
          link: '/sign-in'

        },
        {
          name: "Digital banking Tutorials",
          // link: "https://www.thedime.bank/digital-banking-tutorials",
          link: '/sign-in'

        },
      ],
    },
    {
        title: "Customer Support",
        submenus: [
          {
            name: "Contact Us",
            // link: "https://www.thedime.bank/contact-us-securely",
            link: '/sign-in'

          },
          {
            name: "Lost or Stolen Card",
            // link: "https://www.thedime.bank/debit-card",
            link: '/sign-in'

          }
       
        ],

    },
    {
      title: "Account",
      submenus: [{ name: "Open an Account", link: "/register" }],
    },
  ];

  return (
    <>
      <div
        id="menu"
        className="bg-white h-[100dvh] w-[70%] fixed top-0 px-0 lg:hidden z-[81] translate-x-[-100%] rounded-tr-lg rounded-br-lg  drop-shadow-xl"
      >
        <div className="px-4 mt-2">
          <div
            className="w-8 fixed right-0 top-4 mr-3 z-[1]"
            onClick={() => toggleOpen()}
          >
            <XIcon />
          </div>
          <div className=" cursor-pointer">
            <Link to="/" className=" z-[-1] relative top-[2.3rem]">
              <div className="">
                <img className="" src="/hacketthill.png" alt="logo" />
              </div>
            </Link>
          </div>
          {
            //<div className='mt-4'>
            //   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute " viewBox="0 0 20 20" fill="currentColor">
            //       <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            //   </svg>
            //   <input
            //       type='text'
            //       placeholder='Search'
            //       className='border-b border-gray-400 bg-slate-100 pl-8 pb-1'
            //  />
            //</div>
          }
        </div>
        {user && user?.role?.includes("admin") ? (
          <div className="container  w-full  flex-col flex justify-center text-gray-600 font-semibold items-center duration-200 h-full">
            <Link
              onClick={() => toggleOpen()}
              to={"/admin/users"}
              className={
                " rounded-md duration-500  p-2 my-4 " +
                (location.pathname === "/admin/users" &&
                  "bg-teal-600 text-white  ")
              }
            >
              Users
            </Link>
            <Link
              onClick={() => toggleOpen()}
              to={"/admin/transactions"}
              className={
                " rounded-md  p-2 my-4 duration-500 " +
                (location.pathname === "/admin/transactions" &&
                  "bg-teal-600 text-white ")
              }
            >
              Transactions
            </Link>
            <Link
              onClick={() => toggleOpen()}
              to={"/admin/statistics"}
              className={
                " rounded-md  p-2 my-4 duration-500 " +
                (location.pathname === "/admin/statistics" &&
                  "bg-teal-600 text-white ")
              }
            >
              Statistics
            </Link>
            <Link
              onClick={() => toggleOpen()}
              to={"/admin/accounts"}
              className={
                " rounded-md  p-2 my-4 duration-500 whitespace-nowrap " +
                (location.pathname === "/admin/accounts" &&
                  "bg-teal-600 text-white ")
              }
            >
              User Bank Account
            </Link>
            <Link
              onClick={() => toggleOpen()}
              to={"/admin/deposit"}
              className={
                " rounded-md  p-2 my-4 duration-500 whitespace-nowrap " +
                (location.pathname === "/admin/deposit" &&
                  "bg-teal-600 text-white ")
              }
            >
              Deposit Money
            </Link>
            <Link
              onClick={() => toggleOpen()}
              to={"/admin/messages"}
              className={
                " rounded-md  p-2 my-4 duration-500 " +
                (location.pathname === "/admin/messages" &&
                  "bg-teal-600 text-white ")
              }
            >
              Send Messages
            </Link>
            <div
              onClick={() => logoutUser()}
              className="text-red-500 cursor-pointer my-4"
            >
              Log Out
            </div>
          </div>
        ) : (
          <div className="container w-full flex flex-col h-full pt-[8rem] font-montserrat">
            <div className="font-semibold w-full">
              {/* Unauthenticated Links */}
              {!isAuthenticated && (
                <>
                  {menus?.map((m, i) => (
                    <div className="mb-1">
                      <div
                        onClick={() => toggleMenu(m?.title)}
                        className="flex justify-between items-center px-6 py-3 cursor-pointer border-b border-gray-200"
                      >
                        <span className="text-sm">{m?.title}</span>
                        <motion.div
                          initial={false}
                          animate={{ rotate: openMenu === "bank" ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDownIcon className="h-5 w-5" />
                        </motion.div>
                      </div>
                      {openMenu === m?.title && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{
                            height: "auto",
                            transition: {
                              duration: 0.3,
                              type: "spring",
                              bounce: 0,
                            },
                          }}
                          className="overflow-hidden bg-gray-100"
                        >
                          {menus
                            ?.filter((m) => m.title === openMenu)
                            ?.map((m, i) =>
                              m?.submenus?.map((sm, i) => (
                                <Link
                                  to={sm?.link}
                                  className="block px-8  py-2 text-sm font-medium text-gray-700 border-b border-gray-200 "
                                >
                                  {sm?.name}
                                </Link>
                              ))
                            )}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </>
              )}

              {/* Authenticated Links */}
              {isAuthenticated && (
                <>
                  <Link
                    to="/account/dashboard"
                    onClick={() => toggleOpen()}
                    className={`duration-500 px-4 py-[0.62rem] mb-6 flex ${
                      location.pathname === "/account/dashboard" &&
                      "bg-[#74b3e750] font-semibold border-l-[5.5px] border-green-600"
                    }`}
                  >
                    <div className="flex items-center">
                      <FaFileInvoice className="mr-3 text-lg text-[#3ebde4]" />
                      Account Summary
                    </div>
                  </Link>

                  <Link
                    to="/account/transfer"
                    onClick={() => toggleOpen()}
                    className={`duration-500 px-6 py-[0.62rem] mb-6 flex ${
                      location.pathname === "/account/transfer" &&
                      "bg-[#74b3e750] font-semibold border-l-[5.5px] border-green-600"
                    }`}
                  >
                    <div className="flex items-center">
                      <BiTransfer className="mr-1 text-2xl text-[#3ebde4]" />
                      Transfer Funds
                    </div>
                  </Link>

                  <Link
                    to="/account/transactions"
                    onClick={() => toggleOpen()}
                    className={`duration-500 px-6 py-[0.62rem] mb-6 flex ${
                      location.pathname === "/account/transactions" &&
                      "bg-[#74b3e750] font-semibold border-l-[5.5px] border-green-600"
                    }`}
                  >
                    <div className="flex items-center">
                      <GiHistogram className="mr-1 text-2xl text-[#3ebde4]" />
                      Transactions
                    </div>
                  </Link>

                  <Link
                    to="/account/messages"
                    onClick={() => toggleOpen()}
                    className={`duration-500 mb-5 flex items-center px-6 py-[0.62rem] ${
                      location.pathname === "/account/messages" &&
                      "bg-[#74b3e750] font-semibold border-l-[5.5px] border-green-600"
                    }`}
                  >
                    <BsEnvelope className="mr-2 text-2xl text-[#3ebde4]" />
                    Messages
                  </Link>

                  <Link
                    to="/account/payments"
                    onClick={() => toggleOpen()}
                    className={`duration-500 mb-5 flex items-center px-6 py-[0.62rem] ${
                      location.pathname === "/account/payments" &&
                      "bg-[#74b3e750] font-semibold border-l-[5.5px] border-green-600"
                    }`}
                  >
                    <BsCashCoin className="mr-2 text-2xl text-[#3ebde4]" />
                    Payments
                  </Link>

                  <div className="mb-5 flex items-center px-6 py-[0.62rem]">
                    <VscRemote className="mr-2 text-2xl text-[#3ebde4]" />
                    Remote Deposits
                  </div>

                  <a
                    href="mailto:hacketthillcapital@support.com"
                    className="mb-5 flex items-center px-6 py-[0.62rem]"
                  >
                    <BsQuestionCircle className="mr-2 text-2xl text-[#3ebde4]" />
                    Support
                  </a>

                  <div
                    onClick={() => toggleOpen()}
                    className="px-6 py-[0.62rem] mb-6 flex"
                  >
                    <div
                      className="flex items-center"
                      onClick={() => logoutUser()}
                    >
                      <HiOutlineLogout className="mr-1 text-2xl text-red-600" />
                      Sign Out
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="absolute bottom-0 px-4 mt-4">
              <h1 className="text-gray-500 border-t border-gray-300 text-xs">
                Language: English
              </h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
