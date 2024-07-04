import React from "react";
import { Link } from "react-router-dom";
import notfound from "../assets/notfound.svg";

function NotFoundPage() {
    return (
        <>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <main className="grid min-h-full place-items-center bg-primary px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center relative flex flex-col items-center justify-center ">
                        <div className="w-48 h-40 flex justify-center bg-senary rounded-lg items-center overflow-hidden sm:w-56 sm:h-52">
                            <img
                                className="object-cover object-center"
                                src={notfound}
                                alt="404 not found"
                            />
                        </div>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Page not found
                        </h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Sorry, we couldn’t find the page you’re looking for.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to=""
                                onClick={() => window.history.back()}
                                className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-quinary"
                            >
                                Go back home
                            </Link>
                            <a
                                href="#"
                                className="text-sm font-semibold text-gray-900"
                            >
                                Contact support{" "}
                                <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default NotFoundPage;
