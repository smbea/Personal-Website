import React from "react";
import { createUseStyles } from "react-jss";
import mainPhoto from "../images/mainphoto.jpg";
import { useWindowSize } from "../hooks/window-size";
import FindMe from "./findme";

const useStyles = createUseStyles({
    blob: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    shape: {
        position: "absolute",
        width: "60vw",
        height: "50vw",
        minWidth: "580px",
        maxWidth: "650px",
        minHeight: "500px",
        maxHeight: " 500px",
        zIndex: -1,
        padding: "1em",
        background: "var(--pink)",
        animation: "morph 10s ease-in-out infinite",
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        transition: "all 1s ease-in-out",
        marginTop: "1em",

    },
    blobContent: {
        display: "flex",
        height: "fit-contents",
        width: "38rem",
        marginTop: "1em",
    },
    mainPhoto: {
        borderRadius: "10px",
        marginBottom: 0,
        width: "350px",
        height: "40vw",
        minHeight: "420px",
        maxHeight: "470px",
        objectFit: "cover",
    },
    blobText: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "1.5em",
        maxWidth: "16em",
        justifyContent: "flex-end",

    },
    blobTitle: {
        fontSize: "85px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "0.2em",
        lineHeight: "100px",
    },
    blobBody: {
        fontSize: "22px",
        maxWidth: "9em",
    },
    dot: {
        color: "var(--yellow)",
    },
    findmeText: {
        transform: "rotate(90deg)",
        position: "fixed",
        right: "-3em",
        fontSize: "20px",
    },
    icon: {
        marginLeft: "0.5em",
        color: "var(--yellow)",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
    firstIcon: {
        marginLeft: "1em",
        color: "var(--yellow)",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },

});

export const Landing = () => {
    const classes = useStyles();
    const desktop = (useWindowSize() === "desktop");

    return (
        <div id="" className={classes.blob}>
            <div className={classes.shape}/>
            {desktop ?
                <FindMe absolute={true}/>
                : null}
            <div className={classes.blobContent}>
                <img src={mainPhoto} className={classes.mainPhoto} />
                <div className={classes.blobText}>
                    <div className={`${classes.blobTitle} heading`}>
                        <span>Hello
                            <span className={classes.dot}>.
                            </span>
                            <br />I am Beatriz
                        </span>
                    </div>
                    <div className={classes.blobBody}>
                        <span className="runningtext">I’m a Software Engineer with a passion for UX/UI.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
