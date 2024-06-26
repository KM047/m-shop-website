import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";

import { PersistGate } from "redux-persist/integration/react";
import AboutPage from "./pages/AboutPage.jsx";

import { HomePage, CartPage, NotFoundPage, ProductPage } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage />,

        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/products",
                element: <ProductPage />,
                // errorElement: <NotFoundPage />,
            },
            {
                path: "/cart",
                element: <CartPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
