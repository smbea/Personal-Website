/* eslint-disable max-len */
import React from "react";
import { createUseStyles } from "react-jss";
import Heading from "../heading";
import Layout from "../layout";
import { useWindowSize } from "../../hooks/window-size";
import PhotoBlobs from "./photoblobs";

const useStyles = createUseStyles({
    contentDiv: {
        paddingTop: "4em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "&.fitContent": {
            minHeight: "fit-content",
            margin: "0 1em",
        },
        "&.desktop": {
            height: "100vh",
            margin: "0 1em",
        },
    },
    verticalDisplay: {
        flexDirection: "column",
    },
    textContent: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "68ch",
        fontSize: "20px",
        flexGrow: 1,
    },
    title: {
        fontSize: "30px",
        fontWeight: "bold",
        marginBottom: "2em",
    },
    aboutMeLink: {
        margin: "0 0.5em",
    },
});

export const AboutMe = () => {
    const classes = useStyles();
    const desktop = (useWindowSize() === "desktop");

    return (
        <Layout >
            <div id="aboutme" className={desktop ?  `${classes.contentDiv} desktop` : `${classes.contentDiv} fitContent` }>
                <div className={classes.textContent}>
                    <Heading title="About Me"/>
                    <div>
                        <p>
                            Hey there! My name is Beatriz and I’m a software engineer based in Berlin, Germany.
                        </p>
                        <p>
                            I’m interested in working as a frontend or full-stack engineer.
                        </p>
                        <p>
                            My main interests are mobile and web development. My enthusiasm for technology also manifests itself through UX/UI design. I care about developing a functional yet beautiful product.
                        </p>
                        <p>
                            Some of my hobbies include singing, traveling, experimenting with makeup, taking and editing photos.
                            I like hanging out in coffee shops and snuggling with my cat.
                        </p>
                    </div>
                </div>
                {desktop ? <PhotoBlobs/> : null}
            </div>
        </Layout>
    );
};

export default AboutMe;
