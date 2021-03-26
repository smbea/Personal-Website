import React from "react";
import Landing from "../components/landing/landing";
import AboutMe from "../components/aboutme/aboutme";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import NavBar from "../components/nav/navbar.js";

import "../css/global.scss";

// markup
const IndexPage = () => (
    <div>
        <NavBar />
        <Landing />
        <AboutMe />
        <Projects/>
        <Contacts/>
        <Footer/>
    </div>
);

export default IndexPage;
