import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/CartSlice";
import useNotification from "../utils/UseNotification";

import {
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import {
    CheckIcon,
    ChevronUpDownIcon,
    FunnelIcon,
} from "@heroicons/react/20/solid";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { categoryByProducts } from "./../constants/Constants";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function ProductPage() {
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

    const navItems = categoryByProducts;

    const [selectedCategory, setSelectedCategory] = useState({
        category: "All",
    });

    const [searchQuery, setSearchQuery] = useState("");

    const allProducts = navItems.reduce((acc, category) => {
        const productsWithCategory = category.products.map((product) => ({
            ...product,
            category: category.category, // Add category to each product
        }));
        return [...acc, ...productsWithCategory];
    }, []);

    const filteredProducts = allProducts.filter((product) => {
        const matchedCategory =
            selectedCategory && selectedCategory.category !== "All"
                ? product.category === selectedCategory.category
                : true;

        const matchedProductSearch = product.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        return matchedCategory && matchedProductSearch;
    });

    useEffect(() => {
        // Scroll to the top of the page when this component is rendered
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-primary ">
            {NotificationComponent}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Products
                </h2>

                <div className="mx-auto w-full max-w-4xl border-b-2 border-gray-400">
                    <div className="px-2 py-6">
                        <div className=" flex flex-col items-center justify-between md:flex-row">
                            <p className="mb-4 text-xl font-bold md:mb-0">
                                Filter
                            </p>

                            <div className="relative flex justify-between gap-1 w-72">
                                <div className=" hidden items-center justify-center gap-2 md:w-56 md:flex ">
                                    <Listbox
                                        value={selectedCategory}
                                        onChange={setSelectedCategory}
                                    >
                                        {({ open }) => (
                                            <>
                                                <Label className="block text-sm font-medium leading-6 text-gray-900 ">
                                                    Category
                                                </Label>
                                                <div className="relative mt-2 w-56">
                                                    <ListboxButton className="relative w-36 cursor-default rounded-md bg-primary py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                                        <span className="flex items-center">
                                                            <span className="ml-3 block truncate">
                                                                {selectedCategory
                                                                    ? selectedCategory.category
                                                                    : "Select a category"}
                                                            </span>
                                                        </span>
                                                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                            <ChevronUpDownIcon
                                                                className="h-5 w-5 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </ListboxButton>

                                                    <ListboxOptions
                                                        transition
                                                        className="absolute w-56  z-10 mt-1 max-h-56 overflow-hidden rounded-md bg-primary py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                                    >
                                                        {navItems.map(
                                                            (category) => (
                                                                <ListboxOption
                                                                    key={
                                                                        category.id
                                                                    }
                                                                    className={({
                                                                        focus,
                                                                    }) =>
                                                                        classNames(
                                                                            focus
                                                                                ? "bg-indigo-600 text-white"
                                                                                : "",
                                                                            !focus
                                                                                ? "text-gray-900"
                                                                                : "",
                                                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                                                        )
                                                                    }
                                                                    value={
                                                                        category
                                                                    }
                                                                >
                                                                    {({
                                                                        selected,
                                                                        focus,
                                                                    }) => (
                                                                        <>
                                                                            <div className="flex items-center">
                                                                                <span
                                                                                    className={classNames(
                                                                                        selected
                                                                                            ? "font-semibold"
                                                                                            : "font-normal",
                                                                                        "ml-3 block truncate"
                                                                                    )}
                                                                                >
                                                                                    {
                                                                                        category.category
                                                                                    }
                                                                                </span>
                                                                            </div>

                                                                            {selected ? (
                                                                                <span
                                                                                    className={classNames(
                                                                                        focus
                                                                                            ? "text-white"
                                                                                            : "text-indigo-600",
                                                                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                                    )}
                                                                                >
                                                                                    <CheckIcon
                                                                                        className="h-5 w-5"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </ListboxOption>
                                                            )
                                                        )}
                                                    </ListboxOptions>
                                                </div>
                                            </>
                                        )}
                                    </Listbox>

                                    <div className="form relative">
                                        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                                            <svg
                                                width="17"
                                                height="16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-labelledby="search"
                                                className="w-5 h-5 text-gray-700"
                                            >
                                                <path
                                                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                                    stroke="currentColor"
                                                    strokeWidth="1.333"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </button>
                                        <input
                                            className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                                            placeholder="Search Products..."
                                            // required=""
                                            type="search"
                                            value={searchQuery}
                                            onChange={(e) => {
                                                setSelectedCategory({
                                                    category: "All",
                                                });
                                                setSearchQuery(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className=" relative flex flex-row justify-between items-center px-3 gap-2 sm:hidden ">
                                    <Listbox
                                        value={selectedCategory}
                                        onChange={setSelectedCategory}
                                    >
                                        {({ open }) => (
                                            <>
                                                <div className="relative mt-2">
                                                    <ListboxButton className="relative cursor-default">
                                                        <FunnelIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </ListboxButton>

                                                    <ListboxOptions
                                                        transition
                                                        className="absolute w-48 z-10 mt-1 max-h-56 overflow-hidden rounded-md bg-primary py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                                    >
                                                        {navItems.map(
                                                            (category) => (
                                                                <ListboxOption
                                                                    key={
                                                                        category.id
                                                                    }
                                                                    className={({
                                                                        focus,
                                                                    }) =>
                                                                        classNames(
                                                                            focus
                                                                                ? "bg-accent text-white"
                                                                                : "",
                                                                            !focus
                                                                                ? "text-quaternary"
                                                                                : "",
                                                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                                                        )
                                                                    }
                                                                    value={
                                                                        category
                                                                    }
                                                                >
                                                                    {({
                                                                        selected,
                                                                        focus,
                                                                    }) => (
                                                                        <>
                                                                            <div className="flex items-center">
                                                                                <span
                                                                                    className={classNames(
                                                                                        selected
                                                                                            ? "font-semibold"
                                                                                            : "font-normal",
                                                                                        "ml-3 block truncate"
                                                                                    )}
                                                                                >
                                                                                    {
                                                                                        category.category
                                                                                    }
                                                                                </span>
                                                                            </div>

                                                                            {selected ? (
                                                                                <span
                                                                                    className={classNames(
                                                                                        focus
                                                                                            ? "text-white"
                                                                                            : "text-indigo-600",
                                                                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                                    )}
                                                                                >
                                                                                    <CheckIcon
                                                                                        className="h-5 w-5"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </ListboxOption>
                                                            )
                                                        )}
                                                    </ListboxOptions>
                                                </div>
                                            </>
                                        )}
                                    </Listbox>

                                    <div className="relative">
                                        <button className="absolute left-2 -translate-y-1/2 top-1/2">
                                            <svg
                                                width="17"
                                                height="16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-labelledby="search"
                                                className="w-5 h-5 text-gray-700"
                                            >
                                                <path
                                                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                                    stroke="currentColor"
                                                    strokeWidth="1.333"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </button>
                                        <input
                                            className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-accent placeholder-quinary transition-all duration-300 shadow-md"
                                            placeholder="Search Products..."
                                            // required=""
                                            type="search"
                                            value={searchQuery}
                                            onChange={(e) =>
                                                setSearchQuery(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {filteredProducts.map(
                        (product, key) =>
                            product.isAvailable && (
                                <div
                                    key={key}
                                    id={product.id}
                                    className="group relative"
                                >
                                    <Link
                                        to={`/products/${product.category.toLowerCase()}/${window.btoa(
                                            product.id
                                        )}`}
                                        key={key}
                                    >
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-senary lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            {key % 2 == 0 ? (
                                                <div className="absolute right-2 top-2">
                                                    <span className="inline-flex items-center rounded-md bg-senary px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 ">
                                                        Our Best
                                                    </span>
                                                </div>
                                            ) : null}
                                            <img
                                                src={product.imageUrl[0]}
                                                alt={product.name}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full  transition-transform ease-linear group-hover:scale-105  "
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-base font-semibold text-quaternary">
                                                    <div>
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-8 group-hover:text-red-300"
                                                        />
                                                        {product.name}
                                                    </div>
                                                </h3>
                                                <p className="mt-1 text-sm font-medium text-quinary">
                                                    {product.category}
                                                </p>
                                            </div>
                                            <p className="text-xl font-semibold text-gray-900 ">
                                                ₹ {product.price}
                                            </p>
                                        </div>
                                    </Link>

                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        type="button"
                                        className="mt-4 w-full rounded-md bg-accent px-2 py-1.5 text-sm font-bold text-primary shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
