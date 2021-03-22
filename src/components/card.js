import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBehance, faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import yellowBlob from "../images/yellowBlob.svg";

const useStyles = createUseStyles({
    card: {
        minWidth: "270px",
        height: "180px",
        boxShadow: "0.5px 0.5px 3px rgb(0 0 0 / 10%)",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        margin: "0.5em",
        position: "relative",
        "&.tall": {
            gridRow: "span 2",
            minHeight: "390px",
        },

    },
    iconsContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    cardBody: {
        display: "flex",
        padding: "1em",
        background: "white",
        height: "100%",
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    bulletBlob: {
        zIndex: "-1",
        position: "absolute",
        left: "-12px",
        top: "-12px",

    },
    keywords: {
        color: "var(--yellow)",
        marginRight: "0.5em",
    },
});

export const Card = (props) => {

    const { title, image, description, linkBehance, linkGithub, keywords } = props;
    const styles = useStyles();
    const getKeywords = (keywords) => {
        const content = [];
        for (const idx in keywords) {
            const item = keywords[idx];
            content.push(<span className={styles.keywords} key={item.id}>{item.kw}</span>);
        }
        return content;
    };

    return (
        <div className={`${styles.card} ${image ? "tall" : null}`}>
            <img src={yellowBlob} className={styles.bulletBlob} width="30px"/>
            {image
                ? <img src={image} className={styles.headerImage} height="180px"  />
                : null
            }
            <div className={styles.cardBody}>
                <div className={styles.iconsContainer}>
                    {linkBehance ?
                        <a href={linkBehance} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className={styles.icon} icon={faBehance} size="1x" />
                        </a>
                        : null
                    }
                    {linkGithub ?
                        <a href={linkGithub} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className={styles.icon} icon={faGithubAlt} size="1x" />
                        </a>
                        : null
                    }

                </div>
                <div className={styles.cardTextContent}>
                    <div>
                        <h3 className={styles.cardTitle}>{title}</h3>
                        <p className={styles.projectDescription}>
                            {description}
                        </p>
                    </div>
                    <div>{getKeywords(keywords)}</div>
                </div>
            </div>
        </div>

    );
};

export default Card;