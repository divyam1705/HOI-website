"use client"
import dynamic from "next/dynamic";
import Image from "next/image";

interface BannerProps {
    src: string;
}

const Banner: React.FC<BannerProps> = ({ src }) => {

    const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });


    const imageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };
    return (
        <MotionDiv
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.5 }}
        >
            <Image className="rounded-xl w-full" src={src} alt="Banner" width={1920} height={1080} />
        </MotionDiv>
    );
};

export default Banner;