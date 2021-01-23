import React from 'react';
import DadosDiscente from './DadosDiscente';
import MainContainer from '../../../components/mainContainer';

export default function CadastraDiscente() {
    return (
        <MainContainer activeMenu="discentes" headerTitle="Registro de Discentes">
            <DadosDiscente />
        </MainContainer>
    );
}