import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
    {
        underline: {
            height: "14px",
            width: "100%",
            position: "absolute",
            background: "var(--pink)",
            bottom: 0,
            left: 0,
            zIndex: "-1",
        },
        title: {
            fontFamily: "RamonaBold",
            margin: 0,
            padding: "0 0.2em",
        },
        container: {
            position: "relative",
            width: "fit-content",
            marginBottom: "3em",
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
