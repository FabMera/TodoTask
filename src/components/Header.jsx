import React from "react";
import MoonIcon from "./icons/MoonIcon";
const Header = () => {
    return (
        <>
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon fill="#FFF" />
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
