import "./index.css";

export const SingleCard = ({ card, setMemoryCards }) => {
  const setBooleanClick = () => {
    setMemoryCards((prevCards) =>
      prevCards.map((prevCard) =>
        prevCard.id === card.id && prevCard.pos === card.pos
          ? { ...prevCard, stat: true }
          : prevCard
      )
    );
  };

  return (
    <div className="card">
      {card.stat === false ? (
        <img src={card.img} onClick={setBooleanClick} alt="Carta Pokemon" />
      ) : (
        <img src="../assets/cards/back.png" />
      )}
    </div>
  );
};
