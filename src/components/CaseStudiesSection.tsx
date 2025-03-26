'use client'

import CaseStudy from "@/components/CaseStudy";
import {caseStudiesItems} from "@/lib/constants";
import useBreakPoint from "@/hooks/useBreakPoint";
import {motion} from "framer-motion";
import Image from "next/image";

const CaseStudiesSection = () => {
    const breakPoint = useBreakPoint();

    const letterImages = [
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 71,
            height: 96,
            style: {left: "102px", top: "161px"},
            delay: 0,
        },
        {
            src: "/svg/letters/A.svg",
            alt: "x",
            width: 102,
            height: 126,
            style: {left: "40px", top: "400px"},
            delay: 0.6,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 54,
            height: 76,
            style: {left: "120px", top: "686px"},
            delay: 0.1,
        },
        {
            src: "/svg/letters/P.svg",
            alt: "p",
            width: 64,
            height: 76,
            style: {left: "78px", top: "1106px"},
            delay: 0.2,
        },
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 71,
            height: 96,
            style: {left: "122px", top: "1438px"},
            delay: 0.3,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 34,
            height: 48,
            style: {left: "46px", top: "1825px"},
            delay: 0.4,
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
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 84,
            height: 48,
            style: {left: "116px", top: "2305px"},
            delay: 0.4,
        },
        {
            src: "/svg/letters/P.svg",
            alt: "p",
            width: 104,
            height: 76,
            style: {right: "110px", top: "496px"},
            delay: 0.2,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 34,
            height: 48,
            style: {right: "96px", top: "805px"},
            delay: 0.4,
        },
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 62,
            height: 84,
            style: {right: "57px", top: "1150px"},
            delay: 0.6,
        },
        {
            src: "/svg/letters/A.svg",
            alt: "x",
            width: 62,
            height: 84,
            style: {right: "137px", top: "1770px"},
            delay: 0.6,
        },
        {
            src: "/svg/letters/A.svg",
            alt: "x",
            width: 62,
            height: 84,
            style: {right: "157px", top: "2180px"},
            delay: 0.6,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 44,
            height: 48,
            style: {right: "116px", top: "2405px"},
            delay: 0.4,
        },


    ];
    return (
        <div className="relative pb-16 grid grid-cols-1 gap-y-6 px-[21px] md:px-[205px]">

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
            {caseStudiesItems.map((item) => (
                <CaseStudy key={item.id} ath={item.ath} logoClassName={item.logoClassName} name={item.name}
                           type={item.type} description={item.description} service={item.service}
                           boxShadowStyle={item.boxShadowStyle} coinName={item.coinName} img1Height={item.img1Height}
                           imgSrc1={item.imgSrc1}
                           img1Width={item.img1Width}
                           imgSrc2={item.imgSrc2}
                           img2Height={item.img2Height}
                           img2Width={item.img2Width}
                />
            ))}

        </div>
    );
};

export default CaseStudiesSection;