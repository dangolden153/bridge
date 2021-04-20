import React from 'react'
import ReactDOM from 'react-dom' 

import './backdrop.css'

function Backdrop() {
    const backContent = (
        <div className="backdrop">
            
        </div>
    )

    return ReactDOM.createPortal(backContent, document.getElementById('backdrop'))
}

export default Backdrop
