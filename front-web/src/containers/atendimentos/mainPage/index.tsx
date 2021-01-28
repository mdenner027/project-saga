import React from 'react';
import RegistraCard from '../../../components/registraCard/RegistraCard';
import MainContainer from '../../../components/mainContainer';

export default function AtendimentosMain() {
    return (
        <MainContainer activeMenu="atendimentos" headerTitle="Registro de Atendimentos">
            <RegistraCard link="" title="Atendimento" />
        </MainContainer>
    );
}