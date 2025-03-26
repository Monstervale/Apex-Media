"use client";
import {motion} from "framer-motion";
import {apexMediaDetails} from "@/lib/constants";
import Image from "next/image";
import useBreakPoint from "@/hooks/useBreakPoint";

const ApexMediaSection = () => {
    const breakPoint = useBreakPoint();

    const letterImages = [
        {
            src: "/svg/letters/A.svg",
            alt: "A",
            width: breakPoint === "desktop" ? 70 : 50,
            height: 96,
            style: breakPoint === "desktop" ? {left: "202px", top: "108px"} : {left: "20px", top: "16px"},
            delay: 0,

        },
        {
            src: "/svg/letters/P.svg",
            alt: "P",
            width: 69,
            height: 96,
            style: breakPoint === "desktop" ? {right: "172px", top: "26px"} : {right: "20px", top: "146px"},
            delay: 0.1,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "E",
            width: breakPoint === "desktop" ? 68 : 48,
            height: 96,
            style: breakPoint === "desktop" ? {right: "188px", top: "146px"} : {right: "40px", top: "36px"},
            delay: 0.2,
        },
        {
            src: "/svg/letters/X.svg",
            alt: "X",
            width: 64,
            height: 76,
            style: breakPoint === "desktop" ? {left: "317px", top: "361px"} : {left: "140px", top: "136px"},
            delay: 0.3,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "E",
            width: 68,
            height: 96,
            style: breakPoint === "desktop" ? {left: "128px", bottom: "46px"} : {left: "20px", bottom: "26px"},
            delay: 0.2,
        },
    ]
    return (
        <div className="relative flex items-center justify-center flex-col gap-4 w-full h-full px-[22px] md:px-10">
            {/* Animated Letter Images */}
            {letterImages.map((img, index) => (
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

            {breakPoint === "desktop" &&
                <div className="absolute w-full">
                    <Image src={"/svg/Milky-Way.svg"} alt={"mk"} className={"w-full h-full"} width={0} height={0}/>
                </div>}

            <div className="absolute left-0 md:hidden w-full h-full">
                <Image src={"/svg/Milky-Way-Mobile.svg"} alt={"mk"} className={"w-full h-full"} width={0}
                       height={0}/>
            </div>

            {/* Title */}
            <motion.div
                className="flex items-center justify-center w-full h-full"
                initial={{opacity: 0}} // Start with invisible title
                whileInView={{opacity: 1}} // Fade in the title when in view
                transition={{duration: 1}} // Duration of the fade-in
                viewport={{once: true}} // Trigger animation every time it comes into view
            >
                <h2
                    className="uppercase font-outfit font-bold bg-clip-text text-transparent text-[24px] md:text-[40px]"
                    style={{
                        background:
                            'var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Why CHOOSE APEX MEDIA
                </h2>
            </motion.div>

            {/* Details */}
            <motion.div
                className="w-full flex-shrink-0 text-white flex items-center justify-center"
                initial={{opacity: 0}} // Start with invisible details section
                whileInView={{opacity: 1}} // Fade in the details section when in view
                transition={{duration: 1, delay: 0.3}} // Delay to make it more fluid
                viewport={{once: true}} // Trigger animation every time it enters the view
            >
                <div className="grid grid-cols-3 gap-y-[24px] md:gap-y-[61px] text-center">
                    {apexMediaDetails.map((detail, index) => (
                        <motion.div
                            key={detail.id}
                            className="flex flex-col items-center md:gap-4"
                            initial={{opacity: 0, y: 50}} // Start cards below the view with zero opacity
                            whileInView={{opacity: 1, y: 0}} // Animate the cards to their position with full opacity
                            transition={{
                                duration: 0.8,
                                delay: 0.5 + index * 0.2, // Stagger animation based on index
                            }}
                            viewport={{once: true}}
                        >
                            <div
                                className="text-[30px] md:text-[48px] font-outfit font-bold md:leading-[52px] tracking-[-1.44px] text-white">
                                {detail.name}
                            </div>
                            <div className="text-[16px] md:text-[20px] font-outfit font-normal text-[#A6A6A6]">
                                {detail.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ApexMediaSection;
