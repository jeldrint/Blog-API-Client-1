import { useEffect } from "react";

export const fetchPublicPage = (setData, setError, setLoading) => {

    useEffect(() => {
      const fetchData = async () => {
        try{
            const data = await fetch('/techy-blog/api', {mode: "cors"});
            const response = await data.json();
            setData(response);
        }catch(error){
            console.log('error?')
            setError(error)
        }finally{
            console.log('finally?')
            setLoading(false);
        }
      }
      fetchData();
    },[]) 
}

export const fetchLogin = (userdata) => {
   //console.log(userdata)
    try{
        fetch('/techy-blog/api/log-in',{
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username: userdata.username,
                password: userdata.password,
            }),

        })
    }catch(error){
        console.log('error in fetch login')
    }finally{
        console.log('finally in fetch login')
    }
}