import React from "react";

import {
    HeroSection,
    FeatureSection,
    CategorySection,
    CategoryCard,
    MainHeroSection,
} from "../components/";

import TitleSetter from "../utils/TitleSetter";

function HomePage() {
    return (
        <>
            <TitleSetter title={"Home"}>
                <div className="">
                    <MainHeroSection />
                    {/* <HeroSection /> */}
                    <FeatureSection />
                    {/* Category section */}
                    <CategorySection />
                </div>
            </TitleSetter>
        </>
    );
}

export default HomePage;
