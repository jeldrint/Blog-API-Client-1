import { Link } from "react-router-dom"

const Signup = () => {

    return (
        <div className="m-8">
            <p className="font-myFont text-3xl">Sign-up! </p>
            <br />
            <form method="" action="POST">
                <div className="display: inline-block m-2">
                    <label htmlFor="firstname">First Name: </label>
                    <input name="firstname" type="text" required className="border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <div className="display: inline-block m-2">
                    <label htmlFor="lastname">Last Name: </label>
                    <input name="lastname" type="text" required className="border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <div className="display: inline-block m-2">
                    <label htmlFor="username">User Name: </label>
                    <input name="username" type="text" required className="border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <div>
                    <div className="display: inline-block m-2">
                        <label htmlFor="password" className="mr-3">Password: </label>
                        <input name="password" type="password" required className="border border-black rounded-sm px-1 py-[2px]" />
                    </div>
                    <div className="display: inline-block m-2">
                        <label htmlFor="confirm-password">Confirm Password: </label>
                        <input name="confirm-password" type="password" required className="border border-black rounded-sm px-1 py-[2px]" />
                    </div>
                </div>
                <br />
                <div className="display: inline-block m-2">
                    <label htmlFor="admin-code" className="text-sm">Admin? Enter Code here: </label>
                    <input name="admin-code" type="password" className="text-sm border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <button className="cursor-pointer text-sm rounded py-1 px-3 bg-slate-500 transition duration-200 hover:bg-sky-600 text-neutral-50">Sign-up</button>
            </form>
            <br /><br />
            <Link to='/techy-blog' className="display-flex font-bold transition duration-150 hover:text-sky-600 ">
                {String.fromCharCode(171)} Return to Home
            </Link> 
        </div>
    )
}

export default Signup

{/* <h1> Sign up! </h1>
<form action="" method="POST">
    <div>
        <label for="firstname">First Name: </label>
        <input name="firstname" type="text" />
        <label for="lastname">Last Name: </label>
        <input name="lastname" type="text" />    
        <label for="username">User Name: </label>
        <input name="username" type="text" />
    </div>
    <br /> 
    <div>
        <label for="password">Password: </label>
        <input name="password" type="password" />
        <label for="confirm-password">Confirm Password: </label>
        <input name="confirm-password" type="password" />
    </div>
    <br><br>
    <div>
        <label for="admincode">Admin? Enter Code here: </label>
        <input name="admincode" placeholder="admin code..." type="password" />
    </div>
    <br />
    <button style="cursor: pointer;">Sign Up</button>
</form> */}