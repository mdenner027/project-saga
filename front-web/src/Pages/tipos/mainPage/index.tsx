import React from 'react';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import RegistraCard from '../../../components/registraCard/RegistraCard';
import MainMenu from '../../../components/sidebarMenu';

export default function TiposMain() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="tipos" />
                <NavHeader title="Registro de Tipos de Atendimento" />
                <div className="content">
                    <RegistraCard link="" title="Tipo de Atendimento" />
                    
                </div>
                <Footer />
            </div>
        </div>
    );
}