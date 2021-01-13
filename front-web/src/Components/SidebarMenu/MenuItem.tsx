import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    iconItem: string;
    idItem: string;
    linkItem: string;
    nameActive: string;
    nameItem: string;
}

function MenuItem({ iconItem, idItem, linkItem, nameActive, nameItem }: Props) {
    return (
        <li id={idItem} className={idItem === nameActive ? 'active' : ''}>
            <Link to={`${linkItem}`}>
                <i className={`now-ui-icons ${iconItem}`}></i>
                <p>{nameItem}</p>
            </Link>
        </li>
    );
}

export default MenuItem;