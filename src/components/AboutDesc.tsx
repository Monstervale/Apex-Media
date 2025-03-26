'use client'
import {motion} from "framer-motion";
import {apexMediaDetails} from "@/lib/constants";
import Image from "next/image";
import useBreakPoint from "@/hooks/useBreakPoint";

const AboutDesc = () => {
    const breakPoint = useBreakPoint();
    return (
        <div className="relative w-full">
            {breakPoint === "desktop" &&
                <div className="absolute w-full h-full">
                    <Image src={"/svg/Milky-Way.svg"} alt={"mk"} className={"w-full h-full"} width={0} height={0}/>
                </div>}

            <div className="absolute left-0 md:hidden w-full h-full">
                <Image src={"/svg/Milky-Way-Mobile.svg"} alt={"mk"} className={"w-full h-full"} width={0}
                       height={0}/>
            </div>
            <motion.div initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                        viewport={{once: false}}
                        className="flex flex-col gap-2 items-center justify-center w-full px-[20px] md:px-[ 0px] pb-4 md:pb-0 ">
                {/* Gradient Title */}
                <div
                    className="uppercase font-outfit text-[24px] md:text-[40px] font-bold text-transparent"
                    style={{
                        background:
                            "var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Why choose apex media
                </div>
                <div
                    className=" md:px-[250px] text-white text-center font-outfit text-[16px] md:text-[20px] font-normal md:leading-[40px]">
                    Apex Media is a crypto-native marketing powerhouse that helps Web3 projects gain visibility, secure
                    funding,
                    and scale their brand. We combine data-driven strategies, influencer reach, and deep industry
                    connections to deliver real, measurable results.
                </div>
            </motion.div>
            {/* Details */}
            <motion.div
                className="w-full h-full flex-shrink-0 pt-2.5 md:pt-6 text-white flex items-center justify-center"
                initial={{opacity: 0}} // Start with invisible details section
                whileInView={{opacity: 1}} // Fade in the details section when in view
                transition={{duration: 1, delay: 0.3}} // Delay to make it more fluid
                viewport={{once: false}} // Trigger animation every time it enters the view
            >
                <div className="grid grid-cols-3 gap-y-[24px] md:gap-y-[67px] text-center">
                    {apexMediaDetails.map((detail, index) => (
                        <motion.div
                            key={detail.id}
                            className="flex flex-col items-center gap-1 md:gap-4"
                            initial={{opacity: 0, y: 50}} // Start cards below the view with zero opacity
                            whileInView={{opacity: 1, y: 0}} // Animate the cards to their position with full opacity
                            transition={{
                                duration: 0.8,
                                delay: 0.5 + index * 0.2, // Stagger animation based on index
                            }}
                            viewport={{once: false}}
                        >
                            <div
                                className="text-[30px] md:text-[48px] font-outfit font-bold  leading-[52px] tracking-[-1.44px] text-white">
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

export default AboutDesc;