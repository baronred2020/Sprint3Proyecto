import React from 'react';
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function Loading2() {
    return (
        <div className='divPadre'>
            <div className='divhijo'>
            <Spinner  className='spinnerReactstrap'></Spinner>
            </div>
        </div>
    );
}

export default Loading2;