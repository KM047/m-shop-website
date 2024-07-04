import React from "react";
import CartItem from "../components/CartItem";
import TitleSetter from "../utils/TitleSetter";

function CartPage() {
    return (
        <>
            <TitleSetter title={"Cart"}>
                <div className="mt-5">
                    <CartItem />
                </div>
            </TitleSetter>
        </>
    );
}

export default CartPage;
