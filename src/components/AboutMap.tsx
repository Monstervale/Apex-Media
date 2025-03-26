'use client'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import DirectMessageButton from "@/components/DirectMessageButton";
import EmailContactButton from "@/components/EmailContactButton";
import useBreakPoint from "@/hooks/useBreakPoint";
import Link from "next/link";

// Define custom CSS for markers
const styles = `
  .marker-newyork {
    left: 11.6%; /* 45.33px / 400px */
    top: 37.21%;  /* 88.65px / 238.245px */
  }
  .marker-california {
    left: 26.29%; /* 85.15px / 400px */
    top: 26.50%;  /* 70.26px / 238.245px */
  }
  .marker-england {
    left: 37.83%; /* 151.3px / 400px */
    top: 23.80%;  /* 56.71px / 238.245px */
  }
  .marker-india {
    left: 57.12%; /* 228.48px / 400px */
    top: 44.91%;  /* 107px / 238.245px */
  }
  .marker-srilanka {
    left: 58.35%; /* 233.38px / 400px */
    top: 61.36%;  /* 146px / 238.245px */
  }
  .marker-australia {
    left: 72.28%; /* 289.13px / 400px */
    top: 67.92%;  /* 162px / 238.245px */
  }

  @media (min-width: 768px) {
    .marker-newyork {
      left: 22.97%; /* 150px / 653px */
      top: 24.03%;  /* 93px / 387px */
    }
    .marker-california {
      left: 9.65%;  /* 63px / 653px */
      top: 36.95%;  /* 143px / 387px */
    }
    .marker-england {
      left: 37.83%; /* 247px / 653px */
      top: 25.06%;  /* 97px / 387px */
    }
    .marker-india {
      left: 57.12%; /* 373px / 653px */
      top: 46.25%;  /* 179px / 387px */
    }
    .marker-srilanka {
      left: 58.35%; /* 381px / 653px */
      top: 61.24%;  /* 236px / 387px */
    }
    .marker-australia {
      left: 72.28%; /* 472px / 653px */
      top: 69.25%;  /* 268px / 387px */
    }
  }
  
  /* Mobile positions (based on 400px x 238.245px map) */
  .dot-newyork {
    left: 17.34%; /* 76.56px / 400px */
    top: 43.60%;  /* 104.65px / 238.245px */
  }
  .dot-california {
    left: 30.78%; /* 114px / 400px */
    top: 30.46%;  /* 89.26px / 238.245px */
  }
  .dot-england {
    left: 45.64%; /* 182.54px / 400px */
    top: 31.78%;  /* 75.72px / 238.245px */
  }
  .dot-india {
    left: 64.93%; /* 259.72px / 400px */
    top: 52.96%;  /* 126.2px / 238.245px */
  }
  .dot-srilanka {
    left: 66.00%; /* 264px / 400px */
    top: 58.39%;  /* 139.13px / 238.245px */
  }
  .dot-australia {
    left: 80.09%; /* 320.37px / 400px */
    top: 75.98%;  /* 180.99px / 238.245px */
  }

  /* Desktop positions (based on 653px x 387px map) */
  @media (min-width: 768px) {
    .dot-newyork {
      left: 30.78%; /* 201px / 653px */
      top: 30.75%;  /* 119px / 387px */
    }
    .dot-california {
      left: 17.46%; /* 114px / 653px */
      top: 43.67%;  /* 169px / 387px */
    }
    .dot-england {
      left: 45.64%; /* 298px / 653px */
      top: 31.78%;  /* 123px / 387px */
    }
    .dot-india {
      left: 64.93%; /* 424px / 653px */
      top: 52.97%;  /* 205px / 387px */
    }
    .dot-srilanka {
      left: 66.00%; /* 431px / 653px */
      top: 58.40%;  /* 226px / 387px */
    }
    .dot-australia {
      left: 80.09%; /* 523px / 653px */
      top: 75.97%;  /* 294px / 387px */
    }
  }
`;

