import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between font-myFont bg-slate-300">
            <Link to='/' className='text-slate-600 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold cursor-pointer'>
                <span>Techy</span>
                <span className='text-sky-600'>Blog</span>
            </Link>
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

export default Header;