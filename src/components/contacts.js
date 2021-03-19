import React from "react";
import { createUseStyles } from "react-jss";
import Layout from "./layout";
import wave from "../images/wave.svg";

const useStyles = createUseStyles({
    contentDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    contactMe: {
        fontSize: "18px",
        marginBottom: "0.5em",
        fontFamily: "Futura",

    },
    email: {
        fontSize: "20px",
        fontFamily: "RamonaBold",
        overflow: "inherit",
        color: "var(--text-color)",

    },
    downloadCVbutton: {
        fontSize: "16px",
        fontFamily: "Futura",
        margin: "3em 0  2em 0",
        background: "var(--yellow)",
        border: "none",
        color: "white",
        borderRadius: "5px",
        padding: "0.6em 1em",
        fontWeight: "bold",
    },
    waveContainer: {
        zIndex: "-1",
        width: "99vw",
        height: "19vh",
        position: "relative",
        overflow: "hidden",
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

export const Contacts = () => {
    const styles = useStyles();

    return (
        <Layout>
            <div className={styles.contentDiv} >
                <span className={styles.contactMe}>If you wish to contact me</span>
                <a className={`${styles.email} link `} href="mailto:bea.smendes98@gmail.com">Email Me</a>
                <a download id="link" href="../images/cv.pdf">
                    <button type="submit" className={styles.downloadCVbutton}>
                        Download CV
                    </button>
                </a>

                <div className={styles.waveContainer}>
                    <div className={styles.wave}/>
                    <div className={styles.wave}/>

                </div>

            </div>
        </Layout>
    );
};

export default Contacts;
