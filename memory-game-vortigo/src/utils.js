import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SwitchPages = ({ updatePagePath }) => {
  // Troca de paginas!
  const navigate = useNavigate();

  useEffect(() => {
    switch (updatePagePath) {
      case 1:
        navigate("/userpage");
        break;
      case 2:
        navigate("/memorygame");
        break;
      case 3:
        navigate("/memorygameplay");
        break;
      default:
        break;
    }
  }, [updatePagePath]);
};

export const TimerLeft = () => {
  const initialTime = 600;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
