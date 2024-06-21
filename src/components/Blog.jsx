import { useNavigate } from "react-router-dom"
import { useState } from "react";
import DisplayComment from "./Comment-Display";

import AdminPage from "./Page-Admin";
import MembersPage from "./Page-Members";
import PublicPage from "./Page-Public";

const Blog = ({mainData, setBlogPost}) => {
    const navigate = useNavigate();
    const [displayComments, setDisplayComments] = useState(mainData.comments);

    if(mainData.user){
        //console.log(id)
        if(mainData.user.isAdmin){
            return <AdminPage mainData={mainData} setBlogPost={setBlogPost} displayComments={displayComments} setDisplayComments={setDisplayComments} />
        }else{
            return <MembersPage mainData={mainData} displayComments={displayComments} setDisplayComments={setDisplayComments} />
        }
    }else{
        return <PublicPage mainData={mainData} displayComments={displayComments} setDisplayComments={setDisplayComments} />
    }
}
    
export default Blog;