'use client';
import {useState} from 'react';
import {motion} from 'framer-motion';
import {queAndAns} from '@/lib/constants';
import Image from "next/image";
import useBreakPoint from "@/hooks/useBreakPoint";

const AboutAnswerCard = () => {
    // State to manage expanded/collapsed state for each question
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const breakPoint = useBreakPoint();

    // Function to toggle expand/collapse for a specific question
    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const letterImages = [
        {
            src: "/svg/letters/A.svg",
            alt: "x",
            width: 71,
            height: 96,
            style: {left: "240px", top: "400px"},
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
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 71,
            height: 96,
            style: {left: "390px", bottom: "80px"},
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
            style: {right: "253px", top: "400px"},
            delay: 0.5,
        },
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 62,
            height: 84,
            style: {right: "270px", top: "100px"},
            delay: 0.6,
        },
    ];
    return (
        <div className="relative px-[18px] md:px-0 w-full">
            {breakPoint === "desktop" &&
                letterImages.map((img, index) => (
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

            <motion.div
                className="flex flex-col justify-center items-center w-full"
                initial={{opacity: 0, y: 50}} // Initial animation state
                animate={{opacity: 1, y: 0}} // Animate to final state
                transition={{duration: 0.8, ease: 'easeOut'}} // Smooth animation
            >
                {/* Title */}
                <motion.div
                    className="flex items-center justify-center w-full h-full"
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    viewport={{once: true}}
                >
                    <h2
                        className="uppercase font-outfit font-bold text-transparent text-[24px] md:text-[40px] text-center"
                        style={{
                            background:
                                'var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Answers to your questions
                    </h2>
                </motion.div>

                {/* Questions and Answers */}
                <motion.div
                    className="flex flex-col gap-4 w-full max-w-[854px] mt-6 justify-center items-center"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: 'easeOut', staggerChildren: 0.2}}
                    viewport={{once: true}}
                >
                    {queAndAns.map((item) => (
                        <motion.div
                            key={item.id}
                            className={`p-6 bg-gradient-to-l from-white/40 to-white/0 rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-700 backdrop-blur-xl flex flex-col justify-start items-start gap-2.5 transition-all duration-300 ease-in-out overflow-hidden w-full ${
                                expandedId === item.id ? 'max-h-[500px]' : 'max-h-24'
                            }`}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, ease: 'easeOut'}}
                            viewport={{once: true}}
                        >
                            <div className="w-full flex justify-between items-center">
                                <div
                                    className="text-start text-white text-[16px] sm:text-xl font-normal font-outfit leading-0">
                                    {item.que}
                                </div>
                                {/* Toggle Button */}
                                <button onClick={() => toggleExpand(item.id)} className="focus:outline-none">
                                    <Image
                                        src={expandedId === item.id ? '/svg/minus icon.svg' : '/svg/plus icon.svg'}
                                        alt="Toggle Icon"
                                        width={16}
                                        height={0}
                                    />
                                </button>
                            </div>
                            {/* Expanded Content */}
                            {expandedId === item.id && (
                                <motion.div
                                    className="text-white text-[16px] sm:text-base mt-4 pb-[8px]"
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.3, ease: 'easeOut'}}
                                >
                                    {item.ans}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutAnswerCard;
