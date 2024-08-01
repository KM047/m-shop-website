import React from "react";
import { useParams } from "react-router-dom";
import { categoryByProducts } from "../constants/Constants";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import useNotification from "../utils/UseNotification";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/CartSlice";

export function ProductInfo() {
    let { productId, category } = useParams();

    productId = window.atob(productId);

    const { NotificationComponent, triggerNotification } = useNotification("");

    const dispatch = useDispatch();
    const products = categoryByProducts;

    const filteredProducts = (productId, category) => {
        const categoryObj = products.find(
            (cat) => cat.category.toLowerCase() === category.toLowerCase()
        );

        console.log(categoryObj);

        if (categoryObj) {
            const product = categoryObj.products.find(
                (prod) => prod.id === +productId
            );
            return product || null;
        }

        return null;
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart({ id: product.id, product }));

        triggerNotification({
            type: "success",
            message: "Product added successfully!",
            duration: 2500,
            animation: "pop",
        });
    };

    const rating = 3;

    const product = filteredProducts(productId, category);

    return (
        <>
            {NotificationComponent}
            <section className="overflow-hidden">
                <div className="mx-auto max-w-5xl px-5 py-8">
                    <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                        <div className="overflow-hidden h-auto w-full rounded bg-black object-cover object-center lg:h-auto lg:w-1/2 ">
                            <Swiper
                                lazy={true}
                                autoHeight={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {product.imageUrl.map((img, i) => (
                                    <>
                                        <SwiperSlide key={i}>
                                            <div className="aspect-h-1 aspect-w-1">
                                                <img
                                                    src={img}
                                                    loading="lazy"
                                                    className=""
                                                />
                                            </div>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                        </SwiperSlide>
                                    </>
                                ))}
                            </Swiper>
                        </div>
                        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                                <span className="font-bold">Category</span> -{" "}
                                {category.charAt(0).toUpperCase() +
                                    category.slice(1)}
                            </h2>
                            <h1 className="my-4 text-3xl font-semibold text-black">
                                {product.name}
                            </h1>
                            <div className="my-4 flex items-center">
                                <span className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => {
                                        if (i < Math.floor(rating)) {
                                            return (
                                                <FaStar
                                                    key={i}
                                                    size={16}
                                                    className="text-yellow-500"
                                                />
                                            );
                                        } else if (
                                            i === Math.floor(rating) &&
                                            rating % 1 !== 0
                                        ) {
                                            return (
                                                <FaStarHalfAlt
                                                    key={i}
                                                    size={16}
                                                    className="text-yellow-500"
                                                />
                                            );
                                        } else {
                                            return (
                                                <FaRegStar
                                                    key={i}
                                                    size={16}
                                                    className="text-yellow-500"
                                                />
                                            );
                                        }
                                    })}
                                    <span className="ml-3 inline-block text-xs font-semibold">
                                        {rating} Reviews
                                    </span>
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                {product.description}
                            </p>
                            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5"></div>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                                    ₹ {product.price}{" "}
                                    {product.id == 1 || product.id == 3 ? (
                                        <span className="text-sm ">
                                            per unit
                                        </span>
                                    ) : (
                                        <span className="text-sm ">per kg</span>
                                    )}
                                </span>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    type="button"
                                    className="rounded-md bg-accent px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
