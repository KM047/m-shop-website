import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

function MainHeroSection() {
    const mainRef = useRef(null);
    const h1Ref1 = useRef(null);
    const h1Ref2 = useRef(null);
    const h1Ref3 = useRef(null);
    const imgRefs = useRef([]);

    useGSAP(() => {
        // Adding 'will-change' to elements to hint the browser about upcoming changes
        h1Ref1.current.style.willChange = "transform, opacity";
        h1Ref2.current.style.willChange = "transform, opacity";
        h1Ref3.current.style.willChange = "transform, opacity, scale";
        imgRefs.current.forEach(
            (img) => (img.style.willChange = "filter, transform, opacity")
        );

        const timeline = gsap.timeline();

        timeline
            .from(h1Ref1.current, {
                x: -200,
                duration: 1,
                delay: 1,
                opacity: 0,
            })
            .from(
                h1Ref2.current,
                {
                    x: 200,
                    duration: 1,
                    opacity: 0,
                },
                "-=1.5"
            ) // Overlapping animations for smoother transition
            .from(
                h1Ref3.current,
                {
                    duration: 1,
                    opacity: 0,
                    scale: 1.5,
                },
                "-=0.5"
            )
            .from(
                imgRefs.current,
                {
                    filter: "grayscale(1)",
                    duration: 1,
                    scale: 1.5,
                    opacity: 0,
                    stagger: 0.3,
                },
                "-=0.8"
            )
            .from("#main h5", {
                opacity: 0,
                scale: 0,
                duration: 1,
            });

        gsap.to("#main h5", {
            y: 40,
            repeat: -1,
            duration: 1,
            yoyo: true,
            ease: "power1.inOut",
        });

        return () => {
            // Clean up the will-change property after the animation is complete
            h1Ref1.current.style.willChange = "";
            h1Ref2.current.style.willChange = "";
            h1Ref3.current.style.willChange = "";
            imgRefs.current.forEach((img) => (img.style.willChange = ""));
        };
    }, []);

    return (
        <>
            <div
                id="main"
                ref={mainRef}
                className="relative flex flex-col items-center justify-center h-[80vh] md:h-[80vh] w-full bg-primary z-40 mt-2 md:mt-1 "
            >
                <h1
                    ref={h1Ref1}
                    className="text-[15vw] md:text-[120px] uppercase flex justify-center items-center my-2 z-40 bg-clip-text font-semibold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                >
                    Taste
                </h1>
                <h1
                    ref={h1Ref2}
                    className="text-[12vw] md:text-[120px] uppercase flex justify-center items-center my-2 z-40 mt-2 font-semibold mix-blend-multiply bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
                >
                    of family
                </h1>
                <h1
                    ref={h1Ref3}
                    className="text-[15vw] md:text-[120px] uppercase flex justify-center items-center my-2 z-40 bg-clip-text font-semibold text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
                >
                    Tradition
                </h1>

                {/* <Link to="/products" className="relative">
                    <div className="bg-green-300 text-xl md:text-[40px] px-4 md:px-6 py-2 md:py-5 rounded-full mx-2 font-semibold text-quaternary cursor-pointer">
                        {" "}
                        Order Now{" "}
                    </div>{" "}
                </Link> */}

                <div className="hidden relative lg:block md:w-full">
                    {/* <p className="absolute text-black  right-1">Founder</p> */}
                    <Link to={"/about"}>
                        <img
                            ref={(el) => (imgRefs.current[3] = el)}
                            src="https://res.cloudinary.com/kunal047/image/upload/v1721638459/M-Shop/Hero%20section%20images/hidy1ux8jcya3kow1idc.png"
                            alt="about"
                            className="absolute h-24 md:h-[200px] bottom-4 md:bottom-[5%] right-2 md:right-[0%] rounded-[30px] mix-blend-multiply"
                        />
                    </Link>
                </div>

                <h5 className="absolute bottom-10 md:bottom-[0%] left-[50%] transform -translate-x-[50%] text-xl md:text-[25px] text-green-300">
                    Scroll Down ↓
                </h5>
            </div>
        </>
    );
}

export default MainHeroSection;
