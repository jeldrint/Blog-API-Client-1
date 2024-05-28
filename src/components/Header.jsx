import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between font-myFont bg-slate-300">
            <div className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold cursor-pointer'>
                <span>Techy</span>
                <span className='text-slate-600'>Blog</span>
            </div>
            <section className='list-none cursor-pointer flex items-center gap-x-3 md:gap-x-5 lg:gap-x-7 text-sm md:text-base lg:text-lg xl:text-xl'>
                <Link to='/techy-blog/log-in'>
                    <button className="transition duration-150 hover:invert" >Login</button>
                </Link>
                <button className="transition duration-150 hover:invert">Sign up</button>
            </section>
        </header>
    )
}

export default Header;