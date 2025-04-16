import Image from "next/image";
import {navItems} from "@/lib/constants";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const MyComponent = () => {
    return (
        <footer
            className="relative p-4 md:p-0 flex flex-col items-center justify-center w-full min-h-[481px] md:h-[397px] bg-[#161515] overflow-hidden">
            <div className="flex flex-col items-center justify-start w-full gap-[16px]">
                {/* Logo */}
                <div className="flex-col">
                    <li className="inline-flex h-full px-4">
                        <Image src={"/svg/AP.svg"} alt={"ap"} width={42} height={29}/>
                        <Image src={"/svg/E.svg"} alt={"e"} width={21} height={29}/>
                        <Image src={"/svg/X.svg"} alt={"x"} width={21} height={29}/>
                    </li>
                </div>

                <div className="font-outfit text-[#FF9A70] text-center text-[24px] md:text-[32px] flex font-bold">
                    The Pinnacle of Crypto Marketing
                </div>

                {/*<div className="flex md:hidden text-white text-center text-[16px] font-[400]">*/}
                {/*    It is essentially a crypto marketing agency*/}
                {/*</div>*/}

                <div className={"flex flex-col items-center justify-center w-full gap-[16px]"}>
                    <Link href={"https://t.me/apex_goku"} target="_blank" rel="noopener noreferrer">
                        <Button variant={"transparent"} className="text-[12px] md:text-[16px] font-outfit font-medium">
                            <div className="flex items-center justify-between gap-4">
                                <Image src={'/svg/Arrow 8.svg'} alt={"arrow"} width={12.971} height={6}/>
                                <span>Direct Message</span>
                            </div>
                        </Button>
                    </Link>

                    <Link href={"https://drive.google.com/file/d/1COWrP-6Aoc_ik49veeZUDkC11vgEYnsD/view"} target="_blank" rel="noopener noreferrer">
                        <Button variant={"transparent"} className="text-[12px] md:text-[16px] font-outfit font-medium">
                            <div className="flex items-center justify-between gap-4">
                                {/*<Image src={'/svg/Arrow 8.svg'} alt={"arrow"} width={12.971} height={6}/>*/}
                                <span>Deck</span>
                            </div>
                        </Button>
                    </Link>
                </div>

                <div className="font-outfit text-[#FF9A70] font-[500] text-[24px] flex">
                    Follow Us
                </div>

                <div className="flex flex-row justify-between gap-[24px]">
                    <Link href={"https://t.me/apexmediahub"} target="_blank" rel="noopener noreferrer">
                        <Image src={"/svg/send.svg"} alt={"send"} width={20} height={17}/>
                    </Link>
                    <Link href={"https://x.com/ApexMediaHub"} target="_blank" rel="noopener noreferrer">
                        <Image src={"/svg/logo/X-logo.svg"} alt={"x"} width={16} height={15}/>
                    </Link>
                </div>

                <div
                    className="text-white flex-col gap-6 w-full md:max-w-[497px] flex items-center justify-between  text-[16px] md:text-[24px] font-outfit underline decoration-solid font-[500]">

                    <div className="flex w-full items-center justify-between">
                    {navItems.slice(0, 3).map((item) => (
                        <div key={item.id} className="w-full flex items-center justify-center hover:text-gray-400">
                            {item.id === 2 ? <Link href={item.href}>{item.label}</Link> : <Link href={item.href}>{item.label}</Link>}
                        </div>
                    ))}
                    </div>

                    <div className="flex items-center px-4 justify-center md:hidden w-full h-[1px] ">
                        <div className="w-full h-full bg-[#343434]"/>
                    </div>

                </div>


            </div>
            <div
                className="text-white text-center font-outfit pb-24 md:pb-4 text-[12px] md:text-[16px] font-[500] pt-[42.67px] w-[235px] h-[22.557px]">
                All rights reserved @APEXMEDIA
            </div>

            {/* Circle */}
            <div className="absolute right-[-64px] bottom-[-64px] md:right-[-44px] md:bottom-[-41.38px]">
                <div className="bg-[#F4520E] rounded-[269px] w-[173px] h-[173px] md:w-[269px] md:h-[264.995px]"></div>
            </div>

            {/*Smaller Circle*/}
            <div className="absolute right-[49px] bottom-[39px] md:right-[139px] md:bottom-[93px]">
                <div style={{
                    background: 'rgba(255, 249, 249, 0.13)'
                }} className=" z-[-10px] rounded-[138px] w-[96px] h-[96px] md:w-[168px] md:h-[168px]"></div>
            </div>

        </footer>
    );
};

export default MyComponent;