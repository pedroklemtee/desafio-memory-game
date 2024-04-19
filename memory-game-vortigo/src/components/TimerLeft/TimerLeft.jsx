import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TimerLeft = ({ timeLeft }) => {
  const navigate = useNavigate();
  const [timerLeft, setTimerLeft] = useState(timeLeft);

  useEffect(() => {
    setTimerLeft(timeLeft); 

    const intervalId = setInterval(() => {
      setTimerLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          navigate("/scorepage");
          clearInterval(intervalId); 
          return prevTimeLeft; 
        } else {
          return prevTimeLeft - 1; 
        }
      });
    }, 1000);

    return () => clearInterval(intervalId); 
  }, [timeLeft, navigate]); 

  const minutes = Math.floor(timerLeft / 60);
  const seconds = timerLeft % 60;

  return (
    <div>
      <h1>
        Tempo Restante:{" "}
        {`${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
      </h1>
    </div>
  );
};

export default TimerLeft;