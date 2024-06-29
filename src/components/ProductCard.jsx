import React, { useState } from "react";

function ProductCard(product, key, handleAddToCart = () => {}) {
    return (
        <>
            <div key={product.id} id={key} className="group relative">
                <div className=" aspect-auto  w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
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
        </>
    );
}

export default ProductCard;
