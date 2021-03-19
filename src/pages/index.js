import React from "react";
import Landing from "../components/landing";
import AboutMe from "../components/aboutme";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Footer from "../components/footer";

import "../css/global.scss";

// markup
const IndexPage = () => (
    <div>
        <Landing />
        <AboutMe />
        <Projects/>
        <Contacts/>
        <Footer/>
    </div>
);

export default IndexPage;
