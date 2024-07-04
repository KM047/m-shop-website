import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    resetCart,
    updateQuantity,
} from "../redux/reducers/CartSlice";
import { Link } from "react-router-dom";

import emptyCart from "../assets/empty-cart.png";

function CartItem() {
    const { cartItems, totalQuantity, totalPrice } = useSelector(
        (state) => state.cart
    );

    const dispatch = useDispatch();

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    // const handleResetCart = () => {
    //     dispatch(resetCart());
    // };

    // console.log(cartItems);

    return (
        <div className="bg-primary mx-auto max-w-7xl px-2 lg:px-0">
            <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Shopping Cart
                </h1>
                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section
                        aria-labelledby="cart-heading"
                        className="rounded-lg bg-primary lg:col-span-8"
                    >
                        <h2 id="cart-heading" className="sr-only text-black">
                            Items in your shopping cart
                        </h2>
                        {cartItems.length != 0 ? (
                            <>
                                <ul
                                    role="list"
                                    className="divide-y divide-gray-200"
                                >
                                    {cartItems.map((product, productIdx) => (
                                        <div
                                            key={product.id}
                                            id={productIdx}
                                            className=""
                                        >
                                            <li className="flex py-6 sm:py-6 ">
                                                <div className="flex-shrink rounded-md overflow-hidden ">
                                                    <img
                                                        src={
                                                            product.imageUrl[0]
                                                        }
                                                        alt={product.name}
                                                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-xl object-cover object-center "
                                                    />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                        <div>
                                                            <div className="flex justify-between">
                                                                <h3 className="text-sm">
                                                                    <Link
                                                                        to={`/products/${product.category.toLowerCase()}/${window.btoa(
                                                                            product.id
                                                                        )}`}
                                                                        className="font-bold text-black text-base"
                                                                    >
                                                                        {
                                                                            product.name
                                                                        }
                                                                    </Link>
                                                                </h3>
                                                            </div>
                                                            <div className="mt-1 flex text-sm">
                                                                {product.color ? (
                                                                    <p className="text-sm text-gray-500">
                                                                        {
                                                                            product.color
                                                                        }
                                                                    </p>
                                                                ) : null}
                                                                {product.size ? (
                                                                    <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                                                        {
                                                                            product.size
                                                                        }
                                                                    </p>
                                                                ) : null}
                                                            </div>
                                                            <div className="mt-1 flex items-end">
                                                                <p className="text-xs font-medium text-gray-500 line-through">
                                                                    ₹{" "}
                                                                    {
                                                                        product.price
                                                                    }
                                                                </p>
                                                                <p className="text-sm font-medium text-gray-900">
                                                                    &nbsp;&nbsp;
                                                                    ₹{" "}
                                                                    {
                                                                        product.price
                                                                    }
                                                                </p>
                                                                &nbsp;&nbsp;
                                                                <p className="text-sm font-medium text-green-500">
                                                                    7% off
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="mb-2 flex">
                                                <div className="min-w-24 flex">
                                                    <button
                                                        onClick={() =>
                                                            handleUpdateQuantity(
                                                                product.id,
                                                                product.quantity ==
                                                                    0
                                                                    ? 0
                                                                    : product.quantity -
                                                                          1
                                                            )
                                                        }
                                                        type="button"
                                                        className="h-7 w-7"
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="text"
                                                        className="mx-1 h-7 w-9 rounded-md border text-center"
                                                        defaultValue={1}
                                                        value={product.quantity}
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            handleUpdateQuantity(
                                                                product.id,
                                                                product.quantity +
                                                                    1
                                                            )
                                                        }
                                                        type="button"
                                                        className="flex h-7 w-7 items-center justify-center"
                                                    >
                                                        +
                                                    </button>
                                                    <p className="flex h-7 w-7 items-center justify-center">
                                                        kg
                                                    </p>
                                                </div>
                                                <div className="ml-6 flex text-sm">
                                                    <button
                                                        onClick={() =>
                                                            handleRemoveFromCart(
                                                                product.id
                                                            )
                                                        }
                                                        type="button"
                                                        className="flex items-center space-x-1 px-2 py-1 pl-0"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="size-6 text-red-500"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                            />
                                                        </svg>

                                                        <span className="text-xs font-medium text-red-500">
                                                            Remove
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <>
                                <div className="flex justify-center items-center">
                                    <img
                                        src={emptyCart}
                                        alt="empty cart"
                                        className="w-1/2 h-1/2"
                                    />
                                </div>
                                <h2 className="text-xl font-medium">
                                    Cart is empty
                                </h2>
                            </>
                        )}
                    </section>
                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 rounded-md bg-primary lg:col-span-4 lg:mt-0 lg:p-0"
                    >
                        <h2
                            id="summary-heading"
                            className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                        >
                            Price Details
                        </h2>
                        <div>
                            <dl className=" space-y-1 px-2 py-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-800">
                                        Price ({totalQuantity} item)
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">
                                        ₹ {totalPrice.toFixed(2)}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between pt-4">
                                    <dt className="flex items-center text-sm text-gray-800">
                                        <span>Discount</span>
                                    </dt>
                                    <dd className="text-sm font-medium text-green-700 line-through">
                                        - ₹ 3,431
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <dt className="flex text-sm text-gray-800">
                                        <span>Delivery Charges</span>
                                    </dt>
                                    <dd className="text-sm font-medium text-green-700 line-through">
                                        Free
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                    <dt className="text-base font-medium text-gray-900">
                                        Total Amount
                                    </dt>
                                    <dd className="text-base font-semibold text-gray-900">
                                        ₹ {totalPrice.toFixed(2)}
                                    </dd>
                                </div>
                            </dl>
                            <div className="px-2 pb-4 font-medium text-green-700">
                                You will save ₹ 3,431 on this order
                            </div>
                            <div className="flex justify-center space-x-4">
                                <Link to={"/products"}>
                                    <button
                                        type="button"
                                        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Back to shop
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
