import React from 'react';

function CaixaInfo(param) {
    return (
        
        <div>
            <div className='containerDentro'>
                <div className='miniBox'>
                    <p className='miniTitle'>{param.texto}</p>
                </div>
            </div>
        </div>
    );
}

export default CaixaInfo;