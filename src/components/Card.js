import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBehance, faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = createUseStyles({
    card: {
        width: "370px",
        boxShadow: "0.5px 0.5px 3px rgb(0 0 0 / 10%)",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        margin: "0.5em",
        height: "fit-content",
    },
    iconsContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    cardBody: {
        display: "flex",
        padding: "1em",
    },
    headerImage: {
        objectFit: "cover",
        borderRadius: "5px 5px 0 0",

    },
    cardTitle: {
        margin: "0",
    },
    icon: {
        color: "var(--lightGrey)",
        transition: "all .2s ease-in-out",
        "&:hover": {
            transform: "scale(1.1)",
            color: "var(--yellow)",
        },
    },
    projectDescription: {
        display: "flex",
        direction: "column",
    },
    cardTextContent: {
        marginLeft: "1em",
    },
});

export const Card = (props) => {

    const { title, image, description, linkBehance, linkGithub } = props;
    const styles = useStyles();

    return (
        <div className={styles.card}>
            {image
                ? <img src={image} className={styles.headerImage} width="370px"  />
                : null
            }
            <div className={styles.cardBody}>
                <div className={styles.iconsContainer}>
                    {linkBehance
                        ? <a href={linkBehance} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className={styles.icon} icon={faBehance} size="1x" />
                          </a>
                        : null
                    }
                    {linkGithub
                        ? <a href={linkGithub} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className={styles.icon} icon={faGithubAlt} size="1x" />
                          </a>
                        : null
                    }

                </div>
                <div className={styles.cardTextContent}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.projectDescription}>
                        {description}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Card;
