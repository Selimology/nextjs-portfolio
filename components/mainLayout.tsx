import { PropsWithChildren } from 'react';
import Nav from './nav';
import Footer from './footer';

type Props = PropsWithChildren<{}>;

const MainLayout = ({ children }: Props) => {
    return (
        <div className="">
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
