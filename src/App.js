import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import img from './images/motivation.gif'

const App = () => {
  const [advice, setAdvice] = useState();
  const [loading, setLoading] = useState(false);

  const fetchAdvice = () => {
    setLoading(true); // Show loader
    axios
      .get("https://api.adviceslip.com/advice")
      .then((data) => {
        setTimeout(() => {
          setAdvice(data.data.slip.advice);
          setLoading(false); // Hide loader after 5 seconds
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Hide loader on error
      });
  };

  const handleButtonClick = (e) => {
e.preventDefault()
    fetchAdvice();
  };

  return (
    <React.Fragment className='app'>
      <div className="card">
      <img src={img} alt="img" className="img1"/>
        {loading ? (
          <div className="loader"></div>
        ) : advice ? (
          <div className="heading">{advice}</div>
        ) : null}
        <button className="button-75" role="button" onClick={handleButtonClick}>
        <span class="text">Give me Advice</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default App;
