import { useState } from "react";

const DisplayComment = ({displayComments, postId}) => {
    const [errorDisplay, setErrorDisplay] = useState(null);
    const [loadingDisplay, setLoadingDisplay] = useState(false);
    const [commentDisplayStatus, setCommentDisplayStatus] = useState({})

    //fetchDisplayComment(setComments, setErrorDisplay, setLoadingDisplay)
    if(errorDisplay){return <p>Comment display error. Please contact customer support.</p>}
    if(loadingDisplay){return <p>Displaying comments... please wait.</p>}

    return (
        <div className="mb-3">
        { displayComments.filter(comment=>comment.postId._id === postId._id)
                .map((item,index) => <p key={item._id ? item._id : index} className="text-xs md:text-sm">{item.comment} {new Date(item.timestamp).toLocaleDateString('en-US',{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})}</p>) }
        </div>
    )
    
}

export default DisplayComment;