import { useState } from "react";

const DisplayComment = ({displayComments, postId}) => {
    const [errorDisplay, setErrorDisplay] = useState(null);
    const [loadingDisplay, setLoadingDisplay] = useState(false);
    const [commentDisplayStatus, setCommentDisplayStatus] = useState({})

    console.log(displayComments)

    //fetchDisplayComment(setComments, setErrorDisplay, setLoadingDisplay)
    if(errorDisplay){return <p>Comment display error. Please contact customer support.</p>}
    if(loadingDisplay){return <p>Displaying comments... please wait.</p>}

    return (
        <div className="mb-3">
        { displayComments.filter(comment=>comment.postId._id === postId._id)
                .map(item => <p key={item._id} className="text-xs md:text-sm">{item.comment}</p>) }
        </div>
    )
    
}

export default DisplayComment;