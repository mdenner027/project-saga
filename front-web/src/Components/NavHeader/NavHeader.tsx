import React from 'react';
import './styles.css'
type Props = {
    title: string;
}

export default function NavHeader({ title }: Props) {
    return (
        <nav className="navbar navbar-expand-lg panel-header panel-header-sm navbar-transparent bg-navheader navbar-absolute">
            <div className="new-config new-config container-fluid">
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                    </div>
                    <span className="navbar-brand navbar-header-title">{title}</span>
                </div>
            </div>
        </nav>
    );
}