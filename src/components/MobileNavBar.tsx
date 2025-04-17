"use client";
import Link from "next/link";
import {mobileNavItems} from "@/lib/constants";
import Image from "next/image";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

interface MobileNavBarProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
}

const MobileNavBar = ({isMenuOpen, setIsMenuOpen}: MobileNavBarProps) => {
    // const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <div
            className={`fixed w-full min-h-screen overflow-x-scroll z-20 top-0 transition-all duration-300 ease-in-out md:hidden bg-black ${isMenuOpen ? 'left-0' : 'left-[-100%]'}`}>

            <div
                className="absolute -top-[10px] -left-[300px] w-[480px] h-[359.487px] flex-shrink-0 opacity-[0.75] blur-[229.16665649414062px] bg-[#F7670B] -rotate-90 z-[-1]"
            />

            <div className="w-full px-5 py-[15px] flex items-center justify-between">
                <Link className="pt-[9px]" href={"/"} onClick={() => setIsMenuOpen(false)}>
                    <li className="inline-flex h-full px-4">
                        <Image src={"/svg/AP.svg"} alt={"ap"} width={42} height={29}/>
                        <Image src={"/svg/E.svg"} alt={"e"} width={21} height={29}/>
                        <Image src={"/svg/X.svg"} alt={"x"} width={21} height={29}/>
                    </li>
                </Link>

                <div className="flex text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <CloseIcon/>
                </div>
            </div>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div
                    className="flex  pt-[60px] flex-col items-center justify-center gap-[57px] w-full text-white">

                    {mobileNavItems.map((item) => (
                        <Link key={item.id} href={item.href}>
                            <div
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center justify-center text-[24px] w-full  font-medium font-outfit cursor-pointer"
                                // onClick={toggleMenu} // Clicking an item should close the menu
                            >
                                {item.label}
                            </div>
                        </Link>
                    ))}


                    {/*/!* Services with Dropdown *!/*/}
                    {/*<Link href={"/services"}>*/}
                    {/*    <div*/}
                    {/*        className="py-2 text-[24px] font-medium font-outfit flex justify-between gap-[5px] items-center cursor-pointer"*/}
                    {/*        onClick={() => {*/}
                    {/*            setIsServicesOpen(!isServicesOpen)*/}
                    {/*            setIsMenuOpen(false)*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        Services*/}
                    {/*        <span>*/}
                    {/*        <Image*/}
                    {/*            src="/svg/vector1.svg"*/}
                    {/*            alt="vector"*/}
                    {/*            width={10}*/}
                    {/*            height={4}*/}
                    {/*            className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}*/}
                    {/*        />*/}
                    {/*    </span>*/}
                    {/*    </div>*/}
                    {/*</Link>*/}
                    {/*{isServicesOpen && (*/}
                    {/*    <div*/}
                    {/*        className="w-full py-2 text-base flex flex-col gap-[28px] items-center justify-center font-medium font-outfit cursor-pointer">*/}
                    {/*        <div*/}
                    {/*            className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-700"></div>*/}
                    {/*        <div>Web3 Marketing</div>*/}
                    {/*        <div*/}
                    {/*            className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-700"></div>*/}
                    {/*        <div>Influencer & KOL Marketing</div>*/}
                    {/*        <div*/}
                    {/*            className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-700"></div>*/}
                    {/*        <div>Investment & Advisory</div>*/}
                    {/*        <div*/}
                    {/*            className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-700"></div>*/}
                    {/*        <div>Fundraising (KOL & VC Rounds)</div>*/}
                    {/*        <div*/}
                    {/*            className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-700"></div>*/}
                    {/*    </div>*/}
                    {/*)}*/}

                </div>
            )}
        </div>
    );
};

export default MobileNavBar;
