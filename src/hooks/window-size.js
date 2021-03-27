import { useState, useEffect } from "react";

const getDevice = () => {
    if (document.documentElement.clientWidth > 800)
        return "desktop";
    else if (document.documentElement.clientWidth <= 800 && document.documentElement.clientWidth >= 650)
        return "tablet";
    else return "mobile";
};

export const useWindowSize = () => {

    const [device, setDevice] = useState(getDevice());

    const handleResize = () => {
        setDevice(getDevice());
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return device;
};
