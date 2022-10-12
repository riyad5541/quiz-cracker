import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='flex h-20 items-center justify-between px-36 bg-slate-200 lg:w-full'>
            <p className='text-2xl'>Quiz Mania</p>
            <div className='text-xl mx-5 sm:inline'>
                <Link to="/" className='ml-5'>Home</Link>
                <Link to="/statistics" className='ml-5'>Statistics</Link>
                <Link to="/blog" className='ml-5'>Blog</Link>
            </div>
        </nav>
    );
};

export default NavBar;