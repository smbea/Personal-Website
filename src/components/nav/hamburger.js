import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    label: {
        display: "flex",
        flexDirection: "column",
        width: "30px",
        cursor: "pointer",
        padding: "1em 1em",
        zIndex: "1",
        "& span": {
            background: "var(--text-color)",
            borderRadius: "100px",
            height: "4px",
            margin: "2px 0",
            transition: ".4s  cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        },
        "& span:nth-of-type(1)": {
            width: "50%",
        },
        "& span:nth-of-type(2)": {
            width: "100%",
        },
        "& span:nth-of-type(3)": {
            width: "75%",
        },
    },
    input: {
        display: "none",
        "&:checked ~ span:nth-of-type(1)": {
            transformOrigin: "bottom",
            transform: "rotatez(45deg) translate(3px,0px)",
        },
        "&:checked ~ span:nth-of-type(2)": {
            transformOrigin: "top",
            transform: "rotatez(-45deg)",
        },
        "&:checked ~ span:nth-of-type(3)": {
            transformOrigin: "bottom",
            width: "50%",
            transform: "translate(13px,-4px) rotatez(45deg)",
        },
    },
});


export const Hamburger = ({ callback, open }) => {
    const classes = useStyles();

    return (
        <label htmlFor="check" className={classes.label}>
            <input type="checkbox" id="check" className={classes.input} onChange={callback} checked={open}/>
            <span />
            <span />
            <span />
        </label>
    );
};

export default Hamburger;
