'use client'

import Image from "next/image";
import {brandsList} from "@/lib/constants";
import useBreakPoint from "@/hooks/useBreakPoint";
import Marquee from "react-fast-marquee";

const Brands = () => {

    const breakpoint = useBreakPoint();


    return (
        <div className="max-w-[1440px] w-full flex items-center justify-center">
            <div className="flex w-full items-center justify-center h-full flex-col gap-2  px-[22px] md:px-10">

                <div className="flex items-center justify-center w-full h-full">
                    <h2 className="uppercase font-outfit text-[24px] md:text-[40px] font-bold bg-clip-text text-transparent"
                        style={{
                            background: 'var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                        Trusted By
                    </h2>
                </div>

                <div className="flex flex-col gap-10 w-full items-center justify-center">
                    {/* First set */}
                    {breakpoint === 'mobile' && <Marquee pauseOnClick={true}>
                        <div
                            className=" flex min-w-[840px] h-full"
                        >
                            {brandsList.slice(0, 23).map((brand) => (
                                <div key={brand.id} className="scroller-item flex items-center justify-center mx-8">
                                    <Image src={brand.src} alt={brand.alt} width={brand.width}
                                           height={brand.height}/>
                                </div>
                            ))}
                        </div>
                    </Marquee>}

                    {/* Second set */}
                    {breakpoint === 'desktop' &&
                        <>
                            <Marquee pauseOnClick={true}>
                                <div
                                    className="flex items-center h-full"
                                >
                                    {brandsList.slice(0, 7).map((brand) => (
                                        <div className="mx-8" key={brand.id}>
                                            <Image src={brand.src} alt={brand.alt} width={brand.width}
                                                   height={brand.height}/>
                                        </div>
                                    ))}
                                </div>
                            </Marquee>

                            <Marquee pauseOnClick={true}>
                                <div
                                    className=" flex items-center justify-between gap-14 h-full"
                                >
                                    {brandsList.slice(7, 14).map((brand) => (
                                        <div key={brand.id} className="mx-8">
                                            <Image src={brand.src} alt={brand.alt} width={brand.width}
                                                   height={brand.height}/>
                                        </div>
                                    ))}
                                </div>
                            </Marquee>

                            <Marquee pauseOnClick={true}>
                                <div
                                    className=" flex items-center h-full"
                                >
                                    {brandsList.slice(14, 21).map((brand) => (
                                        <div key={brand.id} className="mx-8">
                                            <Image src={brand.src} alt={brand.alt} width={brand.width}
                                                   height={brand.height}/>
                                        </div>
                                    ))}
                                </div>
                            </Marquee>

                            {/*<Marquee pauseOnClick={true}>*/}
                            {/*    <div*/}
                            {/*        className=" flex min-w-[840px] h-full"*/}
                            {/*    >*/}
                            {/*        {brandsList.slice(7, 13).map((brand) => (*/}
                            {/*            <div key={brand.id} className="scroller-item flex items-center justify-center mx-8">*/}
                            {/*                <Image src={brand.src} alt={brand.alt} width={brand.width}*/}
                            {/*                       height={brand.height}/>*/}
                            {/*            </div>*/}
                            {/*        ))}*/}
                            {/*    </div>*/}
                            {/*</Marquee>*/}

                            {/*/!* Third set *!/*/}
                            {/*<Marquee pauseOnClick={true}>*/}
                            {/*    <div*/}
                            {/*        className=" flex min-w-[840px] h-full"*/}
                            {/*    >*/}
                            {/*        {brandsList.slice(13, 20).map((brand) => (*/}
                            {/*            <div key={brand.id} className="scroller-item flex items-center justify-center mx-8">*/}
                            {/*                <Image src={brand.src} alt={brand.alt} width={brand.width}*/}
                            {/*                       height={brand.height}/>*/}
                            {/*            </div>*/}
                            {/*        ))}*/}
                            {/*    </div>*/}
                            {/*</Marquee>*/}

                        </>}

                </div>
            </div>
        </div>
    );
};

export default Brands;