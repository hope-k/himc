import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='flex bg-[#fff] shadow-lg lg:px-[6rem] px-[2rem] lg:h-[50vh] flex-wrap w-full'>
            <div className='mt-[3rem] flex flex-col'>
                <div className='w-[300px] h-[300px] absolute'>
                    <img src='/hacketthill.png' alt='logo' />
                </div>
                <p className='font-light relative top-[6.5rem] max-w-lg text-[15px] text-[#6084a4]'>
                    We’re a leading international banking group committed to building a sustainable business over the long-term. We operate in some of the world's most dynamic markets and have been for over 75 years.
                </p>
            </div>

            <div className='lg:mt-[3rem] lg:mx-[2rem] mt-[8rem]'>
                <h1 className='font-semibold text-lg mb-3'>Quick Links</h1>
                <ul className='text-[#6084a4] leading-5 text-[15px]'>
                    <li><Link to='/sign-in' className='cursor-pointer'>Online Banking</Link></li>
                    <li><Link to='/sign-in' className='cursor-pointer'>Credit Cards</Link></li>
                    <li><Link to='/register' className='cursor-pointer'>Apply Now</Link> </li>
                    <li><Link to='/sign-in' className='cursor-pointer'>Loans</Link></li>
                </ul>
            </div>

            <div className='mt-[3rem] lg:mx-[2rem]'>
                <h1 className='font-semibold text-lg mb-3'>Address</h1>
                <ul className='text-[#6084a4] max-w-lg text-[12px]'>
                    <ul>
                        <li><b>United Kingdom :</b>31 Hurst St, Birmingham B5 4BD, UK</li>
                        <li><b>Phone : </b> +44 74 76487323</li>
                    </ul>
                    <ul>
                        <li><b>Poland :</b> ul. Prosta 18, 00-850 Warszawa</li>
                        <li><b>Phone : </b> +48 22 829 00 00</li>
                    </ul>
                    <ul className='my-3'>
                        <li><b>New Zealand :</b> Victoria St West, Auckland CBD Auckland 1010, New Zealand</li>
                        <li><b>Phone : </b> +60166322306</li>
                    </ul>
                    <ul>
                        <li><b>China address :</b> 5016 Shennan E Rd Luo Hu Qu, Shen Zhen Shi, Guang Dong Sheng, China, 518010
                        </li>
                        <li><b>Phone:</b> +86 42 6592 2681</li>
                    </ul>
                    <ul>
                        <li><b>Malaysia:</b> 157, Jln Ampang, Kuala Ampang, 55000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia
                        </li>
                        <li><b>Phone:</b> +86 42 6592 2681</li>
                    </ul>
                    <ul>
                        <li><b>Norway:</b> Støperigata 0250 Oslo, Norway
                        </li>
                    </ul>
                </ul>

            </div>


            <div className='w-full flex justify-center border-t border-gray-300 pt-[10px] lg:pt-[20px]'>
                <span className='text-[#6084a4] text-sm font-light'>Copyright © 2024 HIMC Capital </span>
            </div>
        </div>
    )
}

export default Footer