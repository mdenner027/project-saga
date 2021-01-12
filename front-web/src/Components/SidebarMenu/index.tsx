import React from 'react';
import Logo from './Logo';
import MenuItem from './MenuItem';

function MainMenu() {
    return (
        <div className="sidebar" data-color="green">
            <Logo title="SAGA"/>
            <div className="sidebar-wrapper ps ps--active-y" id="sidebar-wrapper">
                <ul className="nav">
                    <MenuItem
                        idItem="dashboard"
                        nameItem="Início"
                        iconItem="design_app"
                        active="active" />
                    <MenuItem
                        idItem="atendimentos"
                        nameItem="Registro de Atendimentos"
                        iconItem="education_paper" />
                    <MenuItem
                        idItem="discentes"
                        nameItem="Registro de Discentes"
                        iconItem="education_hat" />
                    <MenuItem
                        idItem="cursos"
                        nameItem="Registro de Cursos"
                        iconItem="files_paper" />
                    <MenuItem
                        idItem="demandas"
                        nameItem="Registro de Demandas"
                        iconItem="ui-1_settings-gear-63" />
                    <MenuItem
                        idItem="tipos"
                        nameItem="Tipos de Atendimentos"
                        iconItem="ui-1_settings-gear-63" />
                    <MenuItem
                        idItem="encaminhamentos"
                        nameItem="Encaminhamentos"
                        iconItem="ui-1_settings-gear-63" />
                    <MenuItem
                        idItem="sair"
                        nameItem="Sair"
                        iconItem="ui-1_simple-remove" />
                </ul>
            </div>
        </div>
    );
}

export default MainMenu;