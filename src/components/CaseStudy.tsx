import { motion } from "framer-motion";
import Image from "next/image";

interface CaseStudyProps {
    logoClassName: string;
    ath: string;
    type: string;
    name: string
    coinName?: string
    description: string
    service: string
    boxShadowStyle: string
    imgSrc1: string
    img1Width: number
    img1Height: number
    imgSrc2?: string
    img2Width?: number
    img2Height?: number

}

const CaseStudy = ({
                       logoClassName,
                       ath,
                       type,
                       imgSrc1,
                       img1Height,
                       img2Height,
                       imgSrc2,
                       img1Width,
                       img2Width,
                       coinName,
                       service,
                       boxShadowStyle,
                       name,
                       description
                   }: CaseStudyProps) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: 'easeOut'}}
            viewport={{once: true}}
            className="flex flex-col md:flex-row px-4 py-6 md:px-6 md:py-6 gap-4 md:gap-6 items-center justify-center self-stretch rounded-[24px]"
             style={{
                 border: '1px solid rgba(255, 255, 255, 0.10)',
                 background: 'radial-gradient(53.7% 53.79% at 46.3% 53.12%, rgba(0, 0, 0, 0.00) 0%, rgba(255, 255, 255, 0.05) 100%), #000'

             }}
        >
            <div style={{
                boxShadow: boxShadowStyle,
                backgroundColor: logoClassName
            }} className={`w-full md:max-w-[265px] h-[219px] md:min-h-[273px] md:h-full flex items-center justify-center rounded-[10px] hover:scale-105 transition duration-200 ease-in-out ${logoClassName}`}>
                {type === "row" ?
                    <div className="flex gap-2 items-center justify-center">
                        <Image src={imgSrc1} alt={'img'} width={img1Width} height={img1Height}/>
                        {imgSrc2 &&
                            <Image src={imgSrc2} alt={'img'} width={img2Width} height={img2Height}/>}
                    </div> : <div className="flex flex-col items-center gap-2 justify-center">
                        <Image src={imgSrc1} alt={'img'} width={img1Width} height={img1Height}/>
                        {imgSrc2 && <Image src={imgSrc2} alt={'img'} width={img2Width} height={img2Height}/>}
                    </div>}
            </div>

            <div className="flex w-full flex-col gap-2 items-start">
                <div
                    style={{
                        border: '1px solid rgba(210, 209, 209, 0.10)',
                    }}
                    className="px-6 font-outfit text-[#D2D1D1] text-[14px] md:text-[16px] py-2.5 font-medium bg-[#151515] rounded-[70px]">
                    {ath}
                </div>

                <div className="flex gap-2.5 items-center justify-center">
                    <div className="font-outfit text-white capitalize text-[30px] md:text-[60px] font-bold">
                        {name}
                    </div>
                    <Image src={"/svg/verify.svg"} alt={"verify"} width={33.999} height={31.164}/>
                </div>

                {coinName && <div className="font-outfit text-[#F4520E] uppercase text-[20px] md:text-[30px] font-bold">
                    {coinName}
                </div>}

                <div className="text-[#D2D1D1] font-outfit text-[14px] md:text-[20px] font-normal">
                    {description}
                </div>

                <div className="flex w-full items-center justify-start ">
                    <div className="text-white font-medium text-[14px] md:text-[16px]">
                        {service}
                    </div>

                    {/*<div className="flex gap-2 md:gap-4 items-center">*/}
                    {/*    <Image src={"/svg/orange-arrow.svg"} alt={"arrow"} width={16.971} height={0}/>*/}
                    {/*    <div className="text-[14px] md:text-[16px] font-medium font-outfit text-[#F4520E]">*/}
                    {/*        Dextools*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>
        </motion.div>
    );
};

export default CaseStudy;