import { useEffect, useState } from "react";

export const useMemoryGameplay = (gameMode) => {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        switch (gameMode) {
            case 150:
                setTimeLeft(150);
                break;
            case 300:
                setTimeLeft(300);
                break;
            case 500:
                setTimeLeft(500);
                break;
            default:
                break;
        }
    }, [gameMode]);

    return timeLeft;
};