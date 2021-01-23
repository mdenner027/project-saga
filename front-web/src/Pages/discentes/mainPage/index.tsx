import React from 'react';
import ListaDiscenetesCard from './listaDiscentesCard';
import MainContainer from '../../../components/mainContainer';
import RegistraCard from '../../../components/registraCard/RegistraCard';

export default function DiscentesMain() {
    return (
        <MainContainer activeMenu="discentes" headerTitle="Registro de Discentes">
            <RegistraCard link="/cadastrar-discente" title="Discente" />
            <ListaDiscenetesCard />
        </MainContainer>
    );
}