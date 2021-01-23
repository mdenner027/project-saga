import React from 'react';
import DadosDemanda from './DadosDemanda';
import MainContainer from '../../../components/mainContainer';

export default function CadastraDemanda() {
    return (
        <MainContainer activeMenu="demandas"
            headerTitle="Registro de Demandas">
            <DadosDemanda />
        </MainContainer>
    );
}