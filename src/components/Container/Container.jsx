import React from "react";

function Container({ children }) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 bg-gray-200 ">
            {children}
        </div>
    );
}

export default Container;
