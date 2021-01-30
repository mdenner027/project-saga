import React from 'react';

type Props = {
    onClick: () => void;
}

export default function ExibeButton({onClick}:Props) {
    return (
        <div className="col-md-12">
            <div className="form-group">
                <button type="button"
                    onClick={onClick}
                    className="form-control btn btn-success">
                    Exibir &nbsp;<i className="now-ui-icons arrows-1_minimal-right"></i>
                </button>
            </div>
        </div>
    );
}