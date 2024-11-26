
const Footer = () => {
    return (
        <footer className="text-center flex flex-col gap-7 py-[100px]">
            <div>
                <h1 className="text-[2rem] font-semibold">Gadget Heaven</h1>
                <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr />
            <div className="footer text-base-content flex justify-evenly">
                <nav>
                    <h6 className="text-[1.2rem] font-extrabold text-center">Services</h6>
                    <a className="link link-hover text-gray-500">Product Support</a>
                    <a className="link link-hover text-gray-500">Order Tracking</a>
                    <a className="link link-hover text-gray-500">Shipping & Delivery</a>
                    <a className="link link-hover text-gray-500">Returns</a>
                </nav>
                <nav>
                    <h6 className="text-[1.2rem] font-extrabold">Company</h6>
                    <a className="link link-hover text-gray-500">About us</a>
                    <a className="link link-hover text-gray-500">Careers</a>
                    <a className="link link-hover text-gray-500">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-[1.2rem] font-extrabold">Legal</h6>
                    <a className="link link-hover text-gray-500">Terms of Service</a>
                    <a className="link link-hover text-gray-500">Terms of Service</a>
                    <a className="link link-hover text-gray-500">Privacy Policy</a>
                    <a className="link link-hover text-gray-500">Cookie Policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;