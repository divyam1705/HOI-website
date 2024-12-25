// import avatar1 from "@/assets/avatars/avatar-1.png";
// import avatar2 from "@/assets/avatars/avatar-2.png";
// import avatar3 from "@/assets/avatars/avatar-3.png";
// import avatar4 from "@/assets/avatars/avatar-4.png";
// import avatar5 from "@/assets/avatars/avatar-5.png";
// import avatar6 from "@/assets/avatars/avatar-6.png";
// import avatar7 from "@/assets/avatars/avatar-7.png";
// import avatar8 from "@/assets/avatars/avatar-8.png";
// import avatar9 from "@/assets/avatars/avatar-9.png";
import hoi from "@/assets/HOI cropped.png";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
    {
        text: "Zora Technologies completely transformed our data migration process. Their expertise in SAP migration saved us time and minimized errors, allowing us to focus on growing our business.",
        imageSrc: hoi.src,
        name: "John Anderson",
        username: "@john_anderson",
    },
    {
        text: "The team at ZTI is phenomenal! They guided us through every step of our digital transformation, providing valuable insights and support throughout the entire process.",
        imageSrc: hoi.src,
        name: "Sarah Martinez",
        username: "@sarah_martinez",
    },
    {
        text: "ZTI delivered on their promise. Their advanced analytics tools gave us actionable insights that led to better decision-making and improved business operations.",
        imageSrc: hoi.src,
        name: "Michael Bennett",
        username: "@mikeb_tech",
    },
    {
        text: "I was impressed by the professionalism and depth of knowledge the ZTI team brought to our data profiling project. We couldn't have asked for a better partner.",
        imageSrc: hoi.src,
        name: "Emily Thompson",
        username: "@emily_t",
    },
    {
        text: "Thanks to ZTI’s expertise, our data migration to SAP S/4HANA was seamless and efficient. Their team’s attention to detail was key to the project’s success.",
        imageSrc: hoi.src,
        name: "Raj Patel",
        username: "@rajpatel_ds",
    },
    {
        text: "Working with ZTI was a game-changer for our data governance strategy. Their tailored solutions really helped us streamline and optimize our data infrastructure.",
        imageSrc: hoi.src,
        name: "Linda Johnson",
        username: "@linda_j",
    },
    {
        text: "The support we received from ZTI was outstanding. They made the complex process of data transformation easy to understand and manage.",
        imageSrc: hoi.src,
        name: "Carlos Diaz",
        username: "@carlos_d",
    },
    {
        text: "ZTI’s cutting-edge solutions helped us modernize our legacy systems. Their team was incredibly responsive and worked closely with us to ensure a smooth transition.",
        imageSrc: hoi.src,
        name: "Sophia Kim",
        username: "@sophiak",
    },
    {
        text: "The team at ZTI exceeded our expectations. Their dedication to ensuring data quality and governance really stood out. We saw immediate improvements in our reporting and analytics.",
        imageSrc: hoi.src,
        name: "David Miller",
        username: "@dmiller123",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
    return <section>
        <div >
            <div className="section-heading">
                <div className="flex justify-center">
                    <AnimatedGradientText className="">
                        ✒️<hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                        <span
                            className={cn(
                                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                            )}
                        >
                            Testimonials
                        </span>
                    </AnimatedGradientText>
                </div>
                <h2 className="section-title mt-5">
                    What Our Clients Are Saying
                </h2>
                <p className="section-description mt-5">
                    Hear from businesses around the world who trust Zora Technologies Inc.
                    to drive their digital transformation and data migration projects.
                </p>
            </div>
            <div className="flex justify-center gap-6">
                <TestimonialColumn testimonials={firstColumn} />
                <TestimonialColumn testimonials={secondColumn} className="hidden md:flex" />
                <TestimonialColumn testimonials={thirdColumn} className="hidden lg:flex" />
            </div>
        </div>
    </section>;
};


interface TestimonialColumnProps {
    className?: string;
    testimonials: typeof testimonials;
}

const TestimonialColumn = ({ testimonials, className }: TestimonialColumnProps) => {
    return (
        <div className={cn("flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]", className)}>
            {testimonials.map(({ text, imageSrc, name, username }) => (
                <div key={username} className="card">
                    <div>{text}</div>
                    {/* <div className="flex items-center gap-2 mt-5">
                        <Image
                            width={40}
                            height={40}
                            src={imageSrc}
                            alt={name}
                            className="w-10 h-10 rounded-full"
                        />
                    </div> */}
                    {/* <div className="flex flex-col">
                        <div className="font-medium tracking-tighter leading-5">{name}</div>
                        <div className="leading-5 tracking-tight">{username}</div>
                    </div> */}
                </div>
            ))}
        </div>
    );
};