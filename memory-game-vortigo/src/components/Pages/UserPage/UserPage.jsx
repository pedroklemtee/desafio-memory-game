import { UserPageMain } from "./UserPageStyles"


export const UserPage = ({updatePagePath, setUsername}) => {
    
    const usernameOnChange = (e) => {
        setUsername(e.target.value)
    }
    const usernameSubmit = (e) => {
        e.preventDefault()
        updatePagePath(2)
    }

    return (
        <UserPageMain>
            <form onSubmit={usernameSubmit}>
            <input required type='text' onChange={usernameOnChange} placeholder="Digite Seu Apelido..."/>
            <button type="submit">Começar</button>
            </form>
        </UserPageMain>
    )
}