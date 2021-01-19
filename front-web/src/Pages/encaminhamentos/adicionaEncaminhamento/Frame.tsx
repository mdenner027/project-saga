import React from 'react';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import MainMenu from '../../../components/sidebarMenu';

type Props = {
    children: React.ReactNode;
}

export default function Frame({ children }: Props) {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="encaminhamentos" />
                <NavHeader title="Registro de Encaminhamentos" />
                <div className="content">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}