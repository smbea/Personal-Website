import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    contentDiv: {
        marginTop: "-5px",
        width: "inherit",
        height: "2rem",
        background: "var(--pink)",
        fontSize: "14px",
        display: "flex",
        padding: "1px",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    },
});

export const Footer = () => {
    const styles = useStyles();

    return (
        <div className={styles.contentDiv}>
            Beatriz Mendes 2020
        </div>
    );
};

export default Footer;
