import React from 'react';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import MainMenu from '../../../components/sidebarMenu';
import DadosDemanda from './DadosDemanda';

export default function CadastraDemanda() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="demandas" />
                <NavHeader title="Registro de Demandas" />
                <div className="content">
                    <DadosDemanda />
                </div>
                <Footer />
            </div>
        </div>
    );
}