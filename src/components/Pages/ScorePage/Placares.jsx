import { usePlacares } from "./usePlacares";

export const Placares = ({ points }) => {
    const placares = usePlacares(points);

    return (
        <div>
            {placares.map((placar) => (
                <div className='main-score' key={placar.gameId}>
                    <h1>Jogo {placar.gameId}</h1>
                    <p>Pontuação: {placar.points}</p>
                </div>
            ))}
        </div>
    );
};