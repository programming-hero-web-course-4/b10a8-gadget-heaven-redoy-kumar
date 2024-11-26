import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { createContext, useState,useEffect } from "react";

export const CartContext = createContext();

const Root = () => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [wish, setWish] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Save cart to local storage when it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Save wishlist to local storage when it changes
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wish));
    }, [wish]);

    return (
        <div>
            <CartContext.Provider value={{ cart, setCart, wish, setWish }}>
                <Outlet></Outlet>
            </CartContext.Provider>
            <Footer></Footer>
        </div>
    );
};

export default Root;