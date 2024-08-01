import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function HeroSection() {
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        gsap.from(headlineRef.current, { opacity: 0, y: -50, duration: 1 });
        gsap.from(subheadlineRef.current, {
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 0.5,
        });
        gsap.from(ctaRef.current, {
            opacity: 0,
            y: -50,
            duration: 1,
            delay: 1,
        });
    }, []);
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className="text-center p-8" ref={headlineRef}>
                    <h1 className="text-4xl font-bold text-gray-800">
                        Savor the Best Homemade Dishes
                    </h1>
                    <p
                        className="text-xl text-gray-600 mt-4"
                        ref={subheadlineRef}
                    >
                        Crafted with Love and the Finest Ingredients
                    </p>
                    <div className="mt-6" ref={ctaRef}>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg mr-4">
                            Order Now
                        </button>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Explore Our Menu
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
