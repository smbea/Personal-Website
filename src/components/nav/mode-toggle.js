import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { ThemeContext } from "./navbar";
import "../../css/darkmode-toggle.scss";

export const ModeToggle = () => (
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
                        <div className="toggleWrapper">
                            <input
                                checked={theme === "dark"}
                                type="checkbox" className="dn" id="dn"
                                onChange={(e) => {
                                    setGlobalTheme(e.target.checked ? "dark" : "light");
                                    toggleTheme(e.target.checked ? "dark" : "light");
                                }}
                            />
                            <label htmlFor="dn" className="toggle">
                                <span className="toggle__handler">
                                    <span className="crater crater--1" />
                                    <span className="crater crater--2" />
                                    <span className="crater crater--3" />
                                </span>
                                <span className="star star--1" />
                                <span className="star star--2" />
                                <span className="star star--3" />
                                <span className="star star--4" />
                                <span className="star star--5" />
                                <span className="star star--6" />
                            </label>
                        </div>
                    );

                }}
            </ThemeToggler>
        )}
    </ThemeContext.Consumer>
);

export default ModeToggle;
