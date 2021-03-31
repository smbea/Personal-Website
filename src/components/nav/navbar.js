import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import NavBarSkeleton from "./navbar-skeleton";

const useStyles = createUseStyles({
    navBarContainer: {
        width: "100vw",
        position: "fixed",
        fontSize: "18px",
        zIndex: "100",
    },
    navBarContainerScrolled: {
        boxShadow: "var(--box-shadow)",
        background: "var(--background)",
        "& > nav": {
            margin: "0.2em 2em",
        },
    },
});

export const NavBar = () => {
    const classes = useStyles();
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
        <div className={`${classes.navBarContainer} ${scroll ? classes.navBarContainerScrolled : null}`}>
            <NavBarSkeleton />
        </div>
    );
};

export default NavBar;
