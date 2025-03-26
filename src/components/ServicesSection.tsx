"use client";
import Image from 'next/image';
import {motion} from "framer-motion";
import {serviceDetails} from "@/lib/constants";
import useBreakPoint from "@/hooks/useBreakPoint";

const ServicesSection = () => {

    const breakPoint = useBreakPoint();

    const letterImages = [
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 71,
            height: 96,
            style: {left: "202px", top: "161px"},
            delay: 0,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 64,
            height: 76,
            style: {left: "50%", top: "86px"},
            delay: 0.1,
        },
        {
            src: "/svg/letters/P.svg",
            alt: "p",
            width: 64,
            height: 76,
            style: {right: "108px", top: "156px"},
            delay: 0.2,
        },
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 71,
            height: 96,
            style: {left: "82px", bottom: "198px"},
            delay: 0.3,
        },
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 71,
            height: 96,
            style: {left: "240px", bottom: "1350px"},
            delay: 0.3,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 34,
            height: 48,
            style: {left: "406px", bottom: "5px"},
            delay: 0.4,
        },
        {
            src: "/svg/letters/P1.svg",
            alt: "p1",
            width: 69,
            height: 96,
            style: {right: "441px", bottom: "183px"},
            delay: 0.5,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "x",
            width: 62,
            height: 84,
            style: {right: "250px", top: "900px"},
            delay: 0.6,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "x",
            width: 62,
            height: 84,
            style: {right: "170px", top: "1250px"},
            delay: 0.6,
        },
        {
            src: "/svg/letters/P1.svg",
            alt: "x",
            width: 62,
            height: 84,
            style: {right: "160px", top: "1000px"},
            delay: 0.6,
        },
    ];
    return (
        <div className="pb-[34px] md:pb-[100px] pt-[84px] md:pt-[175px] ">

            {breakPoint === "desktop" && letterImages.map((img, index) => (
                <motion.div
                    key={index}
                    initial={{opacity: 0, y: -100}} // Start 100px above final position
                    whileInView={{opacity: 1, y: 0}} // Move to final position
                    transition={{duration: 0.3, delay: img.delay, ease: "easeOut"}} // Staggered delay
                    style={{position: "absolute", ...img.style}} // Apply absolute positioning
                >
                    <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                    />
                </motion.div>
            ))}

            {/* Background Effect End */}
            {/* Title and Desc for Larger Screens */}
            <div className="hidden md:flex flex-col items-center justify-center gap-2 w-full ">
                <motion.div
                    className="hidden md:flex flex-col items-center justify-center gap-2 w-full"
                    initial={{opacity: 0, y: 20}} // Initial state (hidden and slightly below)
                    animate={{opacity: 1, y: 0}} // Animate to visible and original position
                    transition={{duration: 0.8, ease: "easeOut"}} // Smooth transition
                >
                    <motion.div
                        className="uppercase font-outfit md:text-[60px] font-bold bg-clip-text text-transparent"
                        style={{
                            background: 'var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                        initial={{opacity: 0, scale: 0.9}} // Initial state (hidden and slightly scaled down)
                        animate={{opacity: 1, scale: 1}} // Animate to visible and full scale
                        transition={{duration: 0.8, delay: 0.2, ease: "easeOut"}} // Smooth transition with delay
                    >
                        Services
                    </motion.div>
                    <motion.div
                        className="text-white text-[20px] text-center md:text-xl font-normal font-outfit pb-[15px]"
                        initial={{opacity: 0, y: 10}} // Initial state (hidden and slightly below)
                        animate={{opacity: 1, y: 0}} // Animate to visible and original position
                        transition={{duration: 0.8, delay: 0.4, ease: "easeOut"}} // Smooth transition with delay
                    >
                        We help blockchain projects scale through marketing, influencers, investment, and fundraising
                    </motion.div>
                </motion.div>
            </div>

            {/* Title and Desc for Mobile Screens */}
            <motion.div
                className="flex md:hidden flex-col items-center justify-center gap-2 w-full"
                initial={{opacity: 0, y: 20}} // Initial state (hidden and slightly below)
                animate={{opacity: 1, y: 0}} // Animate to visible and original position
                transition={{duration: 0.8, ease: "easeOut"}} // Smooth transition
            >
                <motion.div
                    className="uppercase font-outfit font-bold bg-clip-text text-transparent text-[32px] text-center"
                    style={{
                        background: 'var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                    initial={{opacity: 0, scale: 0.9}} // Initial state (hidden and slightly scaled down)
                    animate={{opacity: 1, scale: 1}} // Animate to visible and full scale
                    transition={{duration: 0.8, delay: 0.2, ease: "easeOut"}} // Smooth transition with delay
                >
                    Services
                </motion.div>
                <motion.div
                    className="text-white text-[16px] text-center font-normal font-outfit px-2 pb-[44px]"
                    initial={{opacity: 0, y: 10}} // Initial state (hidden and slightly below)
                    animate={{opacity: 1, y: 0}} // Animate to visible and original position
                    transition={{duration: 0.8, delay: 0.4, ease: "easeOut"}} // Smooth transition with delay
                >
                    We help blockchain projects scale through marketing, influencers, investment, and fundraising
                </motion.div>
            </motion.div>

            {/* Service Card for Larger Screens */}
            <div className="hidden md:flex flex-row items-start h-full px-4 justify-center gap-[20px]">
                {serviceDetails.map((service,) => (
                    <motion.div
                        key={service.id}
                        className="flex self-stretch hover:scale-110 z-10 flex-col px-2 py-6 items-center gap-6 bg-black border border-[#FF9A70] rounded-[10px] w-full min-h-full"
                        initial={{opacity: 0, y: 20}} // Initial state (hidden and slightly below)
                        animate={{opacity: 1, y: 0}} // Animate to visible and original position
                       // Staggered delay based on index
                        whileHover={{ scale: 1.05 }}

                    >
                        <div className="flex items-center justify-center">
                            <Image src={service.src} alt={service.alt} width={service.width} height={service.height}/>
                        </div>
                        <div className="text-center text-white text-[20px] font-medium font-outfit">
                            {service.name}
                        </div>
                        <div className="text-white text-[15px] font-normal font-outfit self-start">
                            <ul className="list-disc pl-5 space-y-2">
                                {service.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Service Card for Mobile View */}
            <div className="flex md:hidden flex-col gap-[10px] px-[20px]">
                {serviceDetails.map((service) => (
                    <motion.div
                        key={service.id}
                        className="flex flex-col p-6 items-center gap-6 bg-black border border-[#FF9A70] rounded-[10px]"
                        initial={{opacity: 0, y: 20}} // Initial state (hidden and slightly below)
                        animate={{opacity: 1, y: 0}} // Animate to visible and original position
                        whileHover={{ scale: 1.02 }}
                        // Staggered delay based on index
                    >
                        <div className="flex items-center justify-center">
                            <Image src={service.src} alt={service.alt} width={service.width} height={service.height}/>
                        </div>
                        <div className="text-center text-white text-[21px] font-medium font-outfit">
                            {service.name}
                        </div>
                        <div className="text-white text-[16px] font-normal font-outfit self-start">
                            <ul className="list-disc pl-5 space-y-2">
                                {service.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
