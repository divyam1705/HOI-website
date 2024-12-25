"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    onClick,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative ">
            <motion.p
                onClick={onClick}
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-base rounded-md px-4 py-2 hover:bg-black/10  text-[#D6CFB4] hover:opacity-[0.9] dark:text-white"
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0, z: 1000 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className=" absolute top-[calc(100%)]   transform -translate-x-1/2 ">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth animation
                                className=" bg-black text-white rounded-2xl overflow-hidden border border-[#D6CFB4] dark:border-white/[0.2] shadow-xl"
                            >
                                <motion.div
                                    layout // layout ensures smooth animation
                                    className="w-max h-full p-4 text-[#D6CFB4]"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className=" flex space-x-2 hover:bg-black/5 md:p-1 rounded-lg ">
            <Image
                src={src}
                width={120}
                height={50}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl hidden md:block "
            />
            <div className="w-full">
                <h4 className="text-sm md:text-base text-center font-bold mb-1 text-white dark:text-white">
                    {title}
                </h4>
                <p className=" text-neutral-700 text-center text-xs  md:max-w-[14.5rem] dark:text-neutral-300 hidden md:block">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const GiftCardItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className=" flex space-x-2 hover:bg-black/5 md:p-1 rounded-lg ">
            <Image
                src={src}
                width={120}
                height={50}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl hidden md:block "
            />
            <div className="w-full">
                <h4 className="text-sm md:text-base text-center font-bold mb-1 text-white dark:text-white">
                    {title}
                </h4>
                <p className=" text-neutral-700 text-center text-xs  md:max-w-[14.5rem] dark:text-neutral-300 hidden md:block">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-neutral-700 dark:text-neutral-200 hover:text-black "
        >
            {children}
        </Link>
    );
};
