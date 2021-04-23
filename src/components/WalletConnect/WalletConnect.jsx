import React,{useState} from "react";
import ClearIcon from '@material-ui/icons/Clear';import mew from '../../picture/mew.png'
import metamask from '../../picture/metamask.png'
import Backdrop from '../backdrop/Backdrop'
import Phrase from '../Phrase/Phrase'
import {Link} from 'react-router-dom'
import "./WalletConnect.css";




const WalletConnect = props => {
  
  return (

    <React.Fragment>
      <Backdrop />
   
      <div className="WalletConnect_container">
    <div className="WalletConnect">
      
      <div className="slider_p">Connect a Wallet</div>
     <ClearIcon onClick={props.onCancel} style={{position: "absolute", top:"22px", right: "25px", cursor: "pointer"}} />
     <div className="mint_line mint_margin"></div>
      <div className="slider_p connect_P">Ethereum</div>

      <div className="box padding">
      <div className="wallet_img_text">
       <Link to="phrase"> <p className="slider_p margin" >MetaMask Wallet</p></Link>

        
          <img src={metamask} alt="metamask svg" className="wallet_img" />
        </div>
       
      </div>


      <div className="box padding">
      <div className="wallet_img_text">
      <Link to="phrase"> <p className="slider_p margin" >MEW Wallet</p></Link>

        
          <img src={mew} alt="mew" className="wallet_img" />
        </div>
      </div> 
    </div>
    </div>
    </React.Fragment>
  );
}

export default WalletConnect;
