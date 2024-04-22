import { Cards } from "../../PokemonCards/Cards";
import TimerLeft from "../../TimerLeft/TimerLeft";
import { CardsStyled, MemoryGameplayStyle } from "./MemoryGameplayStyle";
import { useMemoryGameplay } from "./useMemoryGameplay";

export const MemoryGameplay = ({ numberCards, gameMode, points, setPoints, setGamesCount, gamesCount }) => {
    const timeLeft = useMemoryGameplay(gameMode);

    return (
        <MemoryGameplayStyle>
            <h1>{<TimerLeft timeLeft={timeLeft} />}</h1>
            <h2>Pontuação: {points.length > 0 && points[points.length - 1].points}</h2>
            <CardsStyled>
                <Cards 
                    setGamesCount={setGamesCount}
                    points={points}
                    setPoints={setPoints}
                    numberCards={numberCards}
                    gamesCount={gamesCount}
                />
            </CardsStyled>
        </MemoryGameplayStyle>
    );
};
