import React from "react";
import { ProductInfo } from "../components/ProductInfo.jsx";
import TitleSetter from "../utils/TitleSetter";

function ProductOverviewPage() {
    return (
        <>
            <TitleSetter title={"Product"}>
                <div className="mt-3">
                    <ProductInfo />
                </div>
            </TitleSetter>
        </>
    );
}

export default ProductOverviewPage;
