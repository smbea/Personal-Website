import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import NavBarSkeleton from "./navbar-skeleton";

const useStyles = createUseStyles({
    navBarContainer: {
        width: "100vw",
        position: "fixed",
        fontSize: "18px",
        zIndex: "1",
        zIndex: "100",
    },
    navBarContainerScrolled: {
        boxShadow: "0px 4px 10px rgb(214 214 214 / 24%)",
        background: "white",
        "& > nav": {
            alignItems: "center",
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
