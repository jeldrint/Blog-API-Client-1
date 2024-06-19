import DeleteComment from "./Comment-Delete";

const DisplayComment = ({user, displayComments, setDisplayComments, postId}) => {

    if(!user){
        return (
            <div className="mb-3">
            { displayComments.filter(comment=>comment.postId._id === postId._id)
                    .map((item,index) => {
                        return(
                            <div key={item._id ? item._id : index} className="flex gap-x-10 mb-1 p-[6px] border-s-2 border-sky-500">
                                <div>
                                    <p className="text-[10px] md:text-[11px] lg:text-[12px]">{item.userId.first_name} {item.userId.family_name}&emsp;{String.fromCharCode(8226)}&emsp;{new Date(item.timestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>
                                    <p className="text-xs md:text-sm lg:text-base text-amber-900">{item.comment}</p>
                                </div>
                            </div>
                        )
                    })
            }
            </div>
        )    
    }else{
        return (
            <div className="mb-3">
            { displayComments.filter(comment=>comment.postId._id === postId._id)
                    .map((item,index) => {
                        return(
                            <div key={item._id ? item._id : index} className="flex gap-x-10 mb-1 p-[6px] border-s-2 border-sky-500">
                                <div>
                                    <p className="text-[10px] md:text-[11px] lg:text-[12px]">{item.userId.first_name} {item.userId.family_name}&emsp;{String.fromCharCode(8226)}&emsp;{new Date(item.timestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>
                                    <p className="text-xs md:text-sm lg:text-base text-amber-900">{item.comment}</p>
                                </div>
                                { user.isAdmin &&
                                    <DeleteComment displayComments={displayComments} setDisplayComments={setDisplayComments} comment={item} />
                                }
                            </div>
                        )
                    })
            }
            </div>
        )    
    }
    
}

export default DisplayComment;