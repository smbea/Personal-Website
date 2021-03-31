import React from "react";
import { createUseStyles } from "react-jss";
import { useWindowSize } from "../../hooks/window-size";

const useStyles = createUseStyles({
    shape: {
        position: "absolute",
        zIndex: -1,
        padding: "1em",
        background: "var(--pink)",
        animation: "morph 10s ease-in-out infinite",
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        transition: "all 1s ease-in-out",
        marginTop: "1em",
    },
    dimentionsMobile: {
        marginTop: "8vh",
        width: "200vw",
        height: "60vh",
    },
    dimentionsDesktop: {
        width: "60vw",
        height: "50vw",
        minWidth: "580px",
        maxWidth: "700px",
        minHeight: "500px",
        maxHeight: " 600px",
    },
});

export const BlobShape = () => {
    const classes = useStyles();
    const mobile = (useWindowSize() === "mobile");

    return (
        <div className={mobile ? `${classes.shape} ${classes.dimentionsMobile}` : `${classes.shape} ${classes.dimentionsDesktop}`}/>
    );
};

export default BlobShape;
