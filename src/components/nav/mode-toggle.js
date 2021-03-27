import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import DarkModeToggle from "react-dark-mode-toggle";

const useStyles = createUseStyles({
    darkToogle: {
        height: "25px",
    },
});


export const ModeToggle = ({ big }) => {
    const classes = useStyles();
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <div className={classes.darkToogle}>
            <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={big ? 60 : 50}
            />
        </div>
    );
};

export default ModeToggle;
