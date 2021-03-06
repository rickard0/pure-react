import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

function getRetweetCount(count) {
	if (count > 0) {
		return ( 
			<span className="retweet-count">
				{count}
			</span>
		);
	} else { 
		return null;
	}
}

// "Arrow Functions", but still components
const Time = ({time}) => { // If this isn't destructured, we get an object instead of a string. odd.
	const timeString = moment(time, "YYYY-MM-DD HH:mm:ss").fromNow();
	return ( 
		  <span className="time">{timeString}</span> 
	);
};
const ReplyButton = () => ( 
  <i className="fa fa-reply reply-button"/> 
);
const RetweetButton = ({count}) => ( 
	<span className="retweet-button">
	  <i className="fa fa-retweet"/> 
	  {getRetweetCount(count)}
	</span>
);
const LikeButton = ({count}) => ( 
	<span className="like-button">
	  <i className="fa fa-heart"/> 
		{count > 0 && 
		<span className="like-count">
				{count}
		</span>}	
	</span>
);
const MoreOptionsButton = () => ( 
  <i className="fa fa-ellipsis-h more-options-button"/> 
);

// Components
function Tweet({ tweet }) { 
	return ( 
		<div className="tweet">
		  <Avatar hash={tweet.gravatar} />
		  <div className="content">
		    <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
	            <Message text={tweet.message}/>
		    <div className="buttons">
		      <ReplyButton/>
		      <RetweetButton count={tweet.retweets}/>
		      <LikeButton count={tweet.likes}/>
		      <MoreOptionsButton/>
		    </div>
		  </div>
		</div>
	);
}

function Avatar({ hash }) {
	var url = `https://www.gravatar.com/avatar/${hash}`; // Backticks = template strings
	return ( 
		<img 
		  src={url}
		  className="avatar"
		  alt="avatar" />
	);
}

function NameWithHandle({ author }) { 
	const { name, handle } = author; // Fancy destructuring way
	//var name = author.name;
	//var handle = author.handle;
	return ( 
		<span className="name-with-handle">
		  <span className="name">{name}</span>
		  <span className="handle">@{handle}</span>
		</span>
	);
}	

function Message({ text }) {
	return (
		<div className="message">
                  {text}
		</div>
	);
}


var testTweet = { 
	message: "Something about cats.",
	gravatar: "xyz",
	author: { 
		handle: "catperson",
		name: "IAMA Cat Person"
	},
	likes: 2,
	retweets: 100,
	timestamp: "2017-08-03 10:00:00"
};

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));
