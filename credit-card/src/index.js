import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CreditCard({card}) { 

	const name = card.name;
	const cardNumber = card.cardNumber;
	const expDate = card.expDate;
	const bankName = card.bankName;
	var firstFour = cardNumber.substring(0,4);

	return ( 
		<div className="card">
			<div className="bank-name">{bankName}</div>
			<div className="card-num">{cardNumber}</div>
			<div className="card-first-four">{firstFour}</div>
			<div className="date-container">
			  <div className="valid-thru">
									VALID<br/>THRU
				  </div>
				    <div className="date">
					    {expDate}
						</div>
				</div>
			<div className="cardholder-name">{name}</div>	
			</div> 
	);
}


var cardInfo = {
	name: "CARDHOLDER NAME",
	cardNumber: "1234 5678 8765 4321",
	expDate: "08/19",
	bankName: "Big Bank, Inc."
}


ReactDOM.render(<CreditCard card={cardInfo}/>, document.getElementById('root'));
