import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [selected, setSelected] = useState(null);
  const cardsRef = useRef(null);

  const handleCardClick = (title) => {
    setSelected(`You clicked on "${title}"`);
  };

  const scrollToCards = () => {
    cardsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page">
      <header className="hero">
        <h1>🌟 Welcome to Prakriti's Landing Page</h1>
        <p>Your journey into React begins here!</p>
        <button className="hero-btn" onClick={scrollToCards}>Explore Now</button>
      </header>

      <section className="cards" ref={cardsRef}>
        <div className="card" onClick={() => handleCardClick('Learn')}>
          <img src="./src/img/idea.png" alt="Learn" />
          <h2>Learn</h2>
          <p>Start your journey with easy and interactive tutorials.</p>
        </div>

        <div className="card" onClick={() => handleCardClick('Build')}>
          <img src="./src/img/contribution.png" alt="Build" />
          <h2>Build</h2>
          <p>Practice by building awesome real-world projects.</p>
        </div>

        <div className="card" onClick={() => handleCardClick('Share')}>
          <img src="." alt="Share" />
          <h2>Share</h2>
          <p>Post your work and connect with the developer community.</p>
        </div>
      </section>

      {selected && <p className="message">{selected}</p>}
    </div>
  );
}

export default App;
