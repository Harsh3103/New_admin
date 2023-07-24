import React, { useState } from "react";
import './Cource.css'

const Cource = () => {
  const [selectedOption, setSelectedOption] = useState("FSD");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Sample card data. Replace with actual card data from an API in a real app.
  const fsdCards = [
    { id: 1, title: "FSD Card 1", content: "This is the content of FSD Card 1" },
    { id: 2, title: "FSD Card 2", content: "This is the content of FSD Card 2" },

  ];

  const dsCards = [
    { id: 1, title: "DS Card 1", content: "This is the content of DS Card 1" },
    { id: 2, title: "DS Card 2", content: "This is the content of DS Card 2" },
  ];

  const dynamicCards = selectedOption === "FSD" ? fsdCards : dsCards;

  return (
    <div className="container">
      <div className="search-bar" >
        <select  value={selectedOption} onChange={handleOptionChange}>
          <option value="FSD">FSD</option>
          <option value="DS">DS</option>
        </select>
      </div>

      <div className="card-container">
        {dynamicCards.map((card) => (
          <div key={card.id} className="card">
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cource;
