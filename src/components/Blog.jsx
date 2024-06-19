import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react";
import WriteComment from "./Comment-Write";
import DisplayComment from "./Comment-Display";

const Blog = ({mainData, setBlogPost}) => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [displayComments, setDisplayComments] = useState(mainData.comments);

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
                        <div key={post._id} className="mx-2 mb-10 rounded-md shadow-lg border-2">
                            <div className="font-varelaRound p-6 flex-col">
                                <div>
                                    <div className="grid grid-cols-4">
                                        <div className="col-span-3 font-varela font-bold tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-4xl ">{post.title}</div>
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
                                <p className="font-roboto font-light whitespace-pre-wrap text-sm md:text-base lg:text-[17px] mb-3">{post.body}</p>
                                <DisplayComment user={mainData.user} displayComments={displayComments} setDisplayComments={setDisplayComments} postId={post} />
                                <WriteComment user={mainData.user} postId={post} displayComments={displayComments} setDisplayComments={setDisplayComments} />
                            </div>
                            {mainData.user.isAdmin && post.isPublished ?
                                <div className="flex mt-2 p-[5px] text-12px md:text-[14px] bg-sky-500 text-neutral-50 rounded-md shadow-lg">
                                    <p>This post is published.&emsp;</p>
                                    <button className="transition-colors hover:text-neutral-300 active:text-neutral-400">Unpublish?</button>
                                </div>:
                                <div className="flex mt-2 p-[5px] text-12px md:text-[14px] bg-sky-600 text-neutral-50 rounded-md shadow-lg">
                                    <p>This post is unpublished.</p> 
                                    <button className="transition-colors hover:text-neutral-300 active:text-neutral-400">Publish?</button>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        )
    }else{
        return(
            <div className="h-full w-full p-4">
                {mainData.posts.map(post => {
                    const timestamp = new Date(post.timestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                    const updatedTimestamp = new Date(post.updatedTimestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                    return(
                        <div key={post._id} className="font-varelaRound mx-2 mb-10 p-6 rounded-md shadow-lg border-2 flex-col">
                            <div>
                                <div className="font-varela font-bold tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-4xl ">{post.title}</div>
                                <div className="text-xs lg:text-sm flex-col mt-[5px]">
                                    <div className='flex gap-x-[50px]'><span>BY: <strong><i>{post.userId.first_name} {post.userId.family_name}</i></strong></span> <span>Created: {timestamp}</span></div>
                                    { post.isUpdated && <div className='flex gap-x-4'><span>MODIFIED BY: <strong><i>{post.userIdUpdated.first_name} {post.userIdUpdated.family_name}</i></strong></span> <span>Created: {updatedTimestamp}</span></div> }
                                </div>
                            </div>
                            <br />
                            <p className="font-roboto font-light whitespace-pre-wrap text-sm md:text-[15px] lg:text-base">{post.body}</p>
                            <br />
                            <DisplayComment displayComments={displayComments} setDisplayComments={setDisplayComments} postId={post} />
                            <button onClick={()=>navigate('/techy-blog/log-in')} className="text-sm rounded-md py-[6px] px-2 bg-sky-500 transition duration-200 hover:bg-sky-600 text-neutral-50">ADD A COMMENT</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}
    
export default Blog;