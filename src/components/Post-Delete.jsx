import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { fetchDeletePost } from "../utils";


const DeletePost = ({blogPost}) => {
    const {id, postId} = useParams();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [deletePostStatus, setDeletePostStatus] = useState({});

    const handleSubmit = (e) => {
        fetchDeletePost(postId, setError, setLoading, setDeletePostStatus);
        e.preventDefault();
    }


    if(error) {return <p>Updating post error. Please contact customer support. </p>}
    if(loading) {return <p>Deleting post, please wait.. </p>}

    if (deletePostStatus.success) return <Navigate to={`/techy-blog/${id}`} />


    return(
        <div className="w-full p-7">
                <p className="mb-4 text-slate-500 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold italic">Title: {blogPost.title}</p>
                <form onSubmit={handleSubmit}>
                    <p className="mb-4 italic">Are you sure you want to delete this post?</p>
                    <button className="rounded py-1 px-3 bg-slate-500 transition duration-200 hover:bg-sky-600 text-neutral-50">Delete</button>
                </form>
            <br /><br />
            <Link to={`/techy-blog/${id}`} className="display-flex font-bold transition duration-150 hover:text-sky-600 ">
                {String.fromCharCode(171)} Return to Home
            </Link>
        </div>
    )

}

export default DeletePost;