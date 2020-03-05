import React from 'react';
import loader from '../../images/loader.gif';
import loader2 from '../../images/loader2.gif';

const style = {
    width: '1080px',
    margin: '0 auto',
}

function CanvasLoader() {
    return <div style={style}>
        <img width="100%" src={loader2} />
    </div>
}

export default CanvasLoader;