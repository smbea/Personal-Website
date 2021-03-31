import React from "react";
import { createUseStyles } from "react-jss";
import Heading from "./heading";
import Layout from "./layout";
import Card from "./card";
import sinf from "../images/sinf.png";
import winerd from "../images/winerd.png";
import episa from "../images/episaproject.png";
import va from "../images/va.png";
import { useWindowSize } from "../hooks/window-size";

const useStyles = createUseStyles({
    contentDiv: {
        paddingTop: "4em",
        marginBottom: "5em",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: ({ device }) => {
            if (device === "desktop") {
                return "repeat(3, 1fr)";
            } else if (device === "tablet") {
                return "repeat(2, 1fr)";
            }
            return "1fr";
        },
        gridGap: "10px",
        justifyContent: "center",
    },
});

export const Projects = () => {
    const device = useWindowSize();
    const styles = useStyles({ device });

    return (
        <Layout>
            <div id="projects" className={styles.contentDiv}>
                <Heading title="Projects"/>

                <div className={styles.grid}>

                    <Card
                        title="PassengerConnect"
                        description="Public transport route-planner mobile application for Android & IOS."
                        keywords={[
                            { id: 1, kw: "React Native" }, { id: 2, kw: "Node.js" }, { id: 3, kw: "Express" },
                            { id: 4, kw: "Firebase" }, { id: 5, kw: "MongoDB" },
                        ]}
                    />

                    <Card
                        title="Brisk"
                        description="
                        Customizable metric management tool with simple interface, able to receive data from different data points.
                        "
                        keywords={[
                            { id: 1, kw: "PHP" }, { id: 2, kw: "Laravel" }, { id: 3, kw: "HTML/CSS" },
                            { id: 4, kw: "PostgreSQL" }, { id: 5, kw: "Gitlab CI/CD" },
                        ]}
                    />

                    <Card
                        title="Winerd"
                        image={winerd}
                        description="Web application for inter-company product management
                         with Primavera EPR integration."
                        linkGithub="https://github.com/smbea/FEUP-SINF"
                        keywords={[
                            { id: 1, kw: "Node/Express" }, { id: 2, kw: "PostgreSQL" },
                            { id: 3, kw: "React" }, { id: 4, kw: "Gatsby" }, { id: 5, kw: "MaterialUI" }]}
                    />


                    <Card
                        title="Movie Analytics Platform"
                        image={va}
                        description="Interactive movie statistics platform using 3D.js."
                        linkGithub="https://github.com/smbea/visual-analytics"
                        keywords={[
                            { id: 1, kw: "JavaScript" }, { id: 2, kw: "D3.js" }, { id: 3, kw: "HTML/CSS" },
                            { id: 4, kw: "Python" },
                        ]}
                    />

                    <Card
                        title="SINF | Tech Conference"
                        image={sinf}
                        description="Student tech conference.
                        Head of design and marketing team:
                         event identity, website and social media."
                        linkWebsite="https://2019.sinf.pt/"
                        linkBehance="https://www.behance.net/gallery/106115671/SINF19"
                        linkGithub="https://github.com/semanadeinformatica/website-2019"
                        keywords={[
                            { id: 1, kw: "UX/UI" }, { id: 2, kw: "Illustrator" }, { id: 3, kw: "Photoshop" },
                            { id: 4, kw: "XD" }, { id: 5, kw: "React" },
                        ]}
                    />

                    <Card
                        title="EPISA"
                        image={episa}
                        description="Redesign of library archive search platform to deal with linked data.
                        User requirements research."
                        linkBehance="https://www.behance.net/gallery/106123541/EPISA-Project-Redesign"
                        keywords={[{ id: 1, kw: "UX/UI" }, { id: 2, kw: "Figma" }]}
                    />


                    <Card
                        title="Multiplayer Blacjack"
                        description="Multiplayer Blackjack 2D game for Android. Integration with Google OAuth."
                        linkGithub="https://github.com/smbea/macc-blackjack"
                        keywords={[
                            { id: 1, kw: "Android Native" }, { id: 2, kw: "Kotlin" }, { id: 3, kw: "Firebase" },
                            { id: 4, kw: "Node/Express" }]}
                    />


                    <Card
                        title="RainCheck"
                        linkGithub="https://github.com/smbea/FEUP-LBAW"
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
