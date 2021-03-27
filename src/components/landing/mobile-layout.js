import React from "react";
import { createUseStyles } from "react-jss";
import mainPhoto from "../../images/mainphoto.jpg";
import { useWindowSize } from "../../hooks/window-size";
import FindMe from "../findme";
import BlobShape from "./blob-shape";

const useStyles = createUseStyles({
    blob: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
    },
    blobContent: {
        display: "flex",
        flexDirection: "column",
        marginTop: "1em",
        alignItems: "center",
    },
    mainPhoto: {
        borderRadius: "10px",
        margin: "4em 0 2em 0",
        width: "300px",
        height: "320px",
        minHeight: "200px",
        objectFit: "cover",
    },
    blobText: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "20em",
        textAlign: "center",

    },
    blobTitle: {
        fontSize: "50px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "0.2em",
    },
    blobBody: {
        fontSize: "20px",
    },
    dot: {
        color: "var(--yellow)",
    },

});

export const MobileLayout = () => {
    const classes = useStyles();
    const desktop = (useWindowSize() === "desktop");

    return (
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
};

export default MobileLayout;
