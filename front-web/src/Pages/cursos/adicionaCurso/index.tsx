import React from 'react';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import MainMenu from '../../../components/sidebarMenu';
import DadosCurso from './DadosCurso';

export default function CadastraCurso() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="cursos" />
                <NavHeader title="Registro de Discentes" />
                <div className="content">
                    <DadosCurso />
                </div>
                <Footer />
            </div>
        </div>
    );
}