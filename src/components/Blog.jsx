import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const Blog = ({mainData, setBlogPost}) => {
    const {id} = useParams()
    const navigate = useNavigate();

    const handleWritePostClick = () => {
        return navigate(`/techy-blog/${id}/write-post`);
    }

    const handleUpdatePostClick = (e,post) => {
        setBlogPost({title: post.title, body: post.body});
        return navigate(`/techy-blog/${id}/update-post/${post._id}`);
    }

    const handleDeletePostClick = (e,post) => {
        setBlogPost({title: post.title, body: post.body});
        return navigate(`/techy-blog/${id}/delete-post/${post._id}`);
    }

    if(mainData.user){
        //console.log(id)
        return(
            <div className="h-full w-full p-4">
                {mainData.user.isAdmin && <button onClick={handleWritePostClick} className="w-full my-3 text-[15px] rounded-md p-[6px] bg-sky-500 transition duration-200 hover:bg-sky-600 text-neutral-50">WRITE A POST</button>}
                {mainData.posts.map(post => {
                    const timestamp = new Date(post.timestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                    const updatedTimestamp = new Date(post.updatedTimestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                    return(
                            <div key={post._id} className="mx-2 mb-10 p-6 rounded-md shadow-lg border-2 font-myFont flex-col">
                                <div>
                                    <div className="grid grid-cols-4">
                                        <div className="col-span-3 font-bold tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-4xl ">{post.title}</div>
                                        {mainData.user.isAdmin && 
                                        <div className="flex flex-col md:flex-row items-center justify-center gap-x-2 gap-y-2 text-sm lg:text-base">
                                            <button onClick={e=>handleUpdatePostClick(e,post)} className="rounded py-1 px-3 bg-slate-500 transition duration-200 hover:bg-sky-600 text-neutral-50">UPDATE</button>
                                            <button onClick={e=>handleDeletePostClick(e,post)} className="rounded py-1 px-3 bg-slate-500 transition duration-200 hover:bg-sky-600 text-neutral-50">DELETE</button>
                                        </div>
                                        }
                                    </div>
                                    <div className="text-xs lg:text-sm flex-col mt-[5px]">
                                        <div className='flex gap-x-[50px]'><span>BY: <strong><i>{post.userId.first_name} {post.userId.family_name}</i></strong></span> <span>Created: {timestamp}</span></div>
                                        { post.isUpdated && <div className='flex gap-x-4'><span>MODIFIED BY: <strong><i>{post.userIdUpdated.first_name} {post.userIdUpdated.family_name}</i></strong></span> <span>Modified: {updatedTimestamp}</span></div> }
                                    </div>
                                </div>
                                <br />
                                <p className="whitespace-pre-wrap text-sm md:text-[15px] lg:text-base">{post.body}</p>
                                <br />
                                <div>
                                    <button className="text-sm rounded-md p-[6px] bg-sky-500 transition duration-200 hover:bg-sky-600 text-neutral-50">ADD A COMMENT</button>
                                </div>
                            </div>
                    )
                })}
            </div>
        )
    }else{
        return(
            <div className="h-full w-full p-4 gap-y-2">
                {mainData.posts.map(post => {
                    const timestamp = new Date(post.timestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                    const updatedTimestamp = new Date(post.updatedTimestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                    return(
                            <div key={post._id} className="mx-2 mb-10 p-6 rounded-md shadow-lg border-2 font-myFont flex-col">
                                <div>
                                    <div className="font-bold tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-4xl ">{post.title}</div>
                                    <div className="text-xs lg:text-sm flex-col mt-[5px]">
                                        <div className='flex gap-x-[50px]'><span>BY: <strong><i>{post.userId.first_name} {post.userId.family_name}</i></strong></span> <span>Created: {timestamp}</span></div>
                                        { post.isUpdated && <div className='flex gap-x-4'><span>MODIFIED BY: <strong><i>{post.userIdUpdated.first_name} {post.userIdUpdated.family_name}</i></strong></span> <span>Created: {updatedTimestamp}</span></div> }
                                    </div>
                                </div>
                                <br />
                                <p className="whitespace-pre-wrap text-sm md:text-[15px] lg:text-base">{post.body}</p>
                                <br />
                                <div>
                                    <button className="text-sm rounded-md p-[6px] bg-sky-500 transition duration-200 hover:bg-sky-600 text-neutral-50">ADD A COMMENT</button>
                                </div>
                            </div>
                    )
                })}
            </div>
        )
    }

}
    
export default Blog;