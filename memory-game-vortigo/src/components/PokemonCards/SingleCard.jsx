import "./index.css";

export const SingleCard = ({ card, handleChoice, flipped, cardDisabled }) => {
  const setChoiceClick = () => {
    if (!cardDisabled) {
      handleChoice(card);
    }
  };

  const cardClasses = `${flipped ? "flipped" : ""} ${card.found ? "found" : ""}`;
  
  return (
    <div className="card">
      <div className={cardClasses}>
        <img className={`front-image ${cardDisabled ? 'disabled' : ''}`} src={card.img} alt="Carta Pokemon" />
        <img className="back-image" onClick={setChoiceClick} src="../assets/cards/back.png" />
      </div>
    </div>
  );
};
