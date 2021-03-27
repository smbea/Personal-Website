import React from "react";
import { createUseStyles } from "react-jss";
import wave from "../images/wave.svg";

const useStyles = createUseStyles({
    waveContainer: {
        zIndex: "-1",
        width: "inherit",
        height: "19vh",
        position: "relative",
        overflow: "hidden",
        marginTop: "2em",
    },
    wave: {
        width: "250vw",
        height: "18vh",
        background: `url(${wave}) repeat-x`,
        position: "absolute",
        bottom: "-15px",
        animation: "wave 40s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite",
        transform: "translate3d(0, 0, 0)",

        "&:nth-of-type(2)": {
            bottom: "-20px",
            animation: "wave 25s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 4s ease -1.25s infinite",
            opacity: 0.8,

        },
        "&:nth-of-type(1)": {
            opacity: 1,
        },
    },

});

export const Wave = () => {
    const styles = useStyles();

    return (
        <div className={styles.waveContainer}>
            <div className={styles.wave}/>
            <div className={styles.wave}/>

        </div>

    );
};

export default Wave;
