import React from "react";
import { Link } from "react-router-dom";

function CategoryCard(category) {
    return (
        <>
            <div className="  flex justify-center items-center mt-6">
                <div className="relative flex w-80 flex-col rounded-xl bg-white bg-opacity-20 backdrop-blur-md backdrop-filter bg-clip-border text-quaternary shadow-md">
                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border flex justify-center items-center ">
                        <img
                            src={category.imageUrl}
                            alt={category.category}
                            className="object-cover object-center w-36"
                        />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 block font-serif text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {category.category}
                        </h5>
                        <p className="block font-serif text-base font-light leading-relaxed text-inherit antialiased px-1">
                            {category.description}
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <Link to={"/products"}>
                            <button
                                data-ripple-light="true"
                                type="button"
                                className="select-none rounded-lg bg-blue-500 hover:bg-blue-700 py-3 px-6 text-center align-middle font-serif text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            >
                                Know More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryCard;
