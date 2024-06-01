import { Link } from "react-router-dom"
import { fetchLogin } from "../utils"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = ({data}) => {
    const [userData, setUserData] = useState({username: '', password: ''})
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState(null);
    const [loginLoading, setLoginLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState('');

    const handleChange = (e) => {
        switch(e.target.name){
            case 'username':
                setUserData({...userData, username: e.target.value})
                break;
            case 'password':
                setUserData({...userData, password: e.target.value})
                break;
        }
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        fetchLogin(userData, setLoginError, setLoginLoading, setIsLoggedIn);
        e.preventDefault();
    }
    if(loginError) {return <p>Login error. Please contact customer support. </p>}
    if(loginLoading) {return <p>Verifying user, please wait... </p>}

    return (
        <div className="m-8">
            <p className="font-myFont text-3xl">Please Log-in. </p>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="display: inline-block mr-3">
                    <label htmlFor="username">Username: </label>
                    <input name="username" type="text" required onChange={handleChange} className="border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <div className="display: inline-block mr-3">
                    <label htmlFor="password">Password: </label>
                    <input name="password" type="password" required onChange={handleChange} className="border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <button className="cursor-pointer text-sm rounded py-1 px-3  transition-colors bg-gray-700 hover:bg-gray-900 active:bg-gray-500 text-neutral-50">Log-in</button>
            </form>
            <br />
            <p className={isLoggedIn==='failed' ? "text-red-600" : "text-transparent"} >Your username or password is incorrect.</p>
            <br />
            <p>No account yet? <Link to='/techy-blog/sign-up' className="underline font-bold transition duration-150 hover:text-sky-600 ">Sign-up!</Link></p>
            <br />
            <Link to='/techy-blog' className="display-flex font-bold transition duration-150 hover:text-sky-600 ">
                {String.fromCharCode(171)} Return to Home
            </Link> 
        </div>
    )
}

export default Login