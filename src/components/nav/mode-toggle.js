import React, { useState } from "react";
import { createUseStyles, ThemeProvider } from "react-jss";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { ThemeContext } from "./navbar";

const useStyles = createUseStyles({
    darkToogle: {
        height: "25px",
    },
});


export const ModeToggle = ({ big }) => {
    const classes = useStyles();

    return (
        <ThemeContext.Consumer>
            {({ setGlobalTheme }) => (
                <ThemeToggler>
                    {({ theme, toggleTheme }) => {
                        if (theme === null || theme === undefined) {
                            return null;
                        } else {
                            setGlobalTheme(theme);
                        }
                        return (
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={(e) => {
                                        setGlobalTheme(e.target.checked ? "dark" : "light");
                                        toggleTheme(e.target.checked ? "dark" : "light");
                                    }}
                                    checked={theme === "dark"}
                                />{" "}
                                Dark mode
                            </label>
                        );

                    }}
                </ThemeToggler>
            )}
        </ThemeContext.Consumer>
    );
};

export default ModeToggle;
