import { useState } from "react";
import { fetchDeleteComment } from "../utils";

const DeleteComment = ({displayComments, setDisplayComments, comment}) => {
    const [deleteBtn, setDeleteBtn] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({});

    const handleDeleteComment = (e) => {
        setDeleteBtn(false);
        setDisplayComments(displayComments.filter(displayComment => displayComment._id != comment._id))
        fetchDeleteComment(comment, setError, setLoading, setStatus)
        e.preventDefault();
    }

    if(error) {return <p>Comment deletion error. Please contact customer support. </p>}
    if(loading){return <p>Deleting comment.. please wait. </p>}

    return(
        <>
            {   deleteBtn?
                
                <form onSubmit={handleDeleteComment} className="flex gap-x-2 items-center text-[10px] md:text-[12px]">
                    <p>Are you sure you want to delete this comment?</p>
                    <button className="rounded p-[5px] bg-slate-500 transition-colors hover:bg-red-600 text-neutral-50">YES</button>
                    <button onClick={(e) => {setDeleteBtn(false); e.preventDefault();}} className="rounded p-[5px] bg-slate-500 transition-colors hover:bg-sky-600 text-neutral-50">CANCEL</button>
                </form> :
                <button onClick={() => setDeleteBtn(true)} className="self-center text-[10px] md:text-[12px] rounded p-[5px] bg-slate-500 transition-colors hover:bg-red-600 text-neutral-50">DELETE</button>
            }

        </>
    )
}

export default DeleteComment;