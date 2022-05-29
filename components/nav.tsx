import Link from 'next/link';

const Nav = () => {
    return (
        //bg
        <div className="flex justify-center flex-col px-24">
            <nav className="flex justify-evenly">
                <Link href="/">
                    <a>Selim</a>
                </Link>
                <div>
                    <ul className="flex justify-evenly">
                        <li>
                            <Link href="/">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Nav;
