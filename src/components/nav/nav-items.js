import React from "react";
import { createUseStyles } from "react-jss";
import { useWindowSize } from "../../hooks/window-size";
import ModeToggle from "./mode-toggle";
import NavItem from "./nav-item";

const useStyles = createUseStyles({
    navLinks: {
        display: "flex",
        "&.mobile": {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    navTextItems: {
        marginRight: "1.5em",
        display: "flex",
        alignItems: "center",
        maxHeight: "30px",
        "&.mobile": {
            marginRight: 0,
        },
    },
    hoverBlob: {
        position: "absolute",
        zIndex: "-1",
        opacity: 0,
        left: "-8px",
        top: "-4px",
    },
    navToogle: {
        margin: "0 1em",
        "&.mobile": {
            margin: "1em 0",
        },
    },
});


export const NavItems = ({ showMenu }) => {
    const classes = useStyles();
    const windowSize = useWindowSize();

    return (
        <div className={windowSize === "mobile" ? `${classes.navTextItems} mobile` : `${classes.navTextItems}`}>

            <div className={windowSize === "mobile" ? `${classes.navLinks} mobile` : classes.navLinks }>
                {windowSize === "mobile" ?
                    <NavItem text="Home" href="#home" showMenu={showMenu}/>
                    : null
                }
                <NavItem text="About Me" href="#aboutme" showMenu={showMenu}/>
                <NavItem text="Projects" href="#projects" showMenu={showMenu}/>
                <NavItem text="CV & Contacts" href="#contacts" showMenu={showMenu}/>
                {windowSize === "mobile" ?
                    <div className={`${classes.navToogle} mobile`}>
                        <ModeToggle big={true}/>
                    </div>
                    : null}
            </div>
            <div className={windowSize === "mobile" ? null : classes.navToogle}>
                {windowSize === "mobile" ? null : <ModeToggle/>}
            </div>

        </div>

    );
};

export default NavItems;
