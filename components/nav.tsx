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
    });
    return (
        <div className="flex justify-center flex-col px-24">
            <nav className="flex items-center justify-between w-full flex-1 relative max-w-2xl  mx-auto py-3">
                <Link href="/">
                    <a>
                        <h2>Selim</h2>
                    </a>
                </Link>

                <div className="flex space-x-10 items-center  ">
                    <Link href="/">
                        <a>
                            <h2>About</h2>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <h2>Projects</h2>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <h2>Blog</h2>
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <h2>Contact</h2>
                        </a>
                    </Link>
                    <button
                        aria-label="Toggle Theme"
                        className="w-8 h-8 text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                        <IoMoon onClick={() => setTheme('light')} />
                        <IoSunny onClick={() => setTheme('dark')} />
                    </button>
                </div>
            </nav>
        </div>
    );
};
export default Nav;
