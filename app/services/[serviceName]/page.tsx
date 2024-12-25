import { services } from '@/data/services';
import React from 'react';
import Banner from './components/Banner';
import BulletsSection from './components/BulletsSection';
import GradualSpacing from '@/components/ui/gradual-spacing';


interface ServicePageProps {
    params: {
        serviceName: string;
    };
}
const ServicePage: React.FC<ServicePageProps> = ({ params: { serviceName } }) => {
    const service = services.find((service) => service.linkName === serviceName);
    if (!service) {
        return <div>Service not found</div>;
    }
    const { name, description, longerDescription, longerBulletPoints, href, src } = service;

    const convertToBulletArray = () => {
        return Object.entries(longerBulletPoints).map(([heading, { icon: Icon, description }]) => ({
            heading,
            description,
            icon: Icon,
        }));
    };
    return (
        <div className=' bg-white'>
            <div className='pt-8 pb-20 md:pt-5 md:pb-[6rem] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#4c64bb,#EAEEFE_66%)]'>
                <div className='mt-10 flex justify-center px-6 md:px-16  '>
                    <div className=" w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12">
                        <div className='flex flex-col items-start  md:items-start md:w-6/12 gap-6 '>
                            <GradualSpacing
                                className="section-title !text-4xl md:!text-5xl py-1"
                                text={name}
                            />
                            <div className='text-start section-description text-lg md:text-xl py-1'>
                                {description}
                            </div>
                            <div className='text-start section-description text-base md:text-lg  '>
                                {longerDescription}
                            </div>
                        </div>
                        <div className='flex justify-center md:w-6/12 '>
                            <Banner src={src}></Banner>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <BulletsSection bullets={convertToBulletArray()} />
            </div>
        </div>
    );
};

export default ServicePage;