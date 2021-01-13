import React from 'react';
import Logo from './Logo';
import MenuItem from './MenuItem';

type Props = {
    nameActive: string;
}

function MainMenu({ nameActive }: Props) {
    return (
        <div className="sidebar" data-color="green">
            <Logo title="SAGA" />
            <div className="sidebar-wrapper ps ps--active-y" id="sidebar-wrapper">
                <ul className="nav">
                    <MenuItem
                        idItem="inicio"
                        nameActive = {nameActive}
                        nameItem="Início"
                        iconItem="design_app"
                        linkItem="/" />
                    <MenuItem
                        idItem="atendimentos"
                        nameActive = {nameActive}
                        nameItem="Registro de Atendimentos"
                        iconItem="education_paper"
                        linkItem="/" />
                    <MenuItem
                        idItem="discentes"
                        nameActive = {nameActive}
                        nameItem="Registro de Discentes"
                        iconItem="education_hat"
                        linkItem="/registro-de-discentes" />
                    <MenuItem
                        idItem="cursos"
                        nameActive = {nameActive}
                        nameItem="Registro de Cursos"
                        iconItem="files_paper"
                        linkItem="/registro-de-cursos" />
                    <MenuItem
                        idItem="demandas"
                        nameActive = {nameActive}
                        nameItem="Registro de Demandas"
                        iconItem="ui-1_settings-gear-63"
                        linkItem="/" />
                    <MenuItem
                        idItem="tipos"
                        nameActive = {nameActive}
                        nameItem="Tipos de Atendimentos"
                        iconItem="ui-1_settings-gear-63"
                        linkItem="/" />
                    <MenuItem
                        idItem="encaminhamentos"
                        nameActive = {nameActive}
                        nameItem="Encaminhamentos"
                        iconItem="ui-1_settings-gear-63"
                        linkItem="/" />
                    <MenuItem
                        idItem="sair"
                        nameActive = {nameActive}
                        nameItem="Sair"
                        iconItem="ui-1_simple-remove"
                        linkItem="/" />
                </ul>
            </div>
        </div>
    );
}

export default MainMenu;