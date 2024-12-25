"use-client"
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Food {
    name: string;
    description: string;
    src: string;
    price: Number
}

interface FoodCardProps {
    food: Food;
}

export const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
    return (
        // <Link href={service.href}>
        <Card className="border-[#362511] dark h-[19rem]  md:h-[20rem] flex flex-col justify-between cursor-pointer max-w-sm overflow-hidden shadow-2xl rounded-xl transform transition-transform hover:-translate-y-2">
            <div className="relative w-full h-[30rem] md:h-[40rem]">
                <Image src={food.src} alt={food.name} className="w-full  p-3 rounded-[20px] object-cover" layout="fill" />
            </div>
            <CardContent className="h-full">
                <div>
                    <h2 className="leading-6 font-bold text-xl md:text-2xl mb-2 text-[#f4d5b2]">{food.name}</h2>
                    <p className="leading-4 text-gray-500 text-xs md:text-sm ">{food.description}</p>
                </div>
            </CardContent>
            {/* <CardFooter className="w-full ">
                <Button variant={"outlineHoiAlt"} size={"lg"} className="w-full">{food.price.toString()}</Button>

            </CardFooter> */}
        </Card>
        // </Link>
    );
};

export default FoodCard;