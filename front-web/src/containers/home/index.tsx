import React from 'react';
import CardAtendidos from "./CardAtendidos";
import CardAtendimentos from "./CardAtendimentos";
import MainContainer from "../../components/mainContainer";

export default function Home() {

    return (
        <MainContainer activeMenu="inicio" headerTitle="Início">
            <CardAtendimentos />
            <CardAtendidos />
        </MainContainer>
    );
}