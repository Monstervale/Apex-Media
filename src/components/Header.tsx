"use client"
import {useState, useEffect} from 'react';
import Image from "next/image";
import {navItems} from "@/lib/constants";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import MobileNavBar from "@/components/MobileNavBar";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change the threshold (50) as needed
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <div
            className={`fixed w-full flex md:px-10 transition-colors duration-300
            z-50
            ${scrolled ? 'bg-[#161515]' : 'bg-white/5 backdrop-blur-lg'}`}>
            <div className="flex w-full h-full items-center justify-between p-4">
                {/* Nav lists */}
                <nav
                    className="list-none items-center justify-center h-full flex gap-[75px] font-outfit font-medium text-[16px] text-white">
                    {/* Logo */}
                    <Link href={"/"}>
                        <li className="inline-flex h-full pt-[9px] px-4">
                            <Image src={"/svg/AP.svg"} alt={"ap"} width={42} height={29}/>
                            <Image src={"/svg/E.svg"} alt={"e"} width={21} height={29}/>
                            <Image src={"/svg/X.svg"} alt={"x"} width={21} height={29}/>
                        </li>
                    </Link>
                    {navItems.map((item) => (
                        <li key={item.id}
                            className="hidden md:inline-block hover:text-orange-500 transition-colors duration-100 ease-in-out">
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}

                    <Link
                        href={"/deck"}
                        className="hidden md:inline-block cursor-pointer hover:text-orange-500 transition-colors duration-100 ease-in-out">
                        Deck
                    </Link>
                </nav>

                <div
                    className="flex md:hidden transition-transform duration-300"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <div className="text-white">
                        <CloseIcon/>
                    </div> : <Image
                        src="/svg/mnb icon.svg"
                        alt="mobile navbar icon"
                        width={17}
                        height={10}
                        className={`transition-transform duration-300 `}
                    />}
                </div>

                {/* Schedule A Call Button */}
                <div className="hidden md:flex ">
                    <Link href={"https://calendly.com/theapexmediahub"} target="_blank" rel="noopener noreferrer">
                        <Button className={"font-outfit !text-[16px]"} variant={'orange'}>
                            Schedule A Call
                        </Button>
                    </Link>

                </div>

                <MobileNavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

            </div>
        </div>
    )
        ;
};

export default Header;
