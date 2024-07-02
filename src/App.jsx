import { Suspense, useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";

function App() {
    return (
        <>
            <Suspense
                fallback={
                    <div className="absolute top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2">
                        <Loader />
                    </div>
                }
            >
                <div className="bg-white min-h-screen flex flex-col">
                    <Header />

                    <main className="flex-grow">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </Suspense>
        </>
    );
}

export default App;
