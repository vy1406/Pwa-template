import React from "react";
import Header from "./header"
import Hero from "./hero";

const Layout = ( { children }) => {
    return (
        <div>
            <Header />
            <Hero />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout