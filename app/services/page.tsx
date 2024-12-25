"use client"
import GradualSpacing from '@/components/ui/gradual-spacing';
import React from 'react';
// import aboutImg from "@/assets/about-img.jpeg"
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { values } from '@/data/values';
import team from '@/data/team';
import { motion } from "framer-motion";
import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';


const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });



const ServicePage: React.FC = () => {

    const container = {
        hidden: { opacity: 1, scale: 0.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.3
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className='bg-white'>
            <div className="px-3 md:px-0 py-5 md:py-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7b6717,#0b0a05_66%)]">
                <div className=' '>
                    <div className='flex flex-col items-center gap-2 '>
                        <GradualSpacing
                            className="section-title mt-5 "
                            text="Data Solutions"
                        />

                        <p className="section-description lg:min-w-[53rem] mt-2 ">
                            From seamless migrations to robust data integration, we drive transformation.
                        </p>
                        <motion.div
                            // initial="hidden"
                            // whileInView="visible"
                            // viewport={{ once: true }}
                            transition={{ duration: 0.2 }}
                            variants={container}
                            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-14"
                        >
                            {services.map((service) => (
                                <motion.div key={service.name} variants={item}>
                                    <ServiceCard service={service} />
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;