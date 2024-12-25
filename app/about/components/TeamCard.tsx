"use-client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";




interface TeamCardProps {
    name: string;
    description: string;
    src: string;
    position: string;
    linkedin: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ name, description, position, src, linkedin }) => {
    return (
        <Card className=" group h-[23rem] flex flex-col justify-between cursor-pointer max-w-xs overflow-hidden shadow-2xl rounded-xl transform transition-transform hover:-translate-y-2">
            <Image src={src} alt={name} className="w-full p-3 rounded-[20px]" layout="responsive" width={700} height={475} />
            <CardContent className="h-full ">

                <h2 className="font-bold text-2xl ">{name}</h2>
                <p className=" font-bold text-sm">{position}</p>
                <p className="text-gray-700 text-base mt-3 group-hover:blur-sm">{description}</p>

            </CardContent>
            <Link href={linkedin}>
                <Button size={"icon"} className="hover:!opacity-100 hover:bg-blue-700 absolute bg-blue-600 bottom-5 left-1/2 transform -translate-x-1/2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaLinkedin className="text-black" size={28} />
                </Button>
            </Link>
        </Card >
    );
};

export default TeamCard;