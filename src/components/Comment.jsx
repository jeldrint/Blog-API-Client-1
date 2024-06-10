import { useState } from "react";
import { fetchComment } from "../utils";

const Comment = ({user}) => {
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [commentData, setCommentData] = useState({comment: '', userId: user});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [commentStatus, setCommentStatus] = useState({})

    const handleChangeComment = (e) => {
        switch(e.target.name){
            case 'comment-bar':
                setCommentData({...commentData, comment: e.target.value})
                break;
        }
        e.preventDefault();
    }

    const handleSubmitComment = (e) => {
        fetchComment(commentData, setError, setLoading, setCommentStatus)
        e.preventDefault();
    }

    if(error) {return <p>Comment submission error. Please contact customer support. </p>}

    if(loading){return <p>Submitting comment.. please wait. </p>}

    return(
        <>
            { showCommentForm ?             
                <form onSubmit={handleSubmitComment}>
                    <textarea onChange={handleChangeComment} name="comment-bar"  placeholder="Enter comment..." className="mb-4 resize-none w-full h-20 whitespace-pre border border-slate-500 rounded-md p-2"></textarea>
                    <div className="flex gap-x-2">
                        <button onClick={(e)=>{setShowCommentForm(false); e.preventDefault();}} className="rounded py-1 px-3 bg-slate-500 transition duration-200 hover:bg-sky-600 text-neutral-50">Cancel</button>
                        <button className="rounded py-1 px-3 bg-slate-500 transition duration-200 hover:bg-sky-600 text-neutral-50">Submit</button>
                    </div>
                </form> :
                <button onClick={()=>setShowCommentForm(true)} className="text-sm rounded-md py-[6px] px-2 bg-sky-500 transition duration-200 hover:bg-sky-600 text-neutral-50">ADD A COMMENT</button>
            }
        </>
    )
}

export default Comment;