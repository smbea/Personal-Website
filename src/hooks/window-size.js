import { useState, useEffect } from "react";

const getDevice = () => {
    if (document.documentElement.clientWidth > 1024)
        return "desktop";
    else if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth >= 650)
        return "tablet";
    else return "mobile";
};

export const useWindowSize = () => {

    const [device, setDevice] = useState("mobile");

    const handleResize = () => {
        setDevice(getDevice());
    };

    useEffect(() => {
        if (typeof window === "undefined") return null;
        setDevice(getDevice());
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return device;
};
