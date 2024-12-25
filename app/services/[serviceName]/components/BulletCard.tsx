import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import React from 'react';
import { IconType } from 'react-icons/lib';

interface BulletCardProps {
    heading: string;
    description: string;
    Icon: IconType;
}

const BulletCard: React.FC<BulletCardProps> = ({ heading, description, Icon }) => {
    return (
        <Card className="cursor-pointer w-[22rem] h-64 shadow-xl transform transition-transform hover:-translate-y-2">
            <CardHeader className='flex flex-col items-center gap-3'>
                <div className='flex justify-center items-center'>
                    <Icon size={30} className='section-text' />
                </div>
                <h3 className="section-text text-xl font-semibold">{heading}</h3>
            </CardHeader>
            <CardContent className='flex flex-col items-center'>
                <CardDescription className=' text-[#010D3E]/70 text-center'>{description}</CardDescription>
            </CardContent>
        </Card>
    );
};

export default BulletCard;