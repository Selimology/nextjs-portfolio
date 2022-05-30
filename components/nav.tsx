import Link from 'next/link';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const Nav = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    //avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div className="flex justify-center flex-col px-24">
            <nav className="flex items-center justify-between w-full flex-1 relative max-w-2xl  mx-auto py-3 ">
                <Link href="/">
                    <a>
                        <h2>Selim</h2>
                    </a>
                </Link>

                <div className="flex space-x-10 items-center  ">
                    <Link href="/about">
                        <a>
                            <h2>About</h2>
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a>
                            <h2>Projects</h2>
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a>
                            <h2>Blog</h2>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a>
                            <h2>Contact</h2>
                        </a>
                    </Link>
                    <button
                        aria-label="Toggle Theme"
                        className="w-8 h-8  flex justify-center items-center
                         rounded-lg focus:outline-none focus:shadow-outline   hover:bg-gray-200 hover:ring-gray-300 hover:ring-2
                          dark:hover:ring-gray-700 dark:hover:bg-gray-700 "
                        onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                        }>
                        {mounted && theme === 'dark' ? (
                            <IoSunny className="text-white" />
                        ) : (
                            <IoMoon className="text-black" />
                        )}
                    </button>
                </div>
            </nav>
        </div>
    );
};
export default Nav;
