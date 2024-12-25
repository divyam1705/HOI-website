import React from 'react';
import { ContactForm } from './components/contact-form';
import Location from './components/location';

const ContactPage: React.FC = () => {
    return (
        <div className=' bg-white'>
            <div className='pt-8 pb-20 md:pt-5 md:pb-[6rem] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#4c64bb,#EAEEFE_66%)]'>
                <div className="section-heading px-3">
                    <h2 className="section-title mt-5">
                        We'd Love to Hear from You
                    </h2>
                    <p className="section-description mt-5 ">
                        Contact us today to discuss how we can help with your digital transformation journey.
                    </p>
                </div>
                <div className='mt-20 flex justify-center px-6 md:px-12 lg:px-[8rem] '>
                    <div className=" w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12">
                        <div className='flex flex-col items-start  md:items-start w-1/2 gap-6 max-w-[24rem] min-w-[80vw] md:min-w-[24rem] px-2'>
                            <h2 className=" section-title md:!text-4xl">
                                Contact Us
                            </h2>
                            <div className='text-start section-description text-base md:text-lg text-opacity-75 '>
                                Email, call, or complete the form to learn how Zora can solve your data migration challenges.
                            </div>
                            <div className='section-text text-opacity-70'>
                                Email: &nbsp;
                                <a href="mailto:sukhraj@zoratechinc.com" className="underline">
                                    sukhraj@zoratechinc.com
                                </a>
                            </div>
                            <div className='section-text text-opacity-70'>
                                USA Office:&nbsp; <a className=" underline" href="tel:+15714818861">(571) 481-8861</a>
                            </div>
                        </div>
                        <div className='flex justify-center w-1/2'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <Location />
        </div>
    );
};

export default ContactPage;