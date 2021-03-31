import React from "react";
import { createUseStyles } from "react-jss";
import Bigb from "../../images/bigb.inline.svg";
import BigbLight from "../../images/bigb.inline.dark.svg";

import scrollTo from "gatsby-plugin-smoothscroll";
import { useWindowSize } from "../../hooks/window-size";

const useStyles = createUseStyles({
    brandIcon: {
        transition: "0.5s",
        maxHeight: "120px",
        minHeight: "100px",
        height: "10vw",
    },
    brandIconScroll: {
        transition: "0.5s",
        height: "50px",
        alignItems: "center",
    },
    a: {
        cursor: "pointer",
    },
});


export const BrandIcon = ({ scroll }) => {
    const classes = useStyles();
    const mobile = (useWindowSize() === "mobile");

    const svg = (src, iconClass) => {
        if (scroll || mobile)
            return (
                <img
                    src={src}
                    className={ `${classes.brandIconScroll} ${iconClass}`} height="120px"
                    alt="Logo"
                />
            );
        else return (
            <img
                src={src}
                className={ `${classes.brandIcon}  ${iconClass}`} height="120px"
                alt="Logo"
            />
        );
    };

    return (
        <a className={classes.a} onClick={() => scrollTo("#home")}>
            {svg(Bigb, "darkIcon")}
            {svg(BigbLight, "lightIcon")}
        </a>

    );
};

export default BrandIcon;
