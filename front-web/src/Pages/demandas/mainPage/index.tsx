import React from 'react';
import MainContainer from '../../../components/mainContainer';
import RegistraCard from '../../../components/registraCard/RegistraCard';

export default function DemandasMain() {
    return (
        <MainContainer activeMenu="demandas" headerTitle="Registro de Demandas">
            <RegistraCard link="/cadastrar-demanda" title="Demanda" />
        </MainContainer>
    );
}