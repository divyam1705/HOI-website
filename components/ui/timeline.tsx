"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "./button";

interface TimelineEntry {
    awardName: string;
    description: string;
    yearsWon: number[];
    logo: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="section-title ">
                    Our Achievements
                </h2>
                <p className="section-description mt-3">
                    House of India has been recognized time and time again for its exceptional flavors and unparalleled dining experience. Here are the awards we've proudly earned over the years.
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <div className="hidden md:block md:ml-20 ">
                                <Image
                                    src={item.logo}
                                    alt="startup template"
                                    width={2000}
                                    height={2000}
                                    className="rounded-lg object-cover h-18 w-24 md:h-40 md:w-52  border-yellow-900/[0.7] border shadow-yellow-500/[0.3] shadow-lg"
                                />
                            </div>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <div className="block md:hidden mb-5 ">
                                <Image
                                    src={item.logo}
                                    alt="startup template"
                                    width={2000}
                                    height={2000}
                                    className="rounded-lg object-cover h-28 w-40  border-yellow-900/[0.7] border "
                                />
                            </div>
                            <h3 className="award-title block md:text-3xl mb-1 text-left font-bold ">
                                {item.awardName}
                            </h3>
                            <h5 className="text-sm md:text-base leading-5 text-[#FFF8E6]/[0.6]">{item.description}{" "}</h5>
                            <div className="mt-7 max-w-md flex flex-wrap gap-2 ">
                                {item.yearsWon.map((year, idx) => (
                                    <Button
                                        size={"respLabel"}
                                        key={idx}
                                        variant={idx % 2 === 0 ? "outlineHoi" : "outlineHoi"}
                                    >
                                        {year}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-yellow-300 via-yellow-900 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div >
    );
};