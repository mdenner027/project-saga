import React from 'react';

export default function ExibeButton() {
    return (
        <div className="col-md-12">
            <div className="form-group">
                <button type="button"
                    className="form-control btn btn-success">
                    Exibir &nbsp;<i className="now-ui-icons arrows-1_minimal-right"></i>
                </button>
            </div>
        </div>
    );
}