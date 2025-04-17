'use client';

import {useEffect, useRef} from 'react';
import * as pdfJS from 'pdfjs-dist';
import type {PDFDocumentProxy, PDFPageProxy} from 'pdfjs-dist';

interface PDFViewerProps {
    url: string;
}

export default function PDFViewer({url}: PDFViewerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isMounted = useRef(false);

    useEffect(() => {
        // Prevent running on server or multiple times
        if (typeof window === 'undefined' || isMounted.current) return;

        isMounted.current = true;

        const loadPDF = async () => {
            // Set the worker source to the file in the public folder
            pdfJS.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

            // Load the PDF document
            const loadingTask = pdfJS.getDocument(url);
            const pdf: PDFDocumentProxy = await loadingTask.promise;
            const numPages = pdf.numPages;

            // Render each page
            for (let i = 1; i <= numPages; i++) {
                const page: PDFPageProxy = await pdf.getPage(i);
                const scale = 1.5; // Fixed scale for rendering; adjust as needed
                const viewport = page.getViewport({scale});

                // Create a canvas for each page
                const canvas = document.createElement('canvas');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                const context = canvas.getContext('2d');
                if (context) {
                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport,
                    };
                    await page.render(renderContext).promise;
                }

                // Apply responsive styling
                canvas.style.width = '100%';
                canvas.style.height = 'auto';
                canvas.style.marginBottom = '10px'; // Space between pages
                containerRef.current?.appendChild(canvas);
            }
        };

        loadPDF().catch(console.error);

        // Cleanup on unmount
        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = ''; // Clear canvases
            }
        };
    }, [url]);

    return <div ref={containerRef} style={{width: '100%'}}/>;
}