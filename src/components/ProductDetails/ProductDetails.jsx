import { useLoaderData, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { CartContext } from "../Root/Root";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const ProductDetails = () => {
    const { productId } = useParams();
    const data = useLoaderData();
    const product = data.find((product) => product.product_id === parseInt(productId));
    const { product_image, product_title, price, availability, description, rating } = product;
    const [instock] = useState(availability ? "In Stock" : "Not in Stock");
    const { cart, setCart, wish, setWish } = useContext(CartContext);

    // State to manage button disable
    const [isWishDisabled, setIsWishDisabled] = useState(
        wish.some((p) => p.product_id === product.product_id)
    );

    function handleCart() {
        if (!availability) {
            toast.error("Product is out of stock and cannot be added to the cart.", { position: "top-center" });
            return;
        }
        if (cart.some((p) => p.product_id === product.product_id)) {
            toast.warn("Product is already in the cart.", { position: "top-center" });
            return;
        }
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        toast.success("Product added to the cart.", { position: "top-center" });
    }

    function handleWishList() {
        if (!availability) {
            toast.error("Product is out of stock and cannot be added to the wishlist.", { position: "top-center" });
            return;
        }
        if (isWishDisabled) {
            toast.warn("Product is already in the wishlist.", { position: "top-center" });
            return;
        }
        const updatedWishList = [...wish, product];
        setWish(updatedWishList);
        setIsWishDisabled(true); // Disable the button
        toast.success("Product added to the wishlist.", { position: "top-center" });
    }

    return (
        <div className="bg-gray-50 pb-32">
            <Helmet>
                <title>Product Details</title>
            </Helmet>
            <NavBar></NavBar>
            <div className="h-[460px] bg-[#9538E2]">
                <h2 className="text-center text-white text-[2rem] mb-3 pt-7">
                    Product Details
                </h2>
                <p className="text-center text-white text-[1rem]">
                    Explore the latest gadgets that will take your experience to <br />
                    the next level. From smart devices to the coolest accessories, we have it
                    all!
                </p>
            </div>

            <div className="bg-white rounded-xl max-w-[1280px] mx-auto relative -mt-72 shadow-md p-6">
                <div className="flex gap-8">
                    <img
                        src={product_image}
                        alt="A beautiful gadget"
                        className="rounded-lg w-[424.31px] h-[503px]"
                    />
                    <div className="w-1/2">
                        <h1 className="text-[1.7rem] font-semibold">{product_title}</h1>
                        <p className="py-3 text-[1.25rem]">Price: ${price}</p>
                        <button
                            className={`btn btn-sm rounded-xl text-[0.8rem] cursor-not-allowed border-[1px] ${instock === "In Stock"
                                    ? "bg-green-100 border-[#309C08] text-[#309C08]"
                                    : "bg-red-100 border-red-400 text-red-600"
                                }`}
                        >
                            {instock}
                        </button>
                        <br />
                        <p className="py-3 text-[1.15rem] text-gray-500">{description}</p>
                        <p className="py-3 text-[1.25rem] font-semibold">Specifications:</p>
                        {product.specifications.map((spec) => (
                            <div key={spec.label}>
                                <strong>{spec.label}:</strong> {spec.value}
                            </div>
                        ))}

                        <div>
                            <p className="py-2 text-[1.25rem] font-semibold">Rating:</p>
                            <div className="flex items-center gap-3 pt-2 pb-4">
                                <div className="rating rating-md">
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked
                                    />
                                    <input
                                        type="radio"
                                        name="rating-7"
                                        className="mask mask-star-2 bg-orange-400"
                                    />
                                </div>
                                <button className="rounded-3xl py-1 px-4 bg-gray-100">
                                    {rating}
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={handleCart}
                                className={`rounded-3xl py-3 px-5 flex gap-2 ${availability
                                        ? "bg-purple-500 text-white"
                                        : "bg-gray-400 cursor-not-allowed"
                                    }`}
                                disabled={!availability}
                            >
                                Add To Cart
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={handleWishList}
                                className={`btn bg-white btn-circle ${isWishDisabled ? "cursor-not-allowed opacity-50" : ""
                                    }`}
                                disabled={isWishDisabled}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                    />
                                </svg>
                            </button>
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
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
