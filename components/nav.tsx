import Link from 'next/link';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import MobileNav from './MobileNav';

const Nav = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    //avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className=" w-full py-6 flex justify-center">
            <nav
                aria-labelledby="navigationHeader"
                className=" flex items-center w-full justify-evenly md:max-w-2xl md:justify-between min-w-min">
                {/* This is for screen readers */}
                <h2 id="navigationHeader" className="sr-only">
                    Navigation
                </h2>

                <div className="visible md:hidden">
                    <MobileNav />
                </div>
                <div className="flex md:flex-1">
                    <Link href="/">
                        <a>
                            <h2>Selim</h2>
                        </a>
                    </Link>
                </div>
                <div className="flex ">
                    <div className=" hidden md:flex  items-center">
                        <Link href="/about">
                            <a className="ml-10">
                                <h2>About</h2>
                            </a>
                        </Link>
                        <Link href="/projects">
                            <a className="ml-10">
                                <h2>Projects</h2>
                            </a>
                        </Link>
                        <Link href="/blog">
                            <a className="ml-10">
                                <h2>Blog</h2>
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="ml-10">
                                <h2>Contact</h2>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <button
                            aria-label="Toggle Theme"
                            className="md:ml-10 w-8 h-8  flex justify-center items-center
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
                </div>
            </nav>
        </div>
    );
};
export default Nav;
