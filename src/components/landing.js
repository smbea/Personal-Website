import React from "react";
import { createUseStyles } from "react-jss";
import  NavBar from "../components/navbar.js";
import mainBlob from "../images/blob.svg";
import mainPhoto from "../images/mainphoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBehance, faGithubAlt, faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = createUseStyles({
    blob: {
        background: `center no-repeat url(${mainBlob})`,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
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
    findmeText: {
        transform: "rotate(90deg)",
        position: "fixed",
        right: "-3em",
        fontSize: "20px",
    },
    icon: {
        marginLeft: "0.5em",
        color: "var(--yellow)",
    },
    firstIcon: {
        marginLeft: "1em",
        color: "var(--yellow)",
    },
});

export const Landing = () => {
    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <div className={classes.blob}>
                <div className={`${classes.findmeText} heading`}>
                    <span>Find me on</span>
                    <a href="https://www.behance.net/smbea" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className={classes.firstIcon} icon={faBehance} size="1x" />
                    </a>
                    <a href="https://github.com/smbea" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className={classes.icon} icon={faGithubAlt} size="1x" />
                    </a>
                    <a href="https://www.linkedin.com/in/smbea/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className={classes.icon} icon={faLinkedinIn} size="1x" />
                    </a>

                </div>
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
