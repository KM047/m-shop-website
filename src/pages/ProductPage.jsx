import React from "react";

import { products } from "../constants/Constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/CartSlice";
import useNotification from "../utils/UseNotification";

function ProductPage() {
    // const products = [
    //     {
    //         id: 1,
    //         name: "Basic Tee",
    //         href: "#",
    //         imageSrc:
    //             "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: "$35",
    //         color: "Black",
    //     },
    //     {
    //         id: 2,
    //         name: "Basic Tee",
    //         href: "#",
    //         imageSrc:
    //             "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: "$35",
    //         color: "Black",
    //     },
    //     {
    //         id: 3,
    //         name: "Basic Tee",
    //         href: "#",
    //         imageSrc:
    //             "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: "$35",
    //         color: "Black",
    //     },
    //     {
    //         id: 4,
    //         name: "Basic Tee",
    //         href: "#",
    //         imageSrc:
    //             "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: "$35",
    //         color: "Black",
    //     },
    //     {
    //         id: 5,
    //         name: "Basic Tee",
    //         href: "#",
    //         imageSrc:
    //             "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: "$35",
    //         color: "Black",
    //     },
    //     {
    //         id: 6,
    //         name: "Basic Tee",
    //         href: "#",
    //         imageSrc:
    //             "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: "$35",
    //         color: "Black",
    //     },
    // ];

    const { NotificationComponent, triggerNotification } =
        useNotification("bottom-2");

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

    return (
        <div className="bg-white ">
            {NotificationComponent}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Products
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product, key) => (
                        <div
                            key={product.id}
                            id={key}
                            className="group relative"
                        >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                {product.id % 2 == 0 ? (
                                    <div className="absolute right-2 top-2">
                                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                            Our Best
                                        </span>
                                    </div>
                                ) : null}
                                <img
                                    src={product.imageUrl}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={`/ product/${product.id}`}>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-8"
                                            />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {product.category}
                                    </p>
                                </div>
                                <p className="text-sm font-semibold text-gray-900">
                                    ₹ {product.price}
                                </p>
                            </div>
                            <button
                                onClick={() => handleAddToCart(product)}
                                type="button"
                                className="mt-4 w-full rounded-md bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
