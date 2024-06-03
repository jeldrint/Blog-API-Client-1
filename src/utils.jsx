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

export const fetchLogin = (userData, setLoginError, setLoginLoading, setLoginStatus) => {
    setLoginLoading(true);

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
            console.log('login status triggered')
            setLoginStatus(response.status)

        }catch(error){
            console.log(error)
            setLoginError(error);
        }finally{
            console.log('finally in fetch login')
            setLoginLoading(false);
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