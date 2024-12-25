"use client"
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import dynamic from "next/dynamic";
import { MdBrunchDining } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import hoiCover from "@/assets/indian-f2.webp";
import { sampleArcs, globeConfig } from "@/data/globe-config";
import Link from "next/link";
import { Waterfall } from "next/font/google";
import FoodSlider from "@/components/FoodSlider";
import BlurIn from "@/components/ui/blur-in";

const waterFall = Waterfall({
    subsets: ['latin'],
    weight: ['400']
});

export const Hero = () => {

    const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
        ssr: false,
    });

    return (
        // pt-8 pb-20 md:pt-5 md:pb-[6rem]
        // bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#8D0B41,#ebe2e6_66%)]
        <section className=" bg-black">

            <div className="md:px-14 md:py-12 flex flex-col md:flex-row  gap-5">
                <div className="md:w-1/2 flex flex-col  justify-center items-center ">
                    <div className="b-10 md:-mt-16">
                        <h1 className={`${waterFall.className}    text-[#f4d5b2] text-center text-[6rem] md:text-[6rem] lg:text-[9rem] font-bold px-3  md:py-1 tracking-tighter bg-clip-text`}>
                            <BlurIn
                                word="House of India"
                                className={`${waterFall.className}    text-[#f4d5b2] text-center text-[6rem] md:text-[6rem] lg:text-[9rem] font-bold px-3  md:py-1 tracking-tighter bg-clip-text`}
                            />
                            {/* House of India */}
                            <h1 className={`${waterFall.className} -ml-[16rem]  text-[#f4d5b2]  text-3xl md:text-4xl  font-bold border-[#222]/10 px-3 py-1 tracking-tighter bg-clip-text -mt-8 md:-mt-10 lg:-mt-10`}>
                                - since 1995
                            </h1>
                        </h1>

                        <h2 className="mt-5 px-8 text-justify md:px-16 lg:px-24 text-gray-500 font-semibold tracking-wider ">
                            House of India has proudly served St. Louis since 1995, earning a legacy of excellence with over <span className="text-[#f4d5b2]">25 prestigious awards</span>, including multiple wins from <em className="text-gray-400">Saint Louis Magazine, Sauce Magazine, and Riverfront Times</em>. Renowned for offering some of the best Indian cuisine in the U.S., we are honored to have built a loyal community of patrons who have shared milestones and memories with us over the decades. Conveniently located in University City, we invite you to experience the vibrant flavors and warm hospitality that have made us a cherished destination for nearly 30 years.
                        </h2>
                    </div>
                    <div className=" flex gap-4 md:gap-4 items-center my-[30px]">
                        <Link href="/" legacyBehavior passHref>
                            <Button className="dark" size={"resp"} variant={"outlineHoiAlt"}>
                                <GiForkKnifeSpoon className="mr-2 w-8 h-5" />
                                Order
                                <span className="hidden md:block ml-1">
                                    Now
                                </span>
                            </Button>
                        </Link>
                        <Link href="/" legacyBehavior passHref>
                            <Button className="" size={"resp"} variant={"outlineHoi"}>
                                <BiFoodMenu className="mr-2 w-8 h-5" />

                                <span className="hidden md:block mr-1">
                                    View
                                </span>
                                Menu
                            </Button>
                        </Link>
                        <Link href="/" legacyBehavior passHref>
                            <Button className="" size={"resp"} variant={"outlineHoiAlt"}>
                                <MdBrunchDining className="mr-2 w-8 h-5" />
                                Book
                                <span className="hidden md:block ml-1">
                                    a Table
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                    {/* <img src={hoiCover.src} alt="Cover Photo" className="md:rounded-xl bg-black opacity-70 shadow-2xl aspect-[16/9] object-cover" /> */}
                    <FoodSlider />
                </div>
            </div>
            {/* <video
                className="  w-full h-full object-cover "
            >
                <source src={"../assets/HOI-video.mp4"} type="video/mp4" />

                Your browser does not support the video tag.
            </video> */}
            <div className="flex justify-center px-6 md:px-12 lg:px-[8rem] mt-3">
                <div className="">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="md:text-wrap">
                            <div className="gap-4 flex  md:gap-10 items-center my-[30px]">
                                {/* <Link href="/" legacyBehavior passHref>
                                    <Button className="" size={"resp"} variant={"hoi"}>
                                        <GiForkKnifeSpoon className="mr-2 w-8 h-5" />
                                        Order
                                        <span className="hidden md:block ml-1">
                                            Now
                                        </span>
                                    </Button>
                                </Link>
                                <Link href="/" legacyBehavior passHref>
                                    <Button className="" size={"resp"} variant={"hoiCream"}>
                                        <BiFoodMenu className="mr-2 w-8 h-5" />

                                        <span className="hidden md:block mr-1">
                                            View
                                        </span>
                                        Menu
                                    </Button>
                                </Link>
                                <Link href="/" legacyBehavior passHref>
                                    <Button className="" size={"resp"} variant={"hoi"}>
                                        <MdBrunchDining className="mr-2 w-8 h-5" />
                                        Book
                                        <span className="hidden md:block ml-1">
                                            a Table
                                        </span>
                                    </Button>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}