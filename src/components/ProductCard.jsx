import React, { useState } from "react";

function ProductCard(id) {
    return (
        <>
            {/* <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4"> */}
            {/* product card */}
            <div className="shadow-sm">
                <div className="w-72 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img
                        className="w-full h-40 object-cover rounded-t-lg"
                        alt="Card Image"
                        src="https://via.placeholder.com/150"
                    />
                    <img src="" alt="" />
                    <div className="p-4">
                        <h2 className="text-xl  font-semibold">
                            Beautiful Card
                        </h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam quis ante sit amet tellus ornare
                            tincidunt.
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                                Learn More {id.p}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div>
            </div> */}
        </>
    );
}

export default ProductCard;
