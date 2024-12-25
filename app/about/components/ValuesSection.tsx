"use client"
import React from 'react';
import ValueCard from './ValueCard';
import { IconType } from 'react-icons/lib';
import { motion } from 'framer-motion';
import { getValueIcon } from '@/data/values';


interface ValuesSectionProps {
    values: Array<{ icon: string, heading: string; description: string }>;
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ values }) => {

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

        <div className='flex flex-col items-center py-5'>
            <h2 className='section-title'>
                Our Values
            </h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                variants={container}
                className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {values.map((value, index) => {
                    const Icon = getValueIcon(value.icon);
                    return (
                        <motion.div variants={item}>
                            <ValueCard key={index} Icon={Icon} heading={value.heading} description={value.description} />
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    );
};

export default ValuesSection;