import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() { 
	return (<div className='book'>
		<div className='title'>
			The Title
		</div>
		<div className='author'>
			The Author
		</div>
		<ul className='stats'>
			<li className='rating'>
				5 stars
			</li>
			<li className='isbn'>
				12-345678-910
			</li>
		</ul>
	</div>);

}


function Greeting() { 
	var username = "root";
	//var username = undefined;
	//var username = null;
	//var username = false; 
	return (<span> {username ? 'Hello ' + username : 'Not logged in'} </span>);
}


ReactDOM.render(
	<Greeting/>,
	document.getElementById('root')
);
