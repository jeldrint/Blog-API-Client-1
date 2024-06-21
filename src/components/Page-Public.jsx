import { useNavigate } from "react-router-dom"
import DisplayComment from "./Comment-Display"

const PublicPage = ({mainData, displayComments, setDisplayComments}) => {
    const navigate = useNavigate();

    return(
        <div className="h-full w-full p-4">
            {   mainData.posts.map(post => {
                const timestamp = new Date(post.timestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                const updatedTimestamp = new Date(post.updatedTimestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                return(
                    post.isPublished &&
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

export default PublicPage;