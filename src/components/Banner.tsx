'use client'

import Image from "next/image";
import {Button} from "@/components/ui/button";
import {motion, useInView} from 'framer-motion';
import {useRef} from "react";
import Link from "next/link";


const MyComponent = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const isInView = useInView(ref, {once: true});
    const isInView2 = useInView(ref2, {once: true});

    const text = "Speak with our team of experts today! Book a free Consultation";

    // const breakPoint = useBreakPoint();

    // // Array of letter images with their properties for cleaner mapping
    // const letterImages = [
    //
    //     {
    //         src: "/svg/letters/3.svg",
    //         alt: "3",
    //         width: breakPoint === "desktop" ? 64 : 44,
    //         height: 76,
    //         style: breakPoint === "desktop" ? {left: "50%", top: "86px"} : {left: "50%", top: "146px"},
    //         delay: 0.1,
    //     },
    //     {
    //         src: "/svg/letters/P.svg",
    //         alt: "p",
    //         width: breakPoint === "desktop" ? 64 : 44,
    //         height: 76,
    //         style: breakPoint === "desktop" ? {right: "108px", top: "156px"} : {right: "20px", top: "86px"},
    //         delay: 0.2,
    //     },
    //
    //     {
    //         src: "/svg/letters/3.svg",
    //         alt: "3",
    //         width: 34,
    //         height: 48,
    //         style: {left: "406px", bottom: "5px"},
    //         delay: 0.4,
    //     },
    //     {
    //         src: "/svg/letters/P1.svg",
    //         alt: "p1",
    //         width: 69,
    //         height: 96,
    //         style: {right: "441px", bottom: "183px"},
    //         delay: 0.5,
    //     },
    //     {
    //         src: "/svg/letters/A.svg",
    //         alt: "x",
    //         width: 82,
    //         height: 84,
    //         style: {right: "197px", bottom: "0"},
    //         delay: 0.6,
    //     },
    // ];

    return (
        <div
            className="relative flex flex-col md:h-[527px] gap-4 md:flex-row w-full justify-between rounded-[20px] px-5 md:px-[40px] pt-6 pb-8 md:py-[5px]">

            {/*/!* Animated Letter Images *!/*/}
            {/*{breakPoint === "desktop" && letterImages.map((img, index) => (*/}
            {/*    <motion.div*/}
            {/*        key={index}*/}
            {/*        initial={{opacity: 0, y: -100}} // Start 100px above final position*/}
            {/*        whileInView={{opacity: 1, y: 0}} // Move to final position*/}
            {/*        transition={{duration: 0.3, delay: img.delay, ease: "easeOut"}} // Staggered delay*/}
            {/*        style={{position: "absolute", ...img.style}} // Apply absolute positioning*/}
            {/*    >*/}
            {/*        <Image*/}
            {/*            src={img.src}*/}
            {/*            alt={img.alt}*/}
            {/*            width={img.width}*/}
            {/*            height={img.height}*/}
            {/*        />*/}
            {/*    </motion.div>*/}
            {/*))}*/}

            <div className="flex flex-col h-full md:flex-row w-full pb-2 bg-black rounded-[20px]">
                <div className="flex w-full h-full items-center justify-center md:hidden">
                    <Image src={"/png/Frame-Mb.png"} alt={"frame"} width={368} height={228}/>
                </div>

                <div className="flex md:hidden h-full gap-6 flex-col items-center justify-center">
                    <div className="flex gap-3 flex-col">
                        <div ref={ref2} className="text-white font-outfit text-[24px] font-[600] text-center">
                            {/*{text}*/}
                            {text.split('').map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{opacity: 0}}
                                    animate={isInView2 ? {opacity: 1} : {}}
                                    transition={{duration: 0.2, delay: index * 0.05}}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>

                        <div
                            className="flex w-full items-center justify-center text-[16px] font-[400px] text-[#CFCFCF] text-center">
                            Bringing 15 years of experience into Web 3
                        </div>
                    </div>

                    <Link href={"https://calendly.com/theapexmediahub"} target="_blank" rel="noopener noreferrer">
                        <Button className="text-[12px] font-outfit font-medium" variant={'transparent'}>
                            Schedule A Call
                        </Button>
                    </Link>

                </div>

                {/*Heading*/}
                <div className="hidden md:flex flex-col p-[24px] h-full items-start justify-between w-[660px] ">
                    <div>
                        <div ref={ref} className=" text-white leading-tight font-outfit text-[48px] font-[500]">
                            {text.split('').map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{opacity: 0}}
                                    animate={isInView ? {opacity: 1} : {}}
                                    transition={{duration: 0.2, delay: index * 0.05}}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>

                        <div
                            className=" text-[#CFCFCF] font-outfit text-[16px] md:text-[22px] leading-8 font-[400] w-[618px]">
                            Bringing 15 years of experience into Web 3
                        </div>
                    </div>


                    <div className="pt-[60px]">
                        <Link href={"https://calendly.com/theapexmediahub"} target="_blank" rel="noopener noreferrer">
                            <Button className={"font-outfit text-[12px] md:text-[16px]"} variant={'transparent'}>
                                Schedule A Call
                            </Button>
                        </Link>
                    </div>

                </div>


                {/*Photo*/}
                <div className="relative w-full h-full hidden md:flex items-center justify-center">
                    {/* Background Image */}
                    <Image className="w-full h-full" src={"svg/background.svg"} alt={"background"} width={0}
                           height={0}/>
                    {/* Centered Content */}
                    <div className="absolute h-full w-full flex flex-col items-center justify-center">
                        <li className="inline-flex h-full px-4">
                            <Image src={"/svg/AP.svg"} alt={"ap"} width={139} height={96}/>
                            <Image src={"/svg/E.svg"} alt={"e"} width={68} height={96}/>
                            <Image src={"/svg/X.svg"} alt={"x"} width={71} height={96}/>
                        </li>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyComponent;
