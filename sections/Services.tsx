"use client";
import FoodCard from "@/components/FoodCard";
import ServiceCard from "@/components/ServiceCard";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurIn from "@/components/ui/blur-in";
import { FlipWords } from "@/components/ui/flip-words";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { dishes } from "@/data/featured";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


import { forwardRef } from "react";

export const Services = forwardRef<HTMLDivElement, {}>((props, serviceRef) => {
    const dynamicWords = ["Data Migration", "Data Archiving", "Master Data Management", "Data Integration"];

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
        <motion.section
            ref={serviceRef}
            id="service"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-16 px-5 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7b6717,#0b0a05_66%)]"
        >
            <div className="flex flex-col items-center ">
                <div className="section-heading">
                    <div className="flex flex-col  items-center">

                        <h2 className="section-title mt-5 ">
                            A Glimpse of Our Culinary Excellence
                        </h2>
                        {/* <FlipWords className="section-title mt-2 text-[#001E80]" words={dynamicWords} /> */}
                    </div>

                    <p className="section-description mt-3 p-3 leading-5">
                        Explore the dishes that have made us a culinary icon in St. Louis.                    </p>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                    variants={container}
                    className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10"
                >
                    {dishes.map((food) => (
                        <motion.div key={food.name} variants={item}>
                            <FoodCard food={food} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
});