const AboutMap = () => {
    const breakPoint = useBreakPoint();

    const letterImages = [
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 71,
            height: 96,
            style: {left: "30.93%", top: "41.60%"}, // 202px / 653px, 161px / 387px
            delay: 0,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 64,
            height: 76,
            style: {left: "107.20%", top: "38.76%"}, // 700px / 653px, 150px / 387px
            delay: 0.1,
        },
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 71,
            height: 96,
            style: {left: "12.56%", bottom: "51.16%"}, // 82px / 653px, 198px / 387px
            delay: 0.3,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 34,
            height: 48,
            style: {left: "62.17%", bottom: "1.29%"}, // 406px / 653px, 5px / 387px
            delay: 0.4,
        },
    ];

    return (
        <div
            className="relative flex max-w-[1440px] w-full md:flex-row flex-col gap-4 h-full md:min-h-[485px] items-center justify-between">
            <style>{styles}</style>

            {breakPoint === "desktop" &&
                letterImages.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: -100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, delay: img.delay, ease: "easeOut"}}
                        style={{position: "absolute", ...img.style}}
                    >
                        <Image src={img.src} alt={img.alt} width={img.width} height={img.height}/>
                    </motion.div>
                ))}

            {/* Left Side */}
            <motion.div
                className="flex flex-col justify-center items-center md:items-start px-[8px] md:px-[54px] flex-shrink-0"
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
                viewport={{once: true}}
            >
                <div
                    className="text-[24px] text-white md:text-[48px] font-medium font-outfit text-center md:text-start">
                    We are a global brand
                </div>
                <div
                    className="text-[16px] md:text-[18px] text-[#CFCFCF] font-normal leading-[28px] md:leading-[32px] pb-[12px] text-center md:text-start">
                    Our staff work remotely around the globe!
                </div>
                <motion.div
                    className="flex flex-row items-center justify-center md:justify-start gap-[7px] md:gap-4 pt-4"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    <Link href={"https://calendly.com/theapexmediahub"} target="_blank" rel="noopener noreferrer">
                        <Button className="text-[12px] font-outfit md:text-[16px]" variant={"transparent"}>Schedule A Call</Button>
                    </Link>
                    <EmailContactButton/>
                    <DirectMessageButton/>
                </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div
                className="relative w-full aspect-[653/387]"
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
                viewport={{once: true}}
            >
                <Image
                    className="absolute top-0 left-0 w-full h-full object-contain mix-blend-luminosity"
                    src="/svg/map.svg"
                    alt="map"
                    width={653}
                    height={387}
                />

                {/* /!*New York *!/*/}
                {/*<div*/}
                {/*    className="absolute marker-newyork flex items-center justify-center bg-[#161616] px-2 md:px-[8px] py-[2px] rounded-[3px] text-white text-[8px] md:text-[12px] font-outfit">*/}
                {/*    New York*/}
                {/*    <Image*/}
                {/*        className="absolute left-[31px] md:left-[48px] bottom-[-3.5px] w-[5.3px] md:w-[8.66px] h-[4.6px] md:h-[7.5px]"*/}
                {/*        src="/svg/Union.svg"*/}
                {/*        alt="union"*/}
                {/*        width={0}*/}
                {/*        height={0}*/}
                {/*    />*/}

                {/*</div>*/}
                {/*/!* Add blinking dots with percentage positions if needed *!/*/}


                {/*/!* California *!/*/}
                {/*<div*/}
                {/*    className="absolute marker-california flex items-center justify-center bg-[#161616] px-[8px] py-[2px] rounded-[3px] text-white font-outfit text-[8px] md:text-[12px]">*/}
                {/*    California*/}
                {/*    <Image*/}
                {/*        className="absolute left-[28.5px] md:left-[48px] bottom-[-3.5px] w-[5.3px] md:w-[8.66px] h-[4.6px] md:h-[7.5px]"*/}
                {/*        src="/svg/Union.svg"*/}
                {/*        alt="union"*/}
                {/*        width={0}*/}
                {/*        height={0}*/}
                {/*    />*/}
                {/*</div>*/}

                {/*/!* England *!/*/}
                {/*<div*/}
                {/*    className="absolute marker-england  bg-[#161616] px-[8px] py-[2px] rounded-[3px] text-white font-outfit text-[8px] md:text-[12px]">*/}
                {/*    England*/}
                {/*    <Image*/}
                {/*        className="absolute left-[30px] md:left-[48px] bottom-[-3.5px] w-[5.3px] md:w-[8.66px] h-[4.6px] md:h-[7.5px]"*/}
                {/*        src="/svg/Union.svg"*/}
                {/*        alt="union"*/}
                {/*        width={0}*/}
                {/*        height={0}*/}
                {/*    />*/}
                {/*</div>*/}

                {/*/!* India *!/*/}
                {/*<div*/}
                {/*    className="absolute marker-india flex items-center justify-center bg-[#161616] px-[18px] py-[2px] rounded-[3px] text-white font-outfit text-[8px] md:text-[12px]">*/}
                {/*    India*/}
                {/*    <Image*/}
                {/*        className="absolute left-[30px] md:left-[48px] bottom-[-3.5px] w-[5.3px] md:w-[8.66px] h-[4.6px] md:h-[7.5px]"*/}
                {/*        src="/svg/Union.svg"*/}
                {/*        alt="union"*/}
                {/*        width={0}*/}
                {/*        height={0}*/}
                {/*    />*/}
                {/*</div>*/}

                {/*/!* Sri Lanka *!/*/}
                {/*<div*/}
                {/*    className="absolute marker-srilanka flex items-center justify-center bg-[#161616] px-[8px] py-[2px] rounded-[3px] text-white font-outfit text-[8px] md:text-[12px]">*/}
                {/*    Sri Lanka*/}
                {/*    <Image*/}
                {/*        className="absolute left-[30px] md:left-[48px] bottom-[14px] md:bottom-[19px] rotate-180 w-[5.3px] md:w-[8.66px] h-[4.6px] md:h-[7.5px]"*/}
                {/*        src="/svg/Union.svg"*/}
                {/*        alt="union"*/}
                {/*        width={0}*/}
                {/*        height={0}*/}
                {/*    />*/}
                {/*</div>*/}

                {/*/!* Australia *!/*/}
                {/*<div*/}
                {/*    className="absolute marker-australia flex items-center justify-center bg-[#161616] px-[18px] py-[2px] rounded-[3px] text-white font-outfit text-[8px] md:text-[12px]">*/}
                {/*    Australia*/}
                {/*    <Image*/}
                {/*        className="absolute left-[30px] md:left-[48px] bottom-[-4px] w-[5.3px] md:w-[8.66px] h-[4.6px] md:h-[7.5px]"*/}
                {/*        src="/svg/Union.svg"*/}
                {/*        alt="union"*/}
                {/*        width={0}*/}
                {/*        height={0}*/}
                {/*    />*/}
                {/*</div>*/}

                {/* Blinking Dots */}
                <div className="absolute dot-newyork animate-blink w-[3px] h-[3px] md:w-[4px] md:-[4px] rounded-full bg-white"></div>
                <div className="absolute dot-california animate-blink2 w-[3px] h-[3px] md:w-[4px] md:-[4px]  rounded-full bg-white"></div>
                <div className="absolute dot-england animate-blink w-[3px] h-[3px] md:w-[4px] md:-[4px]  rounded-full bg-white"></div>
                <div className="absolute dot-india animate-blink2 w-[3px] h-[3px] md:w-[4px] md:-[4px]  rounded-full bg-white"></div>
                <div className="absolute dot-srilanka animate-blink w-[3px] h-[3px] md:w-[4px] md:-[4px]  rounded-full bg-white"></div>
                <div className="absolute dot-australia animate-blink2 w-[3px] h-[3px] md:w-[4px] md:-[4px]  rounded-full bg-white"></div>
            </motion.div>
        </div>
    );
};

export default AboutMap;