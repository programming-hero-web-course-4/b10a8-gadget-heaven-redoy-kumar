import { useContext, useEffect, useState } from "react";
import ShowGadget from "../ShowGadget/ShowGadget";
import { CartContext } from "../Root/Root";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [product, setProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("All");
    const { cart, setCart, wish, setWish } = useContext(CartContext);

    useEffect(() => {
        fetch('./gadgets.json')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setFilteredProducts(data);
            });
    }, []);

    // Function to filter products based on category
    const filterByCategory = (selectedCategory) => {
        setCategory(selectedCategory);
        if (selectedCategory === "All") {
            setFilteredProducts(product);
        } else {
            const filtered = product.filter(item => item.category === selectedCategory);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="bg-gray-100 pt-4">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='max-w-[1400px] mx-auto'>
                {/* Navbar */}
                <div className="p-1 border-[1px] border-[#9538E2] rounded-xl">
                    <div className='max-w-full bg-[#9538E2] rounded-xl p-1'>
                        <div className="navbar bg-[#9538E2] max-w-[1280px] mx-auto">
                            <div className="navbar-start">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h8m-8 6h16" />
                                        </svg>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm text-white dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/statistics">Statistics</a></li>
                                        <li><a href="/dashboard">Dashboard</a></li>
                                        <li><a href="/blogs">Blog</a></li>
                                    </ul>
                                </div>
                                <a className="text-xl font-bold text-white">Gadget Heaven</a>
                            </div>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal text-white px-1">
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) => isActive ? "font-bold underline" : ""}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/statistics"
                                            className={({ isActive }) => isActive ? "font-bold underline" : ""}
                                        >
                                            Statistics
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dashboard"
                                            className={({ isActive }) => isActive ? "font-bold underline" : ""}
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/blogs"
                                            className={({ isActive }) => isActive ? "font-bold underline" : ""}
                                        >
                                            Blog
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                            <div className="navbar-end flex gap-2">
                                {/* Add to Cart */}
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn bg-white btn-circle">
                                        <div className="indicator">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <span className="badge badge-md indicator-item border-none text-purple-600 bg-transparent">{cart.length > 0 ? cart.length : ""}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Add to Wish List */}
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn bg-white btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                            <span className="badge badge-md indicator-item border-none text-purple-600 bg-transparent">{wish.length > 0 ? wish.length : ""}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="text-center pb-60">
                            <h1 className="text-[3.2rem] text-center text-white font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                            <p className="text-[1rem] text-white text-center mt-3 mb-8">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                            <button className="text-[#9538E2] text-[1.25rem] rounded-3xl py-2 px-5 font-bold bg-white">Shop Now</button>
                        </div>
                    </div>

                </div>

                {/* Banner */}
                <div className="w-[1095px] relative right-[0px] -top-[200px] border-2 rounded-3xl border-white mx-auto">
                    <div className="w-[1050px] h-[500px] mx-auto m-6">
                        <img className="w-full h-full rounded-3xl object-cover" src="https://i.ibb.co.com/HzRWLW0/banner.jpg" alt="" />
                    </div>
                </div>
                {/* Header */}
                <h1 className="mt-[-125px] text-center mb-12 text-[2.5rem] font-bold">Explore Cutting-Edge Gadgets</h1>

                <div className="flex gap-6 max-w-[1120px] mx-auto pb-10">
                    {/* Sidebar with category buttons */}
                    <div className="w-1/4 border-2 rounded-lg border-gray-300 h-[555px]">
                        <div className="flex flex-col p-4 gap-6">
                            <button
                                onClick={() => filterByCategory("All")}
                                className={`px-[22px] py-[13px] text-[1.1rem] border-[1px] border-gray-300 rounded-3xl ${category === "All" ? "bg-[#9538E2] text-white font-bold" : ""}`}>
                                All Products
                            </button>
                            <button
                                onClick={() => filterByCategory("Laptops")}
                                className={`px-[22px] py-[13px] text-[1.1rem] border-[1px] border-gray-300 rounded-3xl ${category === "Laptops" ? "bg-[#9538E2] text-white font-bold" : ""}`}>
                                Laptops
                            </button>
                            <button
                                onClick={() => filterByCategory("Phones")}
                                className={`px-[22px] py-[13px] text-[1.1rem] border-[1px] border-gray-300 rounded-3xl ${category === "Phones" ? "bg-[#9538E2] text-white font-bold" : ""}`}>
                                Phones
                            </button>
                            <button
                                onClick={() => filterByCategory("Accessories")}
                                className={`px-[22px] py-[13px] text-[1.1rem] border-[1px] border-gray-300 rounded-3xl ${category === "Accessories" ? "bg-[#9538E2] text-white font-bold" : ""}`}>
                                Accessories
                            </button>
                            <button
                                onClick={() => filterByCategory("Smart Watches")}
                                className={`px-[22px] py-[13px] text-[1.1rem] border-[1px] border-gray-300 rounded-3xl ${category === "Smart Watches" ? "bg-[#9538E2] text-white font-bold" : ""}`}>
                                Smart Watches
                            </button>
                            <button
                                onClick={() => filterByCategory("MacBook")}
                                className={`px-[22px] py-[13px] text-[1.1rem] border-[1px] border-gray-300 rounded-3xl ${category === "MacBook" ? "bg-[#9538E2] text-white font-bold" : ""}`}>
                                MacBook
                            </button>
                            <button
                                onClick={() => filterByCategory("iPhone")}
                                className={`px-[22px] py-[13px] text-[1.1rem] border-[1px] border-gray-300 rounded-3xl ${category === "iPhone" ? "bg-[#9538E2] text-white font-bold" : ""}`}>
                                iPhone
                            </button>
                        </div>
                    </div>

                    {/* Product display grid */}
                    <div className="w-3/4 grid grid-cols-3 gap-6">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <ShowGadget key={product.product_id} product={product}></ShowGadget>
                            ))
                        ) : (
                            <p className="col-span-3 text-center text-gray-500">No products found in this category.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
