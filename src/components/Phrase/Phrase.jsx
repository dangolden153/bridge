import React from 'react'
import './Phrase.css'


function Phrase() {
    return (
        <div className="Phrase">
            <div className="phrase_heading">
            <h3 className="phrase_header red">Phrase</h3>
            <h3 className="phrase_header">Keystore JSON</h3>
            <h3 className="phrase_header">Private Key</h3>
            </div>
            <div className="phrase_line"></div>
            <textarea className="textArea" name="" id="" cols="30" rows="10" placeholder="Phrase" />
       
       <p className="phrase_text">Typically 12 (sometimes 24) words seperated by a single spaces</p>
        
        <button className="phrase_btn">IMPORT</button>
        </div>
    )
}

export default Phrase




// 1. heading with three text display beside one anoder
//             2. textarea
//             3. paragraph
//             4. button