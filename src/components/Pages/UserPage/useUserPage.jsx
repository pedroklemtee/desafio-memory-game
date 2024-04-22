import { useState } from "react";

export const useUserPage = ({ updatePagePath, setUsername }) => {
    const [newUsername, setNewUsername] = useState('');

    const handleUsernameChange = (e) => {
        const newUsername = e.target.value; 
        setNewUsername(newUsername);
        setUsername(newUsername);
    };

    const handleUsernameSubmit = (e) => {
        e.preventDefault();
        updatePagePath(2);
    };

    return {
        newUsername,
        handleUsernameChange,
        handleUsernameSubmit
    };
};
