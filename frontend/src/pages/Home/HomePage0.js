import React from "react";
import HeroSection from "../../components/HomeComponents/HeroSection";
import FeatureSection from "../../components/HomeComponents/FeatureSection";
import TeamSection from "../../components/HomeComponents/TeamSection";
import Footer from "../../components/HomeComponents/Footer";
import ProblemStatement from "../../components/HomeComponents/ProblemStatement";
import './homePage0.css';
const HomePage0 = () => {
    return (
        <div
            className="homeContainer"
        >
            <HeroSection />
            <ProblemStatement/>
            <FeatureSection />
           
            <TeamSection />
            <Footer />
        </div>
    );
};

export default HomePage0;
