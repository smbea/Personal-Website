import React from "react";
import { createUseStyles } from "react-jss";
import { useWindowSize } from "../../hooks/window-size";
import FindMe from "../findme";
import BlobShape from "./blob-shape";
import MobileLayout from "./mobile-layout";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = createUseStyles({
    blob: {
        height: "100vh",
        minHeight: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        "&.mobile": {
            height: "80vh",
        },
    },
    blobContent: {
        display: "flex",
        width: "38rem",
        marginTop: "1em",
        zIndex: 0,
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
    bottomLinks: {
        position: "absolute",
        bottom: "2em",
    },

});

export const Landing = () => {
    const classes = useStyles();
    const desktop = (useWindowSize() === "desktop");
    const mobile = (useWindowSize() === "mobile");
    const tablet = (useWindowSize() === "tablet");

    const RegularLayout = () => (
        <div id="home" className={classes.blob}>
            <BlobShape />
            {desktop ?
                <FindMe absolute={true}/>
                : null}
            <div className={classes.blobContent}>
                <StaticImage
                    src="../../images/mainphoto.jpg"
                    alt="A picture of me!"
                    loading="eager"
                    style={{
                        borderRadius: "10px",
                        marginBottom: 0,
                        width: "350px",
                        height: "40vw",
                        minHeight: "420px",
                        maxHeight: "470px",
                    }}
                    placeholder="blurred"
                />
                <div className={classes.blobText}>
                    <div className={`${classes.blobTitle} heading`}>
                        <span>Hello
                            <span className={classes.dot}>.
                            </span>
                            <br />I am Beatriz

                        </span>
                    </div>
                    <div className={classes.blobBody}>
                        <span>I’m a Software Engineer with a passion for UX/UI.</span>
                    </div>
                </div>
            </div>
            {tablet ?
                <div className={classes.bottomLinks}>
                    <FindMe absolute={false}/>
                </div>
                : null}
        </div>
    );

    return (
        <div>
            {mobile ? <MobileLayout /> : <RegularLayout />}
        </div>
    );
};

export default Landing;
