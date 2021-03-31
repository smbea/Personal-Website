import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useWindowSize } from "../../hooks/window-size";
import BrandIcon from "./brand-icon";
import MobileMenu from "./mobile-menu";
import NavItems  from "./nav-items";

const useStyles = createUseStyles({
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        margin: "1.2em 2em",
        alignItems: "center",
    },
});


export const NavBarSkeleton = () => {
    const classes = useStyles();
    const [scroll, setScroll] = useState(false);
    const mobile = (useWindowSize() === "mobile");

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
            <BrandIcon scroll={scroll}/>
            {mobile ? <MobileMenu /> : <NavItems />}
        </nav>
    );
};

export default NavBarSkeleton;
