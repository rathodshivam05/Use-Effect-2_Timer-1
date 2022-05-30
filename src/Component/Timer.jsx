import React, { useEffect, useState } from "react";
const Timer = (props) => {
  
  const [timer, setimer] = useState(props.startTime);
  
  let stops = 0;
  let id;

  useEffect(() => {
    id = setInterval(() => {
      if (timer >= props.endTimes) {
        clearInterval(id);
      } else {
        setimer((r) => r + 1);
      }
    }, 500);

    return () => {
      clearInterval(id);
    };
  }, [timer]);

  const pause = () => {
    stops = timer;
    clearInterval(id);
  };

  const reset = () => {
    clearInterval(id);
    setimer(props.startTime);
  };

  return (
    <div className="main_Div">
      <h2>Timer : {timer}</h2>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Timer;
