'use client'

import {Button} from "@/components/ui/button";
import EmailContactButton from "@/components/EmailContactButton";
import DirectMessageButton from "@/components/DirectMessageButton";
import Image from "next/image";
import useBreakPoint from "@/hooks/useBreakPoint";
import Link from "next/link";
import {motion} from "framer-motion";

const Results = () => {

    const breakPoint = useBreakPoint();

    const resultDetails = [
        {
            title: "$5M +",
            desc: "Raised For Tier 1 Crypto Projects"
        },
        {
            title: "500 +",
            desc: "Executed Marketing Campaigns"
        },
        {
            title: "20M +",
            desc: "Generated Revenue For Clients"
        }
    ]
    return (
        <div
            className="relative flex flex-col items-center justify-center px-[10px] md:px-[40px] md:pb-[24px] pb-[10px] "
            style={{
                backgroundImage: breakPoint === "desktop" ? "url('/svg/milkygrp.svg')" : "", // Ensures the image covers the entire div
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
                backgroundSize: breakPoint === "mobile" ? "contain" : "cover", // Adjust for mobile
                backgroundPosition: breakPoint === "mobile" ? "top center" : "center",
            }}
        >

            {breakPoint === "mobile" && <div style={{
                backgroundImage: "url('/svg/milkygrp.svg')", // Ensures the image covers the entire div
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
                backgroundSize: breakPoint === "mobile" ? "contain" : "cover", // Adjust for mobile
                backgroundPosition: breakPoint === "mobile" ? "top center" : "center",
            }} className="absolute bottom-8 md:hidden w-full">
                <Image src={"/png/Milky-Way.png"} alt={"mk"} className={"w-full h-full"} width={0}
                       height={0}/>
            </div>}

            <div
                className="uppercase pb-6 font-outfit md:text-[40px] text-[24px] font-bold bg-clip-text md:pb-[20px] text-transparent"
                style={
                    {
                        background: 'var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }
                }
            >
                Results
            </div>

            {/* card */}
            <div className="flex w-full h-full gap-6 md:flex-row flex-col items-center justify-center">
                {resultDetails.map((result, index) => (
                    <motion.div
                        initial={{opacity: 0, y: 30}} // Initial state (hidden and slightly below)
                        whileInView={{opacity: 1, y: 0}} // Animate to visible and original position
                        whileHover={{scale: 1.05}}
                        key={index}
                        className="flex flex-col items-center border border-black rounded-[8px] bg-black w-full gap-2 px-[64px] py-[24px]  hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="text-[30px] md:text-[48px] font-outfit font-bold  text-[#F4520E]">
                            {result.title}
                        </div>
                        <div className="text-[16px] md:text-[20px] text-center font-outfit  font-normal text-[#A6A6A6]">
                            {result.desc}
                        </div>
                    </motion.div>
                ))}
            </div>


            {/* Buttons and desc */}
            <div className="flex w-full flex-col items-center justify-center pt-[24px] gap-2 text-white">
                <div>
                    {/* Buttons */}
                    <div
                        className="flex w-full items-center justify-between gap-2 md:gap-4"
                    >
                        <Link href={"https://calendly.com/theapexmediahub"} target="_blank" rel="noopener noreferrer">
                            <Button className="text-[12px] font-outfit md:text-[16px]" variant={"transparent"}>Schedule
                                A
                                Call</Button>
                        </Link>
                        <EmailContactButton/>
                        <DirectMessageButton/>
                    </div>
                </div>
                <div className="text-[16px] md:text-[20px] font-outfit font-[400px] text-center">
                    We have the biggest Influencer Network in the Web 3 Space
                </div>
            </div>
        </div>
    );
};

export default Results;
