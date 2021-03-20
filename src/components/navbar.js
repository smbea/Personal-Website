import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Bigb from "../images/bigb.inline.svg";
import DarkModeToggle from "react-dark-mode-toggle";
import yellowBlob from "../images/yellowBlob.svg";

const useStyles = createUseStyles({
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        height: "70px",
        width: "96vw",
        position: "absolute",
        margin: "1.2em 2em",
        fontSize: "18px",
        zIndex: "1",

    },
    navLinks: {
        display: "flex",
    },
    navItem: {
        margin: "0 1em",
        position: "relative",
        "& > a": {
            textDecoration: "none",
            color: "var(--text-color)",
        },
        "&:hover > img": {
            transition: "0.5s",
            opacity: 1        },
    },
    navTextItems: {
        marginRight: "2em",
        display: "flex",
        alignItems: "flex-start",
        maxHeight: "30px",
    },
    hoverBlob: {
        position: "absolute",
        zIndex: "-1",
        opacity: 0,
        left: "-8px",
        top: "-4px",
    },
});

export const NavBar = () => {
    const classes = useStyles();
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <nav className={classes.navBar}>
            <a href="#">
                <img src={Bigb} height="120px"/>
            </a>
            <div className={`${classes.navTextItems} runningtext`}>
                <div className={classes.navLinks}>
                    <div className={classes.navItem} >
                        <img className={classes.hoverBlob} src={yellowBlob} height="20px"/>
                        <a href="#aboutme">About Me</a>
                    </div>
                    <div className={classes.navItem}>
                        <img className={classes.hoverBlob} src={yellowBlob} height="20px"/>
                        <a href="#projects">Projects</a>
                    </div>
                    <div className={classes.navItem}>
                        <img className={classes.hoverBlob} src={yellowBlob} height="20px"/>

                        <a href="#contacts">CV & Contacts</a>
                    </div>
                </div>
                <DarkModeToggle
                    onChange={setIsDarkMode}
                    checked={isDarkMode}
                    size={50}
                />
            </div>
        </nav>
    );
};

export default NavBar;
