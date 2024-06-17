const DisplayComment = ({displayComments, postId}) => {

    return (
        <div className="mb-3">
        { displayComments.filter(comment=>comment.postId._id === postId._id)
                .map((item,index) => {
                    return(
                        <div key={item._id ? item._id : index} className="mb-1 p-2 border-s-2 border-sky-500 font-sans">
                            <p className="text-[10px]">{item.userId.first_name} {item.userId.family_name}&emsp;{String.fromCharCode(8226)}&emsp;{new Date(item.timestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>
                            <p className="text-xs md:text-sm text-amber-900">{item.comment}</p>
                        </div>
                    )

                })
        }
        </div>
    )
    
}

export default DisplayComment;