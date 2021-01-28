import React from 'react';
import MainContainer from '../../../components/mainContainer';
import RegistraCard from '../../../components/registraCard/RegistraCard';


export default function EncaminhamentosMain() {
    return (
        <MainContainer activeMenu="encaminhamentos" headerTitle="Registro de Encaminhamentos">
            <RegistraCard link="/cadastrar-encaminhamento"
                title="Encaminhamento" />
        </MainContainer>

    );
}