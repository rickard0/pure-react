import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const CardList = ({cards}) => (
  <div className="card-container">
    <div className="card-header">
	   {cards.listName}
	   <span className="menu lt-grey">...</span>
    </div>
    {cards.cards.map(c => <Card card={c} />)}
    <div className="add-card lt-grey">Add a card...</div>
  </div>
);

function Card({card}) {
  return (
    <div className="card">
      {card.Name}
    </div>
  );
}

const cardList = {
  listName: 'Phone Features',
  cards: [
    {Name: 'Subwoofer'},
    {Name: 'Non-porous, washable'},
    {Name: 'Wings'},
    {Name: 'Beveled Bezel'},
    {Name: 'Bezeled Bevel'},
    {Name: 'Seedless'},
  ],
};

ReactDOM.render(<CardList cards={cardList} />, document.getElementById('root'));
