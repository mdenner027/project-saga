import React from 'react';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import RegistraCard from '../../../components/registraCard/RegistraCard';
import MainMenu from '../../../components/sidebarMenu';

export default function DemandasMain() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="demandas" />
                <NavHeader title="Registro de Demandas" />
                <div className="content">
                    <RegistraCard title="Demanda" />
                    
                </div>
                <Footer />
            </div>
        </div>
    );
}