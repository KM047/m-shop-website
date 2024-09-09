import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CategoryCard from "./CategoryCard";

import { categoryByProducts } from "./../constants/Constants";

function CategorySection() {
    return (
        <>
            <h1 className=" text-3xl md:text-5xl font-bold uppercase mb-4">
                Our Category
            </h1>
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
                    className="mySwiper mb-7"
                    speed={1500}
                    ease="linear"
                >
                    {categoryByProducts.map((category, categoryIdx) => (
                        <>
                            <SwiperSlide key={categoryIdx}>
                                <div
                                    className={`${category.categoryTheme} relative rounded-lg overflow-hidden border border-gray-200 shadow-md backdrop-blur-md backdrop-filter flex justify-center items-center py-4 bg-no-repeat bg-cover bg-center`}
                                    key={categoryIdx}
                                >
                                    <div className="absolute bg-white/50 w-full h-full "></div>
                                    <CategoryCard {...category} />
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
