import React from 'react';
import Footer from '../../Components/Footer/Footer';
import NavHeader from '../../Components/NavHeader/NavHeader';
import MainMenu from '../../Components/SidebarMenu';

export default function DiscentesMain() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="discentes" />
                <NavHeader title="Registro de Discentes" />
                <div className="content">
                </div>
                <Footer />
            </div>
        </div>
    );
}