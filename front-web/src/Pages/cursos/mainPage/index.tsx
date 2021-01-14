import React from 'react';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import RegistraCard from '../../../components/registraCard/RegistraCard';
import MainMenu from '../../../components/sidebarMenu';
import ListCard from './listCard';

export default function CursosMain() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="cursos" />
                <NavHeader title="Registro de Cursos" />
                <div className="content">
                    <RegistraCard title="Curso" />
                    <ListCard />
                </div>
                <Footer />
            </div>
        </div>
    );
}