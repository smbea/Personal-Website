import React from "react";
import Landing from "../components/landing/landing";
import AboutMe from "../components/aboutme/aboutme";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import NavBar from "../components/nav/navbar.js";
import Wave from "../components/wave";
import { Helmet } from "react-helmet";
import { SEO } from "gatsby-plugin-seo";

import "../css/global.scss";


// markup
const IndexPage = () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bea Mendes</title>
        </Helmet>
        <SEO
            title="Home"
            description="Hello! Welcome to my website."
            pagePath="/"
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
