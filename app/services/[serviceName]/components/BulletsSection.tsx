"use client"
import React from 'react';
import BulletCard from './BulletCard';
import { IconType } from 'react-icons/lib';
import { motion } from 'framer-motion';
import { getServiceIcon } from '@/data/services';


interface BulletsSectionProps {
    bullets: Array<{ icon: IconType, heading: string; description: string }>;
}

const BulletsSection: React.FC<BulletsSectionProps> = ({ bullets }) => {

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

        <div className='flex flex-col items-center py-16'>
            <h2 className='section-title'>
                Key Features & Benefits
            </h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                variants={container}
                className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {bullets.map((bullet, index) => {
                    const Icon = getServiceIcon(bullet.icon);
                    return (
                        <motion.div variants={item}>
                            <BulletCard key={index} Icon={Icon} heading={bullet.heading} description={bullet.description} />
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    );
};

export default BulletsSection;
