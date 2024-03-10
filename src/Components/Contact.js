import React, {useState} from "react";

const Contact = () => {
  const [email, setEmail] = useState('');
  
  function handleClick(){
    setEmail('')
    // console.log(email);
  }
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <button className="secondary-button" onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
