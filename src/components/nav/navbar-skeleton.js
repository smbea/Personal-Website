import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Bigb from "../../images/bigb.inline.svg";
import DarkModeToggle from "react-dark-mode-toggle";
import yellowBlob from "../../images/yellowBlob.svg";
import { useWindowSize } from "../../hooks/window-size";

const useStyles = createUseStyles({
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        margin: "1.2em 2em",
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
        marginRight: "1.5em",
        display: "flex",
        alignItems: "center",
        maxHeight: "30px",
    },
    hoverBlob: {
        position: "absolute",
        zIndex: "-1",
        opacity: 0,
        left: "-8px",
        top: "-4px",
    },
    darkToogle: {
        marginLeft: "1em",
        height: "25px",
    },
    brandIcon: {
        transition: "0.5s",
        maxHeight: "120px",
        minHeight: "100px",
        height: "10vw",
    },
    brandIconScroll: {
        transition: "0.5s",
        height: "40px",
    },
});


export const NavBarSkeleton = () => {
    const classes = useStyles();
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [scroll, setScroll] = useState(false);

    const setNavBar = () => {
        if (document.documentElement.scrollTop > 0) setScroll(true);
        else setScroll(false);
    };

    useEffect(() => {
        setNavBar();
        window.addEventListener("scroll", setNavBar);
    });


    return (
        <nav className={classes.navBar}>
            <a href="#">
                <img src={Bigb} className={scroll ? classes.brandIconScroll : classes.brandIcon} height="120px"/>
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
                <div className={classes.darkToogle}>
                    <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={50}
                    />
                </div>
            </div>
        </nav>
    );
};

export default NavBarSkeleton;
