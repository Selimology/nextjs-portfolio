import { PropsWithChildren } from 'react';
import Nav from './nav';

type Props = PropsWithChildren<{}>;

const MainLayout = ({ children }: Props) => {
    return (
        <div className="container">
            <Nav />
            {children}
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;
