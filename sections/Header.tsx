"use client";
import Logo from "@/assets/HOI-logo-cropped.png"
import Image from "next/image";
import { NavigationMenuHelper } from "./NavigationMenu";
import { SliderMenu } from "./SliderMenu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { useScrollContext } from "@/app/ScrollContext";



export const Header = () => {
    // const waterFall = Waterfall({
    //     subsets: ["latin"],
    //     weight: "400"
    // });

    return (
        <header className=" top-0  z-50 bg-black  text-[#f4d5b2] ">
            <div className="flex items-center justify-center py-3 px-4">
                <div className=" container ">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <div className="flex gap-4 items-center">

                                <Image className="rounded-md w-16 md:w-16" src={Logo} alt="HOI Logo" height={214} width={123} unoptimized />

                            </div>
                        </Link>
                        <SliderMenu />
                        <div className="hidden md:flex"><NavigationMenuHelper setIsOpen={() => { }} /></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

