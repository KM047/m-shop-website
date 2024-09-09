import React from "react";
import ContactSection from "./ContactSection";

function AboutSection() {
    return (
        <section className="">
            <div className="min-h-screen bg-primary p-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">
                        Meet the Heart Behind the Flavors
                    </h2>
                    <div className="flex flex-col md:flex-row items-center mt-8">
                        <img
                            className="w-48 h-48 rounded-full mx-auto shadow-md "
                            src="https://res.cloudinary.com/kunal047/image/upload/v1721638459/M-Shop/Hero%20section%20images/hidy1ux8jcya3kow1idc.png"
                            alt="Founder"
                        />
                        <div className="mt-6 md:mt-0 md:ml-8">
                            <p className="text-lg text-gray-700">
                                Hello! I&apos;m{" "}
                                <span className="font-bold text-accent">
                                    Mayuri Gaikwad
                                </span>
                                , a passionate home cook who loves creating
                                delicious and wholesome meals. As a housewife,
                                I&apos;ve spent years perfecting my recipes,
                                ensuring every dish is made with the finest
                                ingredients and a lot of love. My goal is to
                                bring the warmth and comfort of homemade food to
                                your table, one meal at a time.
                            </p>
                        </div>
                    </div>
                    <ContactSection />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
