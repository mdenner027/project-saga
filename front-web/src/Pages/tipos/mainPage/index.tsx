import React from 'react';
import MainContainer from '../../../components/mainContainer';
import RegistraCard from '../../../components/registraCard/RegistraCard';

export default function TiposMain() {
    return (
        <MainContainer activeMenu="tipos" headerTitle="Registro de Tipos de Atendimento">
            <RegistraCard link="/cadastrar-tipo-de-atendimento"
                title="Tipo de Atendimento" />
        </MainContainer>
    );
}