import React from "react";
import Landing from "../components/landing/landing";
import AboutMe from "../components/aboutme/aboutme";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import NavBar from "../components/nav/navbar.js";
import Wave from "../components/wave";
import { Helmet } from "react-helmet";
import "../css/global.scss";

// markup
const IndexPage = () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bea Mendes</title>
        </Helmet>
        <Helmet
            htmlAttributes={{
                lang: "en",
            }}
            title={"Beatriz Mendes"}
            meta={[
                {
                    name: "description",
                    content: "Wemcome to my website! Get to know me and my projects.",
                },
                {
                    property: "og:title",
                    content: "Beatriz Mendes",
                },
                {
                    property: "og:description",
                    content: "Wemcome to my website! Get to know me and my projects.",
                },
                {
                    property: "og:image",
                    content: "./src/images/previewImage.png",
                },
            ]}
        />
        <NavBar />
        <Landing />
        <AboutMe />
        <Projects/>
        <Contacts/>
        <Wave />
        <Footer/>
    </div>
);

export default IndexPage;
