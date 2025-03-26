"use client";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import useBreakPoint from "@/hooks/useBreakPoint";
import Link from "next/link";
import EmailContactButton from "@/components/EmailContactButton";
import DirectMessageButton from "@/components/DirectMessageButton";

const TitleSection = () => {

    const breakPoint = useBreakPoint();

    // Variants for the title section container
    const containerVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                when: "beforeChildren", // Animate children after the container starts
                staggerChildren: 0.2, // Delay between each child animation
            },
        },
    };

    // Variants for the child elements inside the title section
    const childVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5},
        },
    };

    // Array of letter images with their properties for cleaner mapping
    const letterImages = [
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: breakPoint === "desktop" ? 71 : 51,
            height: 96,
            style: breakPoint === "desktop" ? {left: "202px", top: "161px"} : {left: "20px", top: "86px"},
            delay: 0,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: breakPoint === "desktop" ? 64 : 44,
            height: 76,
            style: breakPoint === "desktop" ? {left: "50%", top: "86px"} : {left: "50%", top: "146px"},
            delay: 0.1,
        },
        {
            src: "/svg/letters/P.svg",
            alt: "p",
            width: breakPoint === "desktop" ? 64 : 44,
            height: 76,
            style: breakPoint === "desktop" ? {right: "108px", top: "156px"} : {right: "20px", top: "86px"},
            delay: 0.2,
        },
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 71,
            height: 96,
            style: breakPoint === "desktop" ? {left: "82px", bottom: "198px"} : {left: "20px", bottom: "86px"},
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
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 62,
            height: 84,
            style: {right: "197px", bottom: "0"},
            delay: 0.6,
        },
    ];

    return (
        <div
            className="relative md:px-10 flex-col w-full md:h-[625px] bg-[url(/svg/yellow-shadow.svg)] bg-no-repeat bg-cover bg-center flex justify-between">
            {/*<Header/>*/}

            {/* Animated Letter Images */}
            {letterImages.map((img, index) => (
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

            {/* Title Section */}
            <div className="flex items-start pt-[180px] justify-center w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center justify-center flex-col md:w-[628px] gap-4 md:gap-[8px]"
                >

                    <div className="relative flex flex-col">
                        {/* Title Letters */}
                        <motion.div variants={childVariants} className="inline-flex gap-2.5">
                            <Image className="w-[139px] h-[96px] md:w-[313px] md:h-fit" src="/svg/AP_B.svg" alt="ap"
                                   width={0} height={0}/>
                            <Image className="w-[68px] h-[96px] md:w-[156px] md:h-fit" src="/svg/E (2).svg" alt="e"
                                   width={0} height={0}/>
                            <Image className="w-[71px] h-[96px] md:w-[160px] md:h-fit" src="/svg/X (1).svg" alt="x"
                                   width={0} height={0}/>
                        </motion.div>

                        {/* MEDIA Image */}
                        <motion.div
                            variants={childVariants}
                            className="w-full flex md:py-6 items-center justify-center "
                        >
                            <Image className="w-[201px] h-[60px] md:w-[441px] md:h-fit" src="/svg/MEDIA.svg" alt="media"
                                   width={441} height={132}/>
                        </motion.div>
                    </div>


                    {/* Text */}
                    <motion.div
                        variants={childVariants}
                        className="font-outfit font-[400px] text-[20px] text-white text-center"
                    >
                        The pinnacle of Crypto Marketing
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        variants={childVariants}
                        className="flex items-center md:pt-[22px] justify-between gap-4"
                    >
                        <Link href={"https://calendly.com/theapexmediahub"} target="_blank" rel="noopener noreferrer">
                            <Button className="text-[12px] font-outfit md:text-[16px]" variant={"transparent"}>Schedule A
                                Call</Button>
                        </Link>
                        <EmailContactButton/>
                        <DirectMessageButton/>

                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default TitleSection;
