import React from 'react';

interface PDFIframeViewerProps {
    pdfUrl: string;
    width?: string | number;
    height?: string | number;
    title?: string;
}

const PDFIframeViewer: React.FC<PDFIframeViewerProps> = ({
                                                             pdfUrl,
                                                             width = '100%',
                                                             height = '600px',
                                                             title = 'PDF Document'
                                                         }) => {
    return (
        <div className="w-full h-full">
            <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
                width={width}
                height={height}
                title={title}
                className="pdf-iframe"
            />


        </div>
    );
};

export default PDFIframeViewer;