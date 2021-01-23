import React from 'react';
import Footer from './Footer';
import MainHeader from './MainHeader';
import MainMenu from '../sidebarMenu';

type Props = {
    children: React.ReactNode;
    headerTitle: string;
    activeMenu: string;
}

export default function MainContainer({ children, headerTitle, activeMenu }: Props) {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive={activeMenu} />
                <MainHeader title={headerTitle} />
                <div className="content">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}