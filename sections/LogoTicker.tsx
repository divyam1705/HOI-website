"use client";
import Image from 'next/image';
import zoraLogo from '@/assets/logo.svg';
import gagLogo from '@/assets/9gag.svg';
import acer from '@/assets/acer.svg';
import accenture from '@/assets/accenture.svg';
import amazonwebservices from '@/assets/amazonwebservices.svg';
import adobe from '@/assets/adobe.svg';
import amazon from '@/assets/amazon.svg';
import adminer from '@/assets/adminer.svg';
import aiohttp from '@/assets/aiohttp.svg';
import { motion } from 'framer-motion';

export const LogoTicker = () => {

    const logos = [
        { src: gagLogo, alt: '9GAG Logo' },
        { src: acer, alt: 'Acer Logo' },
        { src: accenture, alt: 'Accenture Logo' },
        { src: amazonwebservices, alt: 'Amazon Web Services Logo' },
        { src: adobe, alt: 'Adobe Logo' },
        { src: amazon, alt: 'Amazon Logo' },
        { src: adminer, alt: 'Adminer Logo' },
        { src: aiohttp, alt: 'Aiohttp Logo' },
        { src: gagLogo, alt: '9GAG Logo' },
        { src: acer, alt: 'Acer Logo' },
        { src: accenture, alt: 'Accenture Logo' },
        { src: amazonwebservices, alt: 'Amazon Web Services Logo' },
        { src: adobe, alt: 'Adobe Logo' },
        { src: amazon, alt: 'Amazon Logo' },
        { src: adminer, alt: 'Adminer Logo' },
        { src: aiohttp, alt: 'Aiohttp Logo' },
    ];

    return <div>
        <div className='w-full py-12'>
            <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                <motion.div
                    className='flex gap-14 flex-none pr-14'
                    animate={{
                        translateX: "-50%",
                    }}
                    transition={
                        {
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'linear'
                        }
                    }
                >
                    {logos.map((logo, index) => (
                        <LogoImage key={index} src={logo.src} alt={logo.alt} />
                    ))}
                </motion.div>
            </div>
        </div>
    </div>
}


interface LogoImageProps {
    src: string;
    alt: string;
}
const LogoImage = ({ src, alt }: LogoImageProps) => {
    return <Image src={src} alt={alt} className="logo-ticker-image" />
}