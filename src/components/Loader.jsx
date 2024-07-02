import React from "react";

function Loader() {
    return (
        <div className="text-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-400 mx-auto"></div>
            <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        </div>
    );
}

export default Loader;
