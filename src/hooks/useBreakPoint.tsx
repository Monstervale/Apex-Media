import { useState, useEffect } from "react";

const useBreakPoint = () => {
    const [breakpoint, setBreakpoint] = useState("desktop");

    useEffect(() => {

        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 768) {
                setBreakpoint("mobile");
            } else {
                setBreakpoint("desktop");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakpoint;
};

export default useBreakPoint;
