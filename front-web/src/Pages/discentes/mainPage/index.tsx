import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import RegistraCard from '../../../components/registraCard/RegistraCard';
import MainMenu from '../../../components/sidebarMenu';
import ListaDiscenetesCard from './listaDiscentesCard';

export default function DiscentesMain() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="discentes" />
                <NavHeader title="Registro de Discentes" />
                <div className="content">
                    <Link to="/cadastrar-discente">
                        <RegistraCard title="Discente" />
                    </Link>
                    <ListaDiscenetesCard />
                </div>
                <Footer />
            </div>
        </div>
    );
}