import React from "react";
import { createUseStyles } from "react-jss";
import { useWindowSize } from "../hooks/window-size";
import wave from "../images/wave.svg";
import waveStatic from "../images/waveStatic.png";

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

    waveStatic: {
        width: "100%",
        height: "fit-content",
        objectFit: "cover",
    },

});

export const Wave = () => {
    const styles = useStyles();
    const desktop = (useWindowSize() === "desktop");

    const WaveImage = () => {
        if (!desktop)
            return (
                <img className={styles.waveStatic} src={waveStatic}/>

            );
        else return (
            <div>
                <div className={`${styles.wave} wave` }/>
                <div className={`${styles.wave} wave` }/>
            </div>
        );
    };

    return (
        <div className={styles.waveContainer}>
            <WaveImage />
        </div>

    );
};

export default Wave;
