// components/ReactPdfViewer.tsx
'use client';
import {Document, Page, pdfjs} from 'react-pdf';
import {useEffect, useState} from "react";

// Point to PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ReactPdfViewer({file}: { file: string }) {
    const [numPages, setNumPages] = useState<number>(0);
    const [containerWidth, setContainerWidth] = useState(0);

    // 1) Track window width (or you could track a ref to the parent container)
    useEffect(() => {
        function updateWidth() {
            // leave some padding: 2rem each side = 32 px total
            const w = Math.min(window.innerWidth - 32, 1921);
            setContainerWidth(w);
        }

        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const onDocumentLoadSuccess = ({numPages}: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <Document className={"flex flex-col max-w-[1440px] gap-4 w-full items-center justify-center"} file={file}
                  onLoadError={console.error} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from({length: numPages}, (__, index) => (
                <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={containerWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                />
            ))}
        </Document>
    );
}
