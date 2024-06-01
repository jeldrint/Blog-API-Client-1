import { useEffect } from "react";

export const fetchMainData = (setData, setError, setLoading) => {

    useEffect(() => {
      const fetchData = async () => {
        try{
            const data = await fetch('/techy-blog/api', {mode: "cors"});
            const response = await data.json();
            setData(response);
        }catch(error){
            console.log('error main data')
            setError(error)
        }finally{
            console.log('finally main data')
            setLoading(false);
        }
      }
      fetchData();
    },[]) 
}

export const fetchLogin = (userdata, setLoginError,setSamData, setLoginLoading) => {
    setLoginLoading(true);
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

        }).then((response) => {
            console.log(response)
            setSamData(response);
            setLoginLoading(false);
        }).then((body) => {
            console.log(body)
        })
    }catch(error){
        console.log('error in fetch login')
        setLoginError(error);
    }
}