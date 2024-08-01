import React from "react";

import truck from "../assets/delivery-truck.png";
import handMade from "../assets/handmade.png";

function FeatureSection() {
    return (
        <>
            <div className="mx-auto my-16 max-w-7xl px-2 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-2">
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-200 overflow-hidden">
                            <div className="w-full h-full pb-8 relative ">
                                <img
                                    src={truck}
                                    className="h-auto w-auto p-2 "
                                    alt={
                                        <a
                                            href="https://www.flaticon.com/free-icons/handmade"
                                            title="handmade icons"
                                        >
                                            Handmade icons created by wanicon -
                                            Flaticon
                                        </a>
                                    }
                                />
                            </div>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-quaternary">
                            Free Delivery
                        </h3>
                        {/* <p className="mt-4 text-sm text-quinary">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                        </p> */}
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-200">
                            <img
                                src={handMade}
                                className="h-auto w-auto p-2 mix-blend-multiply"
                                alt={
                                    <a
                                        href="https://www.flaticon.com/free-icons/handmade"
                                        title="handmade icons"
                                    >
                                        Handmade icons created by wanicon -
                                        Flaticon
                                    </a>
                                }
                            />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-quaternary">
                            Hand Made
                        </h3>
                        {/* <p className="mt-4 text-sm text-quinary">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                        </p> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeatureSection;
