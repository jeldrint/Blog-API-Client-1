import { useState } from "react";

export const useToken = () => {
    const getToken = () => {
        const token = localStorage.getItem('token')
        //console.log('getItem', token)
        return token
    }

    //declaring variable
    const [token, setToken] = useState(getToken());

    const saveToken = (token) => {
        localStorage.setItem('token', token)
        //console.log('setItem', token)
        setToken(token)
    }
    return {
        token: token,
        setToken: saveToken
    }
}