'use client'

import Head from "next/head";
import dynamic from "next/dynamic";
import {PulsingDotsLoader} from "@/components/PulsingDotsLoader";

const PDFIframeViewer = dynamic(() => import("@/components/PDFViewer"), {
    ssr: false,
    loading: () => <PulsingDotsLoader/>
})


const PdfPage = () => {

    return (
        <div
            className="w-full flex flex-col items-center max-w-[1440px] mx-auto justify-center min-h-screen pt-[60px] md:pt-[80px] text-white">
            <Head>
                <title>PDF Viewer Example</title>
            </Head>

            <main className={`flex items-center justify-center flex-col w-full`}>
                <PDFIframeViewer
                    pdfUrl="/docs/pitchdeck.pdf"
                    height="800px"
                    title="Sample PDF Document"
                />
            </main>

        </div>
    );
};

export default PdfPage;