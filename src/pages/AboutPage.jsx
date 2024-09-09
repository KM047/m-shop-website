import { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import TitleSetter from "../utils/TitleSetter";

function AboutPage() {
    useEffect(() => {
        // Scroll to the top of the page when this component is rendered
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <TitleSetter title={"About Us"}>
                <div className="bg-primary">
                    <AboutSection />
                </div>
            </TitleSetter>
        </>
    );
}

export default AboutPage;
