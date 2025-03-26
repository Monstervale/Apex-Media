import {cardList} from "@/lib/constants";
import {motion} from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TestimonialsCards = () => {
    const cardVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
    };

    return (

        <Marquee pauseOnClick={true}>
            <div
                className="relative w-full flex flex-row gap-[16px] overflow-x-scroll no-scrollbar md:overflow-hidden pl-4">
                {cardList.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={cardVariants}
                        initial={{opacity: 0}} // Start with invisible title
                        whileInView={{opacity: 1}} // Fade in the title when in view
                        transition={{duration: 0.5, delay: item.id * 0.1}} // Staggered animation
                        viewport={{once: true}}
                        className="flex scroller-item max-w-[261px] md:h-[544px] md:min-w-[490px] flex-col items-start gap-[14px] md:gap-[18px] p-4 md:p-6"
                        style={{
                            borderRadius: "25px",
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0.55%, rgba(255, 255, 255, 0.00) 120%)",
                            backdropFilter: "blur(21px)",
                        }}

                    >
                        {/* Avatar Image */}
                        <motion.div
                            initial={{scale: 0}}
                            whileInView={{scale: 1}}
                            transition={{duration: 0.3}}
                            viewport={{once: false}}
                        >
                            <div
                                className={`flex ${item.id === 1 && "pt-[6px] md:pt-2"} ${item.id === 3 && "pt-1"} ${item.id === 4 && "md:pb-2"} ${item.id === 2 && 'pt-[14px] md:pt-[20px]'} rounded-[70px] w-[70px] h-[70px] md:w-[107px] md:h-[107px] bg-[#FF8E54] items-center justify-center`}>
                                <Image
                                    src={item.avatar}
                                    alt="avatar"
                                    width={107}
                                    height={107}
                                />
                            </div>
                        </motion.div>

                        {/* Star Icon */}
                        <motion.div
                            className="flex gap-[10px]"
                            initial={{x: 50, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            transition={{duration: 0.3, delay: item.id * 0.1 + 0.5, ease: "easeOut"}}
                            viewport={{once: false}}
                        >
                            {Array.from({length: 5}, (_, index) => (
                                <Image
                                    key={index}
                                    src={index < item.star ? "/svg/Vector.svg" : "/svg/empty-star.svg"}
                                    alt="star"
                                    className="w-[22px] h-[20px] md:w-[30px] md:h-[28px]"
                                    width={30}
                                    height={28}
                                />
                            ))}
                        </motion.div>

                        {/* Comment */}
                        <span
                            className="text-white text-justify font-outfit text-[10px] md:text-[20px] font-[400px] leading-6 md:leading-8">
                            {item.comment}
                        </span>

                        {/* Avatar Name and Client */}
                        <div className="text-white md:pt-20 flex flex-col font-poppins">
                            <span className="text-[16px] md:text-[24px] font-[400px]">{item.avatarName}</span>
                            <span className="text-[10px] md:text-[18px] font-[400px]">{item.client}</span>
                        </div>

                        <Image
                            className="absolute rounded-[25px] left-0 bottom-0 w-[229px] h-[145px] md:w-[340.545px] md:h-[207.371px]"
                            src={"/svg/66.svg"}
                            alt={"66"}
                            width={0} height={0}/>

                    </motion.div>
                ))}
            </div>

        </Marquee>

    );
};

export default TestimonialsCards;