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
        <Card className="border-[#2b1d0d] dark h-[23rem] flex flex-col justify-between cursor-pointer max-w-sm overflow-hidden shadow-2xl rounded-xl transform transition-transform hover:-translate-y-2">
            <Image src={food.src} alt={food.name} className="w-full p-3 rounded-[20px]" layout="responsive" width={700} height={475} />
            <CardContent className="h-full">
                <div>
                    <h2 className="font-bold text-2xl mb-2 text-[#f4d5b2]">{food.name}</h2>
                    <p className="text-gray-500 text-sm ">{food.description}</p>
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