
const DisplayComment = ({comments, postId}) => {

    //console.log(comments.map(comment=>comment.postId._id))

    return(
        <>
            {comments.filter(comment=>comment.postId._id === postId)
                .map(item => <p key={item._id} className="text-xs md:text-sm">{item.comment}</p>)
            }
        </>
    )
}

export default DisplayComment;