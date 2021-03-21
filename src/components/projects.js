import React from "react";
import { createUseStyles } from "react-jss";
import Heading from "./heading";
import Layout from "./layout";
import Card from "./card";
import sinf from "../images/sinf.png";
import episaProject from "../images/episaProject.png";

const useStyles = createUseStyles({
    contentDiv: {
        minHeight: "90vh",
        paddingTop: "4em",
        marginBottom: "5em",
    },
    grid: {
        display: "grid",
        "grid-template-columns": "repeat(auto-fit, minmax(350px, 1fr))",
        gridGap: "10px",
        justifyContent: "center",
    },
});

export const Projects = () => {
    const styles = useStyles();

    return (
        <Layout>
            <div id="projects" className={styles.contentDiv}>
                <Heading title="Projects"/>

                <div className={styles.grid}>
                    <Card
                        title="My project"
                        image={sinf}

                        description="Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh"
                        linkGithub="https://github.com/semanadeinformatica/website-2019"
                        linkBehance="https://www.behance.net/gallery/106115671/SINF19"
                        keywords={[{ id: 1, kw: "kw1" }, { id: 2, kw: "kw2" }]}
                    />
                    <Card
                        title="My project"
                        image={episaProject}
                        description="Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh"
                        linkGithub="https://github.com/semanadeinformatica/website-2019"
                        linkBehance="https://www.behance.net/gallery/106115671/SINF19"
                    />

                    <Card
                        title="My project"
                        description="Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh"
                        linkBehance="https://www.behance.net/gallery/106123541/EPISA-Project-Redesign"
                    />
                    <Card
                        title="My project"
                        image={sinf}
                        description="Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh"
                        linkBehance="https://www.behance.net/gallery/106123541/EPISA-Project-Redesign"
                    />
                    <Card
                        title="My project"
                        description="Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh"
                        linkBehance="https://www.behance.net/gallery/106123541/EPISA-Project-Redesign"
                    />


                    <Card
                        title="My project"
                        description="Some tect about hduh  hdihwi duhdiu diwuh diwhei duh idhu uh iu
                    ewiuh Some tect about hduh hdihwi duhdiu diwuh diwhei duh idhu uh iu ewiuh"
                        linkGithub="https://github.com/semanadeinformatica/website-2019"
                        linkBehance="https://www.behance.net/gallery/106115671/SINF19"
                    />


                </div>
            </div>
        </Layout>
    );
};

export default Projects;
