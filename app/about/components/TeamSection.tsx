"use client"
import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from './TeamCard';


interface TeamSectionProps {
    team: Array<{ src: string, name: string; description: string; position: string; linkedin: string; }>;
}

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {

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
                Our Team
            </h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                variants={container}
                className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20">
                {team.map((member, index) => {
                    return (
                        <motion.div variants={item}>
                            <TeamCard key={index} src={member.src} name={member.name} linkedin={member.linkedin} description={member.description} position={member.position} />
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    );
};

export default TeamSection;