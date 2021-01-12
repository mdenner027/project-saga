import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    title: string
}

function Logo({ title }: Props) {
    return (
        <div className="logo">
            <Link to="/" className="simple-text logo-normal d-flex justify-content-center"><b>SAGA</b></Link>
        </div>
    );
}

export default Logo;