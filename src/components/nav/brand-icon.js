import React from "react";
import { createUseStyles } from "react-jss";
import Bigb from "../../images/bigb.inline.svg";
import BigbLight from "../../images/bigb.inline.dark.svg";

import scrollTo from "gatsby-plugin-smoothscroll";

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
    },
    a: {
        cursor: "pointer",
    },
});


export const BrandIcon = ({ scroll }) => {
    const classes = useStyles();

    return (
        <a className={classes.a} onClick={() => scrollTo("#home")}>
            <img
                src={Bigb}
                className={`${scroll ? classes.brandIconScroll : classes.brandIcon} darkIcon`} height="120px"
            />
            <img
                src={BigbLight}
                className={`${scroll ? classes.brandIconScroll : classes.brandIcon} lightIcon`} height="120px"
            />
        </a>

    );
};

export default BrandIcon;
