import { useNavigate } from "react-router-dom"
import { useState } from "react";

import AdminPage from "./Page-Admin";
import MembersPage from "./Page-Members";
import PublicPage from "./Page-Public";

const Blog = ({mainData, setBlogPost}) => {
    const [displayComments, setDisplayComments] = useState(mainData.comments);

    if(mainData.user){
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