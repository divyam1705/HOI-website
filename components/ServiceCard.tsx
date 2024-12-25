"use-client"
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Service {
    name: string;
    description: string;
    href: string;
    src: string;
    bulletPoints: string[];
}

interface ServiceCardProps {
    service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <Link href={service.href}>
            <Card className="border-[] h-[27rem] flex flex-col justify-between cursor-pointer max-w-sm overflow-hidden shadow-2xl rounded-xl transform transition-transform hover:-translate-y-2">
                <Image src={service.src} alt={service.name} className="w-full p-3 rounded-[20px] shadow-2xl" layout="responsive" width={700} height={475} />
                <CardContent className="h-full">
                    <div>
                        <h2 className="font-bold text-2xl mb-2">{service.name}</h2>
                        <p className="text-gray-700 text-base ">{service.description}</p>
                    </div>
                </CardContent>
                <CardFooter className="w-full ">
                    <Link className="w-full" href={service.href}>
                        <Button size={"lg"} className="w-full">Learn More</Button>
                    </Link>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default ServiceCard;