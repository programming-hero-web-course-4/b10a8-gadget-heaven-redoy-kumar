
const Blog = ({ blog }) => {
    const { image, date, title, short_description } = blog;
    return (
        <div className="card card-compact bg-base-100 w-96 h-[500px] shadow-xl mb-9">
            <figure className="h-[200px] w-full overflow-hidden">
                <img src={image} alt="Blogs" className="h-full w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{date}</p>
                <p>{short_description}</p>
                <div>
                    <button className="rounded-3xl py-2 px-5 bg-purple-500 text-white flex gap-1">See more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;