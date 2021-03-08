import React from "react";
import { createUseStyles } from "react-jss";
import mainPhoto from "../images/mainphoto.jpg";

const useStyles = createUseStyles({
    contentDiv: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    textContent: {
        display: "flex",
        flexDirection:"column",
        width:"55%",
        marginRight:"8em",
        fontSize:"20px"
    },
    photosDiv: {
        display: "flex",
        flexDirection:"column",
    },
    photo: {
        borderRadius:"100px",
        width:"180px",
        height:"180px",
        objectFit:"cover",
        margin:"1em 0"
    },
    title:{
        fontSize:"30px",
        fontWeight:"bold",
        marginBottom:"2em"
    }
});

export const AboutMe = () => {
    const classes = useStyles();

    return (
        <div className={classes.contentDiv}>
            <div className={classes.textContent}>
                <span className={`${classes.title} headingBold`}>About Me</span>
                <span className="runningtext">
                    Hey there! My name is Beatriz and I’m a software engineer currently based in Porto, Portugal. I’m on the last year of my Informatics and Computing Engineering Master’s degree.
                    <br/><br/>My main interests are mobile and web development but my enthusiasm for technology also manifests itself through UX/UI design. I care about developing a functional yet beautiful product.
                    <br/><br/>Some of my hobbies include singing, travelling, experimenting with makeup, taking and editing photos. I like hanging out in coffee shops and snuggling with my cat.
                </span>
            </div>
            <div className={classes.photosDiv}>
            <img src={mainPhoto} className={classes.photo} />
            <img src={mainPhoto} className={classes.photo} />
            <img src={mainPhoto} className={classes.photo} />

            </div>
        </div>
    );
};

export default AboutMe;
