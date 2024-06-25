import { useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <>
            <div className="bg-white min-h-screen flex flex-col">
                <Header />

                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
