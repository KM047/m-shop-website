import { products, categories } from "../constants/Constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/CartSlice";
import useNotification from "../utils/UseNotification";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import {
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { useState } from "react";

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

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const filteredProducts =
        selectedCategory && selectedCategory.name !== "All"
            ? products.filter(
                  (product) => product.category == selectedCategory.name
              )
            : products;

    console.log("filteredProducts" + filteredProducts);

    return (
        <div className="bg-white ">
            {NotificationComponent}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Products
                </h2>

                <div className="mx-auto w-full max-w-4xl border-b-2 border-gray-400">
                    <div className="px-2 py-6">
                        <div className="flex flex-col justify-between md:flex-row">
                            <p className="mb-4 text-xl font-bold md:mb-0">
                                Filter
                            </p>
                            <div className="w-56">
                                <Listbox
                                    value={selectedCategory}
                                    onChange={setSelectedCategory}
                                >
                                    {({ open }) => (
                                        <>
                                            <Label className="block text-sm font-medium leading-6 text-gray-900">
                                                Category
                                            </Label>
                                            <div className="relative mt-2">
                                                <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                                    <span className="flex items-center">
                                                        <span className="ml-3 block truncate">
                                                            {selectedCategory
                                                                ? selectedCategory.name
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
                                                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                                >
                                                    {categories.map(
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
                                                                value={category}
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
                                                                                    category.name
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {filteredProducts.map((product, key) => (
                        <div
                            key={product.id}
                            id={key}
                            className="group relative"
                        >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
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
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
