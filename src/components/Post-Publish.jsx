import { useState } from "react";
import { fetchPublish } from "../../utils";

const PublishPost = ({postId, isPublished, token}) => {
    const [isPostPublished, setIsPostPublished] = useState(isPublished);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [publishStatus, setPublishStatus] = useState({});

    const handlePublish = (e) => {
        fetchPublish(postId, isPostPublished, setError, setLoading, setPublishStatus, token);
    }


    if(error) {return <p>Publish setting error. Please contact customer support. </p>}
    if(loading){return <p>Changing the settings.. please wait. </p>}

    return (
        <>
            { isPostPublished ?
                <div className="flex mt-2 p-[5px] text-[12px] sm:text-[13px] md:text-[14px] bg-sky-500 text-neutral-100 rounded-md shadow-lg">
                    <p>This post is&ensp;<strong className="text-green-800">published</strong>&ensp;in the public.&emsp;</p>
                    <button onClickCapture={()=> setIsPostPublished(false)} onClick={handlePublish} className="transition-colors hover:text-neutral-300 active:text-neutral-400">Unpublish?</button>
                </div> :
                <div className="flex mt-2 p-[5px] text-[12px] sm:text-[13px] md:text-[14px] bg-sky-500 text-neutral-100 rounded-md shadow-lg">
                    <p>This post is&ensp;<strong className="text-red-800">not published</strong>&ensp;in the public.&emsp;</p>
                    <button onClickCapture={()=> setIsPostPublished(true)} onClick={handlePublish} className="underline transition-colors hover:text-neutral-300 active:text-neutral-400">Publish?</button>
                </div>
            }
        </>
    )

}

export default PublishPost