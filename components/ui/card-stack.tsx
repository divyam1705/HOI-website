"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
    date: string;
    stars: number;
};

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);
    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className=" relative  h-80 w-[22rem] md:h-[25rem] md:w-[35rem]">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="!border-[#362511] md:text-lg absolute dark:bg-black  h-80 w-[22rem] md:h-[25rem] md:w-[35rem] rounded-3xl p-4 shadow-xl border  dark:border-white/[0.1]  shadow-yellow-500/[0.1]  flex flex-col justify-between"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                        }}
                    >
                        <div className="font-normal text-neutral-700 dark:text-[#FFF8E6]">
                            {card.content}
                        </div>
                        <div className="flex justify-between items-center md:text-base">
                            <div>
                                <p className="text-neutral-500 font-medium dark:text-[#FFF8E6]">
                                    {card.name}
                                </p>
                                <p className="text-neutral-400 font-normal dark:text-[#FFF8E6]">
                                    {card.designation}
                                </p>
                            </div>
                            <div>

                                <p className="text-xl" style={{ background: 'linear-gradient(to right, #FFD700, #FF6347)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                                    {"★".repeat(card.stars)}
                                </p>
                                <p className="text-neutral-400 font-normal dark:text-[#FFF8E6]">
                                    {card.date}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
