import './App.css'
import {useState} from "react";

function App() {
  const [revealedCards, setRevealedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const cards = [
    {id: 1, symbol: "🍕"},
    {id:2, symbol: "🍓"},
    {id:3, symbol: "🍟"},
    {id:4, symbol: "🍋"},
    {id:5, symbol: "🍕"},
    {id:6, symbol: "🍟"},
    {id:7, symbol: "🍋"},
    {id:8, symbol: "🍓"}
  ];
  function handleCardClick(cardId){
    if(revealedCards.length >= 2 || revealedCards.includes(cardId)){
      return;
    }
    if(revealedCards.length === 1){
      const firstCard = cards.find(c => c.id === revealedCards[0])
      const secondCard = cards.find(c => c.id === cardId);
       if(firstCard.symbol === secondCard.symbol){
        setMatchedCards([...matchedCards, firstCard.id, secondCard.id]);
        setRevealedCards([]);
        return;
       }
    else{
        setTimeout(()=>{
          setRevealedCards([]);}, 1000);
      
       }
    }
    setRevealedCards([...revealedCards, cardId]);

  }
  return (
    <>
    <main>
      <h1>Memory Match</h1>
      <ul>
        {cards.map((card) => (
         <li key={card.id}>
          <button type="button" onClick={()=> handleCardClick(card.id)}>
            {revealedCards.includes(card.id) || matchedCards.includes(card.id) ? card.symbol : "?" }
          </button></li>
          ))}
      </ul>
    </main>
    </>
  )
}

export default App
