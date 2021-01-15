import React from 'react';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import RegistraCard from '../../../components/registraCard/RegistraCard';
import MainMenu from '../../../components/sidebarMenu';

export default function AtendimentosMain() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="atendimentos" />
                <NavHeader title="Registro de Atendimentos" />
                <div className="content">
                    <RegistraCard link="" title="Atendimento" />
                    
                </div>
                <Footer />
            </div>
        </div>
    );
}