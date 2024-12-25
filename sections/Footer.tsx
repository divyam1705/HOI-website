"use client";
import { useScrollContext } from '@/app/ScrollContext';
// import logo from '@/assets/zora-light.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
    const { scrollToSection } = useScrollContext();
    return (
        <footer className='bg-black border-t-[1px] border-t-[#D6CFB4] text-[#f4d5b2] text-sm py-10 text-center'>
            <div>
                {/* before:w-full before:content-[''] before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#FFDD9B,#2FD8FE,#df4e4e,#5b0303,#FFDD9B)] before:absolute */}
                <div className="inline-flex relative">
                    {/* <Image className='relative bg-white rounded-md shadow-2xl' src={logo} alt="Zora Technologies Inc." width={45} height={45} /> */}
                </div>
                <nav className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
                    {/* <Link className=' hover:text-white transition-all' href="/">Home</Link> */}
                    {/* <Link className=' hover:text-white transition-all' href="/services">Services</Link> */}
                    {/* <div onClick={() => scrollToSection("service")} className=' hover:text-white cursor-pointer transition-all'>Services</div> */}
                    {/* <Link className=' hover:text-white transition-all' href="/about">About</Link> */}
                    {/* <Link className=' hover:text-white transition-all' href="/contact">Contact</Link> */}
                </nav>
                <p className='mt-6'>
                    &copy; 2025 House Of India All rights reserved.
                </p>
            </div>
        </footer >
    );
}