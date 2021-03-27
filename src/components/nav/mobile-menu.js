import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Hamburger from "./hamburger";
import NavItems from "./nav-items";

const useStyles = createUseStyles({
    hamburgerMenu: {
        width: "100vw",
        height: "100vh",
        position: "absolute",
        background: "var(--pink)",
        top: 0,
        left: 0,
        display: "none",
        zIndex: "0",
        "&.open": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        "& span": {
            margin: "1em",
            fontSize: "1.5rem",
        },

    },
});


export const MobileMenu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const showMenu = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div id="hamburgerMenu" className={`${classes.hamburgerMenu} ${open ? "open" : null}`}>
                <NavItems showMenu={showMenu}/>
            </div>
            <Hamburger callback={showMenu} open={open}/>

        </div>
    );
};

export default MobileMenu;
