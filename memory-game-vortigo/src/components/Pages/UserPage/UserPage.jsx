import { Button } from "../../Button";
import { UserPageMain, PageForm } from "./UserPageStyles";

export const UserPage = ({ updatePagePath, setUsername }) => {
  const usernameOnChange = (e) => {
    setUsername(e.target.value);
  };
  const usernameSubmit = (e) => {
    e.preventDefault();
    updatePagePath(2);
  };

  return (
    <UserPageMain>
      <PageForm onSubmit={usernameSubmit}>
        <h1>Bem-Vindo Jogador!</h1>
        <img src="../../../../public/assets/images/pokemon-start-img.png" />
        <div>
          <input
            required
            type="text"
            onChange={usernameOnChange}
            placeholder="Digite Seu Apelido..."
          />
          <Button type="submit">Começar</Button>
        </div>
      </PageForm>
    </UserPageMain>
  );
};
