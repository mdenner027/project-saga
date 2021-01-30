import React from 'react';

type Props = {
    handleClick: () => void;
}

export default function DeletaButton({handleClick}:Props) {
    return (
        <div className="col-md-12">
            <div className="form-group">
                <button onClick={handleClick} type="button"
                    className="form-control btn btn-danger">
                    Remover &nbsp;<i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
            </div>
        </div>
    );
}