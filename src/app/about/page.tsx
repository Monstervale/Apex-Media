import AboutTitle from "@/components/AboutTitle";
import AboutDesc from "@/components/AboutDesc";
import AboutMeet from "@/components/AboutMeet";
import AboutMap from "@/components/AboutMap";
import AboutAnswerCard from "@/components/AboutAnswerCard";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Image from "next/image";

const Page = () => {
    return (
        <div
            className="relative flex flex-col gap-12 bg-neutral-950 max-w-[2140px] min-h-screen m-auto">
            <div className="absolute">
                <Image src={"/yellow-shad-r.svg"} className="w-full h-full" alt={"shad"} width={0} height={0}/>
            </div>
            <div className="w-full flex gap-12 flex-col items-center justify-center">
                <AboutTitle/>
                <AboutDesc/>
                <AboutMeet/>
                <AboutMap/>
                <AboutAnswerCard/>
            </div>

            <Banner/>
            <Footer/>
        </div>
    );
};

export default Page;