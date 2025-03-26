import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HomeHero from "../features/Home/HomeHero";
import ServiceGrid from "../features/Home/ServiceGrid";
import CertificationGrid from "../features/Home/CertificationGrid";
import BlogPreview from "../features/Home/BlogPreview";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
    return(
        <div>
            <NavBar/>
            <HomeHero />
            <ServiceGrid />
            <CertificationGrid />
            <BlogPreview />
            <Footer />
        </div>
    );
};

export default Homepage;