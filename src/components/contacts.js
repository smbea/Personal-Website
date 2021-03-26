import React from "react";
import { createUseStyles } from "react-jss";
import { useWindowSize } from "../hooks/window-size";
import FindMe from "./findme";
import Layout from "./layout";
import Wave from "./wave";

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
        cursor: "pointer",
        fontSize: "16px",
        fontFamily: "Futura",
        margin: "3em 0 1.5em 0",
        border: "2px solid var(--yellow)",
        background: "none",
        color: "var(--yellow)",
        borderRadius: "5px",
        padding: "0.6em 1em",
        fontWeight: "bold",
        transition: "0.5s",
        "&:hover": {
            borderRadius: "50px",
            background: "var(--yellow)",
            color: "white",
        },
    },
});

export const Contacts = () => {
    const styles = useStyles();
    const desktop = (useWindowSize() === "desktop");

    return (
        <Layout>
            <div id="contacts" className={styles.contentDiv} >
                <span className={styles.contactMe}>If you wish to contact me</span>
                <a className={`${styles.email} link `} href="mailto:bea.smendes98@gmail.com">Email Me</a>
                <a download id="link" href="../images/cv.pdf">
                    <button type="submit" className={styles.downloadCVbutton}>
                        Download CV
                    </button>
                </a>
                {desktop ?
                    null
                    : <FindMe />}
                <Wave />
            </div>
        </Layout>
    );
};

export default Contacts;
