import { Button } from "../../Button";
import { CustomSelect, LineBreak, MemoryContainer, MemoryMain } from "./MemoryGamePageStyle";

export const MemoryGamePage = ({
  username,
  updatePagePath,
  setNumberCards,
}) => {
  const startGameOnClick = () => {
    updatePagePath(3);
  };

  const handleSelectChange = (e) => {
    const selectValue = parseInt(e.target.value);
    setNumberCards(selectValue);
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
            <option disabled>Quantidade</option>
            {[...Array(16).keys()].map((num) => (
              <option key={num * 2 + 2} value={num * 2 + 2}>
                {num * 2 + 2}
              </option>
            ))}
          </CustomSelect>
          <Button onClick={startGameOnClick}>Iniciar</Button>
        </div>
      </MemoryContainer>
    </MemoryMain>
  );
};
