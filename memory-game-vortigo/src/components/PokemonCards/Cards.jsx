import { useState } from "react";
import { SingleCard } from "./SingleCard";

export const Cards = ({ numberCards }) => {
  const shuffleCards = (cards) => {
    const sliceCards = cards.slice(0, numberCards);
    const shuffleArray = [...sliceCards];
    for (let i = shuffleArray.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
    }
    return shuffleArray;
  };

  const initialMemoryCard = [
    { id: 1, img: "../assets/cards/ampharos.png", stat: false },
    { id: 2, img: "../assets/cards/arcanine.png", stat: false },
    { id: 3, img: "../assets/cards/pikachu.png", stat: false },
    { id: 4, img: "../assets/cards/baxcalibur.png", stat: false },
    { id: 5, img: "../assets/cards/bulbasaur.png", stat: false },
    { id: 6, img: "../assets/cards/charmander.png", stat: false },
    { id: 7, img: "../assets/cards/cyclizar.png", stat: false },
    { id: 8, img: "../assets/cards/dondozo.png", stat: false },
    { id: 9, img: "../assets/cards/eevee.png", stat: false },
    { id: 10, img: "../assets/cards/entei.png", stat: false },
    { id: 11, img: "../assets/cards/espathra.png", stat: false },
    { id: 12, img: "../assets/cards/flaaffy.png", stat: false },
    { id: 13, img: "../assets/cards/fuecoco.png", stat: false },
    { id: 14, img: "../assets/cards/growlithe.png", stat: false },
    { id: 15, img: "../assets/cards/hawlucha.png", stat: false },
    { id: 16, img: "../assets/cards/koraidon.png", stat: false },
  ];

  const duplicatedCards = initialMemoryCard.flatMap((card) => [
    { ...card, pos: 1 },
    { ...card, pos: 2 },
  ]);

  const [memoryCards, setMemoryCards] = useState(() => shuffleCards(duplicatedCards));

  console.log(memoryCards)

  return (
    <>
      {memoryCards.map((card, index) => (
        <SingleCard key={index} card={card} setMemoryCards={setMemoryCards} />
      ))}
    </>
  );
};
