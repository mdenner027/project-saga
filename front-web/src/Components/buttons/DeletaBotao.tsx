import React from 'react';

export default function DeletaButton() {
    return (
        <div className="col-md-12">
            <div className="form-group">
                <button type="button"
                    className="form-control btn btn-danger">
                    Remover &nbsp;<i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
            </div>
        </div>
    );
}