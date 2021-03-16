/* eslint-disable max-len */
import React from "react";
import { createUseStyles } from "react-jss";
import mainPhoto from "../images/mainphoto.jpg";
import Heading from "./heading";
import Layout from "./layout";

const useStyles = createUseStyles({
    contentDiv: {
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

    },
    textContent: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "68ch",
        fontSize: "20px",
        flexGrow: 1,
    },
    photosDiv: {
        display: "flex",
        flexDirection: "column",
        margin: "0 2em 0 4em",

    },
    photo: {
        borderRadius: "100px",
        width: "180px",
        height: "180px",
        objectFit: "cover",
        margin: "1em 0",
    },
    title: {
        fontSize: "30px",
        fontWeight: "bold",
        marginBottom: "2em",
    },
});

export const AboutMe = () => {
    const classes = useStyles();

    return (
        <Layout >
            <div className={classes.contentDiv}>
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
                            <a href="fiverr.com/users/thesmbea" target="_blank" rel="noreferrer"> Fiverr </a>
                            as well as helped build and manage my mother's small
                            business digital presence.
                        </p>
                        <p>
                            Some of my hobbies include singing, travelling, experimenting with makeup, taking and editing
                            photos. I like hanging out in coffee shops and snuggling with my cat.
                        </p>
                    </div>
                </div>
                <div className={classes.photosDiv}>
                    <img src={mainPhoto} className={classes.photo} />
                    <img src={mainPhoto} className={classes.photo} />
                    <img src={mainPhoto} className={classes.photo} />

                </div>
            </div>
        </Layout>
    );
};

export default AboutMe;
