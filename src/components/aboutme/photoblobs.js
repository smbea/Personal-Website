/* eslint-disable max-len */
import React from "react";
import { createUseStyles } from "react-jss";
import mainPhoto from "../../images/mainphoto.jpg";
import yellowPhotoBlob from "../../images/yellowPhotoBlob.png";
import pinkPhotoBlob from "../../images/pinkPhotoBlob.png";
import greyPhotoBlob from "../../images/greyPhotoBlob.png";

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
        zIndex: "-1",
        bottom: "-2em",
    },
    photo: {
        borderRadius: "100px",
        width: "180px",
        height: "180px",
        objectFit: "cover",
        margin: "1em 0",
    },
});

export const PhotoBlobs = () => {
    const classes = useStyles();

    return (
        <div className={classes.photosDiv}>
            <div className={classes.blobDiv}>
                <img src={yellowPhotoBlob} />
                <img src={pinkPhotoBlob} />
                <img src={greyPhotoBlob} />
            </div>
            <img src={mainPhoto} className={classes.photo} />
            <img src={mainPhoto} className={classes.photo} />
            <img src={mainPhoto} className={classes.photo} />
        </div>
    );
};

export default PhotoBlobs;
