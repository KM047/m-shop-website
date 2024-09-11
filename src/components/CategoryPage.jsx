import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { categoryByProducts } from "../constants/Constants";

function CategoryPage() {
    let { category } = useParams();

    // console.log(category);

    category = window.atob(category);
    // console.log(category);

    const [productsByCategory, setProductsByCategory] = useState(null);

    const [categoryDescription, setCategoryDescription] = useState("");

    function fetchProductsByCategory(categoryName) {
        const category = categoryByProducts.find(
            (cat) => cat.category === categoryName
        );

        // console.log(category);

        setCategoryDescription(category?.description);

        return category ? category.products : null;
    }

    useEffect(() => {
        const categoryAndProducts = fetchProductsByCategory(category);

        setProductsByCategory(categoryAndProducts);
    }, []);

    return (
        <>
            <section className="bg-white dark:bg-gray-900 ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            {category}
                        </h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            {categoryDescription}
                        </p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        {productsByCategory?.map((product, key) => (
                            <>
                                <Link
                                    to={`/products/${product.category.toLowerCase()}/${window.btoa(
                                        product.id
                                    )}`}
                                    key={key}
                                >
                                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                        <div className="w-96 h-80 flex justify-center items-center px-2">
                                            <img
                                                className="w-auto rounded-lg sm:rounded-none sm:rounded-l-lg object-cover object-center mx-6"
                                                src={product.imageUrl[0]}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {product.name}
                                            </h3>
                                            {/* <span className="text-gray-500 dark:text-gray-400">
                                                CEO & Web Developer
                                            </span> */}
                                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                                {product.description}
                                            </p>
                                            {/* Product price */}

                                            <span className="text-3xl font-bold text-gray-900 dark:text-white flex">
                                                ₹ {product.price}
                                                <span className="text-lg mt-3 pl-1">
                                                    per{" "}
                                                    {product?.perItem
                                                        ? "unit"
                                                        : "kg"}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default CategoryPage;
