import React from "react";
import { createUseStyles } from "react-jss";
import Heading from "./heading";
import Layout from "./layout";
import Card from "./card";
import sinf from "../images/sinf.png";
import winerd from "../images/winerd.png";
import episa from "../images/episaproject.png";

const useStyles = createUseStyles({
    contentDiv: {
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
                        title="PassengerConnect"
                        description="Public transport route-planner mobile application for Android & IOS."
                        linkGithub="https://www.behance.net/gallery/106123541/EPISA-Project-Redesign"
                        keywords={[
                            { id: 1, kw: "React Native" }, { id: 2, kw: "Node/Express" },
                            { id: 3, kw: "Firebase" }, { id: 4, kw: "MongoDB" },
                        ]}
                    />

                    <Card
                        title="Brisk"
                        description="Metric and project management tool.
                        Data collected daily is processed, aggregated and manipulated for analysis.
                        "
                        keywords={[
                            { id: 1, kw: "PHP/Laravel" }, { id: 2, kw: "HTML/CSS" }, { id: 3, kw: "PostgreSQL" },
                            { id: 4, kw: "Gitlab CI/CD" },
                        ]}
                    />

                    <Card
                        title="ColorPOP"
                        image={winerd}
                        description="A bubble puzzle 2D game using low-level drivers, running in Minix."
                        linkGithub="https://www.behance.net/gallery/106123541/EPISA-Project-Redesign"
                        keywords={[
                            { id: 1, kw: "C" }, { id: 2, kw: "Minix" }, { id: 3, kw: "UI Design" }]}
                    />


                    <Card
                        title="SINF | Tech Conference"
                        image={sinf}
                        description="Student tech conference.
                        Head of design and marketing team:
                         event identity, website and social media."
                        linkWebsite="https://github.com/semanadeinformatica/website-2019"
                        linkBehance="https://www.behance.net/gallery/106115671/SINF19"
                        keywords={[
                            { id: 1, kw: "UX/UI" }, { id: 2, kw: "Illustrator" }, { id: 3, kw: "Photoshop" }, { id: 4, kw: "XD" },
                        ]}
                    />


                    <Card
                        title="EPISA"
                        image={episa }
                        description="Redesign of library archive search platform to deal with linked data.
                        User requirements research."
                        linkBehance="https://www.behance.net/gallery/106115671/SINF19"
                        keywords={[{ id: 1, kw: "UX/UI" }, { id: 2, kw: "Figma" }]}
                    />

                    <Card
                        title="Movie Analytics Platform"
                        description="Interactive movie statistics platform using 3D.js."
                        linkGithub="https://www.behance.net/gallery/106123541/EPISA-Project-Redesign"
                        keywords={[
                            { id: 1, kw: "JavaScript" }, { id: 2, kw: "D3.js" }, { id: 3, kw: "HTML/CSS" },
                            { id: 4, kw: "Python" },
                        ]}
                    />

                    <Card
                        title="Winerd"

                        description="Web application for inter-company product management
                         with Primavera EPR integration."
                        linkGithub="https://www.behance.net/gallery/106123541/EPISA-Project-Redesign"
                        keywords={[
                            { id: 1, kw: "Node/Express" }, { id: 2, kw: "PostgreSQL" },
                            { id: 3, kw: "React" }, { id: 4, kw: "Gatsby" }, { id: 5, kw: "MaterialUI" }]}
                    />

                    <Card
                        title="Multiplayer Blacjack"

                        description="Multiplayer Blackjack 2D game for Android. Integration with Google OAuth."
                        linkGithub="https://www.behance.net/gallery/106123541/EPISA-Project-Redesign"
                        keywords={[
                            { id: 1, kw: "Android Native" }, { id: 2, kw: "Kotlin" }, { id: 3, kw: "Firebase" },
                            { id: 4, kw: "Node/Express" }]}
                    />

                    <Card
                        title="RainCheck"

                        description="Facebook-like social network for events participation management."
                        keywords={[
                            { id: 1, kw: "Laravel" }, { id: 2, kw: "PHP" }, { id: 3, kw: "HTML/CSS" }, { id: 4, kw: "Bootstrap" },
                            { id: 5, kw: "PostgreSQL" }]}
                    />


                </div>
            </div>
        </Layout>
    );
};

export default Projects;
