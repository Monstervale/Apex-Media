'use client'
import Image from "next/image";
import {motion} from "framer-motion";
import useBreakPoint from "@/hooks/useBreakPoint";

const AboutTitle = () => {
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
            style: {right: "200px", top: "900px"},
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
        {
            src: "/svg/letters/A.svg",
            alt: "x",
            width: 62,
            height: 84,
            style: {left: "200px", top: "900px"},
            delay: 0.6,
        },
    ];
    return (
        <div
            className="relative max-w-[1440px] flex flex-col items-center justify-center w-full pt-[84px] md:pt-[175px] px-[10px] md:gap-8 md:px-[40px]">

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

            {/* Gradient Title */}
            <motion.div
                className="uppercase font-outfit text-[32px] md:text-[60px] font-bold bg-clip-text text-transparent"
                style={{
                    background:
                        "var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                about us
            </motion.div>

            {/* Main Content */}
            <motion.div
                className="flex flex-col md:flex-row items-center md:gap-6 justify-start md:w-full text-white"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeOut"}}
                viewport={{once: true}}
            >
                {/* Left Section */}
                <div className="flex items-center justify-center md:justify-start w-full">
                    {/* Title Letters */}
                    <motion.div
                        className="inline-flex"
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 1, ease: "easeOut"}}
                        viewport={{once: true}}
                    >
                        <Image
                            className="w-[300px] h-[150px] md:w-full md:h-fit"
                            src="/svg/apexmedia.svg"
                            alt="ap"
                            width={0}
                            height={0}
                        />
                    </motion.div>
                </div>

                {/* Right Section */}
                <motion.div
                    className="flex flex-col  text-center md:text-left items-start justify-start md:w-[1100px] text-white font-outfit text-[16px] md:text-[20px] font-normal md:leading-[40px]"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                    viewport={{once: true}}
                >
                    <p>Apex Media is a leading crypto marketing agency specializing in Web3 growth, influencer
                        marketing, investment advisory, and fundraising.
                        We help blockchain projects scale their brand, raise capital, and reach millions of potential
                        investors and users.</p>
                    <p className="pt-2 md:pt-0 ">With a proven track record in executing 500+ campaigns and raising over $5M+ for clients, we
                        bridge the gap between crypto startups and their target audience through strategic marketing and
                        industry connections.</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutTitle;
