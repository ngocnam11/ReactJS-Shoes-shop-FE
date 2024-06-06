import React from "react";
import "./index.css";
import HomePageHero from "./components/Hero";
import BestSelling from "./components/BestSelling";
import HomePageGallery from "./components/Gallery";
import Popular from "./components/Popular";

const HomePage = () => {
    return (
        <section>
            <HomePageHero />
            <div className="container m-auto my-10">
                <BestSelling />
                <HomePageGallery />
                <Popular/>
            </div>
        </section>
    );
};

export default HomePage;
