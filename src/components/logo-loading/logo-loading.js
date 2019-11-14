import React from 'react';

import './logo-loading.css';

const Loading = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-disk">
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
};

export default Loading;