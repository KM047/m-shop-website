import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CategoryCard from "./CategoryCard";
import Container from "./Container/Container";

function CategorySection() {
    const callouts = [
        {
            name: "Desk and Office",
            description: "Work from home accessories",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
            imageAlt:
                "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
            href: "#",
        },
        {
            name: "Self-Improvement",
            description: "Journals and note-taking",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
            imageAlt:
                "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
            href: "#",
        },
        {
            name: "Travel",
            description: "Daily commute essentials",
            imageSrc:
                "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
            imageAlt:
                "Collection of four insulated travel bottles on wooden shelf.",
            href: "#",
        },
    ];

    return (
        <>
            <div className=" lg:col-span-5 lg:-mr-8 xl:col-span-6 flex justify-center items-center ">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        waitForTransition: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper h-[450px]"
                    speed={1500}
                    ease="linear"
                >
                    {callouts.map((callout) => (
                        <>
                            <SwiperSlide>
                                <div className="flex justify-center items-center">
                                    <CategoryCard />
                                </div>
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default CategorySection;
