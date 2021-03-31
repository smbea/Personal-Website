/* eslint-disable max-len */
import React from "react";
import { createUseStyles } from "react-jss";
import yellowPhotoBlob from "../../images/yellowPhotoBlob.png";
import pinkPhotoBlob from "../../images/pinkPhotoBlob.png";
import greyPhotoBlob from "../../images/greyPhotoBlob.png";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = createUseStyles({
    photosDiv: {
        display: "flex",
        flexDirection: "column",
        margin: "0 2em 0 4em",
        position: "relative",
        width: "237px",
        alignItems: "center",
    },
    blobDiv: {
        position: "absolute",
        zIndex: "0",
        bottom: "-1em",
    },
    photo: {
        borderRadius: "100px",
        width: "180px",
        height: "180px",
        objectFit: "cover",
        margin: "1em 0",
        zIndex: "0",
    },
});

export const PhotoBlobs = () => {
    const classes = useStyles();

    return (
        <div className={classes.photosDiv}>
            <div className={classes.blobDiv}>
                <img src={yellowPhotoBlob} loading="lazy" alt="Just a blob shape."/>
                <img src={pinkPhotoBlob} loading="lazy" alt="Just a blob shape."/>
                <img src={greyPhotoBlob} loading="lazy"alt="Just a blob shape."/>
            </div>
            <StaticImage
                src="../../images/singing.webp"
                alt="A picture of me singing!"
                loading="lazy"
                style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "100px",
                    margin: "1em 0",
                    zIndex: "0",
                }}
                placeholder="blurred"
            />
            <StaticImage
                src="../../images/travel.webp"
                alt="A picture I took of Venice!"
                loading="lazy"
                style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "100px",
                    margin: "1em 0",
                    zIndex: "0",
                }}
                placeholder="blurred"
            />
            <StaticImage
                src="../../images/makeup.webp"
                alt="A picture of me doing makeup!"
                loading="lazy"
                style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "100px",
                    margin: "1em 0",
                    zIndex: "0",
                }}
                placeholder="blurred"
            />
        </div>
    );
};

export default PhotoBlobs;
