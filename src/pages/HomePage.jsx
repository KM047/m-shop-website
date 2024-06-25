import React from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import CategorySection from "../components/CategorySection";

import CategoryCard from "../components/CategoryCard";

function HomePage() {
    return (
        <>
            <div className="">
                <HeroSection />
                {/* <FeatureSection /> */}
                {/* Category section */}
                <CategorySection />
                <CategoryCard />
            </div>
        </>
    );
}

export default HomePage;
