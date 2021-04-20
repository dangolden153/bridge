import React,{useState} from 'react'
import Minting from '../Minting/Minting'
import Release from '../Release/Release' 

import './Form.css'

function Form() {
    const [state, setState] = useState(true)

    const openMint =()=> setState(true)
    const openReleasing =()=> setState(false)

    return (
        <div className="form_container">
          
            <div className="slider">
            <div className="slider_p" onClick={openMint}>Mint</div>
            <div className="slider_p slider__p" onClick={openReleasing}>Release</div>  
             </div>

             <div className="mint_container">
             {state ? <Minting /> :  <Release />}
             </div>
        </div>
    )
}

export default Form
// 