'use client';


import dynamic from "next/dynamic";
import {motion} from "framer-motion";
import Image from "next/image";
import useBreakPoint from "@/hooks/useBreakPoint";

const DynamicCard = dynamic(() => import("@/components/TestimonialsCards"), {ssr: false});

const MyComponent = () => {
    const breakPoint = useBreakPoint();

    const letterImages = [
        {
            src: "/svg/letters/A.svg",
            alt: "A",
            width: 96,
            height: 96,
            style: {right: "202px", top: "12px"},
            delay: 0,

        },
        {
            src: "/svg/letters/P.svg",
            alt: "P",
            width: 96,
            height: 96,
            style: {left: "148px", top: "15px"},
            delay: 0.1,
        },

    ]


    return (
        <div className="relative w-full px-[22px] md:px-10">

            {breakPoint === "desktop" &&
                letterImages.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: -100}} // Start 100px above final position
                        whileInView={{opacity: 1, y: 0}} // Move to final position
                        transition={{duration: 0.3, delay: img.delay, ease: "easeOut"}} // Staggered delay
                        style={{position: "absolute", ...img.style}} // Apply absolute positioning
                        viewport={{once: false}}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                        />
                    </motion.div>
                ))}

            <div className="mask-gradient min-h-[348px] md:min-h-[618px]">
                <div className="mask-gradient flex items-center justify-center w-full h-[90px]">
                    <h2
                        className="uppercase font-outfit text-[24px] md:text-[40px] font-bold bg-clip-text text-transparent"
                        style={{
                            background:
                                "var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Testimonials
                    </h2>
                </div>

                {/* Testimonials*/}
                <DynamicCard/>

            </div>
        </div>
    );
};

export default MyComponent;