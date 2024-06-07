import { Link } from "react-router-dom"
import { useState } from "react";
import { fetchSignup } from "../utils";
import { Navigate } from "react-router-dom";

const Signup = () => {
    const [userData, setUserData] = useState({firstName: '', lastName: '', userName: '', password: '', confirmPassword:'', adminCode: ''})
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [signUpStatus, setSignUpStatus] = useState([])

    const handleChange = (e) => {
        switch(e.target.name){
            case 'firstname':
                setUserData({...userData, firstName: e.target.value})
                break;
            case 'lastname':
                setUserData({...userData, lastName: e.target.value})
                break;
            case 'username':
                setUserData({...userData, userName: e.target.value})
                break;
            case 'password':
                setUserData({...userData, password: e.target.value})
                break;
            case 'confirm-password':
                setUserData({...userData, confirmPassword: e.target.value})
                break;
            case 'admin-code':
                setUserData({...userData, adminCode: e.target.value})
                break;
            
        }
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        fetchSignup(userData, setError, setLoading, setSignUpStatus);
        e.preventDefault();
    }

    if(error) {return <p>Sign up error. Please contact customer support. </p>}

    if (signUpStatus.successMessage) return <Navigate to='/' />

    return (
        <div className="m-8">
            <p className="font-myFont text-3xl">Sign-up! </p>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="display: inline-block m-2">
                    <label htmlFor="firstname">First Name: </label>
                    <input name="firstname" type="text" required onChange={handleChange} className="border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <div className="display: inline-block m-2">
                    <label htmlFor="lastname">Last Name: </label>
                    <input name="lastname" type="text" required onChange={handleChange} className="border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <div className="display: inline-block m-2">
                    <label htmlFor="username">User Name: </label>
                    <input name="username" type="text" required onChange={handleChange} className="border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <div>
                    <div className="display: inline-block m-2">
                        <label htmlFor="password" className="mr-3">Password: </label>
                        <input name="password" type="password" required onChange={handleChange} className="border border-black rounded-sm px-1 py-[2px]" />
                    </div>
                    <div className="display: inline-block m-2">
                        <label htmlFor="confirm-password">Confirm Password: </label>
                        <input name="confirm-password" type="password" required onChange={handleChange} className="border border-black rounded-sm px-1 py-[2px]" />
                    </div>
                </div>
                <br />
                <div className="display: inline-block m-2">
                    <label htmlFor="admin-code" className="text-sm">Admin? Enter Code here: </label>
                    <input name="admin-code" type="password" onChange={handleChange} className="text-sm border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <button className="cursor-pointer text-sm rounded py-1 px-3 bg-slate-500 transition duration-200 hover:bg-sky-600 text-neutral-50">Sign-up</button>
            </form>
            <br />
            { loading ? <p>Verifying data, please wait... </p> :
                signUpStatus.errors &&
                signUpStatus.errors.map(err=>{
                    return(
                        <ul key={err.path}>
                            <li className="text-red-600"><strong>Invalid {err.path.toUpperCase()}: </strong>{err.msg}</li>
                        </ul>
                    )
                })        
            }
            <br />
            <Link to='/' className="display-flex font-bold transition duration-150 hover:text-sky-600 ">
                {String.fromCharCode(171)} Return to Home
            </Link>
        </div>
    )
}

export default Signup