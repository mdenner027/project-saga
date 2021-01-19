import React from 'react';
import Footer from '../../../components/footer/Footer';
import NavHeader from '../../../components/navHeader/NavHeader';
import MainMenu from '../../../components/sidebarMenu';
import DadosEncaminhamento from './DadosEncaminhamento';
import Frame from './Frame';

export default function CadastraEncaminhamento() {
    return (
        <Frame>
            <DadosEncaminhamento />
        </Frame>
    );
}