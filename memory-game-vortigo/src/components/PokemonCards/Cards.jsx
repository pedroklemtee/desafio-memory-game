import { useEffect, useState } from "react";
import { SingleCard } from "./SingleCard";
import { useNavigate } from "react-router-dom";
import correctSound from '../../../public/assets/sounds/correct.mp3'
import errorSound from '../../../public/assets/sounds/error.mp3'

export const Cards = ({ numberCards, setPoints, setGamesCount, gamesCount }) => {
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [gameFinished, setGameFinished] = useState(false)
  const [cardDisabled, setCardDisabled] = useState(false)

  const navigate = useNavigate();
  const correctAudio = new Audio(correctSound)
  const errorAudio = new Audio(errorSound)

  const sliceCards = (cards, numberCards) => cards.slice(0, numberCards);
  const shuffleCards = (cards) => {
    const slicedCards = sliceCards(cards, numberCards);
    const shuffleArray = [...slicedCards];
    for (let i = shuffleArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
    }
    return shuffleArray;
  };

  const initialMemoryCard = [
    { id: 1, img: "../assets/cards/ampharos.png", found: false },
    { id: 2, img: "../assets/cards/arcanine.png", found: false },
    { id: 3, img: "../assets/cards/pikachu.png", found: false },
    { id: 4, img: "../assets/cards/baxcalibur.png", found: false },
    { id: 5, img: "../assets/cards/bulbasaur.png", found: false },
    { id: 6, img: "../assets/cards/charmander.png", found: false },
    { id: 7, img: "../assets/cards/cyclizar.png", found: false },
    { id: 8, img: "../assets/cards/dondozo.png", found: false },
    { id: 9, img: "../assets/cards/eevee.png", found: false },
    { id: 10, img: "../assets/cards/entei.png", found: false },
    { id: 11, img: "../assets/cards/espathra.png", found: false },
    { id: 12, img: "../assets/cards/flaaffy.png", found: false },
    { id: 13, img: "../assets/cards/fuecoco.png", found: false },
    { id: 14, img: "../assets/cards/growlithe.png", found: false },
    { id: 15, img: "../assets/cards/hawlucha.png", found: false },
    { id: 16, img: "../assets/cards/koraidon.png", found: false },
  ];

  const duplicatedCards = initialMemoryCard.flatMap((card) => [
    { ...card, pos: 1 },
    { ...card, pos: 2 },
  ]);

  const [memoryCards, setMemoryCards] = useState(() =>
  shuffleCards(duplicatedCards)
);

  const restartTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setCardDisabled(false)
  };

  const allFound = () => {
    return initialMemoryCard.slice(0, numberCards).every((card) => card.found);
  };

  useEffect(() => {
    if (allFound()){
      setGameFinished(true)
    }
  }, [memoryCards])

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setCardDisabled(true);
      if (choiceOne.id === choiceTwo.id) {
        correctAudio.play()
        setPoints((prevPoints) => {
          let newPoints;
          if (Array.isArray(prevPoints)) {
            newPoints = [
              ...prevPoints,
              {
                gameId: gamesCount,
                points:
                  prevPoints.length > 0
                    ? prevPoints[prevPoints.length - 1].points + 15
                    : 15,
              },
            ];
          } else {
            newPoints = [
              {
                gameId: gamesCount,
                points: 15,
              },
            ];
          }
          return newPoints;
        });
        setMemoryCards((prevCards) => {
          const updatedCards = prevCards.map((c) => {
            if (c.id === choiceOne.id || c.id === choiceTwo.id) {
              return {
                ...c,
                found: true,
              };
            } else {
              return c;
            }
          });
          if (updatedCards.every((c) => c.found)) {
            setGamesCount((prevGames) => prevGames + 0.5);
            setGameFinished(true);
          }
          return updatedCards;
        });
      } else {
        errorAudio.play()
        setPoints((prevPoints) => {
          let newPoints;
          if(Array.isArray(prevPoints)){
            newPoints = [...prevPoints, {
              gameId: gamesCount,
              points: 
              prevPoints.length > 0 ? prevPoints[prevPoints.length - 1].points - 10 : 0,
            }];
          } else {
            newPoints = [{
              gameId: gamesCount,
              points: 15
            }];
          }
          return newPoints;
        })
      }
      setTimeout(() => {
        restartTurn();
      }, 1000);
    }
  }, [choiceOne, choiceTwo]);

  const handleChoice = (card) => {
    if (!cardDisabled) { 
      if (!choiceOne) {
        setChoiceOne(card);
      } else {
        setChoiceTwo(card);
        setCardDisabled(true); 
      }
    }
  };
  
  useEffect(() => {
    if (gameFinished) {
      setTimeout(() => {
        navigate('/scorepage');
      }, 1000); 
    }
  }, [gameFinished, navigate]);

  return (
    <>
      {memoryCards.map((card, index) => (
        <SingleCard 
        key={index} 
        card={card} 
        handleChoice={handleChoice}
        flipped={card === choiceOne || card === choiceTwo || card.found}
        cardDisabled={cardDisabled}
         />
      ))}
    </>
  );
};
