import { PropsWithChildren } from 'react';
import Nav from './nav';

type Props = PropsWithChildren<{}>;

const MainLayout = ({ children }: Props) => {
    return (
        <div className="">
            <Nav />
            {children}
        </div>
    );
};

export default MainLayout;
