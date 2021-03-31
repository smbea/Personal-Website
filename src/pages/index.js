import React from "react";
import Landing from "../components/landing/landing";
import AboutMe from "../components/aboutme/aboutme";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import NavBar from "../components/nav/navbar.js";
import { Helmet } from "react-helmet";

import "../css/global.scss";
import Wave from "../components/wave";

// markup
const IndexPage = () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bea Mendes</title>
        </Helmet>
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
