import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    layoutDiv: {
        maxWidth: "80vw",
        margin: "0 auto",
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
