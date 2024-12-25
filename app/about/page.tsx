"use client"
import GradualSpacing from '@/components/ui/gradual-spacing';
import React from 'react';
// import aboutImg from "@/assets/about-img.jpeg"
import Image from 'next/image';
import dynamic from 'next/dynamic';
import ValuesSection from './components/ValuesSection';
import { values } from '@/data/values';
import TeamSection from './components/TeamSection';
import team from '@/data/team';

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });



const AboutPage: React.FC = () => {


    const imageVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <div className='bg-white'>
            <div className="px-3 md:px-0 py-5 md:py-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#4c64bb,#EAEEFE_66%)]">
                <div className='section-heading '>
                    <div className='flex flex-col items-center gap-2 '>
                        <GradualSpacing
                            className="section-title mt-5 "
                            text="About Zora Technologies Inc."
                        />

                        <p className="section-description lg:min-w-[53rem] mt-2 ">
                            Empowering businesses through innovative data solutions and digital transformation.
                        </p>
                        <MotionDiv
                            initial="hidden"
                            animate="visible"
                            variants={imageVariants}
                            transition={{ duration: 0.5 }}
                        >
                            {/* <Image className='my-3 rounded-xl shadow-2xl' src={aboutImg} alt="About Zora Technologies Inc." /> */}
                        </MotionDiv>
                    </div>
                </div>
            </div>
            <div className='section-heading px-3 py-5 md:py-10 flex flex-col items-start my-3'>
                <h2 className=' section-title md:!text-4xl'>Who We Are ?</h2>
                <p className="section-text md:text-base mt-3">
                    Founded to help businesses harness the power of their data, Zora Technologies Inc. is a
                    global leader in data migration, data management, and digital transformation. With a
                    strong focus on SAP S/4 HANA migration and advanced data solutions, we work with organizations
                    across the globe to streamline their operations and future-proof their business.
                </p>
                <h3 className="section-title md:!text-4xl mt-5">Mission</h3>
                <p className="section-text md:text-base mt-3">To deliver cutting-edge data solutions that drive digital transformation and empower businesses to succeed in a data-driven world.</p>
                <h3 className="section-title md:!text-4xl mt-5">Vision</h3>
                <p className="section-text md:text-base mt-3">To be the global leader in innovative data management and digital transformation, setting the standard for quality and excellence.</p>

            </div>
            <ValuesSection values={values} />
            {/* <TeamSection team={team} /> */}
        </div>
    );
};

export default AboutPage;