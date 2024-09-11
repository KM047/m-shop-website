import React from "react";
import TitleSetter from "../utils/TitleSetter";
import Category from "./../components/CategoryPage";

function CategoryPage() {
    return (
        <>
            <TitleSetter title={"Category"}>
                <div className="mt-3">
                    <Category />
                </div>
            </TitleSetter>
        </>
    );
}

export default CategoryPage;
