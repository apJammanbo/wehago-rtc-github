import React from 'react';

import { LUXCircularProgress } from 'luna-rocket/LUXProgress';

const LoadingIndicator = () => (
    <div id="wrap" className="wrap loading">
        <div className="content">
            <div value={90} color="gray" min={0} max={100} style={{position: 'relative', top: '50%', display: 'inline-block', width: 200, height: 200, marginTop: '-120px', zIndex: 100}}>
                <LUXCircularProgress size={200}/>
            </div>
        </div>
    </div>
);

export default LoadingIndicator;
