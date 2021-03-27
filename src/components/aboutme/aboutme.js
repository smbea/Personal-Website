/* eslint-disable max-len */
import React from "react";
import { createUseStyles } from "react-jss";
import Heading from "../heading";
import Layout from "../layout";
import { useWindowSize } from "../../hooks/window-size";
import PhotoBlobs from "./photoblobs";

const useStyles = createUseStyles({
    contentDiv: {
        height: "100vh",
        paddingTop: "4em",
        minHeight: "600px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

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
            <div id="aboutme" className={classes.contentDiv}>
                <div className={classes.textContent}>
                    <Heading title="About Me"/>
                    <div>
                        <p>
                            Hey there! My name is Beatriz and I’m a software engineer currently based in Porto, Portugal.
                            I’m on the last year of my Informatics and Computing Engineering Master’s degree.
                        </p>
                        <p>
                            My main interests are mobile and web development but my enthusiasm for technology also manifests
                            itself through UX/UI design. I care about developing a functional yet beautiful product.
                        </p>
                        <p>
                            In my free time, I have done a bit of freelancing on
                            <a href="fiverr.com/users/thesmbea" target="_blank" rel="noreferrer" className={`${classes.aboutMeLink} link`}>Fiverr</a>
                            as well as helped build and manage my mother's small
                            business digital presence.
                        </p>
                        <p>
                            Some of my hobbies include singing, travelling, experimenting with makeup, taking and editing
                            photos. I like hanging out in coffee shops and snuggling with my cat.
                        </p>
                    </div>
                </div>
                {desktop ? <PhotoBlobs/> : null}
            </div>
        </Layout>
    );
};

export default AboutMe;
