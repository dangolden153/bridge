import React from "react";

import "./Mint_history.css";

function Mint_history() {
  return (
    <div className="Mint_history">

      <div className="history_nav">
        <div className="history_p">Viewing mint history for</div>
   
    <div className="mint_history_box">
          <p className="box_p">send</p>

          <div className="img_text">
            <img src="" alt="" className="coin_img" />
            <p className="box_p">BTC</p>
          </div>

          <div className="img">down arrow</div>
        </div>

        <div className="history_p">to</div>

        <div className="mint_history_box">
          <p className="box_p">send</p>

          <div className="img_text">
            <img src="" alt="" className="coin_img" />
            <p className="box_p">BTC</p>
          </div>

          <div className="img">down arrow</div>
        </div>
      </div>

      <div className="line"></div>

      <div className="history_p">Please connect an Etherum compactible Wallet to view transactions</div>

        <div className="history_img"></div>

        <button className="history_btn">Connect Wallet</button>
    </div>
  );
}

export default Mint_history;
