import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import ServicesSection from "@/components/ServicesSection";
import Results from "@/components/Results";
import Image from "next/image";

const Page = () => {
    return (
        <div
            className="relative flex flex-col gap-10 bg-neutral-950 max-w-[2140px] min-h-screen m-auto">
            <div className="absolute">
                <Image src={"/yellow-shad-r.svg"} className="w-full h-full" alt={"shad"} width={0} height={0}/>
            </div>
            <ServicesSection/>
            <Results/>
            <Banner/>
            <Footer/>
        </div>
    );
};

export default Page;