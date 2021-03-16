import React from "react";
import { createUseStyles } from "react-jss";
import Heading from "./heading";
import Layout from "./layout";
import Card from "./card";
import sinf from "../images/sinf.png";
import episaProject from "../images/episaproject.png";

const useStyles = createUseStyles({
    contentDiv: {
        height: "100vh",
    },
    grid: {
        display: "flex",
        justifyContent: "center",
    },
    column: {
        display: "flex",
        flexDirection: "column",
    },
});

export const Projects = () => {
    const styles = useStyles();

    return (
        <Layout>
            <div className={styles.contentDiv}>
                <Heading title="Projects"/>

                <div className={styles.grid}>
                    <div className={styles.column}>
                        <Card
                            title="PassengerConnect"
                            description="Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh"
                            linkGithub="https://github.com/semanadeinformatica/website-2019"
                            linkBehance="https://www.behance.net/gallery/106115671/SINF19"
                        />
                        <Card
                            title="Episa"
                            image={episaProject}
                            description="Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh"
                            linkBehance="https://www.behance.net/gallery/106123541/EPISA-Project-Redesign"
                        />

                    </div>
                    <div className={styles.column}>
                        <Card
                            title="SINF18 & SINF29"
                            image={sinf}
                            description="Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh
                    Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh"
                            linkGithub="https://github.com/semanadeinformatica/website-2019"
                            linkBehance="https://www.behance.net/gallery/106115671/SINF19"
                        />
                    </div>
                    <div className={styles.column} >
                        <Card
                            title="Brisk"
                            description="Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh"
                            linkGithub="https://github.com/semanadeinformatica/website-2019"
                            linkBehance="https://www.behance.net/gallery/106115671/SINF19"
                        />
                        <Card
                            title="Episa"
                            image={episaProject}
                            description="Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh"
                            linkBehance="https://www.behance.net/gallery/106123541/EPISA-Project-Redesign"
                        />
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Projects;
