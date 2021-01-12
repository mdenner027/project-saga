import React from 'react';

type Props = {
    nameItem: string;
    idItem: string;
    iconItem: string;
    active?: string;
}

function MenuItem({ nameItem, idItem, iconItem, active }: Props) {
    return (
        <li id={idItem} className={`${active}`}>
            <a href="">
                <i className={`now-ui-icons ${iconItem}`}></i>
                <p>{nameItem}</p>
            </a>
        </li>
    );
}

export default MenuItem;