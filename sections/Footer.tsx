"use client";
import { useScrollContext } from '@/app/ScrollContext';
// import logo from '@/assets/zora-light.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiUserFollowFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsYelp } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";


export const Footer = () => {
    const { scrollToSection } = useScrollContext();
    return (
        <footer className='bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#3e340a,#0b0a05_66%)] border-t-[0.5px] border-t-[#D6CFB4] text-[#f4d5b2] text-sm py-10 text-center'>
            <div>
                {/* before:w-full before:content-[''] before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#FFDD9B,#2FD8FE,#df4e4e,#5b0303,#FFDD9B)] before:absolute */}
                {/* <div className="inline-flex relative"> */}
                {/* <Image className='relative bg-white rounded-md shadow-2xl' src={logo} alt="Zora Technologies Inc." width={45} height={45} /> */}
                {/* </div> */}
                {/* <nav className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
                    <Link className=' hover:text-white transition-all' href="/">Home</Link>
                    <Link className=' hover:text-white transition-all' href="/services">Services</Link>
                    <div onClick={() => scrollToSection("service")} className=' hover:text-white cursor-pointer transition-all'>Services</div>
                    <Link className=' hover:text-white transition-all' href="/about">About</Link>
                    <Link className=' hover:text-white transition-all' href="/contact">Contact</Link>
                </nav> */}
                <div className='grid grid-cols-1 gap-8 mt-6 md:grid-cols-4 md:justify-center md:px-20'>
                    <div className='text-sm text-neutral-300 flex flex-col items-center'>
                        <FaLocationDot className='text-[#c2986b] mb-3' size={30} />
                        <p className='text-xl mb-2  text-white'>Address</p>
                        <p>8501 Delmar Blvd.</p>
                        <p>St. Louis, MO 63124</p>
                    </div>
                    <div className='text-sm text-neutral-300 flex flex-col items-center'>
                        <IoCall className='text-[#c2986b] mb-3' size={30} />
                        <p className='text-xl mb-2  text-white'>Call</p>
                        <p>+1 (314) 567-6850</p>
                    </div>
                    <div className='text-sm text-neutral-300 flex flex-col items-center'>
                        <MdEmail className='text-[#c2986b] mb-3' size={30} />
                        <p className='text-xl mb-2  text-white'>Email</p>
                        <p>kumar@hoistl.com</p>
                    </div>
                    <div className='text-sm text-neutral-300 flex flex-col items-center'>
                        <RiUserFollowFill className='text-[#c2986b] mb-3' size={30} />
                        <p className='text-xl mb-2  text-white'>Follow</p>
                        <div className='flex gap-3 mt-1'>

                            <Link href={"https://www.facebook.com/hoistl"} >
                                <FaFacebookSquare className='hover:text-[#c2986b] transition-colors cursor-pointer' size={20} />
                            </Link>
                            <Link href={"https://www.instagram.com/house.of.india/"}>
                                <FaInstagram className='hover:text-[#c2986b] transition-colors cursor-pointer' size={20} />
                            </Link><Link href={"https://www.yelp.com/writeareview/biz/Yz4BD3vf8-d14j2T2FgYxA?return_url=%2Fbiz%2FYz4BD3vf8-d14j2T2FgYxA&source=biz_details_war_button"}>
                                <BsYelp className='hover:text-[#c2986b] transition-colors cursor-pointer' size={20} />
                            </Link>
                            <Link href={"http://search.google.com/local/writereview?placeid=ChIJM2gR2Lc034cRYQYzePQGwYE"}>
                                <FaGoogle className='hover:text-[#c2986b] transition-colors cursor-pointer' size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='mt-8 text-neutral-400'>
                    &copy; 2025 House Of India All rights reserved.
                </p>
            </div>
        </footer >
    );
}