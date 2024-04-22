import { Button } from "../../Button";
import { UserPageMain, PageForm } from "./UserPageStyles";
import { useUserPage } from "./useUserPage";

export const UserPage = ({ updatePagePath, setUsername, gamesCount }) => {
    const { newUsername, handleUsernameChange, handleUsernameSubmit } = useUserPage({ updatePagePath, setUsername });

    return (
        <UserPageMain>
            <PageForm onSubmit={handleUsernameSubmit}>
                {gamesCount !== 1 ? <h1>Vamos jogar novamente?</h1> : <h1>Bem-Vindo Jogador!</h1>}
                <img src="../../../../public/assets/images/pokemon-start-img.png" />
                <div>
                    <input
                        required
                        type="text"
                        value={newUsername}
                        onChange={handleUsernameChange}
                        placeholder="Digite Seu Apelido..."
                    />
                    <Button type="submit">Começar</Button>
                </div>
            </PageForm>
        </UserPageMain>
    );
};
