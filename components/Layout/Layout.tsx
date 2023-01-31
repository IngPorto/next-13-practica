import React from "react";
import Navbar from '../Navbar/Navbar';

const Layout = (props:{children:React.ReactNode}) => {
    return (
        <>
            <Navbar />
            {
                props.children
            }
            <footer> Este es el footer </footer>
        </>
    )
}

export default Layout;