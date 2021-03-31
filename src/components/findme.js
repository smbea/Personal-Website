import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBehance, faGithubAlt, faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = createUseStyles({
    findmeText: {
        fontSize: "20px",
        fontFamily: "Ramona, sans-serif",
        "&:span": {
            marginRight: "0.5em",
        },
    },
    absolute: {
        transform: "rotate(90deg)",
        position: "fixed",
        right: "-3em",
    },
    icon: {
        marginLeft: "0.5em",
        color: "var(--yellow)",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
});

export const FindMe = ({ absolute }) => {
    const styles = useStyles();

    return (
        <div className={absolute ?  `${styles.findmeText} ${styles.absolute}` : styles.findmeText}>
            <span>Find me on</span>
            <a href="https://www.behance.net/smbea" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className={styles.icon} icon={faBehance} size="1x" />
            </a>
            <a href="https://github.com/smbea" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className={styles.icon} icon={faGithubAlt} size="1x" />
            </a>
            <a href="https://www.linkedin.com/in/smbea/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} size="1x" />
            </a>

        </div>
    );
};

export default FindMe;
