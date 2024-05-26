
const Blog = ({data}) => {
    console.log(data.posts)
    const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738))
    console.log(Date.now())
    //const timestamp = new Intl.DateTimeFormat().format(post.timestamp);
    console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date))

    return(
        <div className="h-full w-full p-4 gap-y-2">
            {data.posts.map(post => {
                return(
                        <div key={post._id} className="mx-2 mb-10 p-6 rounded-md shadow-lg border-2 font-myFont flex-col">
                            <div>
                                <div className="font-bold tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-4xl ">{post.title}</div>
                                <div className="text-xs lg:text-sm flex-col mt-[2px]">
                                    <div className='flex gap-x-4'><span>BY: <strong><i>{post.userId.user_name}</i></strong></span> <span>Created: {post.timestamp}</span></div>
                                    { post.isUpdated && <div className='flex gap-x-4'><span>MODIFIED BY: <strong><i>{post.userIdUpdated.user_name}</i></strong></span> <span>Created: {post.updatedTimestamp}</span></div> }
                                </div>
                            </div>
                            <br />
                            <p className="text-sm md:text-base lg:text-lg">{post.body}</p>
                            <br />
                            <div>
                                <button className="text-sm rounded-md p-[6px] bg-sky-500 hover:bg-sky-600 text-neutral-50">ADD A COMMENT</button>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}
    
export default Blog;