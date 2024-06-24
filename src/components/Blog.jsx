import { useState } from "react";

import AdminPage from "./Page-Admin";
import MembersPage from "./Page-Members";
import PublicPage from "./Page-Public";

const Blog = ({mainData, setBlogPost, token}) => {
    const [displayComments, setDisplayComments] = useState(mainData.comments);

    if(mainData.user){
        if(mainData.user.isAdmin){
            return <AdminPage mainData={mainData} setBlogPost={setBlogPost} displayComments={displayComments} setDisplayComments={setDisplayComments} token={token} />
        }else{
            return <MembersPage mainData={mainData} displayComments={displayComments} setDisplayComments={setDisplayComments} token={token} />
        }
    }else{
        return <PublicPage mainData={mainData} displayComments={displayComments} setDisplayComments={setDisplayComments} />
    }
}
    
export default Blog;