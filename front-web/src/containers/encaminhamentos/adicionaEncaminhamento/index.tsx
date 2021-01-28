import React from 'react';
import DadosEncaminhamento from './DadosEncaminhamento';
import MainContainer from '../../../components/mainContainer';

export default function CadastraEncaminhamento() {
    return (
        <MainContainer activeMenu="encaminhamentos" headerTitle="">
            <DadosEncaminhamento />
        </MainContainer>
    );
}