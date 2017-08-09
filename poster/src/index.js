import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Poster({content})
{
				const image = content.image;
				const title = content.title;
				const text = content.text;
				const titleFirstLetter = title.substring(0,1);
				const titleLastLetter = title.substring(title.length-1, title.length);
				const titleMiddle = title.substring(1, title.length-1);

				return (
								<div className="poster-outline">
												<div className="poster-image-frame">&nbsp;
													<div className="poster-image">
													  <img src={image} width="150px"/>
												  </div>
												</div>
												<div className="poster-text-container">
													<div className="poster-title">{titleFirstLetter}
												  <span className="smaller">{titleMiddle}</span>
													{titleLastLetter}</div>
													<div className="poster-text">{text}</div>
												</div>
								</div>
				);
}

var poster = { 
				image: "http://ecodile.com/wp-content/uploads/2016/08/react-logo-1000-transparent.png",
				title: "REACT",
				text: "Why Be Proactive?"
};

ReactDOM.render(<Poster content={poster} />, document.getElementById('root'));
