
import { CardStack } from "@/components/ui/card-stack";
import hoi from "@/assets/HOI cropped.png";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Testimonials = () => {
    return <section className="py-10">
        <div >
            <div className="section-heading">

                <h2 className="section-title mt-5">
                    Your Stories, Our Pride
                </h2>
                <p className="section-description mt-5">
                    Your experiences inspire us to keep serving excellence.
                </p>
            </div>
            <div className="flex justify-center gap-6">
                <CardStackDemo />
            </div>
        </div>
    </section>;
};


export function CardStackDemo() {
    return (
        <div className="dark h-[30rem] md:h-[36rem] flex items-center justify-center w-full">
            <CardStack items={CARDS} />
        </div>
    );
}

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold  bg-yellow-100 text-yellow-700 dark:bg-yellow-700/[0.2] dark:text-yellow-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [

    {
        id: 1,
        name: "Nesha h.",
        designation: "Belleville, IL",
        date: "Feb 27, 2024",
        stars: 5,
        content: (
            <p>
                The <Highlight> atmosphere is great</Highlight> you can be casual or dressed up. The service was stellar, from everyone and they're very attentive.
                {" "}
                I love Indian food and their mango lassi drink is probably <Highlight>the best I've tasted</Highlight>.

                The spice levels are 1-4, and we got 3 and it was perfect I could've went spicier!

            </p>
        ),
    },
    {
        id: 2,
        name: "Grace R.",
        designation: "Houston, TX",
        date: "Jun 1, 2024",
        stars: 4,
        content: (
            <p>
                Very reasonable prices and generous portions. They really pay<Highlight> attention to detail</Highlight> with their takeout orders. Great friendly service!

                If you're looking for a good local Indian food spot I'd recommend this place.

                Very<Highlight>clean and well kept interior </Highlight>as well!

                I personally have enjoyed the chicken tikki masala, garlic naan, mango lassi, basmati rice, and paneer pakora!
            </p>
        ),
    },
    {
        id: 3,
        name: "Scott F.",
        designation: "PA, PA",
        date: "Aug 30, 2024",
        stars: 5,
        content: (
            <p>
                This is some of the
                <Highlight>
                    best Indian food
                </Highlight>
                I've had. I have tried Indian food all over the country. We had Chicken Vindaloo, the Chicken Tandoori Platter, Vegetable Samosas and garlic Naan.
                All of it was amazing.
                The vindaloo was
                <Highlight>
                    delicious!
                </Highlight>
                The portions are <Highlight>
                    generous and very affordable</Highlight>. It was a great experience!
            </p>
        ),
    },
    {
        id: 4,
        name: "Genevieve S.",
        designation: "Fayetteville, AR",
        date: "Oct 3, 2023",
        stars: 5,
        content: (
            <p>
                I had a <Highlight> great experience</Highlight> here.
                It was my first time trying Indian food
                and it did not disappoint!
                The tiki chicken masala was so
                good along with the garlic naan.
                The <Highlight>service was really great</Highlight> and everyone was so nice.
            </p>
        ),
    },
    {
        id: 5,
        name: "Bob S.",
        designation: "Saint Louis, MO",
        date: "Jan 1, 2022",
        stars: 5,
        content: (
            <p>
                <Highlight> Great service. Terrific food.</Highlight> Ambiance is simple.
                I've cream and rice pudding desserts were outstanding as well.
                <br />
                <Highlight>Highly recommended.</Highlight>
            </p>
        ),
    }
];
