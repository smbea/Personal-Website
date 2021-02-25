import React from "react";
import { createUseStyles } from "react-jss";
import  NavBar from "../components/navbar.js";
import mainBlob from "../images/blob.svg";
import mainPhoto from "../images/mainphoto.jpg";

const useStyles = createUseStyles({
    blob: {
        background: `center no-repeat url(${mainBlob})`,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    blobContent: {
        display: "flex",
        height: "30rem",
        width: "38rem",
    },
    mainPhoto: {
        borderRadius: "10px",
        marginBottom: 0,
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
});

export const Landing = () => {
    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <div className={classes.blob}>
                <div className={classes.blobContent}>
                    <img src={mainPhoto} className={classes.mainPhoto}/>
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
        </div>
    );
};

export default Landing;
