import React from 'react';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import RegistraCard from '../../../components/registraCard/RegistraCard';
import MainMenu from '../../../components/sidebarMenu';

export default function EncaminhamentosMain() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="encaminhamentos" />
                <NavHeader title="Registro de Encaminhamentos" />
                <div className="content">
                    <RegistraCard title="Encaminhamento" />
                    
                </div>
                <Footer />
            </div>
        </div>
    );
}