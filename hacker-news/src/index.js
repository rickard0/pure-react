import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function App() {
  const headlines = [
    {
      number: '1',
      title: 'The Librem 5: A Matrix-Native FLOSS Smartphone',
      domain: 'matrix.org',
      url:
        'https://matrix.org/blog/2017/08/24/the-librem-5-from-purism-a-matrix-native-smartphone/',
      points: '193',
      poster: 'Arathorn',
      postTime: '2017-08-24 7:54:00',
      commentCount: '70',
    },
    {
      number: '2',
      title: 'Water Found Deep Inside the Moon',
      domain: 'nationalgeographic.com',
      url:
        'http://news.nationalgeographic.com/2017/07/water-moon-formed-volcanoes-glass-space-science/',
      points: '81',
      poster: 'chenster',
      postTime: '2017-08-24 7:54:00',
      commentCount: '38',
    },
    {
      number: '3',
      title: 'Uber, Mired in Corporate Scandals, Sees Uptick in Bookings',
      domain: 'nytimes.com',
      url:
        'https://www.nytimes.com/2017/08/23/technology/uber-mired-in-corporate-scandals-sees-uptick-in-bookings.html',
      points: '40',
      poster: 'carlchenet',
      postTime: '2017-08-24 8:54:00',
      commentCount: '32',
    },
    {
      number: '4',
      title: 'Feather: Open-source icons',
      domain: 'nytimes.com',
      url:
        'https://www.nytimes.com/2017/08/23/technology/uber-mired-in-corporate-scandals-sees-uptick-in-bookings.html',
      points: '554',
      poster: 'mcone',
      postTime: '2017-08-24 8:54:00',
      commentCount: '89',
    }
  ];
  return (
    <div>
      <Header />
      {headlines.map(h => <Article article={h} />)}
    </div>
  );
}

function Header() {
  return (
    <div className="header-bar">
      <i className="fa fa-y-combinator" aria-hidden="true" />
      <span className="header-title">Hacker News</span>
      <span className="header-item">new |</span>
      <span className="header-item">threads |</span>
      <span className="header-item">comments |</span>
      <span className="header-item">show |</span>
      <span className="header-item">ask |</span>
      <span className="header-item">jobs |</span>
      <span className="header-item">submit</span>
    </div>
  );
}

function Article({article}) {
  return (
    <div className="article-line">
      {article.number}.&nbsp;<i
        className="fa fa-sort-asc"
        aria-hidden="true"
      />&nbsp;
      <span className="article-title">
        {article.title}
        <div className="article-details">
          <span>
            {article.points} points
          </span>
          <span>
            by {article.poster}
          </span>
          <span>time here</span>
          <span>| hide |</span>
          <span>
            {article.commentCount} comments
          </span>
        </div>
      </span>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
