import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [setIntervalId, setSetIntervalId] = useState("");

  useEffect(() => {
    let options = {
      method: "GET",
    };
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
      .then(function (response) {
        return response.text();
      })
      .then(function (Data) {
        let parsedData = JSON.parse(Data);
        setQuote(parsedData.content);
      });
    // let Id = setInterval(function () {
    //   setCount((prevCount) => prevCount + 1);
    // }, 1000);
    // setSetIntervalId(Id);

    return () => clearInterval(setIntervalId);
  }, []);

  const onChangeInput = (e) => {
    setInputVal(e.target.value);
  };

  const onSubmitClick = () => {
    clearInterval(setIntervalId);
  };

  const onResetClick = () => {};

  return (
    <div id="bgContainer" className="bg-container">
      <div id="spinner" className="d-none">
        <div className="d-flex felx-row justify-content-center">
          <div className="spinner-border mt-5" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      </div>
      <div id="container">
        <h1 className="heading1 mt-5 mb-5">Speed Typing Test</h1>
        <p className="para mt-5 mb-5">On your fingers lets set Go!</p>
        <div id="speedTypingTest">
          <div className="d-flex flex-row justify-content-center mb-2">
            <img
              alt="img"
              src="https://assets.ccbp.in/frontend/dynamic-webapps/clock-img.png"
              className="image"
            />
            <p className="seconds" id="timer">
              <span id="span" className="span">
                {count}
              </span>
              seconds
            </p>
          </div>
          <div className="quote-container">
            <p id="quoteDisplay" className="quoteDisplay">
              {quote}
            </p>
            <textarea
              placeholder="Type here!!"
              className="text form-control"
              id="quoteInput"
              rows="4"
              cols="27"
              onChange={onChangeInput}
            ></textarea>
          </div>
        </div>
        <p id="result" className="result mt-3 mb-2 ml-2"></p>
        <div className="d-flex flex-row justify-content-center mt-4">
          <button
            id="submitBtn"
            className="btn button1 ml-2 mr-4"
            onClick={onSubmitClick}
          >
            Submit
          </button>
          <button id="resetBtn" className="btn button2" onClick={onResetClick}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;