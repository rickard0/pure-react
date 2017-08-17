import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Tweet from './tweet';
import './index.css';

const TweetList = ({tweets}) =>
  <div className="tweet-container">
    {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)}
  </div>;

const tweets = [
  {
    message: 'Something about cats.',
    gravatar: 'xyz',
    author: {
      handle: 'catperson',
      name: 'IAMA Cat Person',
    },
    likes: 2,
    retweets: 5,
    timestamp: '2017-08-03 10:00:00',
  },
  {
    message: 'Something about dogs.',
    gravatar: 'abc',
    author: {
      handle: 'dogperson',
      name: 'IAMA Dog Person',
    },
    likes: 0,
    retweets: 0,
    timestamp: '2017-08-17 12:00:00',
  },
  {
    message: 'Mine haustier ist gut.',
    gravatar: 'grm',
    author: {
      handle: 'hans',
      name: 'Who is this hans?',
    },
    likes: 1,
    retweets: 100,
    timestamp: '2017-08-17 14:30:00',
  },
];

ReactDOM.render(<TweetList tweets={tweets} />, document.getElementById('root'));
