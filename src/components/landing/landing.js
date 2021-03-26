import React from "react";
import { createUseStyles } from "react-jss";
import mainPhoto from "../../images/mainphoto.jpg";
import { useWindowSize } from "../../hooks/window-size";
import FindMe from "../findme";
import BlobShape from "./blob-shape";
import MobileLayout from "./mobile-layout";

const useStyles = createUseStyles({
    blob: {
        height: "100vh",
        minHeight: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
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

});

export const Landing = () => {
    const classes = useStyles();
    const desktop = (useWindowSize() === "desktop");
    const mobile = (useWindowSize() === "mobile");

    const Thing = () => (
        <div id="" className={classes.blob}>
            <BlobShape />
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

    return (
        <div>
            {mobile ? <MobileLayout /> : <Thing />}
        </div>
    );
};

export default Landing;
