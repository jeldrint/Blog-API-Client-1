import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { fetchWritePost } from "../utils";

const WritePost = ({mainData}) => {
    const {id} = useParams();
    const [data, setData] = useState({title: '', message: '', userId: mainData.user})
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [writePostStatus, setWritePostStatus] = useState({});


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
        fetchWritePost(data, setError, setLoading, setWritePostStatus);
        e.preventDefault();
    }

    if(error) {return <p>Writing post error. Please contact customer support. </p>}

    if (writePostStatus.success) return <Navigate to={`/techy-blog/${id}`} />

    return(
        <div className="w-full p-4">
            <form onSubmit={handleSubmit}>
                <p className="mb-4 text-slate-500 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold italic">Write post here...</p>
                <div>
                    <input required onChange={handleChange} name="title" placeholder="Enter a title..." className="mb-2 w-full border border-slate-500 rounded-md p-2"  />
                    <textarea required onChange={handleChange} name="message"  placeholder="Enter text..." className="mb-4 resize-none w-full min-h-80 whitespace-pre border border-slate-500 rounded-md p-2"></textarea>
                </div>
                <button className="text-sm rounded-md px-3 py-[6px] bg-sky-500 transition duration-200 hover:bg-sky-600 text-neutral-50">Submit</button>
            </form>
            <br />
            { loading ? <p>Writing post, please wait... </p> :
                writePostStatus.errors &&
                writePostStatus.errors.map(err=>{
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

export default WritePost;