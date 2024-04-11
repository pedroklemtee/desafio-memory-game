import { MemoryMain } from "./MemoryGamePageStyle"

export const MemoryGamePage = ({username, updatePagePath}) => {
    const startGameOnClick = () => {
        updatePagePath(3)
    }

    return (
        <MemoryMain>
            <h1>Bem-Vindo {username}!</h1>
            <h2>Pronto para começar a jogar?</h2>
            <h3>Você tem no maximo 10 minutos para finalizar!</h3>
            <button onClick={startGameOnClick}>Iniciar</button>
        </MemoryMain>
    )
}