"use client";
import {useState} from "react";
import Image from "next/image";
import {serviceDetails} from "@/lib/constants";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import Link from "next/link"; // Import motion

const Services = () => {
    const [selectedId] = useState(null);

    return (
        <motion.div
            initial={{opacity: 0}} // Initial state: invisible
            whileInView={{opacity: 1}} // Fade in when the section enters the view
            transition={{duration: 1}} // Duration of the fade-in
            viewport={{once: true}} // Trigger animation only once when the section enters view
        >
            <div className="flex flex-col items-center gap-6 px-[22px] md:px-10">
                {/* Title and Description */}
                <div className="flex flex-col items-center gap-2 w-full">
                    <motion.h2
                        className="uppercase font-outfit text-[24px] md:text-[40px] font-bold bg-clip-text text-transparent"
                        style={{
                            background: 'var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}} // Fade in when title comes into view
                        transition={{duration: 1, delay: 0.3}} // Add some delay
                        viewport={{once: true}} // Trigger only once
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        className="text-white text-[16px] text-center md:text-xl font-normal font-outfit"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}} // Fade in when paragraph comes into view
                        transition={{duration: 1, delay: 0.5}} // Add delay for smooth appearance
                        viewport={{once: true}} // Trigger only once
                    >
                        From development to growth. We will be there every step of the way.
                    </motion.p>
                </div>

                {/* Services cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 w-full flex-row justify-center items-center gap-[16px]">
                    {serviceDetails.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="text-white w-full flex flex-row justify-center"
                            initial={{opacity: 0, x: 0}} // Start from the right side (x: 100)
                            whileInView={{
                                opacity: 1,
                                x: 0, // Animate to original position
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.6 + index * 0.2, // Stagger delay for each card
                                ease: "easeOut", // Apply easing for smooth transition
                            }}
                            viewport={{once: true}} // Trigger animation every time the card comes into view
                        >
                            <div
                                className={`w-full h-40 p-6 bg-gradient-to-b from-white/40 to-white/5 
                                    rounded-3xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-center 
                                    transition-all duration-300 ease-in-out gap-[16px] 
                                    ${
                                    selectedId === service.id
                                        ? "bg-[#F4520E]"
                                        : "hover:bg-[#F4520E] cursor-pointer"
                                }`}
                            >
                                <Image
                                    src={service.src}
                                    alt={service.alt}
                                    width={46}
                                    height={37}
                                    className="transition-transform duration-500 transform hover:scale-110"
                                />
                                <p className="text-[16px] text-center md:text-[21px] font-medium font-outfit">{service.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* Learn more button */}
                <div className="flex justify-center items-center">
                    <Link href={"/services"}>
                        <Button className={"font-outfit text-[16px]"} variant={"transparent"}>
                            <div className="flex items-center justify-between gap-4">
                                <Image
                                    src={'/svg/Arrow 8.svg'}
                                    alt={"arrow"}
                                    width={12.971}
                                    height={6}
                                />
                                <span>Learn more</span>
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Services;
