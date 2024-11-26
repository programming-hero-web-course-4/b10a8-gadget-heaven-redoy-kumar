import { Link } from "react-router-dom";


const ShowGadget = ({ product }) => {
    const { product_id, product_image, product_title, price } = product;
    return (
        <div>
            <div className="card w-64 h-96 bg-base-100 shadow-md border border-gray-200 rounded-lg p-4 flex flex-col">
                <div className="h-48 w-full rounded-lg mb-4">
                    <img className="h-full w-full object-cover rounded-lg" src={product_image} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-lg">{product_title}</h2>
                    <p className="text-gray-500 text-sm">Price: ${price}</p>
                </div>
                <Link to={`/products/${product_id}`}>
                    <div>
                        <button className="relative mt-4 px-[1px] py-[1px] rounded-2xl font-medium text-primary">
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-[1px]"></span>
                            <span className="relative text-[#9538E2] text-[1.1rem] bg-white block rounded-lg py-2 px-5">View Details</span>
                        </button>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default ShowGadget;