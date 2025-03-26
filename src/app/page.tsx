import TitleSection from "@/components/TitleSection";
import Brands from "@/components/Brands";
import ApexMediaSection from "@/components/ApexMediaSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Banner from "@/components/Banner";


export default function Home() {
    return (
        <div
            className="bg-neutral-950 max-w-[2140px] items-center justify-center min-h-screen m-auto flex flex-col gap-8 md:gap-10">
            <TitleSection/>
            <Brands/>
            <ApexMediaSection/>
            <Services/>
            <Card/>
            <Banner/>
            <Footer/>
        </div>
    );
}
