



const Blog = ({data}) => {
    //console.log(data.posts)

    return(
        <div className="h-full w-full p-4 gap-y-2">
            {data.posts.map(post => {
                const timestamp = new Date(post.timestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                const updatedTimestamp = new Date(post.updatedTimestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                return(
                        <div key={post._id} className="mx-2 mb-10 p-6 rounded-md shadow-lg border-2 font-myFont flex-col">
                            <div>
                                <div className="font-bold tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-4xl ">{post.title}</div>
                                <div className="text-xs lg:text-sm flex-col mt-[5px]">
                                    <div className='flex gap-x-[40px]'><span>BY: <strong><i>{post.userId.user_name}</i></strong></span> <span>Created: {timestamp}</span></div>
                                    { post.isUpdated && <div className='flex gap-x-4'><span>MODIFIED BY: <strong><i>{post.userIdUpdated.user_name}</i></strong></span> <span>Created: {updatedTimestamp}</span></div> }
                                </div>
                            </div>
                            <br />
                            <p className="whitespace-pre-wrap text-sm md:text-[15px] lg:text-base">{post.body}</p>
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