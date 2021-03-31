import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
    {
        underline: {
            height: "14px",
            width: "100%",
            position: "absolute",
            background: "var(--pink)",
            bottom: "-2px",
            left: 0,
            zIndex: -1,
        },
        title: {
            fontFamily: "RamonaBold, sans-serif",
            margin: 0,
            padding: "0 0.2em",
            fontSize: "1.7rem",
        },
        container: {
            position: "relative",
            width: "fit-content",
            marginBottom: "2em",
        },
    }
);


export const Heading = ({ title }) => {


    const styles = useStyles();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.underline}/>
        </div>
    );
};

export default Heading;
