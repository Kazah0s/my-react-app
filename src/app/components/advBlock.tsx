import React from 'react';
import Advertisement from './advertisement';

function AdvBlock() {

    return (
        <div className='advBlock'>
            <h1>Ближайшие события</h1>
            <Advertisement id={'1'} theme={'dsa'} description={'dasdasdasdasdasd'} date={'01.20.2022'} />
        </div>
    )
}

export default AdvBlock