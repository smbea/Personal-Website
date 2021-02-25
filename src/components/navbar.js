import React  from "react";
import { createUseStyles } from "react-jss";
import Bigb from "../images/bigb.inline.svg";

const useStyles = createUseStyles({
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        height: "70px",
        width: "100vw",
        position: "absolute",
        margin: "1em",
    },
    navItem: {
        margin: "1em",
    },
    navTextItems: {
        marginRight: "2em",
    },
});

export const NavBar = () => {
    const classes = useStyles();
    return (
        <nav className={classes.navBar}>
            <img src={Bigb} height="120px"/>
            <div className={`${classes.navTextItems} runningtext`}>
                <span className={classes.navItem}>About Me</span>
                <span className={classes.navItem}>Projects</span>
                <span className={classes.navItem}>CV</span>
                <span className={classes.navItem}>Contact Me</span>
            </div>
        </nav>
    );
};

export default NavBar;
