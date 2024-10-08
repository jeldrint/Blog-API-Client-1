import { useEffect } from "react";

export const fetchMainData = (setData, setError, setLoading) => {

    useEffect(() => {
      const fetchData = async () => {
        try{
            const data = await fetch('/techy-blog/api', {mode: "cors"});
            const response = await data.json();
            //console.log(response)
            setData(response);
        }catch(error){
            //console.log('error main data')
            console.log(error)
            setError(error)
        }finally{
            //console.log('finally main data')
            setLoading(false);
        }
      }
      fetchData();
    },[]) 
}

export const fetchLogin = (userData, setError, setLoading, setLoginStatus, setToken) => {
    setLoading(true);

    const fetchData = async () => {
        try{
            const data = await fetch('/techy-blog/api/log-in',{
                method: "POST",
                mode: 'cors',

                headers: {
                    "Content-Type": "application/json"
                },
    
                body: JSON.stringify({
                    username: userData.username,
                    password: userData.password,
                }),
    
            })
            const response = await data.json();
            //console.log(response)
            setLoginStatus(response)
            setToken(response.token)

        }catch(error){
            console.log(error)
            setError(error);
        }finally{
            //console.log('finally in fetch login')
            setLoading(false);
        }
    }
    fetchData();
}


export const fetchLogout = (setLoginStatus) => {
    const fetchData = async () => {
        try{
            const data = await fetch('/techy-blog/api/log-out', {
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const response = await data.json();
            //console.log(response)
            setLoginStatus(response.status)
        }catch(error){
            console.log(error)
        }
      }
      fetchData();
}


export const fetchSignup = (userData, setError, setLoading, setSignUpStatus) => {
    setLoading(true);
    //console.log(userData)

    const fetchData = async () => {
        try{
            const data = await fetch('/techy-blog/api/sign-up',{
                method: "POST",
                mode: 'cors',

                headers: {
                    "Content-Type": "application/json"
                },
    
                body: JSON.stringify({
                    firstname: userData.firstName,
                    lastname: userData.lastName,
                    username: userData.userName,
                    password: userData.password,
                    "confirm-password": userData.confirmPassword,
                    admincode: userData.adminCode
                }),
    
            })
            const response = await data.json();
            setSignUpStatus(response)
            //console.log(response)

        }catch(error){
            //console.log(error)
            setError(error);
        }finally{
            //console.log('finally in fetch signup')
            setLoading(false);
        }
    }
    fetchData();
}

export const fetchWritePost = (data, setError, setLoading, setWritePostStatus, token) => {
    setLoading(true);

    const fetchData = async () => {
        try{
            const res = await fetch('/techy-blog/api/write-post',{
                method: "POST",
                mode: 'cors',

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
    
                body: JSON.stringify({
                    title: data.title,
                    message: data.message,
                    userId: data.userId,
                }),
    
            })
            const response = await res.json();
            //console.log(response)
            setWritePostStatus(response)

        }catch(error){
            //console.log(error)
            setError(error);
        }finally{
            //console.log('finally in fetch writepost')
            setLoading(false);
        }
    }
    fetchData();
}


export const fetchUpdatePost = (data, setError, setLoading, setUpdatePostStatus, token) => {
    setLoading(true);
    //console.log(data)

    const fetchData = async () => {
        try{
            const res = await fetch('/techy-blog/api/update-post',{
                method: "POST",
                mode: 'cors',

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
    
                body: JSON.stringify({
                    postId: data.postId,
                    title: data.title,
                    message: data.message,
                    userId: data.userId
                }),
    
            })
            const response = await res.json();
            //console.log(response)
            setUpdatePostStatus(response)

        }catch(error){
            //console.log(error)
            setError(error);
        }finally{
            //console.log('finally in fetch update post')
            setLoading(false);
        }
    }
    fetchData();
}

export const fetchDeletePost = (postId, setError, setLoading, setDeletePostStatus, token) => {
    setLoading(true);
    const fetchData = async () => {
        try{
            const res = await fetch('/techy-blog/api/delete-post',{
                method: "POST",
                mode: 'cors',

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
    
                body: JSON.stringify({
                    postId
                }),
    
            })
            const response = await res.json();
            //console.log(response)
            setDeletePostStatus(response)

        }catch(error){
            //console.log(error)
            setError(error);
        }finally{
            //console.log('finally in fetch delete post')
            setLoading(false);
        }
    }
    fetchData();
}

export const fetchSubmitComment = (commentSubmit, setErrorSubmit, setLoadingSubmit, token, setCommentSubmitStatus) => {
    setLoadingSubmit(true);
    const fetchData = async () => {
        try{
            const res = await fetch('/techy-blog/api/comments',{
                method: "POST",
                mode: 'cors',

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
    
                body: JSON.stringify({
                    comment: commentSubmit.comment,
                    userId: commentSubmit.userId,
                    postId: commentSubmit.postId,
                    timestamp: commentSubmit.timestamp,
                }),
    
            })
            const response = await res.json();
            //console.log(response)
            setCommentSubmitStatus(response)
        }catch(error){
            console.log(error)
            setErrorSubmit(error);
        }
    }
    fetchData();
}

export const fetchDeleteComment = (comment, setError, setLoading, setStatus, token) => {
    setLoading(true);
    const fetchData = async () => {
        try{
            const res = await fetch('/techy-blog/api/delete-comment',{
                method: "POST",
                mode: 'cors',

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
    
                body: JSON.stringify({
                    commentId: comment._id,
                }),
    
            })
            const response = await res.json();
            //console.log(response)
            setStatus(response)
        }catch(error){
            //console.log(error)
            setError(error);
        }finally{
            //console.log('finally in fetch delete comment')
            setLoading(false);
        }
    }
    fetchData();
}

export const fetchPublish = (postId, isPostPublished, setError, setLoading, setPublishStatus, token) => {
    const fetchData = async () => {
        try{
            const res = await fetch('/techy-blog/api/publish-post',{
                method: "POST",
                mode: 'cors',

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
    
                body: JSON.stringify({
                    postId: postId,
                    isPostPublished: isPostPublished,
                }),
    
            })
            const response = await res.json();
            //console.log(response)
            setPublishStatus(response)
        }catch(error){
            //console.log(error)
            setError(error);
        }finally{
            //console.log('finally in fetch delete comment')
            setLoading(false);
        }
    }
    fetchData();
}