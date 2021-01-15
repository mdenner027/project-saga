import React from 'react';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import MainMenu from '../../../components/sidebarMenu';
import DadosDiscente from './DadosDiscente';

export default function CadastraDiscente() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="discentes" />
                <NavHeader title="Registro de Discentes" />
                <div className="content">
                    <DadosDiscente />
                </div>
                <Footer />
            </div>
        </div>
    );
}