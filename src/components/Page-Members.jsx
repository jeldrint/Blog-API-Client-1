import DisplayComment from "./Comment-Display";
import WriteComment from "./Comment-Write";

const MembersPage = ({mainData, displayComments, setDisplayComments, token}) => {
    return(
        <div className="h-full w-full p-4">
            {mainData.posts.map(post => {
                const timestamp = new Date(post.timestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                const updatedTimestamp = new Date(post.updatedTimestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
                return(
                    post.isPublished &&
                    <div key={post._id} className="mx-2 mb-10 rounded-md shadow-lg border-2">
                        <div className="font-varelaRound p-6 flex-col">
                            <div>
                                <div className="col-span-3 font-varela font-bold tracking-wide text-xl md:text-2xl lg:text-3xl xl:text-4xl ">{post.title}</div>
                                <div className="grid grid-cols-2 gap-x-1 text-xs lg:text-sm flex-col mt-2">
                                    <span>WRITTEN BY: <strong><i>{post.userId.first_name} {post.userId.family_name}</i></strong></span> <span>Created: {timestamp}</span>
                                    { post.isUpdated && <><span>MODIFIED BY: <strong><i>{post.userIdUpdated.first_name} {post.userIdUpdated.family_name}</i></strong></span> <span>Modified: {updatedTimestamp}</span></> }
                                </div>
                            </div>
                            <br />
                            <p className="font-roboto font-light whitespace-pre-wrap text-sm md:text-base lg:text-[17px] mb-3">{post.body}</p>
                            <DisplayComment user={mainData.user} displayComments={displayComments} setDisplayComments={setDisplayComments} postId={post} />
                            <WriteComment user={mainData.user} postId={post} setDisplayComments={setDisplayComments} token={token} />
                        </div>
                    </div>
                )
            })}
        </div>
    )    
}

export default MembersPage;