import CaseStudiesTitleSection from "@/components/CaseStudiesTitleSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Image from "next/image";

const CaseStudiesPage = () => {
    return (
        <div
            className="relative flex flex-col gap-8 md:gap-12 bg-neutral-950 max-w-[2140px] min-h-screen m-auto"
        >
            <div className="absolute hidden md:flex w-full items-center">
                <Image src={"/svg/yellow-shadow.svg"} className="w-full h-full" alt={"shad"} width={0} height={0}/>
            </div>
            <div className="absolute flex md:hidden ">
                <Image src={"/yellow-shad-r.svg"} className="w-full h-full" alt={"shad"} width={0} height={0}/>
            </div>
            <CaseStudiesTitleSection/>
            <CaseStudiesSection/>
            <Banner/>
            <Footer/>
        </div>
    );
};

export default CaseStudiesPage;