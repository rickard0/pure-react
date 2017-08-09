import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MailItem({message})
{
	const sender = message.sender;
	const subject = message.subject;
	const date = message.date;
	const text = message.text;
	return (
	<div className="line">
		<div className="icons">&nbsp;
			<span className="checkbox">
				<i className="fa fa-square-o fa-lg"/>
			</span>
			<span className="pin">
				<i className="fa fa-thumb-tack fa-lg" />
			</span>
		</div>
		<div className="text-items">
			<div className="from-subject-line">
				<span className="sender">{sender}</span>
				<span className="subject">{subject}</span>
			</div>
			<div className="message-text">{text}</div>
		</div>
		<div className="date">
		{date}
		</div>
	</div>
	);
}

	var message = { 
		sender: "React Newsletter",
		subject: "React Newsletter - Issue 36",
		date: "Jul 15",
		text: "React Newsletter Issue 36 - July 15th 2016 Read this issue on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme"
	};

	var message2 = { 
		sender: "React Newsletter",
		subject: "React Newsletter - Issue 37",
		date: "Jul 15",
		text: "React Newsletter Issue 36 - July 15th 2016 Read this issue on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme"
	};
ReactDOM.render(<div><MailItem message={message} />
	<MailItem message={message2}/></div>, document.getElementById('root'));
