import NavBar from "../NavBar/NavBar";
import { Helmet } from "react-helmet";

const StatisticsPage = () => {
    return (
        <div className=" bg-gray-100 pb-52">
            <Helmet>
                <title>Statistics</title>
            </Helmet>
            <NavBar></NavBar>
            {/* Header Section */}
            <div className="text-center z-1 bg-purple-600 mb-8 pt-7">
                <h1 className="text-3xl font-bold text-white mb-2">Statistics</h1>
                <p className="text-white pb-7">
                    Explore the latest gadgets that will take your experience to <br /> the next
                    level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>
            <div className="max-w-[1150px] mx-auto">
                <h2 className="text-[1.5rem] font-bold">Statistics</h2>
            </div>
        </div>
    );
};

export default StatisticsPage;