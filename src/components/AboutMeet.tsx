'use client'
import Image from "next/image";
import {motion} from "framer-motion";
import {teamDetails} from "@/lib/constants";
import useBreakPoint from "@/hooks/useBreakPoint";

const AboutMeet = () => {
    const breakpoints = useBreakPoint();

    const letterImages = [
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 64,
            height: 76,
            style: {right: "250px", top: "86px"},
            delay: 0.1,
        },

    ];
    return (
        <div className="relative flex flex-col gap-[20px] items-center justify-center pt-[20px]  w-full px-[10px]">
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

            {/* Title */}
            <motion.div
                className="flex items-center justify-center w-full h-full"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <h2
                    className="uppercase font-outfit font-bold text-transparent text-[24px] md:text-[40px]"
                    style={{
                        background:
                            'var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Meet our team
                </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.div
                className="text-white text-[16px] md:text-[20px] font-outfit font-normal text-center"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
                viewport={{once: true}}
            >
                A team of crypto-native experts dedicated to scaling Web3 projects through strategic marketing and
                growth.
            </motion.div>

            {/* Team Cards */}
            <div className="flex flex-wrap justify-center gap-[10px]">
                {teamDetails.map((team, index) => (
                    <motion.div
                        key={index}
                        className="p-4 md:p-6 rounded-[25px] bg-gradient-to-b from-white/40 to-transparent backdrop-blur-[21px] overflow-hidden transition-all duration-500 ease-in-out w-full sm:w-[300px] "
                        initial={{opacity: 0, y: 70}}
                        whileInView={{opacity: 1, y: 0}}
                        whileHover={{scale: 1.02}}
                        viewport={{once: false}}
                    >
                        {/* Larger Screen View: Image on top, text below */}
                        <div className="flex md:flex-col font-outfit flex-row items-start md:items-center gap-2.5">
                            <div
                                className="w-[140px] flex items-end  justify-center h-[124px] md:w-full md:h-[191px] md:rounded-[4px] rounded-[8px] bg-[#FF8E54] flex-shrink-0">

                                {breakpoints === "desktop" ?
                                    <Image src={team.src} alt={team.name}
                                           width={team.width}
                                           height={team.height}/> :

                                    <Image src={team.src} alt={team.name}
                                           width={team.mobileWidth}
                                           height={team.mobileHeight}/>
                                }

                            </div>

                            <div className="flex flex-col md:gap-2 md:pt-[12px]">
                                <div
                                    className="text-[16px] md:text-[20px] font-bold text-[#FF9A70] leading-[30px]">
                                    {team.name}
                                </div>
                                <div className="text-[12px] md:text-[16px] text-white font-medium leading-[24px]">
                                    {team.position}
                                </div>
                                <div className="text-[16px] font-[400px] text-[#A6A6A6] leading-[24px]">
                                    {team.description}
                                </div>
                            </div>

                        </div>

                        {/* Mobile View: Image left, text right */}
                        {/*<div className="flex flex-row sm:hidden items-center gap-4">*/}
                        {/*    /!* Image *!/*/}
                        {/*    <div className="w-[140px] h-[124px] flex-shrink-0">*/}
                        {/*        <Image src={team.src} alt={team.name} width={140} height={130} className="rounded-lg" />*/}
                        {/*    </div>*/}

                        {/*    /!* Text Content *!/*/}
                        {/*    <div className="flex flex-col text-left ">*/}
                        {/*        <div className="text-[16px] font-bold text-[#FF9A70] leading-[30px]">*/}
                        {/*            {team.name}*/}
                        {/*        </div>*/}
                        {/*        <div className="text-[12px] text-white font-medium leading-[24px]">*/}
                        {/*            {team.position}*/}
                        {/*        </div>*/}
                        {/*        <div className="text-[16px] text-[#A6A6A6] leading-[24px]">*/}
                        {/*            {team.description}*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutMeet;
