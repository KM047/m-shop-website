import React from "react";

import natureProduct from "../assets/nature-product.png";
import noPreservatives from "../assets/no-preservatives.png";
import handMade from "../assets/handmade.png";

function FeatureSection() {
    return (
        <>
            <div className="mx-auto my-16 max-w-7xl px-2 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-200 overflow-hidden">
                            <div className="w-full h-full pb-8 relative ">
                                <img
                                    src={noPreservatives}
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
                            Hygienic
                        </h3>
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
                    </div>

                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-200">
                            <img
                                src={natureProduct}
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
                            Pure
                        </h3>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-200">
                            <img
                                src={noPreservatives}
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
                            Without preservatives
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeatureSection;
