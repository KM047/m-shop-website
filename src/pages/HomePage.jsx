import React from "react";

import {
    HeroSection,
    FeatureSection,
    CategorySection,
    CategoryCard,
    MainHeroSection,
} from "../components/";

import TitleSetter from "../utils/TitleSetter";
import BestProductSection from "../components/BestProductSection";

function HomePage() {
    return (
        <>
            <TitleSetter title={"Home"}>
                <div className="">
                    {/* <HeroSection /> */}
                    <MainHeroSection />
                    <FeatureSection />
                    {/* Best Product section */}
                    <BestProductSection />
                    {/* Category section */}
                    <CategorySection />
                </div>
            </TitleSetter>
        </>
    );
}

export default HomePage;
