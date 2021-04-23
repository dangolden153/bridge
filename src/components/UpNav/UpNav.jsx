import React,{useState} from 'react'
import HomeIcon from '@material-ui/icons/Home';import './UpNav.css'
import ListIcon from '@material-ui/icons/List';
import WalletConnect from "../WalletConnect/WalletConnect";
import {Link} from 'react-router-dom'

function UpNav() {


   const [state, setState] = useState(false)


   const openState =()=> setState(true)
   const closeState =()=> setState(false
    
    )
    return (
        <React.Fragment>

     {state && <WalletConnect onCancel={closeState} />}

        <div className="upav_container">

            <div className="left_nav">
            <div className="logo_container">

            <h2 className="logo_text">RenBridge</h2>
            <div className="logo_svg_container">
            <h4 className="logo_svg">BETA</h4>
            </div>

            <div className="home_svg">
            <Link className="link" className="logo_Span">
            <HomeIcon style={{color: "black"}} />
            </Link>
            </div>

            </div>    
            
            </div>


        <div className="right_upnav">
        <div className="home_svg svg">
        <span className="logo_Span">
        <ListIcon />
        </span>
        
        </div>
        <div className="right_text">
            <div className="right_text_ball"></div>
            <p className="right_text_p" onClick={openState}>Connect a Wallet</p>
        </div>
        </div>
        </div>

        </React.Fragment>
    )
}

export default UpNav
