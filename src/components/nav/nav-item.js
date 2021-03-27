import React from "react";
import { createUseStyles } from "react-jss";
import { useWindowSize } from "../../hooks/window-size";
import yellowBlob from "../../images/yellowBlob.svg";
import scrollTo from "gatsby-plugin-smoothscroll";

const useStyles = createUseStyles({
    navItem: {
        margin: "0 1em",
        position: "relative",
        "& > a": {
            textDecoration: "none",
            color: "var(--text-color)",
            cursor: "pointer",
        },
        "&:hover > img": {
            transition: "0.5s",
            opacity: 1        },
        "&.mobile": {
            margin: "0.5em 0",
            fontSize: "1.8rem",
        },
    },
    hoverBlob: {
        position: "absolute",
        zIndex: "-1",
        opacity: 0,
        left: "-8px",
        top: "-4px",
    },
});


export const NavItem = ({ text, href, showMenu }) => {
    const styles = useStyles();
    const mobile = (useWindowSize() === "mobile");

    const scrollToElement = () => {
        scrollTo(href);
        if (mobile)
            showMenu();
    };

    return (
        <div className={mobile ? `${styles.navItem} mobile` : styles.navItem}>
            <img className={styles.hoverBlob} src={yellowBlob} height="20px"/>
            <a onClick={scrollToElement}>{text}</a>
        </div>

    );
};

export default NavItem;
