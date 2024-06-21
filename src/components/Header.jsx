import { Link, Navigate } from "react-router-dom";
import { fetchLogout } from "../utils";

const Header = ({mainData, loginStatus, setLoginStatus}) => {

    const handleLogout = () => {
        fetchLogout(setLoginStatus)
    }

    if (loginStatus === 'logged out') {
        return <Navigate to='/' />
    }

    if (mainData.user) {
        return(
        <header className="w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between bg-slate-300">
            <div className='text-slate-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-varela'>
                <span>Techy</span>
                <span className='text-sky-600'>Blog</span>
            </div>
            <section className='flex items-center gap-x-1 md:gap-x-2 lg:gap-x-3'>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>{mainData.user.first_name} {mainData.user.family_name}</p>
                <button onClick={handleLogout} className="text-sky-600 underline font-bold transition-colors hover:text-sky-400 cursor-pointer text-xs lg:text-sm">LOG OUT</button>
            </section>
        </header>
        )
    }else{
        return (
            <header className="w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between bg-slate-300">
                <div className='text-slate-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-varela'>
                    <span>Techy</span>
                    <span className='text-sky-600'>Blog</span>
                </div>
                <section className='list-none cursor-pointer flex items-center gap-x-3 md:gap-x-5 lg:gap-x-7 text-sm md:text-base lg:text-lg xl:text-xl'>
                    <Link to='/techy-blog/log-in'>
                        <button className="transition duration-150 hover:invert" >Login</button>
                    </Link>
                    <Link to='/techy-blog/sign-up'>
                        <button className="transition duration-150 hover:invert">Sign up</button>
                    </Link>
                </section>
            </header>
        )    
    }
}

export default Header;