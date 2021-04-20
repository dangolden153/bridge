import React, { useState } from "react";
import "./Minting.css";
import btc_logo from "../../picture/BTC_Logo.svg";
import eth_logo from "../../picture/Eth.svg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import WalletConnect from "../WalletConnect/WalletConnect";

function Minting() {
  const [overlay, setOverlay] = useState(false);
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);

  const toggleBorder = () => setState(!state);
  const toggleBorder1 = () => setState1(!state1);

  const toggleOverlay =()=> setOverlay(true)
  const toggleOffOverlay =()=> setOverlay(false)

  return (
    <React.Fragment>
      {overlay && <WalletConnect close={toggleOffOverlay} />}

      <div className="minting_form">
        <p className="mint_text">
          Select an asset and destination chain, to begin or resume a mint.
        </p>

        <div className={state ? "borderBlue" : "box"} onClick={toggleBorder}>
          <p className="box_p">send</p>

          <div className="img_text">
            <img src={btc_logo} alt="" className="coin_img" />
            <p className="box_p box__p">BTC</p>
          </div>
          <div className="img">
            {state ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </div>
        </div>

        <div className={state1 ? "borderBlue" : "box"} onClick={toggleBorder1}>
          <p className="box_p">send</p>

          <div className="img_text">
            <span className="eth_svg_cont">
              <img src={eth_logo} alt="" className="eth_svg" />
            </span>
            <p className="box_p box__p">Ethereum</p>
          </div>

          <div className="img">
            {state1 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </div>
        </div>

        <div className="mint_line"></div>

        <button className="mint_btn" onClick={toggleOverlay}>Connect Wallet</button>
      </div>
    </React.Fragment>
  );
}

export default Minting;
