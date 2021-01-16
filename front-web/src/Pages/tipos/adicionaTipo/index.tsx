import React from 'react';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import MainMenu from '../../../components/sidebarMenu';
import DadosTipo from './DadosTipo';

export default function CadastraTipo() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="tipos" />
                <NavHeader title="Registro de Tipos de Atendimento" />
                <div className="content">
                    <DadosTipo />
                </div>
                <Footer />
            </div>
        </div>
    );
}