import { useState } from "react";

const Header = () => {

    return (
        <header className="w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between font-myFont bg-slate-300">
            <span className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold cursor-pointer'>Techy
                <span className='text-slate-500'>Blog</span>
            </span>
            <section className='list-none cursor-pointer flex items-center gap-x-3 md:gap-x-5 lg:gap-x-7 text-sm md:text-base lg:text-lg xl:text-xl'>
                <button>Login</button>
                <button>Sign up</button>
            </section>
        </header>
    )
}

export default Header;