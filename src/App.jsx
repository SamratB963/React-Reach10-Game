import React, { useEffect, useState } from 'react';

function App() {
  let [pnum, setPnum] = useState(1)
  let [counter, setCounter] = useState(0)
  let [status, setStatus] = useState("Still To Be Decided")
  let [btnStyle1, setBtnStyle1] = useState(true)
  let [btnStyle2, setBtnStyle2] = useState(true)



    function btn1() {
      // if (counter >= 9) {
      //   setBtnStyle2(false)
      // }
      // else if (counter == 10) {
      //   setBtnStyle1(false)
      // }
      setCounter(counter + 1)
      if (pnum == 1) {
        setPnum(2)
      }
      else {
        setPnum(1)
      }
        if (counter == 10) {
          
            setStatus("Player 1")
          
        }
    
      
    }
    function btn2() {
      // if (counter >= 9) {
      //   setBtnStyle2(false)
      // }
      // else if (counter == 10) {
      //   setBtnStyle1(false)
      // }
      setCounter(counter + 2)
      if (pnum == 1) {
        setPnum(2)
      }
      else {
        setPnum(1)
      }
      if (counter == 10) {
          setStatus("Player 2")
      }
    }

    



  function reset() {
    setCounter(0)
    setPnum("Player 1")
    setStatus("Still To Be Decided")
    setBtnStyle1(true)
    setBtnStyle2(true)
  }


  useEffect(() => {
    if (counter == 9) {
      setBtnStyle2(false)
      
    }
    else if (counter == 10) {
      setBtnStyle1(false)
      setStatus("Player 2")
    }
  })




  return (
    <div className="App">

      {/* Display Player Turn here */}
      <span data-testid="turn-container">{`Its Your Turn: Player ${pnum}`}</span>


      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button data-testid="add-one-btn" disabled={!btnStyle1} onClick={btn1} >+1</button>
        <button data-testid="add-two-btn" disabled={!btnStyle2} onClick={btn2} >+2</button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{counter}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">{`Winner:${status}`}</span>
      <br />

      {/* Reset the Game with this button */}
      <button data-testid="reset-btn" onClick={reset}>Reset Game</button>
    </div>
  );
}

export default App;
