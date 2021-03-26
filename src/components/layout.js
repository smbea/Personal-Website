import React from "react";
import { createUseStyles } from "react-jss";
import { useWindowSize } from "../hooks/window-size";

const useStyles = createUseStyles({
    desktopLayout: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    minimizedLayout: {
        maxWidth: "90vw",
        margin: "0 auto",
    },
});

export const Layout = ({ children }) => {
    const styles = useStyles();
    const device = useWindowSize();

    const ProperLayout = () => {
        if (device === "desktop")
            return (
                <div className={styles.desktopLayout}>
                    {children}
                </div>
            );
        else
            return (
                <div className={styles.minimizedLayout}>
                    {children}
                </div>
            );
    };

    return (
        <ProperLayout/>
    );
};

export default Layout;
