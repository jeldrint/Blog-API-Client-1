import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { fetchUpdatePost } from "../utils";


const UpdatePost = ({mainData, blogPost}) => {
    const {id, postId} = useParams();
    const [data, setData] = useState({postId: postId, title: blogPost.title, message: blogPost.body, userId: mainData.user})
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [updatePostStatus, setUpdatePostStatus] = useState({});

    //console.log(id,postId)

    const handleChange = (e) => {
        switch(e.target.name){
            case 'title':
                setData({...data, title: e.target.value})
                break;
            case 'message':
                setData({...data, message: e.target.value})
                break;
        }
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        fetchUpdatePost(data, setError, setLoading, setUpdatePostStatus);
        e.preventDefault();
    }

    if(error) {return <p>Updating post error. Please contact customer support. </p>}

    if (updatePostStatus.success) return <Navigate to={`/techy-blog/${id}`} />

    return(
        <div className="w-full p-4">
            <form onSubmit={handleSubmit}>
                <p className="mb-4 text-slate-500 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold italic">Updating post...</p>
                <div>
                    <input required onChange={handleChange} name="title" placeholder="Enter a title..." defaultValue={blogPost.title} className="mb-2 w-full border border-slate-500 rounded-md p-2"  />
                    <textarea required onChange={handleChange} name="message" placeholder="Enter text..." defaultValue={blogPost.body} className="mb-4 resize-none w-full min-h-80 whitespace-pre border text-wrap border-slate-500 rounded-md p-2"></textarea>
                </div>
                <button className="text-sm rounded-md px-3 py-[6px] bg-sky-500 transition duration-200 hover:bg-sky-600 text-neutral-50">Submit</button>
            </form>
            <br />
            { loading ? <p>Writing post, please wait... </p> :
                updatePostStatus.errors &&
                updatePostStatus.errors.map(err=>{
                    return(
                        <ul key={err.path}>
                            <li className="text-red-600"><strong>Invalid {err.path.toUpperCase()}: </strong>{err.msg}</li>
                        </ul>
                    )
                })        
            }
            <br />
            <Link to={`/techy-blog/${id}`} className="display-flex font-bold transition duration-150 hover:text-sky-600 ">
                {String.fromCharCode(171)} Return to Home
            </Link>
        </div>
    )

}

export default UpdatePost;