import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    layoutDiv: {
        padding: "0 2em",
    },
});

export const Layout = ({ children }) => {
    const styles = useStyles();

    return (
        <div className={styles.layoutDiv}>
            {children}
        </div>
    );
};

export default Layout;
