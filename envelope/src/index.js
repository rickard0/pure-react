import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Envelope({fromAddr, toAddr}) {
	return (
		<div className="envelope">
			<div className="stamp">
				<span className="stamp-text">STAMP</span>
			</div>
			<Address details={fromAddr} />
			<div className="to-address">
				<Address details={toAddr} />
			</div>
		</div>
	);
}

function Address({details}) {
	const {line1, line2, city, state, zip} = details; 

	return ( 
		<span className="address">
			<div>{line1}</div>
			<div>{line2}</div>
			<div>{city},&nbsp;{state}&nbsp;{zip}</div>
		</span>
	);
}

var mailTo = { line1:  "Matt Thomas", 
		line2: "123 Earl Street", 
		city:  "Underwater", 
		state: "CA", 
		zip:   "90210" }; 

var mailFrom = { line1: "Brian Rickard", 
	line2: "5601 N Lindero Canyon Rd Ste. 100", 
	city:  "Westlake Village", 
	state: "CA", 
	zip:   "91362" }; 

ReactDOM.render(<Envelope fromAddr={mailFrom} toAddr={mailTo} />, document.getElementById('root'));
