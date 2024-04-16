import { TimerLeft } from "../../../utils";
import { Cards } from "../../PokemonCards/Cards";
import { CardsStyled, MemoryGameplayStyle } from "./MemoryGameplayStyle";

export const MemoryGameplay = ({ numberCards }) => {
    const timeLeft = TimerLeft();

  return (
    <MemoryGameplayStyle>
        <h1>Tempo Restante: {timeLeft}</h1>
        <CardsStyled>
          <Cards numberCards={numberCards} />
      </CardsStyled>
    </MemoryGameplayStyle>
  );
};
