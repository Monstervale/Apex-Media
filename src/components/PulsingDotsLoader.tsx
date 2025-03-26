import React from 'react';
import {cn} from "@/lib/utils";

interface PulsingDotsLoaderProps {
    className?: string;
}
export const PulsingDotsLoader = ({className} : PulsingDotsLoaderProps) => {
    return (
        <div className={cn("loader", className)}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    );
};

