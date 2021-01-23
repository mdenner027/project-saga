import React from 'react';
import DadosTipo from './DadosTipo';
import MainContainer from '../../../components/mainContainer';

export default function CadastraTipo() {
    return (
        <MainContainer activeMenu="tipos" headerTitle="Registro de Tipos de Atendimento">
            <DadosTipo />
        </MainContainer>
    );
}