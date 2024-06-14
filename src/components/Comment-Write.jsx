import { useState } from "react";
import { fetchSubmitComment } from "../utils";

const WriteComment = ({user, postId, displayComments, setDisplayComments}) => {
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [commentSubmit, setCommentSubmit] = useState({comment: '', timestamp: '', userId: user, postId: postId});
    const [errorSubmit, setErrorSubmit] = useState(null);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [commentSubmitStatus, setCommentSubmitStatus] = useState({})

    const handleChangeComment = (e) => {
        switch(e.target.name){
            case 'comment-bar':
                setCommentSubmit(prev => ({...prev, comment: e.target.value}))
                break;
        }
        setCommentSubmit(prev => ({...prev, timestamp: new Date()}))
        e.preventDefault();
    }

    const handleSubmitComment = (e) => {
        setShowCommentForm(false)
        setDisplayComments([...displayComments,commentSubmit])
        fetchSubmitComment(commentSubmit, setCommentSubmit, setErrorSubmit, setLoadingSubmit, setCommentSubmitStatus)
        e.preventDefault();
    }

    if(errorSubmit) {return <p>Comment submission error. Please contact customer support. </p>}
    if(loadingSubmit){return <p>Submitting comment.. please wait. </p>}

    return(
        <>
            { showCommentForm ?
                <form onSubmit={handleSubmitComment}>
                    <textarea required onChange={handleChangeComment} name="comment-bar"  placeholder="Enter comment..." className="mb-4 resize-none w-full h-20 whitespace-pre border border-slate-500 rounded-md p-2"></textarea>
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

export default WriteComment;