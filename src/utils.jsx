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

export const fetchLogin = ({userdata}) => {
    console.log(userdata)
    useEffect (() => {
        const fetchData = async () => {
            try{
                const data = await fetch('/techy-blog/api/login',{
                    method: 'POST',

                    body: JSON.stringify({
                        username: 'jeldrint',
                        password: 'sample123'
                    }),

                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                })
                const response = await data.json();
                console.log(response);
            }catch(error){
                console.log('error in fetch login')
            }finally{
                console.log('finally in fetch login')
            }
        }
        fetchData();
    },[])
}