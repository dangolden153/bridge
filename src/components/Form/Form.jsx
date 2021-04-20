import React from 'react'
import Minting from '../Minting/Minting'
import Release from '../Release/Release' 

import './Form.css'

function Form() {
    return (
        <div className="form_container">
            <div className="slider">
            <div className="slider_p">Mint</div>
            <div className="slider_p slider__p">Release</div>  
             </div>

             <div className="mint_container">
                 <Release />
             </div>
        </div>
    )
}

export default Form
