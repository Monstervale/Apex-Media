'use client'

import Footer from "@/components/Footer";
// import ReactPdfViewer from "@/components/ReactPdfViewer";
import dynamic from "next/dynamic";

const ReactPdfViewer = dynamic(() => import('@/components/ReactPdfViewer'), {
    ssr: false,
});

const DeckPage = () => {
    return (
        <div
            className="w-full flex flex-col items-center gap-[60px] mx-auto justify-center min-h-screen pt-[80px] lg:pt-[100px] text-white">

            {/*<div className={"w-full flex flex-col gap-4 items-center max-w-[1440px]"}>*/}
            {/*    {slides.map((slide) => (*/}
            {/*        <Image key={slide.id} src={slide.src} alt={slide.alt} width={1921} height={1080}/>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <ReactPdfViewer file="/docs/pitchdeck.pdf"/>

            <Footer/>
        </div>
    );
};

export default DeckPage;