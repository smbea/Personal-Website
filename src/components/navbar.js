import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Bigb from "../images/bigb.inline.svg";
import DarkModeToggle from "react-dark-mode-toggle";

const useStyles = createUseStyles({
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        height: "70px",
        width: "96vw",
        position: "absolute",
        margin: "1.2em 2em",
    },
    navItem: {
        margin: "1em",
    },
    navTextItems: {
        marginRight: "2em",
        display: "flex",
        alignItems: "flex-start",
        maxHeight: "30px",
    },
});

export const NavBar = () => {
    const classes = useStyles();
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <nav className={classes.navBar}>
            <img src={Bigb} height="120px"/>
            <div className={`${classes.navTextItems} runningtext`}>
                <div>
                    <span className={classes.navItem}>About Me</span>
                    <span className={classes.navItem}>Projects</span>
                    <span className={classes.navItem}>CV</span>
                    <span className={classes.navItem}>Contact Me</span>
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
