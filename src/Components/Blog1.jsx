

const Blog1 = ({blog,handleAddBookMark}) => {
    const {title,author,cover_pic,author_image,posted_date,read_time,hashtags} = blog
    return (
        <div className="text-left ">
            <img src={cover_pic} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <div><img className="rounded-full size-10" src={author_image} alt="" /></div>
                    <div><h6 className="text-xl font-bold">{author}</h6><p>{posted_date}</p></div>
                </div>
                <div>
                    <p>{read_time} min read</p>
                    <button onClick={() => handleAddBookMark(blog)}>Bookmark</button>
                </div>

            </div>
            
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>
                {
                    hashtags.map((tag,idx) => <span key={idx}> <a href="">{tag}</a></span>)
                }
            </p>
            <a href="">Mark as read</a>

        </div>
    );
};

export default Blog1;