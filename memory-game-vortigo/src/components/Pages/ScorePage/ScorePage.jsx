import { useNavigate } from "react-router-dom";
import { Button } from "../../Button";
import { Placares } from "./Placares";
import "./index.css";
import applause from '../../../../public/assets/sounds/applause.mp3'

export const ScorePage = ({ username, points, gamesCount, setPoints, setNumberCards, setGameMode }) => {
  const navigate = useNavigate();
  const applauseSound = new Audio(applause)

  applauseSound.play()

  const restartGameClick = () => {
    const newGameId = gamesCount;
    const newPoints = { gameId: newGameId, points: 0 };
    const updatedPoints = [...points, newPoints];
    setPoints(updatedPoints);
    setGameMode(0)
    setNumberCards(2)
    navigate("/userpage");
  };

  return (
    <div className="main">
      <div className="container">
        <h1>Suas potuações, {username}!</h1>
        <div className="points-container">
          <Placares points={points} username={username} />
        </div>
        <Button onClick={restartGameClick}>reiniciar</Button>
      </div>
    </div>
  );
};