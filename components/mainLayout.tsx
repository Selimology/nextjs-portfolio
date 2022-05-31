import { PropsWithChildren } from 'react';
import Nav from './nav';
import Footer from './footer';

type Props = PropsWithChildren<{}>;

const MainLayout = ({ children }: Props) => {
    return (
        <div className="container w-full mx-auto  flex flex-col max-w-2xl ">
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
