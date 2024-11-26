import { useContext } from "react";
import { CartContext } from "../Root/Root";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
    const { cart, setCart, wish, setWish } = useContext(CartContext);
    const location = useLocation();

    // Highlight styles for active links
    const activeStyle = "text-purple-600 font-bold";

    return (
        <div className="navbar max-w-[1280px] mx-auto">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics" className={({ isActive }) => isActive ? activeStyle : ""}>Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeStyle : ""}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs" className={({ isActive }) => isActive ? activeStyle : ""}>Blog</NavLink>
                        </li>
                    </ul>
                </div>
                <a className="text-xl font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics" className={({ isActive }) => isActive ? activeStyle : ""}>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeStyle : ""}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" className={({ isActive }) => isActive ? activeStyle : ""}>Blog</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                {/* Add to Cart */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn bg-white border-2 border-gray-200 btn-circle">
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
                    <div tabIndex={0} role="button" className="btn bg-white border-2 border-gray-200 btn-circle">
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
    );
};

export default NavBar;
