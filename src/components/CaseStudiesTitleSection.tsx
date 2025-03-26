'use client'

import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const CaseStudiesTitleSection = () => {
    return (
        <div
            className="w-full px-[21px] md:px-[205px] flex-col gap-[30px] pt-[84px] md:pt-[175px] flex items-center justify-center">

            <div className="flex flex-col items-center justify-center h-full">
                {/*Title*/}
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
                    Case studies
                </motion.div>

                {/*Description*/}
                <motion.div
                    className="flex items-center justify-center w-full text-center text-white font-outfit text-[16px] md:text-[20px] font-normal md:leading-[40px]"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                    viewport={{once: true}}
                >
                    <p>
                        We’ve worked with top-tier projects across marketing and fundraising, delivering real results.
                        Here’s a look at some of our success stories.
                    </p>
                </motion.div>
            </div>


            <div className="hidden z-10 md:flex gap-4 items-center justify-center h-full">
                <Link href={"/contact-us"}>
                    <Button className="font-outfit text-[16px] font-medium" variant={"transparent"}>
                        Work With US
                    </Button>
                </Link>
                <Link href={"/services"}>
                    <Button className="font-outfit text-[16px] font-medium" variant={"transparent"}>
                        See Our Services
                    </Button>
                </Link>
            </div>

        </div>
    );
};

export default CaseStudiesTitleSection;