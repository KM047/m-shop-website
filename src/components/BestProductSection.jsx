import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { categoryByProducts } from "./../constants/Constants";
import BestProductCard from "./BestProductCard";

function BestProductSection() {
    const allProducts = categoryByProducts.reduce((acc, category) => {
        const productsWithCategory = category.products.map((product) => ({
            ...product,
            category: category.category,
        }));
        return [...acc, ...productsWithCategory];
    }, []);

    return (
        <>
            <h1 className=" text-3xl md:text-5xl font-bold uppercase">
                Our Best Products
            </h1>
            <div className="mb-10 p-5">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {allProducts.map((product, key) => (
                        <>
                            <SwiperSlide key={key}>
                                <div className="flex justify-center items-center relative py-6">
                                    <BestProductCard {...product} key={key} />
                                </div>
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </>
    );
}

export default BestProductSection;
