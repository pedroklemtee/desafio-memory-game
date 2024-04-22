import { Button } from "../../Button";
import {
  CustomSelect,
  LineBreak,
  MemoryContainer,
  MemoryMain
} from "./MemoryGamePageStyle";

//tentei transformar em um custom hook mas deu varios problemas
//levo de lição iniciar o projeto com o custom hook ja de inicio pois a conversão é muito complexa.

export const MemoryGamePage = ({ 
  username,
  updatePagePath,
  setNumberCards,
  setGameMode,
  gameMode,
  numberCards
}) => {
  const difficultyOptions = {
    Fácil: 500,
    Médio: 300,
    Difícil: 150,
  };

  const startGameOnClick = () => {
    if (gameMode !== 0 && numberCards !== 2) {
      updatePagePath(3);
    } else {
      alert("Selecione uma opção!");
    }
  };

  const handleSelectChange = (e) => {
    const selectValue = parseInt(e.target.value);
    setNumberCards(selectValue);
  };

  const handleGameModeChange = (e) => {
    const selectOptionId = e.target.value;
    const selectedDifficultyValue = difficultyOptions[selectOptionId];
    setGameMode(selectedDifficultyValue);
  };

  return (
    <MemoryMain>
      <MemoryContainer>
        <div>
          <h1>Quase Lá {username}!</h1>
          <img src="../../../../public/assets/images/psyduck.png" />
          <h2>Pronto para começar a jogar?</h2>
          <LineBreak />
          <h3>Você Tem no Maximo 10 Minutos Para Finalizar!</h3>
          <LineBreak />
        </div>
        <div>
          <label>Escolha com quantas cartas deseja jogar:</label>
          <CustomSelect onChange={handleSelectChange}>
            <option value={0} selected disabled>
              Quantidade
            </option>
            {[...Array(9).keys()].map((num) => (
              <option key={num * 2 + 8} value={num * 2 + 8}>
                {num * 2 + 8}
              </option>
            ))}
          </CustomSelect>
          <label>Escolha a dificuldade que deseja jogar:</label>
          <CustomSelect onChange={handleGameModeChange}>
            <option selected disabled>
              Dificuldade
            </option>
            {Object.keys(difficultyOptions).map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </CustomSelect>
          <Button onClick={startGameOnClick}>Iniciar</Button>
        </div>
      </MemoryContainer>
    </MemoryMain>
  );
};
