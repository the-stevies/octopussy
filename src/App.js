import { useState, useEffect } from 'react'
import './styles/App.css';
import background from "./img/filz.jpg";
import SingleCard from './components/SingleCard';


const $ = q => document.querySelector(q)
const ipath = process.env.PUBLIC_URL

const cardImages = [
  { "src": '/img/fischli_06.jpg', matched: false },
  { "src": "/img/fischli_05.jpg", matched: false },
  { "src": "/img/fischli_04.jpg", matched: false },
  { "src": "/img/fischli_01.jpg", matched: false },
  { "src": "/img/fischli_02.jpg", matched: false },
  { "src": "/img/fischli_03.jpg", matched: false }
]



function App() {
  const [cards, setCards] = useState([])

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
    setCards(shuffledCards)
  }



  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
      {cards.map(card => (
        <SingleCard
          key={card.id}
          card={card}
        />
      ))}
      </div>


    </div>
  );
}

export default App;
