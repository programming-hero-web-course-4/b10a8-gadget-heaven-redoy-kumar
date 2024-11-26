import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import React, { useContext, useState } from "react";
import { CartContext } from "../Root/Root";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const DashBoard = () => {
    const navigate = useNavigate(); // Initialize useNavigate for navigation
    const [activeTab, setActiveTab] = useState("cart");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { cart, setCart, wish, setWish } = useContext(CartContext);

    const totalCost = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = (id, type) => {
        if (type === "cart") {
            setCart(cart.filter((item) => item.product_id !== id));
            toast.success("Item removed from cart.", { position: "top-center" });
        } else if (type === "wishlist") {
            setWish(wish.filter((item) => item.product_id !== id));
            toast.success("Item removed from wishlist.", { position: "top-center" });
        }
    };

    const handleSortByPrice = () => {
        const sortedCart = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedCart);
    };

    const handlePurchase = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCart([]);
        navigate("/");
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="bg-gray-100 pb-52">
                <div className="text-center z-1 bg-purple-600 mb-8 pt-7">
                    <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                    <p className="text-white">
                        Explore the latest gadgets that will take your experience to the next
                        level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <div className="mt-4 pb-7 space-x-4">
                        <button
                            className={`px-9 py-2 rounded-3xl text-[1.125rem] ${activeTab === "cart"
                                ? "bg-white text-purple-600 font-bold"
                                : "bg-purple-600 border-[1px] border-white text-white"
                                }`}
                            onClick={() => setActiveTab("cart")}
                        >
                            Cart
                        </button>
                        <button
                            className={`px-8 py-2 rounded-3xl text-[1.125rem] ${activeTab === "wishlist"
                                ? "bg-white text-purple-600 font-bold"
                                : "bg-purple-600 border-[1px] border-white text-white"
                                }`}
                            onClick={() => setActiveTab("wishlist")}
                        >
                            Wishlist
                        </button>
                    </div>
                </div>

                {activeTab === "cart" && (
                    <div className="max-w-[1280px] mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-semibold">Cart</h2>
                            <div className="flex items-center gap-4">
                                <p className="text-lg font-medium">
                                    Total cost: $<span>{totalCost.toFixed(2)}</span>
                                </p>
                                <button
                                    className="relative px-[1px] py-[2px] rounded-3xl font-medium text-primary"
                                    onClick={handleSortByPrice}
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-1"></span>
                                    <span className="relative flex gap-1 text-[#9538E2] text-[1.1rem] bg-white rounded-2xl py-2 px-5">
                                        Sort by Price
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                                        </svg>
                                    </span>
                                </button>
                                <button
                                    className="px-6 text-[1.1rem] rounded-2xl py-2 bg-gradient-to-b from-pink-500 to-purple-500 text-white"
                                    onClick={handlePurchase}
                                >
                                    Purchase
                                </button>
                            </div>
                        </div>

                        <div>
                            {cart.length > 0 ? (
                                cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between items-start bg-white p-5 shadow-md rounded-lg mb-4"
                                    >
                                        <div className="flex gap-3">
                                            <img className="rounded w-[200px] h-[130px]" src={item.product_image} alt="" />
                                            <div className="flex flex-col justify-between">
                                                <p className="text-lg font-bold">{item.product_name}</p>
                                                <p className="text-gray-500">{item.description}</p>
                                                <p>Price: ${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>

                                        <button onClick={() => handleDelete(item.product_id, "cart")}>
                                            <img width='36px' height='36px' src="https://img.icons8.com/?size=100&id=3062&format=png&color=EE4B2B" alt="" />
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600">Your cart is empty.</p>
                            )}

                            <ToastContainer
                                position="top-center"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </div>
                    </div>
                )}

                {/* Wishlist Section */}
                {activeTab === "wishlist" && (
                    <div className="max-w-[1280px] mx-auto">
                        <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
                        <div>
                            {wish.length > 0 ? (
                                wish.map((item) => (
                                    <div
                                        key={item.product_id}
                                        className="flex justify-between items-start bg-white p-4 shadow-md rounded-lg mb-4"
                                    >
                                        <div className="flex gap-3">
                                            <img className="rounded w-[200px] h-[130px]" src={item.product_image} alt="" />
                                            <div className="flex flex-col justify-between">
                                                <p className="text-lg font-bold">{item.product_name}</p>
                                                <p className="text-gray-500"><span className="text-black font-bold">Description:</span> {item.description}</p>
                                                <p className="font-bold">Price: ${item.price.toFixed(2)}</p>
                                                <div>
                                                    <button className="rounded-3xl py-2 px-5 bg-purple-500 text-white">Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDelete(item.product_id, "wishlist")}>
                                            <img width='36px' height='36px' src="https://img.icons8.com/?size=100&id=3062&format=png&color=EE4B2B" alt="" />
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600">Your wishlist is empty.</p>
                            )}

                            <ToastContainer
                                position="top-center"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </div>
                    </div>
                )}


                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center">
                            <img
                                className="w-[100px] h-[100px] mx-auto mb-4"
                                src="https://i.ibb.co.com/hBFKdc5/Group.png"
                                alt="Success"
                            />
                            <h2 className="text-xl font-semibold mb-2">Purchase Successful!</h2>
                            <p className="text-lg">Total Cost: ${totalCost.toFixed(2)}</p>
                            <button
                                onClick={handleCloseModal}
                                className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashBoard;
