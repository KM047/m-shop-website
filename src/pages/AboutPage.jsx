import AboutSection from "../components/AboutSection";
import TitleSetter from "../utils/TitleSetter";

function AboutPage() {
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
