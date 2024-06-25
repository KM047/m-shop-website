import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import CartPage from "./pages/CartPage";
import { PersistGate } from "redux-persist/integration/react";
import AboutPage from "./pages/AboutPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorBoundary />,

        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/products",
                element: <ProductPage />,
                errorElement: <NotFoundPage />,
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
