import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../constants/Constants";
import { ChevronDown } from "lucide-react";
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
    const { productId } = useParams();

    const { NotificationComponent, triggerNotification } = useNotification("");

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        // console.log("add to cart", product);
        dispatch(addToCart({ id: product.id, product }));

        triggerNotification({
            type: "success",
            message: "Product added successfully!",
            duration: 2500,
            animation: "pop",
        });
    };

    const rating = 3;

    const product = products.find((product) => product.id === +productId);

    return (
        <>
            {NotificationComponent}
            <section className="overflow-hidden">
                <div className="mx-auto max-w-5xl px-5 py-8">
                    <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                        <div className="overflow-hidden h-auto w-full rounded bg-black object-cover object-center lg:h-auto lg:w-1/2 ">
                            <Swiper
                                lazy={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {[...Array(5)].map((_, i) => (
                                    <>
                                        <SwiperSlide key={i}>
                                            <div className="aspect-h-1 aspect-w-1">
                                                <img
                                                    src={product.imageUrl}
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
                                {product.category}
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
                            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                                <div className="flex items-center">
                                    <span className="mr-3 text-sm font-semibold">
                                        Color
                                    </span>
                                    <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                                    <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                                    <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                                </div>
                                <div className="ml-auto flex items-center">
                                    <span className="mr-3 text-sm font-semibold">
                                        Size
                                    </span>
                                    <div className="relative">
                                        <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                                            <option>8 UK</option>
                                            <option>9 UK</option>
                                            <option>10 UK</option>
                                        </select>
                                        <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                                            <ChevronDown size={16} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="title-font text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                                    ₹47,199
                                </span>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    type="button"
                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
