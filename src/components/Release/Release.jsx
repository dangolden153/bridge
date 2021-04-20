import React, { useState } from "react";
import btc_logo from "../../picture/BTC_Logo.svg";
import eth_logo from "../../picture/Eth.svg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import "./release.css";

function Release() {
  const [text, setText] = useState("");
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);

  const toggleBorder = () => setState(!state);
  const toggleBorder1 = () => setState1(!state1);

  console.log(text)

  return (
    <div className="minting_form">
      <input value={text} onChange={e => setText(e.target.value)} type="text" placeholder="0 renBTC" className="input" />
      <p className="mint_text">= $0.00</p>

      <div className={state1 ? "borderBlue" : "box"} onClick={toggleBorder1}>
        <p className="box_p">Chain</p>

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

      <div className={state ? "borderBlue" : "box"} onClick={toggleBorder}>
        <p className="box_p">Asset</p>

        <div className="img_text">
          <img src={btc_logo} alt="" className="coin_img" />
          <p className="box_p box__p">renBTC</p>
        </div>
        <div className="img">
          {state ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>
      </div>


      <div className={state ? "borderBlue" : "box"} onClick={toggleBorder}>
        <div className="input_text">
        <p className="release_p">Release to</p>
        <input type="text" placeholder="Enter a Destination Bitcoin Address" className="release_input"/>
        </div>
        
      </div>

      <div className="mint_line"></div>

      <button className="mint_btn">Connect Wallet</button>
    </div>
  );
}

export default Release;
